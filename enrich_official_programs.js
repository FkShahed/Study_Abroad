const fs = require('fs');
const db = require('./database.js');

// Helper to safely assign official scraped data
function enrichProgram(id, officialData) {
  const p = db.programs.find(x => x.id === id);
  if (!p) {
    console.error('Program not found:', id);
    return;
  }

  p.official_website_data = {
    official_source_url: officialData.official_source_url,
    total_ects: officialData.total_ects,
    standard_duration: officialData.standard_duration,
    faculty_institute: officialData.faculty_institute,
    curriculum_structure: officialData.curriculum_structure,
    official_modules_breakdown: officialData.official_modules_breakdown,
    exact_admission_regulations: officialData.exact_admission_regulations,
    gpa_conversion_benchmark: officialData.gpa_conversion_benchmark,
    language_requirements_verified: officialData.language_requirements_verified,
    special_notes_for_bangladesh: officialData.special_notes_for_bangladesh
  };

  if (officialData.university_deep_info) {
    p.university_deep_info = officialData.university_deep_info;
  }

  if (officialData.gpa_fit) {
    p.gpa_fit = officialData.gpa_fit;
  }
  if (officialData.gpa_fit_note) {
    p.gpa_fit_note = officialData.gpa_fit_note;
  }

  console.log(`Enriched [${id}] ${p.title} (${p.university})`);
}

// 1. TH Rosenheim - Advanced Industrial Engineering (prog_8579)
enrichProgram('prog_8579', {
  official_source_url: 'https://www.th-rosenheim.de/en/studies-and-further-education/degree-programmes/master-degree-programmes/advanced-industrial-engineering',
  total_ects: 90,
  standard_duration: '3 semesters full-time (or 6 part-time)',
  faculty_institute: 'Faculty of Engineering and Industrial Management',
  curriculum_structure: 'Foundation Modules (Management & Tech) -> Digital Transformation & Emerging Tech (AI, Cobots, VR) -> FWPM Electives -> Master Case Study & Thesis',
  official_modules_breakdown: [
    { category: 'Digital Transformation', modules: ['Artificial Intelligence in Production', 'Collaborative Robotics (Cobots)', 'Augmented & Virtual Reality Systems'] },
    { category: 'Engineering & Management', modules: ['Advanced Industrial Systems', 'Sustainable Manufacturing Strategies', 'Data-Driven Decision Making'] },
    { category: 'Applied Research', modules: ['Master Case Study (MCS) with Industry', 'Master Thesis (30 ECTS)'] }
  ],
  exact_admission_regulations: 'Bachelor in Industrial Engineering, Engineering, or Techno-Economic discipline (minimum 180 ECTS). If Bachelor is 180 ECTS, up to 30 ECTS bridge modules can be cleared during Master.',
  gpa_conversion_benchmark: 'German GPA 2.0 or better required by SPO.',
  language_requirements_verified: 'IELTS 6.0 or TOEFL iBT 72 or PTE 60 / Cambridge B2 First.',
  special_notes_for_bangladesh: 'APS not required for Bangladesh. Strict 2.0 German GPA threshold makes 2.8 CGPA risky unless compensated by case study/industry proof.',
  university_deep_info: {
    chair_leadership: 'Faculty of Industrial Engineering',
    research_partners: 'Industrial cluster Upper Bavaria / Munich metropolitan manufacturing network',
    labs_infrastructure: 'Innovations Lab, Cobot & Robotics Simulation Testbeds, Mixed Reality Lab',
    specialized_curriculum_modules: ['AI & Data Science in Operations', 'Collaborative Robotics & Automation', 'Green Manufacturing & Supply Chain Resilience'],
    career_ecosystem: 'Direct access to South German industrial hubs (Rosenheim, Chiemgau, Munich, Salzburg).'
  },
  gpa_fit: 'risky',
  gpa_fit_note: 'Strict German GPA 2.0 threshold (~3.4+ US scale). Requires industrial engineering equivalence evaluation.'
});

// 2. TU Chemnitz - Advanced Manufacturing (prog_7612)
enrichProgram('prog_7612', {
  official_source_url: 'https://www.tu-chemnitz.de/mb/am/studiengang/',
  total_ects: 120,
  standard_duration: '4 semesters full-time',
  faculty_institute: 'Faculty of Mechanical Engineering',
  curriculum_structure: 'Basic Modules (Sem 1: 30 ECTS) -> Specialization Profiles (Sem 2-3: 30 ECTS) -> Electives & Soft Skills (25 ECTS) -> Applied Project (10 ECTS) -> Master Thesis (30 ECTS)',
  official_modules_breakdown: [
    { category: 'Basic Modules (Sem 1, 30 ECTS)', modules: ['Mathematics for Engineering Science (5 ECTS)', 'Digital Tools for Smart Manufacturing (5 ECTS)', 'Humans and Mechatronics in Manufacturing (5 ECTS)', 'Applied Materials and Composite Structures (5 ECTS)', 'Modelling and Idealisation in Manufacturing Simulation (5 ECTS)'] },
    { category: 'Specialization Profiles (30 ECTS)', modules: ['Smart Manufacturing', 'Mechatronics and Automation', 'Printed Functionalities', 'Lightweight Technologies', 'Materials Engineering'] },
    { category: 'Research & Practical', modules: ['Applied Engineering Project (10 ECTS)', 'Master Thesis (30 ECTS)'] }
  ],
  exact_admission_regulations: 'Skills-based ECTS requirements: Special mathematical methods ≥18 ECTS, Data processing ≥12 ECTS, Metrology & control ≥8 ECTS, New materials ≥8 ECTS, In-depth engineering basics ≥12 ECTS, Resource-efficient concepts ≥8 ECTS. German A1 certificate required.',
  gpa_conversion_benchmark: 'No minimum GPA gate; strictly based on prerequisite ECTS subject mapping.',
  language_requirements_verified: 'English B2 (IELTS 5.5 / TOEFL 72) + German A1 certificate required upon enrollment.',
  special_notes_for_bangladesh: 'No APS needed. NSU EEE transcript comfortably fulfills Mathematics, Control and Data Processing requirements. German A1 required before visa/enrollment.',
  university_deep_info: {
    chair_leadership: 'Institute of Mechanical Handling and Plastics, Faculty of Mechanical Engineering',
    research_partners: 'Fraunhofer IWU (Institute for Machine Tools and Beam Technology), Smart Systems Campus Chemnitz',
    labs_infrastructure: 'Experimental Factory, High-Precision Manufacturing Systems, Robotics & Human-Machine Lab',
    specialized_curriculum_modules: ['Digital Twin & Process Simulation', 'Sensors in Production Engineering', 'Mechatronic Actuation & Embedded Control'],
    career_ecosystem: 'Direct access to Saxony Silicon and Automotive Valley (Volkswagen Zwickau, Porsche Leipzig, GlobalFoundries).'
  },
  gpa_fit: 'good',
  gpa_fit_note: '✅ EXCELLENT FIT: No hard GPA cutoff; admission is subject-competency based. NSU EEE coursework maps well to the engineering ECTS criteria.'
});

// 3. TU Bergakademie Freiberg - Advanced Materials Analysis (prog_5403)
enrichProgram('prog_5403', {
  official_source_url: 'https://tu-freiberg.de/en/ama/first-year',
  total_ects: 120,
  standard_duration: '4 semesters full-time',
  faculty_institute: 'Faculty of Materials Science and Technology & Institute of Applied Physics',
  curriculum_structure: 'Core Foundation (Sem 1) -> Specialization Stream A/B (Sem 2-3) -> Research Project (Sem 3) -> Master Thesis (Sem 4, 30 ECTS)',
  official_modules_breakdown: [
    { category: 'Foundation (Sem 1)', modules: ['Atomic and Solid State Physics', 'Quantum Theory I', 'Functional Nanomaterials', 'Materials Characterization Basics'] },
    { category: 'Semiconductor Technology Track (Sem 2-3)', modules: ['Semiconductor Process Technology & Fabrication', 'Device Physics of Electronic & Optoelectronic Components', 'Electrical & Optical Characterization of Semiconductors'] },
    { category: 'Solid State Analytics Track', modules: ['Electron Microscopy & Microanalysis', 'Synchrotron Radiation & Diffraction Techniques', 'Spectroscopic Analysis'] }
  ],
  exact_admission_regulations: 'Bachelor in Materials Science, Physics, Chemistry, Electrical Engineering, or related discipline with solid-state focus. Includes an online subject qualification test in Mathematics and Physics.',
  gpa_conversion_benchmark: 'No explicit GPA cutoff mentioned; admission is determined by online aptitude test and transcript course alignment.',
  language_requirements_verified: 'TOEFL iBT 90 or IELTS 6.5 (CEFR B2+ level).',
  special_notes_for_bangladesh: 'No APS required. Freiberg is situated in the heart of Silicon Saxony (between Dresden and Chemnitz), making it an elite semiconductor materials launchpad.',
  university_deep_info: {
    chair_leadership: 'Institute of Applied Physics & Institute of Materials Science',
    research_partners: 'Fraunhofer THM, Siltronic AG, Freiberger Compound Materials (FCM), Infineon Dresden',
    labs_infrastructure: 'High-Resolution Transmission Electron Microscopy (TEM), Semiconductor Cleanroom, XRD Diffraction Centers',
    specialized_curriculum_modules: ['Semiconductor Device Physics', 'Thin-Film Technology & Lithography', 'Quantum Structures in Electronic Materials'],
    career_ecosystem: 'Direct supplier of semiconductor materials engineers to Silicon Saxony wafer and chip fabs.'
  },
  gpa_fit: 'good',
  gpa_fit_note: '✅ STRONG SEMICONDUCTOR/MATERIALS FIT: EEE solid-state physics foundation matches the Semiconductor Technology track. Admission test replaces strict GPA elimination.'
});

// 4. OVGU Magdeburg - AI and Engineering for Medical Applications (prog_10712)
enrichProgram('prog_10712', {
  official_source_url: 'https://www.ovgu.de/en/study/degree-programmes/master-programmes/ai-and-engineering-for-medical-applications',
  total_ects: 120,
  standard_duration: '4 semesters full-time (hybrid)',
  faculty_institute: 'Faculty of Electrical Engineering and Information Technology & Steinbeis School',
  curriculum_structure: 'Foundation Phase (Sem 1) -> Core Medical & AI Engineering (Sem 2) -> Specialization Tracks (Sem 3: CT / MRT / Sensors) -> Master Thesis (Sem 4)',
  official_modules_breakdown: [
    { category: 'Core Modules', modules: ['High-Frequency Technology for Medicine (5 ECTS)', 'Circuit Technology for Medicine (5 ECTS)', 'Radiation Physics & Protection (5 ECTS)', 'AI Basics & Machine Learning in Medicine (5 ECTS)', 'Medical Imaging Methods (5 ECTS)'] },
    { category: 'Specialized Tracks', modules: ['CT Development Track', 'MRT / MRI Development Track', 'Medical Sensor & Hardware Development'] },
    { category: 'Clinical & Ethics', modules: ['Regulatory Affairs & Medical Device Directive', 'Anatomical Foundations', 'Ethics of AI in Healthcare'] }
  ],
  exact_admission_regulations: 'Bachelor in EE or Medical Engineering (min 180 ECTS). Strict ECTS minimums: Math ≥20 ECTS (max 5 missing), EE/IT/Electronics ≥20 ECTS (max 5 missing), Physics ≥15 ECTS, CS/Programming ≥10 ECTS, Anatomy ≥5 ECTS. Combined missing credits cannot exceed 25 ECTS. 1 year practical experience required.',
  gpa_conversion_benchmark: 'No numerical GPA cutoff; subject aptitude test and prerequisite credit checks apply.',
  language_requirements_verified: 'English B2 + German A2 verified by interview or placement.',
  special_notes_for_bangladesh: 'Tuition is 4,165 EUR per semester. Anatomy requirement can be bridged as part of missing credits.',
  university_deep_info: {
    chair_leadership: 'Institute of Medical Engineering (Prof. Dr. Christoph Hoeschen)',
    research_partners: 'Research Campus STIMULATE, Siemens Healthineers, University Hospital Magdeburg',
    labs_infrastructure: '7-Tesla High-Field MRI Lab, Hybrid Angiography Suites, Medical Sensor Circuit Prototyping Lab',
    specialized_curriculum_modules: ['Medical Circuit Design', 'High-Frequency Engineering', 'AI Pattern Recognition in Bio-signals'],
    career_ecosystem: 'Top tier medical hardware and imaging technology pipeline in central Germany.'
  },
  gpa_fit: 'borderline',
  gpa_fit_note: 'Tuition 4,165 EUR/sem and requires bridging anatomy/physiology. EE modules and 2 years engineering experience provide an edge.'
});

// 5. TH Ingolstadt - AI Engineering of Autonomous Systems (prog_8922)
enrichProgram('prog_8922', {
  official_source_url: 'https://www.thi.de/en/studies/degree-programmes/ai-engineering-of-autonomous-systems-meng/',
  total_ects: 90,
  standard_duration: '3 semesters full-time',
  faculty_institute: 'Faculty of Electrical Engineering and Information Technology',
  curriculum_structure: 'Sem 1 & Sem 2 (Autonomous & Independent Order) -> Sem 3: Master Thesis (30 ECTS)',
  official_modules_breakdown: [
    { category: 'Semester 1', modules: ['Sensor Networks Technologies & Sensor Data Fusion (5 ECTS)', 'System Identification, Modeling and Simulation (5 ECTS)', 'Data Engineering and Analytics (5 ECTS)', 'Systems Engineering and Architecting for Edge Computing (5 ECTS)', 'Scientific Seminar & Ethical Considerations (5 ECTS)'] },
    { category: 'Semester 2', modules: ['Machine Perception and Cognition (5 ECTS)', 'Principles of Autonomy and Decision Making (5 ECTS)', 'Computing and Connectivity Technologies (5 ECTS)', 'Science Elective (5 ECTS)', 'Team Project (5 ECTS)'] },
    { category: 'Semester 3', modules: ['Master Thesis & Defense (30 ECTS)'] }
  ],
  exact_admission_regulations: 'Bachelor degree in EE, CS, Mathematics, or closely related engineering field totaling 210 ECTS (180 ECTS holders must bridge missing 30 ECTS through exams/internship). Aptitude assessment based on submitted curricular evidence in signal processing, systems engineering, programming, and mathematics.',
  gpa_conversion_benchmark: 'No rigid GPA cutoff; evaluated holistically via curricular aptitude scoring.',
  language_requirements_verified: 'IELTS 5.5 or TOEFL iBT 72 (B2 level).',
  special_notes_for_bangladesh: 'Non-EU tuition is 1,200 EUR per semester. Ingolstadt is the global headquarters of Audi and CARIAD (VW Group software company).',
  university_deep_info: {
    chair_leadership: 'Faculty of Electrical Engineering (Prof. Dr.-Ing. Alen Turnwald)',
    research_partners: 'Audi AG, CARIAD, Continental Automotive, Fraunhofer IVI',
    labs_infrastructure: 'Autonomous Driving Test Track, Edge AI & Embedded Perception Labs, CARISSMA Automotive Safety Center',
    specialized_curriculum_modules: ['Systems Engineering for Edge Computing', 'Sensor Fusion & Embedded AI', 'Autonomous Decision Algorithms'],
    career_ecosystem: 'Bavaria automotive innovation triangle (Ingolstadt - Munich - Regensburg).'
  },
  gpa_fit: 'good',
  gpa_fit_note: '✅ STRONG EMBEDDED/AI FIT: 1,200 EUR/sem tuition is modest. EEE background + programming experience qualifies for aptitude assessment.'
});

// 6. Leibniz University Hannover - AI-Driven Mechatronics and Robotics (prog_10548)
enrichProgram('prog_10548', {
  official_source_url: 'https://www.maschinenbau.uni-hannover.de/en/study/degree-programmes/master-programmes/ai-driven-mechatronics-and-robotics',
  total_ects: 120,
  standard_duration: '4 semesters full-time',
  faculty_institute: 'Faculty of Mechanical Engineering & Faculty of Electrical Engineering and Computer Science',
  curriculum_structure: 'Compulsory Modules (Data-Driven Control, AI in Engineering, Robotics I) -> Electives Pool -> 12-week Internship -> Master Thesis (30 ECTS)',
  official_modules_breakdown: [
    { category: 'Compulsory Modules', modules: ['Data- and AI-driven Methods in Engineering', 'Data- and Learning Based Control', 'Robotics I (Kinematics, Dynamics, Perception)', 'German Language Course (Integrated)'] },
    { category: 'Elective Catalog', modules: ['Robotics II', 'Artificial Intelligence I & II (Deep Learning)', 'Electrical Machines and Drives', 'Biomedical Engineering II'] },
    { category: 'Practical & Research', modules: ['12-Week Industrial/Research Internship', 'Master Thesis & Colloquium (30 ECTS)'] }
  ],
  exact_admission_regulations: 'Bachelor in Engineering or closely related (180 ECTS). Specific ECTS requirements: Math ≥15 ECTS, Technical Mechanics ≥15 ECTS, Electrical Engineering/Drive Tech ≥20 ECTS, Measurement/Control ≥10 ECTS.',
  gpa_conversion_benchmark: 'No GPA elimination barrier; evaluated strictly on credit check of the above subject areas.',
  language_requirements_verified: 'English C1 required: IELTS 7.0 / TOEFL iBT 95 / PTE 76 / telc C1.',
  special_notes_for_bangladesh: 'Tuition-free public university (TU9 member). Notice: English requirement is C1 (IELTS 7.0 required instead of 6.5). Technical mechanics credits need careful mapping from NSU physics/engineering coursework.',
  university_deep_info: {
    chair_leadership: 'Institute of Mechatronic Systems (ims) & Institute of Automatic Control',
    research_partners: 'Volkswagen Commercial Vehicles, Continental AG, Laser Zentrum Hannover',
    labs_infrastructure: 'Robotics Assembly Testbed, Autonomous Mobile Manipulators, Real-Time Hardware-in-the-Loop Simulation Suites',
    specialized_curriculum_modules: ['Data-Driven Control', 'Deep Learning for Autonomous Robotics', 'Dynamic Modeling & Actuators'],
    career_ecosystem: 'Prominent TU9 engineering university with deep industrial connections across Lower Saxony.'
  },
  gpa_fit: 'moderate',
  gpa_fit_note: 'TU9 tuition-free program. Check: Requires IELTS 7.0 (C1) and 15 ECTS in Technical Mechanics.'
});

// 7. TH Köln - Automation & IT (prog_3961)
enrichProgram('prog_3961', {
  official_source_url: 'https://www.th-koeln.de/en/academics/automation--it-master_7322.php',
  total_ects: 120,
  standard_duration: '4 semesters full-time',
  faculty_institute: 'Faculty of Computer Science and Engineering Systems (Gummersbach Campus)',
  curriculum_structure: 'Sem 1-2 (Lectures, Labs & Electives) -> Sem 3: Team-based Case Studies -> Sem 4: Master Thesis (30 ECTS)',
  official_modules_breakdown: [
    { category: 'Core Curriculum', modules: ['Industrial Communication & Information Security (6 ECTS)', 'Modelling and Simulation of Technical Systems (6 ECTS)', 'Control of Technical Systems (Advanced Process Control) (6 ECTS)', 'Integration of Technical and Business Information Systems (6 ECTS)', 'Optimization of Technical Systems (6 ECTS)'] },
    { category: 'Emerging Technologies', modules: ['Smart Automation & Robotics', 'Data Science, Machine Learning & AI in Industry', 'Industrial Internet of Things (IIoT)'] },
    { category: 'Team & Research', modules: ['Case Studies in Engineering Teams (15 ECTS)', 'Master Thesis (30 ECTS)'] }
  ],
  exact_admission_regulations: 'Bachelor degree in EE, Automation, Computer Science, or Mechatronics. Admission is zulassungsfrei (open/non-restricted) for all who fulfill formal qualifications. Mandatory requirement: 2-page detailed English letter of motivation. Bridge modules up to 30 ECTS possible.',
  gpa_conversion_benchmark: 'German GPA 2.5 or better standard. Candidates with lower GPA are eligible if they demonstrate ≥2 years relevant engineering experience or pass interview.',
  language_requirements_verified: 'IELTS 6.0 / TOEFL iBT 80.',
  special_notes_for_bangladesh: 'Tuition-free public institution. Your 2 years of engineering experience directly overcomes the GPA 2.5 threshold according to official TH Köln admission guidelines!',
  university_deep_info: {
    chair_leadership: 'Campus Gummersbach Department of Automation',
    research_partners: 'Cologne Industrial Automation Cluster, Eaton Industries, Schneider Electric',
    labs_infrastructure: 'Process Control and Fieldbus Lab, Industrial Robotics and Safety Lab, Cyber-Physical Systems Testbed',
    specialized_curriculum_modules: ['Industrial Cyber Security', 'Advanced Control Engineering', 'Distributed Embedded Automation'],
    career_ecosystem: 'North Rhine-Westphalia (NRW) industrial manufacturing and tech belt.'
  },
  gpa_fit: 'good',
  gpa_fit_note: '✅ EXCELLENT ADMISSION MATCH: Admission is officially non-restricted (zulassungsfrei). Your 2 years of engineering experience officially compensates for GPA according to TH Köln SPO!'
});

// 8. TU Dortmund - Automation and Robotics (prog_8996)
enrichProgram('prog_8996', {
  official_source_url: 'https://etit.tu-dortmund.de/studium-und-lehre/studiengaenge/master-automation-and-robotics/',
  total_ects: 120,
  standard_duration: '4 semesters full-time',
  faculty_institute: 'Department of Electrical Engineering and Information Technology (ETIT)',
  curriculum_structure: 'Foundation Phase (Sem 1: 30 ECTS) -> Specialization Phase (Sem 2-3: 60 ECTS, including Project Group) -> Master Thesis Phase (Sem 4: 30 ECTS)',
  official_modules_breakdown: [
    { category: 'Foundation Phase (Sem 1, 30 ECTS)', modules: ['Advanced Engineering Mathematics (6 ECTS)', 'Control Theory and Applications (6 ECTS)', 'Computer Systems (6 ECTS)', 'Modeling and Control of Robotic Manipulators (6 ECTS)', 'Scientific Programming with Matlab in Engineering (6 ECTS)'] },
    { category: 'Specialization Profiles (60 ECTS)', modules: ['Robotics Profile (Kinematics, Autonomous Mobile Robots)', 'Process Automation Profile (Bio-systems, Industrial Control)', 'Cognitive Systems Profile (AI in Control Loops, Computer Vision, Real-Time Image Processing)'] },
    { category: 'Practical & Research', modules: ['Collaborative Project Group (Projektgruppe) (12 ECTS)', 'Master Thesis (30 ECTS)'] }
  ],
  exact_admission_regulations: 'Bachelor in EE, Mechanical Engineering, CS, or related discipline. Prerequisite competencies in mathematics and computer systems checked strictly against Dortmund curriculum order (§3). Non-academic work experience cannot substitute missing credits.',
  gpa_conversion_benchmark: 'No minimum cutoff number listed, but highly selective based on mathematics and computer systems syllabus depth.',
  language_requirements_verified: 'English C1 required: IELTS 7.0 / TOEFL iBT 95 / Cambridge C1 Advanced.',
  special_notes_for_bangladesh: 'Tuition-free public university. Note: Requires English C1 (IELTS 7.0). Strong EEE mathematics foundation helps clear prerequisite checks.',
  university_deep_info: {
    chair_leadership: 'Process Automation Systems (Prof. Dr. Sebastian Engell) & Robotics Research Institute',
    research_partners: 'Fraunhofer IML (Material Flow and Logistics), Bayer AG, ThyssenKrupp, Evonik Industries',
    labs_infrastructure: 'Process Control Testbeds, Robotics Hall, High-Performance Control & Embedded Computing Cluster',
    specialized_curriculum_modules: ['Nonlinear & Robust Control', 'Model Predictive Control', 'Embedded Systems for Robotics'],
    career_ecosystem: 'Ruhr Valley technology and industrial innovation network.'
  },
  gpa_fit: 'moderate',
  gpa_fit_note: 'Tuition-free top program. Requires IELTS 7.0 (C1 level). Mathematics & computer systems curriculum is reviewed stringently.'
});

// 9. TU Chemnitz - Automation, Robotics and Control (prog_11170)
enrichProgram('prog_11170', {
  official_source_url: 'https://www.tu-chemnitz.de/etit/studium/studiengaenge/mAT',
  total_ects: 120,
  standard_duration: '4 semesters full-time',
  faculty_institute: 'Faculty of Electrical Engineering and Information Technology (ETIT)',
  curriculum_structure: 'Foundation Modules (Sem 1: 25 ECTS) -> Track Specialization (20 ECTS) -> Supplementary Electives (30 ECTS) -> Project Groups (15 ECTS) -> Master Thesis (30 ECTS)',
  official_modules_breakdown: [
    { category: 'Compulsory Foundation (Sem 1, 25 ECTS)', modules: ['Mathematics for Engineering Science (5 ECTS)', 'Advanced Linear Control (5 ECTS)', 'Learning Dynamical Systems (5 ECTS)', 'Autonomous Systems (5 ECTS)', 'Robots Modelling and Control (5 ECTS)'] },
    { category: 'Specialization Tracks (20 ECTS)', modules: ['Automation Track (Perception for Autonomous Vehicles, Autonomous Systems Lab)', 'Robotics Track (Advanced Robotics, Embodied AI, Robotics Lab)', 'Control Track (Nonlinear Control, Optimal Control, Control Systems Tech in Apps, Networked Dynamics)'] },
    { category: 'Supplementary Electives (30 ECTS)', modules: ['Optimization in Machine Learning', 'Smart Sensor Systems', 'Neurocomputing & Deep RL', 'German as a Foreign Language'] },
    { category: 'Applied Research', modules: ['Compulsory Engineering Project Groups (15 ECTS)', 'Master Thesis & Colloquium (30 ECTS)'] }
  ],
  exact_admission_regulations: 'Bachelor in EE & IT, Digital Engineering, or equivalent engineering degree. German A1 certificate required.',
  gpa_conversion_benchmark: 'No minimum GPA gate; board of examiners evaluates transcript course coverage.',
  language_requirements_verified: 'English B2 (IELTS 5.5 / TOEFL 72) + German A1.',
  special_notes_for_bangladesh: 'Tuition-free public university. Silicon Saxony technology proximity. Very approachable English requirement (IELTS 5.5).',
  university_deep_info: {
    chair_leadership: 'Chair of Control and System Theory & Chair of Robotics',
    research_partners: 'Fraunhofer ENAS, Chemnitz Intelligent Systems Group, IAV Automotive',
    labs_infrastructure: 'Autonomous Driving Test Track Chemnitz, Mobile Robotics Lab, Networked Control Systems Lab',
    specialized_curriculum_modules: ['Embodied AI & Robotics', 'Nonlinear Control Systems', 'Sensor Fusion & Autonomous Perception'],
    career_ecosystem: 'Seamless pathway into Saxony semiconductor, automation, and automotive hardware industries.'
  },
  gpa_fit: 'good',
  gpa_fit_note: '✅ EXCELLENT FIT: No hard GPA cutoff. IELTS 5.5 is achievable. EEE transcript provides solid background for control and robotics modules.'
});

// 10. University of Bremen - Control, Microsystems, Microelectronics (CMM) (prog_3714)
enrichProgram('prog_3714', {
  official_source_url: 'https://www.uni-bremen.de/fb1/studium/studiengaenge/control-microsystems-microelectronics-cmm-msc',
  total_ects: 120,
  standard_duration: '4 semesters full-time',
  faculty_institute: 'Faculty 01: Physics and Electrical Engineering (FB 01)',
  curriculum_structure: 'Compulsory Core Modules (60 ECTS) -> Practical Labs (6 ECTS) -> Elective Modules (24 ECTS) -> Master Thesis (30 ECTS)',
  official_modules_breakdown: [
    { category: 'Compulsory Core (60 ECTS)', modules: ['Advanced Digital System Design (6 ECTS)', 'Integrated Circuits (6 ECTS)', 'BioMEMS & Biosensor Systems (6 ECTS)', 'Control Theory 1 (6 ECTS)', 'Sensors and Measurement Systems (6 ECTS)', 'Process Automation in Power Grids (6 ECTS)', 'PMA Major Research Project (18 ECTS)'] },
    { category: 'Specialized Labs (6 ECTS)', modules: ['Design of Digital Systems Lab', 'Design of Microelectronics Lab', 'Advanced Control Lab', 'Microsystems & Cleanroom Lab'] },
    { category: 'Elective Catalog (24 ECTS)', modules: ['Control Theory 2', 'Advanced Digital Signal Processing', 'Perception for Robotics', 'Advanced Digital Communications'] },
    { category: 'Master Thesis', modules: ['Master Thesis & Defense (30 ECTS)'] }
  ],
  exact_admission_regulations: 'Bachelor in Electrical Engineering, Microelectronics, Mechatronics, or related STEM discipline (min 180 ECTS). Evaluated based on subject prerequisite credits in digital logic, circuit design, and mathematics.',
  gpa_conversion_benchmark: 'German GPA 2.5 or better benchmark. Strong practical or thesis background in digital logic / RTL design heavily considered by selection committee.',
  language_requirements_verified: 'English B2 (IELTS 6.0 / TOEFL 80). German language module included in semester 1.',
  special_notes_for_bangladesh: 'Tuition-free public university. Directly targets VLSI, Integrated Circuits, and Digital Systems Design — perfectly aligned with your RTL/UVM background!',
  university_deep_info: {
    chair_leadership: 'Institute for Microsensors, Actuators and Systems (IMSAS) & ITEM',
    research_partners: 'Fraunhofer IFAM, DLR Institute of Space Systems, OHB SE, Atlas Elektronik',
    labs_infrastructure: '450 m² Class 10/100 Microfabrication Cleanroom, Integrated Circuit Design and Characterization Labs, FPGA Prototyping Suites',
    specialized_curriculum_modules: ['Advanced Digital System Design (Verilog/VHDL)', 'CMOS Integrated Circuit Design', 'MEMS Sensor Interfacing'],
    career_ecosystem: 'Leading German hub for microsystems, cleanroom fabrication, aerospace sensors, and microelectronics.'
  },
  gpa_fit: 'good',
  gpa_fit_note: '🎯 PRIME TARGET: Completely aligned with RTL Design & Verification! Offers dedicated modules in Integrated Circuits and Advanced Digital System Design.'
});

// 11. Kiel University - Electric Vehicle Propulsion and Control (E-PiCo) (prog_7067)
enrichProgram('prog_7067', {
  official_source_url: 'https://master-epico.ec-nantes.fr',
  total_ects: 120,
  standard_duration: '4 semesters full-time (Erasmus Mundus)',
  faculty_institute: 'Centrale Nantes (Coordinator) + Kiel University (Faculty of Engineering) + Consortium',
  curriculum_structure: 'Sem 1 at Centrale Nantes (Foundations: 30 ECTS) -> Sem 2 at Kiel University (Power Electronics & Drives: 30 ECTS) -> Sem 3 at Partner University (Specialization: 30 ECTS) -> Sem 4: Master Thesis (30 ECTS)',
  official_modules_breakdown: [
    { category: 'Semester 1 (Centrale Nantes)', modules: ['Control Systems (4 ECTS)', 'Embedded Computing (4 ECTS)', 'Statistical Signal Processing (4 ECTS)', 'Electric and Hydrogen Vehicle Modelling (4 ECTS)', 'E-PiCo Research Project (4 ECTS)'] },
    { category: 'Semester 2 (Kiel University Track)', modules: ['Design of Power Electronics Converters (5 ECTS)', 'Wide-Bandgap Semiconductors (SiC/GaN) in Power Electronics', 'Microcontroller & FPGA Techniques for Power Converters', 'Advanced Digital Signal Processing', 'German Language & Culture (5 ECTS)'] },
    { category: 'Semester 3 & 4', modules: ['Advanced Specialization in Energy Storage / Autonomous EV Control', 'Master Thesis (30 ECTS)'] }
  ],
  exact_admission_regulations: 'Bachelor in Electrical Engineering, Control Engineering, Mechatronics, or Physics (180 ECTS). Erasmus Mundus consortium merit competition.',
  gpa_conversion_benchmark: 'Highly competitive GPA requirement (~3.5/4.0 scale) for full Erasmus Mundus scholarships; self-funded spots also consider engineering experience.',
  language_requirements_verified: 'IELTS 6.5 / TOEFL iBT 90 (B2+/C1 level).',
  special_notes_for_bangladesh: 'Consortium participation fee applies for self-funded students. Cleanroom & Wide-Bandgap Semiconductor focus at Kiel University.',
  university_deep_info: {
    chair_leadership: 'Chair of Power Electronics (Prof. Dr. Marco Liserre), Kiel University',
    research_partners: 'Danfoss Silicon Power, Infineon Technologies, European Space Agency (ESA)',
    labs_infrastructure: 'High-Power Semiconductor Testbeds, FPGA-Based Power Converter Controls Lab, Real-Time Hardware-in-the-Loop Simulators',
    specialized_curriculum_modules: ['FPGA Implementation for Power Electronics', 'Wide-Bandgap Semiconductor Devices', 'Converter Reliability & Health Monitoring'],
    career_ecosystem: 'Leading European elite consortium for electric mobility, smart grid hardware, and power semiconductor engineering.'
  },
  gpa_fit: 'borderline',
  gpa_fit_note: 'Prestigious Erasmus Mundus program. Scholarship admission is highly competitive, but the Kiel track provides world-class wide-bandgap semiconductor and FPGA exposure.'
});

// 12. Anhalt UAS - Electrical and Computer Engineering (prog_8357)
enrichProgram('prog_8357', {
  official_source_url: 'https://www.hs-anhalt.de/en/study/orient/courses-on-offer/detail/electrical-and-computer-engineering-master-of-engineering.html',
  total_ects: 90,
  standard_duration: '3 semesters full-time',
  faculty_institute: 'Department of Electrical Engineering, Mechanical Engineering and Industrial Engineering (Köthen Campus)',
  curriculum_structure: 'Core Modules (30 ECTS) -> Major Field Specialization (Sem 1-2: 30 ECTS) -> Master Thesis & Colloquium (Sem 3: 30 ECTS)',
  official_modules_breakdown: [
    { category: 'Core Modules (6 ECTS each)', modules: ['Control Systems', 'Sensor and Actuator Technology', 'Machine Learning & Artificial Intelligence', 'Statistical Methods in Engineering'] },
    { category: 'Embedded Systems Engineering Major', modules: ['Embedded Hardware Architecture', 'Microcontroller & Real-Time Operating Systems', 'Hardware/Software Co-Design', 'Digital Communication Protocols'] },
    { category: 'Alternative Majors', modules: ['Automation Engineering Track', 'Communication Engineering Track'] },
    { category: 'Master Thesis Phase', modules: ['Master Thesis (27 ECTS)', 'Master Colloquium (3 ECTS)'] }
  ],
  exact_admission_regulations: 'Bachelor in Electrical Engineering, Computer Engineering, or related engineering degree (210 ECTS standard; 180 ECTS graduates take bridge semester/modules).',
  gpa_conversion_benchmark: 'German GPA 2.5 or better.',
  language_requirements_verified: 'IELTS 6.0 / TOEFL iBT 79 (B2 Level).',
  special_notes_for_bangladesh: 'Tuition-free public university. 90 ECTS program allows fast completion in 1.5 years.',
  university_deep_info: {
    chair_leadership: 'Department of Electrical Engineering, Köthen',
    research_partners: 'Central German regional technology cluster, industrial automation & embedded IoT SMEs',
    labs_infrastructure: 'Embedded Systems Prototyping Lab, Microelectronics Simulation Suites, Industrial Automation Center',
    specialized_curriculum_modules: ['Embedded System Architecture', 'Real-Time Embedded Firmware', 'Advanced Sensor Systems'],
    career_ecosystem: 'Solid industrial placement pipeline across Saxony-Anhalt and neighboring Leipzig/Halle metropolitan area.'
  },
  gpa_fit: 'good',
  gpa_fit_note: '✅ SOLID EMBEDDED FIT: Tuition-free 3-semester program. The Embedded Systems Engineering track matches your hardware/microcontroller background.'
});

// 13. OTH Regensburg - Electrical and Microsystems Engineering (prog_4587)
enrichProgram('prog_4587', {
  official_source_url: 'https://www.oth-regensburg.de/fakultaeten/elektro-und-informationstechnik/studiengaenge/master-electrical-and-microsystems-engineering',
  total_ects: 90,
  standard_duration: '3 semesters full-time (dual study available)',
  faculty_institute: 'Faculty of Applied Natural Sciences (ANK) & Faculty of Electrical Engineering and Information Technology (EI)',
  curriculum_structure: 'Foundation Modules (Basismodule: 20 ECTS) -> Consolidation Electives (Vertiefungsmodule: 20 ECTS) -> Interdisciplinary Skills (18 ECTS) -> Research Project (6 ECTS) -> Master Thesis (26 ECTS)',
  official_modules_breakdown: [
    { category: 'Microelectronics & Embedded Systems', modules: ['Multiprocessor and Multicore Designs for Reliable Embedded Systems (DRES)', 'Surface Engineering of Semiconductor Materials', 'Physics of Semiconductor Components (BEP)', 'Microcontrollers & Advanced Signal Processing'] },
    { category: 'Semiconductor & Microsystems Tech', modules: ['Advanced Packaging & LED Technology', 'Quantum Theory & Information', 'Applied Optics and Photonics'] },
    { category: 'Research & Applied Work', modules: ['Specialized Research Project (Projektarbeit) (6 ECTS)', 'Master Thesis with Industry (26 ECTS)'] }
  ],
  exact_admission_regulations: 'Bachelor in Electrical Engineering, Microsystems Engineering, Physics, or Mechatronics (210 ECTS standard, 180 ECTS holders can clear missing credits during program).',
  gpa_conversion_benchmark: 'German GPA 2.5 or better required by SPO.',
  language_requirements_verified: 'English B2 (IELTS 6.0 / TOEFL 80). Program offers fully English-taught study tracks.',
  special_notes_for_bangladesh: 'Tuition-free public university in Bavaria. Regensburg is home to Infineon Technologies (major chip fabrication fab), OSRAM Opto Semiconductors, and Continental Automotive/Vitesco.',
  university_deep_info: {
    chair_leadership: 'Joint Directorate: Faculty of Applied Natural Sciences & Faculty of Electrical Engineering',
    research_partners: 'Infineon Technologies Regensburg Fab, OSRAM Opto Semiconductors, Vitesco Technologies, BMW Regensburg Plant',
    labs_infrastructure: 'State-of-the-art Cleanroom Lab, Microelectronics Testing and Reliability Lab, Embedded Multicore Architecture Lab',
    specialized_curriculum_modules: ['Multicore Embedded Architectures', 'Semiconductor Component Physics', 'Advanced IC Packaging & Verification'],
    career_ecosystem: 'Bavaria semiconductor silicon powerhouse. Immediate co-op, working student (Werkstudent), and thesis opportunities at Infineon Regensburg cleanrooms.'
  },
  gpa_fit: 'good',
  gpa_fit_note: '🎯 TOP SEMICONDUCTOR/VLSI FIT: Direct pipeline to Infineon Regensburg and OSRAM! Dedicated multicore embedded design and semiconductor fabrication modules.'
});

// 14. University of Siegen - Electrical Engineering: Electronics Design (prog_7927)
enrichProgram('prog_7927', {
  official_source_url: 'https://www.eti.uni-siegen.de/edes/',
  total_ects: 120,
  standard_duration: '4 semesters full-time',
  faculty_institute: 'Department of Electrical Engineering and Computer Science (Faculty IV)',
  curriculum_structure: 'Core Foundations (Sem 1: 30 ECTS) -> Advanced Specialization & Labs (Sem 2-3: 60 ECTS) -> Master Thesis (Sem 4: 30 ECTS)',
  official_modules_breakdown: [
    { category: 'Core Electronics Foundations', modules: ['Semiconductor Electronics Design (Computer-based modeling, SPICE, VLSI basics) (6 ECTS)', 'Analogue Integrated Circuits (Analog IC Design) (6 ECTS)', 'Electromagnetic Field Theory (6 ECTS)', 'Microelectronics Sensors (6 ECTS)'] },
    { category: 'Advanced IC & System Design', modules: ['Digital IC Design (VLSI / ASIC / Verilog) (6 ECTS)', 'Embedded Systems (Reliability & Real-Time) (6 ECTS)', 'Radio Frequency (RF) IC Design (6 ECTS)', 'Microsystem Fabrication & Test / Nanotechnology (6 ECTS)'] },
    { category: 'Research & Labs', modules: ['Research Laboratory Projects within ETI institutes', 'Master Thesis (30 ECTS)'] }
  ],
  exact_admission_regulations: 'Bachelor degree in Electrical Engineering or closely related discipline (180 ECTS). Curriculum must demonstrate solid foundations in circuit theory, electronics, and mathematics.',
  gpa_conversion_benchmark: 'German GPA 2.5 or better benchmark. Strong practical background in digital/analog electronics heavily considered.',
  language_requirements_verified: 'English B2 (IELTS 6.0 / TOEFL iBT 80).',
  special_notes_for_bangladesh: 'Tuition-free public university. Zero tuition fees. Has dedicated European double-degree partner track (ATHENA). Elite IC design curriculum.',
  university_deep_info: {
    chair_leadership: 'Institute of Microelectronics and Analogue Circuit Design & Chair of Computer Engineering',
    research_partners: 'Center for Micro- and Nanochemistry and Engineering (C$\mu$), Fraunhofer FHR, regional electronics industry',
    labs_infrastructure: 'Integrated Circuit Design Lab (Cadence, Synopsys, Mentor EDA suites), Cleanroom Microsystem Testbeds, RF Measurement Chambers',
    specialized_curriculum_modules: ['Digital IC Design & VLSI Architecture', 'Analogue Integrated Circuit Layout', 'Semiconductor SPICE Modeling'],
    career_ecosystem: 'Direct path to European semiconductor design houses, EDA companies, and automotive microelectronics R&D.'
  },
  gpa_fit: 'good',
  gpa_fit_note: '🎯 DIRECT RTL / IC DESIGN MATCH: Syllabus explicitly covers Digital IC Design (VLSI), Analogue Integrated Circuits, and Semiconductor Modeling with full EDA suites.'
});

// 15. RWU - Electrical Engineering and Embedded Systems (prog_4201)
enrichProgram('prog_4201', {
  official_source_url: 'https://www.rwu.de/en/study/degree-programs/electrical-engineering-and-embedded-systems',
  total_ects: 90,
  standard_duration: '3 semesters full-time',
  faculty_institute: 'Faculty of Electrical Engineering and Computer Science',
  curriculum_structure: 'Foundation & Profile (Sem 1) -> Advanced Control & Signal Processing (Sem 2) -> Research & Master Thesis (Sem 3: 25 ECTS)',
  official_modules_breakdown: [
    { category: 'System-on-Chip & Microelectronics', modules: ['System-on-Chip (SoC) Design & Operation (Modeling, Design, Test)', 'Computer Architecture & Microprocessors', 'Embedded Computing Labs & Seminars'] },
    { category: 'Signals & Systems', modules: ['Digital Signal Processing & Digital Filters', 'Near-Field Communication & Wireless Systems', 'Embedded Control Systems & Labs'] },
    { category: 'Advanced Electives & Thesis', modules: ['Lidar & Radar Systems', 'Computer Vision & Machine Learning', 'Research Project in University Labs', 'Master Thesis & Colloquium (25 ECTS)'] }
  ],
  exact_admission_regulations: 'Bachelor degree in Electrical Engineering, Computer Engineering, or Mechatronics (210 ECTS standard; 180 ECTS holders admit with bridging condition).',
  gpa_conversion_benchmark: 'German GPA 2.5 or better benchmark.',
  language_requirements_verified: 'English B2 (IELTS 6.0 / TOEFL iBT 80).',
  special_notes_for_bangladesh: 'Located in Baden-Württemberg (standard state tuition 1,500 EUR/sem applies for non-EU students). Located near Lake Constance (Bodensee) technology belt (ZF Friedrichshafen, Rolls-Royce Power Systems).',
  university_deep_info: {
    chair_leadership: 'Department of Electrical Engineering, Weingarten',
    research_partners: 'ZF Friedrichshafen AG (automotive electronics), Airbus Defence & Space, Liebherr, ifm electronic',
    labs_infrastructure: 'System-on-Chip FPGA Lab, Embedded Automotive Bus Systems Lab (CAN/LIN/FlexRay), Signal Processing Testbeds',
    specialized_curriculum_modules: ['System-on-Chip Design & Verification', 'Embedded Control Architectures', 'Wireless Communication Protocols'],
    career_ecosystem: 'Direct access to South German automotive and industrial embedded systems leaders.'
  },
  gpa_fit: 'good',
  gpa_fit_note: '🎯 STRONG SoC & EMBEDDED MATCH: Features System-on-Chip (SoC) Design, computer architecture, and embedded labs. Note: Baden-Württemberg 1,500 EUR/sem fee.'
});

// 16. Darmstadt UAS (h_da) - Electrical Engineering and IT: Embedded Systems & Microelectronics (prog_3980)
enrichProgram('prog_3980', {
  official_source_url: 'https://mse.h-da.de',
  total_ects: 120,
  standard_duration: '4 semesters full-time (international track with internship)',
  faculty_institute: 'Department of Electrical Engineering and Information Technology (EIT)',
  curriculum_structure: 'Technical Management & Semester Project (Sem 1) -> EMIC Major Modules (Sem 1-2) -> 6-Month Industrial Internship (Sem 3) -> Master Thesis (Sem 4: 30 ECTS)',
  official_modules_breakdown: [
    { category: 'Embedded Systems & Microelectronics (EMIC)', modules: ['CMOS Analog Circuits (Transistor-level design, layout, simulation) (5 ECTS)', 'Digital System Design & Configurable Hardware (FPGAs/VHDL/Verilog)', 'Mixed-Signal Integrated Circuit Design', 'Safety and Security in Embedded Systems Architecture'] },
    { category: 'Engineering Management & Projects', modules: ['Technical Management & Work Package Contracts', 'Hands-on Semester Engineering Project', 'Interdisciplinary Technology Electives'] },
    { category: 'Industrial & Research Phase', modules: ['6-Month Mandatory Industrial Internship in Germany', 'Master Thesis & Defense (30 ECTS)'] }
  ],
  exact_admission_regulations: 'Bachelor in Electrical Engineering, Information Technology, or closely related field (180 or 210 ECTS).',
  gpa_conversion_benchmark: 'German GPA 2.5 or better standard.',
  language_requirements_verified: 'English B2 (IELTS 6.0 / TOEFL iBT 80).',
  special_notes_for_bangladesh: 'Tuition-free public university in Hessen. Zero tuition fees. Darmstadt is known as the "City of Science" located inside the Frankfurt Rhine-Main metropolitan area.',
  university_deep_info: {
    chair_leadership: 'MSE Steering Committee, Department of Electrical Engineering',
    research_partners: 'Fraunhofer LBF, Merck KGaA, ESOC (European Space Operations Centre), Continental Engineering Services',
    labs_infrastructure: 'Integrated Microelectronics CAD Suites (Cadence/Synopsys), Modern FPGA Verification Benches, Cleanroom Microsensor Lab',
    specialized_curriculum_modules: ['Configurable Hardware / FPGA Architecture', 'CMOS Integrated Circuit Layout', 'Hardware-Software Co-Design'],
    career_ecosystem: 'Frankfurt Rhine-Main high-tech corridor. Includes an integrated 6-month full-time industrial internship, guaranteeing real German industry experience before graduation.'
  },
  gpa_fit: 'good',
  gpa_fit_note: '🎯 PRIME TARGET: Has dedicated "Embedded Systems & Microelectronics" (EMIC) major, CMOS Analog Circuits, and includes a mandatory 6-month industrial internship in Germany!'
});

// 17. RPTU Kaiserslautern - Embedded Computing Systems (ESY) (prog_3590)
enrichProgram('prog_3590', {
  official_source_url: 'https://eit.rptu.de/en/esy/',
  total_ects: 120,
  standard_duration: '4 semesters full-time',
  faculty_institute: 'Department of Electrical Engineering and Information Technology (EIT)',
  curriculum_structure: 'Core Program (35-55 ECTS) -> Elective Specialization (35-55 ECTS) -> Master Thesis (Sem 4: 30 ECTS)',
  official_modules_breakdown: [
    { category: 'Three Teaching Pillars', modules: ['1. Architectures of Hardware and Software Systems', '2. Design Methodologies for Systems-on-Chip (SoC) and Embedded Systems', '3. Embedded System Applications'] },
    { category: 'Core Compulsory Modules', modules: ['Architecture of Digital Systems I & II (RISC architectures, logic synthesis, hardware design)', 'Embedded Processor Lab (Hands-on processor interfacing & assembly/C)', 'Embedded Systems Laboratory (FPGA system implementation & hardware-software interfacing)'] },
    { category: 'Specialized Electives', modules: ['Hardware Verification & Testing (UVM/SystemVerilog)', 'Microsystems & Sensor Interfacing', 'Communication & Real-Time Signal Processing'] },
    { category: 'Master Thesis', modules: ['Master Thesis in Department or Research Institute (30 ECTS)'] }
  ],
  exact_admission_regulations: 'Bachelor in Electrical Engineering, Computer Engineering, or related discipline (180 ECTS). GRE General Test recommended but not mandatory. 2 recommendation letters required.',
  gpa_conversion_benchmark: 'Department guidelines state GPA benchmark of 3.5/4.0, but candidates with relevant hardware/SoC experience and solid recommendation letters are reviewed holistically.',
  language_requirements_verified: 'English B2 (IELTS 6.0 / TOEFL iBT 80).',
  special_notes_for_bangladesh: 'Tuition-free public research university. Kaiserslautern hosts the German Research Center for Artificial Intelligence (DFKI) and Fraunhofer ITWM.',
  university_deep_info: {
    chair_leadership: 'Design of Cyber-Physical Systems (Prof. Dr. Christoph Grimm) & Electronic Design Automation (Prof. Dr. Wolfgang Kunz)',
    research_partners: 'DFKI (German Research Center for AI), Fraunhofer ITWM, Fraunhofer IESE, Intel Labs, Bosch',
    labs_infrastructure: 'EDA Design & Formal Verification Labs, Embedded Processor & FPGA Hardware Testbeds, SoC Emulation Systems',
    specialized_curriculum_modules: ['Formal Hardware Verification', 'System-on-Chip Design Methodologies', 'Architecture of Digital Systems'],
    career_ecosystem: 'World-renowned academic hub for Electronic Design Automation (EDA), hardware verification, and embedded computing systems.'
  },
  gpa_fit: 'moderate',
  gpa_fit_note: '🎯 ELITE HARDWARE/EDA FOCUS: Led by world authorities in formal verification and SoC design (Kunze, Grimm). 2 years RTL/UVM industry experience is a massive asset here!'
});

// Save updated database
const fileContent = 'const DATABASE = ' + JSON.stringify(db, null, 2) + ';\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = DATABASE;\n}\n';
fs.writeFileSync('database.js', fileContent, 'utf8');
console.log('Successfully saved database.js with Batch of official scraped data!');
