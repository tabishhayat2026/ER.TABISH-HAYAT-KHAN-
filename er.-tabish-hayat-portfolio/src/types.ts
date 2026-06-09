/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SkillItem {
  name: string;
  rating?: number; // scale 1-5 or percentage
}

export interface SkillCategory {
  id: string;
  category: string;
  iconName: string; // Lucide icon identifier
  description?: string;
  skills: string[];
}

export interface BusinessExperience {
  id: string;
  title: string;
  type: 'retail' | 'ecommerce';
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  metrics: string[]; // marketing outcomes (e.g., "35% CPA decrease", "2.4x ROAS")
  highlights: string[];
  iconName: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  verificationId?: string;
  skillsVerified: string[];
}

export interface WhyHireHighlight {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
