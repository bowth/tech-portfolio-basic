'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'React', x: -20, y: -80 },
  { name: 'TypeScript', x: 40, y: -40 },
  { name: 'Next.js', x: -30, y: 20 }
];

export function FloatingBadges() {
  return (
    <div className="relative w-full h-full">
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          className="absolute left-1/2 top-1/2"
          initial={{ opacity: 0, x: skill.x, y: skill.y }}
          animate={{
            opacity: 1,
            x: [skill.x, skill.x + 10, skill.x - 10, skill.x],
            y: [skill.y, skill.y - 10, skill.y + 10, skill.y],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="px-3 py-1 rounded-md bg-background/80 backdrop-blur-sm border shadow-lg">
            <span className="font-medium text-sm">{skill.name}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}