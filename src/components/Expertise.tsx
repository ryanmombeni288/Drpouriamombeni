import React from "react";
import { SiteContent } from "@/types/content";
import { LineChart, Cpu, TrendingUp, BookOpen, Check } from "lucide-react";

interface ExpertiseProps {
  content: SiteContent;
}

export const Expertise: React.FC<ExpertiseProps> = ({ content }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "line-chart":
        return <LineChart className="w-6 h-6 text-navy-900" />;
      case "cpu":
        return <Cpu className="w-6 h-6 text-navy-900" />;
      case "trending-up":
        return <TrendingUp className="w-6 h-6 text-navy-900" />;
      case "book-open":
      default:
        return <BookOpen className="w-6 h-6 text-navy-900" />;
    }
  };

  return (
    <section id="expertise" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-navy-800 bg-slate-100 px-3 py-1 rounded-full">
            {content.expertise.sectionTag}
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 leading-tight">
            {content.expertise.title}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {content.expertise.subtitle}
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.expertise.items.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-slate-300 hover:bg-white transition-all duration-300 shadow-2xs hover:shadow-md group"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs group-hover:bg-navy-900 group-hover:text-white transition-colors">
                  <span className="group-hover:[&>svg]:text-white">
                    {getIcon(item.iconName)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy-900">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-200/80">
                <ul className="space-y-2.5">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="mt-1 p-0.5 rounded-full bg-navy-900 text-white shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
