export type Locale = "fa" | "en";

export interface NavItem {
  id: string;
  label: string;
}

export interface AcademicHighlight {
  id: string;
  title: string;
  subtitle: string;
  iconName: "award" | "grad" | "briefcase" | "chart";
  badge?: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  iconName: "trending-up" | "cpu" | "line-chart" | "book-open";
  bullets: string[];
}

export interface TimelineItem {
  id: string;
  degreeOrRole: string;
  institutionOrOrg: string;
  period: string;
  description: string;
  isPlaceholder?: boolean;
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: "journal" | "conference" | "working_paper";
  linkText?: string;
  isPlaceholder?: boolean;
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  iconName: "mail" | "linkedin" | "scholar" | "researchgate" | "phone";
  isPlaceholder?: boolean;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  nav: {
    name: string;
    englishName: string;
    items: NavItem[];
    langToggle: string;
    contactBtn: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    highlightRank: string;
    highlightField: string;
    bio: string;
    primaryCta: string;
    secondaryCta: string;
    portraitAlt: string;
  };
  about: {
    sectionTag: string;
    title: string;
    leadParagraph: string;
    bodyParagraph: string;
    placeholderNote: string;
    stats: {
      value: string;
      label: string;
    }[];
  };
  academicHighlights: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: AcademicHighlight[];
  };
  expertise: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: ExpertiseItem[];
  };
  educationAndExperience: {
    sectionTag: string;
    title: string;
    subtitle: string;
    educationTitle: string;
    experienceTitle: string;
    educationItems: TimelineItem[];
    experienceItems: TimelineItem[];
  };
  research: {
    sectionTag: string;
    title: string;
    subtitle: string;
    placeholderNotice: string;
    items: PublicationItem[];
  };
  contact: {
    sectionTag: string;
    title: string;
    subtitle: string;
    channelsTitle: string;
    academicProfilesTitle: string;
    placeholderNotice: string;
    links: SocialLink[];
  };
  footer: {
    name: string;
    tagline: string;
    rights: string;
    quickLinks: string;
    designedWith: string;
  };
}
