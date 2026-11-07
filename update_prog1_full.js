const fs = require('fs');
const db = require('./database.js');

const p = db.programs.find(x => x.id === 'prog_8579');
if (!p) {
  console.error('prog_8579 not found!');
  process.exit(1);
}

// 1. Full Official Admission & Program Data
p.official_website_data = {
  official_source_url: 'https://www.th-rosenheim.de/en/studies-and-further-education/courses-of-study/masters-degree-programmes/advanced-industrial-engineering',
  official_spo_pdf: 'https://www.th-rosenheim.de/fileadmin/user_upload/AIE_SPO_Aenderung.pdf',
  degree_awarded: 'Master of Science (M.Sc.)',
  total_ects: 90,
  standard_duration: '3 semesters full-time (or up to 6 semesters part-time)',
  intake_semester: 'Winter semester only (No summer intake)',
  teaching_language: '100% English',
  faculty_institute: 'Faculty of Engineering and Industrial Management, TH Rosenheim',
  
  // Exact Admission & Eligibility Criteria
  admission_eligibility: {
    qualifying_degree: 'Bachelor degree in Industrial Engineering, Engineering, or a technical-business oriented discipline (Techno-Wirtschaftlich) from Germany or abroad.',
    undergraduate_ects: '180 to 210 ECTS required. Applicants holding a 180 ECTS Bachelor (e.g. 3-4 year international degrees) are eligible for admission with condition to make up missing 30 ECTS via undergraduate bridge modules at TH Rosenheim before Master thesis registration.',
    minimum_gpa_cutoff: 'German GPA 2.0 or better required by official SPO (§ 2). Converted on modified Bavarian formula (approx. 3.4/4.0 US equivalent).',
    subject_prerequisites: 'Foundational coursework in Engineering Sciences, Mathematics, Industrial Economics, and Quantitative Data Analysis.',
    work_experience: 'Not legally mandatory for initial admission, but strongly recommended; hands-on industrial background gives preference in Master Case Study assignments.',
    aptitude_test_gre: 'GRE is NOT required. Aptitude is evaluated based on academic transcript alignment and degree equivalence.'
  },

  // Language Proficiency
  language_requirements: {
    level: 'CEFR B2 Level in English',
    ielts: 'Minimum band score 6.0 overall',
    toefl_ibt: 'Minimum 72 points overall',
    toeic: 'Minimum 785 points (Reading 385, Listening 400, Speaking 160, Writing 150)',
    pte_academic: 'Minimum 60 points',
    cambridge: 'B2 First (FCE) Grade C (min. 160 points) or C1 Advanced (CAE)',
    telc: 'telc English B2-C1 University (min. B2)',
    moi_exemption: 'Applicants who completed a prior full degree taught in English, or native speakers, or who have at least 6 years of certified English in school can receive exemption.',
    german_language: 'No German language certificate required for admission; however, basic German A1/A2 is highly recommended for everyday life and local Bavaria internship integration.'
  },

  // Application Workflow & Deadlines
  application_process: {
    portal: 'uni-assist for international qualification assessment (VPD: Vorprüfungsdokumentation) + TH Rosenheim online campus portal.',
    winter_deadline_non_eu: '15 April to 30 April (VPD application recommended to initiate by February/March).',
    winter_deadline_eu: '15 April to 15 July.',
    summer_deadline: 'Not offered (Winter semester intake only).',
    required_documents: [
      'Bachelor Degree Certificate & Official Academic Transcript (with grading scale)',
      'uni-assist VPD (Preliminary Evaluation Documentation)',
      'Curriculum Vitae (CV / Resume in Europass/chronological style)',
      'Proof of English language proficiency (IELTS / TOEFL / PTE)',
      'Letter of Motivation (explaining interest in industrial engineering & digitalization)',
      'Passport copy'
    ],
    aps_certificate: 'No APS required for Bangladeshi applicants (APS is mandatory only for applicants from India, China, and Vietnam).'
  },

  // Complete Fee Structure
  financial_costs: {
    tuition_non_eu: '500 EUR per semester (effective for Non-EU international students starting from 2025/2026). Total 1,000 EUR per year.',
    tuition_eu: '0 EUR (No tuition fee for EU/EEA citizens).',
    semester_contribution_fee: '97 EUR per semester (Studentenwerk / Student Union fee).',
    total_cost_per_semester: '597 EUR per semester for Non-EU students (Tuition 500 EUR + Contribution 97 EUR).',
    estimated_cost_of_living: 'Approx. 992 EUR per month (~11,904 EUR per year for blocked account visa requirement), covering dorm accommodation, health insurance (~130 EUR), groceries, and public transit.'
  },

  // Full Curriculum & Module Breakdown
  curriculum_details: {
    curriculum_overview: 'Structured across 3 semesters: Semester 1 & 2 cover Core Engineering/Management, Digital Transformation, Sustainability, and Subject Electives. Semester 3 is dedicated to Master Case Study with industry and Master Thesis.',
    module_catalog: [
      {
        pillar: 'Pillar 1: Engineering & Management Foundation',
        modules: [
          'Advanced Industrial Engineering & Manufacturing Systems (5 ECTS)',
          'Data-Driven Decision Making & Applied Operations Research (5 ECTS)',
          'Strategic Supply Chain & Operations Management (5 ECTS)'
        ]
      },
      {
        pillar: 'Pillar 2: Digital Transformation & Smart Systems',
        modules: [
          'Artificial Intelligence & Machine Learning in Production (5 ECTS)',
          'Collaborative Robotics (Cobots) & Smart Factory Automation (5 ECTS)',
          'Augmented, Virtual & Mixed Reality (AR/VR) Industrial Applications (5 ECTS)'
        ]
      },
      {
        pillar: 'Pillar 3: Sustainability & Scientific Methods',
        modules: [
          'Sustainable Product Engineering & Life Cycle Assessment (LCA) (5 ECTS)',
          'Design for Recycling (DfR) & Green Manufacturing Strategies (5 ECTS)',
          'Advanced Scientific Working & Empirical Research Methodologies (5 ECTS)'
        ]
      },
      {
        pillar: 'Pillar 4: Subject-Specific Required Electives (FWPM)',
        modules: [
          'Advanced Industrial Informatics & Cloud Systems',
          'Cyber-Physical Systems & Industrial IoT',
          'Specialized Management & Technology courses from Bavarian Virtual University (vhb)'
        ]
      },
      {
        pillar: 'Pillar 5: Practical Industry Phase & Master Thesis (Sem 3)',
        modules: [
          'Master Case Study (MCS): 12-week applied corporate project with industry partner, evaluated via management report & defense',
          'Master Thesis: Independent academic and scientific research project (30 ECTS)'
        ]
      }
    ]
  },

  // Practical Career Ecosystem & Labs
  practical_ecosystem: {
    labs_available: 'Innovations Lab, Cobot & Collaborative Robotics Testbed, Mixed Reality / AR Simulation Suite, CAD/CAM Prototyping Workshop.',
    industry_connections: 'Direct recruitment pipeline into Upper Bavaria and Munich manufacturing clusters (BMW Group, Knorr-Bremse, regional robotics & automation leaders).',
    part_time_work: 'Non-EU students can work 140 full days or 280 half days per year. Ample working-student (Werkstudent) opportunities in Rosenheim, Chiemgau, Munich, and Salzburg.'
  },

  // Direct Advice for Fazlul Karim Shahed (NSU EEE 2.8 CGPA Profile)
  bangladesh_applicant_fit: {
    gpa_verdict: 'Risky / Hard Benchmark',
    gpa_analysis: 'The official examination regulation (§ 2) strictly benchmarks a German GPA of 2.0 or better (~3.4+ US scale). A 2.8 CGPA (~2.8-3.0 German scale) is mathematically below the standard threshold. Admission without an official GPA waiver is high risk unless a special case review or equivalence certificate is granted.',
    actionable_recommendation: 'If applying to TH Rosenheim, contact the program director (Silke Kroneck: industrialengineering@th-rosenheim.de) beforehand to ask whether your 2 years of engineering experience and strong mathematics/hardware foundation can be reviewed via aptitude evaluation or probationary admission.'
  }
};

// Also enrich requirements_registration in base database for consistent filtering
p.requirements_registration.gpa_requirement = 'German GPA 2.0 or better required by SPO § 2.';
p.requirements_registration.ielts = 'IELTS 6.0 (or TOEFL iBT 72, PTE 60, Cambridge B2 First)';
p.requirements_registration.submission_portal = 'uni-assist (VPD) + TH Rosenheim Online Portal';
p.requirements_registration.deadline_winter = '15 April – 30 April (Non-EU VPD via uni-assist)';
p.costs_funding.tuition = '500 EUR per semester for Non-EU students (1,000 EUR/year)';
p.costs_funding.semester_fee = '97 EUR per semester';
p.gpa_fit = 'risky';
p.gpa_fit_note = 'Strict German GPA 2.0 (~3.4+ US) benchmark under official SPO § 2. 2.8 CGPA is below cutoff unless department grants work-experience waiver.';

const fileContent = 'const DATABASE = ' + JSON.stringify(db, null, 2) + ';\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = DATABASE;\n}\n';
fs.writeFileSync('database.js', fileContent, 'utf8');
console.log('Successfully updated Program 1 (prog_8579) with comprehensive official admission data!');
