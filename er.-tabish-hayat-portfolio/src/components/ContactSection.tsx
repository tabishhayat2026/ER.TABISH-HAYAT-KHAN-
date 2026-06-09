/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';

interface SavedMessage {
  id: string;
  name: string;
  company: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    subject: 'Marketing Strategy Consulting',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedText, setCopiedText] = useState<'email' | 'phone' | 'linkedin' | null>(null);
  
  // Local Inbox Logger (to show recruiters Tabish's frontend expertise)
  const [savedMessages, setSavedMessages] = useState<SavedMessage[]>([]);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('tabish_portfolio_messages');
    if (stored) {
      try {
        setSavedMessages(JSON.parse(stored));
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const handleCopy = (text: string, type: 'email' | 'phone' | 'linkedin') => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      const newMessage: SavedMessage = {
        id: Math.random().toString(36).substring(2, 9),
        name: formData.name,
        company: formData.company || 'Not Specified',
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toLocaleString()
      };

      const updated = [newMessage, ...savedMessages];
      setSavedMessages(updated);
      localStorage.setItem('tabish_portfolio_messages', JSON.stringify(updated));

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        subject: 'Marketing Strategy Consulting',
        message: ''
      });
    }, 1500);
  };

  const handleClearInboundLogs = () => {
    localStorage.removeItem('tabish_portfolio_messages');
    setSavedMessages([]);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 transition-colors relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Initiate Growth</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Let's Scale Your Business
          </p>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Dual Form & Info Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column - Contact Detail Blocks */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                ER. TABISH HAYAT
              </h3>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
                Digital Marketing Professional & Entrepreneur
              </p>
              <p className="text-slate-600 dark:text-slate-450 mt-4 leading-relaxed text-sm sm:text-base">
                Looking to recruit a dedicated executioner? Looking for an agency growth consultant or e-commerce operator? Drop a line directly or use the message center on the right.
              </p>
            </div>

            {/* Direct Connect Buttons */}
            <div className="space-y-4">
              
              {/* Email Connection Item */}
              <div className="p-4 bg-white dark:bg-slate-950/60 border border-slate-205 dark:border-slate-800 rounded-2xl flex items-center justify-between shadow-sm">
                <div className="flex gap-4 items-center">
                  <div className="p-2.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-xl shrink-0">
                    <LucideIcon name="Mail" size={20} />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Mail Direct</span>
                    <a href="mailto:er.tabishhayat@gmail.com" className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-indigo-500 block break-all">
                      er.tabishhayat@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('er.tabishhayat@gmail.com', 'email')}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white transition cursor-pointer shrink-0"
                  title="Copy email"
                >
                  <LucideIcon name={copiedText === 'email' ? 'Check' : 'Copy'} size={15} />
                </button>
              </div>

              {/* Phone Connection Item */}
              <div className="p-4 bg-white dark:bg-slate-950/60 border border-slate-205 dark:border-slate-800 rounded-2xl flex items-center justify-between shadow-sm">
                <div className="flex gap-4 items-center">
                  <div className="p-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl shrink-0">
                    <LucideIcon name="Phone" size={20} />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Call Direct</span>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 block break-words">
                      Consultation line (available on request)
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  disabled
                  className="p-2 bg-slate-50 dark:bg-slate-900 rounded-lg text-slate-300 dark:text-slate-700 shrink-0 cursor-not-allowed"
                  title="Confidential"
                >
                  <LucideIcon name="Copy" size={15} />
                </button>
              </div>

              {/* LinkedIn Connection Item */}
              <div className="p-4 bg-white dark:bg-slate-950/60 border border-slate-205 dark:border-slate-800 rounded-2xl flex items-center justify-between shadow-sm">
                <div className="flex gap-4 items-center">
                  <div className="p-2.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-xl shrink-0">
                    <LucideIcon name="Linkedin" size={20} />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">LinkedIn Network</span>
                    <a 
                      href="https://linkedin.com/in/er-tabishhayat" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-indigo-500 block break-all"
                    >
                      linkedin.com/in/er-tabishhayat
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('https://linkedin.com/in/er-tabishhayat', 'linkedin')}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white transition cursor-pointer shrink-0"
                  title="Copy link"
                >
                  <LucideIcon name={copiedText === 'linkedin' ? 'Check' : 'Copy'} size={15} />
                </button>
              </div>

            </div>

            {/* Inbound Logs display (for technical audit) */}
            {savedMessages.length > 0 && (
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setShowAdminPanel(!showAdminPanel)}
                  className="text-xs font-mono font-bold text-slate-550 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 flex items-center gap-1.5 cursor-pointer underline decoration-dotted"
                >
                  <LucideIcon name="Cpu" size={12} />
                  <span>{showAdminPanel ? 'Hide Tech Database View' : `Show Inbound Logs DB (${savedMessages.length})`}</span>
                </button>
                
                {showAdminPanel && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 p-4 rounded-xl bg-slate-900 text-slate-100 border border-slate-800 font-mono text-[11px] space-y-4 max-h-60 overflow-y-auto"
                  >
                    <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                      <span className="text-emerald-400 text-xs font-bold">📂 sqlite_memory_db // messages</span>
                      <button 
                        onClick={handleClearInboundLogs} 
                        className="text-[10px] bg-red-950 text-red-400 hover:bg-red-900 border border-red-500/20 px-2 py-0.5 rounded cursor-pointer"
                      >
                        Truncate Logs
                      </button>
                     </div>
                     {savedMessages.map((msg) => (
                       <div key={msg.id} className="pb-3 border-b border-slate-850/80 space-y-1">
                         <div className="flex justify-between text-slate-400 text-[10px]">
                           <span>By: {msg.name} ({msg.company})</span>
                           <span>{msg.timestamp}</span>
                         </div>
                         <p className="text-indigo-300">Subs: {msg.subject}</p>
                         <p className="text-slate-350">{msg.message}</p>
                       </div>
                     ))}
                  </motion.div>
                )}
              </div>
            )}
          </div>

          {/* Right Column - Premium contact form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
            <AnimatePresence mode="wait">
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-4 font-sans"
                  id="contact-success-state"
                >
                  <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20 shadow-inner">
                    <LucideIcon name="Check" size={28} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                    Growth Dispatch Received!
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, your message has been compiled and saved successfully in local cache logs. Er. Tabish Hayat will follow up in under 12 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-4 px-4 py-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                  >
                    Send Another Dispatch
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  id="contact-portfolio-form"
                >
                  {/* Row 1 - Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rachel Adams"
                        className="w-full px-4 py-3 rounded-xl border border-slate-205 dark:border-slate-800 bg-slate-52 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                        Company / Agency
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. LeadScale Agency"
                        className="w-full px-4 py-3 rounded-xl border border-slate-205 dark:border-slate-800 bg-slate-52 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 text-sm"
                      />
                    </div>
                  </div>

                  {/* Row 2 - Email */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                      Primary Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rachel@domain.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-205 dark:border-slate-800 bg-slate-52 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 text-sm"
                    />
                  </div>

                  {/* Row 3 - Subject Area selection */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                      Growth Subject Matter
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-205 dark:border-slate-800 bg-slate-52 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 text-sm"
                    >
                      <option value="Performance Ads & CAC scaling">Performance Media (Google/Meta Ads)</option>
                      <option value="Organic SEO Audit & Strategy">Technical SEO & Content Authority</option>
                      <option value="Amazon FBA & Listing Optimization">Amazon Listing Optimization</option>
                      <option value="GA4 / Tag Manager Setup">GA4 / Tag Manager Setup</option>
                      <option value="Full-Time Recruiter Interview">Full-Time Hire Inquiry</option>
                      <option value="Other Business Venture">Other Business Ventures</option>
                    </select>
                  </div>

                  {/* Message Body */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                      Your Blueprint Inquiry <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Tabish, we are looking for a marketer with a business background to take care of..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-205 dark:border-slate-800 bg-slate-52 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 text-sm resize-none"
                    />
                  </div>

                  {/* Core Submission button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition duration-200 flex items-center justify-center gap-2 text-sm text-center shadow-lg hover:shadow-xl cursor-pointer select-none"
                    id="submit-contact-button"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Securely...</span>
                      </>
                    ) : (
                      <>
                        <LucideIcon name="Send" size={16} />
                        <span>Dispatch Inbound Inquiry</span>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
