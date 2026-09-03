import React from "react";
import { SiteContent, Locale } from "@/types/content";
import { GraduationCap, Briefcase, Calendar, CheckCircle, Clock } from "lucide-react";

interface TimelineProps {
  content: SiteContent;
  locale: Locale;
}

export const Timeline: React.FC<TimelineProps> = ({ content, locale }) => {
  const isRtl = locale === "fa";

  return (
    <section id="timeline" className="py-20 sm:py-28 bg-slate-50/70 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-dark bg-amber-50 border border-amber-200/80 px-3 py-1 rounded-full">
            {content.educationAndExperience.sectionTag}
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 leading-tight">
            {content.educationAndExperience.title}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {content.educationAndExperience.subtitle}
          </p>
        </div>

        {/* Dual Timeline Columns */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Column 1: Education */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-200">
              <div className="p-2.5 rounded-lg bg-navy-900 text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-navy-900">
                {content.educationAndExperience.educationTitle}
              </h3>
            </div>

            <div className="relative ps-6 space-y-8 border-s-2 border-slate-200">
              {content.educationAndExperience.educationItems.map((item) => (
                <div key={item.id} className="relative group">
                  {/* Timeline dot */}
                  <div
                    className={`absolute -start-[31px] top-1 w-3.5 h-3.5 rounded-full border-2 border-white transition-colors ${
                      item.isPlaceholder
                        ? "bg-slate-300 ring-2 ring-slate-200"
                        : "bg-accent ring-2 ring-accent/30"
                    }`}
                  />

                  <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200 shadow-2xs hover:border-slate-300 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      {item.isPlaceholder ? (
                        <span className="text-[11px] font-medium text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded">
                          {isRtl ? "قابل تکمیل با داده قطعی" : "Placeholder / To Update"}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          <CheckCircle className="w-3 h-3" />
                          {isRtl ? "تأییدشده" : "Verified"}
                        </span>
                      )}
                    </div>

                    <h4 className="mt-3 text-base sm:text-lg font-bold text-navy-900 leading-snug">
                      {item.degreeOrRole}
                    </h4>

                    <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">
                      {item.institutionOrOrg}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Experience / Academic Activities */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-200">
              <div className="p-2.5 rounded-lg bg-navy-900 text-white">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-navy-900">
                {content.educationAndExperience.experienceTitle}
              </h3>
            </div>

            <div className="relative ps-6 space-y-8 border-s-2 border-slate-200">
              {content.educationAndExperience.experienceItems.map((item) => (
                <div key={item.id} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -start-[31px] top-1 w-3.5 h-3.5 rounded-full bg-slate-400 border-2 border-white ring-2 ring-slate-200" />

                  <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200 shadow-2xs hover:border-slate-300 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                        <Clock className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      {item.isPlaceholder && (
                        <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                          {isRtl ? "چارچوب ساختاری رزومه" : "Structured Placeholder"}
                        </span>
                      )}
                    </div>

                    <h4 className="mt-3 text-base sm:text-lg font-bold text-navy-900 leading-snug">
                      {item.degreeOrRole}
                    </h4>

                    <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">
                      {item.institutionOrOrg}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
