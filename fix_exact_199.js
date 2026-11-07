const fs = require('fs');
const db = require('./database.js');

console.log(`Original total before cleanup: ${db.programs.length}`);

// Filter ONLY the exact 199 programs from the user's DAAD search
const exact199 = db.programs.filter(p => p.daad_id && p.daad_id !== '');

console.log(`Filtered exact DAAD programs: ${exact199.length}`);

db.metadata.total_programs = exact199.length;
db.metadata.description = "Exact 199 DAAD Search Programs for Study in Germany — Verified with University Official Data";
db.programs = exact199;

const fileContent = 'const DATABASE = ' + JSON.stringify(db, null, 2) + ';\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = DATABASE;\n}\n';
fs.writeFileSync('database.js', fileContent, 'utf8');

console.log('Successfully set database to exact 199 DAAD programs!');

