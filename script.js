/**
 * Dr. Pouria Mombeni - Academic & Executive Portfolio
 * Client-Side JavaScript: i18n (FA/EN), Active Navigation, Scroll Effects
 */

(function () {
  "use strict";

  // Translation Dictionaries
  const translations = {
    fa: {
      metaTitle: "پوریا ممبنی | دکترای اقتصاد و مدیریت صنعتی",
      metaDesc: "وب‌سایت شخصی و آکادمیک دکتر پوریا ممبنی. متخصص حوزه اقتصاد و مدیریت صنعتی، رتبه ۲ کنکور دکتری مدیریت صنعتی.",
      langBtn: "EN",
      nav: {
        name: "پوریا ممبنی",
        badge: "دکترای اقتصاد",
        home: "خانه",
        about: "درباره من",
        highlights: "سوابق علمی",
        expertise: "تخصص‌ها",
        timeline: "مسیر حرفه‌ای",
        research: "پژوهش‌ها",
        contact: "تماس",
        contactBtn: "ارتباط با من",
      },
      hero: {
        badge: "پروفایل آکادمیک و تخصصی",
        rank: "رتبه ۲ کنکور دکتری",
        name: "پوریا ممبنی",
        title: "دکترای اقتصاد | رتبه ۲ کنکور دکتری مدیریت صنعتی",
        honorTag: "رتبه ۲ آزمون سراسری دکتری تخصصی",
        honorText: "احراز رتبه دوم در آزمون ورودی دوره دکتری تخصصی سراسری مدیریت صنعتی",
        bio: "پژوهشگر حوزه اقتصاد و مدیریت صنعتی، متمرکز بر مدل‌سازی تحلیلی، بهبود سیستم‌های تصمیم‌گیری و ارتقای کارایی و بهره‌وری سازمانی از طریق رویکردهای کمی، داده‌محور و تصمیم‌گیری چندمعیاره.",
        ctaPrimary: "مشاهده سوابق علمی",
        ctaSecondary: "ارتباط با من",
        trust1: "دکترای اقتصاد تخصصی",
        trust2: "مدیریت صنعتی و تصمیم‌گیری کمی",
        trust3: "پژوهش‌های تحلیلی و داده‌محور",
        rankBadge: "رتبه ۲ دکتری",
        specTitle: "اقتصاد و مدیریت صنعتی",
      },
      about: {
        tag: "درباره من",
        title: "دیدگاه علمی، رویکرد تحلیلی و تخصص مدیریتی",
        lead: "تلفیق دانش اقتصاد کاربردی و روش‌های تصمیم‌گیری در مدیریت صنعتی، بستری کلیدی برای تحلیل عمیق چالش‌ها و بهبود بازدهی ساختارهای اقتصادی و سازمانی فراهم می‌آورد.",
        body: "پوریا ممبنی دارای مدرک دکتری در رشته اقتصاد و رتبه ۲ کنکور دکتری سراسری مدیریت صنعتی است. تمرکز علمی او بر تحلیل بازارهای اقتصادی، سنجش کارایی و بهره‌وری فرایندها، تحقیق در عملیات و فرموله‌سازی مسائل استراتژیک در مقیاس‌های خرد و کلان معطوف است.",
        noteTitle: "یادداشت ساختاری پروفایل:",
        note: "اطلاعات تکمیلی سوابق تدریس دانشگاهی، وابستگی‌های نهادی و مسئولیت‌های اجرایی پس از ارائه‌ی مستندات رسمی جایگزین این بخش خواهد شد.",
        stat1: "دکترای اقتصاد",
        stat2: "کنکور دکتری مدیریت صنعتی",
        stat3: "روش‌های تصمیم‌گیری و بهینه‌سازی",
      },
      highlights: {
        tag: "سوابق شاخص",
        title: "شاخص‌های علمی و پایه‌های تخصصی",
        desc: "عناوین و محورهای برجسته علمی و دانشگاهی",
        card1: {
          badge: "مقطع دکتری",
          title: "دکترای اقتصاد",
          text: "تخصص در تحلیل‌های اقتصادی، اقتصاد خرد و کلان، سیاست‌گذاری و ارزیابی اقتصادی سیستم‌ها و طرح‌ها.",
        },
        card2: {
          badge: "افتخار سراسری",
          title: "رتبه ۲ دکتری مدیریت صنعتی",
          text: "کسب رتبه ممتاز ۲ در آزمون سراسری دکتری تخصصی رشته مدیریت صنعتی کشور با تسلط بر مباحث کمی و کاربردی.",
        },
        card3: {
          badge: "حوزه تخصصی",
          title: "مدیریت صنعتی",
          text: "مسلط بر سیستم‌های تولید و عملیات، بهینه‌سازی فرایندها، تصمیم‌گیری استراتژیک و تحقیق در عملیات.",
        },
        card4: {
          badge: "رویکرد تحلیلی",
          title: "اقتصاد و تحلیل داده",
          text: "به‌کارگیری تکنیک‌های اقتصادسنجی و مدل‌های ریاضی برای پیش‌بینی و ارزیابی روندهای اقتصادی بازارها.",
        },
      },
      expertise: {
        tag: "تخصص‌ها",
        title: "زمینه‌های تخصصی و تحلیلی",
        desc: "تلاقی مبانی اقتصاد، تصمیم‌گیری کمی و مهندسی سیستم‌های مدیریتی",
        item1: {
          title: "اقتصاد و تحلیل اقتصادی",
          desc: "بررسی روندهای اقتصادی کلان و خرد، تحلیل رفتار بازارها، ساختار قیمت‌گذاری و ارزیابی اقتصادی پروژه‌ها و برنامه‌های توسعه‌ای.",
          b1: "اقتصاد کاربردی و تحلیل متغیرهای کلان",
          b2: "ارزیابی مالی و اقتصادی طرح‌های توجیهی",
          b3: "مدل‌سازی اقتصادسنجی و تحلیل داده‌های اقتصادی",
        },
        item2: {
          title: "مدیریت صنعتی",
          desc: "بهینه‌سازی سیستم‌های تولید و خدمت، مدیریت عملیات، بهبود بهره‌وری فرایندها و هماهنگی استراتژیک زنجیره‌های تأمین و ارزش.",
          b1: "مدیریت عملیات و برنامه‌ریزی تولید",
          b2: "سنجش کارایی و بهره‌وری سازمانی",
          b3: "مدل‌سازی زنجیره ارزش و لجستیک صنعتی",
        },
        item3: {
          title: "روش‌های کمی و تحقیق در عملیات",
          desc: "فرموله‌سازی مسائل پیچیده تصمیم‌گیری، بهینه‌سازی ریاضی و مدل‌های تصمیم‌گیری چندمعیاره برای پشتیبانی از تصمیمات استراتژیک.",
          b1: "تحقیق در عملیات پیشرفته (Operations Research)",
          b2: "تصمیم‌گیری چندمعیاره (MCDM)",
          b3: "مدل‌سازی بهینه‌سازی خطی و غیرخطی",
        },
        item4: {
          title: "پژوهش و مطالعات مدیریتی",
          desc: "طراحی و راهبری مطالعات آکادمیک و بین‌رشته‌ای، بررسی ساختارهای کسب‌وکار و نگارش گزارش‌های تحلیلی و سیاستی داده‌محور.",
          b1: "متدولوژی تحقیق علمی و تحلیل ساختاری",
          b2: "تحلیل آماری پیشرفته در علوم رفتاری و اقتصادی",
          b3: "تدوین گزارش‌های کارشناسی و مقالات معتبر علمی",
        },
      },
      timeline: {
        tag: "مسیر علمی",
        title: "سوابق تحصیلی و تجارب علمی",
        desc: "مدارج رسمی دانشگاهی و مسیر فعالیت‌های حرفه‌ای و پژوهشی",
        col1Title: "مدارک و مدارج علمی",
        col2Title: "سوابق پژوهشی و مشاوره‌ای",
        placeholderBadge: "چارچوب قابل تکمیل",
        verifiedBadge: "رتبه قطعی کشوری",
        edu1: {
          period: "دوره دکتری تخصصی",
          title: "دکترای اقتصاد (Ph.D.)",
          inst: "دانشگاه [نام دانشگاه مربوطه]",
          desc: "پژوهش‌های پیشرفته در اقتصاد کاربردی، مدل‌سازی تعادل و سیاست‌گذاری‌های اقتصادی و سنجش کارایی.",
        },
        edu2: {
          period: "آزمون دکتری سراسری",
          title: "رتبه ۲ کنکور دکتری سراسری مدیریت صنعتی",
          inst: "سازمان سنجش آموزش کشور",
          desc: "کسب مقام دوم آزمون ورود به دوره دکتری تخصصی رشته مدیریت صنعتی در کل کشور در رقابت سراسری دانشگاه‌های دولتی.",
        },
        edu3: {
          period: "تحصیلات تکمیلی",
          title: "سوابق تحصیلی پایه و کارشناسی ارشد",
          inst: "دانشگاه [جهت درج مقاطع دانشگاهی]",
          desc: "مبانی ریاضیات کاربردی، آمار، مدیریت، اقتصاد کلان و تئوری‌های تصمیم‌گیری.",
        },
        exp1: {
          period: "فعالیت مستمر",
          title: "تحلیل‌گر و پژوهشگر ارشد اقتصادی",
          inst: "[مراکز مطالعاتی و اتاق‌های فکر تخصصی]",
          desc: "تحلیل دوره‌ای روند شاخص‌های اقتصادی و ارزیابی تأثیر سیاست‌های کلان بر بخش‌های تولیدی و صنعتی.",
        },
        exp2: {
          period: "همکاری‌های آکادمیک",
          title: "فعالیت‌های آموزشی و تدریس دانشگاهی",
          inst: "[دانشگاه‌ها و موسسات آموزش عالی]",
          desc: "ارائه مباحث مرتبط با اصول علم اقتصاد، مفاهیم تصمیم‌گیری کمی و تحقیق در عملیات صنعتی.",
        },
        exp3: {
          period: "مشاوره پروژه‌ای",
          title: "مشاوره و عارضه‌یابی سیستم‌های صنعتی",
          inst: "[بنگاه‌های اقتصادی و تولیدی]",
          desc: "بهینه‌سازی جریان کار، ارزیابی کارایی خطوط عملیاتی و بکارگیری مدل‌های کمی برای تصمیم‌گیری مدیران.",
        },
      },
      research: {
        tag: "پژوهش‌ها",
        title: "مقاله‌ها و آثار تحقیقاتی",
        desc: "طراحی شده برای معرفی ژورنال‌های علمی، مقالات کنفرانسی و طرح‌های پژوهشی",
        notice: "توجه: با رعایت اصل دقت علمی و اخلاق پژوهش، از تولید عنوان مقاله فرضی خودداری شده است. چارچوب‌های زیر آماده جایگزینی با مقالات قطعی شما می‌باشند.",
        item1: {
          type: "مقاله ژورنال علمی",
          year: "Academic Journal",
          title: "[عنوان مقاله اول: مدل‌سازی ارزیابی کارایی اقتصادی و مدیریت عملیات]",
          authors: "پوریا ممبنی",
          venue: "مجله علمی-پژوهشی حوزه اقتصاد و مدیریت",
        },
        item2: {
          type: "مقاله کنفرانسی",
          year: "Conference Proceedings",
          title: "[عنوان مقاله دوم: کاربرد مدل‌های تصمیم‌گیری چندمعیاره در بهینه‌سازی فرایندها]",
          authors: "پوریا ممبنی",
          venue: "کنفرانس بین‌المللی مدیریت صنعتی و مهندسی سیستم‌ها",
        },
        item3: {
          type: "گزارش سیاستی / Working Paper",
          year: "Working Paper",
          title: "[عنوان طرح مطالعاتی: بررسی اثر نوسانات اقتصادی بر بهره‌وری صنایع]",
          authors: "پوریا ممبنی",
          venue: "گزارش راهبردی و پیش‌نویس تحقیقاتی",
        },
        doiPlaceholder: "جایگاه شناسه DOI و لینک مستقیم دانلود",
        abstractPlaceholder: "دریافت چکیده و متن کامل مقاله",
        reportPlaceholder: "آماده اتصال به فایل PDF گزارش",
        viewDoc: "مشاهده جزئیات",
      },
      contact: {
        tag: "تماس و ارتباط",
        title: "راه‌های ارتباطی و نمایه‌های علمی",
        desc: "جهت تعاملات دانشگاهی، داوری مقالات، مشاوره‌های تخصصی و همکاری‌های پژوهشی",
        cardBadge: "درگاه‌های رسمی",
        cardText: "ارتباطات دانشگاهی و اداری، همکاری در پروژه‌های تحقیقاتی و مشاوره‌های اقتصادی و صنعتی از طریق ایمیل و شبکه‌های تخصصی پاسخ داده خواهد شد.",
        cardFooter: "پاسخگویی بر اساس موازین و استانداردهای مکاتبات علمی",
        emailTitle: "پست الکترونیکی آکادمیک",
        linkedinTitle: "نمایه حرفه‌ای LinkedIn",
        scholarTitle: "صفحه Google Scholar",
        rgTitle: "نمایه ResearchGate",
      },
      footer: {
        desc: "وب‌سایت شخصی و آکادمیک جهت ارائه سوابق علمی، پژوهشی و مشاوره‌های اقتصادی و مدیریت صنعتی.",
        quickLinks: "دسترسی سریع",
        backToTop: "بازگشت به بالا",
        rights: "تمامی حقوق محفوظ است.",
      },
    },

    en: {
      metaTitle: "Pouria Mombeni, Ph.D. | Economics & Industrial Management",
      metaDesc: "Official academic and professional portfolio of Dr. Pouria Mombeni. Specialist in Economics and Industrial Management, Ranked 2nd in the National Ph.D. Entrance Examination.",
      langBtn: "فارسی",
      nav: {
        name: "Pouria Mombeni",
        badge: "Ph.D. in Economics",
        home: "Home",
        about: "About",
        highlights: "Qualifications",
        expertise: "Expertise",
        timeline: "Trajectory",
        research: "Research",
        contact: "Contact",
        contactBtn: "Get in Touch",
      },
      hero: {
        badge: "Academic & Executive Profile",
        rank: "Ranked 2nd Nationally",
        name: "Pouria Mombeni, Ph.D.",
        title: "Ph.D. in Economics | Ranked 2nd in National Ph.D. Exam in Industrial Management",
        honorTag: "National Honor — Rank 2 Nationwide",
        honorText: "Achieved 2nd rank in the competitive nationwide entrance examination for Industrial Management Ph.D. programs.",
        bio: "Scholar and analyst in economics and industrial management, dedicated to quantitative modeling, decision optimization, and institutional productivity enhancement through empirical methodologies.",
        ctaPrimary: "View Qualifications",
        ctaSecondary: "Get in Touch",
        trust1: "Ph.D. in Economics",
        trust2: "Industrial Management & Optimization",
        trust3: "Empirical & Quantitative Modeling",
        rankBadge: "Rank 2 Ph.D.",
        specTitle: "Economics & Industrial Management",
      },
      about: {
        tag: "About Me",
        title: "Analytical Rigor, Applied Economics & Strategic Management",
        lead: "Integrating modern economic principles with operations research and industrial management provides a robust foundation for solving systemic inefficiencies.",
        body: "Pouria Mombeni holds a doctorate in Economics and ranked 2nd nationwide in the highly competitive Ph.D. entrance examination for Industrial Management. His scholarly inquiries center upon market dynamics, operations management, and multi-criteria decision frameworks.",
        noteTitle: "Editorial Profile Note:",
        note: "Verified institutional course syllabi, appointments, and committee positions will be updated upon official indexation.",
        stat1: "Doctor of Economics",
        stat2: "Industrial Management Entrance Exam",
        stat3: "Decision Sciences & Optimization",
      },
      highlights: {
        tag: "Key Highlights",
        title: "Academic Milestones & Pillars",
        desc: "Core credentials and distinctive scholarly qualifications",
        card1: {
          badge: "Doctoral Degree",
          title: "Ph.D. in Economics",
          text: "Doctoral expertise in micro & macroeconomic theory, economic modeling, and feasibility evaluation.",
        },
        card2: {
          badge: "National Distinction",
          title: "Ranked 2nd Nationally",
          text: "Honored with the 2nd highest national score in the competitive Ph.D. entrance examination in Industrial Management.",
        },
        card3: {
          badge: "Core Discipline",
          title: "Industrial Management",
          text: "Proficient in production operations, system dynamics, supply chain systems, and operations research.",
        },
        card4: {
          badge: "Methodology",
          title: "Economic Analytics",
          text: "Applying econometric tools and quantitative optimization models to assess market trends and system efficiency.",
        },
      },
      expertise: {
        tag: "Expertise",
        title: "Scholarly & Applied Specializations",
        desc: "Convergence of quantitative economics, operations research, and management science",
        item1: {
          title: "Economics & Market Analysis",
          desc: "Macro and microeconomic modeling, market structure evaluations, pricing strategies, and project viability studies.",
          b1: "Applied economics & macroeconomic variables",
          b2: "Economic and financial feasibility assessment",
          b3: "Econometric modeling and quantitative analytics",
        },
        item2: {
          title: "Industrial Management",
          desc: "Production operations, organizational productivity evaluation, process engineering, and strategic supply chain alignment.",
          b1: "Operations & production planning",
          b2: "System efficiency and productivity indicators",
          b3: "Value chain optimization and logistics",
        },
        item3: {
          title: "Quantitative Methods & Operations Research",
          desc: "Mathematical formulations, optimization algorithms, and multi-criteria decision models for high-stakes decisions.",
          b1: "Advanced Operations Research (OR)",
          b2: "Multi-Criteria Decision Making (MCDM)",
          b3: "Linear and nonlinear optimization modeling",
        },
        item4: {
          title: "Management Inquiries & Methodology",
          desc: "Designing rigorous interdisciplinary academic investigations, corporate structural studies, and technical policy papers.",
          b1: "Academic research methodology & structural analysis",
          b2: "Advanced statistical inference",
          b3: "Peer-reviewed publications and technical briefs",
        },
      },
      timeline: {
        tag: "Trajectory",
        title: "Academic Background & Career Timeline",
        desc: "Verified degrees and research-oriented appointments",
        col1Title: "Degrees & Academic Honors",
        col2Title: "Research & Advisory Experience",
        placeholderBadge: "Structured Record",
        verifiedBadge: "Nationwide Distinction",
        edu1: {
          period: "Doctoral Program",
          title: "Ph.D. in Economics",
          inst: "University [Affiliation Details]",
          desc: "Specialized doctoral dissertation research in quantitative economics, efficiency assessment, and economic modeling.",
        },
        edu2: {
          period: "Competitive National Exam",
          title: "Rank 2 - National Ph.D. Entrance Examination",
          inst: "National Educational Measurement Organization",
          desc: "Achieved 2nd place nationwide among all applicants for the Industrial Management doctoral examination.",
        },
        edu3: {
          period: "Postgraduate & Bachelor",
          title: "Foundational & Master's Degrees",
          inst: "University [Degree Programs]",
          desc: "Comprehensive foundations in mathematics, statistics, economic theory, and management systems.",
        },
        exp1: {
          period: "Active",
          title: "Senior Economic & Management Researcher",
          inst: "[Research Center / Economic Think Tank]",
          desc: "Monitoring key indicators and assessing macro policy impacts on industrial and manufacturing sectors.",
        },
        exp2: {
          period: "Academic Terms",
          title: "Lecturer & Academic Instruction",
          inst: "[Higher Education Institutions]",
          desc: "Delivering courses in economic principles, quantitative decision-making, and industrial management.",
        },
        exp3: {
          period: "Project-based",
          title: "Industrial Consulting & Operations Advisory",
          inst: "[Enterprise Advisory & Industry Partners]",
          desc: "Streamlining workflow operations, measuring line efficiencies, and formulating optimization models.",
        },
      },
      research: {
        tag: "Research",
        title: "Publications & Scholarly Inquiries",
        desc: "Structured repository for peer-reviewed journal papers, conference proceedings, and working papers",
        notice: "Notice: In accordance with academic rigor, arbitrary publication titles are omitted. The templates below are ready to receive verified bibliographic records.",
        item1: {
          type: "Journal Article",
          year: "Academic Journal",
          title: "[Publication 1: Quantitative Modeling of Economic Efficiency in Industrial Sectors]",
          authors: "Pouria Mombeni",
          venue: "Peer-reviewed Academic Journal in Economics & Management",
        },
        item2: {
          type: "Conference Paper",
          year: "Conference Proceedings",
          title: "[Publication 2: Multi-Criteria Optimization in Operational Decision Support Systems]",
          authors: "Pouria Mombeni",
          venue: "International Conference on Industrial Management & Systems Engineering",
        },
        item3: {
          type: "Working Paper",
          year: "Working Paper",
          title: "[Working Paper: Macroeconomic Volatility and Supply Chain Resilience in Emerging Markets]",
          authors: "Pouria Mombeni",
          venue: "Academic Discussion & Strategy Brief Series",
        },
        doiPlaceholder: "DOI identifier and direct download slot",
        abstractPlaceholder: "Download abstract and proceeding manuscript",
        reportPlaceholder: "Configured for PDF working document",
        viewDoc: "View Record",
      },
      contact: {
        tag: "Contact",
        title: "Direct Inquiries & Scholarly Profiles",
        desc: "For academic partnerships, peer reviews, technical advisory, and research collaborations",
        cardBadge: "Official Channels",
        cardText: "Academic correspondence, keynote requests, and advisory inquiries are managed via verified institutional channels.",
        cardFooter: "Corresponded in accordance with scholarly protocols",
        emailTitle: "Academic & Professional Email",
        linkedinTitle: "LinkedIn Professional Profile",
        scholarTitle: "Google Scholar Profile",
        rgTitle: "ResearchGate Profile",
      },
      footer: {
        desc: "Official personal and academic portal for research, publications, and advisory in economics and industrial management.",
        quickLinks: "Quick Navigation",
        backToTop: "Back to top",
        rights: "All rights reserved.",
      },
    },
  };

  // State
  let currentLang = "fa";

  function getNestedValue(obj, path) {
    return path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : null), obj);
  }

  function applyLanguage(lang) {
    currentLang = lang;
    const dict = translations[lang];
    if (!dict) return;

    // Document dir and lang
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    document.body.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");

    // Title & Meta
    document.title = dict.metaTitle;
    const metaDesc = document.getElementById("meta-desc");
    if (metaDesc) metaDesc.setAttribute("content", dict.metaDesc);

    // Lang toggle label
    const langLabel = document.getElementById("lang-label");
    if (langLabel) langLabel.textContent = dict.langBtn;

    // Update all elements with data-i18n
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = getNestedValue(dict, key);
      if (val !== null) {
        el.textContent = val;
      }
    });

    try {
      localStorage.setItem("user_lang", lang);
    } catch (e) {}
  }

  // Init
  document.addEventListener("DOMContentLoaded", () => {
    // Current year
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Check saved lang
    let savedLang = "fa";
    try {
      savedLang = localStorage.getItem("user_lang") || "fa";
    } catch (e) {}
    applyLanguage(savedLang);

    // Lang toggle button
    const langBtn = document.getElementById("lang-toggle-btn");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        const nextLang = currentLang === "fa" ? "en" : "fa";
        applyLanguage(nextLang);
      });
    }

    // Header scroll shadow
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });

    // Mobile nav toggle
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    if (menuToggle && mobileNav) {
      menuToggle.addEventListener("click", () => {
        mobileNav.classList.toggle("open");
      });

      // Close on mobile link click
      const mobileLinks = mobileNav.querySelectorAll(".mobile-link");
      mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
          mobileNav.classList.remove("open");
        });
      });
    }

    // Back to top button
    const scrollTopBtn = document.getElementById("scroll-top-btn");
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // Active link highlight on scroll
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
      let currentSectionId = "hero";
      const scrollPos = window.scrollY + 140;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("active");
        }
      });
    });
  });
})();
