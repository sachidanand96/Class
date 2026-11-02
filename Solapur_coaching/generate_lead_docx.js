const fs = require('fs');
const path = require('path');
const XLSX = require('E:/Freelance/Solapur_coaching/node_modules/xlsx');
const docx = require('E:/Freelance/Solapur_coaching/node_modules/docx');

const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  WidthType,
  ShadingType
} = docx;

// Load Excel workbook
const wbPath = 'E:/Freelance/Solapur_coaching/Solapur_Coaching_Institutes_Lead_Database.xlsx';
const wb = XLSX.readFile(wbPath);

const hpSheet = wb.Sheets['High-Priority Leads'];
const qlSheet = wb.Sheets['Qualified Leads'];

const hpData = XLSX.utils.sheet_to_json(hpSheet);
const qlData = XLSX.utils.sheet_to_json(qlSheet);

const lead1 = hpData[0]; // Join Me Commerce Classes - Jule Solapur Branch
const lead2 = qlData[0]; // Kamatkar Classes (Kamatkar Academy) - Head Branch

console.log('Loaded Lead 1:', lead1['Institute Name']);
console.log('Loaded Lead 2:', lead2['Institute Name']);

// Styling Constants
const COLOR_PRIMARY = "1E3A8A";   // Deep Navy / Dark Blue
const COLOR_SECONDARY = "2563EB"; // Vibrant Blue
const COLOR_DARK = "0F172A";      // Dark Slate for text
const COLOR_MUTED = "475569";     // Muted Gray
const COLOR_BG_HEADER = "1E3A8A"; // Table Header BG
const COLOR_BG_ROW1 = "F8FAFC";   // Alternate Row 1 (Light slate)
const COLOR_BG_ROW2 = "FFFFFF";   // Alternate Row 2 (White)
const COLOR_BG_CALLOUT = "EFF6FF";// Callout box light blue
const COLOR_BORDER = "CBD5E1";    // Soft gray border

const borderStyleNone = { style: BorderStyle.NONE, size: 0, color: "auto" };
const borderStyleThin = { style: BorderStyle.SINGLE, size: 4, color: COLOR_BORDER };

function createCell(text, isHeader = false, isAlt = false, widthPercent = 70, bold = false) {
  return new TableCell({
    width: { size: widthPercent, type: WidthType.PERCENTAGE },
    shading: {
      type: ShadingType.CLEAR,
      fill: isHeader ? COLOR_BG_HEADER : (isAlt ? COLOR_BG_ROW1 : COLOR_BG_ROW2),
    },
    margins: { top: 120, bottom: 120, left: 160, right: 160 },
    borders: {
      top: borderStyleThin,
      bottom: borderStyleThin,
      left: borderStyleThin,
      right: borderStyleThin,
    },
    children: [
      new Paragraph({
        alignment: isHeader ? AlignmentType.LEFT : AlignmentType.LEFT,
        spacing: { before: 40, after: 40, line: 240 },
        children: [
          new TextRun({
            text: String(text || "Not Found"),
            bold: isHeader || bold,
            color: isHeader ? "FFFFFF" : (bold ? COLOR_PRIMARY : COLOR_DARK),
            size: isHeader ? 21 : 20, // 10-10.5 pt
            font: "Segoe UI",
          }),
        ],
      }),
    ],
  });
}

function createFieldRow(fieldNumber, fieldName, fieldValue, isAlt) {
  const labelText = `${fieldNumber}. ${fieldName}`;
  const cellLeft = createCell(labelText, false, isAlt, 32, true);
  const cellRight = createCell(fieldValue, false, isAlt, 68, false);
  return new TableRow({
    children: [cellLeft, cellRight],
  });
}

function createLeadSection(lead, leadTitle, tabSource) {
  const children = [];

  // Header Title for the lead
  children.push(
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 300, after: 120 },
      children: [
        new TextRun({
          text: leadTitle,
          bold: true,
          color: COLOR_PRIMARY,
          size: 32, // 16pt
          font: "Segoe UI",
        }),
      ],
    }),
    new Paragraph({
      spacing: { before: 0, after: 200 },
      children: [
        new TextRun({
          text: `Source in Database: `,
          bold: true,
          color: COLOR_MUTED,
          size: 20,
          font: "Segoe UI",
        }),
        new TextRun({
          text: `${tabSource}  |  Lead Priority: `,
          color: COLOR_MUTED,
          size: 20,
          font: "Segoe UI",
        }),
        new TextRun({
          text: `${lead['Lead Priority']} Priority`,
          bold: true,
          color: "16A34A", // Green
          size: 20,
          font: "Segoe UI",
        }),
        new TextRun({
          text: `  |  Verification: `,
          color: COLOR_MUTED,
          size: 20,
          font: "Segoe UI",
        }),
        new TextRun({
          text: `${lead['Website Status']}`,
          bold: true,
          color: "DC2626", // Red for No Website
          size: 20,
          font: "Segoe UI",
        }),
      ],
    })
  );

  // Callout Box: Quick Pitch Highlight
  children.push(
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              shading: { type: ShadingType.CLEAR, fill: COLOR_BG_CALLOUT },
              margins: { top: 160, bottom: 160, left: 200, right: 200 },
              borders: {
                left: { style: BorderStyle.SINGLE, size: 24, color: COLOR_SECONDARY }, // Thick left bar
                top: borderStyleThin,
                right: borderStyleThin,
                bottom: borderStyleThin,
              },
              children: [
                new Paragraph({
                  spacing: { before: 40, after: 40 },
                  children: [
                    new TextRun({
                      text: "💡 Executive Pitch Summary: ",
                      bold: true,
                      color: COLOR_PRIMARY,
                      size: 22,
                      font: "Segoe UI",
                    }),
                    new TextRun({
                      text: `${lead['Institute Name']} is one of Solapur's highest-reputed coaching brands with `,
                      color: COLOR_DARK,
                      size: 20,
                      font: "Segoe UI",
                    }),
                    new TextRun({
                      text: `${lead['Number of Google Reviews and Rating']}, `,
                      bold: true,
                      color: COLOR_DARK,
                      size: 20,
                      font: "Segoe UI",
                    }),
                    new TextRun({
                      text: `yet it possesses NO official standalone website. Currently, prospective students and parents only find third-party directories. Developing a custom, high-speed portal with batch schedules, faculty profiles, and online admissions offers immense ROI.`,
                      color: COLOR_DARK,
                      size: 20,
                      font: "Segoe UI",
                    }),
                  ],
                }),
                new Paragraph({
                  spacing: { before: 80, after: 40 },
                  children: [
                    new TextRun({
                      text: "🎯 Recommended Opening Hook: ",
                      bold: true,
                      color: COLOR_PRIMARY,
                      size: 21,
                      font: "Segoe UI",
                    }),
                    new TextRun({
                      text: `\"${lead['Suggested Personalized Opening Message']}\"`,
                      italics: true,
                      color: "1E293B",
                      size: 20,
                      font: "Segoe UI",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    new Paragraph({ spacing: { before: 200, after: 100 } })
  );

  // Grouped Fields Table
  const allFieldKeys = [
    // 1. Business Info
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
    // 2. Online Presence
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
    // 3. Sales Prospecting Information
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

  const tableHeaderRow = new TableRow({
    children: [
      createCell("ATTRIBUTE / FIELD (ALL 39 SPECIFICATIONS)", true, false, 32, true),
      createCell("VERIFIED LEAD DETAILS & RESEARCH DATA", true, false, 68, true),
    ],
  });

  const tableDataRows = allFieldKeys.map((key, index) => {
    return createFieldRow(index + 1, key, lead[key], index % 2 === 1);
  });

  children.push(
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [tableHeaderRow, ...tableDataRows],
    })
  );

  return children;
}

// Build Document
const doc = new Document({
  creator: "Antigravity Research",
  title: "Solapur Coaching Institutes - High Priority Lead Dossier",
  description: "Detailed lead intelligence dossier for the top high priority coaching institutes in Solapur without official websites.",
  sections: [
    {
      properties: {
        page: {
          margin: {
            top: 1000,
            bottom: 1000,
            left: 1200,
            right: 1200,
          },
        },
      },
      children: [
        // Document Banner / Title
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 100 },
          children: [
            new TextRun({
              text: "SOLAPUR COACHING INSTITUTES LEAD INTELLIGENCE",
              bold: true,
              size: 36, // 18pt
              color: COLOR_PRIMARY,
              font: "Segoe UI",
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 240 },
          children: [
            new TextRun({
              text: "First High-Priority Lead Dossier & Web Development Prospect Profile",
              bold: true,
              size: 24, // 12pt
              color: COLOR_SECONDARY,
              font: "Segoe UI",
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 360 },
          children: [
            new TextRun({
              text: "Extracted from: ",
              italics: true,
              color: COLOR_MUTED,
              size: 20,
              font: "Segoe UI",
            }),
            new TextRun({
              text: "Solapur_Coaching_Institutes_Lead_Database.xlsx",
              bold: true,
              color: COLOR_DARK,
              size: 20,
              font: "Segoe UI",
            }),
            new TextRun({
              text: "  |  Date: 2026-10-27 / 2026-11-01",
              color: COLOR_MUTED,
              size: 20,
              font: "Segoe UI",
            }),
          ],
        }),

        // Lead 1: From "High-Priority Leads" tab (Join Me Commerce Classes)
        ...createLeadSection(
          lead1,
          "LEAD PROFILE 1: Join Me Commerce Classes (Jule Solapur)",
          "Tab 2: 'High-Priority Leads' (Rank #1 Prospect)"
        ),

        // Spacing / Page Break Indicator
        new Paragraph({
          spacing: { before: 400, after: 200 },
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "─────────────────────────────────────────────────────────────────",
              color: COLOR_BORDER,
              size: 20,
            }),
          ],
        }),

        // Lead 2: From "Qualified Leads" tab (Kamatkar Classes)
        ...createLeadSection(
          lead2,
          "LEAD PROFILE 2: Kamatkar Classes (Sidheshwar Peth / Old Employment Chowk)",
          "Tab 1: 'Qualified Leads' (Row #1 Prospect)"
        ),
      ],
    },
  ],
});

// Write to files
async function buildDocx() {
  const buffer = await Packer.toBuffer(doc);
  const outPath1 = path.resolve('E:/Freelance/Solapur_coaching/First_High_Priority_Lead_Info.docx');
  const outPath2 = path.resolve('E:/Freelance/First_High_Priority_Lead_Info.docx');

  fs.writeFileSync(outPath1, buffer);
  console.log(`Saved DOCX to: ${outPath1} (${buffer.length} bytes)`);

  fs.writeFileSync(outPath2, buffer);
  console.log(`Saved DOCX to: ${outPath2} (${buffer.length} bytes)`);
}

buildDocx();
