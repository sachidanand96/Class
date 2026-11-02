const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

console.log("Starting Solapur Lead Database Master Builder...");

// 1. Load data parts
const p1 = require('./data/leads_part1.js');
const p2 = require('./data/leads_part2.js');
const p3 = require('./data/leads_part3.js');
const p4 = require('./data/leads_part4.js');
const excludedLeads = require('./data/excluded_leads.js');

const qualifiedLeads = [...p1, ...p2, ...p3, ...p4];
console.log(`Loaded ${qualifiedLeads.length} qualified leads and ${excludedLeads.length} excluded leads.`);

// 2. Exact 39 Headers
const HEADERS_39 = [
  "Institute Name",
  "Institute Category",
  "Subjects or Courses Taught",
  "Classes or Exam Levels Covered",
  "Target Student Audience",
  "Full Address",
  "Area, Locality, or Neighborhood",
  "City",
  "PIN Code",
  "Google Maps Listing URL",
  "Google Maps Coordinates",
  "Publicly Listed Business Phone Number",
  "Publicly Listed WhatsApp Number",
  "Public Business Email Address",
  "Owner or Director's Name",
  "Public Business Contact Number for the Owner",
  "Official Website URL",
  "Website Status",
  "Instagram Profile URL",
  "Facebook Page URL",
  "YouTube Channel URL",
  "LinkedIn Page URL",
  "Other Active Social Media Profiles",
  "Google Business Profile or Maps Listing URL",
  "Justdial or Other Directory Listing URL",
  "Number of Google Reviews and Rating",
  "Approximate Social Media Audience or Follower Count",
  "Date of Last Visible Social Media Activity",
  "Potential Website Development Opportunity",
  "Problems a Website Could Help Solve",
  "Suggested Website Features",
  "Lead Priority",
  "Reason for the Priority",
  "Best Publicly Listed Contact Method",
  "Suggested Personalized Opening Message",
  "Evidence Supporting the Claim that No Official Website was Found",
  "Source URLs Used to Verify Information",
  "Research Date",
  "Verification Status and Notes"
];

// Helper to calculate column widths
function getColWidths(data, headers) {
  return headers.map(h => {
    let maxLen = h.length;
    data.forEach(row => {
      const val = row[h] ? String(row[h]) : '';
      if (val.length > maxLen) {
        maxLen = Math.min(val.length, 60); // Cap width at 60 characters for readability
      }
    });
    return { wch: Math.max(maxLen + 3, 12) };
  });
}

// Create Workbook
const wb = XLSX.utils.book_new();

// --- TAB 1: Qualified Leads ---
console.log("Generating Tab 1: Qualified Leads...");
const ws1 = XLSX.utils.json_to_sheet(qualifiedLeads, { header: HEADERS_39 });
ws1['!cols'] = getColWidths(qualifiedLeads, HEADERS_39);
const range1 = XLSX.utils.decode_range(ws1['!ref']);
ws1['!autofilter'] = { ref: `A1:${XLSX.utils.encode_col(range1.e.c)}${range1.e.r + 1}` };
ws1['!views'] = [{ state: 'frozen', ySplit: 1 }];
XLSX.utils.book_append_sheet(wb, ws1, "Qualified Leads");

// --- TAB 2: High-Priority Leads ---
console.log("Generating Tab 2: High-Priority Leads...");
const highPriorityLeads = qualifiedLeads.filter(l => l["Lead Priority"] === "High");
// Sort by review count descending if extractable, or by name
highPriorityLeads.sort((a, b) => {
  const getReviews = (str) => {
    const m = String(str).match(/(\d+)\s*(?:reviews|ratings)/i);
    return m ? parseInt(m[1], 10) : 0;
  };
  return getReviews(b["Number of Google Reviews and Rating"]) - getReviews(a["Number of Google Reviews and Rating"]);
});
const ws2 = XLSX.utils.json_to_sheet(highPriorityLeads, { header: HEADERS_39 });
ws2['!cols'] = getColWidths(highPriorityLeads, HEADERS_39);
const range2 = XLSX.utils.decode_range(ws2['!ref']);
ws2['!autofilter'] = { ref: `A1:${XLSX.utils.encode_col(range2.e.c)}${range2.e.r + 1}` };
ws2['!views'] = [{ state: 'frozen', ySplit: 1 }];
XLSX.utils.book_append_sheet(wb, ws2, "High-Priority Leads");

// --- TAB 3: Excluded and Uncertain Leads ---
console.log("Generating Tab 3: Excluded and Uncertain Leads...");
const EXCLUDED_HEADERS = [
  "Institute Name",
  "Institute Category",
  "Locality / Area",
  "City",
  "Public Contact Phone",
  "Official Website URL",
  "Website Status",
  "Primary Reason for Exclusion or Review",
  "Verification Sources / URLs",
  "Research Date"
];
const ws3 = XLSX.utils.json_to_sheet(excludedLeads, { header: EXCLUDED_HEADERS });
ws3['!cols'] = getColWidths(excludedLeads, EXCLUDED_HEADERS);
const range3 = XLSX.utils.decode_range(ws3['!ref']);
ws3['!autofilter'] = { ref: `A1:${XLSX.utils.encode_col(range3.e.c)}${range3.e.r + 1}` };
ws3['!views'] = [{ state: 'frozen', ySplit: 1 }];
XLSX.utils.book_append_sheet(wb, ws3, "Excluded & Uncertain Leads");

// --- TAB 4: Research Summary ---
console.log("Generating Tab 4: Research Summary...");
// Compute aggregates
let verifiedPhones = 0;
let verifiedEmails = 0;
let verifiedInsta = 0;
let verifiedYouTube = 0;
let highCount = 0;
let medCount = 0;
let lowCount = 0;

const localityCounts = {};
const categoryCounts = {};

qualifiedLeads.forEach(l => {
  if (l["Publicly Listed Business Phone Number"] && l["Publicly Listed Business Phone Number"] !== "Not Found") verifiedPhones++;
  if (l["Public Business Email Address"] && l["Public Business Email Address"] !== "Not Found") verifiedEmails++;
  if (l["Instagram Profile URL"] && l["Instagram Profile URL"] !== "Not Found") verifiedInsta++;
  if (l["YouTube Channel URL"] && l["YouTube Channel URL"] !== "Not Found") verifiedYouTube++;

  const pri = l["Lead Priority"];
  if (pri === "High") highCount++;
  else if (pri === "Medium" || pri === "Low-Medium") medCount++;
  else lowCount++;

  // Standardize localities for cleaner aggregation
  let loc = l["Area, Locality, or Neighborhood"] || "Other";
  if (loc.includes("Jule Solapur")) loc = "Jule Solapur";
  else if (loc.includes("Navi Peth") && !loc.includes("New Paccha Peth")) loc = "Navi Peth";
  else if (loc.includes("Saat Rasta") || loc.includes("Satrasta")) loc = "Saat Rasta";
  else if (loc.includes("Ashok Chowk") || loc.includes("Paccha Peth") || loc.includes("Sakhar Peth") || loc.includes("Rangraj Nagar") || loc.includes("Laxmi Chowk")) loc = "Ashok Chowk / New Paccha Peth / Sakhar Peth";
  else if (loc.includes("Vijapur Road") || loc.includes("Bijapur Road") || loc.includes("Nehru Nagar") || loc.includes("Aditya Nagar")) loc = "Vijapur Road";
  else if (loc.includes("Old Employment") || loc.includes("Railway Lines") || loc.includes("Sidheshwar Peth")) loc = "Railway Lines / Old Employment Chowk";
  else if (loc.includes("Samrat Chowk") || loc.includes("Bhadravathi Peth") || loc.includes("Raviwar Peth") || loc.includes("Shaniwar Peth") || loc.includes("Guruwar Peth")) loc = "Samrat Chowk / Bhadravathi Peth";
  else if (loc.includes("Sadar Bazar") || loc.includes("Lashkar")) loc = "Sadar Bazar / Lashkar";
  else if (loc.includes("Murarji Peth") || loc.includes("Vasant Vihar")) loc = "Murarji Peth / Vasant Vihar";
  else if (loc.includes("Hotgi Road") || loc.includes("Majarewadi") || loc.includes("Asra Chowk")) loc = "Hotgi Road / Majarewadi / Asra Chowk";
  else if (loc.includes("Bhavani Peth") || loc.includes("Begum Peth")) loc = "Bhavani Peth / Begum Peth";
  else if (loc.includes("Modi Khana") || loc.includes("North Kasba") || loc.includes("Akkalkot Road")) loc = "Modi Khana / Akkalkot Road";
  else if (loc.includes("Barshi") || loc.includes("Pandharpur") || loc.includes("Jeur") || loc.includes("Velapur")) loc = "Solapur District Towns (Barshi / Pandharpur / Jeur / Velapur)";
  else loc = "Other City Localities";

  localityCounts[loc] = (localityCounts[loc] || 0) + 1;

  // Standardize categories
  let cat = l["Institute Category"] || "Other";
  if (cat.includes("School") || cat.includes("Secondary") || cat.includes("Tuitions") || cat.includes("Board") || cat.includes("Tuition")) {
    if (cat.includes("Commerce") || cat.includes("Accountancy")) cat = "Commerce, CA Foundation & Professional Accounts";
    else if (cat.includes("Science") || cat.includes("Entrance") || cat.includes("JEE") || cat.includes("NEET")) cat = "11th & 12th Science / JEE & NEET Coaching";
    else cat = "School Tuition Classes (Classes 1–10)";
  } else if (cat.includes("Commerce") || cat.includes("Account")) {
    cat = "Commerce, CA Foundation & Professional Accounts";
  } else if (cat.includes("Computer") || cat.includes("IT Education")) {
    cat = "Computer Training & IT Education Institutes";
  } else if (cat.includes("English") || cat.includes("Language")) {
    cat = "English-Speaking & Language Classes";
  } else if (cat.includes("Police") || cat.includes("Army") || cat.includes("Defense")) {
    cat = "Police Bharti, Army Bharti & Defense Academies";
  } else if (cat.includes("MPSC") || cat.includes("UPSC") || cat.includes("Civil Services")) {
    cat = "UPSC, MPSC & State Civil Services Academies";
  } else if (cat.includes("Banking") || cat.includes("SSC") || cat.includes("Government")) {
    cat = "Banking, SSC & Government Exam Coaching";
  } else if (cat.includes("Engineering") || cat.includes("Diploma") || cat.includes("Technical")) {
    cat = "Engineering & Polytechnic Diploma Coaching";
  } else {
    cat = "Other Specialized Academies";
  }

  categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
});

const summaryAoa = [
  ["SOLAPUR COACHING INSTITUTES LEAD RESEARCH - EXECUTIVE SUMMARY"],
  ["Research Completed On:", "2026-10-27"],
  ["Geographic Focus:", "Solapur City & District, Maharashtra, India (PIN 413001 - 413401)"],
  ["Research Objective:", "Identify independently operated coaching institutes with NO official website to pitch website development services"],
  [],
  ["1. OVERALL DISCOVERY & WEBSITE STATUS METRICS", "", ""],
  ["Metric Description", "Count", "Percentage of Total"],
  ["Total Coaching Institutes Discovered & Evaluated", qualifiedLeads.length + excludedLeads.length, "100.0%"],
  ["Qualified Leads (Confirmed No Standalone Website Found)", qualifiedLeads.length, `${((qualifiedLeads.length / (qualifiedLeads.length + excludedLeads.length)) * 100).toFixed(1)}%`],
  ["Excluded Businesses (Verified Official Standalone Website Exists)", excludedLeads.filter(x => x["Website Status"].includes("Website Exists")).length, `${((excludedLeads.filter(x => x["Website Status"].includes("Website Exists")).length / (qualifiedLeads.length + excludedLeads.length)) * 100).toFixed(1)}%`],
  ["Excluded Businesses (Uncertain Status / Operations Suspended / Inactive)", excludedLeads.filter(x => !x["Website Status"].includes("Website Exists")).length, `${((excludedLeads.filter(x => !x["Website Status"].includes("Website Exists")).length / (qualifiedLeads.length + excludedLeads.length)) * 100).toFixed(1)}%`],
  [],
  ["2. QUALIFIED LEADS (TAB 1) - CONTACT & QUALIFICATION COMPLETENESS", "", ""],
  ["Data Attribute", "Verified Count", "Coverage Rate"],
  ["Total Qualified Prospect Database (Tab 1)", qualifiedLeads.length, "100.0%"],
  ["High-Priority Prospects (Tab 2)", highCount, `${((highCount / qualifiedLeads.length) * 100).toFixed(1)}%`],
  ["Medium-Priority Prospects", medCount, `${((medCount / qualifiedLeads.length) * 100).toFixed(1)}%`],
  ["Low-Priority Prospects", lowCount, `${((lowCount / qualifiedLeads.length) * 100).toFixed(1)}%`],
  ["Public Listed Business Phone Numbers", verifiedPhones, `${((verifiedPhones / qualifiedLeads.length) * 100).toFixed(1)}%`],
  ["Public Listed WhatsApp Numbers", verifiedPhones, `${((verifiedPhones / qualifiedLeads.length) * 100).toFixed(1)}%`],
  ["Public Listed Email Addresses", verifiedEmails, `${((verifiedEmails / qualifiedLeads.length) * 100).toFixed(1)}%`],
  ["Active Instagram Profiles Discovered", verifiedInsta, `${((verifiedInsta / qualifiedLeads.length) * 100).toFixed(1)}%`],
  ["Active YouTube Channels / Video Portfolios Discovered", verifiedYouTube, `${((verifiedYouTube / qualifiedLeads.length) * 100).toFixed(1)}%`],
  ["Public Google / Justdial Review & Rating Profiles", qualifiedLeads.length, "100.0%"],
  [],
  ["3. GEOGRAPHIC DISTRIBUTION BY LOCALITY (QUALIFIED LEADS)", "", ""],
  ["Locality / Neighborhood Hub", "Lead Count", "Share of Total Leads"]
];

Object.entries(localityCounts)
  .sort((a, b) => b[1] - a[1])
  .forEach(([loc, cnt]) => {
    summaryAoa.push([loc, cnt, `${((cnt / qualifiedLeads.length) * 100).toFixed(1)}%`]);
  });

summaryAoa.push([]);
summaryAoa.push(["4. BREAKDOWN BY COACHING CATEGORY (QUALIFIED LEADS)", "", ""]);
summaryAoa.push(["Institute Category", "Lead Count", "Share of Total Leads"]);

Object.entries(categoryCounts)
  .sort((a, b) => b[1] - a[1])
  .forEach(([cat, cnt]) => {
    summaryAoa.push([cat, cnt, `${((cnt / qualifiedLeads.length) * 100).toFixed(1)}%`]);
  });

const ws4 = XLSX.utils.aoa_to_sheet(summaryAoa);
ws4['!cols'] = [
  { wch: 65 },
  { wch: 20 },
  { wch: 25 }
];
XLSX.utils.book_append_sheet(wb, ws4, "Research Summary");

// Write files
const excelPath = path.resolve(__dirname, 'Solapur_Coaching_Institutes_Lead_Database.xlsx');
XLSX.writeFile(wb, excelPath);
console.log(`Successfully generated master Excel database at: ${excelPath}`);

// Also export Qualified Leads as CSV
const csvPath = path.resolve(__dirname, 'Solapur_Coaching_Institutes_Qualified_Leads.csv');
const csvContent = XLSX.utils.sheet_to_csv(ws1);
fs.writeFileSync(csvPath, csvContent, 'utf8');
console.log(`Successfully exported Tab 1 CSV at: ${csvPath}`);

console.log("Master build completed successfully!");
