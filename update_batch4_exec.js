const fs = require('fs');
const db = require('./database.js');

// 1. Coburg UAS - Analytical Instruments, Measurement and Sensor Technology (prog_3949)
const coburg = db.programs.find(p => p.id === 'prog_3949');
if (coburg) {
  coburg.requirements_registration.academic_requirements = 'Bachelor in Engineering or Natural Sciences. Mandatory requirement: At least 1 year of professional engineering practical experience after Bachelor graduation. Includes internal interview/assessment.';
  coburg.requirements_registration.gpa_requirement = 'German GPA 2.5 or better (approx. 3.0/4.0 US scale).';
  coburg.requirements_registration.ielts = 'IELTS 6.0 / TOEFL 550.';
  coburg.costs_funding.tuition = '4,055 EUR per semester (continuing education fee).';
  coburg.gpa_fit = 'borderline';
  coburg.gpa_fit_note = 'Requires 1 year of post-graduation work experience (which you have!). Note: GPA benchmark is 2.5 German scale and tuition is 4,055 EUR/sem.';
  console.log('Updated Coburg prog_3949');
}

// 2. Hof University of Applied Sciences - Artificial Intelligence and Robotics (prog_8518)
const hof = db.programs.find(p => p.id === 'prog_8518');
if (hof) {
  hof.requirements_registration.academic_requirements = 'Bachelor in CS or Engineering (210 ECTS standard; 180 ECTS graduates accepted without gap if internship was not in degree). Official SPO § 2 Para 2 requires competencies in: Programming for Engineers, Measurement Technology (Messtechnik), and Statistics.';
  hof.requirements_registration.gpa_requirement = 'German grade 2.5 or better.';
  hof.requirements_registration.ielts = 'IELTS 6.0 - 6.5 (CEFR B2 Level).';
  hof.gpa_fit = 'good';
  hof.gpa_fit_note = '✅ HIGH FIT: NSU EEE syllabus completely covers Programming, Measurement (EEE 299) and Statistics (MAT 361) required by Hof SPO § 2.';
  console.log('Updated Hof University prog_8518');
}

// 3. RPTU Kaiserslautern - Automation & Control (A&C) (prog_4818)
const rptu_ac = db.programs.find(p => p.id === 'prog_4818');
if (rptu_ac) {
  rptu_ac.requirements_registration.academic_requirements = 'Bachelor in Electrical Engineering, Computer Engineering or related area (120 ECTS Master). Core focus on real-time systems, nonlinear control, optimization. 2 recommendation letters required.';
  rptu_ac.requirements_registration.gpa_requirement = 'Departmental guideline requires CGPA not lower than 3.5 / 4.0.';
  rptu_ac.requirements_registration.ielts = 'IELTS 6.0 - 6.5 / TOEFL iBT 80+.';
  rptu_ac.gpa_fit = 'risky';
  rptu_ac.gpa_fit_note = 'RPTU departmental guideline benchmarks 3.5/4.0 CGPA, making 2.8 CGPA risky unless compensated by outstanding industry reference letters.';
  console.log('Updated RPTU prog_4818');
}

// 4. RWTH Aachen - Automotive Engineering (prog_4599)
const rwth_auto = db.programs.find(p => p.id === 'prog_4599');
if (rwth_auto) {
  rwth_auto.requirements_registration.academic_requirements = 'Bachelor in Mechanical or Automotive Engineering (min 7 semesters / 120 ECTS in engineering/math). Core modules in Machine Design, Thermodynamics, Fluid Mechanics, Dynamics. GRE General Test is MANDATORY for Non-EU applicants.';
  rwth_auto.requirements_registration.gre = 'MANDATORY for Non-EU applicants: Quantitative Reasoning ≥160, Verbal ≥145, Analytical Writing ≥3.0.';
  rwth_auto.requirements_registration.ielts = 'IELTS 6.5 / TOEFL iBT 90.';
  rwth_auto.gpa_fit = 'risky';
  rwth_auto.gpa_fit_note = 'Mechanical/Automotive engineering syllabus match. GRE General Test is strictly mandatory for non-EU applicants (Quant ≥160). EEE background lacks core thermodynamics/fluid mechanics.';
  console.log('Updated RWTH prog_4599');
}

const fileContent = 'const DATABASE = ' + JSON.stringify(db, null, 2) + ';\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = DATABASE;\n}\n';
fs.writeFileSync('database.js', fileContent, 'utf8');
console.log('Successfully written Batch 4 official university updates into database.js');

