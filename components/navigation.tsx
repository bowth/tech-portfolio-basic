'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { Home, User, Briefcase, Phone } from 'lucide-react';

const navItems = [
  { label: "Home", icon: Home, href: "#home" },
  { label: "About", icon: User, href: "#about" },
  { label: "Projects", icon: Briefcase, href: "#projects" },
  { label: "Contact", icon: Phone, href: "#contact" }
];

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          Portfolio
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="gap-2 hidden md:flex"
              onClick={() => scrollToSection(item.href.substring(1))}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Button>
          ))}
          <ThemeToggle />
        </motion.div>
      </div>
    </nav>
  );
}