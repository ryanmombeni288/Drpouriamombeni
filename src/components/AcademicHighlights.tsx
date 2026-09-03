import React from "react";
import { SiteContent } from "@/types/content";
import { Award, GraduationCap, Briefcase, LineChart } from "lucide-react";

interface AcademicHighlightsProps {
  content: SiteContent;
}

export const AcademicHighlights: React.FC<AcademicHighlightsProps> = ({ content }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "award":
        return <Award className="w-6 h-6 text-accent-dark" />;
      case "grad":
        return <GraduationCap className="w-6 h-6 text-navy-800" />;
      case "briefcase":
        return <Briefcase className="w-6 h-6 text-navy-800" />;
      case "chart":
      default:
        return <LineChart className="w-6 h-6 text-accent-dark" />;
    }
  };

  return (
    <section id="highlights" className="py-20 sm:py-28 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-dark bg-amber-50 border border-amber-200/80 px-3 py-1 rounded-full">
            {content.academicHighlights.sectionTag}
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900">
            {content.academicHighlights.title}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {content.academicHighlights.subtitle}
          </p>
        </div>

        {/* 4 Clean Minimal Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.academicHighlights.items.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300"
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-amber-50/60 transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                  {item.badge && (
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-navy-900 leading-snug group-hover:text-navy-700 transition-colors">
                  {item.title}
                </h3>

                {/* Subtitle / Description */}
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.subtitle}
                </p>
              </div>

              {/* Bottom line decorative indicator */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>VERIFIED FOCUS</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
