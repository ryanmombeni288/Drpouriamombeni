"use client";

import React, { useState, useEffect } from "react";
import { siteContentFa, siteContentEn } from "@/data/content";
import { Locale } from "@/types/content";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { AcademicHighlights } from "@/components/AcademicHighlights";
import { Expertise } from "@/components/Expertise";
import { Timeline } from "@/components/Timeline";
import { Research } from "@/components/Research";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("fa");
  const content = locale === "fa" ? siteContentFa : siteContentEn;

  useEffect(() => {
    // Update html attributes when locale toggles
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "fa" ? "rtl" : "ltr";
    document.title = content.meta.title;
  }, [locale, content.meta.title]);

  const toggleLocale = () => {
    setLocale((prev) => (prev === "fa" ? "en" : "fa"));
  };

  return (
    <div className={`min-h-screen flex flex-col ${locale === "en" ? "font-en" : "font-sans"}`}>
      {/* Navigation */}
      <Navbar content={content} locale={locale} onToggleLocale={toggleLocale} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero content={content} locale={locale} />
        <About content={content} locale={locale} />
        <AcademicHighlights content={content} />
        <Expertise content={content} />
        <Timeline content={content} locale={locale} />
        <Research content={content} locale={locale} />
        <Contact content={content} locale={locale} />
      </main>

      {/* Footer */}
      <Footer content={content} locale={locale} />
    </div>
  );
}
