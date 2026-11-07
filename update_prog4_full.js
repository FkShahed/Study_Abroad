const fs = require('fs');
const db = require('./database.js');

const p = db.programs.find(x => x.id === 'prog_10712');
if (!p) {
  console.error('prog_10712 not found!');
  process.exit(1);
}

p.official_website_data = {
  official_source_url: 'https://www.ovgu.de/en/study/degree-programmes/master-programmes/ai-and-engineering-for-medical-applications',
  official_spo_pdf: 'https://www.ovgu.de/unimagdeburg_media/Studium/Ordnungen+und+Satzungen/Studien_und+Pruefungsordnungen/FEIT/Master/AI_EMA_SPO.pdf',
  degree_awarded: 'Master of Science (M.Sc.)',
  total_ects: 120,
  standard_duration: '4 semesters full-time (Hybrid / On-campus attendance required in Germany)',
  intake_semester: 'Winter semester (Late applications accepted on case-by-case basis)',
  teaching_language: '100% English',
  faculty_institute: 'Faculty of Electrical Engineering and Information Technology (FEIT) in cooperation with Steinbeis School of Next Practices',

  // Exact Admission & Eligibility Criteria
  admission_eligibility: {
    qualifying_degree: 'Bachelor of Science, Bachelor of Engineering, Diploma, or equivalent university degree (min. 180 ECTS) in Medical Engineering, Electrical Engineering, Computer Science, or closely related STEM discipline.',
    undergraduate_ects: 'Minimum 180 ECTS.',
    minimum_gpa_cutoff: 'No rigid numerical GPA cutoff; selection is driven by prerequisite subject credit mapping and faculty aptitude test.',
    subject_prerequisites: 'Binding minimum prior ECTS distribution: (1) Mathematics: 20 ECTS (max 5 ECTS missing); (2) Physics / Medical Physics: 15 ECTS (max 10 ECTS missing); (3) Electrical Engineering / Electronics / IT: 20 ECTS (max 5 ECTS missing); (4) Computer Science / Programming: 10 ECTS (max 5 ECTS missing); (5) Anatomy / Physiology: 5 ECTS (max 5 ECTS missing). TOTAL MISSING CREDITS COMBINED CANNOT EXCEED 25 ECTS.',
    work_experience: 'MANDATORY: Minimum 1 year of post-graduation or relevant practical professional experience required (fits continuing education model).',
    aptitude_test_gre: 'MANDATORY INTERNAL APTITUDE TEST: Administered by the Faculty of Electrical Engineering (FEIT) covering engineering fundamentals and motivation.'
  },

  // Language Requirements
  language_requirements: {
    level: 'CEFR B2 Level in English + German A2 proficiency',
    ielts: 'Minimum band score 6.0 to 6.5 overall',
    toefl_ibt: 'Minimum 85 points overall',
    pte_academic: 'Accepted (approx. 59-65 points)',
    cambridge: 'Cambridge B2 First / C1 Advanced',
    moi_exemption: 'Degrees completed fully in English at recognized institutions can be evaluated for exemption.',
    german_language: 'German A2 is required by examination regulations (verified by test or placement interview; integrated language courses available).'
  },

  // Application Process & Deadlines
  application_process: {
    portal: 'Direct application through Steinbeis NEXT application portal (https://www.steinbeis-next.de/) / OVGU online registration.',
    winter_deadline_non_eu: '15 July (extensions possible upon direct request to program coordinators).',
    winter_deadline_eu: '15 July.',
    summer_deadline: 'Not offered (Winter intake only).',
    required_documents: [
      'Bachelor Degree Certificate & Academic Transcript with grading system',
      'Proof of at least 1 year professional practical engineering work experience',
      'Proof of English proficiency (IELTS / TOEFL)',
      'Proof of German A2 proficiency (or enrollment in preparatory course)',
      'Letter of Motivation & Curriculum Vitae (Europass style)',
      'Passport copy'
    ],
    aps_certificate: 'No APS required for Bangladeshi applicants.'
  },

  // Financial Costs
  financial_costs: {
    tuition_non_eu: 'Continuing education tuition: approx. 4,165 to 5,950 EUR per semester (~23,800 EUR total program fee; partial merit scholarships up to 30% available).',
    tuition_eu: 'Same tuition structure applies (continuing education program with Steinbeis).',
    semester_contribution_fee: 'Approx. 311.30 EUR per semester (covers Magdeburg bus/tram pass, Deutschlandsemesterticket, cafeteria discounts).',
    total_cost_per_semester: 'Approx. 4,476 to 6,261 EUR per semester.',
    estimated_cost_of_living: 'Approx. 850 to 992 EUR per month (Magdeburg offers very affordable student housing with dorms between 220-350 EUR/month).'
  },

  // Full Curriculum & Module Breakdown
  curriculum_details: {
    curriculum_overview: '120 ECTS 4-semester hybrid/executive Master of Science. Integrates hardware circuitry, high-frequency technology, medical radiation physics, and artificial intelligence.',
    module_catalog: [
      {
        pillar: 'Core Foundation & Hardware Engineering (Semesters 1 & 2: 50 ECTS)',
        modules: [
          'High-Frequency Technology for Medical Applications (5 ECTS)',
          'Circuit Technology for Medicine (Analog/Digital biomedical circuits) (5 ECTS)',
          'Radiation Physics & Radiation Protection (5 ECTS)',
          'Basics of IT & Medical Device Hardware (5 ECTS)',
          'Anatomical Foundations for Engineers (5 ECTS)',
          'Ethics of AI & Regulatory Affairs for Medical Devices (MDR) (5 ECTS)'
        ]
      },
      {
        pillar: 'Applied AI & Medical Imaging (Semesters 2 & 3: 30 ECTS)',
        modules: [
          'AI Basics & Deep Learning in Medical Engineering (5 ECTS)',
          'AI Applications in Signal and Image Processing (5 ECTS)',
          'Optimization & Quality Assurance in Medical Imaging (5 ECTS)',
          'Medical Sensor and Measurement Technology (5 ECTS)'
        ]
      },
      {
        pillar: 'Specialization Focus Tracks (Choose One in Semester 3: 10 ECTS)',
        modules: [
          'Track 1: Computer Tomography (CT) Hardware & Algorithm Development',
          'Track 2: Magnetic Resonance Tomography (MRT / MRI) RF Coil & System Design',
          'Track 3: Intelligent Biomedical Sensor & Embedded Hardware Development'
        ]
      },
      {
        pillar: 'Applied Cleanroom/Hospital Labs & Master Thesis Phase (30 ECTS)',
        modules: [
          'Specialized High-Frequency & Medical Circuit Labs at STIMULATE Campus',
          'Master Thesis & Defense (30 ECTS) — cutting-edge research with medtech industry'
        ]
      }
    ]
  },

  // Practical Career Ecosystem & Labs
  practical_ecosystem: {
    labs_available: 'Research Campus STIMULATE, 7-Tesla Ultra-High-Field MRI Research Center, FEIT Circuit Prototyping Lab, Medical Imaging & Radiation Suites.',
    industry_connections: 'Direct development pipeline with global medtech leaders: Siemens Healthineers, Philips Healthcare, Medtronic, University Hospital Magdeburg.',
    part_time_work: 'Research student (HiWi) positions at STIMULATE research campus; software and biomedical tech firms in Magdeburg and Berlin.'
  },

  // Direct Advice for Fazlul Karim Shahed (NSU EEE 2.8 CGPA Profile)
  bangladesh_applicant_fit: {
    gpa_verdict: 'Borderline / Tuition & Prerequisite Dependent',
    gpa_analysis: 'Your 2 years of engineering experience perfectly satisfies the 1-year mandatory professional experience requirement! Furthermore, your NSU EEE background provides strong credits in Math (20 ECTS) and Electronics/Circuit Technology (20 ECTS). However, note two factors: (1) Continuing education tuition is ~4,165-5,950 EUR/semester; (2) You will have a 5 ECTS deficiency in Anatomy/Physiology (which is permitted as long as total missing credits are ≤25 ECTS).',
    actionable_recommendation: 'Only choose this program if you are specifically interested in Medical Hardware/Circuits (CT/MRI RF design) and comfortable with the tuition fee (~4,165 EUR/sem).'
  }
};

p.requirements_registration.gpa_requirement = 'No rigid GPA cutoff; admission based on prerequisite ECTS checks and faculty aptitude test.';
p.requirements_registration.german_requirement = 'German A2 required (verified by test or placement interview).';
p.requirements_registration.ielts = 'IELTS 6.0 - 6.5 / TOEFL iBT 85';
p.requirements_registration.submission_portal = 'Steinbeis NEXT Portal (https://www.steinbeis-next.de/) / OVGU Online';
p.requirements_registration.deadline_winter = '15 July (late inquiries welcomed)';
p.costs_funding.tuition = '4,165 – 5,950 EUR per semester (Continuing education tuition fee)';
p.costs_funding.semester_fee = '311.30 EUR per semester (includes Deutschlandsemesterticket)';
p.gpa_fit = 'borderline';
p.gpa_fit_note = '2 years experience fulfills mandatory work requirement! Electronics/Math credits match well. Note: Tuition is ~4,165 EUR/sem and Anatomy must be bridged.';

const fileContent = 'const DATABASE = ' + JSON.stringify(db, null, 2) + ';\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = DATABASE;\n}\n';
fs.writeFileSync('database.js', fileContent, 'utf8');
console.log('Successfully updated Program 4 (prog_10712) with comprehensive official admission data!');
