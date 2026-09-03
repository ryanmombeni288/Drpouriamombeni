import React from "react";
import { SiteContent, Locale } from "@/types/content";
import { Mail, Linkedin, GraduationCap, Globe, Phone, ArrowUpRight, ShieldCheck } from "lucide-react";

interface ContactProps {
  content: SiteContent;
  locale: Locale;
}

export const Contact: React.FC<ContactProps> = ({ content, locale }) => {
  const isRtl = locale === "fa";

  const getLinkIcon = (iconName: string) => {
    switch (iconName) {
      case "mail":
        return <Mail className="w-5 h-5 text-navy-900" />;
      case "linkedin":
        return <Linkedin className="w-5 h-5 text-navy-900" />;
      case "scholar":
        return <GraduationCap className="w-5 h-5 text-navy-900" />;
      case "researchgate":
        return <Globe className="w-5 h-5 text-navy-900" />;
      case "phone":
      default:
        return <Phone className="w-5 h-5 text-navy-900" />;
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-navy-800 bg-slate-200/70 px-3 py-1 rounded-full">
            {content.contact.sectionTag}
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 leading-tight">
            {content.contact.title}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {content.contact.subtitle}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Info Card */}
          <div className="lg:col-span-5 bg-navy-900 text-white rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-800 text-accent text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>{isRtl ? "ارتباط مستقیم علمی" : "Direct Scholarly Inquiries"}</span>
              </span>

              <h3 className="mt-6 text-2xl font-bold leading-snug">
                {content.nav.name}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                {content.hero.title}
              </p>

              <p className="mt-6 text-xs sm:text-sm text-slate-400 leading-relaxed">
                {isRtl
                  ? "جهت دعوت برای داوری مقالات علمی، برگزاری کارگاه‌های تخصصی، مشاوره‌های اقتصادی و صنعتی یا همکاری در پروژه‌های تحقیقاتی می‌توانید از درگاه‌های رسمی استفاده نمایید."
                  : "For peer review invitations, academic seminars, economic advisory, or joint research initiatives, please utilize the authenticated contact channels."}
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-navy-800 text-xs text-slate-400">
              <p>{isRtl ? "پاسخگویی بر اساس اولویت‌های آکادمیک" : "Response in academic correspondence standards"}</p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 space-y-4">
            {content.contact.links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-amber-50/60 group-hover:border-amber-200/80 transition-colors">
                    {getLinkIcon(link.iconName)}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-navy-900 group-hover:text-navy-700 transition-colors">
                      {link.label}
                    </h4>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {link.url}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {link.isPlaceholder && (
                    <span className="hidden sm:inline-block text-[11px] font-medium text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded">
                      {isRtl ? "آماده لینک‌دهی" : "Configured"}
                    </span>
                  )}
                  <div className="p-2 rounded-lg text-slate-400 group-hover:text-navy-900 group-hover:bg-slate-100 transition-colors">
                    <ArrowUpRight className={`w-4 h-4 ${isRtl ? "rotate-270" : ""}`} />
                  </div>
                </div>
              </a>
            ))}

            {/* Note on data */}
            <p className="text-xs text-slate-500 pt-2 px-1">
              {content.contact.placeholderNotice}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
