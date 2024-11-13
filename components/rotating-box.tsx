'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

export function RotatingBox() {
  const y = useMotionValue(0);
  const rotate = useTransform(y, [-100, 100], [-45, 45]);
  
  useEffect(() => {
    const controls = animate(y, [0, -50, 50, 0], {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    });
    return controls.stop;
  }, [y]);

  return (
    <motion.div
      style={{ y, rotateX: rotate }}
      className="w-32 h-32 bg-gradient-to-br from-primary to-primary/50 rounded-xl shadow-xl"
    />
  );
}