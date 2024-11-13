'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, Briefcase } from 'lucide-react';
import { TypewriterEffect } from '@/components/typewriter-effect';

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative mx-auto"
          >
            <div className="w-32 h-32 mx-auto relative mb-4">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="rounded-full object-cover border-4 border-primary/10"
                priority
              />
            </div>
            <TypewriterEffect words={["Hello, I'm", "John Doe"]} />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Full Stack Developer
            <span className="text-primary block mt-2">& UI/UX Designer</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="text-xl text-muted-foreground mb-8"
          >
            Building beautiful, functional, and scalable web applications with a passion for clean code and elegant solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button className="gap-2" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              <Briefcase className="w-4 h-4" />
              View Projects
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Download CV
            </Button>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}