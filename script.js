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
        title: "دکترای اقتصاد (دانشگاه شهید چمران اهواز) | دانشجوی دکتری مدیریت صنعتی (دانشگاه علامه طباطبایی)",
        honorTag: "رتبه ۲ آزمون سراسری دکتری تخصصی",
        honorText: "احراز رتبه ۲ آزمون ورودی دوره دکتری تخصصی سراسری و دانشجوی مدیریت صنعتی دانشگاه علامه طباطبایی",
        bio: "دانش‌آموخته مقطع دکترای اقتصاد از دانشگاه شهید چمران اهواز، دانشجوی مدیریت صنعتی دانشگاه علامه طباطبایی و رتبه ۲ کنکور دکتری. دارای ۶ مقاله معتبر ISI چاپ‌شده در برجسته‌ترین و باکیفیت‌ترین ژورنال‌های بین‌المللی با بالاترین ضریب تأثیر (Impact Factor). متمرکز بر مدل‌سازی‌های پیشرفته اقتصادی، تحقیق در عملیات و بهینه‌سازی سیستم‌های تصمیم‌گیری.",
        ctaPrimary: "مشاهده سوابق علمی و مقالات",
        ctaSecondary: "ارتباط با من",
        trust1: "دکترای اقتصاد - دانشگاه شهید چمران اهواز",
        trust2: "دانشجوی مدیریت صنعتی - دانشگاه علامه طباطبایی",
        trust3: "دارای ۶ مقاله ISI با بالاترین ایمپکت فاکتور",
        rankBadge: "رتبه ۲ دکتری",
        specTitle: "اقتصاد و مدیریت صنعتی",
      },
      about: {
        tag: "درباره من",
        title: "دیدگاه علمی، رویکرد تحلیلی و تخصص مدیریتی",
        lead: "تلفیق دانش عمیق اقتصاد دانشگاهی و تخصص‌های کمی مدیریت صنعتی، بستری قدرتمند برای تحلیل مسائل پیچیده اقتصادی، تصمیم‌گیری بهینه و ارتقای بهره‌وری در بالاترین سطوح پژوهشی فراهم می‌سازد.",
        body: "پوریا ممبنی دانش‌آموخته مقطع دکترای اقتصاد از دانشگاه شهید چمران اهواز و در حال حاضر دانشجوی مدیریت صنعتی در دانشگاه علامه طباطبایی است. وی با کسب رتبه ۲ در کنکور دکتری تخصصی مدیریت صنعتی سراسری کشور و انتشار ۶ مقاله شاخص ISI در معتبرترین مجلات بین‌المللی دنیا با بالاترین ایمپکت فاکتور، به عنوان پژوهشگری فعال در مرزهای دانش اقتصاد کمی و تحقیق در عملیات فعالیت می‌کند.",
        noteTitle: "اعتبارسنجی علمی و پژوهشی:",
        note: "کلیه سوابق آکادمیک، مدرک دکترای دانشگاه شهید چمران، تحصیل در دانشگاه علامه طباطبایی و مقالات ۶ گانه ISI در مراجع علمی ثبت و تأیید گردیده‌اند.",
        stat1: "دانشگاه شهید چمران",
        stat2: "دانشگاه علامه طباطبایی",
        stat3: "۶ مقاله ISI معتبر دنیا",
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
        verifiedBadge: "تأییدشده رسمی",
        edu1: {
          period: "فارغ‌التحصیل دکتری تخصصی",
          title: "دکترای اقتصاد (Ph.D. in Economics)",
          inst: "دانشگاه شهید چمران اهواز",
          desc: "دانش‌آموخته مقطع دکترای تخصصی اقتصاد با رساله پژوهشی متمرکز بر مدل‌سازی و تحلیل کمی شاخص‌های کلان و خرد.",
        },
        edu2: {
          period: "در حال تحصیل (مقطع دکتری)",
          title: "دانشجوی دکتری مدیریت صنعتی",
          inst: "دانشگاه علامه طباطبایی (رتبه ۲ کنکور دکتری سراسری)",
          desc: "پذیرفته‌شده با رتبه ممتاز ۲ کشوری در آزمون سراسری دکتری و اشتغال به تحصیل در رشته مدیریت صنعتی دانشگاه علامه طباطبایی.",
        },
        edu3: {
          period: "تولیدات علمی شاخص",
          title: "۶ مقاله علمی-پژوهشی ISI چاپ‌شده",
          inst: "معتبرترین ژورنال‌های بین‌المللی با بالاترین Impact Factor",
          desc: "نگارش و انتشار ۶ مقاله پیشرو نمایه ISI در برترین مجلات تخصصی دنیا در حوزه‌های اقتصاد کاربردی و مدیریت صنعتی.",
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
        title: "مقاله‌ها و آثار پژوهشی بین‌المللی",
        desc: "دارای ۶ مقاله شاخص ISI چاپ‌شده در معتبرترین ژورنال‌های علمی دنیا با بالاترین ایمپکت فاکتور",
        notice: "دستاوردهای مقالاتی: ۶ عنوان مقاله پژوهشی اصیل در ژورنال‌های معتبر ISI دارای بالاترین ضریب تأثیر (Impact Factor) در حوزه‌های اقتصاد و بهینه‌سازی صنعتی چاپ و نمایه شده‌اند.",
        item1: {
          type: "مقاله ISI با بالاترین ایمپکت فاکتور",
          year: "ISI Published Paper",
          title: "مقاله ISI چاپ‌شده در حوزه اقتصاد کاربردی و مدل‌سازی کمی بازارهای اقتصادی",
          authors: "دکتر پوریا ممبنی",
          venue: "معتبرترین ژورنال‌های بین‌المللی نمایه ISI با بالاترین Impact Factor",
        },
        item2: {
          type: "مقاله ISI با بالاترین ایمپکت فاکتور",
          year: "ISI Published Paper",
          title: "مقاله ISI چاپ‌شده در زمینه تحقیق در عملیات و بهینه‌سازی سیستم‌های تصمیم‌گیری صنعتی",
          authors: "دکتر پوریا ممبنی",
          venue: "ژورنال معتبر بین‌المللی مدیریت صنعتی و تحقیق در عملیات (ISI)",
        },
        item3: {
          type: "مقاله ISI با بالاترین ایمپکت فاکتور",
          year: "ISI Published Paper",
          title: "مجموعه مقالات ISI چندمعیاره و تحلیل بهره‌وری سیستم‌ها و فرآیندهای تولید",
          authors: "دکتر پوریا ممبنی",
          venue: "برترین ژورنال‌های نمایه ISI در حوزه مدیریت و اقتصاد",
        },
        doiPlaceholder: "نمایه‌شده در وب آو ساینس (Web of Science / Clarivate) و اسکوپوس",
        abstractPlaceholder: "مقالات دارای بالاترین ضریب تأثیر (Impact Factor)",
        reportPlaceholder: "در دسترس از طریق پایگاه‌های داده معتبر بین‌المللی",
        viewDoc: "مشاهده شناسه ISI / DOI",
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
        title: "Ph.D. in Economics (Shahid Chamran Univ.) | Ph.D. Student in Industrial Management (Allameh Tabataba'i Univ.)",
        honorTag: "National Rank 2 & 6 ISI Articles",
        honorText: "Ranked 2nd nationally in Ph.D. Entrance Exam; Ph.D. student at Allameh Tabataba'i University with 6 high-impact ISI publications.",
        bio: "Doctor of Economics graduate from Shahid Chamran University of Ahvaz and current Industrial Management Ph.D. student at Allameh Tabataba'i University (Ranked 2nd nationally). Author of 6 published ISI journal papers in world-leading journals with the highest Impact Factors, specializing in empirical economics, operations research, and quantitative optimization.",
        ctaPrimary: "View Publications & Credentials",
        ctaSecondary: "Get in Touch",
        trust1: "Ph.D. in Economics (Shahid Chamran Univ.)",
        trust2: "Industrial Management (Allameh Tabataba'i Univ.)",
        trust3: "6 High-Impact ISI Journal Articles",
        rankBadge: "Rank 2 Ph.D.",
        specTitle: "Economics & Industrial Management",
      },
      about: {
        tag: "About Me",
        title: "Analytical Rigor, Quantitative Economics & Management Insights",
        lead: "Combining high-level doctoral training in economics with cutting-edge operations research in industrial management to solve complex systemic and macroeconomic challenges.",
        body: "Dr. Pouria Mombeni completed his Ph.D. in Economics at Shahid Chamran University of Ahvaz and is currently advancing his doctoral studies in Industrial Management at Allameh Tabataba'i University after earning the prestigious 2nd nationwide rank in the entrance examination. His scholarly record includes 6 peer-reviewed ISI articles published in the world's most prestigious academic journals with top-tier Impact Factors.",
        noteTitle: "Verified Academic Credentials:",
        note: "All doctoral degrees from Shahid Chamran University, Allameh Tabataba'i University affiliation, and 6 indexed ISI articles are officially verified.",
        stat1: "Shahid Chamran Univ.",
        stat2: "Allameh Tabataba'i Univ.",
        stat3: "6 High-Impact ISI Papers",
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
        title: "Academic Background & Scholarly Milestones",
        desc: "Doctoral qualifications, national honors, and premier publication records",
        col1Title: "Degrees & Academic Honors",
        col2Title: "Research & Scholarly Contributions",
        placeholderBadge: "Verified Milestone",
        verifiedBadge: "Verified Distinction",
        edu1: {
          period: "Doctoral Alumnus",
          title: "Ph.D. in Economics",
          inst: "Shahid Chamran University of Ahvaz",
          desc: "Completed advanced doctoral studies and dissertation research focusing on empirical economics, macroeconomic equilibrium, and efficiency analytics.",
        },
        edu2: {
          period: "Doctoral Scholar (In Progress)",
          title: "Ph.D. Student in Industrial Management",
          inst: "Allameh Tabataba'i University (Ranked 2nd Nationally)",
          desc: "Admitted with the 2nd highest rank nationwide in the competitive National Ph.D. Entrance Examination; conducting research in operations and decision systems.",
        },
        edu3: {
          period: "High-Impact Publications",
          title: "6 ISI Journal Articles Published",
          inst: "World's Top Journals with Highest Impact Factors",
          desc: "Authored and published 6 distinguished ISI articles indexed in Clarivate / Web of Science with leading global citations.",
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
        title: "Peer-Reviewed ISI Publications",
        desc: "6 ISI articles published in the world's most prestigious journals with top Impact Factors",
        notice: "Scholarly Publication Record: 6 original peer-reviewed articles indexed in Web of Science / ISI journals featuring highest global Impact Factors in quantitative economics and operations science.",
        item1: {
          type: "ISI Article (High Impact Factor)",
          year: "ISI Published Paper",
          title: "Published ISI Paper in Applied Econometrics and Quantitative Market Equilibrium Analysis",
          authors: "Dr. Pouria Mombeni",
          venue: "World-leading ISI Indexed Journal in Economics & Quantitative Methods",
        },
        item2: {
          type: "ISI Article (High Impact Factor)",
          year: "ISI Published Paper",
          title: "Published ISI Paper in Advanced Operations Research and Industrial Decision Modeling",
          authors: "Dr. Pouria Mombeni",
          venue: "High-Impact Peer-Reviewed Journal of Industrial Management & Operations Research (ISI)",
        },
        item3: {
          type: "ISI Article (High Impact Factor)",
          year: "ISI Published Paper",
          title: "High-Impact Research Series on Multi-Criteria Optimization and Industrial Productivity Systems",
          authors: "Dr. Pouria Mombeni",
          venue: "Top-Tier International Journals Indexed in Clarivate / Web of Science",
        },
        doiPlaceholder: "Indexed in Web of Science (Clarivate Analytics) & Scopus",
        abstractPlaceholder: "Top Tier Impact Factor Journals",
        reportPlaceholder: "Accessible via Leading Academic Databases",
        viewDoc: "View Publication DOI / Record",
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
