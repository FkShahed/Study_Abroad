const SPAIN_DB = {
  "metadata": {
    "version": "1.0 (initial deep-scrape pass)",
    "last_updated": "2026-11-08T00:00:00.000Z",
    "country": "Spain",
    "search_criteria": [
      "No single official centralized filtered database exists for Spain (Ministry of Universities' RUCT registry lists all approved degrees but has no user-friendly program search/filter).",
      "Candidate list compiled by searching broadly across public and private Spanish universities, keeping ONLY programs whose official page explicitly confirms English as the language of instruction.",
      "Scope: VLSI/RTL/Microelectronics/Embedded Systems (Tier A), general Electrical/Telecom/Computer Engineering (Tier B), Mechatronics/Power/Management-adjacent (Tier C)."
    ],
    "total_programs": 26,
    "description": "Spanish Master's programs (English-taught only) relevant to an RTL/VLSI/Embedded-focused EEE candidate, sourced directly from each university's official admissions pages."
  },
  "programs": [
    {
      "id": "es-universitat-polit-cnica-de-catalunya-upc-barcelonatech-interuniversity-with-uab-ub-urv-imb-cnm-csic-master-s-degree-in-semiconductor-engineering-and-microelectronic-design-1",
      "country": "Spain",
      "title": "Master's degree in Semiconductor Engineering and Microelectronic Design",
      "university": "Universitat Politècnica de Catalunya (UPC BarcelonaTech) — interuniversity with UAB, UB, URV, IMB-CNM(CSIC)",
      "department": "Barcelona School of Telecommunications Engineering (ETSETB), coordinated interuniversity program",
      "location": "Barcelona",
      "tier": "A",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement not published/found on official page.",
      "overview": {
        "degree_type": "Master Universitario",
        "ruct_registered": "unknown",
        "duration": "1 academic year, 60 ECTS, starts September, face-to-face",
        "language": "English",
        "language_confirmation": "Page field 'Language of instruction' lists 'English'."
      },
      "course_details": {
        "curriculum_notes": "Sem 1 (6 ECTS each): Analogue IC Design, Physical Design of Integrated Circuits, SoC Design and Verification, Microelectronic Design, Microelectronic Technologies and Processes, Packaging/Characterisation/Reliability, Semiconductor and Device Manufacturing Facilities, Semiconductor Devices. Sem 2 (4 ECTS each): Advanced IP Core Design, Mixed Signal IP Design, RF IC Design, Power Management Circuits in ASICs, ASIC Design for Highly Secure Systems, Emerging Technologies for Computing, Integrated Photonics, Microsensors, Flexible and Printed Electronics, plus 10 ECTS Master's Thesis.",
        "vlsi_rtl_relevance_notes": "Extremely high direct relevance — this is effectively a dedicated VLSI/IC design/semiconductor program. Explicit IC design, SoC design & verification, ASIC design, IP core design courses. Strategic research partner: Spanish National Research Council's IMB-CNM (CSIC), described as a leading centre in microelectronic technologies. Coordinated by UPC with UB, UAB, URV. Academic coordinator: Jordi Cosp Vilella. No explicit 'RTL' or lab-session wording found on this page, though SoC Design and Verification strongly implies RTL coursework."
      },
      "costs_funding": {
        "tuition": "~€1,162 (approximate, excludes other costs) EUR/year (EU/EEA)",
        "tuition_non_eu": "~€2,700 (approximate, excludes other costs)",
        "tuition_notes": "Figures given as totals for the program, not explicitly broken out per year; program is 1 year so effectively annual"
      },
      "requirements_registration": {
        "grade_requirement": "Not found on this page — links to UPC's general 'Academic requirements for admission to master's degrees' page (not separately scraped)",
        "prior_degree": "Not explicitly stated on this page",
        "entrance_exam": "Not mentioned",
        "credential_recognition_note": "Non-EU documents must be legalised and carry an apostille; no separate 'homologación' process mentioned on this page",
        "english_certificate_required": "Not found on this page",
        "ielts": "Not found",
        "toefl": "Not found",
        "cambridge": "Not found",
        "english_exemptions": "Not found",
        "deadline_main_intake": "September start; pre-enrolment currently closed per page at time of scrape",
        "deadline_notes": "Check 'Request information' form for next cycle",
        "other_admission_notes": "Intake is 30 places; pre-enrolment currently closed, directs applicants to a 'Request information' form for upcoming periods"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://telecos.upc.edu/en/study-programs/masters/masters-degree-in-semiconductor-engineering-and-microelectronic-design",
        "sources_consulted": [
          "https://telecos.upc.edu/en/study-programs/masters/masters-degree-in-semiconductor-engineering-and-microelectronic-design"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Interuniversity master coordinated by UPC with UAB, UB, URV and IMB-CNM(CSIC); direct VLSI/microelectronic design fit. Also listed at upc.edu/en/masters/semiconductor-engineering-and-microelectronic-design with same language confirmation."
    },
    {
      "id": "es-universitat-polit-cnica-de-catalunya-upc-barcelonatech-master-s-degree-in-electronic-engineering-mee-2",
      "country": "Spain",
      "title": "Master's degree in Electronic Engineering (MEE)",
      "university": "Universitat Politècnica de Catalunya (UPC BarcelonaTech)",
      "department": "Barcelona School of Telecommunications Engineering (ETSETB)",
      "location": "Barcelona",
      "tier": "A",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement not published/found on official page.",
      "overview": {
        "degree_type": "Master Universitario",
        "ruct_registered": true,
        "duration": "1.5 academic years, 90 ECTS, three semesters; starts September and February",
        "language": "English",
        "language_confirmation": "\"is taught entirely in English.\" Language of instruction field: English."
      },
      "course_details": {
        "curriculum_notes": "Core subjects compulsory (35 ECTS), electives (35 ECTS), thesis (20 ECTS). Specializations: Power Electronics; Devices and Microsystems; Integrated Circuits and Systems; Instrumentation and Measurements. Intensification tracks: Microelectronic Design and Embedded Systems and Microprocessor Design (min 15 ECTS); Green Microelectronics (20 ECTS). Competences include designing digital circuits/systems and mixed-signal ICs.",
        "vlsi_rtl_relevance_notes": "Strong direct fit via the 'Integrated Circuits and Systems' specialization and 'Microelectronic Design and Embedded Systems and Microprocessor Design' intensification track. Individual course names and explicit VLSI/RTL/lab details were on linked course lists not retrieved in this pass."
      },
      "costs_funding": {
        "tuition": "~€1,743 (approximate total figure for program, excludes other costs — not explicitly per-year) EUR/year (EU/EEA)",
        "tuition_non_eu": "~€2,700 (approximate total figure, excludes other costs)",
        "tuition_notes": "Figures as stated are whole-program approximations, not a clean per-year breakdown"
      },
      "requirements_registration": {
        "grade_requirement": "Not found on this page — links to separate academic requirements page",
        "prior_degree": "Bachelor's in Electrical/Electronic Engineering enters core semester directly; Telecommunications/Computer engineering or other related degrees may be placed differently with bridge courses up to 25 ECTS",
        "entrance_exam": "Not mentioned",
        "credential_recognition_note": "Non-EU documents 'must be legalised and bear the corresponding apostille'; no separate homologación process named on this page",
        "english_certificate_required": "Yes — CEFR B2 minimum",
        "ielts": "5.5",
        "toefl": "PBT >= 567; CBT >= 227; IBT >= 87",
        "cambridge": "FCE (First Certificate in English)",
        "english_exemptions": "TOEIC 750; EOI Level 5 (advanced); UPC's own B2 certificate; or evidence of prior study conducted in English",
        "deadline_main_intake": "September intake; expected pre-enrolment deadline stated as 09/12/2026 on page (also noted pre-enrolment currently closed — verify live status); February intake also available",
        "deadline_notes": "Information session listed for 02/12/2026, 12:00",
        "other_admission_notes": "40 places in September intake, 20 in February intake"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://upc.edu/en/masters/electronic-engineering-mee",
        "sources_consulted": [
          "https://upc.edu/en/masters/electronic-engineering-mee"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Official degree recorded with Spain's Ministry of Science, Innovation and Universities. Specializations: Power Electronics, Devices and Microsystems, Integrated Circuits and Systems, Instrumentation and Measurements. Strong direct fit for RTL/IC/VLSI background. B2 English required for admission."
    },
    {
      "id": "es-universitat-polit-cnica-de-catalunya-upc-barcelonatech-master-s-degree-in-telecommunications-engineering-met-3",
      "country": "Spain",
      "title": "Master's degree in Telecommunications Engineering (MET)",
      "university": "Universitat Politècnica de Catalunya (UPC BarcelonaTech)",
      "department": "Barcelona School of Telecommunications Engineering (ETSETB)",
      "location": "Barcelona",
      "tier": "B",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement not published/found on official page.",
      "overview": {
        "degree_type": "Master Universitario",
        "ruct_registered": true,
        "duration": "2 academic years, 120 ECTS, starts September (60 places) or February (20 places), afternoons, face-to-face",
        "language": "English",
        "language_confirmation": "\"It is taught entirely in English as it is expected that a large number of students will be from other countries.\" Language of instruction: English."
      },
      "course_details": {
        "curriculum_notes": "Core: Electronic System Design for Communications, Electronic Instrumentation and Optoelectronics, Telecommunications Systems. Electronics specialization (compulsory): Design of Analogue Microelectronic Circuits, Fundamentals of Semiconductor Devices, Introduction to Measurement Systems, Introduction to Microelectronic Design. Optional: Digital Nanoelectronic Design, High-Level Digital Design, Configurable Digital Electronics, Electronic Measurement Science and Technology, Nanotechnologies and Electronic Devices, Automotive Embedded Systems, Printed Circuit Board Design, Ultrasound Electronics Laboratory.",
        "vlsi_rtl_relevance_notes": "Strong relevance via the Electronics specialization - Introduction to Microelectronic Design, Digital Nanoelectronic Design, High-Level Digital Design, Configurable Digital Electronics directly touch VLSI/digital IC design; Automotive Embedded Systems is directly embedded-relevant."
      },
      "costs_funding": {
        "tuition": "~€2,122 total approx (excludes other costs, not broken down per year) EUR/year (EU/EEA)",
        "tuition_non_eu": "~€5,400 total approx",
        "tuition_notes": "Program is 2 years; figures appear to be whole-program totals"
      },
      "requirements_registration": {
        "grade_requirement": "Not found - links to general UPC academic requirements page",
        "prior_degree": "Bachelor's in Telecommunications Technologies and Services Engineering, Telecom Science/Technology, Audiovisual Systems, Electronic Systems, Telecommunications Systems, Network Engineering, Electrical Engineering; pre-EHEA telecom/electronic engineering and Engineering Physics also accepted with extra ECTS. Other tech degrees (e.g. CS) may need up to 60 ECTS bridging courses taught in Catalan/Spanish.",
        "entrance_exam": "Not mentioned",
        "credential_recognition_note": "Non-EU documents must be legalised and bear an apostille; no separate homologación process named",
        "english_certificate_required": "Yes - CEFR B2",
        "ielts": "5.5",
        "toefl": "PBT >= 567; CBT >= 227; IBT >= 87",
        "cambridge": "FCE",
        "english_exemptions": "TOEIC 750; EOI advanced (Level 5); UPC B2 certificate; or a degree/semester taught in English",
        "deadline_main_intake": "Pre-enrolment expected deadline written as 09/12/2026 (format ambiguous)",
        "deadline_notes": "Verify live status directly",
        "other_admission_notes": "Bridging-course amount decided by academic committee case by case"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://upc.edu/en/masters/telecommunications-engineering-met",
        "sources_consulted": [
          "https://upc.edu/en/masters/telecommunications-engineering-met"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "General telecom engineering master; relevant tangentially to embedded/signal processing tracks."
    },
    {
      "id": "es-universitat-polit-cnica-de-catalunya-upc-barcelonatech-master-s-degree-in-advanced-telecommunication-technologies-4",
      "country": "Spain",
      "title": "Master's degree in Advanced Telecommunication Technologies",
      "university": "Universitat Politècnica de Catalunya (UPC BarcelonaTech)",
      "department": "Barcelona School of Telecommunications Engineering (ETSETB) and Castelldefels School of Telecommunications and Aerospace Engineering (EETAC)",
      "location": "Barcelona / Castelldefels",
      "tier": "B",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement not published/found on official page.",
      "overview": {
        "degree_type": "Master Universitario",
        "ruct_registered": true,
        "duration": "1 academic year, 60 ECTS, face-to-face, afternoons",
        "language": "English",
        "language_confirmation": "\"The master's degree in Advanced Telecommunications Technologies ... is taught entirely in English.\" Admission details list 'Language of instruction: English.'"
      },
      "course_details": {
        "curriculum_notes": "15 ECTS compulsory cross-disciplinary (Machine Learning from Data, Software Architecture, Entrepreneurship for World Challenges); 33 ECTS optional; 12 ECTS thesis. Pathways: Integrated Systems; Instrumentation and Sensors; Micro- and Nanotechnologies for Energy Management.",
        "vlsi_rtl_relevance_notes": "No VLSI course explicitly named. Competencies list mentions 'firmware for embedded electronic systems.' Closest relevant pathway: Integrated Systems / Micro- and Nanotechnologies. Lower direct relevance than MET or MEE."
      },
      "costs_funding": {
        "tuition": "~€1,162 (full-year program, excludes other costs) EUR/year (EU/EEA)",
        "tuition_non_eu": "~€2,700",
        "tuition_notes": "Program is 1 year so figures are annual"
      },
      "requirements_registration": {
        "grade_requirement": "Not found",
        "prior_degree": "Bachelor's in Telecommunications Science and Technology, Audiovisual Systems, Electronic Systems, Telecommunications Systems, or Network Engineering; pre-EHEA Telecommunications Engineering also qualifies",
        "entrance_exam": "Not mentioned",
        "credential_recognition_note": "Non-EU documents must be legalised and bear an apostille - explicitly NOT described as homologación",
        "english_certificate_required": "Not specified (no IELTS/TOEFL/Cambridge table found); instruction is in English",
        "ielts": "Not found",
        "toefl": "Not found",
        "cambridge": "Not found",
        "english_exemptions": "Not found",
        "deadline_main_intake": "Expected pre-enrolment deadline 09/12/2026; page noted pre-enrolment currently closed",
        "deadline_notes": "Verify live status",
        "other_admission_notes": "Intakes: 18 places February, 37 places September"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://upc.edu/en/masters/advanced-telecommunication-technologies",
        "sources_consulted": [
          "https://upc.edu/en/masters/advanced-telecommunication-technologies"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Official degree recorded with the Ministry of Science, Innovation and Universities."
    },
    {
      "id": "es-universitat-polit-cnica-de-catalunya-upc-barcelonatech-master-s-degree-in-applied-telecommunications-and-engineering-management-masteam-5",
      "country": "Spain",
      "title": "Master's degree in Applied Telecommunications and Engineering Management (MASTEAM)",
      "university": "Universitat Politècnica de Catalunya (UPC BarcelonaTech)",
      "department": "Castelldefels School of Telecommunications and Aerospace Engineering (EETAC)",
      "location": "Castelldefels",
      "tier": "B",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement language could not be parsed into a clear numeric cutoff: \"No numeric cutoff; assessed via prior qualifications, academic record, CV, motivation letter, 2 recommendation letters\"",
      "overview": {
        "degree_type": "Master Universitario",
        "ruct_registered": true,
        "duration": "1 academic year, 60 ECTS, face-to-face, taught in English",
        "language": "English",
        "language_confirmation": "'Language of instruction: English.' Page states 'As this is an official master's degree of the European Higher Education Area (EHEA).' CEFR English Level B2 required."
      },
      "course_details": {
        "curriculum_notes": "Sem 1 optional (3 ECTS each): ICT-Based Entrepreneurship, Next Generation Wireless Communications and IoT, Sensors and Interfaces, 5G Mobile Network Planning, Body Sensor Nodes, Internet of Things and Ubiquitous IP, Low-Power Systems with Energy Harvesting, Network Support for 5G, Next-Gen Optical Network Infrastructures. Sem 2: Network Engineering, Big Data & Data Mining (6), Network Security Authentication & Authorization, Software Defined Radio, Master's Thesis (12).",
        "vlsi_rtl_relevance_notes": "Adjacent relevance - Sensors and Interfaces, Low-Power Systems with Energy Harvesting, Body Sensor Nodes touch embedded/low-power hardware, but no dedicated VLSI/IC-design coursework."
      },
      "costs_funding": {
        "tuition": "~€1,162 (full program total, excludes other costs) EUR/year (EU/EEA)",
        "tuition_non_eu": "~€2,700",
        "tuition_notes": "1-year program, so totals are effectively annual"
      },
      "requirements_registration": {
        "grade_requirement": "No numeric cutoff; assessed via prior qualifications, academic record, CV, motivation letter, 2 recommendation letters",
        "prior_degree": "Official bachelor's (240 ECTS) or pre-EHEA diploma in telecom/ICT engineering, or official master's in those fields, from EHEA institution. Other EHEA engineering degrees, or non-EHEA telecom/ICT degrees, may be admitted with complementary coursework via validation committee.",
        "entrance_exam": "None mentioned",
        "credential_recognition_note": "No 'homologación' terminology used; non-EU documents must be legalised + apostilled; non-EU telecom/ICT degree holders go through a validation committee",
        "english_certificate_required": "Yes - CEFR B2",
        "ielts": "5.5",
        "toefl": "PBT >=567; CBT >=227; iBT >=87",
        "cambridge": "FCE",
        "english_exemptions": "TOEIC 750; EOI advanced (Level 5); UPC B2 certificate; native English speaker; or >=1 semester study in English-speaking country/English-taught program",
        "deadline_main_intake": "Expected pre-enrolment deadline 30/11/2026 (page inconsistent - one section says open, pop-up says closed)",
        "deadline_notes": "Verify live status directly",
        "other_admission_notes": "Intakes: 20 places September, 10 February"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://upc.edu/en/masters/applied-telecommunications-and-engineering-management-masteam",
        "sources_consulted": [
          "https://upc.edu/en/masters/applied-telecommunications-and-engineering-management-masteam"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Combines telecom engineering with management; adjacent fit (Tier B/C border)."
    },
    {
      "id": "es-universitat-polit-cnica-de-catalunya-upc-barcelonatech-erasmus-mundus-with-partner-eu-universities-erasmus-mundus-master-s-degree-in-communications-engineering-and-data-science-codas-6",
      "country": "Spain",
      "title": "Erasmus Mundus Master's degree in Communications, Engineering and Data Science (CoDaS)",
      "university": "Universitat Politècnica de Catalunya (UPC BarcelonaTech) — Erasmus Mundus with partner EU universities",
      "department": "Castelldefels School of Telecommunications and Aerospace Engineering (EETAC)",
      "location": "Castelldefels",
      "tier": "B",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement not published/found on official page.",
      "overview": {
        "degree_type": "Master Universitario (Erasmus Mundus Joint Master)",
        "ruct_registered": "unknown",
        "duration": "2 academic years, 120 ECTS, starts September",
        "language": "English",
        "language_confirmation": "'Language of instruction: English.' Erasmus Mundus joint program, 2 years / 120 ECTS."
      },
      "course_details": {
        "curriculum_notes": "Year 1: basic studies common to consortium universities. Year 2: specialization at each university; at UPC the thesis track is 'Communications, 5G/6G and Internet of Things, and Data Science.' Based at Castelldefels School of Telecommunications and Aerospace Engineering (EETAC). UPC page states curriculum ('Pla d'estudis') not available - links to https://www.unite-codas-master.eu/ for details.",
        "vlsi_rtl_relevance_notes": "Adjacent - 5G/6G and IoT thesis track touches connected-systems hardware context, but no explicit VLSI/RTL coursework found on the UPC page itself."
      },
      "costs_funding": {
        "tuition": "Not found - links to general 'Fees, grants and payment options' page EUR/year (EU/EEA)",
        "tuition_non_eu": "Not found",
        "tuition_notes": "Not retrieved in this pass; consortium-wide Erasmus Mundus fee structure likely applies - check unite-codas-master.eu"
      },
      "requirements_registration": {
        "grade_requirement": "Not found on UPC page",
        "prior_degree": "Not specified on UPC page",
        "entrance_exam": "Not mentioned",
        "credential_recognition_note": "Not mentioned on UPC page",
        "english_certificate_required": "Not stated on this page (instruction confirmed in English)",
        "ielts": "Not found",
        "toefl": "Not found",
        "cambridge": "Not found",
        "english_exemptions": "Not found",
        "deadline_main_intake": "Not listed on UPC page; pre-enrolment currently closed per page",
        "deadline_notes": "Check https://www.unite-codas-master.eu/admission.html directly",
        "other_admission_notes": "Pre-enrolment administered via coordinating university Aalto University, not UPC directly; 10 new intake places at UPC"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://upc.edu/en/masters/erasmus-mundus-communications-engineering-and-data-science-codas",
        "sources_consulted": [
          "https://upc.edu/en/masters/erasmus-mundus-communications-engineering-and-data-science-codas"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Erasmus Mundus consortium program; data science/comms focus, adjacent to digital systems background."
    },
    {
      "id": "es-universitat-polit-cnica-de-catalunya-upc-barcelonatech-master-s-degree-in-artificial-intelligence-for-connected-industries-ai4ci-7",
      "country": "Spain",
      "title": "Master's degree in Artificial Intelligence for Connected Industries (AI4CI)",
      "university": "Universitat Politècnica de Catalunya (UPC BarcelonaTech)",
      "department": "Castelldefels School of Telecommunications and Aerospace Engineering (EETAC)",
      "location": "Castelldefels",
      "tier": "C",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement not published/found on official page.",
      "overview": {
        "degree_type": "Master Universitario",
        "ruct_registered": true,
        "duration": "2 academic years, 120 ECTS, face-to-face",
        "language": "English",
        "language_confirmation": "'Language of instruction: English.' Official degree recorded with the Ministry of Science, Innovation and Universities."
      },
      "course_details": {
        "curriculum_notes": "Sem 1 (~30 courses, 3-6 ECTS): Machine Learning, Mobile Communications, Network Architecture, Pattern Recognition and Deep Learning, Performance Evaluation of Connected Systems. Sem 2: Big Data & Data Mining, Distributed and Federated Learning, Network Science, Industry Seminars. Sem 3: Advanced Experimental Projects in Connected Systems, Internet of Things and Ubiquitous IP, Network Support for 5G, Next-Gen Optical Network Infrastructures, Software Engineering. Sem 4: Master's Thesis (30).",
        "vlsi_rtl_relevance_notes": "Adjacent/IoT-ML focus; no VLSI/RTL hardware design coursework identified. Relevant mainly as connected-industry/IoT context rather than core chip design."
      },
      "costs_funding": {
        "tuition": "~€2,324 EUR/year (EU/EEA)",
        "tuition_non_eu": "~€5,400",
        "tuition_notes": "Excludes other costs such as non-teaching fees and degree certificate issuance"
      },
      "requirements_registration": {
        "grade_requirement": "Not found",
        "prior_degree": "Direct admission for telecommunications engineering bachelor's. Bridging courses required for Data Engineering, Industrial Electronics and Automatic Control Engineering, Informatics Engineering, Aerospace Systems Engineering, Artificial Intelligence degrees. Others assessed case by case.",
        "entrance_exam": "Not mentioned",
        "credential_recognition_note": "Non-EU documents must be legalised and apostilled; no homologación process described",
        "english_certificate_required": "Not stated on this page; English is language of instruction",
        "ielts": "Not found",
        "toefl": "Not found",
        "cambridge": "Not found",
        "english_exemptions": "Not found",
        "deadline_main_intake": "Not listed; pre-enrolment currently closed per page",
        "deadline_notes": "Use 'Request information' form for upcoming periods",
        "other_admission_notes": "25 new places, intakes September and February"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://upc.edu/en/masters/artificial-intelligence-for-connected-industries-ai4ci",
        "sources_consulted": [
          "https://upc.edu/en/masters/artificial-intelligence-for-connected-industries-ai4ci"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "AI/IoT-connected industry focus; adjacent (Tier C) relevance to embedded systems candidate."
    },
    {
      "id": "es-universitat-polit-cnica-de-catalunya-upc-barcelonatech-master-s-degree-in-machine-learning-and-cybersecurity-for-internet-connected-systems-8",
      "country": "Spain",
      "title": "Master's degree in Machine Learning and Cybersecurity for Internet-Connected Systems",
      "university": "Universitat Politècnica de Catalunya (UPC BarcelonaTech)",
      "department": "Manresa School of Engineering (EPSEM)",
      "location": "Manresa",
      "tier": "C",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement not published/found on official page.",
      "overview": {
        "degree_type": "Master Universitario",
        "ruct_registered": true,
        "duration": "1.5 academic years, 90 ECTS, face-to-face",
        "language": "English",
        "language_confirmation": "'Language of instruction: English.'"
      },
      "course_details": {
        "curriculum_notes": "Three semesters of 3-ECTS courses plus 18-ECTS thesis. Topics: machine learning, neural networks, cryptography, network security, malware analysis, IoT connectivity, IoT sensor systems, cyberphysical systems, industrial control system cybersecurity. Compulsory/optional split unclear from page (listed courses exceed 90 ECTS).",
        "vlsi_rtl_relevance_notes": "No explicit 'embedded systems' term used, but strong IoT/cyberphysical-systems and industrial control cybersecurity focus (IoT Connectivity, IoT Sensor Systems, Cyberphysical Systems) is directly adjacent to embedded hardware/security work."
      },
      "costs_funding": {
        "tuition": "~€1,743 EUR/year (EU/EEA)",
        "tuition_non_eu": "~€4,050",
        "tuition_notes": "Excludes non-teaching academic fees and degree certificate costs"
      },
      "requirements_registration": {
        "grade_requirement": "Not found",
        "prior_degree": "Direct admission (no bridging) for ICT Systems Engineering, Informatics Engineering, Data Science and Engineering, Telecommunications Systems Engineering, Telecom Technologies and Services Engineering, Network Engineering. Industrial Electronics and Automatic Control, Industrial Technology, Electrical Engineering need up to 18 ECTS bridging. Others assessed by committee.",
        "entrance_exam": "Not mentioned",
        "credential_recognition_note": "Non-EU documents must be legalised and apostilled; no homologación mentioned",
        "english_certificate_required": "Not stated; English is language of instruction",
        "ielts": "Not found",
        "toefl": "Not found",
        "cambridge": "Not found",
        "english_exemptions": "Not found",
        "deadline_main_intake": "Not listed; pre-enrolment currently closed per page",
        "deadline_notes": "Use request-information form",
        "other_admission_notes": "30 new intake places"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://upc.edu/en/masters/machine-learning-and-cybersecurity-for-internet-connected-systems",
        "sources_consulted": [
          "https://upc.edu/en/masters/machine-learning-and-cybersecurity-for-internet-connected-systems"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "IoT/cybersecurity/ML; adjacent to embedded systems but not core VLSI/RTL."
    },
    {
      "id": "es-universitat-polit-cnica-de-catalunya-upc-barcelonatech-with-icfo-uab-ub-master-s-degree-in-photonics-9",
      "country": "Spain",
      "title": "Master's degree in Photonics",
      "university": "Universitat Politècnica de Catalunya (UPC BarcelonaTech) — with ICFO, UAB, UB",
      "department": "Barcelona School of Telecommunications Engineering (ETSETB), coordinated with ICFO, UAB, UB",
      "location": "Barcelona (also sessions in Bellaterra)",
      "tier": "B",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement language could not be parsed into a clear numeric cutoff: \"Not specified; admission based on academic record and fit of qualification\"",
      "overview": {
        "degree_type": "Master Universitario",
        "ruct_registered": true,
        "duration": "1 academic year, 60 ECTS, starts September, afternoons, face-to-face",
        "language": "English",
        "language_confirmation": "'Language of instruction: English.' Virtual information session described as 'in English.'"
      },
      "course_details": {
        "curriculum_notes": "Year 1: 30 ECTS compulsory/optional + 30 ECTS Research Seminar - Beam Propagation and Fourier Optics, Intro to Photonics (Optics/Lasers), Photonics Laboratory, Nanophotonics, Integrated Photonics, Non-Linear Optics, Quantum Optics, Semiconductor Photonics: Applications and Technology, Optoelectronics and Photovoltaic Technology, Photonic Materials and Metamaterials. Year 2: 16-ECTS Master's Thesis.",
        "vlsi_rtl_relevance_notes": "Device/optoelectronics-adjacent relevance via Semiconductor Photonics and Optoelectronics/Photovoltaic Technology courses; not core digital VLSI/RTL but relevant for photonic-IC or optoelectronic device work."
      },
      "costs_funding": {
        "tuition": "~€1,162 EUR/year (EU/EEA)",
        "tuition_non_eu": "~€2,700",
        "tuition_notes": "Excludes other costs"
      },
      "requirements_registration": {
        "grade_requirement": "Not specified; admission based on academic record and fit of qualification",
        "prior_degree": "Official degree (>=180 ECTS) in physics, engineering physics, telecommunications, electrical/mechanical/electronic engineering, optics, or related (nanoscience, nanophotonics, bioengineering). Chemistry/materials science/biology may be considered with bridging courses.",
        "entrance_exam": "None; personal interview possible 'if necessary'",
        "credential_recognition_note": "Non-EU documents must be legalised and apostilled; no homologación process described",
        "english_certificate_required": "Not stated on this page; links to a language-use policy",
        "ielts": "Not found",
        "toefl": "Not found",
        "cambridge": "Not found",
        "english_exemptions": "Not found",
        "deadline_main_intake": "Not listed; pre-enrolment currently closed",
        "deadline_notes": "Use 'Request information' form",
        "other_admission_notes": "35 intake places; virtual info session 02/12/2026 15:00; 2-3 Catalonia Quantum Academy scholarships, call expected March-May 2026"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://upc.edu/en/masters/photonics",
        "sources_consulted": [
          "https://upc.edu/en/masters/photonics"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Photonics is adjacent to semiconductor/device engineering (optoelectronics relevant to some chip roles); included as Tier B due to device-physics overlap."
    },
    {
      "id": "es-universidad-polit-cnica-de-madrid-upm-school-of-telecommunication-systems-engineering-etsist-master-s-degree-in-wireless-communications-m-ster-universitario-en-comunicaciones-inal-mbricas-10",
      "country": "Spain",
      "title": "Master's degree in Wireless Communications (Máster Universitario en Comunicaciones Inalámbricas)",
      "university": "Universidad Politécnica de Madrid (UPM) — School of Telecommunication Systems Engineering (ETSIST)",
      "department": "Escuela Técnica Superior de Ingeniería y Sistemas de Telecomunicación (ETSIST), UPM",
      "location": "Madrid",
      "tier": "B",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement not published/found on official page.",
      "overview": {
        "degree_type": "Master Universitario",
        "ruct_registered": true,
        "duration": "Not found",
        "language": "English",
        "language_confirmation": "\"Classes are entirely face-to-face, and instruction language is English.\" Validated by Madrid regional foundation madri+d (April 2022)."
      },
      "course_details": {
        "curriculum_notes": "Not found",
        "vlsi_rtl_relevance_notes": "Not found"
      },
      "costs_funding": {
        "tuition": "Not found",
        "tuition_non_eu": "Not found",
        "tuition_notes": ""
      },
      "requirements_registration": {
        "grade_requirement": "Not found",
        "prior_degree": "Not found",
        "entrance_exam": "Not found",
        "credential_recognition_note": "Not found",
        "english_certificate_required": "Not found",
        "ielts": "Not found",
        "toefl": "Not found",
        "cambridge": "Not found",
        "english_exemptions": "",
        "deadline_main_intake": "Not found",
        "deadline_notes": "",
        "other_admission_notes": ""
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.etsist.upm.es/estudios-ingenieria-sistemas-telecomunicaciones-madrid/masters-ingenieria-madrid/mwc?idioma=EN",
        "sources_consulted": [
          "https://www.etsist.upm.es/estudios-ingenieria-sistemas-telecomunicaciones-madrid/masters-ingenieria-madrid/mwc?idioma=EN"
        ],
        "scraped_on": "Not found"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Research-oriented, 60 ECTS. Confirm current admission cycle status directly (one source noted admission closed for 2025-26, may reopen for 2026-27)."
    },
    {
      "id": "es-universidad-carlos-iii-de-madrid-uc3m-graduate-school-of-engineering-and-basic-sciences-master-in-connected-industry-4-0-11",
      "country": "Spain",
      "title": "Master in Connected Industry 4.0",
      "university": "Universidad Carlos III de Madrid (UC3M) — Graduate School of Engineering and Basic Sciences",
      "department": "Systems Engineering and Automation / Telematic Engineering / Mechanical Engineering / Statistics (joint)",
      "location": "Madrid (Puerta de Toledo campus)",
      "tier": "C",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement not published/found on official page.",
      "overview": {
        "degree_type": "Master Universitario",
        "ruct_registered": true,
        "duration": "Not found",
        "language": "English",
        "language_confirmation": "Page states the Master 'is taught entirely in English.' Language field: English."
      },
      "course_details": {
        "curriculum_notes": "Not found",
        "vlsi_rtl_relevance_notes": "Not found"
      },
      "costs_funding": {
        "tuition": "Not found",
        "tuition_non_eu": "Not found",
        "tuition_notes": ""
      },
      "requirements_registration": {
        "grade_requirement": "Not found",
        "prior_degree": "Not found",
        "entrance_exam": "Not found",
        "credential_recognition_note": "Not found",
        "english_certificate_required": "Not found",
        "ielts": "Not found",
        "toefl": "Not found",
        "cambridge": "Not found",
        "english_exemptions": "",
        "deadline_main_intake": "Not found",
        "deadline_notes": "",
        "other_admission_notes": ""
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.uc3m.es/master/connected-industry-4.0",
        "sources_consulted": [
          "https://www.uc3m.es/master/connected-industry-4.0"
        ],
        "scraped_on": "Not found"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Industry 4.0 / automation / IoT focus; adjacent to embedded systems and industrial electronics interest areas, not core VLSI."
    },
    {
      "id": "es-universidad-pontificia-comillas-icai-master-s-degree-in-smart-grids-msg-12",
      "country": "Spain",
      "title": "Master's Degree in Smart Grids (MSG)",
      "university": "Universidad Pontificia Comillas (ICAI)",
      "department": "Engineering (Comillas ICAI)",
      "location": "Madrid",
      "tier": "C",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement language could not be parsed into a clear numeric cutoff: \"Not stated — page's requirements section was empty at time of scrape\"",
      "overview": {
        "degree_type": "Master Universitario (Comillas official master's degree)",
        "ruct_registered": "unknown",
        "duration": "1 year (90 ECTS); can also be spread over 2 years combined with MII (Industrial Engineering) or MIT (Telecommunications Engineering) official master's",
        "language": "English",
        "language_confirmation": "Official page lists 'Languages: English' for the standalone Smart Grids master (in-person, 1 year / 90 ECTS, starts 01/09/2026)."
      },
      "course_details": {
        "curriculum_notes": "Period 1 (Madrid, 30 ECTS): Fundamentals of Power Systems/Telecom, Regulation & New Business Models, Operation & Planning of Future Distribution Networks, Telecommunications for Smart Grids, Leadership/Change Management. Period 2 (Strathclyde, UK, 30 ECTS): Data Analytics & AI for Energy Systems, Control & Protection of Future Networks, Cyber Security & Data Privacy, Hardware IoT Communications System Design, Power Electronics for Transmission/Distribution Networks, 5G Communications Networks. Period 3 (30 ECTS): company placement + Master Thesis.",
        "vlsi_rtl_relevance_notes": "Adjacent relevance only — 'Hardware IoT Communications System Design' and 'Power Electronics' courses touch embedded/power-electronics territory, but this is fundamentally a power-systems/smart-grid program, not VLSI/RTL/chip design. Note the program is run jointly with University of Strathclyde (Scotland) for Period 2 — partially taught abroad."
      },
      "costs_funding": {
        "tuition": "€19,474 total (UK/EU), registration fee €4,138.20 + 8 installments of €1,917.00 EUR/year (EU/EEA)",
        "tuition_non_eu": "€25,967 total (Rest of world), registration fee €4,136.40 + 8 installments of €2,728.80",
        "tuition_notes": "Private university (Máster Propio/Comillas-style pricing) — tuition is dramatically higher than public Master Universitario programs, consistent with Comillas being a private institution. 10% Comillas Alumni discount available; some 50% scholarships mentioned but not detailed."
      },
      "requirements_registration": {
        "grade_requirement": "Not stated — page's requirements section was empty at time of scrape",
        "prior_degree": "Not stated on this page",
        "entrance_exam": "Comillas' general admissions FAQ states candidates are selected via entrance examinations due to limited places, plus an interview; not confirmed as specific to this program",
        "credential_recognition_note": "Not stated / Not found",
        "english_certificate_required": "Not stated (program itself confirmed taught in English)",
        "ielts": "Not found",
        "toefl": "Not found",
        "cambridge": "Not found",
        "english_exemptions": "Not found",
        "deadline_main_intake": "Registration window stated as 05/10/26 to 12/07/27 (date format ambiguous — likely DD/MM/YY); program start 01/09/2027",
        "deadline_notes": "Confirm exact admissions calendar directly with program office; dates on page may refer to a later cohort than the 2026-27 intake",
        "other_admission_notes": "Not found"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.comillas.edu/en/postgraduate/masters-in-smart-grids/",
        "sources_consulted": [
          "https://www.comillas.edu/en/postgraduate/masters-in-smart-grids/"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Power systems/renewable energy adjacent track (Tier C). Double-degree variants with Industrial Engineering or Telecommunications Engineering list 'English, Spanish' as languages — those bilingual dual-degree versions were NOT included here because full-English instruction could not be confirmed; only the standalone Smart Grids master is included."
    },
    {
      "id": "es-universitat-polit-cnica-de-catalunya-upc-barcelonatech-master-s-degree-in-automatic-control-and-robotics-13",
      "country": "Spain",
      "title": "Master's degree in Automatic Control and Robotics",
      "university": "Universitat Politècnica de Catalunya (UPC BarcelonaTech)",
      "department": "Barcelona School of Industrial Engineering (ETSEIB)",
      "location": "Barcelona",
      "tier": "B",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement language could not be parsed into a clear numeric cutoff: \"No numeric cutoff; criteria: English level, academic record, degree/university of origin, professional experience\"",
      "overview": {
        "degree_type": "Master Universitario",
        "ruct_registered": true,
        "duration": "2 academic years, 120 ECTS, includes thesis + industrial/research training, face-to-face afternoons",
        "language": "English",
        "language_confirmation": "Page field 'Language of instruction' lists 'English'."
      },
      "course_details": {
        "curriculum_notes": "Compulsory subjects cover automatic control systems, robotics and robotised systems, computer vision, computer technology and communication in processing elements, scientific/technological tools, plus free electives and an 18-ECTS optional area in final semester. Study plan link on page was not available.",
        "vlsi_rtl_relevance_notes": "'Computer technology and communication in processing elements' is the closest reference to embedded systems; competencies include programming software components for control systems. Adjacent relevance to embedded/control hardware, not core VLSI/IC design."
      },
      "costs_funding": {
        "tuition": "~€2,324 EUR/year (EU/EEA)",
        "tuition_non_eu": "~€5,400",
        "tuition_notes": "Program also eligible for Catalunya-La Pedrera Foundation's Masters of Excellence grants"
      },
      "requirements_registration": {
        "grade_requirement": "No numeric cutoff; criteria: English level, academic record, degree/university of origin, professional experience",
        "prior_degree": "Engineering degrees related to automatic control and robotics (industrial, electronic, electrical, mechanical, IT, telecom) and physics/mathematics degrees preferred",
        "entrance_exam": "None mentioned",
        "credential_recognition_note": "Non-EU documents must be legalised and apostilled; no homologación process described",
        "english_certificate_required": "Yes - B2.2 required, may be lowered to B1 in exceptional cases",
        "ielts": "Not found (specific score not given)",
        "toefl": "Not found",
        "cambridge": "Not found",
        "english_exemptions": "Not found",
        "deadline_main_intake": "Not listed; pre-enrolment currently closed per page",
        "deadline_notes": "Use request-information form",
        "other_admission_notes": "40 new places starting September; 5 places reserved for pre-June admission (grant/visa cases) decided 31 March"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://upc.edu/en/masters/automatic-control-and-robotics",
        "sources_consulted": [
          "https://upc.edu/en/masters/automatic-control-and-robotics"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Official degree recorded with the Ministry of Science, Innovation and Universities. Control/robotics overlaps with embedded systems interest."
    },
    {
      "id": "es-universitat-polit-cnica-de-catalunya-upc-barcelonatech-master-s-degree-in-electric-power-systems-and-drives-14",
      "country": "Spain",
      "title": "Master's degree in Electric Power Systems and Drives",
      "university": "Universitat Politècnica de Catalunya (UPC BarcelonaTech)",
      "department": "Barcelona School of Industrial Engineering (ETSEIB)",
      "location": "Barcelona",
      "tier": "C",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement language could not be parsed into a clear numeric cutoff: \"No cutoff stated; weights: academic record 40%, competency match with entrance qualification 50%, CV 10%\"",
      "overview": {
        "degree_type": "Master Universitario",
        "ruct_registered": true,
        "duration": "1 academic year, 60 ECTS, starts September, face-to-face (morning/afternoon)",
        "language": "English",
        "language_confirmation": "Page field 'Language of instruction' lists 'English'."
      },
      "course_details": {
        "curriculum_notes": "Sem 1 (12 courses, 5 ECTS each): Centralised Generation and Electrical Networks, Electrical Energy Conversion, Control and Automation for Efficient Energy Use, Data Science for Energy Systems, Energy Management/Optimisation, Energy Planning, Energy Storage Technologies, Integration of Renewables, Power Electronics and Electrical Machines for Electric Mobility/Industrial Applications, Power Quality, Smart Grids, Wind Energy. Sem 2: Energy Markets, Analysis/Control of Power Electronics-Dominated Power Systems, Control of Electrical Machines and Power Electronics, DC Technology and Systems, High Voltage Technology, Industrial Energy Efficiency, Power Electronics for Renewable Generation, 15-ECTS Smart Electrical Networks Research Project, 15-ECTS Thesis.",
        "vlsi_rtl_relevance_notes": "Power-electronics adjacent (Control of Electrical Machines and Power Electronics) but not VLSI/RTL/digital IC design. Relevant mainly for power-electronics-focused hardware roles."
      },
      "costs_funding": {
        "tuition": "~€1,162 EUR/year (EU/EEA)",
        "tuition_non_eu": "~€2,700",
        "tuition_notes": "Excludes other costs"
      },
      "requirements_registration": {
        "grade_requirement": "No cutoff stated; weights: academic record 40%, competency match with entrance qualification 50%, CV 10%",
        "prior_degree": "Direct admission: Industrial Technology Engineering, Industrial Technologies and Economic Analysis, Energy Engineering, Electrical Engineering, Industrial Electronics and Automatic Control Engineering, Engineering Physics. Other degrees generally not admitted; committee may allow with up to 15 ECTS bridging.",
        "entrance_exam": "Not mentioned",
        "credential_recognition_note": "Non-EU documents must be legalised and apostilled; no homologación process described",
        "english_certificate_required": "Not required/specified on this page; English is language of instruction",
        "ielts": "Not found",
        "toefl": "Not found",
        "cambridge": "Not found",
        "english_exemptions": "Not found",
        "deadline_main_intake": "Not listed; pre-enrolment currently closed",
        "deadline_notes": "Use 'Request information' form",
        "other_admission_notes": "Not found"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://upc.edu/en/masters/electric-power-systems-and-drives",
        "sources_consulted": [
          "https://upc.edu/en/masters/electric-power-systems-and-drives"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Power electronics/drives adjacent to RTL/VLSI candidate's power-electronics coursework overlap; Tier C (power systems)."
    },
    {
      "id": "es-universitat-polit-cnica-de-catalunya-upc-barcelonatech-master-s-degree-in-renewable-energy-engineering-15",
      "country": "Spain",
      "title": "Master's degree in Renewable Energy Engineering",
      "university": "Universitat Politècnica de Catalunya (UPC BarcelonaTech)",
      "department": "Barcelona School of Industrial Engineering (ETSEIB)",
      "location": "Barcelona",
      "tier": "C",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement not published/found on official page.",
      "overview": {
        "degree_type": "Master Universitario",
        "ruct_registered": true,
        "duration": "2 academic years, 120 ECTS, starts September, face-to-face afternoons, 60 new intake places",
        "language": "English",
        "language_confirmation": "Page field 'Language of instruction' lists 'English'."
      },
      "course_details": {
        "curriculum_notes": "Sem 1: Renewable Energy Technologies, Energy Storage, Hydrogen Technologies, Integration of Renewables in Electrical Grids. Sem 2: Biomass Energy, Hydraulic and Marine Energy, Renewable Energy Projects, Energy Markets, Sustainable Building Design. Sem 3: Wind Energy, Photovoltaic Solar Energy, Geothermal Energy, Smart Grids, Battery Technologies, 10-ECTS 'Moonshot' project. Sem 4: Power Quality, High Voltage Technology, 30-ECTS Thesis.",
        "vlsi_rtl_relevance_notes": "Not VLSI/RTL relevant - pure renewable-energy/power-systems program."
      },
      "costs_funding": {
        "tuition": "~€2,324 EUR/year (EU/EEA)",
        "tuition_non_eu": "~€5,400",
        "tuition_notes": "Excludes other costs"
      },
      "requirements_registration": {
        "grade_requirement": "Not found",
        "prior_degree": "Not specified on this page",
        "entrance_exam": "Not mentioned",
        "credential_recognition_note": "Non-EU documents must be legalised and apostilled; no homologación process described",
        "english_certificate_required": "Yes - B2 CEFR equivalent required",
        "ielts": "Not found (no specific score given)",
        "toefl": "Not found",
        "cambridge": "Not found",
        "english_exemptions": "Not found",
        "deadline_main_intake": "Not listed; pre-enrolment currently closed",
        "deadline_notes": "Use 'Request information' form",
        "other_admission_notes": "Not found"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://upc.edu/en/masters/renewable-energy-engineering",
        "sources_consulted": [
          "https://upc.edu/en/masters/renewable-energy-engineering"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Renewable energy/power systems; Tier C adjacent."
    },
    {
      "id": "es-universitat-polit-cnica-de-catalunya-upc-barcelonatech-master-s-degree-in-aerospace-science-and-technology-mast-16",
      "country": "Spain",
      "title": "Master's degree in Aerospace Science and Technology (MAST)",
      "university": "Universitat Politècnica de Catalunya (UPC BarcelonaTech)",
      "department": "Castelldefels School of Telecommunications and Aerospace Engineering (EETAC)",
      "location": "Castelldefels",
      "tier": "C",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement not published/found on official page.",
      "overview": {
        "degree_type": "Master Universitario",
        "ruct_registered": true,
        "duration": "1 academic year, 60 ECTS, face-to-face",
        "language": "English",
        "language_confirmation": "\"As the master's degree is taught entirely in English.\" Language of instruction field: English."
      },
      "course_details": {
        "curriculum_notes": "Sem 1: 9 five-credit courses. Sem 2: 7 five-credit courses + 15-credit Master's Thesis. Relevant courses: Analogue and Digital Signal Processing for Aerospace Applications, Test and Instrumentation Systems in Aerospace Applications, Modern Control Systems, Global Navigation Satellite Systems (GNSS) Data Processing.",
        "vlsi_rtl_relevance_notes": "Adjacent via avionics-related signal processing and instrumentation courses. Competency: 'Design electronic on-board equipment in which microtechnologies play an important role' and knowledge of satellite data bus structure - relevant to embedded/avionics hardware but not core VLSI/RTL IC design."
      },
      "costs_funding": {
        "tuition": "~€1,162 EUR/year (EU/EEA)",
        "tuition_non_eu": "~€2,700",
        "tuition_notes": "Excludes other costs"
      },
      "requirements_registration": {
        "grade_requirement": "Not found",
        "prior_degree": "Direct admission: Aerospace Engineering or higher aerospace engineering graduates. Industrial Engineering, Physics, or Telecommunications (or higher engineering) graduates may be considered.",
        "entrance_exam": "None mentioned; admission criteria order: motivation letter, CV, academic record, proof of English, 2 reference letters",
        "credential_recognition_note": "Foreign degrees evaluated by a committee; non-EU documents must be legalised and apostilled; 'homologation' term not used",
        "english_certificate_required": "Yes - B2 CEFR accreditation required",
        "ielts": "Not found (specific score not given)",
        "toefl": "Not found",
        "cambridge": "Not found",
        "english_exemptions": "Not found",
        "deadline_main_intake": "Expected pre-enrolment deadline 09/12/2026 (page also notes pre-enrolment may be closed - verify)",
        "deadline_notes": "Check official pre-enrolment page",
        "other_admission_notes": "30 new places, intakes September and February"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://upc.edu/en/masters/aerospace-science-and-technology-mast",
        "sources_consulted": [
          "https://upc.edu/en/masters/aerospace-science-and-technology-mast"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Aerospace systems; adjacent (avionics/embedded relevance) Tier C."
    },
    {
      "id": "es-universitat-polit-cnica-de-catalunya-upc-barcelonatech-master-s-degree-in-engineering-physics-17",
      "country": "Spain",
      "title": "Master's degree in Engineering Physics",
      "university": "Universitat Politècnica de Catalunya (UPC BarcelonaTech)",
      "department": "Barcelona School of Telecommunications Engineering (ETSETB)",
      "location": "Barcelona",
      "tier": "B",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement not published/found on official page.",
      "overview": {
        "degree_type": "Master Universitario",
        "ruct_registered": true,
        "duration": "60 ECTS; 1 academic year if starting September, 1.5 years if starting February",
        "language": "English",
        "language_confirmation": "Page field 'Language of instruction' lists 'English'."
      },
      "course_details": {
        "curriculum_notes": "Sem 1: Critical Phenomena and Complexity, Project Management, Quantum Matter, Surface Engineering and Microdevices, Atomic and Molecular Physics, Computational Astrophysics, Numerical Methods for Continuous Systems, Physics of Materials. Sem 2: Large Facilities (Synchrotron/Neutron Sources), Characterisation in Biophysics and Materials Science, Complexity in Biological Systems, Machine Learning with Neural Networks, Molecular and Soft Condensed Matter, Pharmaceutical Materials Science, Stochastic Methods, 17-ECTS Master's Thesis.",
        "vlsi_rtl_relevance_notes": "Page does not mention semiconductors explicitly. Device physics relevance inferred (not stated) via 'Quantum Matter' and 'Surface Engineering and Microdevices' courses, plus general program description referencing device physics/nanoelectronics. Low-to-moderate, inferred relevance only."
      },
      "costs_funding": {
        "tuition": "~€1,162 EUR/year (EU/EEA)",
        "tuition_non_eu": "~€2,700",
        "tuition_notes": "Excludes other costs"
      },
      "requirements_registration": {
        "grade_requirement": "Not found",
        "prior_degree": "Bachelor's in Physics or Engineering Physics, or a related degree in Engineering or Basic/Applied Sciences",
        "entrance_exam": "Not mentioned",
        "credential_recognition_note": "Non-EU documents must be legalised and apostilled; no homologación process described",
        "english_certificate_required": "Not stated; English is language of instruction",
        "ielts": "Not found",
        "toefl": "Not found",
        "cambridge": "Not found",
        "english_exemptions": "Not found",
        "deadline_main_intake": "Expected pre-enrolment deadline 09/12/2026, but page also says pre-enrolment currently closed for this master's",
        "deadline_notes": "Check UPC pre-enrolment page for current status",
        "other_admission_notes": "20 new places, intakes February and September"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://upc.edu/en/masters/engineering-physics",
        "sources_consulted": [
          "https://upc.edu/en/masters/engineering-physics"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Device/semiconductor-physics overlap relevant to IC/VLSI background; Tier B."
    },
    {
      "id": "es-universitat-polit-cnica-de-catalunya-upc-barcelonatech-master-s-degree-in-cybersecurity-18",
      "country": "Spain",
      "title": "Master's degree in Cybersecurity",
      "university": "Universitat Politècnica de Catalunya (UPC BarcelonaTech)",
      "department": "Barcelona School of Telecommunications Engineering (ETSETB) and Barcelona School of Informatics (FIB)",
      "location": "Barcelona",
      "tier": "C",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement language could not be parsed into a clear numeric cutoff: \"No fixed cutoff; academic information 65% (final undergrad grade, university ranking, performance in CS/telecom/maths subjects), background/experience 35%\"",
      "overview": {
        "degree_type": "Master Universitario",
        "ruct_registered": true,
        "duration": "1 academic year, 60 ECTS, starts September, face-to-face",
        "language": "English",
        "language_confirmation": "Page field 'Language of instruction' lists 'English'."
      },
      "course_details": {
        "curriculum_notes": "Sem 1 (seven 5-ECTS courses): Application Security, Malware, Network Security, Data Protection, Blockchain, Cybersecurity Management. Sem 2: Cybersecurity Use Cases, Data Privacy, Quantum Cryptography, Software-Defined Security, 'Hardware Security in Embedded Systems: Primitives, Weaknesses and Countermeasures' (3 ECTS), plus 12-ECTS Master's Thesis.",
        "vlsi_rtl_relevance_notes": "Directly relevant via the 'Hardware Security in Embedded Systems: Primitives, Weaknesses and Countermeasures' course - explicit hardware/embedded security content relevant to secure-IP/VLSI security roles."
      },
      "costs_funding": {
        "tuition": "~€1,162 EUR/year (EU/EEA)",
        "tuition_non_eu": "~€2,700",
        "tuition_notes": "Excludes other costs"
      },
      "requirements_registration": {
        "grade_requirement": "No fixed cutoff; academic information 65% (final undergrad grade, university ranking, performance in CS/telecom/maths subjects), background/experience 35%",
        "prior_degree": "Telecommunications, audiovisual, electronic, network, informatics engineering degrees and some pre-EHEA equivalents recommended. Other degrees admissible with up to 10 ECTS bridging courses.",
        "entrance_exam": "None mentioned",
        "credential_recognition_note": "Non-EU documents must be legalised and apostilled; homologación process not described",
        "english_certificate_required": "Yes - B2 required for admission, demonstrated at enrolment",
        "ielts": "Not found (specific score not given)",
        "toefl": "Not found",
        "cambridge": "Not found",
        "english_exemptions": "Not found",
        "deadline_main_intake": "Not listed; pre-enrolment currently closed",
        "deadline_notes": "Use 'Request information' form",
        "other_admission_notes": "Virtual info session 02/12/2026 10:00"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://upc.edu/en/masters/cybersecurity",
        "sources_consulted": [
          "https://upc.edu/en/masters/cybersecurity"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Hardware/embedded security track relevant to some VLSI/security-IP roles; Tier C adjacent."
    },
    {
      "id": "es-universitat-polit-cnica-de-catalunya-upc-barcelonatech-erasmus-mundus-consortium-erasmus-mundus-master-s-degree-in-data-engineering-and-artificial-intelligence-deai-19",
      "country": "Spain",
      "title": "Erasmus Mundus Master's degree in Data Engineering and Artificial Intelligence (DEAI)",
      "university": "Universitat Politècnica de Catalunya (UPC BarcelonaTech) — Erasmus Mundus consortium",
      "department": "Barcelona School of Informatics (FIB)",
      "location": "Barcelona",
      "tier": "C",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement not published/found on official page.",
      "overview": {
        "degree_type": "Master Universitario (Erasmus Mundus Joint Master)",
        "ruct_registered": "unknown",
        "duration": "2 academic years, 120 ECTS, starts September",
        "language": "English",
        "language_confirmation": "Page field 'Language of instruction' lists 'English'."
      },
      "course_details": {
        "curriculum_notes": "UPC page states study plan not available ('curriculum not available'); general description mentions mathematics, statistics, machine learning, data management, computer vision, NLP, distributed systems, cloud computing, and AI ethics.",
        "vlsi_rtl_relevance_notes": "Not VLSI/RTL relevant - data engineering/AI focus, not hardware."
      },
      "costs_funding": {
        "tuition": "Not found EUR/year (EU/EEA)",
        "tuition_non_eu": "Not found",
        "tuition_notes": "Not retrieved; UPC page gives no fee figures"
      },
      "requirements_registration": {
        "grade_requirement": "Not found on UPC page",
        "prior_degree": "Not found on UPC page",
        "entrance_exam": "Not mentioned",
        "credential_recognition_note": "Not found/not mentioned on UPC page",
        "english_certificate_required": "Not stated on UPC page; instruction confirmed in English",
        "ielts": "Not found",
        "toefl": "Not found",
        "cambridge": "Not found",
        "english_exemptions": "Not found",
        "deadline_main_intake": "Not listed; pre-enrolment currently closed per page",
        "deadline_notes": "Use 'Request information' form; check deai.ulb.be directly",
        "other_admission_notes": "35 new intake places; curriculum details hosted on consortium site deai.ulb.be, not retrieved in this pass"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://upc.edu/en/masters/erasmus-mundus-data-engineering-and-artificial-intelligence-deai",
        "sources_consulted": [
          "https://upc.edu/en/masters/erasmus-mundus-data-engineering-and-artificial-intelligence-deai"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Data engineering/AI; adjacent, not core hardware focus."
    },
    {
      "id": "es-universidad-de-oviedo-uniovi-master-s-degree-in-electrical-energy-conversion-and-power-systems-eecps-20",
      "country": "Spain",
      "title": "Master's Degree in Electrical Energy Conversion and Power Systems (EECPS)",
      "university": "Universidad de Oviedo (UNIOVI)",
      "department": "Department of Electrical Engineering, School of Engineering",
      "location": "Gijón, Asturias",
      "tier": "C",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement not published/found on official page.",
      "overview": {
        "degree_type": "Master Universitario",
        "ruct_registered": true,
        "duration": "Not found - could not reach live page",
        "language": "English",
        "language_confirmation": "CAVEAT — live official page could not be fetched directly during this session (connection error). Confirmation is from a peer-reviewed paper co-authored by UNIOVI's own Department of Electrical Engineering describing the degree as 'entirely taught in English language,' and corroborated by aggregator listings citing 'Teaching language: English.' Recommend re-verifying directly on uniovi.es before relying on this entry."
      },
      "course_details": {
        "curriculum_notes": "Not found - site unreachable. Candidate list previously cited a peer-reviewed paper co-authored by UNIOVI's own Dept. of Electrical Engineering describing the program as 'entirely taught in English,' corroborated by aggregator listings, but this was not independently confirmed from the official source in this pass either.",
        "vlsi_rtl_relevance_notes": "Not verified - power systems/electrical energy conversion focus per candidate list description; not expected to be core VLSI/RTL relevant even if content were retrieved."
      },
      "costs_funding": {
        "tuition": "Not found EUR/year (EU/EEA)",
        "tuition_non_eu": "Not found",
        "tuition_notes": "Not found - site unreachable"
      },
      "requirements_registration": {
        "grade_requirement": "Not found",
        "prior_degree": "Not found",
        "entrance_exam": "Not found",
        "credential_recognition_note": "Not found",
        "english_certificate_required": "Not found",
        "ielts": "Not found",
        "toefl": "Not found",
        "cambridge": "Not found",
        "english_exemptions": "Not found",
        "deadline_main_intake": "Not found",
        "deadline_notes": "Not found - site unreachable",
        "other_admission_notes": "SITE UNREACHABLE: two separate WebFetch attempts on the official UNIOVI page both returned a 'Socket is closed' connection error. This matches the caveat already flagged in the original candidate list ('live official page could not be fetched directly during this session'). Could not independently verify any field."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://uniovi.es/en/estudia/masteres/ingenieriayarquitectura/conversionenergia",
        "sources_consulted": [
          "https://uniovi.es/en/estudia/masteres/ingenieriayarquitectura/conversionenergia (unreachable - socket closed, 2 attempts)"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Power systems / electrical & hybrid vehicles / renewable energy focus; 2 years, 120 ECTS. Included with a lower-confidence flag because the official page itself was not directly readable in this session — re-check before using."
    },
    {
      "id": "es-ie-university-master-s-in-software-engineering-mswe-21",
      "country": "Spain",
      "title": "Master's in Software Engineering (MSWE)",
      "university": "IE University",
      "department": "IE School of Science and Technology",
      "location": "Madrid",
      "tier": "C",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement language could not be parsed into a clear numeric cutoff: \"Not stated on either the news article or official program page\"",
      "overview": {
        "degree_type": "Máster Propio (private, non-RUCT university title)",
        "ruct_registered": false,
        "duration": "10-11 months, full-time, in person, Madrid (news article says 10 months; official program page says 11 months)",
        "language": "English",
        "language_confirmation": "\"The 10-month English-language program will be held in person in Madrid.\""
      },
      "course_details": {
        "curriculum_notes": "Organized around three themes: Develop, Manage, Venture - covers conceiving, building, testing, launching, marketing, managing software. Optional specializations: Artificial Intelligence, Cloud Solutions Management, Tech Sales & Consulting, Quantum Computing, Cybersecurity, Aerospace Technology. Optional research-based Capstone Project. Full plan on separate Study Plan page, not retrieved.",
        "vlsi_rtl_relevance_notes": "Software engineering program, not hardware/RTL - relevant only to embedded-software-adjacent roles, not core VLSI/IC design. Confirms original candidate-list tiering (Tier C)."
      },
      "costs_funding": {
        "tuition": "Not found - page links to separate 'Admissions & Fees' section not retrieved in this pass EUR/year (EU/EEA)",
        "tuition_non_eu": "Not found",
        "tuition_notes": "As a private Máster Propio, likely priced similarly to Comillas MSG (tens of thousands of EUR) rather than public Master Universitario rates - NOT confirmed, flagged for independent verification"
      },
      "requirements_registration": {
        "grade_requirement": "Not stated on either the news article or official program page",
        "prior_degree": "Technical background in Data Science, Software Engineering, Computer Engineering, or Information Technologies, OR demonstrable programming experience/professional experience in related fields regardless of academic background",
        "entrance_exam": "Not mentioned",
        "credential_recognition_note": "Not mentioned on either page - no homologación discussion found",
        "english_certificate_required": "Not mentioned on either page; language of study stated as English",
        "ielts": "Not found",
        "toefl": "Not found",
        "cambridge": "Not found",
        "english_exemptions": "Not found",
        "deadline_main_intake": "September 21st 2026 (Fall intake), no stated closing date",
        "deadline_notes": "Check Admissions & Fees page directly",
        "other_admission_notes": "2026-2027 full-time Fall intake starts September 21st per official page; no closing date listed"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://ie.edu/school-science-technology/news/ie-launches-master-in-software-engineering",
        "sources_consulted": [
          "https://ie.edu/school-science-technology/news/ie-launches-master-in-software-engineering",
          "https://www.ie.edu/school-science-technology/programs/master-software-engineering/"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Software engineering (not hardware/RTL) — relevant to embedded-software-adjacent roles only; Tier C. IE University degrees are generally private/Propio titles; RUCT registration not confirmed, marked false/unknown pending verification. Find the current official program page on ie.edu for admissions/curriculum details (this citation is from IE's own news article, not the program's catalogue page, which could not be located directly)."
    },
    {
      "id": "es-university-of-the-basque-country-upv-ehu-erasmus-mundus-european-master-for-industry-in-microwave-electronics-and-photonics-emimep-successor-to-emimeo-22",
      "country": "Spain",
      "title": "Erasmus Mundus European Master for Industry in Microwave Electronics and Photonics (EMIMEP) — successor to EMIMEO",
      "university": "University of the Basque Country (UPV/EHU)",
      "department": "Department of Electricity and Electronics, Faculty of Science and Technology",
      "location": "Bilbao (Year 2 specialization track; Year 1 at Limoges/Brescia)",
      "tier": "A",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement not published/found on official page.",
      "overview": {
        "degree_type": "Erasmus Mundus Joint Master's Degree (Master Universitario)",
        "ruct_registered": "unknown",
        "duration": "2 academic years (120 ECTS), based on consortium page references to 'first academic year' and 'second academic year'",
        "language": "English",
        "language_confirmation": "Erasmus Mundus consortium page (erasmuscatalogue.com mirror of official EMIMEP info) states: 'Offered entirely in English and structured over two academic years (120 ECTS)' and lists 'Language of Instruction: English' in its key-details table. UPV/EHU is named as one of the four consortium partner universities (University of Limoges, University of Brescia, University of the Basque Country UPV/EHU, Friedrich Schiller University Jena), with Year 2 being a specialization at one chosen partner university."
      },
      "course_details": {
        "curriculum_notes": "Direct access to a detailed syllabus/course-list page was not achieved this session (accreditation page had only verification/RUCT documents; consortium site gave only partner/location structure, not module list). Known structural detail: Year 1 split between Limoges and Brescia; Year 2 specialization at a chosen partner (UPV/EHU Bilbao is one option), with 'Research and Industrial Week' (Cluj) and 'European Microwave Week' as cross-cohort events.",
        "vlsi_rtl_relevance_notes": "Program core is microwave electronics and photonics (RF circuit design, microwave devices, photonic components, and their implementation in wired/wireless communications) per the consortium page's general description. This is strongly adjacent to RF/analog IC and photonic-IC design work, but a module-by-module curriculum (e.g., explicit RFIC, antenna, or photonic-integration course titles) could not be retrieved this session — syllabus pages behind EHU's site navigation ('Syllabus' link noted on the accreditation page) were not reachable/fetched."
      },
      "costs_funding": {
        "tuition": "Not found on official pages. Third-party aggregators describe Erasmus Mundus scholarship holders receiving EUR 1,400/month for up to 24 months with enrolment fees covered, plus tuition waiver, travel/visa support, and health/travel insurance — but this is EM scholarship funding, not a stated base tuition figure, and is not independently verified against an official EMIMEP page this session. EUR/year (EU/EEA)",
        "tuition_non_eu": "Not found",
        "tuition_notes": "Self-funded (non-scholarship) applications are described as 'now open' on the consortium site, implying a self-pay track exists, but no fee amount was found. Erasmus Mundus scholarship competition is the primary funding route typically advertised for this consortium."
      },
      "requirements_registration": {
        "grade_requirement": "Not found. No numeric GPA/grade threshold was published on any page reached (UPV/EHU accreditation page, EHU Erasmus Mundus apply page, or consortium emimeo.eu site).",
        "prior_degree": "Program targets graduates in Electronics, Electrical Engineering, Telecommunications, Photonics, or Applied Physics (per third-party scholarship aggregator guides; not independently confirmed on an official page during this session).",
        "entrance_exam": "Not found",
        "credential_recognition_note": "Not found. No non-EU credential legalization/recognition requirement was stated on any page reached.",
        "english_certificate_required": "Not explicitly confirmed on an official program page; third-party scholarship-aggregator guides (not official) list 'proof of English' among required documents alongside transcripts, CV, motivation letter, and references.",
        "ielts": "Not found",
        "toefl": "Not found",
        "cambridge": "Not found",
        "english_exemptions": "Not found",
        "deadline_main_intake": "2026 cycle: EHU's own apply page states 'student applications are now open until Friday 13 March 2026.' A third-party guide cites a slightly different date (12 March 2026) for the general EMIMEP cycle — sources disagree by one day. Next full cycle (2027 intake) is reported by a third-party guide to open November 2026 with a March 2027 deadline, not yet officially published.",
        "deadline_notes": "Erasmus Mundus scholarship application round for an earlier cycle was noted on the consortium site as opening '18 November 2024' with no closing date shown — this reference is for a prior admissions cycle and should not be relied on for 2026/27.",
        "other_admission_notes": "Consortium: University of Limoges (coordinator), University of Brescia, UPV/EHU, Friedrich Schiller University Jena. Year 1: Limoges (semester) and Brescia (semester); Year 2: specialization at a chosen partner university including UPV/EHU (Bilbao). Students also attend a 'Research and Industrial Week' in Cluj (Year 1) and the 'European Microwave Week' at the start of Year 2."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://ehu.eus/en/web/master/master-industry-microwave-electronics-photonics/accreditation (UPV/EHU partner page); consortium site erasmus-mundus.emimep.eu",
        "sources_consulted": [
          "https://ehu.eus/en/web/master/master-industry-microwave-electronics-photonics/accreditation",
          "https://www.ehu.eus/en/web/zientzia-teknologia-fakultatea/erasmus-mundus-apply",
          "https://www.erasmus-master.emimeo.eu/",
          "https://www.heysuccess.com/opportunity/European-Master-for-Industry-in-Microwave-Electronics-and-Photonics-(EMIMEP)-52702 (third-party, not an official source, used only for triangulation)",
          "https://opportunityinside.com/scholarships/erasmus-mundus-emimep-scholarship-eu-2027.html (third-party, not an official source, used only for triangulation)"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "International admission confirmed via: 'EMIMEP invites students from around the world to gain experience at multiple European institutions.' Official BOE notice (Oct 2025, BOE-A-2025-19782) lists UPV/EHU as a participating university for this degree. Program is the renamed/relaunched version of the older Erasmus Mundus EMIMEO (Innovative Microwave Electronics and Optics) that UPV/EHU's Dept. of Electricity and Electronics previously promoted. UPV/EHU's own program page did not itself state the teaching language explicitly, so this entry relies on the consortium/partner-university page language; recommend a final direct check of erasmus-mundus.emimep.eu (WebFetch blocked by a certificate hostname mismatch) before treating as fully official-site-confirmed."
    },
    {
      "id": "es-harbour-space-university-institute-of-technology-master-s-in-computer-science-23",
      "country": "Spain",
      "title": "Master's in Computer Science",
      "university": "Harbour.Space University (Institute of Technology)",
      "department": "Computer Science",
      "location": "Barcelona",
      "tier": "B",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement not published/found on official page.",
      "overview": {
        "degree_type": "MSc (private, unaccredited as Spanish official title)",
        "ruct_registered": false,
        "duration": "Not explicitly stated as a total length; curriculum delivered in 3-week immersive modules rather than semesters. Degree is also offered at MEng level per the main harbour.space site.",
        "language": "English",
        "language_confirmation": "Program listed with 'Language' field = 'English' on official harbour.space/join.harbour.space pages; Mastersportal aggregator also lists 'Taught in English'."
      },
      "course_details": {
        "curriculum_notes": "Core modules listed on the official programme page: Software Engineering (Java/Spring), Mobile Development, Modern Web Application, Modern Software Architectures, Distributed Systems & Clouds, Computer Networking. Teaching emphasis described as 80% practice / 20% theory, delivered in 3-week immersive modules.",
        "vlsi_rtl_relevance_notes": "No VLSI/RTL/embedded/microelectronics content found — curriculum is software/web/distributed-systems focused, not hardware design. Low relevance to a VLSI/RTL background beyond general CS/software skills."
      },
      "costs_funding": {
        "tuition": "Spanish citizens: €11,450 (50% off standard €22,900) if applying before 31 May 2026 for Sept 2026 start — discount tier, not a distinct EU-wide rate. EUR/year (EU/EEA)",
        "tuition_non_eu": "International students: €17,125 (25% off standard €22,900) under the same early-application discount; standard/full tuition is €22,900 — currency not explicitly marked on the page but consistent with EUR elsewhere on the site.",
        "tuition_notes": "Figures are per the Computer Science programme page; 'per year' framing is inferred since Harbour.Space does not structure in standard academic years — treat €22,900 as the base full-program/tier price referenced, not confirmed as strictly 'per year.' Early-bird discount deadline: 31 May 2026 for a September 2026 start."
      },
      "requirements_registration": {
        "grade_requirement": "Not found — no GPA/grade threshold stated on official pages reached.",
        "prior_degree": "Not explicitly stated for the Master's tier; the general admissions FAQ says technical programs (CS, Data Science, Front-end Development, Cyber Security) require 'a solid foundational knowledge of mathematics, statistics, and programming' and admission follows a 'holistic review' of preparedness and career potential, plus a Maths and Computer Science entrance test (per third-party Mastersportal listing, not confirmed on an official page this session) and a CV/diploma submission.",
        "entrance_exam": "A 'Maths and Computer Science Test' is referenced by a third-party aggregator (Mastersportal) as part of the process; not confirmed directly on an official Harbour.Space page this session.",
        "credential_recognition_note": "Not found",
        "english_certificate_required": "Not found on official pages — no IELTS/TOEFL score was listed. A third-party Mastersportal summary explicitly states 'We are not aware of any English requirements for this programme,' which is a third-party inference, not an official confirmation of 'no requirement.'",
        "ielts": "Not found",
        "toefl": "Not found",
        "cambridge": "Not found",
        "english_exemptions": "Not found",
        "deadline_main_intake": "Recommended start dates: 7 September 2026 (Barcelona) or 17 August 2026 (Bangkok campus). Rolling admission — 'you can start every three weeks throughout the year.'",
        "deadline_notes": "Discounted tuition requires applying before 31 May 2026.",
        "other_admission_notes": "Official process description (from join.harbour.space): submit application, attend an interview, receive a decision 'within a week.'"
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://join.harbour.space/programmes/computer-science",
        "sources_consulted": [
          "https://join.harbour.space/programmes/computer-science",
          "https://harbour.space/admissions",
          "https://harbour.space/faq/what-admissions-criteria-does-harbourspace-use-to-select-its-students (referenced via search, not independently refetched)",
          "https://www.mastersportal.com/studies/288800/computer-science.html (third-party aggregator, used only for triangulation)"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Official page confirms discounted tuition tiers for 'Spanish and Thai nationals, as well as international students' implying international admission is standard. IMPORTANT CAVEAT: Wikipedia describes Harbour.Space as an unaccredited private institution that in 2025 transitioned from 'university' to 'Institute of Technology' status - it is NOT RUCT-registered as an official Spanish Máster Universitario. Include only if private/unaccredited credentials are acceptable to the research scope. Not purely Electrical/Electronics but Computer Science - borderline Tier B/C for this project's EE focus."
    },
    {
      "id": "es-harbour-space-university-institute-of-technology-master-s-in-data-science-24",
      "country": "Spain",
      "title": "Master's in Data Science",
      "university": "Harbour.Space University (Institute of Technology)",
      "department": "Data Science",
      "location": "Barcelona",
      "tier": "C",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement not published/found on official page.",
      "overview": {
        "degree_type": "MSc (private, unaccredited as Spanish official title)",
        "ruct_registered": false,
        "duration": "Not found as a total length. Original given URL returned HTTP 404 during this session; information below is drawn from the institution's general/parent site (harbour.space) describing the Data Science track generally, not this specific program page.",
        "language": "English",
        "language_confirmation": "Listed as English-taught on official Harbour.Space program pages and aggregators (Mastersportal: 'Taught in English')."
      },
      "course_details": {
        "curriculum_notes": "Not found — program-specific curriculum could not be retrieved since the given URL 404'd. General site only names 'Data Science' as a track ('turning complex data into decisions and products') without a module list.",
        "vlsi_rtl_relevance_notes": "Not found / likely low relevance — Data Science is a software/analytics track, not hardware-focused, consistent with the institution's general CS/Data Science/Cyber Security software-oriented curricula structure seen on the Computer Science program."
      },
      "costs_funding": {
        "tuition": "Not found — the specific program page 404'd; general site shows only an 'Early Bird' promotion banner advertising €5,000 savings with no base figure disclosed. EUR/year (EU/EEA)",
        "tuition_non_eu": "Not found",
        "tuition_notes": "Could not confirm whether Data Science tuition matches the Computer Science program's referenced €22,900 base / discounted tiers (€17,125 international, €11,450 Spanish) since the Data Science page itself was unreachable (404)."
      },
      "requirements_registration": {
        "grade_requirement": "Not found",
        "prior_degree": "Not program-specific; general institutional FAQ states technical programmes require solid foundational math/stats/programming knowledge, with holistic review of applicant preparedness.",
        "entrance_exam": "Not found (no program-specific confirmation; CS-track third-party listings mention a Maths/CS test, unconfirmed for Data Science specifically)",
        "credential_recognition_note": "Not found",
        "english_certificate_required": "Not found",
        "ielts": "Not found",
        "toefl": "Not found",
        "cambridge": "Not found",
        "english_exemptions": "Not found",
        "deadline_main_intake": "Not found specific to Data Science. General site references upcoming Barcelona/Bangkok course sessions (e.g., 9 Nov–18 Dec 2026) and an Early Bird promotion, but no Data Science-specific intake date was retrieved.",
        "deadline_notes": "Recommend re-attempting the original URL or searching Harbour.Space's current site map, since the given official_url is dead (404).",
        "other_admission_notes": "The specific URL given (harbour.space/barcelona/master/data-science) returned a 404 Not Found when fetched directly; could not retrieve program-specific admission text. General harbour.space site confirms a 'Data Science' track exists at MEng/MSc/BEng/BSc levels."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://harbour.space/barcelona/master/data-science",
        "sources_consulted": [
          "https://harbour.space/barcelona/master/data-science (returned HTTP 404)",
          "https://harbour.space/admissions",
          "https://join.harbour.space/programmes/computer-science (used for institutional context only)"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Same institutional caveat as Computer Science entry above - not RUCT registered, private/unaccredited. Not EE-specific; included for completeness as it was explicitly requested to check carefully. Likely too tangential (data science, not EE) to be a strong match for this project."
    },
    {
      "id": "es-universitat-oberta-de-catalunya-uoc-joint-with-universitat-rovira-i-virgili-urv-university-master-s-degree-in-computational-engineering-and-mathematics-m-ster-universitari-en-enginyeria-computacional-i-matem-tica-25",
      "country": "Spain",
      "title": "University Master's Degree in Computational Engineering and Mathematics (Màster Universitari en Enginyeria Computacional i Matemàtica)",
      "university": "Universitat Oberta de Catalunya (UOC) / joint with Universitat Rovira i Virgili (URV)",
      "department": "Computational Engineering / Mathematics",
      "location": "Online (Barcelona/Tarragona administration)",
      "tier": "C",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement not published/found on official page.",
      "overview": {
        "degree_type": "Máster Universitario (official, interuniversity online)",
        "ruct_registered": "unknown",
        "duration": "60 ECTS / 1 academic year full-time (per third-party aggregator breakdown: 18 ECTS compulsory + 24 ECTS electives + 18 ECTS final master's project = 60 ECTS); delivered fully online.",
        "language": "English",
        "language_confirmation": "Official UOC program page lists 'Language: English'. Student guide (slideshare, EIMT-UOC) states: 'the vehicular language for teaching the master is English.'"
      },
      "course_details": {
        "curriculum_notes": "Per third-party aggregator breakdown: 18 ECTS compulsory core, 24 ECTS electives, 18 ECTS final master's project (60 ECTS total). Subject area: computational engineering and applied/computational mathematics (modelling, numerical methods, computational methods) rather than an EE/hardware program.",
        "vlsi_rtl_relevance_notes": "Low direct relevance to VLSI/RTL/embedded/microelectronics — this is a computational/applied-mathematics and general computational-engineering program, not a hardware design degree. No microelectronics-specific coursework was found."
      },
      "costs_funding": {
        "tuition": "Not found — direct program page could not be refetched this session (redirected to generic https://www.uoc.edu/en/studies). Third-party listings (yaq.es, educaweb.com) show only 'Request info' / 'Consultar precio' placeholders, no figure. EUR/year (EU/EEA)",
        "tuition_non_eu": "Not found, though the program was previously noted (in the candidates file) to show distinct international/non-EU fee tiers on its official page — specific amounts were not re-extracted this session.",
        "tuition_notes": "Recommend a fresh direct fetch of the official UOC program URL (it 301-redirected to the generic studies homepage during this session rather than serving the program page) to recover exact tuition figures."
      },
      "requirements_registration": {
        "grade_requirement": "Not found — no numeric GPA/grade threshold located.",
        "prior_degree": "Open to graduates in computer engineering, mathematics, telecommunications engineering, industrial engineering, statistics, or physics (per earlier-confirmed official UOC page text already in the candidates file; not independently re-extracted in full this session due to 301 redirect/404 issues on direct refetch).",
        "entrance_exam": "Not found",
        "credential_recognition_note": "Not found — non-EU credential legalization process not located on reachable pages.",
        "english_certificate_required": "No formal certificate requirement found. A 2021/22 student guide (EIMT-UOC, via SlideShare) states 'the vehicular language for teaching the master is English' and that students must be able to read scientific-technical texts in English since some materials exist only in English — but this is informal guidance, not a stated IELTS/TOEFL/Cambridge threshold.",
        "ielts": "Not found",
        "toefl": "Not found",
        "cambridge": "Not found",
        "english_exemptions": "Not found",
        "deadline_main_intake": "Not found this session.",
        "deadline_notes": "Not found this session; prior candidate-file note referenced the program having distinct international fee tiers implying an established admissions calendar, but exact dates were not retrieved.",
        "other_admission_notes": "URV is the degree-granting/coordinating university; UOC delivers the online teaching (joint interuniversity program)."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.uoc.edu/en/studies/masters/masters-degree-computational-mathematical-engineering",
        "sources_consulted": [
          "https://www.uoc.edu/en/studies/masters/masters-degree-computational-mathematical-engineering (301-redirected to https://www.uoc.edu/en/studies; program-specific content not recovered)",
          "https://studies.uoc.edu/en/university-masters-degrees/computational-mathematical-engineering (301-redirected to https://www.uoc.edu/en/studies)",
          "https://es.slideshare.net/eimtuoc/students-guide-mec-mat20212022 (student guide, third-party hosted, referenced via search for English-language note)"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Fully online program; URV is the degree-granting/coordinating university, UOC delivers teaching. Open to graduates in computer engineering, mathematics, telecommunications engineering, industrial engineering, statistics, physics. Not EE-specific (general computational engineering) - Tier C relevance at best. International/non-EU fee tiers shown on page implying international admission."
    },
    {
      "id": "es-universitat-rovira-i-virgili-urv-university-master-s-degree-in-computer-security-engineering-and-artificial-intelligence-m-ster-universitari-en-enginyeria-de-la-seguretat-inform-tica-i-intel-lig-ncia-artificial-26",
      "country": "Spain",
      "title": "University Master's Degree in Computer Security Engineering and Artificial Intelligence (Màster Universitari en Enginyeria de la Seguretat Informàtica i Intel·ligència Artificial)",
      "university": "Universitat Rovira i Virgili (URV)",
      "department": "School of Engineering (URV)",
      "location": "Tarragona",
      "tier": "C",
      "gpa_fit": "unknown",
      "gpa_fit_note": "Grade requirement not published/found on official page.",
      "overview": {
        "degree_type": "Máster Universitario (official)",
        "ruct_registered": "unknown",
        "duration": "60 ECTS, one academic year; 10th edition runs 22/09/2026 to 16/06/2027. Offered in both face-to-face and online modes (40 total places, 20 per mode).",
        "language": "English",
        "language_confirmation": "Official URV program page explicitly states: 'Language of instruction: English.'"
      },
      "course_details": {
        "curriculum_notes": "Covers information production/security, application security, machine learning, modelling, and problem-solving. Learning outcomes: designing safe intelligent systems, protecting information/user privacy, leading AI-based ICT projects, and conducting research in computer security and AI. No further page-level module breakdown was retrieved this session.",
        "vlsi_rtl_relevance_notes": "Low direct relevance to VLSI/RTL/microelectronics — this is a cybersecurity + AI engineering program (software/systems security), not a hardware-design degree. Could be tangentially relevant to hardware-security/security-IP roles but no embedded or hardware-specific coursework was found."
      },
      "costs_funding": {
        "tuition": "€1,308 (2026-27) for students from the EU, Iceland, Norway, Liechtenstein, Switzerland, Andorra, or Spanish residents. EUR/year (EU/EEA)",
        "tuition_non_eu": "€2,913 (2026-27) for all other (non-EU) students, plus a one-time academic tax of €218.15 on first enrolment for holders of non-EU prior degrees.",
        "tuition_notes": "Figures are official, confirmed on the URV program page directly."
      },
      "requirements_registration": {
        "grade_requirement": "Not found on the main program page — page explicitly directs applicants to a separate 'Admission' section of the program site, which was not independently reached this session.",
        "prior_degree": "Not stated in detail on the fetched page beyond general implication of a related engineering/CS background; see program's dedicated Admission section (not reached).",
        "entrance_exam": "Not found",
        "credential_recognition_note": "Not explicitly covered. Page states non-EU degree holders pay a one-time academic tax of €218.15 on first enrolment, which implies a credential-recognition/verification administrative step exists for non-EU applicants, but no explicit legalization/homologation process was described. Contact given: Student Office, +34 977 77 99 44.",
        "english_certificate_required": "Not stated — page only confirms 'Language of instruction: English' without a certificate/score requirement.",
        "ielts": "Not found",
        "toefl": "Not found",
        "cambridge": "Not found",
        "english_exemptions": "Not found",
        "deadline_main_intake": "Current cohort (10th edition) runs 22/09/2026–16/06/2027. Pre-registration for the 2027-28 academic course opens 'at the beginning of March 2027' — implying the 2026-27 cohort's own application window has already closed/was earlier in 2026.",
        "deadline_notes": "No explicit historical deadline date for the current (2026-27) cohort was found; only the next cycle's pre-registration opening date is given.",
        "other_admission_notes": "Pre-registration for the following (2027-28) academic course opens beginning of March 2027."
      },
      "services": {},
      "about_university": {},
      "official_website_data": {
        "official_source_url": "https://www.urv.cat/en/studies/master/courses/computer-security-engineering/",
        "sources_consulted": [
          "https://www.urv.cat/en/studies/master/courses/computer-security-engineering/"
        ],
        "scraped_on": "2026-11-08"
      },
      "ranking": {
        "qs_world_rank": "Not researched yet",
        "the_world_rank": "Not researched yet"
      },
      "candidate_notes_source": "Official page confirms English instruction explicitly ('Language of instruction: English') but does NOT explicitly confirm international-student admission on the page itself. Mentions non-EU degree-holders pay a one-time academic tax of €218.15 on first enrollment, which suggests non-EU/international students are accepted, but this is inferential, not an explicit admission statement. Per instruction, international_students_confirmed left as false/unconfirmed rather than assumed true -- recommend follow-up check of URV's 'International students' section before final inclusion. Program is computer/cybersecurity engineering, not core EE -- Tier C relevance at best."
    }
  ],
  "aps_info": null,
  "gpa_conversion_info": {
    "candidate_gpa": "2.83/4.0 (NSU, EEE)",
    "note": "Spanish universities grade on a 0-10 scale. A rough, unofficial 4.0->10 conversion (~7.0/10) was used only to flag an approximate fit category per program; this is NOT an official equivalency and should be verified with each university's own international-admissions office before relying on it."
  },
  "funding_options": []
};
