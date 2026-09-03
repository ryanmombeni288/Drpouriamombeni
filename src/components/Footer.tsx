import React from "react";
import { SiteContent, Locale } from "@/types/content";
import { ArrowUp } from "lucide-react";

interface FooterProps {
  content: SiteContent;
  locale: Locale;
}

export const Footer: React.FC<FooterProps> = ({ content, locale }) => {
  const isRtl = locale === "fa";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-navy-900">
          {/* Col 1: Identity */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center text-accent font-bold text-sm">
                PM
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {content.footer.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              {content.footer.tagline}
            </p>
            <p className="text-xs text-slate-500">
              {isRtl
                ? "وب‌سایت شخصی و آکادمیک جهت ارائه سوابق علمی، پژوهشی و مشاوره‌های اقتصادی و صنعتی."
                : "Official academic and professional portal for research, publications, and advisory."}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              {content.footer.quickLinks}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {content.nav.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-start text-slate-400 hover:text-white transition-colors py-1 focus:outline-none"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Back to top */}
          <div className="md:col-span-2 flex md:justify-end items-start">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-navy-900 text-slate-300 hover:text-white hover:bg-navy-800 border border-navy-800 text-xs font-semibold transition-colors focus:outline-none"
              aria-label="Back to top"
            >
              <span>{isRtl ? "بازگشت به بالا" : "Back to top"}</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {content.footer.name}. {content.footer.rights}</p>
          <p className="font-en text-slate-500">Pouria Mombeni | Academic Portfolio</p>
        </div>
      </div>
    </footer>
  );
};
