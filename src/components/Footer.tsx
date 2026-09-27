/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, Award, ShieldCheck } from 'lucide-react';

interface FooterProps {
  setCurrentView: (view: string, param?: string) => void;
}

export default function Footer({ setCurrentView }: FooterProps) {
  return (
    <footer className="bg-emerald-950 text-white pt-16 pb-12 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-emerald-900/60">
        {/* Col 1: Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-emerald-950 flex items-center justify-center font-bold text-lg shadow-md">
              AD
            </div>
            <div>
              <span className="font-['Playfair_Display',serif] text-xl font-bold tracking-tight text-white block">
                ADSI
              </span>
              <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold block -mt-1">
                Digital Skills Institute
              </span>
            </div>
          </div>
          <p className="text-emerald-200/80 text-sm leading-relaxed">
            Empowering the next generation of African digital leaders through fully-funded scholarships, expert mentorship, and practical, world-class training.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 text-xs text-amber-400 bg-emerald-900/80 px-3 py-1.5 rounded-full border border-emerald-800">
              <Award className="w-3.5 h-3.5" /> Accredited Digital Academy
            </span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="font-['Playfair_Display',serif] text-lg font-semibold text-white mb-4">
            Explore ADSI
          </h4>
          <ul className="space-y-2.5 text-sm text-emerald-200/80">
            <li>
              <button onClick={() => { setCurrentView('home'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-amber-400 transition-colors">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => { setCurrentView('tracks'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-amber-400 transition-colors">
                All 7 Tracks
              </button>
            </li>
            <li>
              <button onClick={() => { setCurrentView('about'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-amber-400 transition-colors">
                About Our Mission
              </button>
            </li>
            <li>
              <button onClick={() => { setCurrentView('apply'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-amber-400 transition-colors font-semibold text-amber-400">
                Apply For Scholarship
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Popular Tracks */}
        <div>
          <h4 className="font-['Playfair_Display',serif] text-lg font-semibold text-white mb-4">
            Popular Tracks
          </h4>
          <ul className="space-y-2.5 text-sm text-emerald-200/80">
            <li>
              <button onClick={() => { setCurrentView('course-detail', 'virtual-assistant'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-amber-400 transition-colors">
                Virtual Assistant
              </button>
            </li>
            <li>
              <button onClick={() => { setCurrentView('course-detail', 'social-media-management'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-amber-400 transition-colors">
                Social Media Management
              </button>
            </li>
            <li>
              <button onClick={() => { setCurrentView('course-detail', 'ai-automation'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-amber-400 transition-colors">
                AI Automation Specialist
              </button>
            </li>
            <li>
              <button onClick={() => { setCurrentView('course-detail', 'youtube-automation'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-amber-400 transition-colors">
                YouTube Automation
              </button>
            </li>
            <li>
              <button onClick={() => { setCurrentView('course-detail', 'digital-marketing'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-amber-400 transition-colors">
                Digital Marketing
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact & Support */}
        <div>
          <h4 className="font-['Playfair_Display',serif] text-lg font-semibold text-white mb-4">
            Get In Touch
          </h4>
          <div className="space-y-3 text-sm text-emerald-200/80">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <span>admissions@adsi.africa</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>+234 (0) 800 ADSI TECH</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Lagos, Abuja & Nairobi Hubs</span>
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-300 bg-emerald-900/60 px-3 py-1 rounded-md border border-emerald-800">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> 100% Verified Scholarships
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-emerald-300/70 gap-4">
        <p>© {new Date().getFullYear()} African Digital Skills Institute (ADSI). All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Privacy Policy: We protect your personal data with absolute confidentiality."); }} className="hover:text-amber-400 transition-colors">
            Privacy Policy
          </a>
          <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Terms of Service: All scholarship placements are subject to verification."); }} className="hover:text-amber-400 transition-colors">
            Terms of Service
          </a>
          <a href="#support" onClick={(e) => { e.preventDefault(); alert("Support: Contact admissions@adsi.africa for assistance."); }} className="hover:text-amber-400 transition-colors">
            Support Desk
          </a>
        </div>
      </div>
    </footer>
  );
}
