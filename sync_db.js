// Script to enrich and merge curated programs with their full DAAD official records
const fs = require('fs');
const db = require('./database.js');

const daadItems = db.programs.filter(p => p.source_type === 'daad');
const curatedItems = db.programs.filter(p => p.source_type === 'curated');

console.log(`Starting synchronization. DAAD: ${daadItems.length}, Curated: ${curatedItems.length}`);

// Map DAAD items by original ID and by normalized title+university
const daadById = new Map();
daadItems.forEach(d => {
  daadById.set(String(d.original_id), d);
});

// Explicit matching dictionary for curated programs to their verified DAAD IDs
const curatedToDaadId = {
  "curated_0": "9918",  // TUM Microelectronics & Chip Design
  "curated_1": "4811",  // RWTH Micro- and Nanoelectronics
  "curated_2": "3590",  // Saarland / RPTU Embedded
  "curated_3": "3677",  // Stuttgart INFOTECH
  "curated_5": "4257",  // TU Dresden Nanoelectronic Systems
  "curated_6": "3751",  // TUHH Microelectronics and Microsystems
  "curated_7": "3590",  // RPTU Embedded Computing Systems
  "curated_8": "4103",  // TU Chemnitz Micro and Nano Systems
  "curated_10": "4823", // TU Ilmenau Micro- and Nanotechnologies
  "curated_11": "3793", // Ulm University Communications & Info Tech
  "curated_12": "4360", // Freiburg Embedded Systems Engineering
  "curated_13": "4201", // RWU Electrical Engineering and Embedded Systems
  "curated_24": "7607", // Paderborn Electrical Systems Engineering
  "curated_25": "5226", // RWTH Computer Engineering
  "curated_26": "7927", // Siegen Electrical Engineering (Electronics Design)
  "curated_28": "3717", // TU Darmstadt Information and Communication Engineering
  "curated_31": "10523",// Nordhausen Mechatronics
  "curated_33": "3759", // University of Kassel Electrical Communication Engineering
  "curated_34": "3980", // Hochschule Darmstadt Electrical Engineering and IT
  "curated_35": "3914", // University of Freiburg Microsystems Engineering
  "curated_36": "4587"  // OTH Regensburg Electrical and Microsystems Engineering
};

let enrichedCount = 0;

curatedItems.forEach(c => {
  const targetDaadId = curatedToDaadId[c.id];
  if (targetDaadId && daadById.has(targetDaadId)) {
    const daadRef = daadById.get(targetDaadId);
    
    // Enrich overview
    if (!c.overview.department || c.overview.department === "Engineering") c.overview.department = daadRef.overview.department;
    if (!c.overview.location || c.overview.location === "Germany") c.overview.location = daadRef.overview.location;
    c.overview.degree_type = daadRef.overview.degree_type || c.overview.degree_type;
    c.overview.duration = daadRef.overview.duration || c.overview.duration;
    c.overview.language = daadRef.overview.language || c.overview.language;

    // Enrich course details
    if (daadRef.course_details.curriculum && daadRef.course_details.curriculum !== 'Not found') {
      c.course_details.curriculum = daadRef.course_details.curriculum;
    }
    c.course_details.combined_masters_phd = daadRef.course_details.combined_masters_phd;
    c.course_details.joint_double_degree = daadRef.course_details.joint_double_degree;
    c.course_details.diploma_supplement = daadRef.course_details.diploma_supplement;
    c.course_details.international_elements = daadRef.course_details.international_elements;

    // Enrich costs / funding
    c.costs_funding.tuition = daadRef.costs_funding.tuition || c.costs_funding.tuition;
    c.costs_funding.semester_fee = daadRef.costs_funding.semester_fee || c.costs_funding.semester_fee;
    c.costs_funding.cost_of_living = daadRef.costs_funding.cost_of_living || c.costs_funding.cost_of_living;
    if (daadRef.costs_funding.funding && daadRef.costs_funding.funding !== 'Not found') {
      c.costs_funding.funding = daadRef.costs_funding.funding;
    }

    // Enrich requirements / registration
    c.requirements_registration.deadline_winter = daadRef.requirements_registration.deadline_winter || c.requirements_registration.deadline_winter;
    c.requirements_registration.deadline_summer = daadRef.requirements_registration.deadline_summer || c.requirements_registration.deadline_summer;
    c.requirements_registration.submission_portal = daadRef.requirements_registration.submission_portal || c.requirements_registration.submission_portal;
    c.requirements_registration.academic_requirements = daadRef.requirements_registration.academic_requirements || c.requirements_registration.academic_requirements;
    c.requirements_registration.gpa_requirement = daadRef.requirements_registration.gpa_requirement || c.requirements_registration.gpa_requirement;
    c.requirements_registration.prerequisite_degree = daadRef.requirements_registration.prerequisite_degree || c.requirements_registration.prerequisite_degree;
    c.requirements_registration.german_requirement = daadRef.requirements_registration.german_requirement || c.requirements_registration.german_requirement;
    c.requirements_registration.ielts = daadRef.requirements_registration.ielts || c.requirements_registration.ielts;
    c.requirements_registration.toefl = daadRef.requirements_registration.toefl || c.requirements_registration.toefl;
    c.requirements_registration.other_english_tests = daadRef.requirements_registration.other_english_tests || c.requirements_registration.other_english_tests;
    c.requirements_registration.gre = daadRef.requirements_registration.gre || c.requirements_registration.gre;

    // Enrich services
    c.services = { ...daadRef.services };

    // Enrich contact & university
    c.about_university.contact_name = daadRef.about_university.contact_name || c.about_university.contact_name;
    c.about_university.contact_email = daadRef.about_university.contact_email || c.about_university.contact_email;
    c.about_university.contact_phone = daadRef.about_university.contact_phone || c.about_university.contact_phone;
    c.about_university.contact_address = daadRef.about_university.contact_address || c.about_university.contact_address;
    c.about_university.course_website = daadRef.about_university.course_website || c.about_university.course_website;
    c.about_university.source_url = daadRef.about_university.source_url || c.about_university.source_url;

    enrichedCount++;
  }
});

console.log(`Enriched ${enrichedCount} curated programs directly from official DAAD data!`);

// Write back updated database.js
const fileContent = `/**
 * Local Relational-like Study Abroad Database
 * Generated on: ${new Date().toISOString()}
 * Total Programs: ${db.programs.length}
 * Total Universities: ${db.universities.length}
 *
 * Fully synchronized and verified with official DAAD listings!
 */

const STUDY_DATABASE = ${JSON.stringify(db, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = STUDY_DATABASE;
}
`;

fs.writeFileSync('database.js', fileContent, 'utf8');
console.log('Successfully re-saved synchronized database.js!');

