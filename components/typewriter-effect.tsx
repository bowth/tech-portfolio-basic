'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TypewriterEffectProps {
  words: string[];
}

export function TypewriterEffect({ words }: TypewriterEffectProps) {
  const [currentText, setCurrentText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'deleting' | 'done'>('typing');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (phase === 'done') return;

    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (phase === 'typing') {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setCurrentText(prev => prev + currentWord[charIndex]);
          setCharIndex(prev => prev + 1);
        }, 100);
      } else if (wordIndex === 0) { // First word completed
        timeout = setTimeout(() => {
          setPhase('deleting');
        }, 1000);
      }
    } else if (phase === 'deleting') {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(prev => prev.slice(0, -1));
        }, 50);
      } else {
        setWordIndex(1); // Move to second word (name)
        setPhase('typing');
        setCharIndex(0);
      }
    }

    if (wordIndex === 1 && charIndex === words[1].length) {
      setPhase('done');
    }

    return () => clearTimeout(timeout);
  }, [charIndex, currentText, phase, wordIndex, words]);

  return (
    <div className="mb-6">
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`text-lg font-medium ${phase === 'done' ? 'text-2xl font-bold' : 'text-muted-foreground'}`}
      >
        {currentText}
        {phase !== 'done' && <span className="animate-blink">|</span>}
      </motion.h2>
    </div>
  );
}