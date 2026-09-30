/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { COURSES } from '../data/courses';
import { Sparkles, ArrowRight, ShieldCheck, Users, Award, BookOpen, CheckCircle, Laptop, Clock } from 'lucide-react';

interface LandingPageProps {
  setCurrentView: (view: string, param?: string) => void;
}

export default function LandingPage({ setCurrentView }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-[#fbfbfa]">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 px-4 lg:px-12 bg-gradient-to-b from-[#fefce8]/60 via-[#fbfbfa] to-[#fbfbfa]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-900/10 text-emerald-900 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-amber-600" /> Fully-Funded Tech Scholarship Cohort Opening Soon
            </div>
            <h1 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-950 leading-[1.15]">
              Accelerate Your Digital Career in <span className="text-emerald-800 underline decoration-amber-500 decoration-wavy underline-offset-8">6 Weeks</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 font-normal leading-relaxed max-w-2xl">
              Gain world-class digital skills with 100% scholarship funding. Access expert mentorship, hands-on training, and remote career opportunities for a small ₦10,000 commitment fee.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                disabled
                className="px-8 py-4 bg-stone-300 text-slate-600 font-semibold rounded-xl shadow-sm flex items-center justify-center gap-3 text-base cursor-not-allowed opacity-90"
              >
                Applications Open Oct 11
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('tracks-grid');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else setCurrentView('tracks');
                }}
                className="px-8 py-4 bg-white hover:bg-slate-50 text-emerald-950 font-semibold rounded-xl border-2 border-emerald-900/20 shadow-sm transition-all flex items-center justify-center gap-2 text-base"
              >
                Explore Tracks
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Zero Tech Background Needed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Global Remote Jobs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Verified Certificate</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Placeholder */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* Decorative Backdrop Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/20 to-emerald-700/20 rounded-3xl blur-2xl -z-10"></div>
              
              <div className="bg-emerald-900 rounded-3xl p-3 shadow-2xl border border-emerald-800">
                <div className="relative rounded-2xl overflow-hidden bg-emerald-950 aspect-[4/3] flex flex-col items-center justify-center text-center p-6 text-white group">
                  <img
                    src="https://i.postimg.cc/zXWx10rn/Gemini-Generated-Image-94zy5h94zy5h94zy.jpg"
                    alt="African student smiling with laptop"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback visual if image file not loaded yet
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Fallback structured content if image is placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/40 to-transparent flex flex-col justify-end p-8 text-left">
                    <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">
                      ADSI Scholar Success
                    </span>
                    <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white mb-1">
                      "From Beginner to Remote Professional in 6 Weeks"
                    </h3>
                    <p className="text-xs text-emerald-200">
                      Over 15,000 African youths trained and successfully placed in global remote careers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                  ₦10k
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Fully Funded</p>
                  <p className="text-[11px] text-slate-500">Scholarship Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-emerald-900 text-white py-8 px-4 lg:px-12 shadow-inner">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-emerald-800">
          <div className="flex flex-col items-center justify-center p-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-amber-400 flex items-center justify-center mb-3 shadow-md">
              <Laptop className="w-6 h-6" />
            </div>
            <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-white">100% Online</h3>
            <p className="text-sm text-emerald-200 mt-1">Learn at your own pace from anywhere in Africa with mobile-friendly lessons.</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 pt-6 md:pt-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-amber-400 flex items-center justify-center mb-3 shadow-md">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-white">Expert Mentorship</h3>
            <p className="text-sm text-emerald-200 mt-1">Daily accountability check-ins and live guidance from seasoned industry professionals.</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 pt-6 md:pt-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-amber-400 flex items-center justify-center mb-3 shadow-md">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-white">Recognized Certificate</h3>
            <p className="text-sm text-emerald-200 mt-1">Industry-endorsed certification designed to unlock remote jobs and global clients.</p>
          </div>
        </div>
      </section>

      {/* Why Choose ADSI */}
      <section className="py-20 px-4 lg:px-12 bg-[#fbfbfa]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-900/10 px-3 py-1 rounded-full">
              The ADSI Advantage
            </span>
            <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold text-emerald-950">
              Why Choose the African Digital Skills Institute?
            </h2>
            <p className="text-slate-600 text-base">
              We remove every barrier standing between you and a prosperous digital career. No prior experience or technical background is required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#fefce8]/70 border border-amber-200/60 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-500/15 text-amber-700 flex items-center justify-center mb-6 font-bold text-xl">
                  01
                </div>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-emerald-950 mb-3">
                  Real-World Skills
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  No boring textbook theory. Every track is built around practical, hands-on projects that you can immediately add to your professional portfolio to impress clients.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-amber-200/40 flex items-center gap-2 text-xs font-semibold text-amber-800">
                <CheckCircle className="w-4 h-4" /> Practical Portfolio Projects
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#fefce8]/70 border border-amber-200/60 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-500/15 text-amber-700 flex items-center justify-center mb-6 font-bold text-xl">
                  02
                </div>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-emerald-950 mb-3">
                  Beginner-Friendly
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Designed specifically for absolute beginners. We break down complex digital tools and modern technologies into simple, step-by-step video lessons anyone can master.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-amber-200/40 flex items-center gap-2 text-xs font-semibold text-amber-800">
                <CheckCircle className="w-4 h-4" /> Zero Tech Background Needed
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#fefce8]/70 border border-amber-200/60 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-500/15 text-amber-700 flex items-center justify-center mb-6 font-bold text-xl">
                  03
                </div>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-emerald-950 mb-3">
                  Accountability Check-ins
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  You are never alone on your journey. Our dedicated mentors and student success coaches provide daily accountability check-ins to ensure you complete your track successfully.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-amber-200/40 flex items-center gap-2 text-xs font-semibold text-amber-800">
                <CheckCircle className="w-4 h-4" /> Dedicated Mentor Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Tracks (Course Grid) */}
      <section id="tracks-grid" className="py-20 px-4 lg:px-12 bg-emerald-900/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-900/10 px-3 py-1 rounded-full">
                Curated Career Tracks
              </span>
              <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold text-emerald-950">
                Explore Our 7 High-Income Tracks
              </h2>
              <p className="text-slate-600 text-base max-w-xl">
                Choose the digital track that matches your passion. Each 6-week program is fully funded under our scholarship initiative.
              </p>
            </div>
            <button
              onClick={() => { setCurrentView('tracks'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 text-emerald-900 font-semibold hover:text-emerald-700 transition-colors self-start md:self-auto"
            >
              View All Tracks & Details <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Image Placeholder */}
                  <div className="relative h-48 bg-emerald-950 overflow-hidden">
                    <img
                      src={course.imagePlaceholder}
                      alt={course.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback background if image missing
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

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                      {course.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer / Learn More Button */}
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
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 px-4 lg:px-12 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/60 via-emerald-950 to-emerald-950 -z-0"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold bg-emerald-900/80 px-4 py-1.5 rounded-full border border-emerald-800">
            Limited Scholarship Slots Available
          </span>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-5xl font-bold text-white">
            Ready to Transform Your Future?
          </h2>
          <p className="text-emerald-200 text-lg max-w-2xl mx-auto">
            Join thousands of successful African graduates working with top global companies and earning in foreign currency.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              disabled
              className="px-8 py-4 bg-stone-300 text-slate-600 font-semibold rounded-xl shadow-sm flex items-center gap-2 text-base w-full sm:w-auto justify-center cursor-not-allowed opacity-90"
            >
              Applications Open Oct 11
            </button>
            <button
              onClick={() => { setCurrentView('tracks'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-8 py-4 bg-emerald-900/80 hover:bg-emerald-900 text-emerald-100 font-semibold rounded-xl border border-emerald-800 transition-all text-base w-full sm:w-auto justify-center"
            >
              Browse All 7 Tracks
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
