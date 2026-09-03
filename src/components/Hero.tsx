"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SiteContent, Locale } from "@/types/content";
import { Award, ArrowLeft, ArrowRight, GraduationCap, CheckCircle2, ChevronDown } from "lucide-react";

interface HeroProps {
  content: SiteContent;
  locale: Locale;
}

export const Hero: React.FC<HeroProps> = ({ content, locale }) => {
  const isProd = process.env.NODE_ENV === "production";
  const prefix = isProd ? "/Drpouriamombeni" : "";
  const [imgSrc, setImgSrc] = useState<string>(`${prefix}/images/pouria-mombeni.jpg`);
  const isRtl = locale === "fa";

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background architectural grid & subtle glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#0b1324 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Copy Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-start">
            {/* Top distinction badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-navy-900 text-white text-xs sm:text-sm font-medium shadow-sm mb-6 border border-navy-800">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>{content.hero.greeting}</span>
              <span className="text-slate-400">|</span>
              <span className="text-accent font-semibold">{content.hero.highlightRank}</span>
            </div>

            {/* Main Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight">
              {content.hero.name}
            </h1>

            {/* Subtitle / Professional designation */}
            <div className="mt-4 flex items-center gap-2 text-base sm:text-lg lg:text-xl font-semibold text-slate-700">
              <GraduationCap className="w-5 h-5 text-accent shrink-0" />
              <span>{content.hero.title}</span>
            </div>

            {/* Academic Honor Highlight Card */}
            <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors max-w-xl">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-amber-50 text-accent-dark shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent-dark bg-amber-100/60 px-2 py-0.5 rounded">
                      {content.hero.highlightRank}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {content.hero.highlightField}
                    </span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {isRtl
                      ? "احراز رتبه دوم در آزمون سراسری دکتری تخصصی مدیریت صنعتی کل کشور"
                      : "Honored with 2nd national rank in competitive Ph.D. Industrial Management examination"}
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Bio Paragraph */}
            <p className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              {content.hero.bio}
            </p>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("highlights")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm text-white bg-navy-900 hover:bg-navy-800 shadow-md shadow-navy-950/10 transition-all transform active:scale-98"
              >
                <span>{content.hero.primaryCta}</span>
                {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs transition-all"
              >
                <span>{content.hero.secondaryCta}</span>
              </button>
            </div>

            {/* Academic credibility trust badges */}
            <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{isRtl ? "دکترای اقتصاد تخصصی" : "Ph.D. in Economics"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{isRtl ? "پژوهش‌های کمی و کاربردی" : "Empirical Operations Research"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{isRtl ? "بهینه‌سازی سیستم‌های تصمیم‌گیری" : "Decision Science Optimization"}</span>
              </div>
            </div>
          </div>

          {/* Portrait Photo Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer decorative architectural frame */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-b from-slate-200 via-slate-100 to-transparent opacity-70 -z-10" />
              
              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-white p-3 shadow-xl border border-slate-200/90 group">
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-navy-950">
                  <Image
                    src={imgSrc}
                    alt={content.hero.portraitAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 450px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-102"
                    priority
                    onError={() => {
                      // Fallback gracefully to professional SVG placeholder if JPG is minimal or missing
                      const fallback = `${prefix}/images/pouria-mombeni-placeholder.svg`;
                      if (imgSrc !== fallback) {
                        setImgSrc(fallback);
                      }
                    }}
                  />

                  {/* Gradient overlay at bottom for executive finish */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent pointer-events-none" />

                  {/* Subtitle tag overlaid on portrait */}
                  <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-white">
                    <div>
                      <p className="text-sm font-bold tracking-tight text-white">
                        {content.hero.name}
                      </p>
                      <p className="text-xs text-slate-300">
                        {isRtl ? "دکترای اقتصاد" : "Doctor of Economics"}
                      </p>
                    </div>
                    <div className="px-2.5 py-1 rounded bg-navy-900/90 border border-accent/40 text-[11px] font-medium text-accent">
                      {isRtl ? "رتبه ۲ دکتری" : "Rank 2 Ph.D."}
                    </div>
                  </div>
                </div>

                {/* Subtle caption beneath photo */}
                <div className="mt-3 px-1 py-1 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                    Official Profile
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {isRtl ? "پژوهشگر اقتصاد و مدیریت صنعتی" : "Economics & Management"}
                  </span>
                </div>
              </div>

              {/* Floating aesthetic accent tag */}
              <div
                className={`absolute -bottom-4 ${
                  isRtl ? "-left-4" : "-right-4"
                } hidden sm:flex items-center gap-3 bg-white py-2.5 px-4 rounded-xl shadow-lg border border-slate-200 z-10`}
              >
                <div className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
                <div className="text-xs text-start">
                  <p className="font-bold text-slate-800">
                    {isRtl ? "آماده همکاری علمی و مشاوره‌ای" : "Open for Academic Collaboration"}
                  </p>
                  <p className="text-slate-500 text-[11px]">
                    {isRtl ? "پژوهش، تحلیل و داوری مقالات" : "Research, Advisory & Peer Review"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Down indicator */}
        <div className="mt-14 sm:mt-20 flex justify-center">
          <button
            onClick={() => scrollTo("about")}
            className="p-2 rounded-full text-slate-400 hover:text-navy-900 hover:bg-slate-100 transition-colors animate-bounce focus:outline-none"
            aria-label="Scroll down to About section"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
