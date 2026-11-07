const fs = require('fs');
const db = require('./database.js');

// 1. TU Chemnitz - Design and Test for Integrated Circuits (prog_9622)
const chemnitz = db.programs.find(p => p.id === 'prog_9622');
if (chemnitz) {
  chemnitz.requirements_registration.academic_requirements = 'Zulassungsfrei (Open Admission / No NC). Bachelor degree in Electrical Engineering, Information Technology or closely related field. Core modules in digital systems design, circuit testing, micro/nano technologies. Direct application via TU Chemnitz EduApplication portal (or uni-assist routing for non-EU applicants).';
  chemnitz.requirements_registration.gpa_requirement = 'Open Admission (Zulassungsfrei) — No strict minimum NC cutoff. Competence-based qualification.';
  chemnitz.gpa_fit = 'good';
  chemnitz.gpa_fit_note = '✅ HIGH CHANCE: Open Admission (Zulassungsfrei). 2.8 CGPA is completely accepted as long as EEE bachelor core requirements are satisfied. Strongest fit for RTL/UVM background.';
  console.log('Updated Chemnitz prog_9622');
}

// 2. Bremerhaven - Embedded Systems Design (prog_4399)
const bremerhaven = db.programs.find(p => p.id === 'prog_4399');
if (bremerhaven) {
  bremerhaven.requirements_registration.academic_requirements = 'Bachelor in Engineering or technical field (210 ECTS, or 180 ECTS with bridging). Subject background: Electrical Engineering, Digital Technology, Mathematics, Control Engineering, Software Development.';
  bremerhaven.requirements_registration.gpa_requirement = 'German grade 2.3 or better. CRITICAL EXCEPTION: Applicants with 2+ years of relevant professional engineering experience after Bachelor receive a 0.3 grade bonus (acceptance threshold relaxed to 2.6 German scale / ~2.7-2.8 US CGPA).';
  bremerhaven.gpa_fit = 'good';
  bremerhaven.gpa_fit_note = '✅ GOLDEN MATCH: Official policy explicitly grants a 0.3 grade bonus for 2+ years relevant professional experience, making your 2-year RTL/UVM experience directly qualify you despite 2.8 CGPA!';
  console.log('Updated Bremerhaven prog_4399');
}

// 3. TU Dresden - Nanoelectronic Systems (prog_4257)
const dresden = db.programs.find(p => p.id === 'prog_4257');
if (dresden) {
  dresden.requirements_registration.academic_requirements = 'Bachelor in Electrical Engineering, Information Technology, Physics or equivalent. Specific prerequisite components required (at most 1 missing may be made up): 1) Advanced Mathematics, 2) Analogue & Digital Circuit Design, 3) Electromagnetic Fields, 4) Systems Theory, 5) Electron Devices/Semiconductors, 6) Object-Oriented Programming (C++/Java).';
  dresden.requirements_registration.gpa_requirement = 'Holistic assessment by Examination Board; strong performance in electronics & math modules.';
  dresden.requirements_registration.ielts = 'IELTS 6.5 (CEFR B2 Level officially confirmed)';
  dresden.requirements_registration.toefl = 'TOEFL iBT 94+';
  dresden.gpa_fit = 'moderate';
  dresden.gpa_fit_note = 'Saxony Silicon hub (Infineon, GlobalFoundries). NSU EEE transcript covers 5 of 6 subject prerequisites. Strong SOP emphasizing your RTL/FPGA design work makes you a viable contender.';
  console.log('Updated Dresden prog_4257');
}

// 4. BTU Cottbus - Micro- and Nanoelectronics (prog_9676)
const btu = db.programs.find(p => p.id === 'prog_9676');
if (btu) {
  btu.requirements_registration.academic_requirements = 'Bachelor in Electrical Engineering / Information Technology or Physics (120 ECTS program). Subject profile requires coursework in: Electromagnetic Field Theory, Semiconductors / Solid-state physics, Signals & Systems, Core Mathematics & Electronics. Introductory bridging modules available in semester 1.';
  btu.requirements_registration.gpa_requirement = 'No published numerical GPA cutoff; subject-competency and core EEE syllabus match is primary screening criteria.';
  btu.gpa_fit = 'good';
  btu.gpa_fit_note = '✅ STRONG FIT: 0 EUR tuition, Brandenburg. Admission is governed by EEE curriculum alignment rather than strict GPA barrier. NSU syllabus matches Profile B requirements.';
  console.log('Updated BTU Cottbus prog_9676');
}

// 5. University of Bremen - Control, Microsystems, Microelectronics (CMM) (prog_3714)
const bremen = db.programs.find(p => p.id === 'prog_3714');
if (bremen) {
  bremen.requirements_registration.academic_requirements = 'Bachelor in Electrical Engineering, Automation, Microelectronics or Microsystems (at least 180 ECTS). Requires curriculum vitae and structured motivation letter.';
  bremen.requirements_registration.ielts = 'CEFR C1 level required (IELTS 7.0 or Bachelor degree fully taught in English letter / Medium of Instruction certificate accepted).';
  bremen.requirements_registration.gpa_requirement = 'Above-average Bachelor qualification (evaluated holistically with CV and motivation letter).';
  bremen.gpa_fit = 'moderate';
  bremen.gpa_fit_note = 'Curriculum is an exact match for microelectronics & control. Note: English bar is C1 (requires IELTS 7.0 or official Medium of Instruction English certificate from NSU).';
  console.log('Updated Bremen prog_3714');
}

// 6. University of Freiburg - Embedded Systems Engineering (prog_4360)
const freiburg = db.programs.find(p => p.id === 'prog_4360');
if (freiburg) {
  freiburg.requirements_registration.academic_requirements = 'Bachelor degree in ESE, Mechatronics, EE, IT or CS (min 180 ECTS). Official Prüfungsordnung requires proof of 110 ECTS across: Computer Science (≥26 ECTS), Mathematics (≥20 ECTS), Electrical Engineering (≥20 ECTS), Physics (≥20 ECTS), Microsystems (≥10 ECTS). Conditional admission (Auflagen) granted for minor gaps.';
  freiburg.requirements_registration.gpa_requirement = 'Competitive admission; non-EU tuition is 1,500 EUR/semester (Baden-Württemberg).';
  freiburg.requirements_registration.ielts = 'CEFR C1 level (IELTS 7.0 / TOEFL 95+)';
  freiburg.gpa_fit = 'risky';
  freiburg.gpa_fit_note = 'Competitive academic threshold and requires C1 English + 1,500 EUR/sem non-EU tuition. Keep as ambitious reach school.';
  console.log('Updated Freiburg prog_4360');
}

const fileContent = 'const DATABASE = ' + JSON.stringify(db, null, 2) + ';\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = DATABASE;\n}\n';
fs.writeFileSync('database.js', fileContent, 'utf8');
console.log('Successfully written official university updates into database.js');

