# AGENT.md — Study Abroad (Germany) Project Context

> এই ফাইলটা পরবর্তী যেকোনো AI এজেন্ট (Claude, Gemini, GPT, ইত্যাদি) এর জন্য — যাতে ও এই প্রজেক্টের পুরো কনটেক্সট, এখন পর্যন্ত কী করা হয়েছে, কী বাকি আছে, এবং কী কী সমস্যা/বাধা এসেছিল সেগুলো বুঝে কাজ চালিয়ে যেতে পারে।

## ⚠️ সিকিউরিটি — আগে এটা পড়ো
- **কোনো GitHub Personal Access Token, password, বা API key এই ফাইলে বা রিপোর কোনো ফাইলে প্লেইনটেক্সটে রাখা হয়নি, এবং রাখা উচিত না।** এই রিপো (`https://github.com/FkShahed/Study_Abroad`) **পাবলিক**। পাবলিক রিপোতে secret কমিট করলে GitHub-এর secret scanning সেটা অটো-রিভোক করে দেয়, এবং তার আগেই যে কেউ সেটা ব্যবহার করতে পারে।
- এই সেশনে ব্যবহারকারী একটা GitHub token (`ghp_...`) চ্যাটে শেয়ার করেছিলেন push/Pages-enable করার জন্য। সেটা শুধু সেই নির্দিষ্ট git push আর GitHub API কল-এ ব্যবহার করা হয়েছে, কোথাও সেভ করা হয়নি (`.git/config`-এ remote URL-এও না, যেহেতু one-off inline URL হিসেবে ব্যবহার হয়েছিল)।
- **যদি তুমি (পরবর্তী এজেন্ট) এর পর কখনো আবার push করার দরকার হয়, ব্যবহারকারীকে জিজ্ঞেস করো নতুন token/credential setup করতে — পুরনো টোকেনটা অলরেডি একবার চ্যাট হিস্ট্রিতে এক্সপোজড হয়ে গেছে বলে ধরে নাও এটা অনিরাপদ, ব্যবহারকারীকে সেটা রিভোক করে নতুন একটা বানাতে বলো।**

## 🎯 প্রজেক্টের উদ্দেশ্য
ব্যবহারকারী (Fazlul Karim Shahed) বিদেশে (প্রাথমিকভাবে **জার্মানি**, পরে কানাডাও) Master's করতে যেতে চান RTL Design & Verification / VLSI / সেমিকন্ডাক্টর ফিল্ডে ক্যারিয়ার গড়ার লক্ষ্যে। লক্ষ্য কোম্পানি: Qualcomm, Intel, AMD, NVIDIA-এর মতো বড় সেমিকন্ডাক্টর কোম্পানি।

কাজ হলো: সব ইউনিভার্সিটি/প্রোগ্রাম/রিকোয়ারমেন্ট/ডেডলাইন/টিউশন রিসার্চ করে একটা সহজে ব্রাউজ করার মতো, ফিল্টারেবল ওয়েবসাইটে সাজিয়ে দেওয়া, যাতে ব্যবহারকারী নিজে ঘাঁটাঘাঁটি না করেও সবকিছু এক জায়গায় দেখতে পারেন।

## 👤 ব্যবহারকারীর প্রোফাইল (সবসময় এই কনটেক্সট মাথায় রাখবে)
- BSc in Electrical & Electronic Engineering (EEE), **North South University, Bangladesh**
- **CGPA 2.8/4.0** (তুলনামূলক কম — এটা GPA-gated প্রোগ্রামগুলোতে একটা বাস্তব বাধা)
- **২ বছরের জব অভিজ্ঞতা** — Junior RTL Design & Verification Engineer, বাংলাদেশের একটা সেমিকন্ডাক্টর/VLSI কোম্পানিতে। কাজ: UVM-based verification, FPGA prototyping, ছোটখাটো RTL design।
- ভবিষ্যৎ প্রস্তুতি (এখনো হাতে নেই, in-progress): IELTS (সর্বোচ্চ সম্ভাব্য ~6.5), একটা রিসার্চ পেপার (৩য়/৪র্থ/৫ম author হিসেবে, first author না)
- GRE নেই (ধরে নেওয়া হয়েছে লাগবে না, এবং জার্মানিতে সাধারণত GRE লাগে না)
- বাজেট-সচেতন — tuition-free/low-tuition পাবলিক ইউনিভার্সিটি priority, তবে কিছু fee-charging/private অপশনও তুলনার জন্য রাখা হয়েছে।
- ইমেইল: fazlulkarimshahed14@gmail.com (শুধু attribution/identification-এর জন্য ব্যবহার করবে, কোনো থার্ড-পার্টি সার্ভিসে পাঠাবে না যদি না স্পষ্টভাবে বলা হয়)
- GitHub: `FkShahed` (রিপো owner, যদিও এই মেশিনের local git credential অন্য অ্যাকাউন্টের — `Fazlul-Karim-Shahed` — ছিল, যেটার কারণে প্রথমবার push করতে গিয়ে 403 Permission denied এসেছিল। পরে ব্যবহারকারী নিজে token দিয়ে push করিয়েছেন।)

## ✅ এখন পর্যন্ত যা করা হয়েছে
1. **ডিপ রিসার্চ** — একটা subagent (general-purpose) দিয়ে ~17+ WebSearch query চালিয়ে ১৯টা জার্মান মাস্টার্স প্রোগ্রাম-এর তথ্য সংগ্রহ করা হয়েছে (TUM, RWTH Aachen, Saarland, Stuttgart, KIT, TU Dresden, TUHH, RPTU, TU Chemnitz, RUB, TU Ilmenau, Ulm, Freiburg, RWU, Reutlingen, Furtwangen, Esslingen, TU Berlin, FAU Erlangen, Jacobs Bremen)। প্রতিটার জন্য: tuition, deadline, IELTS/TOEFL, GPA fit assessment, APS/uni-assist তথ্য, prerequisites, source URL।
2. **ওয়েবসাইট বানানো হয়েছে** (স্ট্যাটিক HTML+JS, কোনো backend/build step নেই):
   - `index.html` — পুরো UI, dark/light theme toggle, সার্চ/ফিল্টার/সর্ট লজিক
   - `data.js` — সব প্রোগ্রাম ডাটা + APS/GPA conversion/uni-assist/funding info, একটা গ্লোবাল `DATA` অবজেক্ট হিসেবে
   - Filter options: সার্চ বক্স (university/program নাম), Tier (A/B/C), GPA Fit (good/moderate/borderline/risky/weak/unknown), Tuition category (free/BW-risk/private), Sort (tier/fit/name)
3. **GitHub-এ পুশ করা হয়েছে এবং GitHub Pages enable করা হয়েছে।**
   - রিপো: `https://github.com/FkShahed/Study_Abroad`
   - লাইভ লিংক: **https://fkshahed.github.io/Study_Abroad/**
   - রিপোতে আগে থেকে একটা `README.md` ছিল (ব্যবহারকারী GitHub-এ রিপো বানানোর সময় অটো-জেনারেটেড), merge করে নেওয়া হয়েছে (`--allow-unrelated-histories`)।

## 🧱 কাজ করার পদ্ধতি (future agent যেন একই প্যাটার্ন ফলো করে)
- **গভীর রিসার্চ দরকার হলে** একটা subagent/fork-কে পাঠানো ভালো, যাতে raw web search output মূল কনভার্সেশন কনটেক্সট ভরিয়ে না ফেলে। Subagent-কে structured JSON আউটপুট দিতে বলা হয়েছিল (programs array + info sections), যাতে সরাসরি `data.js`-এ বসানো যায়।
- **"unverified" ডাটা পরিষ্কারভাবে ট্যাগ করা হয়েছে** — অনেক deadline/GPA cutoff/IELTS figure অফিসিয়াল সোর্স থেকে কনফার্ম করা যায়নি (সময়/স্কোপ সীমাবদ্ধতার কারণে), এগুলো "Not found - check official page" বা "(unverified)" হিসেবে মার্ক করা। **এই প্যাটার্ন বজায় রাখবে — কখনো অনুমান করা তথ্যকে কনফার্মড হিসেবে দেখাবে না।**
- **ওয়েবসাইট আপডেট করার নিয়ম:** `data.js`-এ নতুন প্রোগ্রাম/তথ্য যোগ করলে `index.html` পরিবর্তন করার দরকার নেই (রেন্ডারিং লজিক জেনেরিক, `DATA.programs` array-এর উপর কাজ করে)। নতুন প্রোগ্রাম অবজেক্টে অবশ্যই নিচের সব key থাকতে হবে, নাহলে কার্ডে "undefined" দেখাবে: `university, program_name, department, degree_type, duration, tier(A/B/C), language, tuition, tuition_notes, deadline_winter, deadline_summer, min_gpa, gpa_fit(good/moderate/borderline/risky/weak/unknown/unclear), gpa_fit_note, ielts, toefl, german_req, gre, work_exp, aps, prereqs, note, source`.
- **Git push workflow এই মেশিনে সমস্যাযুক্ত:** লোকাল git-এর ডিফল্ট credential helper অন্য GitHub অ্যাকাউন্টের (`Fazlul-Karim-Shahed`) সাথে বাঁধা, যেটা `FkShahed` রিপোতে push করার অনুমতি রাখে না। প্রতিবার push করার আগে এটা চেক করো:
  ```
  git push  # যদি 403 "Permission denied to Fazlul-Karim-Shahed" আসে
  ```
  এরকম হলে ব্যবহারকারীকে জিজ্ঞেস করো: (ক) নতুন PAT token দিতে, অথবা (খ) Collaborator access দিতে, অথবা (গ) সঠিক অ্যাকাউন্টে credential helper পরিবর্তন করতে। Token দিয়ে push করলে **remote URL-এ inline বসিয়ে ব্যবহার করবে, কখনো `git remote add`/`set-url`-এ সেভ করবে না**, যাতে `.git/config`-এ প্লেইনটেক্সট টোকেন না থেকে যায়।

## ⚠️ বাধা/সমস্যা যা ফেস করা হয়েছে
1. **LinkedIn fetch ব্লকড** — `WebFetch` দিয়ে ব্যবহারকারীর LinkedIn প্রোফাইল পড়ার চেষ্টা করা হয়েছিল (HTTP 999, auth-wall)। ব্যবহারকারীর পার্সোনাল ওয়েবসাইট লিংক এখনো চাওয়া হয়েছে কিন্তু পাওয়া যায়নি — **future agent-এর উচিত এটা জিজ্ঞেস করে নিয়ে fetch করে প্রোফাইল ডিটেইল (প্রজেক্ট, স্কিল) যোগ করা**, যা SOP লেখার সময়ও কাজে লাগবে।
2. **GitHub অ্যাকাউন্ট mismatch** — উপরে বর্ণিত, 403 এরর, token দিয়ে সমাধান করা হয়েছে।
3. **Remote history conflict** — প্রথম push-এ reject হয়েছিল কারণ GitHub repo বানানোর সময় auto-generated `README.md` ছিল যা লোকাল রিপোর সাথে unrelated history। সমাধান: `git fetch` + `git merge --allow-unrelated-histories` তারপর push।
4. **অনেক official প্রোগ্রাম পেজে exact figures (IELTS cutoff, GPA threshold, deadline) প্রকাশিত নেই বা সহজে পাওয়া যায়নি** — subagent ১৭+ সার্চ করেও Reutlingen/Furtwangen/Esslingen-এর exact VLSI-relevant program title confirm করতে পারেনি, এবং TU Berlin-এর Master's-level GPA requirement পায়নি। এগুলো "needs follow-up" হিসেবে ফ্ল্যাগ করা আছে `data.js`-এ।
5. **বাংলাদেশের জন্য APS (Akademische Prüfstelle) সার্টিফিকেট লাগবে কিনা — এটা এখনো unconfirmed/conflicting।** এটা পুরো ডকুমেন্ট-প্রস্তুতির টাইমলাইন বদলে দেয় বলে **এটা সবচেয়ে উচ্চ-priority ভেরিফিকেশন আইটেম** যেকোনো future agent-এর জন্য। ভেরিফাই করার সোর্স: জার্মান দূতাবাস ঢাকা ওয়েবসাইট, অথবা aps-india.de-এর official country list।

## 📋 বাকি কাজ (future agent/ব্যবহারকারী যা করতে পারে)
- [ ] APS Bangladesh requirement নিশ্চিতভাবে ভেরিফাই করা
- [ ] থিন ডাটাযুক্ত প্রোগ্রামগুলোর (Reutlingen, Furtwangen, Esslingen, TU Berlin, Freiburg) জন্য ফলো-আপ রিসার্চ করে অফিসিয়াল পেজ থেকে exact figures বের করা
- [ ] ব্যবহারকারীর পার্সোনাল ওয়েবসাইট/প্রজেক্ট ডিটেইল নিয়ে প্রোফাইল সেকশন যোগ করা (SOP-তে কাজে লাগবে)
- [ ] কানাডার জন্য একই রকম রিসার্চ + ওয়েবসাইটে একটা দ্বিতীয় ট্যাব/সেকশন যোগ করা (ব্যবহারকারী বলেছিলেন জার্মানি + কানাডা দুটোই টার্গেট, আপাতত শুধু জার্মানি করা হয়েছে)
- [ ] SOP (Statement of Purpose) খসড়া — কাজের অভিজ্ঞতা (UVM/RTL/FPGA) এবং ক্যারিয়ার গোল-কে কীভাবে ফ্রেম করা হবে তার একটা টেমপ্লেট/গাইড
- [ ] DAAD স্কলারশিপ ডাটাবেস সরাসরি সার্চ করে Bangladesh+Engineering+Master's ফিল্টার দিয়ে আরও আপ-টু-ডেট ফান্ডিং অপশন বের করা (research pass-এ এটা শুধু উচ্চ-স্তরের নোট আকারে রাখা হয়েছিল, dedicated সার্চ করা হয়নি)
- [ ] uni-assist বনাম direct-portal — প্রতিটা শর্টলিস্টেড প্রোগ্রামের জন্য নির্দিষ্টভাবে কনফার্ম করা কোনটা কোন পদ্ধতিতে অ্যাপ্লাই করে

## 📁 ফাইল স্ট্রাকচার
```
Study_Abroad/
├── index.html      # মূল ওয়েবসাইট (UI + filter/search logic)
├── data.js         # সব প্রোগ্রাম ডাটা (global `DATA` object)
└── AGENT.md         # এই ফাইল
```
লাইভ: https://fkshahed.github.io/Study_Abroad/
রিপো: https://github.com/FkShahed/Study_Abroad
