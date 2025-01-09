// types/portfolio.ts

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface Project {
  id: string;
  name: string;
  role: string;
  description: string;
  tools: string[];
  demo?: string;
  code?: string;
  image?: string;
}
