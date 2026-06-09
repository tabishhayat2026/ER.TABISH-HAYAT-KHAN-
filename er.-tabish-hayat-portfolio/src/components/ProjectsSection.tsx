/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import LucideIcon from './LucideIcon';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectDetail, setActiveProjectDetail] = useState<string | null>(null);

  // Group tags dynamically as unique categories
  const categories = ['All', 'Paid & Organic Strategy', 'Search Engine Optimization', 'Social Media', 'E-commerce', 'Analytics', 'Branding'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950 transition-colors relative overflow-hidden">
      <div className="absolute top-1/10 left-1/10 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Marketing Artifacts</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Campaign Strategies & Case Blueprints
          </p>
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            Selected case structures displaying performance testing, search funnel optimization, and data orchestration.
          </p>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-12 max-w-4xl mx-auto" id="projects-filter-container">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow'
                  : 'bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          id="projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => {
              const isDetailOpen = activeProjectDetail === p.id;
              
              return (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800 rounded-2xl flex flex-col justify-between h-full group overflow-hidden hover:shadow-lg transition-shadow duration-200"
                  id={`project-card-${p.id}`}
                >
                  
                  {/* Card Content Top */}
                  <div className="p-6">
                    {/* Header bar within card */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 bg-indigo-500/10 rounded-lg text-indigo-600 dark:text-indigo-400">
                        <LucideIcon name={p.iconName} size={20} />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold border border-transparent dark:border-slate-700">
                        {p.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {p.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-3 leading-relaxed">
                      {p.description}
                    </p>

                    {/* Performance Metrics Highlights */}
                    <div className="space-y-1.5 mb-6 bg-emerald-500/5 dark:bg-emerald-500/5 p-3.5 rounded-xl border border-emerald-500/15">
                      <div className="text-[9px] font-mono font-bold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 mb-1 leading-none">
                        📈 Target Metrics Outcomes
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {p.metrics.slice(0, 2).map((m, idx) => (
                          <div key={idx} className="flex gap-1.5 items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                            <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                              {m}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tag bubbles */}
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span 
                          key={t} 
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200/30 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions Bottom */}
                  <div className="px-6 pb-6 pt-4 border-t border-slate-200/45 dark:border-slate-800/50 bg-slate-100/50 dark:bg-slate-900/10 flex justify-between items-center mt-auto">
                    <button
                      onClick={() => setActiveProjectDetail(isDetailOpen ? null : p.id)}
                      className="text-xs font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 flex items-center gap-1 cursor-pointer"
                    >
                      <span>{isDetailOpen ? 'Close Strategy Map' : 'View Strategy Map'}</span>
                      <LucideIcon name={isDetailOpen ? 'X' : 'ChevronRight'} size={14} className="mt-0.5" />
                    </button>
                    
                    <span className="text-[10px] font-mono text-slate-400">
                      CASE RE-0{p.id === 'campaign-strategy' ? '1' : p.id === 'seo-optimization' ? '2' : p.id === 'social-media-growth' ? '3' : p.id === 'ecommerce-growth' ? '4' : p.id === 'analytics-dashboard' ? '5' : '6'}
                    </span>
                  </div>

                  {/* Nested Expandable Drawer details */}
                  <AnimatePresence>
                    {isDetailOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-6 py-5 space-y-4"
                      >
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-500 block mb-1">Execution Highlights</span>
                          <ul className="space-y-2">
                            {p.highlights.map((h, hidx) => (
                              <li key={hidx} className="flex gap-2 items-start text-xs text-slate-600 dark:text-slate-400">
                                <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                                <span className="leading-relaxed">{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="pt-3 border-t border-slate-100 dark:border-slate-900 flex justify-between items-center">
                          <span className="text-[10px] font-mono text-slate-400">Metrics Validation</span>
                          <div className="flex gap-1">
                            {p.metrics.slice(2).map((m, idx) => (
                              <span key={idx} className="text-[9px] font-mono px-2 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded">
                                {m}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
