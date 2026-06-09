/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { WHY_HIRE_HIGHLIGHTS } from '../data';
import LucideIcon from './LucideIcon';

export default function WhyHireSection() {
  return (
    <section id="why-hire" className="py-20 bg-white dark:bg-slate-950 transition-colors relative overflow-hidden">
      {/* Background decoration blur */}
      <div className="absolute top-1/3 left-1/10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Competitive Advantage</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Why Hire Me
          </p>
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            A powerful synthesis of technical, analytical, and operational capacities built to drive corporate growth.
          </p>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="why-hire-grid">
          {WHY_HIRE_HIGHLIGHTS.map((item, idx) => {
            // Pick a distinctive gradient/accent depending on the indices
            const isFeatured = idx === 6; // Highlight the Marketing + Business combo as the ultimate anchor
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`relative rounded-3xl p-6 border transition hover:-translate-y-1 duration-200 flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white border-indigo-500/30 md:col-span-2 lg:col-span-3 lg:flex-row items-center lg:gap-8 p-8 md:p-10 shadow-xl'
                    : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200/50 dark:border-slate-800 text-slate-850 dark:text-slate-300'
                }`}
                id={`why-hire-card-${item.id}`}
              >
                {/* Accent line for non-featured */}
                {!isFeatured && (
                  <div className="absolute top-0 left-6 right-6 h-1 w-12 bg-indigo-500 rounded-b-full" />
                )}

                {/* Left side / Top side icon details */}
                <div className={isFeatured ? 'lg:flex-1 space-y-4' : 'space-y-4'}>
                  <div className="flex gap-4 items-center">
                    <div className={`p-3 rounded-xl shrink-0 ${
                      isFeatured
                        ? 'bg-indigo-500 text-white'
                        : 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                    }`}>
                      <LucideIcon name={item.iconName} size={22} />
                    </div>
                    <h3 className={`text-lg font-bold leading-tight ${isFeatured ? 'text-white text-xl sm:text-2xl' : 'text-slate-900 dark:text-white'}`}>
                      {item.title}
                    </h3>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed ${isFeatured ? 'text-indigo-200 text-sm sm:text-base' : 'text-slate-500 dark:text-slate-400'}`}>
                    {item.description}
                  </p>
                </div>

                {/* Featured Extra visual badge (Only for the main hybrid combination card) */}
                {isFeatured && (
                  <div className="mt-6 lg:mt-0 lg:p-6 bg-white/5 border border-white/10 rounded-2xl p-4 lg:w-80 space-y-3 shrink-0">
                    <span className="text-[10px] font-mono tracking-widest text-indigo-300 block uppercase font-bold">The Multiplier Effect</span>
                    <p className="text-xs text-indigo-100 leading-relaxed">
                      "Tabish bridges technical computer science systems, retail enterprise operations, and conversion analytics to optimize cost-savings and generate revenue scale."
                    </p>
                    <div className="flex gap-2 pt-1">
                      <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/25">
                        TECH
                      </span>
                      <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/25">
                        BUSINESS
                      </span>
                      <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-400 border border-purple-500/25">
                        MARKETING
                      </span>
                    </div>
                  </div>
                )}

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
