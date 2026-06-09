/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CERTIFICATIONS } from '../data';
import LucideIcon from './LucideIcon';

export default function CertificationsSection() {
  const [verifyingId, setVerifyingId] = useState<string | null>(null);
  const [successVerifiedId, setSuccessVerifiedId] = useState<string | null>(null);

  const handleVerify = (certId: string, verificationId: string) => {
    setVerifyingId(certId);
    setSuccessVerifiedId(null);
    
    // Simulate real-time secure registration block lookup
    setTimeout(() => {
      setVerifyingId(null);
      setSuccessVerifiedId(certId);
    }, 1200);
  };

  return (
    <section id="certifications" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 transition-colors relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Credentials</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Industry & Technical Certifications
          </p>
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            Authenticated professional certifications demonstrating core knowledge of search algorithms, conversion mechanics, and tracking platforms.
          </p>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-stretch" id="certs-grid">
          {CERTIFICATIONS.map((cert) => {
            const isVerifying = verifyingId === cert.id;
            const isVerifiedSuccess = successVerifiedId === cert.id;
            
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-slate-950/60 border border-slate-200/50 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-200 h-full relative"
                id={`cert-card-${cert.id}`}
              >
                {/* Accent Tag */}
                <span className="absolute top-4 right-4 text-[9px] font-mono font-bold uppercase py-0.5 px-2 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-950 rounded-md">
                  {cert.date}
                </span>

                {/* Issuer Details */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-indigo-500/10 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 rounded-lg shrink-0">
                      <LucideIcon name="GraduationCap" size={18} />
                    </div>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                      {cert.issuer}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                    {cert.name}
                  </h3>

                  {/* Skills verified list */}
                  <div className="flex flex-wrap gap-1 mb-6">
                    {cert.skillsVerified.map((sk) => (
                      <span 
                        key={sk} 
                        className="text-[10px] font-medium px-2 py-0.5 bg-slate-105 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded border border-slate-200/30 dark:border-slate-800"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Section - Verification widget */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-900 flex items-center justify-between mt-auto">
                  
                  {/* Verification status output */}
                  <div className="text-left font-mono">
                    <span className="text-[9px] text-slate-400 uppercase tracking-widest block">Credential ID</span>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-300">
                      {cert.verificationId || 'PENDING'}
                    </span>
                  </div>

                  {/* Action / Trigger button */}
                  {cert.verificationId && (
                    <div className="relative shrink-0">
                      <AnimatePresence mode="wait">
                        {isVerifiedSuccess ? (
                          <motion.div
                            key="verified"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2.5 py-1.5 rounded-lg border border-emerald-500/15"
                          >
                            <LucideIcon name="Check" size={13} strokeWidth={3} />
                            <span>Verified</span>
                          </motion.div>
                        ) : (
                          <motion.button
                            key="btn"
                            disabled={isVerifying}
                            onClick={() => handleVerify(cert.id, cert.verificationId!)}
                            className={`text-[11px] font-bold px-3 py-1.5 rounded-lg border transition cursor-pointer flex items-center gap-1.5 ${
                              isVerifying
                                ? 'bg-slate-50 border-slate-200 text-slate-400 dark:bg-slate-900 dark:border-slate-800'
                                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-850 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            {isVerifying ? (
                              <>
                                <span className="w-2.5 h-2.5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin shrink-0" />
                                <span>Securing...</span>
                              </>
                            ) : (
                              <>
                                <LucideIcon name="Globe" size={11} />
                                <span>Verify Registry</span>
                              </>
                            )}
                          </motion.button>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Cert Placeholders Label Footer */}
        <div className="max-w-2xl mx-auto p-4 bg-indigo-500/5 border border-indigo-500/15 rounded-2xl text-center text-xs text-slate-600 dark:text-slate-450 mt-12 leading-relaxed">
          🏆 <strong>Continuous Platform Training</strong>: Placeholders above mock standard Google & Meta expert tracks. Ready to provide full academic credentials and official PDF files to corporate recruiters or managing clients on request.
        </div>

      </div>
    </section>
  );
}
