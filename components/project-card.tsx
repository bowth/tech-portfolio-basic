'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LucideIcon, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  link: string;
  index: number;
}

export function ProjectCard({ 
  title, 
  description, 
  icon: Icon, 
  tags, 
  link,
  index 
}: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="perspective"
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative preserve-3d cursor-pointer w-full h-full"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <Card className="p-6 h-full flex flex-col backface-hidden">
          <div className="text-primary mb-4">
            <Icon className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
          
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
            
            <Button 
              variant="outline" 
              className="w-full gap-2"
              onClick={(e) => {
                e.stopPropagation();
                window.open(link);
              }}
            >
              View Project <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </Card>

        {/* Back of card */}
        <Card className="p-6 h-full flex flex-col absolute inset-0 backface-hidden rotate-y-180">
          <div className="flex flex-col justify-center items-center h-full text-center">
            <h4 className="text-xl font-semibold mb-4">Project Details</h4>
            <p className="text-muted-foreground mb-6">{description}</p>
            <Button 
              variant="default" 
              className="gap-2"
              onClick={(e) => {
                e.stopPropagation();
                window.open(link);
              }}
            >
              View Live Demo <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}