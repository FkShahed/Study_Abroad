const fs = require('fs');
const db = require('./database.js');

// 1. TU Dortmund - Automation and Robotics (prog_8996)
const dortmund_ar = db.programs.find(p => p.id === 'prog_8996');
if (dortmund_ar) {
  dortmund_ar.requirements_registration.academic_requirements = 'Bachelor in EE/IT, Computer Science or Mechanical Engineering (min 180 ECTS). Subject-specific ECTS breakdown: Mathematics (≥18 ECTS), Computer Science / Programming (≥12 ECTS). GRE is NOT mandatory (optional supporting document only).';
  dortmund_ar.requirements_registration.gpa_requirement = 'German grade 2.0 or better (competitive GPA screening).';
  dortmund_ar.requirements_registration.gre = 'NOT required (purely optional).';
  dortmund_ar.gpa_fit = 'risky';
  dortmund_ar.gpa_fit_note = 'Strong curriculum in control & robotics. Note: Grade cutoff is steep (German 2.0), making 2.8 CGPA risky. GRE is NOT required.';
  console.log('Updated TU Dortmund prog_8996');
}

// 2. TH Köln - Automation & IT (prog_3961)
const th_koeln = db.programs.find(p => p.id === 'prog_3961');
if (th_koeln) {
  th_koeln.requirements_registration.academic_requirements = 'Bachelor in Electrical Engineering, Automation, Computer Science or Engineering Sciences (120 ECTS Master, Gummersbach Campus). Comprehensive individual evaluation of engineering background.';
  th_koeln.requirements_registration.gpa_requirement = 'Competitive grade conversion; UAS profile assessment.';
  th_koeln.requirements_registration.ielts = 'IELTS 6.0 - 6.5 / TOEFL iBT 80+.';
  th_koeln.gpa_fit = 'good';
  th_koeln.gpa_fit_note = '✅ HIGH RELEVANCE: Practical UAS orientation. No strict NC cutoff; industrial background and EEE Bachelor match the IT & Automation modules.';
  console.log('Updated TH Köln prog_3961');
}

// 3. TU Chemnitz - Automation, Robotics and Control (prog_11170)
const chemnitz_arc = db.programs.find(p => p.id === 'prog_11170');
if (chemnitz_arc) {
  chemnitz_arc.requirements_registration.academic_requirements = 'Zulassungsfrei (Open Admission / Free of Admission Restrictions). Bachelor in Electrical Engineering & IT, Digital Engineering or equivalent. Requires German A1 at application (A2 by end of 3rd semester).';
  chemnitz_arc.requirements_registration.gpa_requirement = 'Open Admission (Zulassungsfrei) — No NC cutoff.';
  chemnitz_arc.requirements_registration.ielts = 'IELTS 5.5 - 6.0 (CEFR B2 Level).';
  chemnitz_arc.requirements_registration.german_requirement = 'A1 German required at application (A2 by end of 3rd semester).';
  chemnitz_arc.gpa_fit = 'good';
  chemnitz_arc.gpa_fit_note = '✅ HIGH ACCEPTANCE: Zulassungsfrei (Open Admission). 2.8 CGPA is completely accepted. English bar is modest (IELTS 5.5-6.0). A1 German certificate needed for enrollment.';
  console.log('Updated TU Chemnitz prog_11170');
}

// 4. Leibniz University Hannover - AI-Driven Mechatronics and Robotics (prog_10548)
const hannover = db.programs.find(p => p.id === 'prog_10548');
if (hannover) {
  hannover.requirements_registration.academic_requirements = 'Bachelor in Engineering (min 180 ECTS). Official Prüfungsordnung mandates specific minimum credits: Mathematics (≥15 ECTS), Technical Mechanics (≥15 ECTS), Electrical Engineering / Drives (≥20 ECTS), Control / Measurement (≥10 ECTS).';
  hannover.requirements_registration.ielts = 'CEFR C1 level required (IELTS 7.0 / TOEFL iBT 95+).';
  hannover.requirements_registration.gpa_requirement = 'Subject-credit matching + C1 English certificate.';
  hannover.gpa_fit = 'moderate';
  hannover.gpa_fit_note = 'Prestigious TU9 university. EEE syllabus covers Math and EE/Control requirements well. Note: Requires C1 English (IELTS 7.0) and 15 ECTS in Mechanics.';
  console.log('Updated Leibniz Hannover prog_10548');
}

// 5. Hochschule Anhalt - Electrical and Computer Engineering (prog_8357)
const anhalt = db.programs.find(p => p.id === 'prog_8357');
if (anhalt) {
  anhalt.requirements_registration.academic_requirements = 'Bachelor in Electrical Engineering, IT or related field. Individual review of transcripts, CV, and statement of purpose. Capacity-limited selection.';
  anhalt.requirements_registration.gpa_requirement = 'German GPA 2.40 or better benchmark.';
  anhalt.requirements_registration.ielts = 'IELTS 6.0 - 6.5 / TOEFL iBT 80+.';
  anhalt.gpa_fit = 'borderline';
  anhalt.gpa_fit_note = 'UAS curriculum with strong computer engineering components. Benchmark around 2.4 German grade makes 2.8 borderline.';
  console.log('Updated Hochschule Anhalt prog_8357');
}

const fileContent = 'const DATABASE = ' + JSON.stringify(db, null, 2) + ';\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = DATABASE;\n}\n';
fs.writeFileSync('database.js', fileContent, 'utf8');
console.log('Successfully written Batch 2 official university updates into database.js');

