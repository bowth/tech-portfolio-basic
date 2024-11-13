'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  backend: ['Node.js', 'Python', 'PostgreSQL', 'Redis'],
  tools: ['Git', 'Docker', 'AWS', 'CI/CD']
};

export function About() {
  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center">
            I'm a passionate developer focused on creating exceptional digital experiences.
            With expertise in both frontend and backend technologies, I bring ideas to life
            through clean, efficient code and intuitive design.
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="p-6">
                <h3 className="font-semibold mb-4 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}