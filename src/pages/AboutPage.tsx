/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Award, ShieldCheck, Users, Globe, ArrowRight, CheckCircle } from 'lucide-react';

interface AboutPageProps {
  setCurrentView: (view: string, param?: string) => void;
}

export default function AboutPage({ setCurrentView }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-[#fbfbfa] py-16 px-4 lg:px-12 space-y-20">
      {/* Hero Mission */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-900/10 px-4 py-1.5 rounded-full">
          About ADSI
        </span>
        <h1 className="font-['Playfair_Display',serif] text-4xl sm:text-6xl font-bold text-emerald-950 leading-[1.15]">
          Empowering Africa's Digital Generation
        </h1>
        <p className="text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
          The African Digital Skills Institute (ADSI) is dedicated to bridging the digital employment gap across Africa by providing world-class, fully-funded tech education and global career placement.
        </p>
      </div>

      {/* Vision & Values */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#fefce8]/70 border border-amber-200/60 rounded-3xl p-8 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-700 flex items-center justify-center font-bold">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-emerald-950">
            Our Vision
          </h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            To train and successfully place 100,000 African youths in high-paying remote tech and digital careers by 2030.
          </p>
        </div>

        <div className="bg-[#fefce8]/70 border border-amber-200/60 rounded-3xl p-8 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-700 flex items-center justify-center font-bold">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-emerald-950">
            Our Mission
          </h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            To make world-class digital skills accessible and affordable through fully-funded scholarships and practical mentorship.
          </p>
        </div>

        <div className="bg-[#fefce8]/70 border border-amber-200/60 rounded-3xl p-8 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-700 flex items-center justify-center font-bold">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-emerald-950">
            Community First
          </h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            We believe in peer learning, daily accountability check-ins, and lifelong professional networks across Africa.
          </p>
        </div>
      </div>

      {/* Impact Stats */}
      <section className="bg-emerald-900 text-white rounded-3xl p-12 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center shadow-xl">
        <div>
          <span className="font-['Playfair_Display',serif] text-4xl font-bold text-amber-400 block mb-1">15,000+</span>
          <span className="text-xs text-emerald-200 uppercase tracking-wider">Students Trained</span>
        </div>
        <div>
          <span className="font-['Playfair_Display',serif] text-4xl font-bold text-amber-400 block mb-1">85%</span>
          <span className="text-xs text-emerald-200 uppercase tracking-wider">Remote Placement Rate</span>
        </div>
        <div>
          <span className="font-['Playfair_Display',serif] text-4xl font-bold text-amber-400 block mb-1">₦450M+</span>
          <span className="text-xs text-emerald-200 uppercase tracking-wider">Total Scholarship Funding</span>
        </div>
        <div>
          <span className="font-['Playfair_Display',serif] text-4xl font-bold text-amber-400 block mb-1">7</span>
          <span className="text-xs text-emerald-200 uppercase tracking-wider">High-Income Tracks</span>
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-4xl mx-auto text-center space-y-6 py-12">
        <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold text-emerald-950">
          Ready to Start Your Digital Journey?
        </h2>
        <p className="text-slate-600 text-base">
          Applications for the current scholarship cohort are now open. Secure your spot today for just ₦10,000.
        </p>
        <div className="pt-4">
          <button
            onClick={() => { setCurrentView('apply'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl shadow-lg transition-all inline-flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-amber-200" /> Apply For Scholarship Now
          </button>
        </div>
      </div>
    </div>
  );
}
