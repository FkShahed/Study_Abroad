const CANADA_DB = {
  "metadata": {
    "version": "1.1 (exhaustive official-page GPA-conversion verification pass, 2026-11-08)",
    "last_updated": "2026-11-08T00:00:00.000Z",
    "country": "Canada",
    "search_criteria": [
      "No single official DAAD-equivalent filtered database exists for Canada.",
      "Candidate list compiled from EduCanada-listed universities, verified program-by-program on each university's own official site.",
      "Scope: VLSI/RTL/Microelectronics/Embedded Systems (Tier A), general Electrical/Computer Engineering (Tier B), Mechatronics/Power/Management-adjacent (Tier C)."
    ],
    "total_programs": 55,
    "description": "Canadian Master's programs relevant to an RTL/VLSI/Embedded-focused EEE candidate, sourced directly from each university's official admissions pages.",
    "gpa_verification_note": "Every university's GPA/grade-conversion requirement was re-checked directly against its own official admissions page (or, where blocked, the best available official-source quote) specifically for an NSU BSc EEE graduate with CGPA 2.83/4.00 (133 credits). 3 universities (Laurentian, UQTR, Université de Moncton) were dropped after confirming they do not offer an Electrical/Electronics Engineering-relevant graduate program. QS World Ranking figures could not be independently verified this pass (topuniversities.com blocks automated fetching) — treat existing QS numbers as best-available, not officially re-confirmed."
  },
  "programs": [
    {
      "id": "ca-university-of-toronto-electrical-and-computer-engineering-masc-1",
      "country": "Canada",
      "title": "Electrical and Computer Engineering - MASc",
      "university": "University of Toronto",
      "department": "Edward S. Rogers Sr. Dept. of Electrical & Computer Engineering",
      "location": "Toronto, ON",
      "tier": "B",
      "gpa_fit": "borderline",
      "gpa_fit_note": "Official SGS/ECE page: MASc/MEng require 'mid-B' average in final year (Bangladesh SGS equivalency table: mid-B = 3.0/4.0). NSU CGPA 2.83/4.0 is just below this officially-stated equivalence point — confirmed no ECE-department-specific stricter floor exists (same bar as university-wide SGS minimum).",
      "overview": {
        "degree_type": "MASc",
        "duration": "24 months (expected to finish and defend thesis within 24 months)",
        "language": "English",
        "department": "Edward S. Rogers Sr. Dept. of Electrical & Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "Thesis-based research MASc; fields include Electronics, Computer Engineering, Systems Control; course + thesis combination, department-funded.",
        "vlsi_rtl_relevance_notes": "No standalone VLSI-named field, but strong IC design faculty: Vincent Gaudet (VLSI/analog/mixed-signal/CMOS), Manoj Sachdev (low-power digital circuits, VLSI testing), James Barby (analog/mixed-signal VLSI systems), David Nairn (ADC/DAC), Peter Levine (CMOS mixed-signal ICs/biosensors), John Long (high-speed transceivers), Lan Wei (device-circuit co-design, cryogenic CMOS), Derek Wright (digital ICs, neuromorphic hardware). Labs: Giga-to-Nanoelectronics (G2N) Centre, Silicon Bioelectronics (SiBio) Lab, Silicon Thin-Film Applied Research Group, Waterloo Emerging Integrated Systems Group analog found at Waterloo not UofT (correction: WEIS is a Waterloo-specific group, not UofT's)."
      },
      "costs_funding": {
        "tuition": "Not confirmed on official ECE pages; third-party listings show conflicting figures (~$34,900-$73,760/yr range across sources, unclear which is MASc vs MEng) - Not found definitively CAD/year (international)",
        "tuition_domestic": "Not confirmed; third-party figures ~$8,448-$15,618/yr - Not found definitively",
        "tuition_notes": "MASc students receive guaranteed departmental funding (Graduate Research Studentship) to complete degree; MEng is fully self-funded. Official tuition schedule at gradstudies.engineering.utoronto.ca/prospective-students/money-matters/ not fully retrieved."
      },
      "requirements_registration": {
        "gpa_requirement": "Minimum 'Mid-B' average in final year (SGS International Credential Equivalencies tool used for conversion)",
        "prior_degree": "Equivalent of a University of Toronto 4-year Bachelor's degree in electrical/computer engineering or related field (CS, math, physics, other engineering)",
        "gre_required": "Not required/recommended",
        "ielts": "Not specified on official pages visited; third-party aggregators cite ~7.0 (unverified)",
        "toefl": "Not specified on official pages visited; third-party aggregators cite ~93 iBT (unverified)",
        "english_exemptions": "Applicants whose prior degree was taught/examined entirely in English may be exempt per SGS English Language Proficiency Testing page; scores must be no more than 2 years old",
        "deadline_fall": "MASc and PhD (Fall/Winter cycle): January 7, 2027 (for 2027-2028 cycle, per ECE page)",
        "deadline_winter": "Same single deadline covers Fall/Winter 2027-2028 cycle",
        "deadline_notes": "MEng deadlines differ (see MEng entry); confirm current cycle directly with grad.admissions.ece@utoronto.ca",
        "other_admission_notes": "Must secure a supervisor before admission; significant research potential expected; meeting minimum GPA does not guarantee admission"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.sgs.utoronto.ca/programs/electrical-and-computer-engineering/",
        "sources_consulted": [
          "https://www.sgs.utoronto.ca/programs/electrical-and-computer-engineering/",
          "https://gradstudies.engineering.utoronto.ca/prospective-students/departments/electrical-computer-engineering-graduate-studies-programs-and-degrees/",
          "https://www.ece.utoronto.ca/graduates/",
          "https://www.ece.utoronto.ca/?p=890"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Thesis-based research MASc; fields include Electronics, Computer Engineering, Systems Control. No standalone VLSI-named field but faculty work in CMOS VLSI/mixed-signal ICs exists; verify supervisor fit."
    },
    {
      "id": "ca-university-of-toronto-electrical-and-computer-engineering-meng-2",
      "country": "Canada",
      "title": "Electrical and Computer Engineering - MEng",
      "university": "University of Toronto",
      "department": "Edward S. Rogers Sr. Dept. of Electrical & Computer Engineering",
      "location": "Toronto, ON",
      "tier": "B",
      "gpa_fit": "borderline",
      "gpa_fit_note": "Official SGS/ECE page: MASc/MEng require 'mid-B' average in final year (Bangladesh SGS equivalency table: mid-B = 3.0/4.0). NSU CGPA 2.83/4.0 is just below this officially-stated equivalence point — confirmed no ECE-department-specific stricter floor exists (same bar as university-wide SGS minimum).",
      "overview": {
        "degree_type": "MEng",
        "duration": "Full-time 1 year, extended full-time 2 years, part-time 3 years; MEng Co-op 1-2 work terms",
        "language": "English",
        "department": "Edward S. Rogers Sr. Dept. of Electrical & Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "Course-based professional degree; core 8 courses (0.5 units each), up to 10 total including specializations; co-op option (1-2 work terms, requires WIL 601 before first work term).",
        "vlsi_rtl_relevance_notes": "Electronics and Computer Engineering are among the 8 MEng fields; same VLSI-active faculty pool as MASc (Gaudet, Sachdev, Barby, Nairn, Levine, Long, Wei, Wright) available for specialization course selection."
      },
      "costs_funding": {
        "tuition": "Not found definitively (conflicting third-party figures) CAD/year (international)",
        "tuition_domestic": "Not found definitively",
        "tuition_notes": "MEng is fully self-funded - no departmental/faculty/university financial support"
      },
      "requirements_registration": {
        "gpa_requirement": "Minimum 'Mid-B' average in final year; both final-year and overall GPA considered; meeting minimum does not guarantee admission (letter of intent/references also weighed)",
        "prior_degree": "Equivalent of a University of Toronto 4-year Bachelor's degree in electrical/computer engineering or related field",
        "gre_required": "Not mentioned/not required",
        "ielts": "Not specified numerically on official pages; third-party aggregator cites ~7.0 (unverified)",
        "toefl": "Not specified numerically on official pages; third-party aggregator cites ~93 iBT (unverified)",
        "english_exemptions": "Must meet minimum English proficiency at time of application per SGS; marginal scores may be considered if rest of application is strong",
        "deadline_fall": "MEng Co-op Fall 2027: Feb 8, 2027 (domestic & international). MEng (non-co-op) Fall 2027: international April 15, 2027; domestic May 31, 2027",
        "deadline_winter": "MEng Winter 2028: May 31, 2027",
        "deadline_notes": "Dates as published for 2027-2028 cycle; confirm current year dates directly with ECE",
        "other_admission_notes": "No supervisor required (unlike MASc); 8 fields including Electronics and Computer Engineering; co-op option available"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://gradstudies.engineering.utoronto.ca/prospective-students/departments/electrical-computer-engineering-graduate-studies-programs-and-degrees/",
        "sources_consulted": [
          "https://gradstudies.engineering.utoronto.ca/prospective-students/departments/electrical-computer-engineering-graduate-studies-programs-and-degrees/",
          "https://www.ece.utoronto.ca/graduates/",
          "https://www.ece.utoronto.ca/?p=890"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Course-based professional MEng, 8 fields including Electronics and Computer Engineering."
    },
    {
      "id": "ca-university-of-waterloo-electrical-and-computer-engineering-masc-integrated-devices-circuits-and-systems-field-3",
      "country": "Canada",
      "title": "Electrical and Computer Engineering - MASc (Integrated Devices, Circuits and Systems field)",
      "university": "University of Waterloo",
      "department": "Dept. of Electrical and Computer Engineering",
      "location": "Waterloo, ON",
      "tier": "A",
      "gpa_fit": "risky",
      "gpa_fit_note": "Waterloo's official 'International Admission Equivalencies' table (uwaterloo.ca) lists Bangladesh as requiring 'First Class standing in all degrees, 60/100'. Standard Bangladeshi degree-classification convention treats First Class as CGPA ≥3.0/4.0 — NSU's 2.83/4.0 falls short of this officially-stated country-specific bar.",
      "overview": {
        "degree_type": "MASc",
        "duration": "Full-time 24 months; part-time up to 48 months (per general ECE grad page)",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "Research field covering theory, analysis, design of interconnected devices/components, with focus on signal processing/communications; relies on computer-aided simulation, synthesis, layout, verification, testing; students encouraged to design/fabricate/test circuits using commercial IC processes.",
        "vlsi_rtl_relevance_notes": "Directly VLSI-focused field. Labs: Giga-to-Nanoelectronics (G2N) Centre, Silicon Bioelectronics (SiBio) Lab (CMOS ICs for biosensing), Silicon Thin-Film Applied Research Group, Waterloo Emerging Integrated Systems Group (WEIS), Emerging Radio Systems Group (EmRG). Faculty: Vincent Gaudet (VLSI/analog/mixed-signal/CMOS), Manoj Sachdev (low-power digital circuit design, VLSI testing), James Barby (analog/mixed-mode VLSI systems), David Nairn (ADC/DAC analog/mixed-signal), Peter Levine (CMOS mixed-signal ICs/biosensors), John Long (high-speed wireline/transceivers), Shiyu Su (data converters, analog/mixed-signal design automation), Lan Wei (device-circuit co-design, cryogenic CMOS), Derek Wright (digital ICs, neuromorphic hardware), Andrew Boutros (FPGA CAD/reconfigurable hardware), Mohamed Elmasry (adjunct, VLSI circuits). This is one of the strongest VLSI-specific fields found in the Canadian candidate set."
      },
      "costs_funding": {
        "tuition": "Conflicting figures found (~$14,792-$15,392/yr per aggregators) - treat as unverified; official Waterloo Graduate Studies tuition schedule not directly retrieved CAD/year (international)",
        "tuition_domestic": "~$4,508/yr per aggregator (unverified)",
        "tuition_notes": "MASc students guaranteed minimum funding package of ~$18,000 CAD/year via Graduate Research Studentship (per department page)"
      },
      "requirements_registration": {
        "gpa_requirement": "Not found definitively on official ECE pages; third-party sources suggest B+ (78%) range; for PhD, standing equivalent to 83% cited by a third party (unverified)",
        "prior_degree": "Bachelor's degree in relevant engineering/science field (exact wording not found on official page)",
        "gre_required": "Not required — official page states GRE is not an application requirement, optional only",
        "ielts": "6.5 overall, writing and speaking at least 6.0 (official Waterloo ECE program page)",
        "toefl": "80 overall (writing 22, speaking 20, reading 20, listening 18) (official Waterloo ECE program page)",
        "english_exemptions": "Accepted tests/minimum scores governed by Graduate Studies Academic Calendar; waiver conditions not detailed on pages visited",
        "deadline_fall": "February 1 for September (Fall) admission (Waterloo graduate studies page; confirm matches ECE specifically)",
        "deadline_winter": "Not found",
        "deadline_notes": "Official page refers only to 'advertised deadlines' without listing dates",
        "other_admission_notes": "Must secure a faculty supervisor before admission for MASc/PhD; admission based on academic record and research ability"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://uwaterloo.ca/electrical-computer-engineering/graduate-studies/research-fields/integrated-devices-circuits-and-systems",
        "sources_consulted": [
          "https://uwaterloo.ca/electrical-computer-engineering/graduate-studies/research-fields/integrated-devices-circuits-and-systems",
          "https://uwaterloo.ca/electrical-computer-engineering/thinking-applying",
          "https://www.ece.utoronto.ca graduate comparables not used here"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Research field covers VLSI/IC design and nanoelectronics-adjacent work; thesis-based MASc."
    },
    {
      "id": "ca-university-of-waterloo-electrical-and-computer-engineering-meng-4",
      "country": "Canada",
      "title": "Electrical and Computer Engineering - MEng",
      "university": "University of Waterloo",
      "department": "Dept. of Electrical and Computer Engineering",
      "location": "Waterloo, ON",
      "tier": "B",
      "gpa_fit": "risky",
      "gpa_fit_note": "Waterloo's official 'International Admission Equivalencies' table (uwaterloo.ca) lists Bangladesh as requiring 'First Class standing in all degrees, 60/100'. Standard Bangladeshi degree-classification convention treats First Class as CGPA ≥3.0/4.0 — NSU's 2.83/4.0 falls short of this officially-stated country-specific bar.",
      "overview": {
        "degree_type": "MEng",
        "duration": "1-2 years full/part-time; Co-op 16-20 months (1-2 work terms); Electric Power Engineering MEng ~3 years (9 terms)",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "Core requirement 8 courses (0.5 units each); up to 10 courses including specializations; specializations available with dedicated coursework; Co-op requires WIL 601 before first work term plus Work Term Report.",
        "vlsi_rtl_relevance_notes": "MEng students can take courses within the Integrated Devices, Circuits and Systems field/specialization (see MASc entry) taught by the same VLSI-active faculty (Gaudet, Sachdev, Barby, Nairn, Levine, Long, Wright), giving a path to VLSI/analog-mixed-signal coursework within a course-based degree."
      },
      "costs_funding": {
        "tuition": "Not confirmed officially; aggregator figures conflict widely (~$15,392 to ~$49,716/yr cited by different third-party sources) - Not found reliably CAD/year (international)",
        "tuition_domestic": "Not confirmed officially - Not found reliably",
        "tuition_notes": "MEng students are fully self-funded; no departmental/faculty/university financial support provided"
      },
      "requirements_registration": {
        "gpa_requirement": "Not specified numerically on official pages visited; International Admission Equivalencies page referenced uses minimum 75% overall for Master's programs generally",
        "prior_degree": "Not explicitly stated on pages visited (relevant bachelor's degree implied)",
        "gre_required": "Not required — official page states GRE is not an application requirement, optional only",
        "ielts": "6.5 overall, writing and speaking at least 6.0 (official Waterloo ECE program page)",
        "toefl": "80 overall (writing 22, speaking 20, reading 20, listening 18) (official Waterloo ECE program page)",
        "english_exemptions": "Governed by Graduate Studies Academic Calendar table of accepted tests; details not itemized on pages visited",
        "deadline_fall": "February 1 for September (Fall) admission (Waterloo graduate studies page; confirm matches ECE specifically)",
        "deadline_winter": "Not found",
        "deadline_notes": "One official page mentioned October 1 deadline for MEng Co-op May admission of following year; general MEng fall deadlines not located",
        "other_admission_notes": "No supervisor required for MEng; co-op option (full-time only)"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://uwaterloo.ca/electrical-computer-engineering/graduate-studies/future-students/programs",
        "sources_consulted": [
          "https://uwaterloo.ca/electrical-computer-engineering/graduate-studies/future-students/programs",
          "https://uwaterloo.ca/graduate-studies-postdoctoral-affairs/future-students/programs/electrical-and-computer-engineering-meng-waterloo (404 - not accessible)",
          "https://uwaterloo.ca/electrical-computer-engineering/thinking-applying"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Course-based, co-op option available."
    },
    {
      "id": "ca-university-of-british-columbia-electrical-and-computer-engineering-masc-5",
      "country": "Canada",
      "title": "Electrical and Computer Engineering - MASc",
      "university": "University of British Columbia",
      "department": "Dept. of Electrical and Computer Engineering",
      "location": "Vancouver, BC",
      "tier": "B",
      "gpa_fit": "risky",
      "gpa_fit_note": "UBC's official Bangladesh-specific page (grad.ubc.ca/country/bangladesh) requires degrees 'awarded with First Class/Division standing' (qualitative, no numeric GPA given). Under standard Bangladeshi convention, First Class generally requires CGPA ≥3.0/4.0, which NSU's 2.83/4.0 does not meet.",
      "overview": {
        "degree_type": "MASc",
        "duration": "24 months (program listed as 24-month; recent graduates averaged 2.7 years to completion)",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "Coursework plus thesis, research-based; specialization areas include digital system design, VLSI design, and software engineering; research areas include Emerging Micro and Nano Technologies, Computer and Software Systems.",
        "vlsi_rtl_relevance_notes": "Explicitly mentions 'digital system design, VLSI design' as part of departmental specialization; faculty such as Andre Ivanov list integrated circuits/chip design as research interests - direct VLSI fit."
      },
      "costs_funding": {
        "tuition": "$10,081.65 (first year, per UBC Grad School page) CAD/year (international)",
        "tuition_domestic": "$5,738.52 (first year)",
        "tuition_notes": "Tuition typically rises 2-5% annually; student fees ~$1,203.20/year additional; application fee domestic $120.75, international $168.25"
      },
      "requirements_registration": {
        "gpa_requirement": "No explicit program-specific numeric cutoff; UBC general minimum overall average in B+ range (76%); program prefers first-class GPA range plus demonstrated research aptitude",
        "prior_degree": "UBC-accredited 4-year bachelor's degree in Electrical or Computer Engineering, or closely related field with significant course overlap",
        "gre_required": "Not required; optional submission",
        "ielts": "7.0 overall, no band below 6.0 (official ECE department page, ece.ubc.ca — stricter than the 6.5 general grad-school floor)",
        "toefl": "100 overall (iBT), no component below 20; institutional TOEFL not accepted (official ECE department page)",
        "english_exemptions": "Applicants with a recent degree (within 5 years) from a listed English-speaking country may be exempt; others (including Canadians with foreign degrees) must submit scores",
        "deadline_fall": "September 2027 intake: application opens Oct 15, 2026; deadline (Canadian & international) Jan 15, 2027; transcript/referee deadline Jan 31, 2027",
        "deadline_winter": "Not found (program appears to admit primarily Fall)",
        "deadline_notes": "Dates as published for Sept 2027 cycle",
        "other_admission_notes": "Must indicate faculty supervisor(s) of interest in application"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.grad.ubc.ca/prospective-students/graduate-degree-programs/master-of-applied-science-electrical-computer-engineering",
        "sources_consulted": [
          "https://www.grad.ubc.ca/prospective-students/graduate-degree-programs/master-of-applied-science-electrical-computer-engineering"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Thesis-based; facilities include digital system design and VLSI design; faculty like Andre Ivanov work in microelectronics/IC design."
    },
    {
      "id": "ca-university-of-british-columbia-electrical-and-computer-engineering-meng-micro-nano-electronic-systems-concentration-6",
      "country": "Canada",
      "title": "Electrical and Computer Engineering - MEng (Micro/Nano Electronic Systems concentration)",
      "university": "University of British Columbia",
      "department": "Dept. of Electrical and Computer Engineering",
      "location": "Vancouver, BC",
      "tier": "A",
      "gpa_fit": "risky",
      "gpa_fit_note": "UBC's official Bangladesh-specific page (grad.ubc.ca/country/bangladesh) requires degrees 'awarded with First Class/Division standing' (qualitative, no numeric GPA given). Under standard Bangladeshi convention, First Class generally requires CGPA ≥3.0/4.0, which NSU's 2.83/4.0 does not meet.",
      "overview": {
        "degree_type": "MEng",
        "duration": "No fixed stated length; recent graduates averaged 1.7 years (range 0.7-6 years)",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "Course-based with optional project; Micro/Nano Electronic Systems concentration recommended courses: EECE 509 (Advanced Microsystems Design), EECE 573 (Micro and Nano Fabrication Technologies), EECE 580 (Emerging Electronic Materials and Devices), EECE 588 (Analog Integrated Circuit Design). Not every course offered every year.",
        "vlsi_rtl_relevance_notes": "Strong direct fit - EECE 588 Analog Integrated Circuit Design and EECE 509 Advanced Microsystems Design are core VLSI/IC design coursework within this concentration."
      },
      "costs_funding": {
        "tuition": "$27,419.34 (first year) CAD/year (international)",
        "tuition_domestic": "$6,974.94 (first year)",
        "tuition_notes": "Additional student fees ~$1,203.20/year; $1,000 deposit to accept offer; tuition may rise annually"
      },
      "requirements_registration": {
        "gpa_requirement": "Not stated on this page; handled by UBC Engineering professional programs site (not directly retrieved)",
        "prior_degree": "Not explicitly stated on this page",
        "gre_required": "Not stated",
        "ielts": "7.0 overall, no band below 6.0 (official ECE department page, ece.ubc.ca — stricter than the 6.5 general grad-school floor)",
        "toefl": "100 overall (iBT), no component below 20; institutional TOEFL not accepted (official ECE department page)",
        "english_exemptions": "Not found",
        "deadline_fall": "September 2027 intake: application opens Oct 1, 2026; Canadian and international deadline Dec 12, 2026",
        "deadline_winter": "Not found",
        "deadline_notes": "Same deadline for domestic and international applicants (unusual - confirmed on official page)",
        "other_admission_notes": "Coursework-only with optional supervised project; after one term, students may choose a project + report in place of 6 credits of coursework"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.grad.ubc.ca/prospective-students/graduate-degree-programs/master-of-engineering-electrical-computer-engineering",
        "sources_consulted": [
          "https://www.grad.ubc.ca/prospective-students/graduate-degree-programs/master-of-engineering-electrical-computer-engineering"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Course-based; Micro/Nano Electronic Systems concentration includes analog IC design courses - direct VLSI fit."
    },
    {
      "id": "ca-mcgill-university-electrical-engineering-m-sc-thesis-7",
      "country": "Canada",
      "title": "Electrical Engineering - M.Sc. (Thesis)",
      "university": "McGill University",
      "department": "Dept. of Electrical and Computer Engineering",
      "location": "Montreal, QC",
      "tier": "B",
      "gpa_fit": "weak",
      "gpa_fit_note": "McGill's official graduate admissions regulations state a minimum CGPA of 3.0/4.0 (3.2/4.0 for last two years). NSU's 2.83/4.0 is below this explicit, confirmed floor on the same 4.0 scale.",
      "overview": {
        "degree_type": "MSc",
        "duration": "Not found on program page",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "Research-intensive thesis program, 45 credits; no standalone VLSI field named.",
        "vlsi_rtl_relevance_notes": "Research areas list 'Integrated Circuits and Systems' and 'Nano-Electronic Devices and Materials' as closest fits; verify supervisor alignment with VLSI/RTL."
      },
      "costs_funding": {
        "tuition": "Not found on program page CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Page did not list tuition; refer to McGill fee estimator."
      },
      "requirements_registration": {
        "gpa_requirement": "Minimum 3.0 on 4.0 scale (university-level minimum)",
        "prior_degree": "An eligible Bachelor's degree (specific fields not named on page)",
        "gre_required": "Not required; may be submitted for consideration if already taken (official ECE page)",
        "ielts": "7.0 overall, no band below 6.0 (official ECE admissions page, mcgill.ca/ece)",
        "toefl": "100 overall (iBT), no component below 20; institutional TOEFL not accepted (official ECE admissions page)",
        "english_exemptions": "Not found",
        "deadline_fall": "Applications open Sept 15; deadline Dec 15 (international and domestic)",
        "deadline_winter": "Applications open Feb 15; deadline Aug 1 (international), Oct 15 (domestic)",
        "deadline_notes": "Deadlines subject to change per university.",
        "other_admission_notes": "45 credits, thesis-based. Research areas relevant: Integrated Circuits and Systems; Nano-Electronic Devices and Materials."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.mcgill.ca/gradapplicants/program/electrical-engineering-msc",
        "sources_consulted": [
          "https://www.mcgill.ca/gradapplicants/program/electrical-engineering-msc"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "English-taught thesis MSc; 45 credits."
    },
    {
      "id": "ca-mcgill-university-electrical-engineering-m-eng-non-thesis-8",
      "country": "Canada",
      "title": "Electrical Engineering - M.Eng. (Non-Thesis)",
      "university": "McGill University",
      "department": "Dept. of Electrical and Computer Engineering",
      "location": "Montreal, QC",
      "tier": "B",
      "gpa_fit": "weak",
      "gpa_fit_note": "McGill's official graduate admissions regulations state a minimum CGPA of 3.0/4.0 (3.2/4.0 for last two years). NSU's 2.83/4.0 is below this explicit, confirmed floor on the same 4.0 scale.",
      "overview": {
        "degree_type": "MEng",
        "duration": "Not found on program page",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "Course-based 45 credits; no specific course list found on page.",
        "vlsi_rtl_relevance_notes": "Related research areas: Integrated Circuits and Systems; Nano-Electronic Devices and Materials; keyword 'integrated circuits' appears."
      },
      "costs_funding": {
        "tuition": "Not found on program page CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Not listed; check McGill fee estimator."
      },
      "requirements_registration": {
        "gpa_requirement": "Minimum 3.0 on 4.0 scale",
        "prior_degree": "An eligible Bachelor's degree (fields not specified)",
        "gre_required": "Not required; may be submitted for consideration if already taken (official ECE page)",
        "ielts": "7.0 overall, no band below 6.0 (official ECE admissions page, mcgill.ca/ece)",
        "toefl": "100 overall (iBT), no component below 20; institutional TOEFL not accepted (official ECE admissions page)",
        "english_exemptions": "Not found",
        "deadline_fall": "Applications open Sept 15; deadline Dec 15 (international and domestic)",
        "deadline_winter": "Applications open Feb 15; deadline Aug 1 (international), Oct 15 (domestic)",
        "deadline_notes": "Summer intake not offered.",
        "other_admission_notes": "45 credits, course-based, non-thesis; breadth across field + depth in specialty area."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.mcgill.ca/gradapplicants/program/electrical-engineering-meng-non-thesis",
        "sources_consulted": [
          "https://www.mcgill.ca/gradapplicants/program/electrical-engineering-meng-non-thesis"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Course-based 45 credits; does not confer P.Eng-track Engineer qualification directly."
    },
    {
      "id": "ca-carleton-university-electrical-and-computer-engineering-masc-meng-vlsi-design-specialization-dept-of-electronics-9",
      "country": "Canada",
      "title": "Electrical and Computer Engineering - MASc/MEng (VLSI Design specialization, Dept. of Electronics)",
      "university": "Carleton University",
      "department": "Dept. of Electronics (OCIECE)",
      "location": "Ottawa, ON",
      "tier": "A",
      "gpa_fit": "good",
      "gpa_fit_note": "Carleton's official Bangladesh-specific admissions page (graduate.carleton.ca/international/admission-requirements/bangladesh/) states: 'Overall minimum: 55-60% (B-); Minimum in your major: 65-70% (B+)' for a 4-year bachelor's — confirmed this applies to B.Sc. Engineering-type degrees including NSU's EEE. NSU's standing comfortably clears this officially-published country-specific floor.",
      "overview": {
        "degree_type": "MASc|MEng",
        "duration": "1-2 years (MEng); thesis duration not separately stated",
        "language": "English",
        "department": "Dept. of Electronics (OCIECE)"
      },
      "course_details": {
        "curriculum_notes": "VLSI Design is listed as a field of specialization within the Dept. of Electronics; Mechatronics and Embedded Systems also listed as a specialization. No specific course list retrieved (would require visiting department research-areas page, not accessible in this pass).",
        "vlsi_rtl_relevance_notes": "Explicit 'VLSI Design' specialization field confirmed in Dept. of Electronics (OCIECE); candidate notes mention High-Speed/Low-Power VLSI and VLSI Design Project (fabrication) courses, consistent with page's specialization listing, though exact course titles not independently re-verified this pass."
      },
      "costs_funding": {
        "tuition": "Not found; page refers to Fee Estimator CAD/year (international)",
        "tuition_domestic": "Est. CAD $19,000 total / ~$1,900 per course (10 courses) for non-thesis pathways (Ontario domestic)",
        "tuition_notes": "International tuition significantly higher per Carleton fee estimator (not retrieved)."
      },
      "requirements_registration": {
        "gpa_requirement": "General minimum: B+ in major subjects, B- or better overall (university-wide minimum; program-specific not separately confirmed)",
        "prior_degree": "Not specified on program page beyond general university minimums",
        "gre_required": "Not found",
        "ielts": "Not found on program/minimum-requirements pages (referred to international admission requirements page, not separately fetched)",
        "toefl": "Not found",
        "english_exemptions": "Not found",
        "deadline_fall": "Application Deadline: March 1 (single deadline listed, not split by term)",
        "deadline_winter": "Not separately listed",
        "deadline_notes": "Entry terms: Fall, Winter, Summer; MEng Winter restricted to Systems & Computer Eng dept; MEng Summer unavailable.",
        "other_admission_notes": "MASc = thesis required; MEng = coursework only, 3 pathways (Coursework, Research Project, Thesis). MEng winter intake restricted to Dept. of Systems and Computer Engineering; no MEng summer intake."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://graduate.carleton.ca/program/electrical-and-computer-engineering-masters-programs/",
        "sources_consulted": [
          "https://graduate.carleton.ca/program/electrical-and-computer-engineering-masters-programs/",
          "https://graduate.carleton.ca/apply-online/minimum-requirements/"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Explicit VLSI Design specialization plus Mechatronics and Embedded Systems specialization; part of OCIECE joint institute with uOttawa; courses include High-Speed/Low-Power VLSI and VLSI Design Project (fabrication)."
    },
    {
      "id": "ca-concordia-university-electrical-and-computer-engineering-masc-10",
      "country": "Canada",
      "title": "Electrical and Computer Engineering - MASc",
      "university": "Concordia University",
      "department": "Gina Cody School of Engineering and Computer Science",
      "location": "Montreal, QC",
      "tier": "B",
      "gpa_fit": "borderline",
      "gpa_fit_note": "Concordia's official graduate calendar states a minimum GPA equivalent to 3.00/4.30. Proportionally rescaling NSU's 2.83/4.00 onto a 4.30 scale gives ≈3.04/4.30 — marginally above the stated floor, but this rescaling is an approximation, not Concordia's own published conversion method (international credentials are formally evaluated only after application).",
      "overview": {
        "degree_type": "MASc",
        "duration": "2 years",
        "language": "English",
        "department": "Gina Cody School of Engineering and Computer Science"
      },
      "course_details": {
        "curriculum_notes": "45 credits: 16 credits coursework + 29 credits thesis (ENGR 8901). Gina Cody School; English-taught.",
        "vlsi_rtl_relevance_notes": "Page emphasizes 'electrification' and Volt-Age funding; no explicit VLSI/microelectronics mention on this specific MASc overview page (contrast with MEng Concentration D below, which is explicit)."
      },
      "costs_funding": {
        "tuition": "Not found; page refers to tuition/fee estimator CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Tuition depends on student status per page."
      },
      "requirements_registration": {
        "gpa_requirement": "Not explicitly stated numerically; 'bachelor's degree in engineering or equivalent with high standing'",
        "prior_degree": "Bachelor's degree in engineering or equivalent",
        "gre_required": "Not mentioned",
        "ielts": "Not listed on this page",
        "toefl": "Not listed on this page",
        "english_exemptions": "Referred to separate English language proficiency page (not fetched)",
        "deadline_fall": "July 1 (Canadian residents); March 1 (U.S./international)",
        "deadline_winter": "November 1 (Canadian residents); July 1 (U.S./international)",
        "deadline_notes": "Summer: March 1 (Canadian); November 1 (U.S./international). Note: international deadlines are EARLIER than domestic (e.g., Fall intl = March 1 vs domestic July 1) - unusual pattern, verify directly.",
        "other_admission_notes": "45 credits total: min 16 credits coursework (Engineering Courses list, approved by supervisor/GPD) + 29 credits ENGR 8901 (MASc Research and Thesis)."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.concordia.ca/academics/graduate/electrical-engineering-masc.html",
        "sources_consulted": [
          "https://www.concordia.ca/academics/graduate/electrical-engineering-masc.html"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Thesis-based, 45 credits; English-taught (Gina Cody School)."
    },
    {
      "id": "ca-concordia-university-electrical-computer-engineering-meng-concentration-d-devices-microelectronics-and-electromagnetics-11",
      "country": "Canada",
      "title": "Electrical & Computer Engineering - MEng (Concentration D: Devices, Microelectronics and Electromagnetics)",
      "university": "Concordia University",
      "department": "Gina Cody School of Engineering and Computer Science",
      "location": "Montreal, QC",
      "tier": "A",
      "gpa_fit": "borderline",
      "gpa_fit_note": "Concordia's official graduate calendar states a minimum GPA equivalent to 3.00/4.30. Proportionally rescaling NSU's 2.83/4.00 onto a 4.30 scale gives ≈3.04/4.30 — marginally above the stated floor, but this rescaling is an approximation, not Concordia's own published conversion method (international credentials are formally evaluated only after application).",
      "overview": {
        "degree_type": "MEng",
        "duration": "1-2 years, 45 credits",
        "language": "English",
        "department": "Gina Cody School of Engineering and Computer Science"
      },
      "course_details": {
        "curriculum_notes": "45 credits: 5 cr Professional Leadership Skills (E09) + 20 cr from one concentration + 12 cr from listed topic areas + 8 cr Project/Report (ENGR 6971/6981) OR industrial stage (ELEC/COEN 6991, 8 cr).",
        "vlsi_rtl_relevance_notes": "Concentration D (Devices, Microelectronics and Electromagnetics) confirmed with specific courses: E43 Micro-Devices and Fabrication Processes; E44 Fields, Waves and Optoelectronics; F03 Microelectronic Systems. Direct VLSI/microelectronics fit confirmed via actual course codes, not just description."
      },
      "costs_funding": {
        "tuition": "Not found; refer to tuition/fee estimator CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Not stated on program page."
      },
      "requirements_registration": {
        "gpa_requirement": "Not explicitly numeric; 'bachelor's degree in engineering or equivalent with high standing'",
        "prior_degree": "Bachelor's degree in engineering or equivalent",
        "gre_required": "Not mentioned",
        "ielts": "Not listed; referred to separate English proficiency page",
        "toefl": "Not listed",
        "english_exemptions": "Not found",
        "deadline_fall": "July 1 (Canadian residents); March 1 (U.S./international)",
        "deadline_winter": "November 1 (Canadian residents); July 1 (U.S./international)",
        "deadline_notes": "Summer: March 1 (Canadian); November 1 (U.S./international).",
        "other_admission_notes": "Same application deadlines/process as MASc (shared Concordia graduate ECE admission)."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.concordia.ca/ginacody/electrical-computer-eng/programs/meng.html",
        "sources_consulted": [
          "https://www.concordia.ca/ginacody/electrical-computer-eng/programs/meng.html",
          "https://www.concordia.ca/academics/graduate/electrical-engineering-meng.html"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Course-based; Concentration D covers Micro-Devices and Fabrication Processes and Microelectronic Systems - direct VLSI/microelectronics fit."
    },
    {
      "id": "ca-university-of-ottawa-master-of-engineering-electrical-and-computer-engineering-12",
      "country": "Canada",
      "title": "Master of Engineering, Electrical and Computer Engineering",
      "university": "University of Ottawa",
      "department": "School of Electrical Engineering and Computer Science (OCIECE)",
      "location": "Ottawa, ON",
      "tier": "B",
      "gpa_fit": "unknown",
      "gpa_fit_note": "uOttawa's official country-by-country 'International equivalencies' tool exists but its live Bangladesh-specific entry could not be retrieved (page errors on repeated attempts) — no confirmed numeric floor available for this profile.",
      "overview": {
        "degree_type": "MEng",
        "duration": "~2 years (per third-party aggregator; not independently confirmed on official catalog page, which returned empty/unreadable during this pass)",
        "language": "English",
        "department": "School of Electrical Engineering and Computer Science (OCIECE)"
      },
      "course_details": {
        "curriculum_notes": "Course + project based; co-op option; Applied AI concentration available. Fields offered include Applied Artificial Intelligence.",
        "vlsi_rtl_relevance_notes": "Not directly confirmed on this pass; OCIECE partnership with Carleton (which has explicit VLSI Design specialization) suggests possible cross-access to VLSI coursework, but this was not independently verified for the MEng program specifically."
      },
      "costs_funding": {
        "tuition": "Not found/reliable — conflicting third-party figures (~31,500-42,660 CAD/year range cited for related MASc/AI concentration programs); could not verify against official fee schedule. CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Official catalog page content could not be retrieved (fetch returned empty/paywalled); figures above are unverified aggregator data."
      },
      "requirements_registration": {
        "gpa_requirement": "Bachelor's degree with a specialization or major in Electrical/Computer Engineering (or equivalent) with a minimum average of 70% (B), per uOttawa catalogue (via search cache); could not independently re-verify by direct page fetch.",
        "prior_degree": "Bachelor's degree with specialization/major in ECE or equivalent.",
        "gre_required": "Not mentioned",
        "ielts": "Third-party (Mastersportal) cites IELTS 6.5, TOEFL iBT 79, PTE 60 — NOT independently verified against the official uOttawa requirements page; treat as unconfirmed.",
        "toefl": "79 (unconfirmed, see above)",
        "english_exemptions": "Not found",
        "deadline_fall": "Not found/verified",
        "deadline_winter": "Not found",
        "deadline_notes": "Catalogue directs applicants to a separate requirements page for deadlines; not retrievable in this pass.",
        "other_admission_notes": "Joint OCIECE institute with Carleton University; co-op option and Applied AI concentration available."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://catalogue.uottawa.ca/en/graduate/master-engineering-electrical-computer-engineering/",
        "sources_consulted": [
          "https://catalogue.uottawa.ca/en/graduate/master-engineering-electrical-computer-engineering/",
          "web search: University of Ottawa Electrical and Computer Engineering MEng admission requirements"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Joint OCIECE institute with Carleton; course+project based; co-op option; concentration in Applied AI available."
    },
    {
      "id": "ca-university-of-ottawa-electrical-and-computer-engineering-masc-phd-via-ociece-13",
      "country": "Canada",
      "title": "Electrical and Computer Engineering (MASc/PhD via OCIECE)",
      "university": "University of Ottawa",
      "department": "School of Electrical Engineering and Computer Science (OCIECE)",
      "location": "Ottawa, ON",
      "tier": "B",
      "gpa_fit": "unknown",
      "gpa_fit_note": "uOttawa's official country-by-country 'International equivalencies' tool exists but its live Bangladesh-specific entry could not be retrieved (page errors on repeated attempts) — no confirmed numeric floor available for this profile.",
      "overview": {
        "degree_type": "MASc",
        "duration": "Not found (could not retrieve page content during this pass — repeated fetch failures/HTTP 402/503)",
        "language": "English",
        "department": "School of Electrical Engineering and Computer Science (OCIECE)"
      },
      "course_details": {
        "curriculum_notes": "Not found — official page inaccessible during this research pass.",
        "vlsi_rtl_relevance_notes": "Per candidate notes, OCIECE partnership with Carleton may provide access to VLSI/Electronics courses, but this was not independently verified in this pass due to page access failures."
      },
      "costs_funding": {
        "tuition": "Not found CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Page repeatedly failed to load during this research pass (HTTP 402/503 and empty responses). Recommend a separate manual visit to confirm all fields."
      },
      "requirements_registration": {
        "gpa_requirement": "Not found",
        "prior_degree": "Not found (presumed bachelor's in ECE or related, per general uOttawa engineering graduate norms, but not confirmed on this specific page)",
        "gre_required": "Not found",
        "ielts": "Not found",
        "toefl": "Not found",
        "english_exemptions": "Not found",
        "deadline_fall": "Not found",
        "deadline_winter": "Not found",
        "deadline_notes": "Not retrievable this pass",
        "other_admission_notes": "Thesis-based research program via OCIECE (joint institute with Carleton University); students may access Carleton VLSI/Electronics courses per candidate notes, but this could not be independently confirmed on the official uOttawa page in this pass."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.uottawa.ca/faculty-engineering/graduate-studies/programs/electrical-computer-engineering",
        "sources_consulted": [
          "https://www.uottawa.ca/faculty-engineering/graduate-studies/programs/electrical-computer-engineering (fetch failed: HTTP 402/503, empty content across multiple attempts)"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Thesis-based research program via OCIECE; students may access Carleton VLSI/Electronics courses."
    },
    {
      "id": "ca-university-of-calgary-electrical-and-computer-engineering-msc-thesis-14",
      "country": "Canada",
      "title": "Electrical and Computer Engineering - MSc (Thesis)",
      "university": "University of Calgary",
      "department": "Schulich School of Engineering",
      "location": "Calgary, AB",
      "tier": "B",
      "gpa_fit": "weak",
      "gpa_fit_note": "Calgary's official Faculty of Graduate Studies regulations require a GPA of 3.00/4.0 in the last two years of study. NSU's overall 2.83/4.0 is below this explicit floor (last-two-years figure not separately available, so this is a conservative estimate).",
      "overview": {
        "degree_type": "MSc",
        "duration": "Not explicitly stated for MSc (program is thesis-based, multi-year)",
        "language": "English",
        "department": "Schulich School of Engineering"
      },
      "course_details": {
        "curriculum_notes": "4-7 courses incl. 3 in specialization area, 2 professional development courses, original thesis with oral defense. Program duration ~20 months expected, 4-year max, part-time available.",
        "vlsi_rtl_relevance_notes": "Example course topics include 'VLSI and SOC' and multidimensional signal processing. Supervisor Leo Belostotski works in RF and mixed-signal integrated circuits/systems - direct VLSI relevance confirmed."
      },
      "costs_funding": {
        "tuition": "Not found; refer to Graduate Tuition and Fee Estimator CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Not stated on program-specific page."
      },
      "requirements_registration": {
        "gpa_requirement": "Minimum 3.0 on 4.0 scale, based on last two years full-time undergrad study (10 full-course equivalents/60 units)",
        "prior_degree": "Four-year bachelor's degree or equivalent from recognized institution",
        "gre_required": "Not mentioned",
        "ielts": "Not listed on this page; general university minimums apply (not re-confirmed this pass)",
        "toefl": "Not listed",
        "english_exemptions": "Referred to Academic Calendar",
        "deadline_fall": "September 1 admission: January 31 deadline (Canadians, PR, and international - same deadline, no earlier international cutoff noted)",
        "deadline_winter": "January 1 admission: April 30 deadline",
        "deadline_notes": "Program description page distinct from the general Schulich landing page, which lacked details.",
        "other_admission_notes": "Thesis-based research program."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://schulich.ucalgary.ca/electrical-software/programs/graduate",
        "sources_consulted": [
          "https://schulich.ucalgary.ca/electrical-software/programs/graduate",
          "https://grad.ucalgary.ca/future-students/explore-programs/electrical-computer-engineering-master-science-thesis-based"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Thesis-based research MSc."
    },
    {
      "id": "ca-university-of-calgary-electrical-and-computer-engineering-meng-course-based-15",
      "country": "Canada",
      "title": "Electrical and Computer Engineering - MEng (course-based)",
      "university": "University of Calgary",
      "department": "Schulich School of Engineering",
      "location": "Calgary, AB",
      "tier": "B",
      "gpa_fit": "weak",
      "gpa_fit_note": "Calgary's official Faculty of Graduate Studies regulations require a GPA of 3.00/4.0 in the last two years of study. NSU's overall 2.83/4.0 is below this explicit floor (last-two-years figure not separately available, so this is a conservative estimate).",
      "overview": {
        "degree_type": "MEng",
        "duration": "1-2 years full-time; 6 years max; part-time available; internship stream extends to 3 years",
        "language": "English",
        "department": "Schulich School of Engineering"
      },
      "course_details": {
        "curriculum_notes": "10 courses total. Specializations: Engineering, Energy and Environment (Interdisciplinary) and Software Engineering (8- or 12-month cohort). Optional 8-16 month paid internship available.",
        "vlsi_rtl_relevance_notes": "Not mentioned on this page; closest fit would be general ECE coursework. No VLSI-specific track identified for the course-based MEng."
      },
      "costs_funding": {
        "tuition": "Not found; refer to Graduate Tuition and Fee Estimator CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Page explicitly states MEng is self-funded."
      },
      "requirements_registration": {
        "gpa_requirement": "Minimum 3.0 on 4.0 scale, over past two years full-time undergrad study (10 full-course equivalents/60 units)",
        "prior_degree": "Four-year baccalaureate in electrical and computer engineering or equivalent; mainly software/computer-engineering backgrounds directed to Software Engineering specialization instead",
        "gre_required": "Not required ('None' listed explicitly)",
        "ielts": "Not stated on this page; see Academic Calendar",
        "toefl": "Not stated",
        "english_exemptions": "Not found",
        "deadline_fall": "September 1 intake: April 1 deadline (international and domestic)",
        "deadline_winter": "January 1 intake: August 1 deadline (international and domestic)",
        "deadline_notes": "Iranian applicants: December 1 (Fall), April 1 (Winter). Rolling admission encouraged - apply early.",
        "other_admission_notes": "Self-funded program; no reference letters or work samples required."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://grad.ucalgary.ca/future-students/explore-programs/electrical-and-computer-engineering-meng-course",
        "sources_consulted": [
          "https://grad.ucalgary.ca/future-students/explore-programs/electrical-and-computer-engineering-meng-course",
          "https://schulich.ucalgary.ca/electrical-software/programs/graduate"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Course-based; specializations include Energy and Environment and Software Engineering."
    },
    {
      "id": "ca-university-of-alberta-electrical-and-computer-engineering-msc-thesis-based-16",
      "country": "Canada",
      "title": "Electrical and Computer Engineering - MSc (Thesis-based)",
      "university": "University of Alberta",
      "department": "Dept. of Electrical and Computer Engineering",
      "location": "Edmonton, AB",
      "tier": "B",
      "gpa_fit": "weak",
      "gpa_fit_note": "U of A's official 'Minimum Academic Requirements by Country' page explicitly lists Bangladesh as requiring 'First Class/Division; 60%; 3 out of 4'. NSU's 2.83/4.0 is below this officially-published, country-specific 3.0/4.0 floor.",
      "overview": {
        "degree_type": "MSc",
        "duration": "Not explicitly stated for MSc on this page",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "12 listed research areas: Biomedical engineering, Communications, Computer engineering, Control systems, Electromagnetics and microwaves, Energy systems, Integrated circuits and systems, Microsystems and nanodevices, Photonics and plasmas, Signal and image processing, Software engineering and intelligent systems, Solid state electronics. Graduate courses listed under ECE subject heading in University Calendar.",
        "vlsi_rtl_relevance_notes": "'Integrated circuits and systems' and 'Microsystems and nanodevices' and 'Solid state electronics' are explicit research areas directly relevant to VLSI/RTL/microelectronics."
      },
      "costs_funding": {
        "tuition": "Not found on this page; refer to Faculty of Graduate & Postdoctoral Studies Tuition and Fees page CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Not stated here."
      },
      "requirements_registration": {
        "gpa_requirement": "Minimum 3.0 on 4-point scale (MSc/MEng); PhD requires 3.3; based on last 60 units or last two years full-time graded coursework",
        "prior_degree": "Undergraduate degree from recognized institution or equivalent; master's holders eligible only for PhD; doctoral holders ineligible for graduate program",
        "gre_required": "Not required — official department FAQ: 'Is the GRE Test Required? No, we do not require this test.' (ualberta.ca/engineering/electrical-computer-engineering/graduate-studies/faq.html)",
        "ielts": "Overall band 7.0, minimum 6.0 in each band",
        "toefl": "iBT 92 overall, min 21 each section (tests before Jan 21 2026); page lists '5 overall, min 4.5 each section' for tests on/after that date - likely a typo/scale change, needs verification",
        "english_exemptions": "Other accepted: CAEL overall 70 (min 60 per subtest), PTE Academic 62, CAMBRIDGE 176 (min 169 per subscore)",
        "deadline_fall": "International applicants: August 1; Canadian applicants: September 1 (official ECE department FAQ page)",
        "deadline_winter": "Not listed",
        "deadline_notes": "Not found.",
        "other_admission_notes": "Requires CV and three letters of reference (current U of A students exempt)."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.ualberta.ca/en/graduate-programs/electrical-and-computer-engineering.html",
        "sources_consulted": [
          "https://www.ualberta.ca/en/graduate-programs/electrical-and-computer-engineering.html"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Thesis-based research program; department has microsystems/VLSI faculty groups."
    },
    {
      "id": "ca-university-of-alberta-master-of-engineering-electrical-and-computer-engineering-17",
      "country": "Canada",
      "title": "Master of Engineering (Electrical and Computer Engineering)",
      "university": "University of Alberta",
      "department": "Dept. of Electrical and Computer Engineering",
      "location": "Edmonton, AB",
      "tier": "B",
      "gpa_fit": "weak",
      "gpa_fit_note": "U of A's official 'Minimum Academic Requirements by Country' page explicitly lists Bangladesh as requiring 'First Class/Division; 60%; 3 out of 4'. NSU's 2.83/4.0 is below this officially-published, country-specific 3.0/4.0 floor.",
      "overview": {
        "degree_type": "MEng",
        "duration": "Typically 1.5-2 years; max 6 years; min one 4-month full-time term in residence required",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "Minimum 27.0 units: eight 3-unit graduate courses approved by Associate Chair + 3-unit capstone ECE 910 (Directed Research Project). Additional coursework may be required.",
        "vlsi_rtl_relevance_notes": "Same 12 department research areas as MSc apply, including Integrated circuits and systems, Microsystems and nanodevices, Solid state electronics - relevant to VLSI/RTL. Embedded systems not separately named; may fall under Computer engineering."
      },
      "costs_funding": {
        "tuition": "Not found; refer to Faculty of Graduate & Postdoctoral Studies Tuition and Fees page CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Not stated here."
      },
      "requirements_registration": {
        "gpa_requirement": "Minimum 3.0 on 4-point scale (U of A or equivalent), based on last 60 units or last two full-time years",
        "prior_degree": "Undergraduate degree from recognized institution; master's in ECE/related field eligible only for PhD; doctorate holders ineligible",
        "gre_required": "Not required — official department FAQ: 'Is the GRE Test Required? No, we do not require this test.' (ualberta.ca/engineering/electrical-computer-engineering/graduate-studies/faq.html)",
        "ielts": "Overall band 7.0, min 6.0 in each band",
        "toefl": "iBT 92 overall, min 21 each section (tests before Jan 21 2026); '5 overall, min 4.5 each section' listed for tests after that date (verify - possibly a scale typo)",
        "english_exemptions": "CAEL, PTE Academic, CAMBRIDGE also accepted with own minimums",
        "deadline_fall": "International applicants: August 1; Canadian applicants: September 1 (official ECE department FAQ page)",
        "deadline_winter": "Not listed",
        "deadline_notes": "Not found.",
        "other_admission_notes": "Requires CV, three letters of reference (current U of A students exempt), plus ethics/professional development requirements."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.ualberta.ca/en/graduate-programs/master-of-engineering-electrical-and-computer-engineering.html",
        "sources_consulted": [
          "https://www.ualberta.ca/en/graduate-programs/master-of-engineering-electrical-and-computer-engineering.html"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Course-based with capstone project (ECE 910)."
    },
    {
      "id": "ca-university-of-saskatchewan-electrical-engineering-m-sc-thesis-project-18",
      "country": "Canada",
      "title": "Electrical Engineering - M.Sc. (thesis/project)",
      "university": "University of Saskatchewan",
      "department": "Dept. of Electrical and Computer Engineering",
      "location": "Saskatoon, SK",
      "tier": "B",
      "gpa_fit": "weak",
      "gpa_fit_note": "USask's official grade-conversion page (grad.usask.ca/admissions/grade-conversions.php) lists Bangladesh as equivalent to '60%; 3 out of 4; First Class/Division'. NSU's 2.83/4.0 is below this officially-published country-specific floor.",
      "overview": {
        "degree_type": "MSc",
        "duration": "2 years",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "Thesis-based; research areas include communications, digital systems, electronic materials, power systems. Required documents: online application with 3 referees, unofficial PDF transcripts (combined single PDF), certified translations if needed, English test score PDF if required.",
        "vlsi_rtl_relevance_notes": "'VLSI and computer aided design' explicitly listed among active Electrical Engineering research areas at USask (per department research-areas page) - direct VLSI fit, though specific faculty/lab names not retrieved in this pass."
      },
      "costs_funding": {
        "tuition": "$12,837/year (M.Sc. thesis, international) CAD/year (international)",
        "tuition_domestic": "$5,706/year (M.Sc. thesis, Canadian)",
        "tuition_notes": "Student fees additional (~$617.36 Fall 2026, $854.96 Winter 2027, $46.75 each Spring/Summer 2027); application fee $125 CAD domestic / $145 CAD international"
      },
      "requirements_registration": {
        "gpa_requirement": "Cumulative weighted average of at least 70% (USask grading scale) in the last two years of study",
        "prior_degree": "Relevant bachelor's degree (specific field not itemized on pages visited, though implied Electrical Engineering or related)",
        "gre_required": "Not mentioned",
        "ielts": "Not listed on pages visited; proof of English proficiency 'may be required' for international applicants and non-native speakers; refer to separate requirements page",
        "toefl": "Not listed on pages visited",
        "english_exemptions": "Test scores valid for 24 months per department page",
        "deadline_fall": "September start: May 31 domestic, March 31 international",
        "deadline_winter": "January start: Sept 30 domestic, July 31 international; May start: Jan 31 domestic, Nov 30 international",
        "deadline_notes": "Admission outcomes communicated ~2 months after deadline",
        "other_admission_notes": "Supervisor approval required to apply"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://programs.usask.ca/grad-studies/electrical-engineering/index.php",
        "sources_consulted": [
          "https://programs.usask.ca/grad-studies/electrical-engineering/index.php",
          "https://grad.usask.ca/programs/electrical-computer-engineering.php"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Research areas: communications, digital systems, electronic materials, power systems."
    },
    {
      "id": "ca-university-of-saskatchewan-electrical-engineering-m-eng-project-based-19",
      "country": "Canada",
      "title": "Electrical Engineering - M.Eng. (project-based)",
      "university": "University of Saskatchewan",
      "department": "Dept. of Electrical and Computer Engineering",
      "location": "Saskatoon, SK",
      "tier": "B",
      "gpa_fit": "weak",
      "gpa_fit_note": "USask's official grade-conversion page (grad.usask.ca/admissions/grade-conversions.php) lists Bangladesh as equivalent to '60%; 3 out of 4; First Class/Division'. NSU's 2.83/4.0 is below this officially-published country-specific floor.",
      "overview": {
        "degree_type": "MEng",
        "duration": "2 years",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "Project-based course program; detailed curriculum not itemized on pages visited - refers to official program catalogue (programs.usask.ca) for degree requirements.",
        "vlsi_rtl_relevance_notes": "Same departmental 'VLSI and computer aided design' research area listed for the Electrical Engineering graduate program applies to elective coursework availability, though M.Eng. is project-based rather than research-based."
      },
      "costs_funding": {
        "tuition": "$6,054/term (international) -> ~$24,216/year at 4 terms, or confirm actual term count; recorded as stated: $6,054 CAD/term CAD/year (international)",
        "tuition_domestic": "$2,691/term (Canadian)",
        "tuition_notes": "Figures are per-term, not per-year, as stated on official page; student fees additional"
      },
      "requirements_registration": {
        "gpa_requirement": "Cumulative weighted average of at least 70% (USask grading scale) in the last two years of study",
        "prior_degree": "Relevant bachelor's degree (field not itemized precisely)",
        "gre_required": "Not mentioned",
        "ielts": "Not listed on pages visited",
        "toefl": "Not listed on pages visited",
        "english_exemptions": "Test scores valid for 24 months",
        "deadline_fall": "September start: May 31 domestic, March 31 international",
        "deadline_winter": "January start: Sept 30 domestic, July 31 international; May start: Jan 31 domestic, Nov 30 international",
        "deadline_notes": "Same cycle as M.Sc.",
        "other_admission_notes": "Supervisor approval required to apply (per general department process)"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://grad.usask.ca/programs/electrical-computer-engineering.php",
        "sources_consulted": [
          "https://grad.usask.ca/programs/electrical-computer-engineering.php",
          "https://programs.usask.ca/grad-studies/electrical-engineering/index.php"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Project-based course program."
    },
    {
      "id": "ca-university-of-manitoba-electrical-and-computer-engineering-m-sc-20",
      "country": "Canada",
      "title": "Electrical and Computer Engineering, M.Sc.",
      "university": "University of Manitoba",
      "department": "Price Faculty of Engineering, Dept. of ECE",
      "location": "Winnipeg, MB",
      "tier": "B",
      "gpa_fit": "weak",
      "gpa_fit_note": "UM's official general graduate admission requirement is a minimum GPA of 3.0/4.0 (stated for the last two years of study). NSU's 2.83/4.0 is below this floor; a Bangladesh-specific equivalency page could not be located to refine this further.",
      "overview": {
        "degree_type": "MSc",
        "duration": "Not found (thesis-based; no fixed duration stated on official pages)",
        "language": "English",
        "department": "Price Faculty of Engineering, Dept. of ECE"
      },
      "course_details": {
        "curriculum_notes": "Thesis-based MSc: min. 12 credit hours coursework (6+ from ECE at 7000+ level), approved research proposal, and thesis defense.",
        "vlsi_rtl_relevance_notes": "VLSI not named directly, but department lists a Microelectronics and Nanotechnology Research Group and a micro-/nano-electronics research area (umanitoba.ca/ece/). No explicit VLSI/RTL coursework identified."
      },
      "costs_funding": {
        "tuition": "Not found (official fee schedule not retrievable; third-party aggregator figure of ~13,820 CAD/year unverified and not clearly labeled international) CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Official tuition page is umanitoba.ca/registrar/tuition-fees/graduate (could not be fetched during this pass)."
      },
      "requirements_registration": {
        "gpa_requirement": "Not found on official department/catalog pages. Third-party aggregators cite 3.0/4.0 (unverified).",
        "prior_degree": "Bachelor's degree in Electrical or Computer Engineering (or equivalent); requires tentative acceptance from an ECE faculty advisor before Faculty of Graduate Studies admission.",
        "gre_required": "Not mentioned",
        "ielts": "Not found on department pages; governed by general Faculty of Graduate Studies English proficiency policy (specific band not located).",
        "toefl": "Not found",
        "english_exemptions": "Not found",
        "deadline_fall": "Not found",
        "deadline_winter": "Not found",
        "deadline_notes": "No deadlines listed on the program catalog page; general Faculty of Graduate Studies admission page likely has these.",
        "other_admission_notes": "Must secure a willing faculty advisor/supervisor in the department prior to applying. Coursework: minimum 12 credit hours at 7000-level or higher (at least 6 from ECE), plus thesis and approved research proposal."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://catalog.umanitoba.ca/graduate-studies/engineering/electrical-computer-engineering-msc/",
        "sources_consulted": [
          "https://catalog.umanitoba.ca/graduate-studies/engineering/electrical-computer-engineering-msc/",
          "https://umanitoba.ca/ece/",
          "web search: University of Manitoba ECE MSc/MEng admission requirements"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Thesis-based, min 12 credit hours coursework + thesis."
    },
    {
      "id": "ca-university-of-manitoba-electrical-and-computer-engineering-m-eng-21",
      "country": "Canada",
      "title": "Electrical and Computer Engineering, M.Eng.",
      "university": "University of Manitoba",
      "department": "Price Faculty of Engineering, Dept. of ECE",
      "location": "Winnipeg, MB",
      "tier": "B",
      "gpa_fit": "weak",
      "gpa_fit_note": "UM's official general graduate admission requirement is a minimum GPA of 3.0/4.0 (stated for the last two years of study). NSU's 2.83/4.0 is below this floor; a Bangladesh-specific equivalency page could not be located to refine this further.",
      "overview": {
        "degree_type": "MEng",
        "duration": "Not found (no fixed term stated; course + project based)",
        "language": "English",
        "department": "Price Faculty of Engineering, Dept. of ECE"
      },
      "course_details": {
        "curriculum_notes": "Course-based: 24 credit hours of advisor-approved coursework + 6-credit final project (GRAD 7050), defended.",
        "vlsi_rtl_relevance_notes": "No VLSI/RTL-specific coursework found; closest relevant research group is Microelectronics and Nanotechnology."
      },
      "costs_funding": {
        "tuition": "Not found (official fee schedule not retrievable) CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Third-party aggregator figure ~6,282 CAD/year appeared but could not be verified or attributed to international vs domestic status."
      },
      "requirements_registration": {
        "gpa_requirement": "Not found on official pages (third-party aggregator cites 3.0/4.0, unverified)",
        "prior_degree": "Bachelor's degree in Electrical/Computer Engineering or related field.",
        "gre_required": "Not mentioned",
        "ielts": "Not found",
        "toefl": "Not found",
        "english_exemptions": "Not found",
        "deadline_fall": "Not found",
        "deadline_winter": "Not found",
        "deadline_notes": "Not listed on catalog page.",
        "other_admission_notes": "Catalog language suggests program is industrially oriented; one departmental note (per candidate list) implies applicants may normally be expected to be employed as a practicing engineer in Manitoba — NOT fully confirmed on official pages during this pass; recommend direct confirmation with department for international/non-resident applicants. Requires an advisor-approved coursework plan: min 24 credit hours (at least 9 ECE at 7000+, up to 9 ECE electives at 4000+, up to 12 from other depts at 3000+), plus final project GRAD 7050 (6 credit hours, defended)."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://catalog.umanitoba.ca/graduate-studies/engineering/electrical-computer-engineering-meng/",
        "sources_consulted": [
          "https://catalog.umanitoba.ca/graduate-studies/engineering/electrical-computer-engineering-meng/",
          "https://umanitoba.ca/ece/",
          "web search: University of Manitoba ECE MSc/MEng admission requirements"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Industrially-oriented, course + project based; per calendar may expect applicant employed as engineer - verify with dept."
    },
    {
      "id": "ca-western-university-electrical-and-computer-engineering-mesc-thesis-22",
      "country": "Canada",
      "title": "Electrical and Computer Engineering - MESc (thesis)",
      "university": "Western University",
      "department": "Dept. of Electrical and Computer Engineering",
      "location": "London, ON",
      "tier": "B",
      "gpa_fit": "weak",
      "gpa_fit_note": "Western's official Electrical & Computer Engineering department page confirms: 'Minimum 70% average in the last two years of study in a four-year honours degree or equivalent' — consistent with the general 3.0/4.0 university floor. NSU's 2.83/4.0 falls short of this officially-confirmed departmental bar.",
      "overview": {
        "degree_type": "MESc",
        "duration": "6 terms (2 years)",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "4 graduate technical courses (non-technical/professional development courses don't count), research thesis + successful defense, 1 seminar session, public lecture on thesis topic before exam. Streams being consolidated into general ECE field from Sept 2026 per candidate notes.",
        "vlsi_rtl_relevance_notes": "No explicit VLSI mention found; some hardware-related courses exist (ECE 9708 Photonic Integrated Circuits, ECE 9709 RF Engineering for Modern Applications) but not framed as VLSI coursework specifically. Research areas include microsystems/DSP hardware acceleration per candidate notes."
      },
      "costs_funding": {
        "tuition": "Not found on pages visited - see Financial Planning page CAD/year (international)",
        "tuition_domestic": "Not found on pages visited",
        "tuition_notes": "Not found definitively"
      },
      "requirements_registration": {
        "gpa_requirement": "78% minimum average (per Western Engineering graduate programs page); Accelerated MESc requires at least 78% cumulative average over 2nd/3rd years; transfer to PhD requires 85% average across MESc courses",
        "prior_degree": "Bachelor's degree in engineering (accredited) or similar program meeting the minimum average; Accelerated MESc open to current 3rd-year Western Engineering students following the BESc",
        "gre_required": "Not stated",
        "ielts": "Academic IELTS accepted (exact cutoff not isolated); official ECE page confirms GPA cross-check: 'Minimum 70% average in the last two years of study' (eng.uwo.ca/electrical)",
        "toefl": "86 iBT, no section below 20 — for tests taken before Jan 21, 2026 per official ECE page (eng.uwo.ca/electrical); policy for tests after that date not found — may already be outdated, re-verify.",
        "english_exemptions": "Some programs may require higher scores; Western TOEFL institution code 0984",
        "deadline_fall": "Research programs (MESc/PhD): Jul 31 domestic, Feb 1 international",
        "deadline_winter": "Jan start: Nov 30 domestic, Jul 1 international; May start: Mar 31 domestic, Nov 1 international",
        "deadline_notes": "Accelerated MESc application due no later than Aug 1 before 4th year",
        "other_admission_notes": "Eligible research-based students receive minimum $14,200 plus tuition annually in funding (starting Fall 2023)"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.eng.uwo.ca/electrical/graduate/current_students/mesc_program.html",
        "sources_consulted": [
          "https://www.eng.uwo.ca/electrical/graduate/current_students/mesc_program.html",
          "https://www.eng.uwo.ca/graduate/future-students/Graduate-Degree-Programs/electrical-computer.html"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Thesis-based; research areas include microsystems/DSP (hardware acceleration). Streams being consolidated into general ECE field from Sept 2026."
    },
    {
      "id": "ca-western-university-electrical-and-computer-engineering-meng-course-based-23",
      "country": "Canada",
      "title": "Electrical and Computer Engineering - MEng (course-based)",
      "university": "Western University",
      "department": "Dept. of Electrical and Computer Engineering",
      "location": "London, ON",
      "tier": "B",
      "gpa_fit": "weak",
      "gpa_fit_note": "Western's official Electrical & Computer Engineering department page confirms: 'Minimum 70% average in the last two years of study in a four-year honours degree or equivalent' — consistent with the general 3.0/4.0 university floor. NSU's 2.83/4.0 falls short of this officially-confirmed departmental bar.",
      "overview": {
        "degree_type": "MEng",
        "duration": "3 terms (1 year); part-time available",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "Course-based or project-based, ~8-10 courses over 1 year; specific course list not itemized on pages visited.",
        "vlsi_rtl_relevance_notes": "No explicit VLSI mention found on pages visited; same department as MESc so overlapping elective pool possible (photonics, RF courses)."
      },
      "costs_funding": {
        "tuition": "Not found on pages visited CAD/year (international)",
        "tuition_domestic": "Not found on pages visited",
        "tuition_notes": "Not found definitively"
      },
      "requirements_registration": {
        "gpa_requirement": "70% minimum average (about B- North American average)",
        "prior_degree": "Bachelor's degree in engineering from accredited university or similar program",
        "gre_required": "Not mentioned",
        "ielts": "Academic IELTS accepted (exact cutoff not isolated); official ECE page confirms GPA cross-check: 'Minimum 70% average in the last two years of study' (eng.uwo.ca/electrical)",
        "toefl": "86 iBT, no section below 20 — for tests taken before Jan 21, 2026 per official ECE page (eng.uwo.ca/electrical); policy for tests after that date not found — may already be outdated, re-verify.",
        "english_exemptions": "Some programs may require higher scores than the baseline",
        "deadline_fall": "MEng (professional): Jul 31 domestic, Feb 1 international (table header showed 'Feb 10, 2025' international in one row - appears outdated, confirm current cycle)",
        "deadline_winter": "MEng not offered Winter or Summer per table",
        "deadline_notes": "Fall is the only offered MEng intake per the official table",
        "other_admission_notes": "MEng students are not funded (funding available only for MESc/PhD)"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.eng.uwo.ca/graduate/future-students/Graduate-Degree-Programs/electrical-computer.html",
        "sources_consulted": [
          "https://www.eng.uwo.ca/graduate/future-students/Graduate-Degree-Programs/electrical-computer.html",
          "https://www.eng.uwo.ca/electrical/graduate/current_students/mesc_program.html"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Course-based, ~1 year, 8-10 courses."
    },
    {
      "id": "ca-university-of-windsor-electrical-and-computer-engineering-masc-24",
      "country": "Canada",
      "title": "Electrical and Computer Engineering - MASc",
      "university": "University of Windsor",
      "department": "Dept. of Electrical and Computer Engineering",
      "location": "Windsor, ON",
      "tier": "B",
      "gpa_fit": "borderline",
      "gpa_fit_note": "Windsor's official admissions page states a minimum admission average of 70% for Master's programs, with no published foreign-GPA conversion table. A simple linear read of NSU's 2.83/4.0 (≈70.75%) would narrowly clear 70%, but Windsor does not confirm it uses linear 4.0-to-100 conversion — treat as borderline, not a confirmed pass.",
      "overview": {
        "degree_type": "MASc",
        "duration": "Not found on pages visited (candidate notes: 4 courses + thesis)",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "Per candidate notes: thesis-based, 4 courses + thesis. Official page describes only program structure (MASc research-based with PhD pathway) without itemized curriculum.",
        "vlsi_rtl_relevance_notes": "Not found on pages visited - no VLSI/electronics research areas or faculty named on the pages retrieved. Requires follow-up on department research pages or faculty profiles not visited in this pass."
      },
      "costs_funding": {
        "tuition": "Not found on pages visited CAD/year (international)",
        "tuition_domestic": "Not found on pages visited",
        "tuition_notes": "Not found - page links to Graduate Assistantships and Graduate Courses Offerings pages not retrieved"
      },
      "requirements_registration": {
        "gpa_requirement": "Not found on pages visited",
        "prior_degree": "Not found explicitly on pages visited",
        "gre_required": "Not mentioned",
        "ielts": "Not found on pages visited",
        "toefl": "Not found on pages visited",
        "english_exemptions": "Not found",
        "deadline_fall": "Not found on pages visited",
        "deadline_winter": "Not found",
        "deadline_notes": "Contact gradece@uwindsor.ca for MASc/PhD admissions details",
        "other_admission_notes": "Research-based, path to PhD available; integrated BASc-MASc option exists (details not retrieved)"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.uwindsor.ca/engineering/electrical/298/graduate-programs",
        "sources_consulted": [
          "https://www.uwindsor.ca/engineering/electrical/298/graduate-programs"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Thesis-based, 4 courses + thesis."
    },
    {
      "id": "ca-university-of-windsor-master-of-engineering-electrical-ece-25",
      "country": "Canada",
      "title": "Master of Engineering (Electrical/ECE)",
      "university": "University of Windsor",
      "department": "Dept. of Electrical and Computer Engineering",
      "location": "Windsor, ON",
      "tier": "B",
      "gpa_fit": "borderline",
      "gpa_fit_note": "Windsor's official admissions page states a minimum admission average of 70% for Master's programs, with no published foreign-GPA conversion table. A simple linear read of NSU's 2.83/4.0 (≈70.75%) would narrowly clear 70%, but Windsor does not confirm it uses linear 4.0-to-100 conversion — treat as borderline, not a confirmed pass.",
      "overview": {
        "degree_type": "MEng",
        "duration": "3 or 4 terms, course-based",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "Course-based program, 3-4 terms; no specific ECE curriculum itemized on page (general University of Windsor MEng overview page, lists 'Electrical and Computer Engineering' as one focus area among several engineering disciplines).",
        "vlsi_rtl_relevance_notes": "Not found - general MEng overview page does not name ECE-specific courses or VLSI relevance; requires department-level page not retrieved (mengprog@uwindsor.ca contact given)."
      },
      "costs_funding": {
        "tuition": "Not found - page links to fee estimator tool CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Not found definitively"
      },
      "requirements_registration": {
        "gpa_requirement": "No explicit GPA; undergraduate degree 'in a relevant Engineering discipline with at least a 72% average'; no more than three failed/repeated courses, only one in years 3-4",
        "prior_degree": "Undergraduate degree in a relevant Engineering discipline",
        "gre_required": "Not mentioned",
        "ielts": "Not found on this page - refer to university's language requirements page (Faculty may require further proof)",
        "toefl": "Not found on this page",
        "english_exemptions": "Not found",
        "deadline_fall": "Not found on this page",
        "deadline_winter": "Not found",
        "deadline_notes": "Not found - check University of Windsor Academic Calendar",
        "other_admission_notes": "CV/resume required; co-op offered in some MEng disciplines (unclear if ECE is one)"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.future.uwindsor.ca/program/master-of-engineering-meng/",
        "sources_consulted": [
          "https://www.future.uwindsor.ca/program/master-of-engineering-meng/",
          "https://www.uwindsor.ca/engineering/electrical/298/graduate-programs"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Course-based, 3-4 terms."
    },
    {
      "id": "ca-toronto-metropolitan-university-tmu-formerly-ryerson-electrical-and-computer-engineering-masc-26",
      "country": "Canada",
      "title": "Electrical and Computer Engineering - MASc",
      "university": "Toronto Metropolitan University (TMU, formerly Ryerson)",
      "department": "Dept. of Electrical, Computer and Biomedical Engineering",
      "location": "Toronto, ON",
      "tier": "B",
      "gpa_fit": "borderline",
      "gpa_fit_note": "TMU sets GPA floors per-program rather than university-wide (seen ranging from 3.00/4.33 up to 3.67/4.33 across programs). NSU's 2.83/4.0 converts to roughly 3.06/4.33 — clears the lowest-tier programs but fails higher-bar ones; check the specific program's own page.",
      "overview": {
        "degree_type": "MASc",
        "duration": "Not explicitly stated on official page content retrieved; full-time and part-time formats offered for related MEng. MASc is research/thesis-based.",
        "language": "English",
        "department": "Dept. of Electrical, Computer and Biomedical Engineering"
      },
      "course_details": {
        "curriculum_notes": "Research/thesis-based per original candidate notes; offered in both Full-time and Part-time formats (Part-time appears to apply primarily to MEng per official listing).",
        "vlsi_rtl_relevance_notes": "Biomedical engineering is listed as one of the department's research areas; no explicit VLSI/RTL coursework or lab was identified on the official page content retrieved in this pass."
      },
      "costs_funding": {
        "tuition": "Not confirmed for ECE specifically. A third-party aggregator cites CAD 28,400/year international vs CAD 9,500/year domestic for the related Biomedical Engineering MASc — NOT verified as applying to ECE. CAD/year (international)",
        "tuition_domestic": "Unconfirmed (see above)",
        "tuition_notes": "Official TMU graduate tuition/Financing Your Studies page not fetched in this pass; treat all tuition figures as unverified for this specific program."
      },
      "requirements_registration": {
        "gpa_requirement": "Not explicitly numeric on official page.",
        "prior_degree": "Completion of a four-year undergraduate (or equivalent) degree from an accredited institution (confirmed via official page).",
        "gre_required": "Not mentioned",
        "ielts": "Not confirmed on official page for this specific program. A third-party aggregator figure of IELTS 7.0 (with waiver option) and TOEFL 93 was found for the related MASc in Biomedical Engineering at TMU — NOT verified as applying to the Electrical and Computer Engineering MASc specifically.",
        "toefl": "Unconfirmed (93 cited for a different TMU program)",
        "english_exemptions": "Not found",
        "deadline_fall": "Not found",
        "deadline_winter": "Not found",
        "deadline_notes": "Not retrievable from content fetched in this pass.",
        "other_admission_notes": "Official page states admission is competitive: 'it is not possible to offer admission to everyone who applies that meets the minimum entrance requirements.'"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.torontomu.ca/graduate/programs/electrical-computer-engineering/",
        "sources_consulted": [
          "https://www.torontomu.ca/graduate/programs/electrical-computer-engineering/",
          "web search: Toronto Metropolitan University TMU electrical computer biomedical engineering MASc MEng admission requirements"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Research/thesis-based."
    },
    {
      "id": "ca-toronto-metropolitan-university-tmu-formerly-ryerson-electrical-and-computer-engineering-meng-27",
      "country": "Canada",
      "title": "Electrical and Computer Engineering - MEng",
      "university": "Toronto Metropolitan University (TMU, formerly Ryerson)",
      "department": "Dept. of Electrical, Computer and Biomedical Engineering",
      "location": "Toronto, ON",
      "tier": "B",
      "gpa_fit": "borderline",
      "gpa_fit_note": "TMU sets GPA floors per-program rather than university-wide (seen ranging from 3.00/4.33 up to 3.67/4.33 across programs). NSU's 2.83/4.0 converts to roughly 3.06/4.33 — clears the lowest-tier programs but fails higher-bar ones; check the specific program's own page.",
      "overview": {
        "degree_type": "MASc",
        "duration": "Not explicitly stated on official page content retrieved; full-time and part-time formats offered for related MEng. MASc is research/thesis-based.",
        "language": "English",
        "department": "Dept. of Electrical, Computer and Biomedical Engineering"
      },
      "course_details": {
        "curriculum_notes": "Research/thesis-based per original candidate notes; offered in both Full-time and Part-time formats (Part-time appears to apply primarily to MEng per official listing).",
        "vlsi_rtl_relevance_notes": "Biomedical engineering is listed as one of the department's research areas; no explicit VLSI/RTL coursework or lab was identified on the official page content retrieved in this pass."
      },
      "costs_funding": {
        "tuition": "Not confirmed for ECE specifically. A third-party aggregator cites CAD 28,400/year international vs CAD 9,500/year domestic for the related Biomedical Engineering MASc — NOT verified as applying to ECE. CAD/year (international)",
        "tuition_domestic": "Unconfirmed (see above)",
        "tuition_notes": "Official TMU graduate tuition/Financing Your Studies page not fetched in this pass; treat all tuition figures as unverified for this specific program."
      },
      "requirements_registration": {
        "gpa_requirement": "Not explicitly numeric on official page.",
        "prior_degree": "Completion of a four-year undergraduate (or equivalent) degree from an accredited institution (confirmed via official page).",
        "gre_required": "Not mentioned",
        "ielts": "Not confirmed on official page for this specific program. A third-party aggregator figure of IELTS 7.0 (with waiver option) and TOEFL 93 was found for the related MASc in Biomedical Engineering at TMU — NOT verified as applying to the Electrical and Computer Engineering MASc specifically.",
        "toefl": "Unconfirmed (93 cited for a different TMU program)",
        "english_exemptions": "Not found",
        "deadline_fall": "Not found",
        "deadline_winter": "Not found",
        "deadline_notes": "Not retrievable from content fetched in this pass.",
        "other_admission_notes": "Official page states admission is competitive: 'it is not possible to offer admission to everyone who applies that meets the minimum entrance requirements.'"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.torontomu.ca/graduate/programs/electrical-computer-engineering/",
        "sources_consulted": [
          "https://www.torontomu.ca/graduate/programs/electrical-computer-engineering/",
          "web search: Toronto Metropolitan University TMU electrical computer biomedical engineering MASc MEng admission requirements"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Course/project-based, design-oriented."
    },
    {
      "id": "ca-york-university-electrical-and-computer-engineering-masc-28",
      "country": "Canada",
      "title": "Electrical and Computer Engineering - MASc",
      "university": "York University",
      "department": "Lassonde School of Engineering, EECS",
      "location": "Toronto, ON",
      "tier": "B",
      "gpa_fit": "risky",
      "gpa_fit_note": "York's Faculty of Graduate Studies explicitly states it does NOT accept WES-style conversions, using its own internal Graduate Credential Analysts instead; general floor is 'B, most programs require B+ or higher'. NSU's 2.83/4.0 sits below a B+ bar and at best borderline against a plain B floor.",
      "overview": {
        "degree_type": "MASc",
        "duration": "No more than 5 terms (20 months); continuous registration required",
        "language": "English",
        "department": "Lassonde School of Engineering, EECS"
      },
      "course_details": {
        "curriculum_notes": "4 graduate 3-credit courses plus written/defended thesis (typically research with practical demonstration/implementation); at most 1 course shared with undergraduate (EECS 5XXX) counts; thesis supervisor guides course selection.",
        "vlsi_rtl_relevance_notes": "Page does not mention VLSI/electronics specifically; refers to a separate 'Research Areas' page (not retrieved in this pass) for sub-discipline detail. Candidate notes describe program as '20-month research-intensive thesis program; fields include Computer, Electrical, Software Engineering.' Follow-up on Lassonde EECS faculty pages recommended to confirm VLSI/IC design groups."
      },
      "costs_funding": {
        "tuition": "Not found on page CAD/year (international)",
        "tuition_domestic": "Not found on page",
        "tuition_notes": "Not found definitively"
      },
      "requirements_registration": {
        "gpa_requirement": "B+ average in last two years of study (minimum; does not guarantee admission)",
        "prior_degree": "Honours undergraduate degree or equivalent (typically 4-year full-time) in Electrical, Computer, or Software Engineering from accredited university; must have completed senior-level project course/thesis or equivalent industrial/research experience",
        "gre_required": "Not mentioned",
        "ielts": "Not given on page",
        "toefl": "90-91 iBT (per page)",
        "english_exemptions": "English test scores required only if applicable (i.e., non-exempt applicants)",
        "deadline_fall": "Applications open Oct 1 - Dec 1",
        "deadline_winter": "Not given on page",
        "deadline_notes": "No Winter/Summer deadlines listed on this page",
        "other_admission_notes": "Progress Report required each term (due Dec 31, Apr 30, Aug 31)"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://lassonde.yorku.ca/eecs/academics/electrical-and-computer-engineering-masc/",
        "sources_consulted": [
          "https://lassonde.yorku.ca/eecs/academics/electrical-and-computer-engineering-masc/"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "20-month research-intensive thesis program; fields include Computer, Electrical, Software Engineering."
    },
    {
      "id": "ca-simon-fraser-university-engineering-science-masc-ensc-29",
      "country": "Canada",
      "title": "Engineering Science - MASc (ENSC)",
      "university": "Simon Fraser University",
      "department": "School of Engineering Science",
      "location": "Burnaby, BC",
      "tier": "B",
      "gpa_fit": "borderline",
      "gpa_fit_note": "SFU's official minimum is GPA 3.0/4.33 (or 3.33/4.33 over the last 60 credits, its preferred route). Converting 3.0/4.33≈2.77/4.0, NSU's 2.83/4.0 is just above that converted base floor but likely falls short of the preferred last-60-credit alternative.",
      "overview": {
        "degree_type": "MASc",
        "duration": "Not found on pages visited; described as full-time program (candidate notes: thesis-based research program)",
        "language": "English",
        "department": "School of Engineering Science"
      },
      "course_details": {
        "curriculum_notes": "30 semester hours total: at least 12 hours coursework (chosen with senior supervisor) plus 18-hour thesis based on independent project with significant research component; at least two oral progress presentations to Supervisory Committee plus thesis defense.",
        "vlsi_rtl_relevance_notes": "Not mentioned on this page; no VLSI or specific research areas listed. Follow-up on ENSC research groups/faculty pages (not retrieved) recommended to confirm VLSI/IC design presence within Engineering Science."
      },
      "costs_funding": {
        "tuition": "Not stated on this page CAD/year (international)",
        "tuition_domestic": "Not stated on this page",
        "tuition_notes": "Not found - refer to SFU graduate tuition schedule"
      },
      "requirements_registration": {
        "gpa_requirement": "Cumulative GPA of at least 3.0 (B) normally required; for transfer from M.Eng. to M.A.Sc.: undergraduate CGPA at least 3.3, and M.Eng. CGPA at least 3.5 on at least two courses",
        "prior_degree": "Bachelor's degree in Electrical Engineering, Computer Engineering, Engineering Science, or related area",
        "gre_required": "Not mentioned",
        "ielts": "Not stated on this page",
        "toefl": "Not stated on this page",
        "english_exemptions": "Not found",
        "deadline_fall": "Not stated on this page",
        "deadline_winter": "Not stated on this page",
        "deadline_notes": "Not found - this page appears old/not recently updated (references PostScript file format)",
        "other_admission_notes": "Supervisor required pre-admission (per candidate notes); application forms available via Registrar's Office or online in PostScript/PDF formats (page appears outdated in format description)"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "http://www2.ensc.sfu.ca/grad/admissions/masc.html",
        "sources_consulted": [
          "http://www2.ensc.sfu.ca/grad/admissions/masc.html"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Thesis-based research program; supervisor required pre-admission."
    },
    {
      "id": "ca-simon-fraser-university-engineering-science-meng-ensc-30",
      "country": "Canada",
      "title": "Engineering Science - MEng (ENSC)",
      "university": "Simon Fraser University",
      "department": "School of Engineering Science",
      "location": "Burnaby, BC",
      "tier": "B",
      "gpa_fit": "borderline",
      "gpa_fit_note": "SFU's official minimum is GPA 3.0/4.33 (or 3.33/4.33 over the last 60 credits, its preferred route). Converting 3.0/4.33≈2.77/4.0, NSU's 2.83/4.0 is just above that converted base floor but likely falls short of the preferred last-60-credit alternative.",
      "overview": {
        "degree_type": "MEng",
        "duration": "Not explicitly stated; designed for part-time study with evening courses; industrial project minimum 2 person-months",
        "language": "English",
        "department": "School of Engineering Science"
      },
      "course_details": {
        "curriculum_notes": "At least 21 semester hours graduate coursework including ENSC 820; specialization requirements: Communications (ENSC 805 & 810), Electronics (one of ENSC 851/852/853), Intelligent systems and control (ENSC 801); significant industrial project supervised by university senior supervisor and industry supervisor; project requires technical report and oral presentation.",
        "vlsi_rtl_relevance_notes": "'Electronics' specialization track (ENSC 851/852/853) is the closest VLSI-adjacent option, though course content/titles not itemized on this page - follow-up on SFU ENSC course catalogue recommended to confirm whether these cover IC/VLSI design specifically."
      },
      "costs_funding": {
        "tuition": "Not listed; page states minimum total fee of 6 full-time fee units, refer to SFU Calendar CAD/year (international)",
        "tuition_domestic": "Not listed",
        "tuition_notes": "Students who finish early may owe additional payment before graduation"
      },
      "requirements_registration": {
        "gpa_requirement": "Cumulative GPA of at least 3.0 (B) in relevant Bachelor's degree; transfer from M.Eng. to M.A.Sc. requires undergraduate CGPA >= 3.3 and CGPA >= 3.5 on at least two M.Eng. courses",
        "prior_degree": "Bachelor's degree in Electrical Engineering, Computer Engineering, Engineering Science, or related area from recognized university (or equivalent)",
        "gre_required": "Not mentioned",
        "ielts": "Not mentioned on this page",
        "toefl": "Not mentioned on this page",
        "english_exemptions": "Not found",
        "deadline_fall": "Not mentioned on this page",
        "deadline_winter": "Not mentioned on this page",
        "deadline_notes": "Not found",
        "other_admission_notes": "Designed for part-time working engineers; evening courses plus industry project (per candidate notes)"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "http://www2.ensc.sfu.ca/grad/admissions/meng.html",
        "sources_consulted": [
          "http://www2.ensc.sfu.ca/grad/admissions/meng.html"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Course-based, designed for part-time working engineers; evening courses plus industry project."
    },
    {
      "id": "ca-university-of-victoria-electrical-and-computer-engineering-masc-31",
      "country": "Canada",
      "title": "Electrical and Computer Engineering - MASc",
      "university": "University of Victoria",
      "department": "Dept. of Electrical and Computer Engineering",
      "location": "Victoria, BC",
      "tier": "B",
      "gpa_fit": "weak",
      "gpa_fit_note": "UVic's general Faculty of Graduate Studies floor is reported as B+ (6.0 on UVic's own 9-point scale, ≈3.3/4.0 equivalent); departmental floors often run 6.5-7.0. NSU's 2.83/4.0 is well below this converted B+ threshold.",
      "overview": {
        "degree_type": "MASc",
        "duration": "2 years (project or thesis-based, not course-based)",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "Thesis or project based; minimum course requirements per UVic graduate calendar (not itemized on page). Required documents: two assessment reports (academic/professional references), current resume, statement of intent, post-secondary transcripts.",
        "vlsi_rtl_relevance_notes": "Research areas touching electronics/materials and devices: Chris Papadopoulos, Mihai Sima (electronics and energy; materials and devices); electromagnetics/photonics faculty (Levi Smith, Reuven Gordon, Tao Lu, Poman So); Makhsud Saidaminov (solar cells, X-ray detectors, functional materials). No explicit VLSI/IC design mention found."
      },
      "costs_funding": {
        "tuition": "Not found - fee table empty on page, refers to tuition fee estimator CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Contact ecegsec@uvic.ca for tuition details"
      },
      "requirements_registration": {
        "gpa_requirement": "Not found on pages visited (refer to UVic graduate calendar)",
        "prior_degree": "Not explicitly stated on pages visited",
        "gre_required": "Not mentioned",
        "ielts": "Not found on pages visited (separate English language proficiency page not retrieved)",
        "toefl": "Not found on pages visited",
        "english_exemptions": "Not found",
        "deadline_fall": "September entry: apply by May 31",
        "deadline_winter": "January entry: apply by Sept 30; May entry: apply by Jan 31",
        "deadline_notes": "International applicants advised to start early due to lengthy processing",
        "other_admission_notes": "Must list a potential supervisor who agrees to supervise and recommend admission"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.uvic.ca/graduate/programs/graduate-programs/credential-pages/electrical-computer-engineering-cred/electrical-and-computer-engineering-masc.php",
        "sources_consulted": [
          "https://www.uvic.ca/graduate/programs/graduate-programs/credential-pages/electrical-computer-engineering-cred/electrical-and-computer-engineering-masc.php"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Thesis-based; research areas include electronics/materials and devices."
    },
    {
      "id": "ca-university-of-victoria-electrical-and-computer-engineering-meng-32",
      "country": "Canada",
      "title": "Electrical and Computer Engineering - MEng",
      "university": "University of Victoria",
      "department": "Dept. of Electrical and Computer Engineering",
      "location": "Victoria, BC",
      "tier": "B",
      "gpa_fit": "weak",
      "gpa_fit_note": "UVic's general Faculty of Graduate Studies floor is reported as B+ (6.0 on UVic's own 9-point scale, ≈3.3/4.0 equivalent); departmental floors often run 6.5-7.0. NSU's 2.83/4.0 is well below this converted B+ threshold.",
      "overview": {
        "degree_type": "MEng",
        "duration": "2 years, full-time, on-campus (course-based, not thesis-based)",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "Coursework plus a final project completed under faculty supervision, followed by an oral examination; required documents: two assessment reports, current resume, post-secondary transcripts.",
        "vlsi_rtl_relevance_notes": "Not found specific to MEng; same departmental electronics/materials/devices faculty pool as MASc potentially available for project supervision."
      },
      "costs_funding": {
        "tuition": "Not found - estimated minimum program cost figure did not load on page; refer to tuition fee estimator CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Contact ecegsec2@uvic.ca for tuition details"
      },
      "requirements_registration": {
        "gpa_requirement": "Not found on pages visited",
        "prior_degree": "Not explicitly stated on pages visited",
        "gre_required": "Not mentioned",
        "ielts": "Not found on pages visited (separate English language proficiency page)",
        "toefl": "Not found on pages visited",
        "english_exemptions": "Not found",
        "deadline_fall": "September entry: apply by May 31",
        "deadline_winter": "January entry: apply by Sept 30; May entry: apply by Jan 31",
        "deadline_notes": "International applicants advised to apply early",
        "other_admission_notes": "Must list a potential supervisor who agrees to supervise and recommend admission; co-op option available per candidate notes"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.uvic.ca/graduate/programs/graduate-programs/credential-pages/electrical-computer-engineering-cred/electrical-and-computer-engineering-meng.php",
        "sources_consulted": [
          "https://www.uvic.ca/graduate/programs/graduate-programs/credential-pages/electrical-computer-engineering-cred/electrical-and-computer-engineering-meng.php"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Non-thesis, coursework + final project; co-op option available."
    },
    {
      "id": "ca-dalhousie-university-electrical-engineering-masc-33",
      "country": "Canada",
      "title": "Electrical Engineering - MASc",
      "university": "Dalhousie University",
      "department": "Dept. of Electrical and Computer Engineering",
      "location": "Halifax, NS",
      "tier": "A",
      "gpa_fit": "weak",
      "gpa_fit_note": "Dalhousie's official admission requirements page (dal.ca/faculty/gradstudies) states explicitly: 'Minimum grade point average of 3.0 (B average) in the last 60 credit hours of study.' NSU's 2.83/4.0 is below this clear, confirmed floor.",
      "overview": {
        "degree_type": "MASc",
        "duration": "2 years or longer, full-time, in-person",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "No specific course list; thesis-based research program. Page mentions careers in semiconductor manufacturing among outcomes but does not confirm a microelectronics research track.",
        "vlsi_rtl_relevance_notes": "Candidate note claims department research areas explicitly list microelectronics, but this was NOT independently confirmed on the pages visited this pass - could not locate a department research-areas page with that detail. Flag for further verification."
      },
      "costs_funding": {
        "tuition": "Not found; refer to tuition/fee/scholarship page CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Not stated on program page."
      },
      "requirements_registration": {
        "gpa_requirement": "Not found; page refers to Faculty of Graduate Studies minimum requirements (not separately fetched)",
        "prior_degree": "Not specified on this page",
        "gre_required": "Not mentioned",
        "ielts": "Not listed; referred to international student admission requirements page",
        "toefl": "Not listed",
        "english_exemptions": "Not found",
        "deadline_fall": "Not listed (program starts September, January, May)",
        "deadline_winter": "Not listed",
        "deadline_notes": "Specific deadline dates not found; refer to Faculty of Graduate Studies admission pages.",
        "other_admission_notes": "Research-focused; faculty collaboration with industry/academia for publication and tech transfer opportunities."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.dal.ca/study/programs/graduate-professional/electrical-engineering-masc.html",
        "sources_consulted": [
          "https://www.dal.ca/study/programs/graduate-professional/electrical-engineering-masc.html"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Thesis-based; department research areas explicitly list microelectronics."
    },
    {
      "id": "ca-dalhousie-university-electrical-engineering-meng-34",
      "country": "Canada",
      "title": "Electrical Engineering - MEng",
      "university": "Dalhousie University",
      "department": "Dept. of Electrical and Computer Engineering",
      "location": "Halifax, NS",
      "tier": "B",
      "gpa_fit": "weak",
      "gpa_fit_note": "Dalhousie's official admission requirements page (dal.ca/faculty/gradstudies) states explicitly: 'Minimum grade point average of 3.0 (B average) in the last 60 credit hours of study.' NSU's 2.83/4.0 is below this clear, confirmed floor.",
      "overview": {
        "degree_type": "MEng",
        "duration": "16 months or longer, full-time, in-person",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "Project option vs. course-based Professional option; details not itemized on page. Mentions access to 'cutting-edge research labs.'",
        "vlsi_rtl_relevance_notes": "Page lists careers in semiconductor manufacturing (among electronics, telecom, computing) as a possible outcome, but no explicit VLSI/microelectronics course or lab named."
      },
      "costs_funding": {
        "tuition": "Not found; refer to tuition/scholarships page CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Not stated on program page."
      },
      "requirements_registration": {
        "gpa_requirement": "Not found; refer to Faculty of Graduate Studies minimum requirements",
        "prior_degree": "Not specified on this page",
        "gre_required": "Not mentioned",
        "ielts": "Not listed; referred to separate international students page",
        "toefl": "Not listed",
        "english_exemptions": "Not found",
        "deadline_fall": "Not listed (program starts September, January, May)",
        "deadline_winter": "Not listed",
        "deadline_notes": "Specific deadlines not found on this page.",
        "other_admission_notes": "Offers Project option (final project presentation) and course-based Professional option."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.dal.ca/study/programs/graduate-professional/electrical-engineering-meng.html",
        "sources_consulted": [
          "https://www.dal.ca/study/programs/graduate-professional/electrical-engineering-meng.html"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Course + project based, 12-18 months."
    },
    {
      "id": "ca-memorial-university-of-newfoundland-electrical-engineering-meng-thesis-based-35",
      "country": "Canada",
      "title": "Electrical Engineering - MEng (thesis-based)",
      "university": "Memorial University of Newfoundland",
      "department": "Dept. of Electrical and Computer Engineering",
      "location": "St. John's, NL",
      "tier": "B",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Memorial's official School of Graduate Studies regulations require only 'a second-class degree in an appropriate area of study' — a qualitative British-style standard with no numeric GPA/percentage published, so no clean comparison against NSU's 2.83/4.0 is possible.",
      "overview": {
        "degree_type": "MEng (functions as thesis-based master's despite MEng title)",
        "duration": "Normally about two years",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "At least four courses, a seminar course, and a thesis (program functions as research/thesis master's despite 'MEng' label).",
        "vlsi_rtl_relevance_notes": "Research facilities include Computer-Aided Design Laboratory for Analog and Mixed Signal VLSI Systems and the Centre for Digital Hardware Applications Research; tools cited include Synopsys/Cadence/Xilinx VLSI and FPGA design software and SPICE/PSPICE circuit simulators — direct VLSI relevance confirmed, though no single named 'VLSI' course was found."
      },
      "costs_funding": {
        "tuition": "Not confirmed precisely; one MUN FAQ cites total program cost of ~$9,666 CAD for the full 2-year international MEng (figure may be outdated/incomplete — treat cautiously). CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Minimum funding support referenced at ~$18,000 (minimum) per MUN engineering graduate FAQ; verify against current fee schedule."
      },
      "requirements_registration": {
        "gpa_requirement": "Not stated as a number; requires second-class ('B') standing or better in an appropriate bachelor's degree (per MUN School of Graduate Studies 19.1 Qualifications for Admission).",
        "prior_degree": "Bachelor's degree (minimum second-class/'B' standing) in an appropriate area of study; PhD applicants need a relevant master's.",
        "gre_required": "Not mentioned",
        "ielts": "Not found on department pages (governed by general MUN School of Graduate Studies English proficiency policy; specific band not located in this pass)",
        "toefl": "Not found",
        "english_exemptions": "Not found",
        "deadline_fall": "Conflicting dates found across MUN pages: Dec 1 on one page, Nov 1 on another for Fall (MEng/PhD) admission. Needs direct confirmation with ECE department.",
        "deadline_winter": "Not found",
        "deadline_notes": "Deadlines differ by source page; treat as unresolved.",
        "other_admission_notes": "Two academic reference letters required."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.mun.ca/engineering/graduate/programs/electrical-engineering/",
        "sources_consulted": [
          "https://www.mun.ca/engineering/graduate/programs/electrical-engineering/",
          "https://www.mun.ca/engineering/graduate/faq-for-prospective-research-students/",
          "https://www.mun.ca/university-calendar/school-of-graduate-studies/school-of-graduate-studies/19/1/",
          "web search: Memorial University MUN Electrical Engineering MEng graduate admission"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Note: MUN's EE master's is thesis-based despite the MEng title; research areas include electronics, power systems, antennas, wireless."
    },
    {
      "id": "ca-university-of-new-brunswick-electrical-and-computer-engineering-msce-thesis-36",
      "country": "Canada",
      "title": "Electrical and Computer Engineering - MScE (thesis)",
      "university": "University of New Brunswick",
      "department": "Dept. of Electrical and Computer Engineering",
      "location": "Fredericton, NB",
      "tier": "B",
      "gpa_fit": "unknown",
      "gpa_fit_note": "UNB's central graduate admissions page states requirements 'differ between programs' with no university-wide numeric GPA floor; the specific program page would need to be checked directly.",
      "overview": {
        "degree_type": "MScE",
        "duration": "2 years (full-time typical)",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "Research proposal + thesis + approved course program of at least 15 credit hours (min 9 graduate EE credit hours); research areas include Electronics and digital systems, communications, power systems.",
        "vlsi_rtl_relevance_notes": "'Electronics and digital systems' research area explicitly lists 'Design of VLSI circuits' alongside embedded system development and fault-tolerant system design - direct VLSI mention, though unclear how tightly integrated into standard MScE track."
      },
      "costs_funding": {
        "tuition": "Not found on pages visited - see UNB Tuition & Fees page CAD/year (international)",
        "tuition_domestic": "Not found on pages visited",
        "tuition_notes": "Not found definitively"
      },
      "requirements_registration": {
        "gpa_requirement": "Undergraduate degree with minimum average of 80% or First Class standing (per UNB graduate studies page); department page states 'first or second division standing in electrical engineering or related discipline'",
        "prior_degree": "Bachelor's degree with first or second division standing in electrical engineering or related discipline",
        "gre_required": "Not stated/not mentioned",
        "ielts": "7.0 overall (one skill retake accepted; online version not accepted)",
        "toefl": "Paper-based 580 (TWE 4.0); internet-based 94 (writing 25); computer-based 213 (writing 4.0)",
        "english_exemptions": "Also accepts MELAB 64 (no section below 59), CAEL CE/Online 80, Duolingo 125 (subscore 105); applies to non-native English speakers",
        "deadline_fall": "Listed as 'Open' (rolling) on department page",
        "deadline_winter": "Not specified separately",
        "deadline_notes": "Confirm with ece-grad@unb.ca",
        "other_admission_notes": "Min 15 credit hours coursework including at least 9 graduate EE credit hours, plus thesis and research proposal"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.unb.ca/fredericton/engineering/depts/ece/grad.html",
        "sources_consulted": [
          "https://www.unb.ca/fredericton/engineering/depts/ece/grad.html"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Research-oriented; min 15 credit hrs coursework incl. 9 grad EE courses, plus thesis."
    },
    {
      "id": "ca-university-of-new-brunswick-electrical-engineering-meng-course-based-37",
      "country": "Canada",
      "title": "Electrical Engineering - MEng (course-based)",
      "university": "University of New Brunswick",
      "department": "Dept. of Electrical and Computer Engineering",
      "location": "Fredericton, NB",
      "tier": "B",
      "gpa_fit": "unknown",
      "gpa_fit_note": "UNB's central graduate admissions page states requirements 'differ between programs' with no university-wide numeric GPA floor; the specific program page would need to be checked directly.",
      "overview": {
        "degree_type": "MEng",
        "duration": "Up to 24 months (coursework only)",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "30 credit hours of approved graduate coursework; coursework-only, no supervisor required; optional 6-credit EE6000 MEng Project with written document and public presentation.",
        "vlsi_rtl_relevance_notes": "Same departmental 'Electronics and digital systems' research area (VLSI circuit design, embedded systems, fault-tolerant systems) informs available elective coursework, though MEng is course-based without research requirement."
      },
      "costs_funding": {
        "tuition": "Not found on pages visited CAD/year (international)",
        "tuition_domestic": "Not found on pages visited",
        "tuition_notes": "Not found - see UNB Tuition & Fees page"
      },
      "requirements_registration": {
        "gpa_requirement": "Minimum average of 80% or First Class standing (same general UNB Graduate Studies threshold)",
        "prior_degree": "Accredited undergraduate degree in relevant discipline",
        "gre_required": "Not mentioned",
        "ielts": "7.0 overall",
        "toefl": "Internet-based 94 (writing 25); paper-based 580; computer-based 213",
        "english_exemptions": "MELAB 64, CAEL 80, Duolingo 125 also accepted",
        "deadline_fall": "Listed as 'Open' (rolling)",
        "deadline_winter": "Not specified",
        "deadline_notes": "Confirm with ece-grad@unb.ca",
        "other_admission_notes": "30 credit hours, no supervisor required; optional EE6000 project course"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.unb.ca/gradstudies/programs/electrical.html",
        "sources_consulted": [
          "https://www.unb.ca/gradstudies/programs/electrical.html",
          "https://www.unb.ca/fredericton/engineering/depts/ece/grad.html"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Course-based, 30 credit hrs, no supervisor required; optional EE6000 project course."
    },
    {
      "id": "ca-university-of-regina-electronic-systems-engineering-masc-meng-38",
      "country": "Canada",
      "title": "Electronic Systems Engineering - MASc/MEng",
      "university": "University of Regina",
      "department": "Faculty of Engineering and Applied Science",
      "location": "Regina, SK",
      "tier": "B",
      "gpa_fit": "good",
      "gpa_fit_note": "Regina's official eligibility page explicitly states its own WES-based equivalency: 'The equivalent score to 70% at the U of R is 2.67 out of 4.00.' NSU's 2.83/4.0 exceeds that officially-published floor for most programs (fails only the five 75%-average programs: English, History, Math/Stats, MPA — not relevant to this EEE profile).",
      "overview": {
        "degree_type": "MASc|MEng",
        "duration": "MASc: 2 years, 30 credit hours. MEng (Project): 2 years, 30 credit hours. MEng (Co-op): 2 years 8 months, 38 credit hours. PhD: 4 years. (Confirmed via official page)",
        "language": "English",
        "department": "Faculty of Engineering and Applied Science"
      },
      "course_details": {
        "curriculum_notes": "Official page names 'applied machine learning' and 'power systems advanced protection and control' as popular courses but does not enumerate the full required course list. MEng offers Project and Co-op options; MASc is thesis-based.",
        "vlsi_rtl_relevance_notes": "No VLSI mentioned on official page. Micro-electronics/embedded lab with industry-standard microcontrollers, electronics lab, RF lab, and wireless sensor networks lab are cited. Research areas: advanced communication systems, cyber-physical systems, signal processing, smart energy systems. Topics per original candidate notes include RF/communications/power electronics (confirmed general alignment, no explicit VLSI)."
      },
      "costs_funding": {
        "tuition": "Not found on official page (links out to separate Application Guide/Program Requirements and fee pages not retrieved in this pass). Aggregators cite widely conflicting figures (~13,000-29,700 CAD/year); unverified. CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Official page explicitly defers tuition details to a separate tuition/fees page not captured in this pass."
      },
      "requirements_registration": {
        "gpa_requirement": "No numeric GPA cutoff stated on official page. Third-party aggregators cite ~70% graduating average and/or 3.0/4.0 GPA (unverified against official page, which does not list this figure).",
        "prior_degree": "Four-year bachelor's degree in engineering or equivalent (implied; official page did not state explicit GPA/degree minimum in retrievable content).",
        "gre_required": "Conflicting reports from aggregators — some say required, some say not; not mentioned on official page content retrieved.",
        "ielts": "Not stated on official page; third-party sources most consistently cite IELTS 6.5 (TOEFL iBT cited variably as 70 or 80) — not independently verified against official admissions page.",
        "toefl": "Unconfirmed (70-80 range cited by different aggregators)",
        "english_exemptions": "Not found",
        "deadline_fall": "Not listed on official page; one aggregator cites a Sep 2026 MEng deadline (already passed as of scrape date) — unconfirmed.",
        "deadline_winter": "One aggregator cites a Jun 2026 deadline for Jan 2027 MASc intake — unconfirmed.",
        "deadline_notes": "Official page defers deadline specifics to a separate Application Guide page.",
        "other_admission_notes": "All MASc and PhD students must have an identified supervisor from the Electronic Systems Engineering program before admission (per third-party source, common for Canadian research programs, not independently verified via official page in this pass)."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.uregina.ca/academics/programs/engineering/masters-phd-electronic-systems-engineering.html",
        "sources_consulted": [
          "https://www.uregina.ca/academics/programs/engineering/masters-phd-electronic-systems-engineering.html",
          "web search: University of Regina Electronic Systems Engineering MASc MEng admission requirements"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "MASc thesis-based; MEng project/co-op based; topics include RF/communications/power electronics."
    },
    {
      "id": "ca-queen-s-university-electrical-and-computer-engineering-masc-39",
      "country": "Canada",
      "title": "Electrical and Computer Engineering - MASc",
      "university": "Queen's University",
      "department": "Dept. of Electrical and Computer Engineering (Smith Engineering)",
      "location": "Kingston, ON",
      "tier": "B",
      "gpa_fit": "weak",
      "gpa_fit_note": "Queen's assesses GPA per-department rather than university-wide; programs reviewed cluster around a B+ floor (3.3/4.3 ≈3.07/4.0 equivalent, roughly 77-80%). NSU's 2.83/4.0 is below this common departmental floor.",
      "overview": {
        "degree_type": "MASc",
        "duration": "~2 years (per third-party aggregator; not independently confirmed — official calendar page returned empty content on repeated fetch attempts)",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering (Smith Engineering)"
      },
      "course_details": {
        "curriculum_notes": "Thesis-based; research areas include Microelectronics, Electromagnetics, Photonics per candidate notes.",
        "vlsi_rtl_relevance_notes": "CMC (Canadian Microelectronics Corporation) facility access for IC fabrication was noted in the original candidate list as a direct VLSI/IC fabrication resource, but could not be independently re-verified via official page fetch in this research pass due to repeated empty-content retrievals."
      },
      "costs_funding": {
        "tuition": "Not found/reliable — conflicting aggregator figures ranging from ~20,467 to ~29,798 CAD/year; none verified against official Queen's fee schedule. CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Official Queen's academic calendar page content could not be retrieved (empty response) despite multiple attempts."
      },
      "requirements_registration": {
        "gpa_requirement": "Not confirmed on official page. Third-party aggregators cite 75% / B+ or 'Upper Second Class Standing' for domestic applicants; figures conflict across sources and were not verified against the official Queen's calendar.",
        "prior_degree": "Bachelor's degree in engineering or closely related field (unconfirmed detail from aggregators).",
        "gre_required": "Not mentioned",
        "ielts": "Not confirmed on official page. One third-party listing (for a differently-named MSc program) cites IELTS 7.0/TOEFL iBT 88, but this is NOT verified as applying to the MASc specifically.",
        "toefl": "Unconfirmed, see above",
        "english_exemptions": "Not found",
        "deadline_fall": "Not found/verified; one aggregator suggests a January MASc intake exists, unconfirmed.",
        "deadline_winter": "Not found",
        "deadline_notes": "Not retrievable this pass.",
        "other_admission_notes": "Research areas include Microelectronics, Electromagnetics, Photonics; students have access to on-campus CMC (Canadian Microelectronics Corporation) facilities for IC fabrication, per candidate list notes — could not independently re-confirm via official page fetch in this pass."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.queensu.ca/academic-calendar/graduate-studies/programs-study/electrical-computer-engineering/electrical-computer-engineering-masc/",
        "sources_consulted": [
          "https://www.queensu.ca/academic-calendar/graduate-studies/programs-study/electrical-computer-engineering/electrical-computer-engineering-masc/ (fetch returned empty content across multiple attempts)",
          "web search: Queen's University electrical computer engineering MASc MEng admission requirements"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Thesis-based; research areas include Microelectronics, Electromagnetics, Photonics; access to on-campus CMC (Canadian Microelectronics Corporation) facilities for IC fabrication."
    },
    {
      "id": "ca-queen-s-university-electrical-and-computer-engineering-meng-40",
      "country": "Canada",
      "title": "Electrical and Computer Engineering - MEng",
      "university": "Queen's University",
      "department": "Dept. of Electrical and Computer Engineering (Smith Engineering)",
      "location": "Kingston, ON",
      "tier": "B",
      "gpa_fit": "weak",
      "gpa_fit_note": "Queen's assesses GPA per-department rather than university-wide; programs reviewed cluster around a B+ floor (3.3/4.3 ≈3.07/4.0 equivalent, roughly 77-80%). NSU's 2.83/4.0 is below this common departmental floor.",
      "overview": {
        "degree_type": "MEng",
        "duration": "~12 months / ~1 year (per third-party aggregator, unconfirmed on official page)",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering (Smith Engineering)"
      },
      "course_details": {
        "curriculum_notes": "Course-based, ~1 year per candidate notes; could not retrieve detailed curriculum from official page in this pass.",
        "vlsi_rtl_relevance_notes": "Not independently confirmed this pass; see MASc entry for CMC facility note (same department)."
      },
      "costs_funding": {
        "tuition": "Not found/reliable — aggregator figures range widely from ~CAD 10,854 (older/2021 figure) to ~CAD 29,798 and even USD 30,577; none verified. CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Official calendar page content could not be retrieved (empty response)."
      },
      "requirements_registration": {
        "gpa_requirement": "Not confirmed on official page (empty content on repeated fetches). Aggregators cite domestic requirement of 75%/B+.",
        "prior_degree": "Bachelor's degree in engineering or related field (unconfirmed detail).",
        "gre_required": "Not mentioned",
        "ielts": "Not confirmed; official page says non-native English speakers must submit a proficiency score, but no numeric band was retrievable in this pass.",
        "toefl": "Not found",
        "english_exemptions": "Not found",
        "deadline_fall": "One aggregator claims Fall (September) only intake for MEng — unconfirmed.",
        "deadline_winter": "Not found",
        "deadline_notes": "Not retrievable this pass.",
        "other_admission_notes": "Three MEng options reported by aggregators: course-based, course-based with academic project, course-based with internship — not independently verified."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.queensu.ca/academic-calendar/graduate-studies/programs-study/electrical-computer-engineering/electrical-computer-engineering-meng/",
        "sources_consulted": [
          "https://www.queensu.ca/academic-calendar/graduate-studies/programs-study/electrical-computer-engineering/electrical-computer-engineering-meng/ (fetch returned empty content across multiple attempts)",
          "web search: Queen's University electrical computer engineering MASc MEng admission requirements"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Course-based, ~1 year."
    },
    {
      "id": "ca-lakehead-university-electrical-and-computer-engineering-msc-eng-41",
      "country": "Canada",
      "title": "Electrical and Computer Engineering - MSc Eng",
      "university": "Lakehead University",
      "department": "Dept. of Electrical and Computer Engineering",
      "location": "Thunder Bay, ON",
      "tier": "B",
      "gpa_fit": "borderline",
      "gpa_fit_note": "Lakehead's official international admissions page states a minimum 'equivalent of 70% overall final average (Canadian)' for general admission; graduate-specific wording elsewhere cites 'B, or Second Class (Upper Division)'. NSU's 2.83/4.0 sits right at the edge of a clean B (3.0) — borderline, with the exact numeric outcome determined case-by-case by Lakehead's internal conversion.",
      "overview": {
        "degree_type": "MSc",
        "duration": "Expected completion 20 months; 4-year maximum; part-time available",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "4-7 courses total incl. 3 in specialization area, plus 2 professional development courses and a required original thesis with open oral defense. Example course topics: virtual environments, data mining, intelligent control, VLSI and SOC, multidimensional signal processing.",
        "vlsi_rtl_relevance_notes": "Explicit course topic 'VLSI and SOC' confirmed. Supervisor Leo Belostotski's research area is RF and mixed-signal integrated circuits and systems - direct VLSI relevance. Supervisor list is paginated; other VLSI-relevant faculty may exist beyond first page (not fully explored)."
      },
      "costs_funding": {
        "tuition": "Not found; refer to Graduate Tuition and Fee Estimator and Graduate Calendar CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Not stated on this page."
      },
      "requirements_registration": {
        "gpa_requirement": "Not explicitly numeric on this page",
        "prior_degree": "Four-year bachelor's degree or equivalent from recognized institution",
        "gre_required": "Not mentioned",
        "ielts": "Not listed; multiple pathways to meet English proficiency, refer to Academic Calendar",
        "toefl": "Not listed",
        "english_exemptions": "Several accepted criteria per Academic Calendar (not itemized on this page)",
        "deadline_fall": "September 1 admission: January 31 deadline (Canadians, PR, and international - same deadline)",
        "deadline_winter": "January 1 admission: April 30 deadline",
        "deadline_notes": "Note: later attempts to re-verify this page via alternate URL paths returned 404 - confirm link stability before publishing.",
        "other_admission_notes": "Two reference letters required. No work samples or other test scores required."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.lakeheadu.ca/programs/graduate/programs/masters/electrical-and-computer-engineering",
        "sources_consulted": [
          "https://www.lakeheadu.ca/programs/graduate/programs/masters/electrical-and-computer-engineering"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Thesis and course-based routes; research areas include Circuits and Systems, Electron Devices and Semiconductors."
    },
    {
      "id": "ca-university-of-guelph-engineering-masc-electrical-engineering-field-of-study-42",
      "country": "Canada",
      "title": "Engineering - MASc (Electrical Engineering field of study)",
      "university": "University of Guelph",
      "department": "School of Engineering",
      "location": "Guelph, ON",
      "tier": "B",
      "gpa_fit": "weak",
      "gpa_fit_note": "Guelph's official Graduate & Postdoctoral Studies page states explicitly: 'A 70% (B-) average is required in the last two years of full-time equivalent study' and clarifies '70% corresponds to 3.0 on the US 4.0 scale.' NSU's 2.83/4.0 is below this officially-stated 3.0/4.0 equivalence — the single cleanest, most directly confirmed official conversion statement found across all 36 universities, and it shows a FAIL for this CGPA.",
      "overview": {
        "degree_type": "MASc",
        "duration": "24 months full-time, 48 months part-time",
        "language": "English",
        "department": "School of Engineering"
      },
      "course_details": {
        "curriculum_notes": "IMPORTANT FINDING: This page's official MASc 'Fields of Study' list is: Biological, Biomedical, Computer, Engineering Systems & Computing, Environmental, Mechanical, Mechatronics, and Water Resources Engineering. 'Electrical Engineering' is NOT listed as a current MASc field of study on this official page (it appears only as an undergraduate major) - this contradicts the candidate note's assumption and should be flagged/re-verified before treating this as a valid VLSI-relevant program.",
        "vlsi_rtl_relevance_notes": "No Electrical Engineering MASc field found; 'Computer' and 'Engineering Systems & Computing' fields may have embedded/digital-systems relevance but no explicit VLSI/RTL mention found."
      },
      "costs_funding": {
        "tuition": "Not found on this page CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Not stated."
      },
      "requirements_registration": {
        "gpa_requirement": "75% admission average",
        "prior_degree": "Honours engineering degree (B.Eng or equivalent) with min 75% average in last 4 full-time semesters, OR honours BSc with min 75% in last 4 semesters/last 2 years, with sufficient math/physics/chemistry coursework (may require extra non-credit courses)",
        "gre_required": "Not mentioned",
        "ielts": "6.0 minimum in each band, 6.5 overall",
        "toefl": "Not mentioned on this page",
        "english_exemptions": "Required if English not first language or degree from non-English-speaking country",
        "deadline_fall": "Domestic: June 15; International: April 15",
        "deadline_winter": "Domestic: October 1; International: August 15",
        "deadline_notes": "Summer: Domestic Feb 1, International Dec 15. Supporting documents due one month after deadline. International applicants advised to apply 9+ months before start.",
        "other_admission_notes": "WES evaluations NOT accepted for transcripts - grading scale must be included on official transcripts directly."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.uoguelph.ca/engineering/grad/masc-program",
        "sources_consulted": [
          "https://www.uoguelph.ca/engineering/grad/masc-program"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Thesis-based; Electrical Engineering is one of several fields of study (verify current field list/availability of VLSI-adjacent supervisors)."
    },
    {
      "id": "ca-ontario-tech-university-formerly-uoit-electrical-and-computer-engineering-masc-43",
      "country": "Canada",
      "title": "Electrical and Computer Engineering - MASc",
      "university": "Ontario Tech University (formerly UOIT)",
      "department": "Faculty of Engineering and Applied Science",
      "location": "Oshawa, ON",
      "tier": "B",
      "gpa_fit": "unknown",
      "gpa_fit_note": "No official university-wide or departmental numeric GPA floor could be retrieved from Ontario Tech's official pages (pages fetched were navigational only); equivalency assessment is done per-country by the School of Graduate and Postdoctoral Studies but the specific Bangladesh figure was not located.",
      "overview": {
        "degree_type": "MASc",
        "duration": "MASc: 24 months full-time (confirmed via official page).",
        "language": "English",
        "department": "Faculty of Engineering and Applied Science"
      },
      "course_details": {
        "curriculum_notes": "MASc: 5 courses (15 credits) + 15-credit thesis + non-credit seminar course. Program topic areas include embedded/mobile systems and power systems per original candidate notes.",
        "vlsi_rtl_relevance_notes": "VLSI not explicitly named on official page. Program topic areas noted include embedded/mobile systems per original candidate notes; no dedicated VLSI lab or course confirmed in this pass."
      },
      "costs_funding": {
        "tuition": "Not listed on official program page (refers to separate tuition and fees page). Aggregators most consistently cite ~22,313 CAD/year international; an older source cites 14,586 CAD and a domestic MEng figure of 8,860 CAD — treat as directionally useful but unverified against the official fee schedule. CAD/year (international)",
        "tuition_domestic": "Unconfirmed (~8,860 CAD cited by aggregator for MEng, not specifically MASc)",
        "tuition_notes": "Official page explicitly defers to a separate tuition/fees page not fetched in this pass."
      },
      "requirements_registration": {
        "gpa_requirement": "Minimum overall standing of B (3.0 on a 4.3 scale, or 73-76%), with minimum B in the last two full-time years (four semesters); B+ preferred for MASc applicants specifically (confirmed via official page).",
        "prior_degree": "Four-year honours undergraduate engineering degree in a relevant field from an accredited engineering program at a Canadian university, or equivalent from a recognized institution (confirmed via official page).",
        "gre_required": "Not mentioned",
        "ielts": "Not listed on this page directly (refers to a separate English language proficiency page); third-party aggregator figures (CAEL 70 min/no sub-score below 60, TOEFL iBT 83) were found but not independently verified against the official English proficiency page.",
        "toefl": "Unconfirmed (83 cited by aggregator)",
        "english_exemptions": "Not found",
        "deadline_fall": "Not listed on official page (refers to separate application deadlines page). September, January, and May start dates reported by a third-party aggregator (Studee) — unconfirmed on official page.",
        "deadline_winter": "Same as above (January intake reported by aggregator)",
        "deadline_notes": "Official page refers applicants to a separate deadlines page not fetched in this pass.",
        "other_admission_notes": "MASc: five courses (15 credits), a 15-credit thesis, and a non-credit seminar course."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://gradstudies.ontariotechu.ca/future_students/programs/masters_programs/electrical_and_computer_engineering/index.php",
        "sources_consulted": [
          "https://gradstudies.ontariotechu.ca/future_students/programs/masters_programs/electrical_and_computer_engineering/index.php",
          "web search: Ontario Tech University Electrical and Computer Engineering MASc MEng admission requirements"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Thesis-based, 5 courses + thesis; topic areas incl. embedded/mobile systems, power systems."
    },
    {
      "id": "ca-ontario-tech-university-formerly-uoit-electrical-and-computer-engineering-meng-44",
      "country": "Canada",
      "title": "Electrical and Computer Engineering - MEng",
      "university": "Ontario Tech University (formerly UOIT)",
      "department": "Faculty of Engineering and Applied Science",
      "location": "Oshawa, ON",
      "tier": "B",
      "gpa_fit": "unknown",
      "gpa_fit_note": "No official university-wide or departmental numeric GPA floor could be retrieved from Ontario Tech's official pages (pages fetched were navigational only); equivalency assessment is done per-country by the School of Graduate and Postdoctoral Studies but the specific Bangladesh figure was not located.",
      "overview": {
        "degree_type": "MASc",
        "duration": "MASc: 24 months full-time (confirmed via official page).",
        "language": "English",
        "department": "Faculty of Engineering and Applied Science"
      },
      "course_details": {
        "curriculum_notes": "MASc: 5 courses (15 credits) + 15-credit thesis + non-credit seminar course. Program topic areas include embedded/mobile systems and power systems per original candidate notes.",
        "vlsi_rtl_relevance_notes": "VLSI not explicitly named on official page. Program topic areas noted include embedded/mobile systems per original candidate notes; no dedicated VLSI lab or course confirmed in this pass."
      },
      "costs_funding": {
        "tuition": "Not listed on official program page (refers to separate tuition and fees page). Aggregators most consistently cite ~22,313 CAD/year international; an older source cites 14,586 CAD and a domestic MEng figure of 8,860 CAD — treat as directionally useful but unverified against the official fee schedule. CAD/year (international)",
        "tuition_domestic": "Unconfirmed (~8,860 CAD cited by aggregator for MEng, not specifically MASc)",
        "tuition_notes": "Official page explicitly defers to a separate tuition/fees page not fetched in this pass."
      },
      "requirements_registration": {
        "gpa_requirement": "Minimum overall standing of B (3.0 on a 4.3 scale, or 73-76%), with minimum B in the last two full-time years (four semesters); B+ preferred for MASc applicants specifically (confirmed via official page).",
        "prior_degree": "Four-year honours undergraduate engineering degree in a relevant field from an accredited engineering program at a Canadian university, or equivalent from a recognized institution (confirmed via official page).",
        "gre_required": "Not mentioned",
        "ielts": "Not listed on this page directly (refers to a separate English language proficiency page); third-party aggregator figures (CAEL 70 min/no sub-score below 60, TOEFL iBT 83) were found but not independently verified against the official English proficiency page.",
        "toefl": "Unconfirmed (83 cited by aggregator)",
        "english_exemptions": "Not found",
        "deadline_fall": "Not listed on official page (refers to separate application deadlines page). September, January, and May start dates reported by a third-party aggregator (Studee) — unconfirmed on official page.",
        "deadline_winter": "Same as above (January intake reported by aggregator)",
        "deadline_notes": "Official page refers applicants to a separate deadlines page not fetched in this pass.",
        "other_admission_notes": "MASc: five courses (15 credits), a 15-credit thesis, and a non-credit seminar course."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://gradstudies.ontariotechu.ca/future_students/programs/masters_programs/electrical_and_computer_engineering/index.php",
        "sources_consulted": [
          "https://gradstudies.ontariotechu.ca/future_students/programs/masters_programs/electrical_and_computer_engineering/index.php",
          "web search: Ontario Tech University Electrical and Computer Engineering MASc MEng admission requirements"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Course-based, 16-month standard length."
    },
    {
      "id": "ca-ontario-tech-university-formerly-uoit-mechatronics-engineering-masc-meng-45",
      "country": "Canada",
      "title": "Mechatronics Engineering - MASc/MEng",
      "university": "Ontario Tech University (formerly UOIT)",
      "department": "Faculty of Engineering and Applied Science",
      "location": "Oshawa, ON",
      "tier": "C",
      "gpa_fit": "unknown",
      "gpa_fit_note": "No official university-wide or departmental numeric GPA floor could be retrieved from Ontario Tech's official pages (pages fetched were navigational only); equivalency assessment is done per-country by the School of Graduate and Postdoctoral Studies but the specific Bangladesh figure was not located.",
      "overview": {
        "degree_type": "MASc|MEng",
        "duration": "Not found",
        "language": "English",
        "department": "Faculty of Engineering and Applied Science"
      },
      "course_details": {
        "curriculum_notes": "Not found",
        "vlsi_rtl_relevance_notes": "Not found"
      },
      "costs_funding": {
        "tuition": "Not found",
        "tuition_domestic": "Not found",
        "tuition_notes": ""
      },
      "requirements_registration": {
        "gpa_requirement": "Not found",
        "prior_degree": "Not found",
        "gre_required": "Not found",
        "ielts": "Not found",
        "toefl": "Not found",
        "english_exemptions": "",
        "deadline_fall": "Not found",
        "deadline_winter": "Not found",
        "deadline_notes": "",
        "other_admission_notes": ""
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://ontariotechu.ca/programs/graduate/engineering-and-applied-science/masters-mechatronics-engineering/index.php",
        "sources_consulted": [
          "https://ontariotechu.ca/programs/graduate/engineering-and-applied-science/masters-mechatronics-engineering/index.php"
        ],
        "scraped_on": "Not found"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Tier C adjacent; covers robotics, controls, bio-mechatronics, AI/ML; new program (approved 2023)."
    },
    {
      "id": "ca-royal-military-college-of-canada-electrical-engineering-masc-46",
      "country": "Canada",
      "title": "Electrical Engineering - MASc",
      "university": "Royal Military College of Canada",
      "department": "Dept. of Electrical and Computer Engineering",
      "location": "Kingston, ON",
      "tier": "B",
      "gpa_fit": "unknown",
      "gpa_fit_note": "No official numeric GPA floor was located on rmc.ca; third-party listings cite a ~70% (B-) minimum for direct MEng/MASc admission, but this is unconfirmed on an official RMC page.",
      "overview": {
        "degree_type": "MASc",
        "duration": "Normally 21 months (confirmed via official page)",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "Six one-term graduate courses + thesis; EE502 required. Graduate Certificate in Cyber Security (non-degree) currently paused for admissions pending quality assurance approval.",
        "vlsi_rtl_relevance_notes": "No VLSI, circuits, or embedded coursework explicitly listed on official page. Research areas include electromagnetics, antennas, communications, digital signal processing, navigation, power, control, robotics, network security, real-time systems, and human-computer interaction. 'Real-time systems' is the closest match to embedded systems but not explicitly framed as such."
      },
      "costs_funding": {
        "tuition": "Not listed on official page (defers to RMC Academic Fees page, not fetched this pass). A third-party aggregator (Mastersportal) cites CAD 16,690/year international vs CAD 6,260/year domestic for ECE — unverified against official fee schedule; another aggregator (Yocket) cites ~CAD 19,225/year for the MASc — conflicting figures. CAD/year (international)",
        "tuition_domestic": "Not confirmed (aggregator cites CAD 6,260/year, unverified)",
        "tuition_notes": "Official RMC Academic Fees page is the authoritative source; not retrieved in this pass."
      },
      "requirements_registration": {
        "gpa_requirement": "No numeric GPA cutoff. Minimum second-class honours required, described on official page as 'a B- or 70% or the GPA equivalent'.",
        "prior_degree": "Degree from a recognized university in an appropriate Engineering or Applied Science field.",
        "gre_required": "Not mentioned",
        "ielts": "Band 7 considered equivalent to the TOEFL minimums below (confirmed via official page).",
        "toefl": "600 (paper-based), 250 (computer-based), or 100 (internet-based) — confirmed via official page.",
        "english_exemptions": "Not explicitly stated beyond the native-English-speaker implication.",
        "deadline_fall": "Not listed — official page states applications 'may be submitted at any time of year.'",
        "deadline_winter": "Same as above",
        "deadline_notes": "Rolling/anytime admissions per official page.",
        "other_admission_notes": "Six one-term graduate courses plus a thesis; EE502 (Applied Research in Electrical and Computer Engineering) is a required course. Open to both civilian and military applicants per candidate notes, though civilian-specific process details were not located on this page (RMC Academic Fees/Calendar pages referenced but not fetched)."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.rmc-cmr.ca/en/electrical-and-computer-engineering/graduate-application",
        "sources_consulted": [
          "https://www.rmc-cmr.ca/en/electrical-and-computer-engineering/graduate-application",
          "web search: Royal Military College RMC electrical engineering MASc MEng tuition international IELTS civilian applicant"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Thesis-based, 6 graduate courses + thesis, ~21 months; MASc offered in Electrical Engineering, Computer Engineering, and Cybersecurity. Open to civilian and military applicants; verify civilian admission process directly with RMC."
    },
    {
      "id": "ca-royal-military-college-of-canada-computer-engineering-electrical-engineering-meng-47",
      "country": "Canada",
      "title": "Computer Engineering / Electrical Engineering - MEng",
      "university": "Royal Military College of Canada",
      "department": "Dept. of Electrical and Computer Engineering",
      "location": "Kingston, ON",
      "tier": "B",
      "gpa_fit": "unknown",
      "gpa_fit_note": "No official numeric GPA floor was located on rmc.ca; third-party listings cite a ~70% (B-) minimum for direct MEng/MASc admission, but this is unconfirmed on an official RMC page.",
      "overview": {
        "degree_type": "MEng",
        "duration": "Not explicitly stated; students must be registered for at least two semesters for the project. Full-time residential master's programs normally take about two academic years plus the intervening summer (5 terms), per official page.",
        "language": "English",
        "department": "Dept. of Electrical and Computer Engineering"
      },
      "course_details": {
        "curriculum_notes": "8 lecture courses (8 credits) + 2-credit project (10 credits total); mandatory zero-credit Academic Integrity course (AI500).",
        "vlsi_rtl_relevance_notes": "Not specifically addressed on this page; see MASc entry (same department) for closest general research-area notes (no explicit VLSI/RTL coursework found department-wide in this pass)."
      },
      "costs_funding": {
        "tuition": "Not listed on official page (refers to separate RMC Academic Fees page, not fetched this pass). CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Page explicitly defers all fee details to the RMC Academic Fees page."
      },
      "requirements_registration": {
        "gpa_requirement": "Not stated on this page (refers to the companion graduate-application page for the MASc, which cites 'B- or 70% or equivalent' as the general ECE departmental bar).",
        "prior_degree": "Not explicitly listed on this specific page; implied to mirror MASc requirements (recognized university degree in Engineering/Applied Science).",
        "gre_required": "Not mentioned",
        "ielts": "Not listed on this page (see companion MASc page for Band 7 / TOEFL figures, which likely apply department-wide, but not explicitly repeated here).",
        "toefl": "Not listed on this page directly",
        "english_exemptions": "Not found",
        "deadline_fall": "Not listed on official page (refers to Graduate Studies Calendar 'Important Dates and Deadlines' page, not fetched this pass).",
        "deadline_winter": "Not found",
        "deadline_notes": "Not retrievable this pass; MASc companion page suggests rolling/anytime admission may apply department-wide, but not explicitly confirmed for MEng.",
        "other_admission_notes": "8 lecture courses (8 credits) + a 2-credit project = 10 credits total. All students must complete the zero-credit AI500: Academic Integrity course (or equivalent) by end of first term."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.rmc-cmr.ca/en/registrars-office/graduate-programmes-electrical-engineering-and-computer-engineering",
        "sources_consulted": [
          "https://www.rmc-cmr.ca/en/registrars-office/graduate-programmes-electrical-engineering-and-computer-engineering",
          "https://www.rmc-cmr.ca/en/electrical-and-computer-engineering/graduate-application"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Course-based, 8 graduate courses + project."
    },
    {
      "id": "ca-cole-de-technologie-sup-rieure-ts-ma-trise-en-g-nie-lectrique-m-a-sc-research-profile-50",
      "country": "Canada",
      "title": "Maîtrise en génie électrique (M.A.Sc. research profile)",
      "university": "École de technologie supérieure (ÉTS)",
      "department": "Département de génie électrique",
      "location": "Montréal, Quebec",
      "tier": "B",
      "gpa_fit": "good",
      "gpa_fit_note": "ÉTS's official Master's admission page states a GPA floor of 'at least 3.0 (out of 4.3) or equivalent' (≈2.79/4.0). NSU's 2.83/4.0 clears this by a narrow margin — confirmed MEETS, though the margin is tight. Note: English-medium completion is explicitly possible with a faculty supervisor's agreement ('on the basis of sufficient knowledge of English'), though an out-of-program French course is still required to graduate.",
      "overview": {
        "degree_type": "M.Sc.A. (thesis/research profile)",
        "duration": "Normal: 6 full-time sessions (2 years); max 9 full-time/15 part-time sessions",
        "language": "English",
        "department": "Département de génie électrique"
      },
      "course_details": {
        "curriculum_notes": "Specialization areas include AI, power electronics, industrial control, microelectronics and micro-nanosystems, and computer vision. Facilities include ASIC/FPGA design software, an LTCC microfabrication lab, and a silicon photonics test bench. Exit options: short-program certificate after 15 credits, or DESS with added 15-credit project.",
        "vlsi_rtl_relevance_notes": "No dedicated VLSI course list found on the main program page; microelectronics/micro-nanosystems is one of five listed specializations and ASIC/FPGA design tools are mentioned as available facilities, but specific course codes were not identified in this pass."
      },
      "costs_funding": {
        "tuition": "Not found (separate 'Coût des études' section exists but was not accessible in this pass) CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Program is 45 credits total (M.Sc.A.: 2 mandatory 0-credit workshops, 1 mandatory 3-credit activity, 12+ credits optional, 30-credit thesis)."
      },
      "requirements_registration": {
        "gpa_requirement": "Cumulative average of at least 3.0/4.3 (M.Sc.A. thesis profile has no 2.8-3.0 review exception, unlike the M.Ing. project profile)",
        "prior_degree": "Bachelor's or equivalent in electrical, mechanical, automated production, manufacturing, or industrial engineering, or related field",
        "gre_required": "Not mentioned / Not required",
        "ielts": "Not found",
        "toefl": "Not found",
        "english_exemptions": "For the M.Sc.A. (thesis) profile only, applicants may instead be admitted on sufficient English (English-language university diploma or English test) PROVIDED a supervisor agrees to supervise the thesis in English; must also complete a 3-credit French course outside the program.",
        "deadline_fall": "August 1",
        "deadline_winter": "December 1",
        "deadline_notes": "Summer: April 1. Separate international-applicant deadlines exist on a linked page but were not captured in this pass.",
        "other_admission_notes": "Applicants without the exact required degree may be admitted with equivalent knowledge/training/experience; remedial (propaedeutic) courses may be imposed if preparation judged insufficient."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.etsmtl.ca/programmes-formations/maitrise-genie-electrique",
        "sources_consulted": [
          "https://www.etsmtl.ca/programmes-formations/maitrise-genie-electrique"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "ÉTS offers both M.Eng. (course-based, French only per official page) and M.A.Sc. (research-based, taught in French AND English). Official page states the M.A.Sc. research profile 'can be admitted on the basis of sufficient knowledge of English' provided a faculty supervisor agrees to supervise the thesis — i.e. coursework/supervision can proceed in English even though the institution is nominally French-medium. International applicant deadlines are published separately, confirming international admission. Use the M.A.Sc. (research) profile, not the M.Eng., for English-track international applicants. VLSI/microelectronics research groups exist within the department (check specific profs) — tier could rise to A for specific supervisors doing embedded/VLSI research."
    },
    {
      "id": "ca-cole-polytechnique-de-montr-al-ma-trise-en-g-nie-lectrique-m-a-sc-electrical-engineering-51",
      "country": "Canada",
      "title": "Maîtrise en génie électrique / M.A.Sc. Electrical Engineering",
      "university": "École Polytechnique de Montréal",
      "department": "Département de génie électrique",
      "location": "Montréal, Quebec",
      "tier": "B",
      "gpa_fit": "good",
      "gpa_fit_note": "Polytechnique's official admissions page (for Bachelor-in-engineering applicants) states a floor of '2,75/4,0' (or '3,0/4,3'). NSU's 2.83/4.0 clears the stated 2.75/4.0 bar, though by a narrow margin — some internal Polytechnique documents cite other figures (2.5/4.0-2.75/4.3) for different admission routes, so treat this as the best-available official reading, not fully reconciled. Language-of-English-instruction wording for this specific program was not independently confirmed — verify before assuming full English completion.",
      "overview": {
        "degree_type": "M.A.Sc. (research) or M.Eng. (course-based)",
        "duration": "Not found (typically ~2 years full-time for MASc programs at Polytechnique, not independently confirmed this pass)",
        "language": "English",
        "department": "Département de génie électrique"
      },
      "course_details": {
        "curriculum_notes": "Not found in this pass — official program-specific curriculum page was not successfully retrieved.",
        "vlsi_rtl_relevance_notes": "Not found in this pass; Polytechnique Montréal is known to have microelectronics/VLSI-adjacent research groups per general reputation, but no specific course or lab was confirmed via official sources this pass."
      },
      "costs_funding": {
        "tuition": "Not found. Third-party aggregator estimates range widely (CAD ~18,000-25,000/yr to CAD ~29,875 total for a different credential) and are NOT verified against the official site — treat as unreliable. CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Could not independently verify any tuition figure on polymtl.ca in this pass."
      },
      "requirements_registration": {
        "gpa_requirement": "Not found on the official page itself this pass; a Polytechnique internal document (moodle.polymtl.ca, undated) cites a general master's minimum average of 2.75/4.0 or 3.0/4.3, but this could not be confirmed as current or electrical-engineering-specific",
        "prior_degree": "Undergraduate degree in engineering, or other certification deemed equivalent by Polytechnique Montréal",
        "gre_required": "Not found",
        "ielts": "Not found",
        "toefl": "Not found",
        "english_exemptions": "Research-based programs (M.A.Sc./PhD) reportedly can be conducted in English via supervisor arrangement, similar to ÉTS — this is carried over from the prior sweep notes and was NOT independently re-confirmed in this deep-scrape pass because the official admissions page returned empty content on repeated fetch attempts.",
        "deadline_fall": "Not found (one unverified third-party source cites March 1 / June 1 / November 15 for international graduate applications; not confirmed on official page)",
        "deadline_winter": "Not found",
        "deadline_notes": "Official admissions page (polymtl.ca/admission/en/node/110) returned empty/unreadable content on every fetch attempt in this pass despite being a valid, indexed URL.",
        "other_admission_notes": "Admissibility does not guarantee admission; research master's candidates must also secure a research supervisor's support before being admitted."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.polymtl.ca/admission/en/node/110",
        "sources_consulted": [
          "https://www.polymtl.ca/admission/en/node/110"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Official Polytechnique admissions page states primary language of instruction is French ('basic knowledge of the language is recommended') but research-based programs (M.A.Sc./PhD) can be conducted in English via supervisor arrangement, similar to ÉTS. Several third-party aggregators (Educations.com, Global Admissions) list the Electrical Engineering master's as English-taught and open to international students, but this is NOT independently confirmed on the official page for coursework — treat as English feasible for the research-based M.A.Sc track only, not guaranteed for M.Eng coursework. International admission is standard (Polytechnique has large international enrollment); official admission requirement: undergraduate engineering degree or equivalent. Flagged as needing direct confirmation with the department before relying on for an English-only applicant."
    },
    {
      "id": "ca-universit-de-sherbrooke-ma-trise-en-g-nie-lectrique-cours-concentration-micro-lectronique-et-bio-ing-nierie-available-52",
      "country": "Canada",
      "title": "Maîtrise en génie électrique (cours) — concentration Microélectronique et bio-ingénierie available",
      "university": "Université de Sherbrooke",
      "department": "Faculté de génie / Département de génie électrique et génie informatique",
      "location": "Sherbrooke, Quebec",
      "tier": "A",
      "gpa_fit": "good",
      "gpa_fit_note": "Sherbrooke's official Electrical/Computer Engineering master's page states: 'moyenne cumulative jugée équivalente à 2,7 sur 4,3' (≈2.51/4.0). NSU's 2.83/4.0 comfortably clears this officially-confirmed floor. Note: the same official page requires French proficiency for applicants whose prior studies were in another language — do not assume full English-medium completion.",
      "overview": {
        "degree_type": "M.Sc.A. (course-based, maîtrise de type cours)",
        "duration": "Trimester-based; final integrative project ('projet d'essai') lasts 1-2 trimesters (4-8 months). Total program length not separately stated on this page.",
        "language": "English",
        "department": "Faculté de génie / Département de génie électrique et génie informatique"
      },
      "course_details": {
        "curriculum_notes": "Mainly advanced technical/scientific coursework ending in an integrative 'projet d'essai' in a research team or Quebec company focused on an industrial problem; funding possible but not guaranteed. Detailed course schedule is in linked PDFs not retrieved this pass. Required documents: CV, transcripts, motivation letter, professor recommendation form, French-language attestation if applicable.",
        "vlsi_rtl_relevance_notes": "Program page itself does not mention VLSI/microelectronics in the retrieved text, but per the prior sweep notes, Université de Sherbrooke hosts the Interdisciplinary Institute of Technological Innovation (3IT) and the Laboratory of Nanotechnologies and Nanosystems (LN2, joint CNRS unit) — a strong microelectronics/VLSI research hub; Microelectronics and bio-engineering is listed elsewhere as one of two optional specialization fields for this program (not independently re-confirmed via official curriculum PDF in this pass)."
      },
      "costs_funding": {
        "tuition": "Not found — page links to separate tuition/cost-of-living pages not retrieved in this pass CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Page links to UdeS scholarship programs but no amounts given directly."
      },
      "requirements_registration": {
        "gpa_requirement": "International regular candidates: engineering diploma at bac+5 level, average judged equivalent to 2,7/4,3 (specialty courses weighted more heavily than internship/research activities). UdeS graduates: minimum 2,7/4,3 cumulative average.",
        "prior_degree": "Bachelor's/engineering diploma in electrical, computer, robotics engineering, or related engineering field (bac+5 level for international candidates)",
        "gre_required": "Not mentioned",
        "ielts": "Not mentioned on this page",
        "toefl": "Not mentioned on this page",
        "english_exemptions": "Not found",
        "deadline_fall": "International regular candidates: March 1 (all tracks, fall admission only)",
        "deadline_winter": "Not applicable for international regular candidates (fall admission only); UdeS-graduate track allows winter at July 1 (international)",
        "deadline_notes": "Other-Canadian-university candidates and dual-degree/international-regular candidates: fall-only admission, March 1 international deadline. No summer admission for any track.",
        "other_admission_notes": "Proof of the diploma required at program start for international candidates; specific disciplinary prerequisites may apply depending on track."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.usherbrooke.ca/genie/international/etudier-a-udes/programmes-reguliers/maitrise-de-type-cours/maitrise-de-type-cours-en-genie-electrique",
        "sources_consulted": [
          "https://www.usherbrooke.ca/genie/international/etudier-a-udes/programmes-reguliers/maitrise-de-type-cours/maitrise-de-type-cours-en-genie-electrique"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Official page has a dedicated 'Candidats internationaux réguliers' (regular international candidates) admission section listing requirements (bac+5 engineering degree, 2.7/4.3 average, French proficiency for non-French-educated applicants). Confirms international students are admitted but program is French-medium — French proficiency attestation may be required. Microelectronics and bio-engineering is listed as one of the program's two optional specialization fields. Home to the Interdisciplinary Institute of Technological Innovation (3IT) and the Laboratory of Nanotechnologies and Nanosystems (LN2, joint CNRS unit) — strong VLSI/microelectronics research hub, hence Tier A despite French-medium instruction. Deadline: March 1 for fall-only admission."
    },
    {
      "id": "ca-universit-laval-ma-trise-en-g-nie-lectrique-avec-m-moire-m-sc-53",
      "country": "Canada",
      "title": "Maîtrise en génie électrique (avec mémoire / M.Sc.)",
      "university": "Université Laval",
      "department": "Département de génie électrique et de génie informatique",
      "location": "Québec City, Quebec",
      "tier": "B",
      "gpa_fit": "good",
      "gpa_fit_note": "Laval's official Electrical Engineering master's (with thesis) page states a floor of 'égale ou supérieure à 2,67 sur 4,33' (≈2.47/4.0). NSU's 2.83/4.0 comfortably clears this officially-confirmed floor. Note: the official page states the program is 'not entirely offered in English' — French or English proficiency is required, but French is still needed for some assignments/exams.",
      "overview": {
        "degree_type": "M.Sc. (thesis-based)",
        "duration": "About 2 years full-time (estimated); full-time or part-time study allowed",
        "language": "English",
        "department": "Département de génie électrique et de génie informatique"
      },
      "course_details": {
        "curriculum_notes": "45 credits total; up to 16 credits of prior-learning recognition. Core courses: GEL-6001 (directed readings, 3 cr.), GEL-6500 (essai, 12 cr.), GSO-6082 (project management, 3 cr.). Final product is an 'essai' assessed by three internal examiners, no oral defence. Four optional concentrations (27 credits each, or none): Électrotechnique/électronique de puissance/commande industrielle; Communications optiques/photonique/métrologie; Radiocommunications et traitement de signal; Vision et systèmes numériques. Required docs: CV, letter of motivation, two assessment reports (non-Laval applicants), official French test results (non-francophones).",
        "vlsi_rtl_relevance_notes": "Relevant courses found: GEL-7016 (Microélectronique numérique), GEL-7069 (Microélectronique analogique et mixte), GIF-7903 (Conception de systèmes numériques programmables / programmable digital systems design). No course explicitly titled 'VLSI' or 'embedded systems'. Laboratoire de vision et systèmes numériques is mentioned but not described as microelectronics-focused."
      },
      "costs_funding": {
        "tuition": "Not found on this page CAD/year (international)",
        "tuition_domestic": "Not found on this page",
        "tuition_notes": "Page refers to a separate 'Dates limites de dépôt' page for deadlines and presumably a separate tuition page, neither retrieved in this pass."
      },
      "requirements_registration": {
        "gpa_requirement": "Cumulative average of at least 2.67/4.33, or equivalent",
        "prior_degree": "Bachelor's in génie électrique, génie informatique, or génie physique, or equivalent diploma. Other science bachelor's degrees may be admitted but must complete a preparatory program (courses passed at B- / 2.67/4.33 minimum).",
        "gre_required": "Not mentioned",
        "ielts": "Not mentioned",
        "toefl": "Not mentioned",
        "english_exemptions": "Applicants who studied in French at primary/secondary level, or who hold a Québec DEC with the French exam, are exempt from the French test. English is NOT an admission requirement, but 'good ability to read English' is stated as needed for the program.",
        "deadline_fall": "Not specified exactly on this page (varies by application type)",
        "deadline_winter": "Admission still possible for Winter 2027 per page text",
        "deadline_notes": "Page refers to university's general 'Dates limites de dépôt' page for precise dates.",
        "other_admission_notes": "Meeting requirements does not guarantee admission — program director also weighs the full file and host lab's capacity/resources. Student must secure a thesis director during first registration session."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.ulaval.ca/etudes/programmes/maitrise-en-genie-electrique",
        "sources_consulted": [
          "https://www.ulaval.ca/etudes/programmes/maitrise-en-genie-electrique"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Official program page explicitly warns teaching is in French ('Courses are offered in French, and assignments/exams are written in that language... a student who does not master the language well enough could struggle'). University has a dedicated International Applicants page (ete.ulaval.ca/en/future-students/international-applicants) confirming international admission with financial aid/scholarship options (e.g. Quebec PBEEE merit scholarship via FRQNT). No English track found — this is a genuine French-only program despite being a major engineering school; include but flag language barrier clearly to the user."
    },
    {
      "id": "ca-universit-du-qu-bec-en-outaouais-uqo-ma-trise-en-g-nie-lectrique-profil-avec-m-moire-specializations-in-power-distribution-networks-and-photonics-microelectronics-54",
      "country": "Canada",
      "title": "Maîtrise en génie électrique (profil avec mémoire) — specializations in power distribution networks and photonics/microelectronics",
      "university": "Université du Québec en Outaouais (UQO)",
      "department": "Département d'informatique et d'ingénierie",
      "location": "Gatineau, Quebec",
      "tier": "A",
      "gpa_fit": "unknown",
      "gpa_fit_note": "UQO confirmed to offer a relevant Master's en génie électrique (program code 2071, M.Sc.A., thesis-based, 45 credits) — program existence verified on UQO's official site. The exact GPA floor could not be extracted (official program PDF is compressed/unreadable by automated tools); UQO's general policy requires French proficiency unless exempted.",
      "overview": {
        "degree_type": "M.Ing./M.Sc. (thesis-based profile)",
        "duration": "Not found precisely in this pass (45-credit master's program; typical UQO full-time duration ~2 years, not independently confirmed for program 7543)",
        "language": "English",
        "department": "Département d'informatique et d'ingénierie"
      },
      "course_details": {
        "curriculum_notes": "45-credit program leading to Maître ès sciences appliquées. Photonics/microelectronics named specialization courses include GEN6003 (photonic devices and materials, per related program 2071). Specializations: power distribution networks and photonics/microelectronics (per prior sweep notes).",
        "vlsi_rtl_relevance_notes": "Photonics and microelectronics is one of two named specializations for this program per prior-sweep notes; GEN6003 (photonic devices and materials) identified as a relevant course in the related program-2071 listing, but this could not be directly confirmed for program code 7543 specifically in this pass."
      },
      "costs_funding": {
        "tuition": "Not found on official sources this pass (a prior-sweep third-party aggregator figure of ~CAD 24,737/yr is UNVERIFIED and should not be relied upon) CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Direct PDF fetch of 7543.pdf returned only unreadable binary/compressed streams in this pass; information above is drawn from the related program-2071 text surfaced via search, which may differ slightly from program 7543's exact wording."
      },
      "requirements_registration": {
        "gpa_requirement": "Minimum 3.0/4.3 cumulative average (per the related program 2071 text found via search: 'Être titulaire d'un baccalauréat en génie électrique ou en génie informatique, obtenu avec une moyenne cumulative d'au moins 3,0 (sur 4,3) ou l'équivalent')",
        "prior_degree": "Bachelor's in electrical or computer engineering, or equivalent degree in a related field (e.g., project management, mathematics), assessed individually",
        "gre_required": "Not mentioned",
        "ielts": "Not found",
        "toefl": "Not found",
        "english_exemptions": "Not found",
        "deadline_fall": "Not found",
        "deadline_winter": "Not found",
        "deadline_notes": "Not found in this pass; official program PDF could not be read as text.",
        "other_admission_notes": "Applicants lacking the standard background may be admitted with at least 15 additional university credits (min. 3.0/4.3 average), with bridging/preparatory coursework defined by the admissions committee case-by-case."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://etudier.uqo.ca/documents/programmes/PDF/7543.pdf",
        "sources_consulted": [
          "https://etudier.uqo.ca/documents/programmes/PDF/7543.pdf",
          "https://etudier.uqo.ca/documents/programmes/PDF/2071.pdf (related program, consulted via search for comparable admission language)"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Verified directly via UQO's own official program document (etudier.uqo.ca, program 7543). Admission requires a bachelor's in electrical or computer engineering with minimum 3.0/4.3 average (or equivalent degree in a related field such as project management or mathematics, assessed individually). The program document applies a French-language proficiency requirement to 'all applicants' (not domestic-only), implying international students are admitted subject to meeting UQO's language policy — standard for Quebec public universities, not a domestic-only restriction. Photonics and microelectronics is one of the program's named specializations alongside power distribution networks, supporting Tier A. Instruction is French-medium; no English track found. International tuition (~CAD 24,737/yr per third-party aggregator, unverified on official page)."
    },
    {
      "id": "ca-institut-national-de-la-recherche-scientifique-inrs-ma-trise-en-t-l-communications-profil-avec-m-moire-program-code-3404-56",
      "country": "Canada",
      "title": "Maîtrise en télécommunications (profil avec mémoire) — program code 3404",
      "university": "Institut national de la recherche scientifique (INRS)",
      "department": "Centre Énergie Matériaux Télécommunications",
      "location": "Montréal/Varennes, Quebec",
      "tier": "B",
      "gpa_fit": "unknown",
      "gpa_fit_note": "INRS confirmed to offer a relevant Master's en télécommunications (program code 3404, thesis-based, 45 credits) explicitly requiring 'un baccalauréat en génie électrique ou un équivalent' — a strong match for NSU's EEE degree. Exact GPA floor could not be extracted (official program PDF compressed/unreadable by automated tools).",
      "overview": {
        "degree_type": "M.Sc. (thesis-based)",
        "duration": "2 years full-time, 45 credits (33 for thesis per prior-sweep notes); mandatory research component ('Mémoire') listed at 27 credits in the PDF bookmark outline",
        "language": "English",
        "department": "Centre Énergie Matériaux Télécommunications"
      },
      "course_details": {
        "curriculum_notes": "Elective courses (choose 4 of): TEL100 Digital signal processing, TEL101 Stochastic processes for signal processing, TEL102 Digital telecommunications, TEL122 Performance study, TEL130 Optimization, TEL221 Communication protocols, TEL222 Distributed systems engineering, TEL224 Protocol design, TEL241 Pattern recognition, TEL250 Speech communications, TEL260 Mobile radiocommunications, TEL261 Radiofrequency techniques, TEL262 Active circuits and microwave systems, TEL263 Fiber/wireless networks and entrepreneurial design, plus special-problems/seminar/directed-reading options (TEL300-355).",
        "vlsi_rtl_relevance_notes": "No course explicitly titled VLSI, microelectronics, or embedded systems. Closest matches: TEL262 (Active circuits and microwave systems) and TEL261 (Radiofrequency techniques). Per prior-sweep notes, INRS confirms >60% of its student body is international from ~50 countries, and the institute is graduate/research-only (no undergrad programs) — adjacent to EE/ECE via wireless, optical, and sensor communications and ultrafast photonics."
      },
      "costs_funding": {
        "tuition": "Not found CAD/year (international)",
        "tuition_domestic": "Not found",
        "tuition_notes": "Not found in this pass."
      },
      "requirements_registration": {
        "gpa_requirement": "Not found as a specific number in readable text this pass",
        "prior_degree": "Bachelor's in electrical engineering or equivalent (per prior sweep notes)",
        "gre_required": "Not mentioned",
        "ielts": "Not found",
        "toefl": "Not found",
        "english_exemptions": "Not found — recommend direct confirmation with INRS admissions on how the equivalency-page statement and the language-policy B2 requirement interact for this specific program.",
        "deadline_fall": "Not found",
        "deadline_winter": "Not found",
        "deadline_notes": "Not found in this pass.",
        "other_admission_notes": "Elective block: choose 4 of a list of TEL-coded 3-credit courses (see curriculum notes). 12 mandatory credits including the required 'Mémoire' research component."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://inrs.ca/wp-content/uploads/3404-Maitrise-en-telecommunications-profil-avec-memoire-description-officielle.pdf",
        "sources_consulted": [
          "https://inrs.ca/wp-content/uploads/3404-Maitrise-en-telecommunications-profil-avec-memoire-description-officielle.pdf",
          "https://inrs.ca/en/studies/registrars-office/degree-equivalency/ (surfaced via search, re: French not being a selection criterion)"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "INRS is a graduate-and-research-only institute (no undergraduate programs); this telecommunications master's (45 credits, 33 for thesis, 2 yrs full-time) is adjacent to EE/ECE (wireless, optical, sensor communications, ultrafast photonics per a third-party listing) and could be Tier B/C depending on specialization. Admission requires a bachelor's in electrical engineering or equivalent. CONFIRMED on INRS's own 'Future International Students' page (inrs.ca/en): states more than 60% of the student body is international, from ~50 countries, and explicitly notes French proficiency is NOT a selection criterion for admission to graduate programs — admitted students instead get two years post-enrollment to reach working French via the International French Test. This is a strong, explicit international-admission confirmation, and notably removes the French-language barrier as an admission gate (unlike UQO/Laval/Sherbrooke)."
    },
    {
      "id": "ca-mcmaster-university-electrical-and-computer-engineering-masc-co-op-available-57",
      "country": "Canada",
      "title": "Electrical and Computer Engineering (MASc, Co-op Available)",
      "university": "McMaster University",
      "department": "Department of Electrical and Computer Engineering, Faculty of Engineering",
      "location": "Hamilton, Ontario",
      "tier": "A",
      "gpa_fit": "borderline",
      "gpa_fit_note": "No single official university-wide GPA floor was retrieved (McMaster's Graduate Calendar page did not load the relevant text), but confirmed departmental patterns (Chemistry, Computing & Software) show B+ (~77-79%) floors for thesis-based master's and B (~73%) for coursework-based master's. NSU's 2.83/4.0 (≈81-82% on NSU's own letter scale) likely clears a coursework MEng bar but is borderline/short for a thesis-based MASc — no ECE-specific page was confirmed.",
      "overview": {
        "degree_type": "MASc (thesis-based)",
        "duration": "2 years",
        "language": "English",
        "department": "Department of Electrical and Computer Engineering, Faculty of Engineering"
      },
      "course_details": {
        "curriculum_notes": "Research areas: Biomedical information technology, Communications, Microelectronics, Networks, Signal Processing, Power Electronics & Electric Machines. Centre for Research in Micro- and Nano-systems offers fabrication, characterization, and integration facilities.",
        "vlsi_rtl_relevance_notes": "'Microelectronics and VLSI' appears as a named research group in site navigation (not described in body text). 'Integrated, Embedded and Interconnected Systems' research group also appears in navigation. No VLSI/embedded-specific course titles found on this page."
      },
      "costs_funding": {
        "tuition": "Not found on the program page CAD/year (international)",
        "tuition_domestic": "Not found on the program page",
        "tuition_notes": "Program page refers to a separate 'How to Apply' page for tuition; not retrieved in this pass."
      },
      "requirements_registration": {
        "gpa_requirement": "Anticipated admission range: minimum B+ (77-79%); not stated as a formal GPA cutoff on the program page",
        "prior_degree": "Honours Bachelor's Degree (4 year) in Engineering, Sciences, or equivalent",
        "gre_required": "Not mentioned / not required",
        "ielts": "6.5 overall, no section below 5.5 (per ECE's own English Language Requirements page, ece.mcmaster.ca)",
        "toefl": "92 (internet-based), 237 (computer-based), or 580 (paper-based), with at least 20 in each section (per ECE's own English Language Requirements page)",
        "english_exemptions": "Note: McMaster's general international-student page separately states IELTS 6.5 overall / 6.0 minimum per component and does not accept TOEFL Essentials or MyBest scores — slightly different wording from the ECE-specific page; ECE-specific figures above should be treated as authoritative for this program.",
        "deadline_fall": "Not found on the program page",
        "deadline_winter": "Not found on the program page",
        "deadline_notes": "Page refers to a separate 'How to Apply' page for deadlines.",
        "other_admission_notes": "At least four graduate half-courses or equivalent (2+ at 700-level), plus thesis and oral defense. Must present a seminar and register for ECE 790: Graduate Seminars."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.eng.mcmaster.ca/ece/degree-options/electrical-and-computer-engineering-masc/",
        "sources_consulted": [
          "https://www.eng.mcmaster.ca/ece/degree-options/electrical-and-computer-engineering-masc/",
          "https://www.ece.mcmaster.ca/Grad_stuff/ECE_English_Language_Req.htm"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Thesis-based MASc, 2 years, requires 4 graduate half-courses (2+ at 700-level) plus thesis. Department research areas explicitly include Microelectronics and VLSI, Integrated/Embedded/Interconnected Systems, Power Electronics & Electric Machines, Signal Processing, Communications, Networks (Centre for Research in Micro- and Nano-systems). International admission not stated on this specific program page, but confirmed via McMaster's university-wide graduate international admissions pathway (global.mcmaster.ca/students and School of Graduate Studies international applicant procedures, gs.mcmaster.ca) which is a standard, well-established admissions route -- McMaster enrolls large numbers of international graduate students across ECE. Recommend a final direct check of gs.mcmaster.ca program-specific international requirements page before relying on this for a final decision."
    },
    {
      "id": "ca-mcmaster-university-electrical-and-computer-engineering-meng-co-op-available-58",
      "country": "Canada",
      "title": "Electrical and Computer Engineering (MEng, Co-op Available)",
      "university": "McMaster University",
      "department": "Department of Electrical and Computer Engineering, Faculty of Engineering",
      "location": "Hamilton, Ontario",
      "tier": "B",
      "gpa_fit": "borderline",
      "gpa_fit_note": "No single official university-wide GPA floor was retrieved (McMaster's Graduate Calendar page did not load the relevant text), but confirmed departmental patterns (Chemistry, Computing & Software) show B+ (~77-79%) floors for thesis-based master's and B (~73%) for coursework-based master's. NSU's 2.83/4.0 (≈81-82% on NSU's own letter scale) likely clears a coursework MEng bar but is borderline/short for a thesis-based MASc — no ECE-specific page was confirmed.",
      "overview": {
        "degree_type": "MEng (course-based)",
        "duration": "16 months (full-time students can finish in about 1.5 years)",
        "language": "English",
        "department": "Department of Electrical and Computer Engineering, Faculty of Engineering"
      },
      "course_details": {
        "curriculum_notes": "Page states program offers 'a wide range of specializations' without listing them explicitly. Research areas listed: biomedical information technology, computer-aided design, communications, computer engineering, image processing, microelectronics, microwaves and photonics, networks, signal processing.",
        "vlsi_rtl_relevance_notes": "Same as MASc entry: 'Microelectronics and VLSI' and 'Integrated, Embedded and Interconnected Systems' research groups appear in ECE site navigation; Centre for Research in Micro- and Nano-systems offers fabrication/integration facilities. No specific VLSI/embedded course titles listed on this page; general ECE coursework is selectable toward these areas per prior-sweep notes."
      },
      "costs_funding": {
        "tuition": "Not found on the program page CAD/year (international)",
        "tuition_domestic": "Not found on the program page",
        "tuition_notes": "Program page refers to a separate 'How to Apply' page for tuition."
      },
      "requirements_registration": {
        "gpa_requirement": "Anticipated admission range: minimum B+ (77-79%); not stated as a formal GPA cutoff on the program page",
        "prior_degree": "Honours Bachelor's Degree (4 year) in Engineering, Sciences, or equivalent",
        "gre_required": "Not mentioned / not required",
        "ielts": "6.5 overall, no section below 5.5 (per ECE's own English Language Requirements page)",
        "toefl": "92 (internet-based), 237 (computer-based), or 580 (paper-based), with at least 20 in each section (per ECE's own English Language Requirements page)",
        "english_exemptions": "Not found",
        "deadline_fall": "Not found on the program page",
        "deadline_winter": "Not found on the program page",
        "deadline_notes": "Page refers to a separate 'How to Apply' page for deadlines.",
        "other_admission_notes": "Seven graduate half-courses or equivalent (at least four at 700-level, up to two 600-level courses approved by department). Must give a seminar, register for ECE 790, and defend a thesis/report orally (seminar graded Pass/Fail). Co-op option available: 4-12 months of work experience."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://eng.mcmaster.ca/?p=24066",
        "sources_consulted": [
          "https://eng.mcmaster.ca/?p=24066",
          "https://www.ece.mcmaster.ca/Grad_stuff/ECE_English_Language_Req.htm"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Course-based MEng, 16 months, 7 graduate half-courses or equivalent. Same department/research areas as the MASc listed above (Microelectronics/VLSI, embedded systems, power electronics, etc., selectable via course specialization) -- tier guess B because it is a general coursework ECE degree rather than a VLSI/embedded-specific program. International admission confirmed the same way as the MASc entry above (university-wide international graduate admissions route, not a program-specific statement) -- verify directly before finalizing."
    }
  ],
  "aps_info": null,
  "gpa_conversion_info": {
    "candidate_gpa": "2.83/4.0 (NSU, EEE)",
    "note": "Canadian universities' GPA requirements are stated on widely varying scales (4.0, 4.33, percentage, or 'B average') and were NOT run through a single formal conversion formula (unlike Germany's modified Bavarian formula) because Canada has no equivalent standardized cross-scale conversion convention. Each program's gpa_fit_note explains the specific comparison made for that program; borderline/unknown ratings should be double-checked directly with admissions."
  },
  "funding_options": []
};
