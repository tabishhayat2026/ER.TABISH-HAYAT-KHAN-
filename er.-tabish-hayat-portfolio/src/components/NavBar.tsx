/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';

interface NavBarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function NavBar({ activeSection, onNavigate, darkMode, onToggleDarkMode }: NavBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll to add dynamic bottom border or shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Business Journey' },
    { id: 'projects', label: 'Campaigns & SEO' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'why-hire', label: 'Advantages' },
    { id: 'contact', label: 'Get in Touch' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-white/70 dark:bg-slate-950/70 border-b border-slate-200/50 dark:border-slate-800/60 backdrop-blur-md shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
      id="main-navigation-bar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Name brand */}
          <button 
            type="button"
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
            id="nav-brand-logo"
          >
            <div className="p-2 bg-indigo-600 rounded-xl text-white shadow-md shadow-indigo-600/10 group-hover:bg-indigo-500 transition">
              <LucideIcon name="Sparkles" size={18} />
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white block">
                ER. TABISH HAYAT
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#6366f1] select-none block leading-none">
                DIGITAL PERFORMANCE ARCHITECT
              </span>
            </div>
          </button>

          {/* Desktop Navigation Link List */}
          <div className="hidden lg:flex items-center gap-1.5" id="nav-desktop-links">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-full tracking-wide transition cursor-pointer ${
                    isActive 
                      ? 'bg-indigo-50 dark:bg-indigo-550/10 text-indigo-700 dark:text-indigo-400 font-bold' 
                      : 'text-slate-650 hover:text-slate-900 dark:text-slate-350 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right utility buttons: Light/Dark Mode + Contact CTA button */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Dark Mode toggle icon button */}
            <button
              onClick={onToggleDarkMode}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-55 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 transition duration-150 cursor-pointer"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              id="theme-toggler-btn"
            >
              <LucideIcon name={darkMode ? 'Sun' : 'Moon'} size={18} />
            </button>

            {/* Resume / Contact action */}
            <button
              onClick={() => handleLinkClick('contact')}
              className="px-4 py-2 text-xs font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:opacity-90 shadow transition cursor-pointer"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Right Controls Hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Toggler inline to save screen space */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-804 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400 transition cursor-pointer"
              id="theme-toggle-mobile"
            >
              <LucideIcon name={darkMode ? 'Sun' : 'Moon'} size={16} />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer"
              id="nav-menu-toggle"
            >
              <LucideIcon name={mobileMenuOpen ? 'X' : 'Menu'} size={20} />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Slide Down drawer wrapper */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 backdrop-blur-lg overflow-hidden"
            id="nav-mobile-drawer"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-indigo-600 text-white'
                        : 'text-slate-700 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-900'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <LucideIcon name="Check" size={14} />}
                  </button>
                );
              })}
              
              <div className="pt-4 border-t border-slate-100 dark:border-slate-900 select-none">
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="w-full text-center py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-sm cursor-pointer shadow"
                >
                  Schedule Consulting Session
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}
