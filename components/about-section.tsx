'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  backend: ['Node.js', 'ASP.NET Core', 'Laravel', 'Python'],
  database: ['MongoDB', 'MySQL', 'SQL Server', 'Firebase'],
  tools: ['Git', 'Docker', 'Azure', 'AWS']
};

const experiences = [
  {
    period: "2021 - Present",
    title: "Software Engineer",
    description: "Full-stack development focusing on healthcare solutions and project management systems"
  },
  {
    period: "2020 - 2021",
    title: "Junior Developer",
    description: "Worked on various web applications using React and Node.js"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          
          <div className="mb-12">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                I am a dedicated software engineer with a strong foundation in full-stack development. 
                My expertise spans across modern web technologies, and I'm passionate about creating 
                efficient, scalable solutions that solve real-world problems.
              </p>
              
              <p className="text-muted-foreground">
                With experience in healthcare systems and project management tools, I've developed 
                a keen eye for detail and a deep understanding of business requirements.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(skills).map(([category, items]) => (
                  <Card key={category} className="p-4">
                    <h4 className="font-medium mb-2 capitalize">{category}</h4>
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
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Experience</h3>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-l-2 border-primary pl-4"
                  >
                    <div className="text-sm text-muted-foreground">{exp.period}</div>
                    <h4 className="font-semibold">{exp.title}</h4>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}