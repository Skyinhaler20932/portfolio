export interface Project {
  title: string;
  desc: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  { title: "Spring Petclinic", desc: "Containerized a Java Spring application with Docker, reducing image size by 80% and improving deployment speed through multi-stage builds and Docker Compose orchestration.", tags: ["Docker", "Docker Compose", "Java"], link: "https://youtu.be/4k7IdSLxh6w" },
  { title: "Light SaaS Landing Page", desc: "Built a high-performance landing page with optimized assets, achieving 35% wider customer reach and 20% sales boost through improved UX and mobile-first design.", tags: ["Next.js", "Tailwind", "UX"], link: "https://youtu.be/7hi5zwO75yc" },
  { title: "AI Startup Landing Page", desc: "Designed and deployed an AI startup landing page with 40% better engagement, 50% faster load times, and responsive layouts driving 35% more mobile traffic.", tags: ["React", "Performance", "Responsive"], link: "https://youtu.be/Z7I5uSRHMHg" },
];
