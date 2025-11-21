// Project types
export type ProjectCategory = 'Fintech' | 'Security' | 'Learning' | 'Enterprise' | 'IoT' | 'FamilyOps' | 'Open Source';
export type ProjectStatus =
  | 'Released'
  | 'R&D'
  | 'Community'
  | 'Beta'
  | 'Open Source';

export interface Project {
  name: string;
  description: string;
  categories: ProjectCategory[];
  status: ProjectStatus;
  summary?: string;
  highlight?: string;
  tags?: string[];
  stack?: string[];
  role?: string;
  featured?: boolean;
  weight?: number;
  publishedAt?: string;
  slug?: string;
  link?: string;
  body?: string;
}

export interface ProjectData {
  CostAccounting: Project;
  CurrencyConverter: Project;
  SkillRepeater: Project;
  StudyEveryday: Project;
  BankWork: Project;
  IoTWork: Project;
  SwingTeacher: Project;
  ScheduleEditor: Project;
  RestSecurity: Project;
}

// Page types
export interface PageConfig {
  url?: string;
  component: string;
}

export interface Pages {
  MAIN: PageConfig;
  CONTACT: PageConfig;
  SERVICES: PageConfig;
  PROJECTS: PageConfig;
  PAGE404: PageConfig;
  PRIVACY: PageConfig;
}

// Navigation types
export interface NavigationContextType {
  currentPage: string;
  setPage: (page: string) => void;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface AlertState {
  open: boolean;
  header: string;
  description: string;
  confirmText: string;
}

// Social links
export interface SocialLinks {
  Telegram: string;
  Messenger: string;
  Linkedin: string;
  Instagram: string;
}

