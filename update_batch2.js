const fs = require('fs');
const db = require('./database.js');

// 1. TU Chemnitz - Embedded Systems (prog_4493)
const chemnitz_es = db.programs.find(p => p.id === 'prog_4493');
if (chemnitz_es) {
  chemnitz_es.requirements_registration.academic_requirements = 'Bachelor degree in Electrical Engineering and Information Technology or closely related field (180 ECTS). Required subject competencies: Microcontroller architectures, Signal Processing, Op-Amps, and C/C++ programming.';
  chemnitz_es.requirements_registration.gpa_requirement = 'Open Admission (Zulassungsfrei / No NC). Competence-based qualification evaluated by the Examination Board.';
  chemnitz_es.requirements_registration.ielts = 'IELTS 5.5+ (CEFR B2 Level officially confirmed)';
  chemnitz_es.requirements_registration.german_requirement = 'A1 German required for enrollment; A2 required by end of 3rd semester (free courses available at university).';
  chemnitz_es.gpa_fit = 'good';
  chemnitz_es.gpa_fit_note = '✅ HIGH ACCEPTANCE: Zulassungsfrei (Open Admission). 2.8 CGPA is completely accepted. English requirement is very low (IELTS 5.5). A1 German can be learned easily before flight.';
  console.log('Updated Chemnitz prog_4493');
}

// 2. FH Dortmund - Embedded Systems Engineering (prog_4513)
const dortmund = db.programs.find(p => p.id === 'prog_4513');
if (dortmund) {
  dortmund.requirements_registration.academic_requirements = 'Bachelor in Computer Science, EE, Mechatronics, Systems Engineering (min 180 ECTS). Required modules: Software Engineering, Electrical Engineering, Digital Systems, Embedded Systems, and Bachelor Thesis. Uses online Pre-Check service.';
  dortmund.requirements_registration.gpa_requirement = 'German grade 2.5 or better (approx. 2.9-3.0 US GPA).';
  dortmund.requirements_registration.ielts = 'IELTS 6.5 minimum (or TOEFL iBT 90)';
  dortmund.gpa_fit = 'borderline';
  dortmund.gpa_fit_note = '2.8 CGPA is near the 2.5 German threshold. Use FH Dortmund’s official online Pre-Check tool before applying.';
  console.log('Updated FH Dortmund prog_4513');
}

// 3. Darmstadt UAS (h_da) - Electrical Engineering and IT (prog_3980)
const h_da = db.programs.find(p => p.id === 'prog_3980');
if (h_da) {
  h_da.requirements_registration.academic_requirements = 'Bachelor in Electrical Engineering, Information Technology or equivalent (min 180 ECTS). Direct majors offered in Embedded Systems, Automation, Communication, or Power. Requires CV (Europass), Statement of Intent, and Recommendation Letters.';
  h_da.requirements_registration.gpa_requirement = 'No strict mandatory GPA cutoff; individual holistic profile assessment based on sub-field competencies & industrial experience.';
  h_da.gpa_fit = 'good';
  h_da.gpa_fit_note = '✅ STRONG APPLIED SCIENCES FIT: No strict GPA barrier. Admissions board individually assesses practical experience (2-year RTL/UVM work is a major plus for Embedded track).';
  console.log('Updated Hochschule Darmstadt prog_3980');
}

// 4. University of Siegen - Electrical Engineering / Electronics Design (prog_7927)
const siegen = db.programs.find(p => p.id === 'prog_7927');
if (siegen) {
  siegen.requirements_registration.academic_requirements = 'Bachelor degree in Electrical Engineering, Electronics, Telecommunications or Computer Engineering (min 180 ECTS). Core background in mathematical & engineering fundamentals for Electronics Design.';
  siegen.requirements_registration.gpa_requirement = 'Good first degree equivalent to Siegen Bachelor in EE. Subject competence assessed by Faculty Examination Board.';
  siegen.gpa_fit = 'good';
  siegen.gpa_fit_note = 'Strong microelectronics & circuit design curriculum. Tuition free (0 EUR). NSU EEE transcript is directly equivalent.';
  console.log('Updated University of Siegen prog_7927');
}

const fileContent = 'const DATABASE = ' + JSON.stringify(db, null, 2) + ';\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = DATABASE;\n}\n';
fs.writeFileSync('database.js', fileContent, 'utf8');
console.log('Successfully updated Batch 2 programs into database.js');

