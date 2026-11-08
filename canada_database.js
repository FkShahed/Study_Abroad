// ====================================================================
// CANADA DATABASE — Master Database for Canadian Master's Programs
// Status: STRUCTURE READY, DATA NOT YET COLLECTED
// Same schema as germany_database.js's GERMANY_DB — fill `programs: []`
// with objects following the same shape (see germany_database.js for
// the exact field structure: overview, course_details, costs_funding,
// requirements_registration, services, about_university,
// official_website_data, ranking, gpa_fit, gpa_fit_note, tier, etc.)
// ====================================================================
const CANADA_DB = {
  "metadata": {
    "version": "1.0 (Structure only — no data collected yet)",
    "last_updated": "2026-11-08T00:00:00.000Z",
    "country": "Canada",
    "search_criteria": [
      "TODO: define once research starts — e.g. Course type: Master's degree",
      "TODO: Subject Groups: Engineering Sciences (VLSI/RTL/Embedded focus, matching Germany dataset's priorities)",
      "TODO: Teaching Language: English"
    ],
    "total_programs": 0,
    "description": "Placeholder for Canadian Master's programs (RTL/VLSI/Embedded/Electrical Engineering focus) — to be populated via the same research process used for Germany."
  },
  "programs": [],
  "aps_info": null,
  "gpa_conversion_info": {
    "candidate_gpa": "2.83/4.0 (NSU, EEE — same candidate profile as Germany dataset)",
    "note": "Canada uses different GPA conversion conventions per province/university (often out of 4.0, 4.3, or a percentage scale) — conversion methodology needs separate research once Canadian universities are added. Do NOT reuse the German modified-Bavarian-formula logic for Canada."
  },
  "funding_options": []
};
