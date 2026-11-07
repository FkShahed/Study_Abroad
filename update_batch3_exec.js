const fs = require('fs');
const db = require('./database.js');

// 1. TH Rosenheim - Advanced Industrial Engineering (prog_8579)
const rosenheim = db.programs.find(p => p.id === 'prog_8579');
if (rosenheim) {
  rosenheim.requirements_registration.academic_requirements = 'Bachelor degree in Industrial Engineering, Management and Engineering or equivalent technical/business degree (180-210 ECTS). Candidates with 180 ECTS admitted under condition to complete missing 30 ECTS before thesis.';
  rosenheim.requirements_registration.gpa_requirement = 'German grade equivalent of 2.0 or better required.';
  rosenheim.requirements_registration.ielts = 'IELTS 6.0 (or TOEFL 72 / B2 Level).';
  rosenheim.gpa_fit = 'risky';
  rosenheim.gpa_fit_note = 'Requires German 2.0 or better GPA threshold, making 2.8 CGPA risky. Industrial engineering focus rather than core RTL/chip design.';
  console.log('Updated TH Rosenheim prog_8579');
}

// 2. TU Chemnitz - Advanced Manufacturing (prog_7612)
const chemnitz_am = db.programs.find(p => p.id === 'prog_7612');
if (chemnitz_am) {
  chemnitz_am.requirements_registration.academic_requirements = 'First qualifying degree in Engineering or Natural Sciences. Prüfungsordnung mandates specific ECTS minimums: Special Mathematical Methods (≥18 ECTS), Engineering Data Processing (≥12 ECTS), Metrology & Control (≥8 ECTS), New Materials (≥8 ECTS), Theoretical Engineering Basics (≥12 ECTS), Resource-Efficient Manufacturing (≥8 ECTS).';
  chemnitz_am.requirements_registration.gpa_requirement = 'Skill-based and ECTS credit-distribution evaluation by Examination Board. No strict NC cutoff.';
  chemnitz_am.requirements_registration.ielts = 'IELTS 5.5+ (CEFR B2 Level).';
  chemnitz_am.gpa_fit = 'good';
  chemnitz_am.gpa_fit_note = '✅ HIGH FIT: Competence-based qualification. 2.8 CGPA is completely fine. Focuses heavily on manufacturing systems and automation.';
  console.log('Updated TU Chemnitz prog_7612');
}

// 3. TU Bergakademie Freiberg - Advanced Materials Analysis (prog_5403)
const freiberg = db.programs.find(p => p.id === 'prog_5403');
if (freiberg) {
  freiberg.requirements_registration.academic_requirements = 'Bachelor in Materials Science, Physics, Chemistry, Electrical Engineering, or Engineering Sciences with focus on Materials (min 6 semesters / 180 ECTS). Requires coursework in solid-state physics or solid-state chemistry + successful completion of online Math and Physics test.';
  freiberg.requirements_registration.gpa_requirement = 'Evaluated via transcript examination and mandatory Online Qualification Test in Math & Physics.';
  freiberg.requirements_registration.ielts = 'IELTS 6.5 (or TOEFL iBT 90).';
  freiberg.gpa_fit = 'good';
  freiberg.gpa_fit_note = '✅ ACCESSIBLE: EEE Bachelor qualifies. Selection uses an online math/physics entrance test rather than rigid GPA cutoff.';
  console.log('Updated TU Bergakademie Freiberg prog_5403');
}

// 4. OVGU Magdeburg - AI and Engineering for Medical Applications (prog_10712)
const ovgu_ai = db.programs.find(p => p.id === 'prog_10712');
if (ovgu_ai) {
  ovgu_ai.requirements_registration.academic_requirements = 'Bachelor in Electrical Engineering, Medical Engineering or related field (min 180 ECTS). Official SPO mandates credit minimums: Mathematics (≥20 ECTS), Physics (≥15 ECTS), EE/Electronics (≥20 ECTS), Computer Science (≥10 ECTS), Anatomy/Physiology (≥5 ECTS). Total missing across all areas must not exceed 25 ECTS. Mandatory faculty aptitude test.';
  ovgu_ai.requirements_registration.gpa_requirement = 'Subject-credit matching + Aptitude Test (Eignungstest) administered by FEIT.';
  ovgu_ai.costs_funding.tuition = '4,165 EUR per semester (Continuing education / specialized fee program).';
  ovgu_ai.gpa_fit = 'moderate';
  ovgu_ai.gpa_fit_note = 'Curriculum overlaps with EEE. Note: Requires Anatomy/Physiology (can be made up) and carries a 4,165 EUR/semester tuition fee.';
  console.log('Updated OVGU Magdeburg prog_10712');
}

// 5. TH Ingolstadt (THI) - AI Engineering of Autonomous Systems (prog_8922)
const thi_ai = db.programs.find(p => p.id === 'prog_8922');
if (thi_ai) {
  thi_ai.requirements_registration.academic_requirements = 'Bachelor in Electrical Engineering, Computer Science, Mathematics or related (210 ECTS standard; 180 ECTS graduates must complete 30 ECTS bridging). Internal aptitude evaluation of mathematical foundation and software engineering processes.';
  thi_ai.requirements_registration.gpa_requirement = 'Internal aptitude procedure (Eignungsverfahren) based on transcript curriculum review.';
  thi_ai.requirements_registration.ielts = 'IELTS 6.0+ (CEFR B2 Level).';
  thi_ai.costs_funding.tuition = '1,200 EUR per semester (Bavaria THI non-EU fee).';
  thi_ai.gpa_fit = 'good';
  thi_ai.gpa_fit_note = 'Strong autonomous systems & embedded AI focus. Evaluated via document-based aptitude review. Note: 1,200 EUR/semester non-EU fee applies.';
  console.log('Updated TH Ingolstadt prog_8922');
}

const fileContent = 'const DATABASE = ' + JSON.stringify(db, null, 2) + ';\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = DATABASE;\n}\n';
fs.writeFileSync('database.js', fileContent, 'utf8');
console.log('Successfully written Batch 3 official university updates into database.js');

