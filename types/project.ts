export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  client: string;
  year: string;
}

export interface ProjectsData {
  projects: Project[];
}
