/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Sparkles, BookOpen, GraduationCap } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  setCurrentView: (view: string, param?: string) => void;
}

export default function Header({ currentView, setCurrentView }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (view: string) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#fbfbfa]/95 backdrop-blur-md border-b border-emerald-900/10 px-4 lg:px-12 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: ADSI Logo */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-900 text-amber-400 flex items-center justify-center font-bold text-lg shadow-md group-hover:bg-emerald-800 transition-colors">
            AD
          </div>
          <div>
            <span className="font-['Playfair_Display',serif] text-xl font-bold tracking-tight text-emerald-950 block">
              ADSI
            </span>
            <span className="text-[10px] uppercase tracking-widest text-emerald-800 font-semibold block -mt-1">
              African Digital Skills Institute
            </span>
          </div>
        </button>

        {/* Center: Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <button
            onClick={() => handleNav('home')}
            className={`hover:text-emerald-900 transition-colors ${
              currentView === 'home' ? 'text-emerald-900 font-semibold underline underline-offset-4 decoration-amber-500' : ''
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNav('tracks')}
            className={`hover:text-emerald-900 transition-colors ${
              currentView === 'tracks' ? 'text-emerald-900 font-semibold underline underline-offset-4 decoration-amber-500' : ''
            }`}
          >
            Tracks
          </button>
          <button
            onClick={() => handleNav('about')}
            className={`hover:text-emerald-900 transition-colors ${
              currentView === 'about' ? 'text-emerald-900 font-semibold underline underline-offset-4 decoration-amber-500' : ''
            }`}
          >
            About
          </button>
        </nav>

        {/* Right: Gold Apply Now Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => handleNav('apply')}
            className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-95 flex items-center gap-2 whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            Apply Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-emerald-900/10 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#fbfbfa] border-b border-emerald-900/10 shadow-xl py-6 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <button
            onClick={() => handleNav('home')}
            className="text-left font-medium text-slate-800 py-2 border-b border-slate-100 flex items-center gap-3"
          >
            <BookOpen className="w-4 h-4 text-emerald-800" /> Home
          </button>
          <button
            onClick={() => handleNav('tracks')}
            className="text-left font-medium text-slate-800 py-2 border-b border-slate-100 flex items-center gap-3"
          >
            <GraduationCap className="w-4 h-4 text-emerald-800" /> Explore Tracks
          </button>
          <button
            onClick={() => handleNav('about')}
            className="text-left font-medium text-slate-800 py-2 border-b border-slate-100 flex items-center gap-3"
          >
            <Sparkles className="w-4 h-4 text-emerald-800" /> About ADSI
          </button>
          <button
            onClick={() => handleNav('apply')}
            className="w-full mt-2 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl text-center shadow-md flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            Apply For Scholarship
          </button>
        </div>
      )}
    </header>
  );
}
