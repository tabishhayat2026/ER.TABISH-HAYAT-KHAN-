/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_EXPERIENCES } from '../data';
import LucideIcon from './LucideIcon';

export default function ExperienceSection() {
  const [activeExpId, setActiveExpId] = useState<string>(BUSINESS_EXPERIENCES[0].id);

  return (
    <section id="experience" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Core Career Path</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Business Management & E-commerce Foundation
          </p>
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            Real experience managing retail cashflows, analyzing customer trends, and scaling digital marketplaces.
          </p>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Experience Selector Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Experience Select List (Tabs style on left) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Select Business Domain
            </span>
            {BUSINESS_EXPERIENCES.map((exp) => {
              const isActive = exp.id === activeExpId;
              const isRetail = exp.type === 'retail';
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveExpId(exp.id)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                    isActive
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg'
                      : 'bg-white dark:bg-slate-950/60 hover:bg-slate-100 dark:hover:bg-slate-900 border-slate-200/60 dark:border-slate-800 text-slate-800 dark:text-slate-300'
                  }`}
                >
                  <div className="flex gap-4 items-center">
                    <div className={`p-2.5 rounded-xl shrink-0 ${
                      isActive 
                        ? 'bg-white/10 text-white' 
                        : 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                    }`}>
                      <LucideIcon name={isRetail ? 'Store' : 'ShoppingBag'} size={20} />
                    </div>
                    <div>
                      <h4 className={`font-bold text-xs sm:text-sm ${isActive ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                        {exp.title}
                      </h4>
                      <p className={`text-xs ${isActive ? 'text-indigo-200' : 'text-slate-500 dark:text-slate-450'}`}>
                        {exp.period}
                      </p>
                    </div>
                  </div>
                  <LucideIcon 
                    name="ChevronRight" 
                    size={16} 
                    className={`transition-transform duration-200 ${isActive ? 'text-white translate-x-1' : 'text-slate-400 group-hover:translate-x-0.5'}`} 
                  />
                </button>
              );
            })}

            {/* Quick Summary Note box */}
            <div className="p-4 bg-emerald-500/5 border border-emerald-500/15 rounded-xl text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
              <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">💼 Practitioner Business Insight</span>
              These operational journeys guarantee that digital marketing choices are backed by a thorough comprehension of physical cost of goods sold, profit margins, competitor pricing, and direct physical sales tactics.
            </div>
          </div>

          {/* Central Details Card Container */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {BUSINESS_EXPERIENCES.map((exp) => {
                if (exp.id !== activeExpId) return null;
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col gap-6"
                    id={`exp-detail-${exp.id}`}
                  >
                    
                    {/* Header Detail */}
                    <div className="flex flex-wrap justify-between items-start gap-4 pb-5 border-b border-slate-200/45 dark:border-slate-800">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                          {exp.company}
                        </p>
                      </div>
                      <span className="px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                        {exp.period}
                      </span>
                    </div>

                    {/* Overall Summary description */}
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Dual Bullet column layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                      
                      {/* Responsibilities list */}
                      <div>
                        <h4 className="text-[12px] font-bold uppercase tracking-wider text-slate-500 mb-3 block">
                          📂 Direct Operational Scope
                        </h4>
                        <ul className="space-y-3">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm">
                              <span className="text-indigo-600 dark:text-indigo-400 mt-1 shrink-0">
                                <LucideIcon name="ChevronRight" size={14} />
                              </span>
                              <span className="text-slate-700 dark:text-slate-300">
                                {resp}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements list */}
                      <div className="p-4 sm:p-5 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl border border-emerald-500/10 h-fit">
                        <h4 className="text-[12px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-1.5">
                          <LucideIcon name="Award" size={16} />
                          <span>Key Accomplishments & Insights</span>
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((ach, idx) => (
                            <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm">
                              <span className="text-emerald-500 dark:text-emerald-400 mt-0.5 shrink-0">
                                <LucideIcon name="Check" size={14} />
                              </span>
                              <span className="text-slate-700 dark:text-slate-350 font-medium">
                                {ach}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
