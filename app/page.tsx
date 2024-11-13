'use client';

import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Projects } from '@/components/projects';
import { ContactForm } from '@/components/contact-form';
import { AnimatedBackground } from '@/components/animated-background';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <ContactForm />
      <Footer />
    </main>
  );
}