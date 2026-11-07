const fs = require('fs');
const db = require('./database.js');

const p = db.programs.find(x => x.id === 'prog_8922');
if (!p) {
  console.error('prog_8922 not found!');
  process.exit(1);
}

p.official_website_data = {
  official_source_url: 'https://www.thi.de/en/studies/degree-programmes/ai-engineering-of-autonomous-systems-meng/',
  official_spo_pdf: 'https://www.thi.de/fileadmin/daten/SPO/Master/SPO_MA_AI_Engineering_of_Autonomous_Systems.pdf',
  degree_awarded: 'Master of Engineering (M.Eng.)',
  total_ects: 90,
  standard_duration: '3 semesters full-time (Flexible start in either Winter or Summer)',
  intake_semester: 'Both Winter and Summer semesters (Semesters 1 & 2 are non-sequential)',
  teaching_language: '100% English',
  faculty_institute: 'Faculty of Electrical Engineering and Information Technology, Technische Hochschule Ingolstadt (THI)',

  // Exact Admission & Eligibility Criteria
  admission_eligibility: {
    qualifying_degree: 'Bachelor of Engineering or Bachelor of Science degree in Electrical Engineering, Computer Science, Mathematics, Robotics, or closely related engineering field.',
    undergraduate_ects: '210 ECTS standard. Applicants holding a 180 ECTS Bachelor (standard 3 or 4-year foreign degree) are eligible for conditional admission, provided the missing 30 ECTS are acquired through designated coursework or recognized professional internships before thesis registration.',
    minimum_gpa_cutoff: 'NO HARD NUMERICAL GPA CUTOFF. Admission is determined via an Aptitude Assessment Process (Eignungsverfahren) based on submitted curricular proof in signal processing, systems modeling, programming, and mathematical basics.',
    subject_prerequisites: 'Prior undergraduate coursework must demonstrate strong foundations in: Higher Mathematics/Calculus, Signals & Systems, Object-Oriented Programming (C++/Python), and Embedded Hardware or Microelectronics.',
    work_experience: 'Not mandatory; however, engineering work experience in embedded systems, verification, or automotive software strengthens the aptitude assessment score.',
    aptitude_test_gre: 'GRE is NOT required. Evaluation is document-based through the faculty selection committee.'
  },

  // Language Requirements
  language_requirements: {
    level: 'CEFR B2 Level in English',
    ielts: 'Minimum band score 5.5 overall (IELTS Academic)',
    toefl_ibt: 'Minimum 72 points overall',
    pte_academic: 'Minimum 59 points',
    cambridge: 'Cambridge English B2 First (min. 160 points)',
    moi_exemption: 'Applicants who graduated from a fully English-taught Bachelor program are eligible for MOI exemption with official university verification letter.',
    german_language: 'No German language certificate required for admission; however, basic German A1/A2 is highly beneficial for local industry student placements.'
  },

  // Application Process & Deadlines
  application_process: {
    portal: 'Direct submission via THI PRIMUSS online campus portal (with uni-assist VPD preliminary review for international degree recognition).',
    winter_deadline_non_eu: '1 April to 15 July.',
    winter_deadline_eu: '1 April to 15 July.',
    summer_deadline: '15 October to 15 January (offers full summer intake).',
    required_documents: [
      'Bachelor Degree Certificate & Academic Transcript with Grading Scale',
      'uni-assist VPD (Vorprüfungsdokumentation)',
      'Proof of English proficiency (IELTS 5.5 / TOEFL 72 / MOI letter)',
      'Curriculum Vitae (CV in Europass format)',
      'Letter of Motivation highlighting interest in edge computing & autonomous systems',
      'Passport copy'
    ],
    aps_certificate: 'No APS required for Bangladeshi applicants.'
  },

  // Financial Costs
  financial_costs: {
    tuition_non_eu: '1,200 EUR per semester for Non-EU international students (total 2,400 EUR per year). Highly economical for Bavaria.',
    tuition_eu: '0 EUR for EU/EEA citizens.',
    semester_contribution_fee: '82 EUR per semester (Studentenwerk student services fee).',
    total_cost_per_semester: '1,282 EUR per semester for Non-EU students (Tuition 1,200 EUR + Fee 82 EUR).',
    estimated_cost_of_living: 'Approx. 850 to 1,000 EUR per month (dormitory rents in Ingolstadt are ~350-550 EUR/month).'
  },

  // Full Curriculum & Module Breakdown
  curriculum_details: {
    curriculum_overview: '90 ECTS 3-semester program. Semesters 1 & 2 are decoupled, meaning students can start in Winter or Summer without disadvantage. Semester 3 is fully dedicated to the Master Thesis (30 ECTS).',
    module_catalog: [
      {
        pillar: 'Core Theoretical & Sensor Systems (Semester 1: 30 ECTS)',
        modules: [
          'Sensor Networks Technologies and Sensor Data Fusion (5 ECTS)',
          'System Identification, Modeling and Simulation (5 ECTS)',
          'Data Engineering and Analytics for Autonomous Systems (5 ECTS)',
          'Systems Engineering and Architecting for Edge Computing (5 ECTS)',
          'Science Elective Module (5 ECTS)',
          'Scientific Seminar & Ethical Considerations in Autonomous Design (5 ECTS)'
        ]
      },
      {
        pillar: 'Advanced Cognition & Autonomy (Semester 2: 30 ECTS)',
        modules: [
          'Machine Perception and Cognition (Computer Vision, Deep Learning) (5 ECTS)',
          'Principles of Autonomy and Decision Making (5 ECTS)',
          'Computing and Connectivity Technologies (V2X, Real-time Communication) (5 ECTS)',
          'General Elective Module (5 ECTS)',
          'Science Elective II (5 ECTS)',
          'Interdisciplinary Team Project in Autonomous Systems (5 ECTS)'
        ]
      },
      {
        pillar: 'Applied Research & Master Thesis Phase (Semester 3: 30 ECTS)',
        modules: [
          'Master Thesis (28 ECTS) — 6-month applied research project, usually conducted at Audi, CARIAD, or THI research centers',
          'Master Colloquium & Defense (2 ECTS)'
        ]
      }
    ]
  },

  // Practical Career Ecosystem & Labs
  practical_ecosystem: {
    labs_available: 'CARISSMA (Bavaria’s leading center of automotive safety), Edge AI Embedded Testbeds, Autonomous Vehicle Proving Grounds, Sensor Calibration Labs.',
    industry_connections: 'Ingolstadt is the global world headquarters of AUDI AG and CARIAD (Volkswagen Group software enterprise), Continental, and Bertrandt.',
    part_time_work: 'Exceptional working-student (Werkstudent) opportunities at Audi and tier-1 automotive suppliers in Ingolstadt and nearby Munich (40 mins away).'
  },

  // Direct Advice for Fazlul Karim Shahed (NSU EEE 2.8 CGPA Profile)
  bangladesh_applicant_fit: {
    gpa_verdict: 'Good / High Realism',
    gpa_analysis: 'THI does NOT have an arbitrary GPA elimination bar; admission is determined by curriculum suitability in programming, mathematics, and systems engineering. Your NSU EEE transcript plus 2 years of RTL/UVM hardware experience gives you a distinct advantage in edge computing and embedded architectures. Non-EU tuition is very moderate (1,200 EUR/sem). Both Winter and Summer admissions are available.',
    actionable_recommendation: 'Target THI as a prime candidate! Prepare your uni-assist VPD early and highlight your RTL, FPGA, and C++/Python hardware skills in your motivation letter.'
  }
};

p.requirements_registration.gpa_requirement = 'No numerical GPA cutoff; holistic aptitude evaluation based on curricular background.';
p.requirements_registration.german_requirement = 'No German required for admission; B2 English (IELTS 5.5 / TOEFL 72) required.';
p.requirements_registration.ielts = 'IELTS 5.5 (or TOEFL iBT 72, PTE 59, Cambridge B2 First)';
p.requirements_registration.submission_portal = 'THI PRIMUSS Portal + uni-assist VPD';
p.requirements_registration.deadline_winter = '1 April – 15 July';
p.requirements_registration.deadline_summer = '15 October – 15 January';
p.costs_funding.tuition = '1,200 EUR per semester for Non-EU students';
p.costs_funding.semester_fee = '82 EUR per semester';
p.gpa_fit = 'good';
p.gpa_fit_note = '✅ STRONG EMBEDDED / AI FIT: No hard GPA cutoff. IELTS 5.5 is accessible. Tuition is very modest (1,200 EUR/sem). Direct connection to Audi/CARIAD in Ingolstadt!';

const fileContent = 'const DATABASE = ' + JSON.stringify(db, null, 2) + ';\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = DATABASE;\n}\n';
fs.writeFileSync('database.js', fileContent, 'utf8');
console.log('Successfully updated Program 5 (prog_8922) with comprehensive official admission data!');
