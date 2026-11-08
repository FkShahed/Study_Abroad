const fs = require('fs');

function loadJSON(f){ return JSON.parse(fs.readFileSync(f,'utf8')); }
function slugify(s){ return s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''); }

// ---------- CANADA ----------
const caCandidates = loadJSON('canada_candidates.json');
const caDeep = [].concat(loadJSON('canada_deepscrape_batch1.json'), loadJSON('canada_deepscrape_batch2.json'), loadJSON('canada_deepscrape_batch3.json'));

function findDeep(deepArr, cand){
  return deepArr.find(d => d.university === cand.university && (d.program_title === cand.program_title || (d.official_url && cand.official_url && d.official_url === cand.official_url)))
      || deepArr.find(d => d.university === cand.university && d.official_url === cand.official_url);
}

const candIELTS = 6.5;
const candGPA_4 = 2.83; // out of 4.0

function gpaFitCanada(gpaReqRaw){
  if(!gpaReqRaw || /not found/i.test(gpaReqRaw)) return {fit:'unknown', note:'GPA requirement not published/found on official page.'};
  const text = gpaReqRaw.toLowerCase();
  // Try to find a "B" grade / 3.0/4.0 or percentage style cutoff
  const pctMatch = text.match(/(\d{2,3})\s*%/);
  const gpaMatch = text.match(/([0-4](?:\.\d+)?)\s*\/\s*4(?:\.0|\.33)?/) || text.match(/\bgpa\s*(?:of)?\s*([0-4](?:\.\d+)?)/);
  if(gpaMatch){
    const req = parseFloat(gpaMatch[1]);
    const diff = candGPA_4 - req;
    if(diff >= 0.05) return {fit:'good', note:`Official page requires ~${req}/4.0; candidate CGPA 2.83/4.0 meets this.`};
    if(diff >= -0.15) return {fit:'borderline', note:`Official page requires ~${req}/4.0; candidate CGPA 2.83/4.0 is close but slightly under.`};
    return {fit:'risky', note:`Official page requires ~${req}/4.0; candidate CGPA 2.83/4.0 is below this cutoff.`};
  }
  if(pctMatch){
    const req = parseInt(pctMatch[1]);
    // rough CGPA 2.83/4.0 ~ 70-72% equivalent on a common Canadian conversion
    const approxPct = 70;
    if(approxPct >= req) return {fit:'borderline', note:`Official page requires ~${req}% average; candidate's CGPA 2.83/4.0 is roughly equivalent to ~70%, a close/borderline match — official conversion should be verified with the admissions office.`};
    return {fit:'risky', note:`Official page requires ~${req}% average; candidate's CGPA 2.83/4.0 (~70% equivalent) likely falls short.`};
  }
  if(/b\s*average|b\+|second class|minimum.*b\b/.test(text)) {
    return {fit:'borderline', note:'Official page requires a "B average" or equivalent (commonly ~3.0/4.0 or ~73-76%); candidate CGPA 2.83/4.0 is below typical B-average thresholds — borderline/risky depending on the institution\'s exact conversion.'};
  }
  return {fit:'unknown', note:'GPA requirement language on official page could not be parsed into a clear numeric cutoff: "' + gpaReqRaw.slice(0,160) + '"'};
}

function tierFromGuess(t){ return ['A','B','C','D'].includes(t) ? t : 'D'; }

let caPrograms = [];
let caId = 1;
caCandidates.forEach(cand => {
  const deep = findDeep(caDeep, cand) || {};
  const ar = deep.admission_requirements || {};
  const lr = deep.language_requirements || {};
  const tu = deep.tuition || {};
  const dl = deep.deadlines || {};
  const fit = gpaFitCanada(ar.gpa_requirement);
  const id = `ca-${slugify(cand.university)}-${slugify(cand.program_title)}-${caId++}`;
  caPrograms.push({
    id,
    country: "Canada",
    title: cand.program_title,
    university: cand.university,
    department: cand.department || "",
    location: cand.city_province || "",
    tier: tierFromGuess(cand.tier_guess),
    gpa_fit: fit.fit,
    gpa_fit_note: fit.note,
    overview: {
      degree_type: deep.degree_type || cand.degree_type || "Not found",
      duration: deep.duration || "Not found",
      language: "English",
      department: cand.department || "Not found"
    },
    course_details: {
      curriculum_notes: deep.curriculum_notes || "Not found",
      vlsi_rtl_relevance_notes: deep.vlsi_rtl_relevance_notes || "Not found"
    },
    costs_funding: {
      tuition: tu.international_per_year_cad ? `${tu.international_per_year_cad} CAD/year (international)` : "Not found",
      tuition_domestic: tu.domestic_per_year_cad || "Not found",
      tuition_notes: tu.notes || ""
    },
    requirements_registration: {
      gpa_requirement: ar.gpa_requirement || "Not found",
      prior_degree: ar.prior_degree || "Not found",
      gre_required: ar.gre_required || "Not found",
      ielts: lr.ielts || "Not found",
      toefl: lr.toefl || "Not found",
      english_exemptions: lr.exemptions || "",
      deadline_fall: dl.fall || "Not found",
      deadline_winter: dl.winter || "Not found",
      deadline_notes: dl.notes || "",
      other_admission_notes: ar.other || ""
    },
    services: {},
    about_university: {},
    official_website_data: {
      official_source_url: cand.official_url || "Not found",
      sources_consulted: deep.sources_consulted || [cand.official_url].filter(Boolean),
      scraped_on: deep.scraped_on || "Not found"
    },
    ranking: { qs_world_rank: "Not researched yet", the_world_rank: "Not researched yet" },
    candidate_notes_source: cand.notes || ""
  });
});

// ---------- SPAIN ----------
const esCandidates = loadJSON('spain_candidates.json');
const esDeep = loadJSON('spain_deepscrape.json');

function gpaFitSpain(gradeReqRaw){
  if(!gradeReqRaw || /not found/i.test(gradeReqRaw)) return {fit:'unknown', note:'Grade requirement not published/found on official page.'};
  const text = gradeReqRaw.toLowerCase();
  const m = text.match(/(\d(?:[.,]\d+)?)\s*\/\s*10/) || text.match(/\bminimum\s*(?:of)?\s*(\d(?:[.,]\d+)?)\b/);
  if(m){
    const req = parseFloat(m[1].replace(',','.'));
    // rough mapping: candidate CGPA 2.83/4.0 -> ~7.0/10 commonly used rough conversion (varies by institution)
    const approxSpainScale = 7.0;
    if(approxSpainScale - req >= 0.3) return {fit:'good', note:`Official page requires ~${req}/10; candidate's CGPA 2.83/4.0 (~7.0/10 rough equivalent) comfortably meets this.`};
    if(approxSpainScale - req >= -0.3) return {fit:'borderline', note:`Official page requires ~${req}/10; candidate's CGPA 2.83/4.0 (~7.0/10 rough equivalent) is a close/borderline match — exact conversion should be verified with the admissions office.`};
    return {fit:'risky', note:`Official page requires ~${req}/10; candidate's CGPA 2.83/4.0 (~7.0/10 rough equivalent) likely falls short.`};
  }
  return {fit:'unknown', note:'Grade requirement language could not be parsed into a clear numeric cutoff: "' + gradeReqRaw.slice(0,160) + '"'};
}

let esPrograms = [];
let esId = 1;
esCandidates.forEach(cand => {
  if(cand.status && /discontinued/i.test(cand.status)){
    return; // skip discontinued program, but keep audit trail in spain_candidates.json
  }
  const deep = esDeep.find(d => d.university === cand.university && d.program_title === cand.program_title) || {};
  const ar = deep.admission_requirements || {};
  const lr = deep.language_requirements || {};
  const tu = deep.tuition || {};
  const dl = deep.deadlines || {};
  const fit = gpaFitSpain(ar.grade_requirement);
  const id = `es-${slugify(cand.university)}-${slugify(cand.program_title)}-${esId++}`;
  esPrograms.push({
    id,
    country: "Spain",
    title: cand.program_title,
    university: cand.university,
    department: cand.department || "",
    location: cand.city || "",
    tier: tierFromGuess(cand.tier_guess),
    gpa_fit: fit.fit,
    gpa_fit_note: fit.note,
    overview: {
      degree_type: deep.degree_type || cand.degree_type || "Not found",
      ruct_registered: deep.ruct_registered !== undefined ? deep.ruct_registered : (cand.ruct_registered !== undefined ? cand.ruct_registered : "unknown"),
      duration: deep.duration || "Not found",
      language: "English",
      language_confirmation: cand.language_confirmation || ""
    },
    course_details: {
      curriculum_notes: deep.curriculum_notes || "Not found",
      vlsi_rtl_relevance_notes: deep.vlsi_rtl_relevance_notes || "Not found"
    },
    costs_funding: {
      tuition: tu.eu_eea_per_year_eur ? `${tu.eu_eea_per_year_eur} EUR/year (EU/EEA)` : "Not found",
      tuition_non_eu: tu.non_eu_per_year_eur || "Not found",
      tuition_notes: tu.notes || ""
    },
    requirements_registration: {
      grade_requirement: ar.grade_requirement || "Not found",
      prior_degree: ar.prior_degree || "Not found",
      entrance_exam: ar.entrance_exam || "Not found",
      credential_recognition_note: ar.credential_recognition_note || "Not found",
      english_certificate_required: lr.english_certificate_required || "Not found",
      ielts: lr.ielts || "Not found",
      toefl: lr.toefl || "Not found",
      cambridge: lr.cambridge || "Not found",
      english_exemptions: lr.exemptions || "",
      deadline_main_intake: dl.main_intake || "Not found",
      deadline_notes: dl.notes || "",
      other_admission_notes: ar.other || ""
    },
    services: {},
    about_university: {},
    official_website_data: {
      official_source_url: cand.official_url || "Not found",
      sources_consulted: deep.sources_consulted || [cand.official_url].filter(Boolean),
      scraped_on: deep.scraped_on || "Not found"
    },
    ranking: { qs_world_rank: "Not researched yet", the_world_rank: "Not researched yet" },
    candidate_notes_source: cand.notes || ""
  });
});

const CANADA_DB = {
  metadata: {
    version: "1.0 (initial deep-scrape pass)",
    last_updated: "2026-11-08T00:00:00.000Z",
    country: "Canada",
    search_criteria: [
      "No single official DAAD-equivalent filtered database exists for Canada.",
      "Candidate list compiled from EduCanada-listed universities, verified program-by-program on each university's own official site.",
      "Scope: VLSI/RTL/Microelectronics/Embedded Systems (Tier A), general Electrical/Computer Engineering (Tier B), Mechatronics/Power/Management-adjacent (Tier C)."
    ],
    total_programs: caPrograms.length,
    description: "Canadian Master's programs relevant to an RTL/VLSI/Embedded-focused EEE candidate, sourced directly from each university's official admissions pages."
  },
  programs: caPrograms,
  aps_info: null,
  gpa_conversion_info: {
    candidate_gpa: "2.83/4.0 (NSU, EEE)",
    note: "Canadian universities' GPA requirements are stated on widely varying scales (4.0, 4.33, percentage, or 'B average') and were NOT run through a single formal conversion formula (unlike Germany's modified Bavarian formula) because Canada has no equivalent standardized cross-scale conversion convention. Each program's gpa_fit_note explains the specific comparison made for that program; borderline/unknown ratings should be double-checked directly with admissions."
  },
  funding_options: []
};

const SPAIN_DB = {
  metadata: {
    version: "1.0 (initial deep-scrape pass)",
    last_updated: "2026-11-08T00:00:00.000Z",
    country: "Spain",
    search_criteria: [
      "No single official centralized filtered database exists for Spain (Ministry of Universities' RUCT registry lists all approved degrees but has no user-friendly program search/filter).",
      "Candidate list compiled by searching broadly across public and private Spanish universities, keeping ONLY programs whose official page explicitly confirms English as the language of instruction.",
      "Scope: VLSI/RTL/Microelectronics/Embedded Systems (Tier A), general Electrical/Telecom/Computer Engineering (Tier B), Mechatronics/Power/Management-adjacent (Tier C)."
    ],
    total_programs: esPrograms.length,
    description: "Spanish Master's programs (English-taught only) relevant to an RTL/VLSI/Embedded-focused EEE candidate, sourced directly from each university's official admissions pages."
  },
  programs: esPrograms,
  aps_info: null,
  gpa_conversion_info: {
    candidate_gpa: "2.83/4.0 (NSU, EEE)",
    note: "Spanish universities grade on a 0-10 scale. A rough, unofficial 4.0->10 conversion (~7.0/10) was used only to flag an approximate fit category per program; this is NOT an official equivalency and should be verified with each university's own international-admissions office before relying on it."
  },
  funding_options: []
};

fs.writeFileSync('canada_database.js', 'const CANADA_DB = ' + JSON.stringify(CANADA_DB, null, 2) + ';\n');
fs.writeFileSync('spain_database.js', 'const SPAIN_DB = ' + JSON.stringify(SPAIN_DB, null, 2) + ';\n');
console.log('Canada programs:', caPrograms.length, '| Spain programs:', esPrograms.length, '(discontinued excluded)');
