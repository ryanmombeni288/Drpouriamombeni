"use client";

import React, { useState, useEffect } from "react";
import { SiteContent, Locale } from "@/types/content";
import { Menu, X, Globe, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  content: SiteContent;
  locale: Locale;
  onToggleLocale: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ content, locale, onToggleLocale }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const isRtl = locale === "fa";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = content.nav.items.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(content.nav.items[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [content.nav.items]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
          : "bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Academic Brand */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 group text-start focus:outline-none"
            aria-label={content.nav.name}
          >
            <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center text-accent font-semibold shadow-sm group-hover:bg-navy-800 transition-colors">
              <span className="font-en text-sm tracking-wider font-bold">PM</span>
            </div>
            <div>
              <span className="block text-base sm:text-lg font-bold text-navy-900 leading-snug">
                {content.nav.name}
              </span>
              <span className="block text-xs text-slate-500 font-medium">
                {isRtl ? "دکترای اقتصاد" : "Ph.D. in Economics"}
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {content.nav.items.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? "text-navy-900 bg-slate-100/90 font-semibold"
                      : "text-slate-600 hover:text-navy-900 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Language Switcher & Contact CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onToggleLocale}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-2xs"
              aria-label="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span className="font-en">{content.nav.langToggle}</span>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs sm:text-sm font-semibold text-white bg-navy-900 hover:bg-navy-800 shadow-sm transition-all focus:ring-2 focus:ring-navy-800 focus:ring-offset-2"
            >
              <span>{content.nav.contactBtn}</span>
              <ArrowUpRight className={`w-4 h-4 ${isRtl ? "rotate-270" : ""}`} />
            </button>
          </div>

          {/* Mobile Menu & Language Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onToggleLocale}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-semibold border border-slate-200 text-slate-700 bg-white"
              aria-label="Change Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{content.nav.langToggle}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {content.nav.items.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-start px-3 py-2.5 rounded-md text-sm font-medium ${
                    isActive
                      ? "text-navy-900 bg-slate-100 font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-3">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold text-white bg-navy-900 hover:bg-navy-800"
              >
                <span>{content.nav.contactBtn}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
