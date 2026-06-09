/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Zap,
  Search,
  TrendingUp,
  BarChart3,
  PenTool,
  Mail,
  Megaphone,
  ShoppingBag,
  BarChart,
  Layers,
  Lightbulb,
  Briefcase,
  LineChart,
  Cpu,
  Route,
  Award,
  Sparkles,
  Sun,
  Moon,
  ExternalLink,
  ChevronRight,
  Copy,
  Check,
  Linkedin,
  Send,
  Github,
  Phone,
  ArrowRight,
  GraduationCap,
  Store,
  Globe,
  ShieldCheck,
  Menu,
  X,
  MapPin,
  Calendar,
  ThumbsUp,
  MessageSquare
} from 'lucide-react';

const icons: Record<string, React.FC<any>> = {
  Zap,
  Search,
  TrendingUp,
  BarChart3,
  PenTool,
  Mail,
  Megaphone,
  ShoppingBag,
  BarChart,
  Layers,
  Lightbulb,
  Briefcase,
  LineChart,
  Cpu,
  Route,
  Award,
  Sparkles,
  Sun,
  Moon,
  ExternalLink,
  ChevronRight,
  Copy,
  Check,
  Linkedin,
  Send,
  Github,
  Phone,
  ArrowRight,
  GraduationCap,
  Store,
  Globe,
  ShieldCheck,
  Menu,
  X,
  MapPin,
  Calendar,
  ThumbsUp,
  MessageSquare
};

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export default function LucideIcon({ name, className = '', size, strokeWidth }: LucideIconProps) {
  const IconComponent = icons[name];
  if (!IconComponent) {
    // Fallback to Sparkles icon if name match fails
    return <Sparkles className={className} size={size} strokeWidth={strokeWidth} />;
  }
  return <IconComponent className={className} size={size} strokeWidth={strokeWidth} />;
}
