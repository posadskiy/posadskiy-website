// Project types
export type ProjectCategory = 'Fintech' | 'Security' | 'Learning' | 'Enterprise' | 'IoT' | 'FamilyOps' | 'Open Source';
export type ProjectStatus = 'R&D' | 'Beta' | 'Live' | 'Stable' | 'Archived' | 'Delivered';

export type ProjectTag =
  | 'Fintech'
  | 'Automation'
  | 'FamilyOps'
  | 'Learning'
  | 'Productivity'
  | 'Notifications'
  | 'Libraries'
  | 'Finance'
  | 'APIs'
  | 'Knowledge'
  | 'Open Source'
  | 'Education'
  | 'Desktop'
  | 'Java'
  | 'Enterprise'
  | 'Banking'
  | 'IoT'
  | 'Team Leadership'
  | 'Planning'
  | 'React'
  | 'Auth'
  | 'Security'
  | 'OSS';

export type ProjectRole =
  | 'Creator'
  | 'Developer'
  | 'Maintainer'
  | 'Senior Full Stack Developer'
  | 'Head of Server Software'
  | 'Lead Developer';

export interface Project {
  name: string;
  description: string;
  categories: ProjectCategory[];
  status: ProjectStatus;
  body?: string;
  tags?: ProjectTag[];
  stack?: string[];
  roles?: ProjectRole[];
  featured?: boolean;
  weight?: number;
  from?: string;
  to?: string | 'now';
  slug?: string;
  link?: string;
}

export interface ProjectData {
  CostAccounting: Project;
  CurrencyConverter: Project;
  SkillRepeater: Project;
  StudyEveryday: Project;
  BankWork: Project;
  IoTWork: Project;
  SwingTutor: Project;
  ScheduleEditor: Project;
  RestSecurity: Project;
  UserComponentReact: Project;
  AuthComponentReact: Project;
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
  Github: string;
}

