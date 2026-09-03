import React from "react";
import { SiteContent, Locale } from "@/types/content";
import { FileText, BookOpen, Presentation, ExternalLink, Info } from "lucide-react";

interface ResearchProps {
  content: SiteContent;
  locale: Locale;
}

export const Research: React.FC<ResearchProps> = ({ content, locale }) => {
  const isRtl = locale === "fa";

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "journal":
        return {
          label: isRtl ? "مقاله ژورنال علمی" : "Journal Article",
          icon: <BookOpen className="w-3.5 h-3.5 text-navy-800" />,
          color: "bg-blue-50 text-navy-800 border-blue-200/60",
        };
      case "conference":
        return {
          label: isRtl ? "مقاله کنفرانسی" : "Conference Paper",
          icon: <Presentation className="w-3.5 h-3.5 text-slate-700" />,
          color: "bg-slate-100 text-slate-700 border-slate-200",
        };
      case "working_paper":
      default:
        return {
          label: isRtl ? "طرح مطالعاتی / Working Paper" : "Working Paper",
          icon: <FileText className="w-3.5 h-3.5 text-accent-dark" />,
          color: "bg-amber-50 text-accent-dark border-amber-200/60",
        };
    }
  };

  return (
    <section id="research" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-navy-800 bg-slate-100 px-3 py-1 rounded-full">
            {content.research.sectionTag}
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 leading-tight">
            {content.research.title}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {content.research.subtitle}
          </p>
        </div>

        {/* Informative Placeholder Notice */}
        <div className="mt-8 flex items-start gap-3 p-4 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs sm:text-sm text-amber-900">
          <Info className="w-5 h-5 text-accent-dark shrink-0 mt-0.5" />
          <p className="leading-relaxed font-normal">
            {content.research.placeholderNotice}
          </p>
        </div>

        {/* Publications List */}
        <div className="mt-10 space-y-4">
          {content.research.items.map((pub) => {
            const badge = getTypeBadge(pub.type);
            return (
              <div
                key={pub.id}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${badge.color}`}
                    >
                      {badge.icon}
                      {badge.label}
                    </span>
                    <span className="text-xs text-slate-400 font-mono font-medium">
                      {pub.year}
                    </span>
                  </div>

                  {pub.isPlaceholder && (
                    <span className="text-[11px] text-slate-400 font-mono">
                      [Format Ready]
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-base sm:text-lg font-bold text-navy-900 leading-snug">
                  {pub.title}
                </h3>

                <div className="mt-2 text-xs sm:text-sm text-slate-600">
                  <span className="font-semibold text-slate-700">{pub.authors}</span>
                  <span className="mx-2 text-slate-300">•</span>
                  <span className="italic text-slate-500">{pub.venue}</span>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    {isRtl ? "جایگاه متادیتا و DOI" : "DOI & Indexing placeholder"}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-navy-800 opacity-60">
                    <span>{pub.linkText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
