/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import LucideIcon from './LucideIcon';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  // Simulator State for marketing agency interactive demo
  const [budget, setBudget] = useState(2500);
  const [conversionRate, setConversionRate] = useState(1.8);
  const [industry, setIndustry] = useState<'retail' | 'ecommerce'>('ecommerce');

  // Realistic estimates based on standard Tabish optimizations
  const baseCpc = industry === 'ecommerce' ? 0.85 : 1.2;
  const clicks = Math.round(budget / baseCpc);
  
  // Tabish's optimized conversion increment representing real growth
  const optimizedConversion = conversionRate * 1.5;
  const standardConversions = Math.round(clicks * (conversionRate / 100));
  const optimizedConversions = Math.round(clicks * (optimizedConversion / 100));
  
  const avgOrderValue = industry === 'ecommerce' ? 65 : 120;
  const standardRevenue = standardConversions * avgOrderValue;
  const optimizedRevenue = optimizedConversions * avgOrderValue;
  const profitIncrease = optimizedRevenue - standardRevenue;
  
  const optimizedRoas = (optimizedRevenue / budget).toFixed(1);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient FX */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/10 right-1/10 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Modern Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Headline & Copy */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
            >
              <LucideIcon name="Sparkles" size={12} className="text-indigo-600 dark:text-indigo-400" />
              <span>Digital Marketing Professional • Entrepeneur</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight"
                id="hero-title"
              >
                ER. TABISH <span className="gradient-text">HAYAT</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-300"
                id="hero-subtitle"
              >
                Digital Marketing Professional & Explorer of Business Scale
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
                id="hero-description"
              >
                I am passionate about helping businesses grow through digital marketing, performance advertising, branding, content strategy, and e-commerce. My goal is to create measurable business growth using modern marketing techniques and data-driven decision making.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
              id="hero-ctas"
            >
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition duration-200 flex items-center gap-2 cursor-pointer border border-transparent"
                id="cta-portfolio"
              >
                <span>View Portfolio</span>
                <LucideIcon name="ArrowRight" size={16} />
              </button>
              
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl font-medium transition duration-200 flex items-center gap-2 cursor-pointer border border-slate-200 dark:border-slate-700"
                id="cta-contact"
              >
                <span>Contact Me</span>
                <LucideIcon name="Mail" size={16} />
              </button>
              
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3.5 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300 rounded-xl font-medium transition duration-200 flex items-center gap-2 cursor-pointer border border-slate-200 dark:border-slate-800"
                id="cta-about"
              >
                <span>About Me</span>
              </button>
            </motion.div>

            {/* Core Pillars Mini Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200 dark:border-slate-800 max-w-lg"
              id="hero-pillars"
            >
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">ROAS-Focused</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Marketing philosophy</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">SEO & SEM</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Search alignment</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">E-com FBA</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Operator experience</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Premium Marketing Mockup & ROI Sandbox */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
            id="hero-interactive"
          >
            {/* Ambient Glow Wrapper */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-2xl blur-lg opacity-25 dark:opacity-35 pointer-events-none" />
            
            <div className="relative glass p-6 rounded-2xl bg-slate-900/40 text-left border border-slate-200/20 dark:border-slate-800/80 shadow-2xl">
              {/* Simulator Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs font-mono text-slate-400 ml-2">ROAS_GROWTH_ENGINE.sh</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  READY
                </span>
              </div>

              {/* Dynamic Headline inside sandbox */}
              <div className="mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Interactive Sandbox</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mt-0.5">
                  <LucideIcon name="LineChart" className="text-indigo-400" size={18} />
                  See Tabish's Marketing Value
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Adjust standard parameters below to see how Tabish's optimization strategies raise revenue efficiency.
                </p>
              </div>

              {/* Input Adjusters */}
              <div className="space-y-4">
                {/* Sector Switch */}
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                    Industry Verticals
                  </label>
                  <div className="grid grid-cols-2 gap-2 bg-slate-950 p-1 rounded-lg border border-slate-800">
                    <button
                      type="button"
                      onClick={() => setIndustry('ecommerce')}
                      className={`py-1.5 text-xs font-medium rounded-md transition ${industry === 'ecommerce' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
                    >
                      Amazon / E-commerce
                    </button>
                    <button
                      type="button"
                      onClick={() => setIndustry('retail')}
                      className={`py-1.5 text-xs font-medium rounded-md transition ${industry === 'retail' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
                    >
                      Local Retail Operations
                    </button>
                  </div>
                </div>

                {/* Ad Budget Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-slate-500 dark:text-slate-400">Monthly Ad Budget</span>
                    <span className="text-indigo-400 font-bold">${budget.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="10000"
                    step="500"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full accent-indigo-500 bg-slate-950 rounded-lg appearance-none h-1.5 cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1">
                    <span>$500</span>
                    <span>$5,000</span>
                    <span>$10,000</span>
                  </div>
                </div>

                {/* Std Conversion Rate Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-slate-500 dark:text-slate-400">Baseline Conversion Rate</span>
                    <span className="text-emerald-400 font-bold">{conversionRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="5.0"
                    step="0.1"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full accent-emerald-500 bg-slate-950 rounded-lg appearance-none h-1.5 cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1">
                    <span>0.5%</span>
                    <span>2.5%</span>
                    <span>5.0%</span>
                  </div>
                </div>
              </div>

              {/* Live Simulated Result Output cards */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-3 font-mono">
                {/* Traffic summary line */}
                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
                  <span>Est. Ad Clicks (@ avg CPC ${baseCpc}):</span>
                  <span className="text-slate-900 dark:text-white font-bold">{clicks.toLocaleString()}</span>
                </div>

                {/* Outperform Projection Box */}
                <div className="bg-slate-950 rounded-xl p-3 border border-indigo-500/20 shadow-inner">
                  <div className="flex justify-between items-center text-xs pb-2 mb-2 border-b border-slate-900">
                    <span className="text-slate-400">Tabish's Optimizations:</span>
                    <span className="text-emerald-400 font-bold">1.5x Campaign Conversion Lift</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="p-1">
                      <p className="text-[10px] text-slate-500">Unoptimized Sales</p>
                      <p className="text-sm font-bold text-slate-400">${standardRevenue.toLocaleString()}</p>
                    </div>
                    <div className="p-1 border-l border-slate-900">
                      <p className="text-[10px] text-emerald-400 font-semibold">★ Tabish's Sales Value</p>
                      <p className="text-sm font-bold text-emerald-400">${optimizedRevenue.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                {/* Final ROI Metrics Row */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20 flex flex-col justify-center">
                    <span className="text-[9px] text-emerald-400 uppercase tracking-widest">Added Profit</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">+${profitIncrease.toLocaleString()}</span>
                  </div>
                  <div className="bg-indigo-500/10 p-2 rounded-lg border border-indigo-500/20 flex flex-col justify-center">
                    <span className="text-[9px] text-indigo-400 uppercase tracking-widest">Projected ROAS</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{optimizedRoas}x Return</span>
                  </div>
                </div>

                {/* CTA inside sandbox */}
                <div className="text-[10px] text-center text-indigo-400/80 mt-2 italic">
                  *Figures calculated using real conversion optimization formulas.
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
