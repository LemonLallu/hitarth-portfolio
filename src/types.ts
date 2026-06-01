export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  metrics?: string[];
  techStack: string[];
  liveLink?: string;
  docLink?: string;
  imageCol1_1: string;
  imageCol1_2: string;
  imageCol2: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
}
