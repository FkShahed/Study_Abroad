const fs = require('fs');
const db = require('./database.js');

// 1. TU Chemnitz - Design and Test for Integrated Circuits (prog_9622)
const chemnitz_ic = db.programs.find(p => p.id === 'prog_9622');
if (chemnitz_ic) {
  chemnitz_ic.university_deep_info = {
    chair_leadership: "Chair of Circuit and System Design (Prof. Dr. Ulrich Heinkel)",
    research_partners: "Infineon Technologies, Elmos Semiconductor SE, Fraunhofer ENAS",
    labs_infrastructure: "Applied Circuit Design and Testing Lab, Layout of ICs and PCBs Lab, EDA Verification Suites",
    specialized_curriculum_modules: [
      "Design of Digital Systems (RTL / VHDL / Verilog)",
      "Design of Heterogeneous Systems",
      "Test of Digital and Mixed-Signal Circuits",
      "Verification of Digital Systems (SystemVerilog/UVM focus)",
      "Elements of Integrated Circuits & Transistor-Level IC Design",
      "Smart Sensor Systems & Reliability of Nano Systems"
    ],
    career_ecosystem: "Direct talent pipeline to Saxony semiconductor cluster (Infineon Dresden, GlobalFoundries, Bosch, NXP). Perfect alignment with junior RTL/UVM verification engineers.",
    official_syllabus_url: "https://www.tu-chemnitz.de/etit/studium/studiengaenge/mDT"
  };
  console.log('Enriched deep info for Chemnitz prog_9622');
}

// 2. TU Dresden - Nanoelectronic Systems (prog_4257)
const dresden_nes = db.programs.find(p => p.id === 'prog_4257');
if (dresden_nes) {
  dresden_nes.university_deep_info = {
    chair_leadership: "Chair of Nanoelectronics (Prof. Dr.-Ing. Thomas Mikolajick, Scientific Director of NaMLab)",
    research_partners: "NaMLab gGmbH, Fraunhofer IPMS, Fraunhofer IZM, Silicon Saxony Cluster",
    labs_infrastructure: "400 m² state-of-the-art Cleanroom Laboratory, Wafer-level characterization facilities, 3D Integration Lab",
    specialized_curriculum_modules: [
      "Semiconductor Technology & Processing",
      "Integrated Analog Circuit Design",
      "Hardware/Software Co-Design",
      "Principles of Dependable Systems",
      "Memory Technologies (Ferroelectric & Non-volatile memories)",
      "Estimation and Detection in Nano-circuits"
    ],
    career_ecosystem: "Center of 'Silicon Saxony' — Europe's largest microelectronics cluster with Infineon, Bosch, GlobalFoundries, and TSMC's upcoming European foundry (ESMC). Outstanding job opportunities for chip design & RTL verification engineers.",
    official_syllabus_url: "https://tu-dresden.de/ing/elektrotechnik/studium/studieren-an-der-fakultaet/studiengaenge/masters-programme-nanoelectronic-systems"
  };
  console.log('Enriched deep info for Dresden prog_4257');
}

// 3. BTU Cottbus - Micro- and Nanoelectronics (prog_9676)
const btu_mne = db.programs.find(p => p.id === 'prog_9676');
if (btu_mne) {
  btu_mne.university_deep_info = {
    chair_leadership: "Joint faculty with IHP – Leibniz Institute for High Performance Microelectronics",
    research_partners: "IHP Frankfurt (Oder), Ferdinand-Braun-Institut (FBH), Fraunhofer IPMS",
    labs_infrastructure: "Direct access to IHP advanced Cleanroom Pilot Line (0.13 µm and 0.25 µm BiCMOS technology), RF characterization suites",
    specialized_curriculum_modules: [
      "Integrated Circuit Design (Analog, Digital & Mixed-Signal)",
      "Semiconductor Technology & Advanced Device Physics",
      "High-Frequency Circuit Design & Radar Systems",
      "Assembly and Packaging Technology",
      "Wireless Sensor Networks and Neural Architectures"
    ],
    career_ecosystem: "Seamless transition into semiconductor R&D at Leibniz IHP, Fraunhofer institutes, and chip companies across Berlin-Brandenburg and Saxony.",
    official_syllabus_url: "https://www.b-tu.de/en/micro-nano-electronics-ms/"
  };
  console.log('Enriched deep info for BTU Cottbus prog_9676');
}

const fileContent = 'const DATABASE = ' + JSON.stringify(db, null, 2) + ';\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = DATABASE;\n}\n';
fs.writeFileSync('database.js', fileContent, 'utf8');
console.log('Successfully written deep university details into database.js');

