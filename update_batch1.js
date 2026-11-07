const fs = require('fs');
const db = require('./database.js');

// 1. RWTH Aachen - Computer Engineering (prog_5226) & Micro- and Nanoelectronics Major (prog_4811)
const rwth_ce = db.programs.find(p => p.id === 'prog_5226');
if (rwth_ce) {
  rwth_ce.requirements_registration.academic_requirements = 'Bachelor degree in EE, IT or Computer Engineering. Prüfungsordnung mandates minimum prior credits: Advanced Mathematics (≥25 ECTS), Fundamentals of Electrical Engineering (≥23 ECTS), Informatics/Programming (≥16 ECTS), Field Theory (≥10 ECTS), Control Systems (≥10 ECTS), Physics of Devices (≥5 ECTS). Mandatory bridging courses (max 25 ECTS) assigned for minor credit gaps.';
  rwth_ce.requirements_registration.gre = 'MANDATORY for Non-EU/EEA applicants (Institution Code: 8504). Strong quantitative score required.';
  rwth_ce.requirements_registration.ielts = 'IELTS 6.5 or TOEFL iBT 90.';
  rwth_ce.gpa_fit = 'risky';
  rwth_ce.gpa_fit_note = 'Prestigious TU9 program. Official regulations strictly require GRE General Test for Non-EU applicants + specific subject credit minimums (Math ≥25 ECTS). NSU EEE covers the course credits, but GRE is mandatory.';
  console.log('Updated RWTH prog_5226');
}

const rwth_mina = db.programs.find(p => p.id === 'prog_4811');
if (rwth_mina) {
  rwth_mina.requirements_registration.academic_requirements = 'Specialized Major under M.Sc. Electrical Engineering, IT and Computer Engineering. Subject-credit minimums: Math (≥25 ECTS), EE Fundamentals (≥23 ECTS), Informatics (≥16 ECTS), Field Theory (≥10 ECTS), Systems Theory (≥10 ECTS), Physics of Semiconductor Devices (≥5 ECTS). Includes mandatory 18-week industrial practical/internship.';
  rwth_mina.requirements_registration.gre = 'MANDATORY for Non-EU/EEA applicants (Institution Code: 8504).';
  rwth_mina.requirements_registration.ielts = 'IELTS 6.5 or TOEFL iBT 90.';
  rwth_mina.gpa_fit = 'risky';
  rwth_mina.gpa_fit_note = 'Top German microelectronics track. GRE is strictly mandatory for Bangladeshi applicants. High curriculum alignment with your semiconductor experience.';
  console.log('Updated RWTH prog_4811');
}

// 2. RPTU Kaiserslautern - Embedded Computing Systems (prog_3590)
const rptu_esy = db.programs.find(p => p.id === 'prog_3590');
if (rptu_esy) {
  rptu_esy.requirements_registration.academic_requirements = 'Bachelor in Electrical Engineering, Computer Engineering or related field (120 ECTS Master). Comprehensive subject review of hardware/software curriculum. Requires 2 letters of recommendation from university professors or industry managers, and Statement of Intent.';
  rptu_esy.requirements_registration.gpa_requirement = 'Official departmental guideline recommends CGPA not lower than 3.5 / 4.0 (or European grade B or better).';
  rptu_esy.requirements_registration.ielts = 'IELTS 6.0 - 6.5 / TOEFL iBT 80-95.';
  rptu_esy.gpa_fit = 'risky';
  rptu_esy.gpa_fit_note = 'Strong embedded systems program. Note that RPTU explicitly states a 3.5/4.0 benchmark in their admission guidance, making 2.8 CGPA a challenge unless strong industry recommendations offset it.';
  console.log('Updated RPTU prog_3590');
}

// 3. Ravensburg-Weingarten UAS (RWU) - Electrical Engineering and Embedded Systems (prog_4201)
const rwu = db.programs.find(p => p.id === 'prog_4201');
if (rwu) {
  rwu.requirements_registration.academic_requirements = 'Bachelor degree in EE, Electronics, Automation or CS (210 ECTS standard; 180 ECTS graduates must complete 30 ECTS bridging before thesis). Explicit technical requirements: Strong Mathematics, HDL (VHDL / Verilog), and C/C++ programming.';
  rwu.requirements_registration.gpa_requirement = 'German grade 2.5 or better.';
  rwu.requirements_registration.ielts = 'IELTS 6.0 - 6.5 / TOEFL iBT 79+.';
  rwu.costs_funding.tuition = '1,500 EUR per semester (Baden-Württemberg non-EU tuition).';
  rwu.gpa_fit = 'good';
  rwu.gpa_fit_note = '✅ HIGH RELEVANCE: Official curriculum explicitly lists Verilog/HDL and Embedded C as mandatory prerequisites — which you practice daily in your RTL design job! 2.8 CGPA is viable for UAS admission.';
  console.log('Updated RWU prog_4201');
}

// 4. TUM - MSc Microelectronics and Chip Design (prog_9918)
const tum_mcd = db.programs.find(p => p.id === 'prog_9918');
if (tum_mcd) {
  tum_mcd.requirements_registration.academic_requirements = 'Bachelor degree in ECE, CS or Physics (120 ECTS). Requires 2-stage Aptitude Assessment Procedure (Eignungsverfahren). Stage 1: Curricular analysis of mathematics, electronics, and hardware design + Bachelor grades. Score ≥75 gets direct admission, 60-74 invited to Stage 2 interview.';
  tum_mcd.requirements_registration.gpa_requirement = 'No strict GPA cutoff; holistic points-based aptitude assessment + interview.';
  tum_mcd.requirements_registration.ielts = 'IELTS 6.5 minimum (or TOEFL iBT 88+).';
  tum_mcd.costs_funding.tuition = '6,000 EUR per semester (TUM non-EU tuition introduced recently).';
  tum_mcd.gpa_fit = 'risky';
  tum_mcd.gpa_fit_note = 'Germany’s flagship chip design program. Admission is points-based through curricular review and interview. Note: TUM now charges 6,000 EUR/semester tuition fee for non-EU students.';
  console.log('Updated TUM prog_9918');
}

const fileContent = 'const DATABASE = ' + JSON.stringify(db, null, 2) + ';\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = DATABASE;\n}\n';
fs.writeFileSync('database.js', fileContent, 'utf8');
console.log('Successfully updated Batch 1 core programs into database.js');

