// Project types
export interface Project {
  name: string;
  icon: string;
  description: string;
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

