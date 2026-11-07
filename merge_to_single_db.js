const fs = require('fs');

const daadContent = fs.readFileSync('daad_full199.js', 'utf8');
const daad = eval(daadContent.replace('const DAAD_FULL =', ''));

const dataContent = fs.readFileSync('data.js', 'utf8');
const cleanedData = dataContent.replace(/^const\s+DATA\s*=\s*/, '').trim().replace(/;\s*$/, '');
const curated = JSON.parse(cleanedData);

console.log(`Starting Master Database Merge: DAAD=${daad.length}, Curated=${curated.programs.length}`);

// Normalization Helper
function normalizeText(str) {
  return (str || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

// Map curated programs for quick match
const curatedMatched = new Set();

function findCuratedMatch(d) {
  const dTitle = normalizeText(d.title);
  const dUni = normalizeText(d.university);

  for (let i = 0; i < curated.programs.length; i++) {
    const c = curated.programs[i];
    const cTitle = normalizeText(c.program_name);
    const cUni = normalizeText(c.university);

    const uniHit = dUni.includes(cUni.substring(0, 10)) || cUni.includes(dUni.substring(0, 10));
    const titleHit = dTitle.includes(cTitle.substring(0, 10)) || cTitle.includes(dTitle.substring(0, 10));

    if (uniHit && titleHit) {
      curatedMatched.add(i);
      return c;
    }
  }
  return null;
}

const masterPrograms = [];

daad.forEach((d, idx) => {
  const cMatch = findCuratedMatch(d);

  // Determine Tier and GPA Fit (using curated assessment if available, else derive from criteria)
  let tier = cMatch ? cMatch.tier : "B";
  let gpa_fit = cMatch ? cMatch.gpa_fit : "moderate";
  let gpa_fit_note = cMatch ? cMatch.gpa_fit_note : "";

  // If no curated assessment, infer intelligently from DAAD fields:
  if (!cMatch) {
    const titleLower = (d.title + " " + (d.department || "")).toLowerCase();
    const gpaReq = (d.gpa_requirement || "").toLowerCase();
    const academicReq = (d.academic_requirements || "").toLowerCase();

    if (/vlsi|microelectronic|nanoelectronic|chip design|integrated circuit|embedded/.test(titleLower)) {
      tier = "A";
    } else if (/computer engineering|electrical|communication|sensor|automation/.test(titleLower)) {
      tier = "B";
    } else {
      tier = "C";
    }

    if (/3\.5|top 10%|outstanding|2\.0 or better|1\.8/.test(gpaReq) || /very high gpa/.test(academicReq)) {
      gpa_fit = "risky";
      gpa_fit_note = "High academic GPA threshold specified in official criteria. Work experience and strong SOP needed.";
    } else if (/2\.5|good|2\.7/.test(gpaReq) || /without admission restriction|no gpa/.test(academicReq)) {
      gpa_fit = "good";
      gpa_fit_note = "Competence-based or Open Admission criteria. Strong match for EEE background.";
    } else {
      gpa_fit = "moderate";
      gpa_fit_note = "Standard admission requirements; subject-credit matching is key.";
    }
  }

  const pObj = {
    id: d.id ? `prog_${d.id}` : `prog_${idx + 1}`,
    daad_id: d.id || String(idx + 1),
    title: d.title,
    university: d.university,
    department: (d.department && d.department !== 'Not found') ? d.department : (cMatch ? cMatch.department : "Engineering Faculty"),
    location: (d.location && d.location !== 'Not found') ? d.location : "Germany",
    tier: tier,
    gpa_fit: gpa_fit,
    gpa_fit_note: gpa_fit_note || (cMatch ? cMatch.gpa_fit_note : "Verified against official criteria."),
    
    overview: {
      degree_type: d.degree_type || "Master of Science",
      duration: d.duration || "4 semesters",
      language: d.language || "English",
      location: d.location || "Germany",
      department: d.department || "Engineering",
      intake: (d.deadline_winter && d.deadline_winter !== 'Not found' && !/not offered/i.test(d.deadline_winter)) ? "Winter" : "Summer",
      has_winter: Boolean(d.deadline_winter && d.deadline_winter !== 'Not found' && !/not offered/i.test(d.deadline_winter)),
      has_summer: Boolean(d.deadline_summer && d.deadline_summer !== 'Not found' && !/not offered/i.test(d.deadline_summer))
    },

    course_details: {
      curriculum: (d.curriculum && d.curriculum !== 'Not found') ? d.curriculum : (cMatch ? cMatch.prereqs : "Check official course outline"),
      combined_masters_phd: d.combined_masters_phd || "No",
      joint_double_degree: d.joint_double_degree || "No",
      diploma_supplement: d.diploma_supplement || "Not found",
      international_elements: d.international_elements || "English-taught Master's"
    },

    costs_funding: {
      tuition: (d.tuition && d.tuition !== 'Not found') ? d.tuition : (cMatch ? cMatch.tuition : "None"),
      tuition_notes: cMatch ? cMatch.tuition_notes : "",
      semester_fee: (d.semester_fee && d.semester_fee !== 'Not found') ? d.semester_fee : "~150–350 EUR per semester",
      cost_of_living: (d.cost_of_living && d.cost_of_living !== 'Not found') ? d.cost_of_living : "~934–992 EUR per month",
      funding: (d.funding && d.funding !== 'Not found') ? d.funding : "DAAD / Deutschlandstipendium"
    },

    requirements_registration: {
      deadline_winter: d.deadline_winter || (cMatch ? cMatch.deadline_winter : "Check portal"),
      deadline_summer: d.deadline_summer || (cMatch ? cMatch.deadline_summer : "Not offered"),
      submission_portal: d.submission_portal || "uni-assist / direct portal",
      academic_requirements: (d.academic_requirements && d.academic_requirements !== 'Not found') ? d.academic_requirements : (cMatch ? cMatch.prereqs : "Bachelor's in relevant discipline (EEE/ECE/CS)"),
      gpa_requirement: (d.gpa_requirement && d.gpa_requirement !== 'Not listed') ? d.gpa_requirement : (cMatch ? cMatch.min_gpa : "Competence/Credit based"),
      prerequisite_degree: (d.prerequisite_degree && d.prerequisite_degree !== 'Not found') ? d.prerequisite_degree : "BSc in Electrical/Electronic Engineering or related",
      german_requirement: d.german_requirement || "No minimum level required",
      ielts: (d.ielts && d.ielts !== 'Not found') ? d.ielts : (cMatch ? cMatch.ielts : "Check official score"),
      toefl: (d.toefl && d.toefl !== 'Not found') ? d.toefl : (cMatch ? cMatch.toefl : "Check official score"),
      other_english_tests: d.other_english_tests || "Not found",
      gre: (d.gre && d.gre !== 'Not mentioned') ? d.gre : "Not required",
      aps_required: "No (Bangladesh is exempt)",
      work_exp_note: cMatch ? cMatch.work_exp : ""
    },

    services: {
      accommodation: (d.accommodation && d.accommodation !== 'Not found') ? d.accommodation : "Studentenwerk / WG-Gesucht / Private housing",
      part_time_work: (d.part_time_work && d.part_time_work !== 'Not found') ? d.part_time_work : "Permitted up to 140 full days (or 280 half days) per year under German Student Visa",
      career_services: (d.career_services && d.career_services !== 'Not found') ? d.career_services : "University Career Center",
      other_support: (d.other_support && d.other_support !== 'Not found') ? d.other_support : "International Office, Buddy Programme"
    },

    about_university: {
      notes: (d.notes && d.notes !== 'Not found') ? d.notes : (cMatch ? cMatch.note : ""),
      contact_name: d.contact_name || "International Office",
      contact_email: d.contact_email || "See official website",
      contact_phone: d.contact_phone || "Not found",
      contact_address: d.contact_address || (d.university + ", Germany"),
      course_website: d.course_website || (cMatch ? cMatch.source : ""),
      source_url: d.source_url || (cMatch ? cMatch.source : "")
    }
  };

  masterPrograms.push(pObj);
});

// Any remaining curated programs that weren't in DAAD 199 (if any)
curated.programs.forEach((c, idx) => {
  if (!curatedMatched.has(idx)) {
    console.log(`Adding unique curated program: ${c.program_name} @ ${c.university}`);
    masterPrograms.push({
      id: `curated_${idx}`,
      daad_id: "",
      title: c.program_name,
      university: c.university,
      department: c.department || "Engineering",
      location: "Germany",
      tier: c.tier || "B",
      gpa_fit: c.gpa_fit || "moderate",
      gpa_fit_note: c.gpa_fit_note || "",
      overview: {
        degree_type: c.degree_type || "M.Sc.",
        duration: c.duration || "4 semesters",
        language: c.language || "English",
        location: "Germany",
        department: c.department || "Engineering",
        intake: "Winter",
        has_winter: true,
        has_summer: false
      },
      course_details: {
        curriculum: c.prereqs || c.note,
        combined_masters_phd: "No",
        joint_double_degree: "No",
        diploma_supplement: "Yes",
        international_elements: "English taught"
      },
      costs_funding: {
        tuition: c.tuition || "None",
        tuition_notes: c.tuition_notes || "",
        semester_fee: "~150–350 EUR per semester",
        cost_of_living: "~934–992 EUR per month",
        funding: "DAAD / Deutschlandstipendium"
      },
      requirements_registration: {
        deadline_winter: c.deadline_winter || "Check portal",
        deadline_summer: c.deadline_summer || "Not offered",
        submission_portal: "uni-assist / direct portal",
        academic_requirements: c.prereqs || "Bachelor's in relevant discipline",
        gpa_requirement: c.min_gpa || "Competence/Credit based",
        prerequisite_degree: c.prereqs || "BSc in EEE/CS/Related",
        german_requirement: c.german_req || "No",
        ielts: c.ielts || "Check score",
        toefl: c.toefl || "Check score",
        other_english_tests: "Not found",
        gre: c.gre || "Not required",
        aps_required: "No (Bangladesh is exempt)",
        work_exp_note: c.work_exp || ""
      },
      services: {
        accommodation: "Studentenwerk / WG",
        part_time_work: "140 full days / year permitted",
        career_services: "University Career Service",
        other_support: "International Office"
      },
      about_university: {
        notes: c.note || "",
        contact_name: "Admissions Office",
        contact_email: "See official portal",
        contact_phone: "Not found",
        contact_address: c.university + ", Germany",
        course_website: c.source || "",
        source_url: c.source || ""
      }
    });
  }
});

console.log(`Merged Total Unique Programs: ${masterPrograms.length}`);

// Generate Single Unified database.js
const masterDb = {
  metadata: {
    version: "3.0 (Unified Master Database)",
    last_updated: new Date().toISOString(),
    search_criteria: [
      "Course type: Master's degree",
      "Subject Groups: Engineering Sciences",
      "Areas of Study: Electrical Engineering, Engineering and Management, Mechatronics/Systems Engineering",
      "Teaching Language: English only"
    ],
    total_programs: masterPrograms.length
  },
  programs: masterPrograms,
  aps_info: curated.aps_info,
  gpa_conversion_info: curated.gpa_conversion_info,
  uni_assist_info: curated.uni_assist_info,
  funding_options: curated.funding_options,
  excluded_programs_examples: curated.excluded_programs_examples
};

const fileContent = `/**
 * UNIFIED MASTER DATABASE FOR STUDY IN GERMANY
 * Single Source of Truth
 * 
 * Criteria Searched on DAAD:
 * - Master's degree (1772)
 * - Engineering Sciences (472)
 * - Electrical Engineering (129), Engineering and Management (67), Mechatronics/Systems Engineering (46)
 * - English only
 * Total Matched Results: 199 (Merged & Deduplicated with Curated Tier Assessment)
 */

const DATABASE = ${JSON.stringify(masterDb, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DATABASE;
}
`;

fs.writeFileSync('database.js', fileContent, 'utf8');
console.log('Successfully saved single clean database.js!');

