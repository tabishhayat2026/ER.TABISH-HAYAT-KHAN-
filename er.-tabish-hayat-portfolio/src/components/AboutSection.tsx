/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import LucideIcon from './LucideIcon';

export default function AboutSection() {
  const quickHighlights = [
    {
      icon: 'GraduationCap',
      title: 'Computer Science Graduate',
      desc: 'Brings advanced analytical logic, script troubleshooting, and technical alignment to marketing automation and Technical SEO.'
    },
    {
      icon: 'Store',
      title: 'E-commerce Operator',
      desc: 'Tested and customized direct FBA product research listing copy, positioning and inventory controls in actual marketplaces.'
    },
    {
      icon: 'Zap',
      title: 'ROAS & CRO Advocate',
      desc: 'Pragmatic analyst striving to optimize user conversions, lower CPA, and configure accurate GA4/Tag Manager attribution events.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400">About Me</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Where Technical Logic Meets Growth Marketing
          </p>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Description Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main About Text Box */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
              Sensing customer psychology, managing logistics, and engineering performance scale.
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base sm:text-lg">
              Hi, I'm <strong className="text-slate-900 dark:text-white font-semibold">Tabish Hayat</strong>, a Computer Science graduate and entrepreneur with hands-on experience in e-commerce and business operations. My journey in business has given me practical insights into customer behavior, product positioning, branding, sales, and growth strategies.
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I am currently building expertise in Digital Marketing with a strong focus on Performance Marketing, Search Engine Optimization (SEO), Social Media Marketing, Content Strategy, Marketing Analytics, and Brand Growth.
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I enjoy solving business problems through marketing and continuously learning new growth strategies that help brands scale in competitive markets.
            </p>

            {/* Quote Block */}
            <div className="p-4 border-l-4 border-emerald-500 bg-slate-100 dark:bg-slate-900/60 rounded-r-xl italic text-slate-700 dark:text-slate-300">
              "Great marketing is not just about attracting attention—it's about understanding business systems, analyzing metrics, and engineering profitable customer paths."
            </div>
          </div>

          {/* Quick Metrics & Bento Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Key Career Superpowers
            </h4>
            
            {quickHighlights.map((hl, i) => (
              <motion.div
                key={hl.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 rounded-2xl bg-white dark:bg-slate-950/60 border border-slate-200/50 dark:border-slate-800/80 shadow-sm flex gap-4 items-start hover:shadow-md transition-all duration-200"
              >
                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-600 dark:text-indigo-400 shrink-0">
                  <LucideIcon name={hl.icon} size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-white">{hl.title}</h5>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {hl.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
