/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILL_CATEGORIES } from '../data';
import LucideIcon from './LucideIcon';

export default function SkillsSection() {
  const [filterType, setFilterType] = useState<'all' | 'paid' | 'organic' | 'tech'>('all');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  // Grouping helper to match professional filters
  const getFilteredCategories = () => {
    switch (filterType) {
      case 'paid':
        return SKILL_CATEGORIES.filter((c) => c.id === 'performance-marketing' || c.id === 'email');
      case 'organic':
        return SKILL_CATEGORIES.filter((c) => c.id === 'seo' || c.id === 'social-media' || c.id === 'content');
      case 'tech':
        return SKILL_CATEGORIES.filter((c) => c.id === 'analytics' || c.id === 'seo');
      default:
        return SKILL_CATEGORIES;
    }
  };

  const filteredCategories = getFilteredCategories();

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950 transition-colors relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-1/10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Expertise Spectrum</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Digital Marketing & Analytics Capabilities
          </p>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Practical skills refined through continuous academic research and hands-on e-commerce testing operations.
          </p>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="skills-filter-container">
          {[
            { id: 'all', label: 'All Methodologies' },
            { id: 'paid', label: 'Paid Acquisition & Direct ROI' },
            { id: 'organic', label: 'Organic Traffic & Inbound' },
            { id: 'tech', label: 'Technical SEO & Analytics' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterType(tab.id as any)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                filterType === tab.id
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid Display */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          id="skills-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat, i) => (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="relative group flex flex-col h-full"
                onMouseEnter={() => setHoveredCardId(cat.id)}
                onMouseLeave={() => setHoveredCardId(null)}
              >
                {/* Visual Glow border on hover */}
                <div 
                  className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-300 blur opacity-0 group-hover:opacity-15 pointer-events-none`}
                />

                <div className="relative flex flex-col justify-between h-full p-6 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl transition hover:-translate-y-1 duration-200">
                  
                  {/* Top section */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-xl text-indigo-600 dark:text-indigo-400">
                        <LucideIcon name={cat.iconName} size={22} />
                      </div>
                      <span className="text-[10px] font-mono font-medium tracking-wider text-slate-400 dark:text-slate-500 uppercase px-2 py-0.5 bg-slate-200/40 dark:bg-slate-850 rounded">
                        {cat.id.replace('-', ' ')}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                      {cat.category}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  {/* Bullet Skills Checklist */}
                  <div className="pt-4 border-t border-slate-200/40 dark:border-slate-800/60 space-y-2.5">
                    {cat.skills.map((skill) => (
                      <div key={skill} className="flex gap-2.5 items-start text-xs sm:text-sm">
                        <span className="text-emerald-500 dark:text-emerald-400 mt-1 shrink-0">
                          <LucideIcon name="ShieldCheck" size={14} />
                        </span>
                        <span className="text-slate-700 dark:text-slate-300 font-medium">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Callout Indicator */}
        <div className="mt-12 text-center">
          <small className="text-xs font-mono text-slate-400 dark:text-slate-500">
            *Certified across multiple areas of search and social targeting metrics. Deep understanding of web analytics data attribution pipelines.
          </small>
        </div>

      </div>
    </section>
  );
}
