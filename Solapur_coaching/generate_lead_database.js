const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

console.log("Starting lead database builder...");

// All 39 Column Headers exactly as required:
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

// Qualified leads array will be populated
console.log("Headers initialized:", HEADERS_39.length, "columns.");
