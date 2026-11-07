// Database Builder: Normalizes DAAD_FULL and DATA into structured local relational-like tables
const fs = require('fs');

const daadContent = fs.readFileSync('daad_full199.js', 'utf8');
const daad = eval(daadContent.replace('const DAAD_FULL =', ''));

const dataContent = fs.readFileSync('data.js', 'utf8');
const cleanedData = dataContent.replace(/^const\s+DATA\s*=\s*/, '').trim().replace(/;\s*$/, '');
const DATA = JSON.parse(cleanedData);

console.log(`Loaded ${daad.length} DAAD entries and ${DATA.programs.length} curated programs.`);

const db = {
  metadata: {
    version: "2.0",
    created_at: new Date().toISOString(),
    description: "Normalized Local Relational Database for Study in Germany (Semiconductor/VLSI/Embedded) Track",
    total_programs: daad.length + DATA.programs.length,
    sections: [
      { id: "overview", name: "Overview", icon: "📋" },
      { id: "course_details", name: "Course Details", icon: "📚" },
      { id: "costs_funding", name: "Costs / Funding", icon: "💰" },
      { id: "requirements", name: "Requirements / Registration", icon: "📝" },
      { id: "services", name: "Services", icon: "🏠" },
      { id: "about_uni", name: "About the University", icon: "🏛️" }
    ]
  },
  universities: [],
  programs: []
};

const uniMap = new Map();

function getOrCreateUni(name, location, aboutNotes) {
  const cleanName = (name || "Unknown University").trim();
  if (uniMap.has(cleanName)) {
    const existing = uniMap.get(cleanName);
    if (!existing.about && aboutNotes && aboutNotes !== 'Not found') {
      existing.about = aboutNotes;
    }
    return existing.id;
  }
  const id = "uni_" + (uniMap.size + 1);
  const uniObj = {
    id: id,
    name: cleanName,
    location: location && location !== 'Not found' ? location : 'Germany',
    about: aboutNotes && aboutNotes !== 'Not found' ? aboutNotes : ''
  };
  uniMap.set(cleanName, uniObj);
  db.universities.push(uniObj);
  return id;
}

// 1. Process DAAD programs
daad.forEach((d, idx) => {
  const uniId = getOrCreateUni(d.university, d.location, d.notes);
  
  const prog = {
    id: "daad_" + (d.id || idx),
    original_id: d.id || String(idx),
    source_type: "daad",
    university_id: uniId,
    university_name: d.university,
    title: d.title,
    tier: "D",
    gpa_fit: "unknown",
    
    // Section 1: Overview
    overview: {
      department: d.department || "Not found",
      location: d.location || "Germany",
      degree_type: d.degree_type || "Master of Science",
      duration: d.duration || "4 semesters",
      language: d.language || "English",
      intake: (d.deadline_winter && d.deadline_winter !== "Not found" && !/not offered/i.test(d.deadline_winter)) ? "Winter" : "Summer",
      has_winter: Boolean(d.deadline_winter && d.deadline_winter !== "Not found" && !/not offered/i.test(d.deadline_winter)),
      has_summer: Boolean(d.deadline_summer && d.deadline_summer !== "Not found" && !/not offered/i.test(d.deadline_summer))
    },

    // Section 2: Course details
    course_details: {
      curriculum: d.curriculum || "Not found",
      combined_masters_phd: d.combined_masters_phd || "No",
      joint_double_degree: d.joint_double_degree || "No",
      diploma_supplement: d.diploma_supplement || "Not found",
      international_elements: d.international_elements || "Not found"
    },

    // Section 3: Costs / Funding
    costs_funding: {
      tuition: d.tuition || "None",
      semester_fee: d.semester_fee || "Not found",
      cost_of_living: d.cost_of_living || "Not found",
      funding: d.funding || "Not found"
    },

    // Section 4: Requirements / Registration
    requirements_registration: {
      deadline_winter: d.deadline_winter || "Not found",
      deadline_summer: d.deadline_summer || "Not found",
      submission_portal: d.submission_portal || "uni-assist / direct portal",
      academic_requirements: d.academic_requirements || "Not found",
      gpa_requirement: d.gpa_requirement || "Not listed",
      prerequisite_degree: d.prerequisite_degree || "Not found",
      german_requirement: d.german_requirement || "No minimum level required",
      ielts: d.ielts || "Not found",
      toefl: d.toefl || "Not found",
      other_english_tests: d.other_english_tests || "Not found",
      gre: d.gre || "Not mentioned",
      aps_required: "No (Bangladesh is exempt)"
    },

    // Section 5: Services
    services: {
      accommodation: d.accommodation || "Not found",
      part_time_work: d.part_time_work || "Not found",
      career_services: d.career_services || "Not found",
      other_support: d.other_support || "Not found"
    },

    // Section 6: About the university & Contact
    about_university: {
      notes: d.notes || "",
      contact_name: d.contact_name || "Not found",
      contact_email: d.contact_email || "Not found",
      contact_phone: d.contact_phone || "Not found",
      contact_address: d.contact_address || "Not found",
      course_website: d.course_website || "Not found",
      source_url: d.source_url || ""
    }
  };

  db.programs.push(prog);
});

// 2. Process Curated programs in DATA.programs
DATA.programs.forEach((p, idx) => {
  const uniId = getOrCreateUni(p.university, "Germany", p.note);

  const prog = {
    id: "curated_" + idx,
    original_id: "c_" + idx,
    source_type: "curated",
    university_id: uniId,
    university_name: p.university,
    title: p.program_name,
    tier: p.tier || "B",
    gpa_fit: p.gpa_fit || "moderate",
    gpa_fit_note: p.gpa_fit_note || "",

    // Section 1: Overview
    overview: {
      department: p.department || "Engineering",
      location: "Germany",
      degree_type: p.degree_type || "M.Sc.",
      duration: p.duration || "4 semesters",
      language: p.language || "English",
      intake: (p.deadline_winter && p.deadline_winter !== "Not found") ? "Winter" : "Summer",
      has_winter: Boolean(p.deadline_winter && p.deadline_winter !== "Not found"),
      has_summer: Boolean(p.deadline_summer && p.deadline_summer !== "Not found")
    },

    // Section 2: Course details
    course_details: {
      curriculum: p.prereqs ? `Core Topics & Prerequisites:\n${p.prereqs}` : (p.note || "Check official curriculum"),
      combined_masters_phd: "No",
      joint_double_degree: "No",
      diploma_supplement: "Yes",
      international_elements: "International Master's program taught in English"
    },

    // Section 3: Costs / Funding
    costs_funding: {
      tuition: p.tuition || "None",
      tuition_notes: p.tuition_notes || "",
      semester_fee: "~150 - 350 EUR per semester",
      cost_of_living: "~934 - 992 EUR per month",
      funding: "DAAD / Deutschlandstipendium (check university site)"
    },

    // Section 4: Requirements / Registration
    requirements_registration: {
      deadline_winter: p.deadline_winter || "Not found",
      deadline_summer: p.deadline_summer || "Not found",
      submission_portal: "Check university site / uni-assist",
      academic_requirements: p.prereqs || "Bachelor's degree in Electrical/Electronic Engineering or related discipline",
      gpa_requirement: p.min_gpa || "Holistic assessment",
      prerequisite_degree: p.prereqs || "BSc in EEE/CS/Related",
      german_requirement: p.german_req || "None",
      ielts: p.ielts || "Not found",
      toefl: p.toefl || "Not found",
      other_english_tests: "Not found",
      gre: p.gre || "Not required",
      work_exp_note: p.work_exp || "",
      aps_required: "No (Bangladesh is exempt)"
    },

    // Section 5: Services
    services: {
      accommodation: "Studentenwerk / WG-Gesucht / Private housing",
      part_time_work: "Permitted up to 140 full days (or 280 half days) per year under German Student Visa",
      career_services: "University Career Service & local hi-tech cluster partnerships",
      other_support: "International Office & Buddy Programme"
    },

    // Section 6: About the university & Contact
    about_university: {
      notes: p.note || "",
      contact_name: "International Master Admission Office",
      contact_email: "See official portal",
      contact_phone: "Not found",
      contact_address: p.university + ", Germany",
      course_website: p.source || "",
      source_url: p.source || ""
    }
  };

  db.programs.push(prog);
});

// Write to database.js
const fileContent = `/**
 * Local Relational-like Study Abroad Database
 * Generated on: ${db.metadata.created_at}
 * Total Programs: ${db.programs.length}
 * Total Universities: ${db.universities.length}
 *
 * Standard DAAD & Curated Schema Sections:
 * 1. Overview
 * 2. Course Details
 * 3. Costs / Funding
 * 4. Requirements / Registration
 * 5. Services
 * 6. About the University
 */

const STUDY_DATABASE = ${JSON.stringify(db, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = STUDY_DATABASE;
}
`;

fs.writeFileSync('database.js', fileContent, 'utf8');
console.log(`Successfully generated database.js with ${db.programs.length} programs across ${db.universities.length} universities!`);
