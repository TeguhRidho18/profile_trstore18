// Fix: Added React import to resolve missing namespace 'React' for ReactNode
import React from 'react';

export interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: React.ReactNode;
}