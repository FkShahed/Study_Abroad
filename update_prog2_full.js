const fs = require('fs');
const db = require('./database.js');

const p = db.programs.find(x => x.id === 'prog_7612');
if (!p) {
  console.error('prog_7612 not found!');
  process.exit(1);
}

p.official_website_data = {
  official_source_url: 'https://www.tu-chemnitz.de/mb/am/studiengang/',
  official_spo_pdf: 'https://www.tu-chemnitz.de/verwaltung/studentenamt/amtliche_bekanntmachungen/ab2023/AB_23_2023.pdf',
  degree_awarded: 'Master of Science (M.Sc.)',
  total_ects: 120,
  standard_duration: '4 semesters full-time',
  intake_semester: 'Winter semester only (No summer intake)',
  teaching_language: '100% English',
  faculty_institute: 'Faculty of Mechanical Engineering, Chemnitz University of Technology',

  // Exact Admission & Eligibility Criteria
  admission_eligibility: {
    qualifying_degree: 'First professional university degree (Bachelor of Science, Bachelor of Engineering) in Mechanical Engineering, Electrical Engineering, Mechatronics, or related Engineering/Natural Science field.',
    undergraduate_ects: 'Minimum 180 to 210 ECTS equivalent from Bachelor.',
    minimum_gpa_cutoff: 'NO HARD GPA CUTOFF. Admission is purely competency-based (skills evaluation) based on specific prerequisite subject credit thresholds.',
    subject_prerequisites: 'Legally binding minimum credit thresholds per SPO: (1) Mathematical methods in engineering: min. 18 ECTS (Fourier, regression, statistics); (2) Scientific & engineering data processing: min. 12 ECTS (CAD/CAS, numerical simulation, multiphysics); (3) Metrology and control engineering: min. 8 ECTS (sensors, actuators, control); (4) New materials for engineering: min. 8 ECTS (polymers, metals, composites, functional properties); (5) In-depth engineering basics: min. 12 ECTS (mechanics, design, fluid dynamics); (6) Resource-efficient manufacturing: min. 8 ECTS.',
    work_experience: 'Not mandatory; applied engineering project integrated in curriculum.',
    aptitude_test_gre: 'GRE is NOT required. Assessment is conducted by the board of examiners evaluating your course-by-course syllabus.'
  },

  // Language Requirements
  language_requirements: {
    level: 'CEFR B2 in English + German A1 at application / conditional admission',
    ielts: 'Minimum band score 5.5 overall',
    toefl_ibt: 'Minimum 72 points overall (or TOEFL ITP 543)',
    toeic: 'Minimum 785 points (Listening/Reading/Speaking/Writing subscores)',
    pte_academic: 'Minimum 59 points',
    cambridge: 'B2 First (FCE) or Preliminary English Test (PET with Distinction)',
    moi_exemption: 'Applicants from native English speaking countries or who graduated from an accredited fully English-taught degree are exempt.',
    german_language: 'German A1 certificate (Goethe, telc, or ÖSD) is required upon enrollment. Conditional admission is possible if A1 certificate is submitted by late September before semester start. Must reach A2 by end of 3rd semester.'
  },

  // Application Process & Deadlines
  application_process: {
    portal: 'EduApplication Portal (pilot direct university system: https://www.eduapplication.de/) instead of uni-assist. Application fee approx. 49.95 EUR.',
    winter_deadline_non_eu: '1 April to 15 July (all countries).',
    winter_deadline_eu: '1 April to 15 July.',
    summer_deadline: 'Not offered (Winter semester only).',
    required_documents: [
      'Bachelor Degree Certificate & Academic Transcript with Grading Scale',
      'Curricular ECTS breakdown form (matching the 6 subject prerequisite areas)',
      'Proof of English B2 proficiency (IELTS 5.5 / TOEFL 72)',
      'Proof of German A1 certificate (or intent letter for late submission by September)',
      'Tabular CV (Resume) in Europass format',
      'Passport copy'
    ],
    aps_certificate: 'No APS required for Bangladeshi applicants.'
  },

  // Financial Costs
  financial_costs: {
    tuition_non_eu: '0 EUR (TU Chemnitz is a tuition-free public university in Saxony; no tuition fees for non-EU students).',
    tuition_eu: '0 EUR.',
    semester_contribution_fee: 'Approx. 340.50 EUR per semester (includes Deutschlandticket for free local & regional public transit across Germany).',
    total_cost_per_semester: '340.50 EUR per semester.',
    estimated_cost_of_living: 'Approx. 800 to 970 EUR per month (Chemnitz has one of the lowest student living costs in Germany; dorm room rents are 270-350 EUR/month).'
  },

  // Full Curriculum & Module Breakdown
  curriculum_details: {
    curriculum_overview: '120 ECTS full-time 4-semester research curriculum. Semester 1 consists of 5 compulsory basic modules (30 ECTS). Semesters 2 and 3 cover a chosen Specialization Profile (30 ECTS), Electives & Languages (25 ECTS), and an Applied Engineering Project (10 ECTS). Semester 4 is the Master Thesis (30 ECTS).',
    module_catalog: [
      {
        pillar: 'Semester 1: Mandatory Core Modules (30 ECTS)',
        modules: [
          'Mathematics for Engineering Science (5 ECTS)',
          'Digital Tools for Smart Manufacturing (5 ECTS)',
          'Humans and Mechatronics in Manufacturing (5 ECTS)',
          'Applied Materials and Composite Structures (5 ECTS)',
          'Modelling and Idealisation in Manufacturing Simulation (5 ECTS)',
          'Technical Communication / Language Elective (5 ECTS)'
        ]
      },
      {
        pillar: 'Semesters 2 & 3: Specialization Profile Areas (Choose One: 30 ECTS)',
        modules: [
          'Profile 1: Smart Manufacturing & Industry 4.0',
          'Profile 2: Mechatronics and Automation',
          'Profile 3: Printed Functionalities & Flexible Electronics',
          'Profile 4: Lightweight Technologies',
          'Profile 5: Materials Engineering',
          'Profile 6: Computational Manufacturing Engineering'
        ]
      },
      {
        pillar: 'Electives, Soft Skills & Languages (25 ECTS)',
        modules: [
          'German as a Foreign Language (Modules progressing to A2/B1)',
          'Technical Cross-Faculty Electives from Mechanical and Electrical Engineering',
          'Interdisciplinary Innovation & Sustainability Modules'
        ]
      },
      {
        pillar: 'Applied Research & Master Thesis Phase (40 ECTS)',
        modules: [
          'Applied Engineering Project (10 ECTS) — collaborative industrial team project with local manufacturers',
          'Master Thesis (30 ECTS) — 6-month independent scientific research project & colloquium'
        ]
      }
    ]
  },

  // Practical Career Ecosystem & Labs
  practical_ecosystem: {
    labs_available: 'Experimental Factory Chemnitz, Fraunhofer IWU Testbeds, Smart Systems Campus, Advanced Robotics & Mechatronics Testing Lab.',
    industry_connections: 'Direct integration with the Saxony Silicon and Mobility corridor (Volkswagen Zwickau EV plant, Porsche Leipzig, GlobalFoundries, Infineon Dresden).',
    part_time_work: 'HiWi positions available at university departments and Fraunhofer IWU; local student jobs in Chemnitz and neighboring Leipzig/Zwickau.'
  },

  // Direct Advice for Fazlul Karim Shahed (NSU EEE 2.8 CGPA Profile)
  bangladesh_applicant_fit: {
    gpa_verdict: 'Good / High Feasibility',
    gpa_analysis: 'TU Chemnitz does NOT eliminate applicants by numerical GPA cutoff. Since your CGPA is 2.8, this program is a major strategic advantage! Admission depends strictly on matching the 6 prerequisite ECTS areas. Your NSU EEE transcript covers Mathematics, Data Processing, Metrology/Control, and Engineering Basics. You only need to verify that your syllabus covers basic material science (EEE 154 or equivalent) and acquire a German A1 certificate before September.',
    actionable_recommendation: 'Target this program as a strong safety/match! Prepare German A1 (Goethe/telc) and apply via EduApplication by July 15.'
  }
};

p.requirements_registration.gpa_requirement = 'No numerical GPA cutoff; competency-based assessment matching 6 ECTS subject clusters.';
p.requirements_registration.german_requirement = 'A1 certificate required by enrollment (Goethe/telc/ÖSD); A2 by end of 3rd semester.';
p.requirements_registration.ielts = 'IELTS 5.5 (or TOEFL iBT 72, PTE 59, Cambridge PET)';
p.requirements_registration.submission_portal = 'EduApplication Portal (https://www.eduapplication.de/)';
p.requirements_registration.deadline_winter = '1 April – 15 July (all countries)';
p.costs_funding.tuition = '0 EUR (Tuition-free public university)';
p.costs_funding.semester_fee = '340.50 EUR per semester (includes Deutschlandticket)';
p.gpa_fit = 'good';
p.gpa_fit_note = '✅ HIGH CHANCE / NO GPA CUTOFF: Purely skills/credit based. NSU EEE background fulfills math & control requirements. IELTS 5.5 is very approachable. German A1 needed.';

const fileContent = 'const DATABASE = ' + JSON.stringify(db, null, 2) + ';\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = DATABASE;\n}\n';
fs.writeFileSync('database.js', fileContent, 'utf8');
console.log('Successfully updated Program 2 (prog_7612) with comprehensive official admission data!');
