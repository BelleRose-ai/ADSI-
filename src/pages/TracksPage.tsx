/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { COURSES } from '../data/courses';
import { Sparkles, ArrowRight, Search, Clock, Award, CheckCircle } from 'lucide-react';

interface TracksPageProps {
  setCurrentView: (view: string, param?: string) => void;
}

export default function TracksPage({ setCurrentView }: TracksPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Admin & Operations', 'Marketing & Growth', 'Content & Media', 'Tech & AI'];

  const filteredCourses = COURSES.filter((c) => {
    const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fbfbfa] py-12 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-900/10 px-4 py-1.5 rounded-full">
            ADSI Career Tracks
          </span>
          <h1 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl font-bold text-emerald-950">
            Explore All 7 Fully-Funded Tech Tracks
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Choose your path, master high-income digital skills in 6 weeks, and unlock global remote career opportunities.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-900 text-amber-400 shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search tracks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
            />
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 bg-emerald-950 overflow-hidden">
                  <img
                    src={course.imagePlaceholder}
                    alt={course.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/30 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-emerald-950 text-xs font-bold px-3 py-1 rounded-lg shadow-sm">
                      {course.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-emerald-200 font-medium">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-amber-400" /> {course.duration}</span>
                    <span className="text-amber-400 font-bold">100% Scholarship</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                    {course.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    setCurrentView('course-detail', course.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-3 bg-[#064e3b] hover:bg-emerald-900 text-white font-semibold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-sm group-hover:bg-emerald-800"
                >
                  Learn More <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>
          ))}

          {filteredCourses.length === 0 && (
            <div className="col-span-full py-16 text-center space-y-4 bg-white rounded-3xl border border-slate-200">
              <p className="text-slate-600 text-base">No tracks found matching your search.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="px-6 py-2.5 bg-emerald-900 text-white text-xs font-semibold rounded-xl"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
