'use client';

import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

const skills = [
  { name: 'Frontend Development', progress: 90 },
  { name: 'Backend Development', progress: 85 },
  { name: 'UI/UX Design', progress: 80 },
  { name: 'DevOps', progress: 75 },
];

export function SkillProgress() {
  return (
    <div className="space-y-6 mt-8">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex justify-between mb-2">
            <span className="font-medium">{skill.name}</span>
            <span className="text-muted-foreground">{skill.progress}%</span>
          </div>
          <Progress value={skill.progress} className="h-2" />
        </motion.div>
      ))}
    </div>
  );
}