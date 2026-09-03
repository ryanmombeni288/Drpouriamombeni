import React from "react";
import { SiteContent, Locale } from "@/types/content";
import { Info, Sparkles } from "lucide-react";

interface AboutProps {
  content: SiteContent;
  locale: Locale;
}

export const About: React.FC<AboutProps> = ({ content, locale }) => {
  const isRtl = locale === "fa";

  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading Tag */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-accent-dark" />
            <span>{content.about.sectionTag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 leading-tight">
            {content.about.title}
          </h2>
        </div>

        {/* Two-column editorial presentation */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main textual statement */}
          <div className="lg:col-span-8 space-y-6 text-slate-600 leading-relaxed text-base sm:text-lg">
            <p className="font-medium text-slate-800 text-lg sm:text-xl leading-relaxed border-s-4 border-navy-900 ps-4">
              {content.about.leadParagraph}
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              {content.about.bodyParagraph}
            </p>

            {/* Editable Verified Data Note */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-500">
              <Info className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-700 block mb-0.5">
                  {isRtl ? "یادداشت ویرایشی پروفایل:" : "Editorial Note:"}
                </span>
                <span>{content.about.placeholderNote}</span>
              </div>
            </div>
          </div>

          {/* Side Numerical / Credential Badges */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {content.about.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-en">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-medium text-slate-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
