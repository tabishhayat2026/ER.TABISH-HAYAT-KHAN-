/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import LucideIcon from './LucideIcon';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const links = [
    { id: 'about', label: 'About me' },
    { id: 'skills', label: 'Skill Spec' },
    { id: 'experience', label: 'Business Journey' },
    { id: 'projects', label: 'Marketing Campaigns' },
    { id: 'why-hire', label: 'Competitive Edge' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-500 dark:text-slate-400 py-16 border-t border-slate-200 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-left pb-12 border-b border-slate-200 dark:border-white/5">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-indigo-600 rounded-xl text-white">
                <LucideIcon name="Sparkles" size={16} />
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-extrabold text-sm tracking-tight leading-none animate-pulse-slow">
                  ER. TABISH HAYAT
                </h4>
                <span className="text-[9px] font-mono tracking-widest text-[#6366f1] leading-none uppercase block">
                  Marketing Professional & Entrepreneur
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Driving Business Growth Through Digital Marketing, Branding & E-commerce. Bridging technology systems and client conversion funnels to maximize return-on-ad-spend.
            </p>
          </div>

          {/* Quick Nav links */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-widest font-mono">
              Deep Navigation
            </h5>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="text-left text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white transition duration-150 cursor-pointer text-xs"
                >
                  // {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Credentials Info block */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-widest font-mono">
              Regional Connections
            </h5>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Serving startups, startups operators, retail firms, and global digital agencies across competitive marketplaces. Available for remote contract roles and strategic growth engineering consultations.
            </p>
            <div className="flex gap-3">
              <a 
                href="mailto:er.tabishhayat@gmail.com" 
                className="p-2 bg-slate-200/50 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-800 text-slate-750 dark:text-slate-300 hover:text-slate-955 dark:hover:text-white rounded-lg transition"
                title="Mail direct"
              >
                <LucideIcon name="Mail" size={15} />
              </a>
              <a 
                href="https://linkedin.com/in/er-tabishhayat" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-slate-200/50 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-800 text-slate-750 dark:text-slate-300 hover:text-slate-955 dark:hover:text-white rounded-lg transition"
                title="LinkedIn network"
              >
                <LucideIcon name="Linkedin" size={15} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <span>
            © {new Date().getFullYear()} Er. Tabish Hayat. All rights reserved.
          </span>
          <span className="font-mono text-[10px] text-slate-500">
            LOCALLY BACKED CACHE STORE // ENCRYPTED IN PRODUCTION
          </span>
        </div>

      </div>
    </footer>
  );
}
