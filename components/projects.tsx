'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/project-card';
import { Code, Layout, Database } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory and payment processing",
    icon: Layout,
    tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    link: "https://github.com/yourusername/ecommerce"
  },
  {
    title: "Task Management API",
    description: "RESTful API for task management with authentication and real-time updates",
    icon: Code,
    tags: ["Node.js", "Express", "MongoDB", "WebSocket"],
    link: "https://github.com/yourusername/task-api"
  },
  {
    title: "Analytics Dashboard",
    description: "Interactive dashboard for visualizing and analyzing business metrics",
    icon: Database,
    tags: ["React", "D3.js", "Material-UI", "Firebase"],
    link: "https://github.com/yourusername/analytics"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}