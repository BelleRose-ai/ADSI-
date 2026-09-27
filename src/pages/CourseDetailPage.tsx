/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { COURSES, Course } from '../data/courses';
import {
  Sparkles,
  ArrowRight,
  CheckCircle,
  Clock,
  Award,
  Users,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  DollarSign,
  Briefcase,
  Star,
  ShieldCheck
} from 'lucide-react';

interface CourseDetailPageProps {
  courseId: string;
  setCurrentView: (view: string, param?: string, pathway?: 'scholarship' | 'direct_full' | 'direct_installment') => void;
}

export default function CourseDetailPage({ courseId, setCurrentView }: CourseDetailPageProps) {
  const course: Course = COURSES.find((c) => c.id === courseId) || COURSES[0];

  const [openWeeks, setOpenWeeks] = useState<{ [key: number]: boolean }>({ 1: true });
  const [openFaqs, setOpenFaqs] = useState<{ [key: number]: boolean }>({ 0: true });

  const toggleWeek = (weekNum: number) => {
    setOpenWeeks((prev) => ({ ...prev, [weekNum]: !prev[weekNum] }));
  };

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="min-h-screen bg-[#fbfbfa]">
      {/* Course Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24 px-4 lg:px-12 bg-gradient-to-b from-[#fefce8]/60 via-[#fbfbfa] to-[#fbfbfa]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-900/10 text-emerald-900 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-amber-600" /> {course.category} Track · 6 Weeks
            </div>
            <h1 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-950 leading-[1.15]">
              {course.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 font-normal leading-relaxed max-w-2xl">
              {course.tagline} {course.description}
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => { setCurrentView('apply', course.id, 'scholarship'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 text-base"
              >
                <Sparkles className="w-5 h-5 text-amber-200" /> Apply For Scholarship
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('pricing-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white hover:bg-slate-50 text-emerald-950 font-semibold rounded-xl border-2 border-emerald-900/20 shadow-sm transition-all flex items-center justify-center gap-2 text-base"
              >
                View Pricing Options
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/20 to-emerald-700/20 rounded-3xl blur-2xl -z-10"></div>
              
              <div className="bg-emerald-900 rounded-3xl p-3 shadow-2xl border border-emerald-800">
                <div className="relative rounded-2xl overflow-hidden bg-emerald-950 aspect-[4/3] flex flex-col items-center justify-center text-center p-6 text-white group">
                  <img
                    src="course-hero-placeholder.jpg"
                    alt={`${course.title} student success`}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/40 to-transparent flex flex-col justify-end p-8 text-left">
                    <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">
                      Certified ADSI Program
                    </span>
                    <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white mb-1">
                      {course.title} Masterclass
                    </h3>
                    <p className="text-xs text-emerald-200">
                      Fully funded scholarship with practical mentorship & job placement support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Strip */}
      <section className="bg-emerald-900 text-white py-6 px-4 lg:px-12 shadow-inner">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center justify-center">
            <span className="text-amber-400 font-bold text-lg mb-1">Beginner Friendly</span>
            <span className="text-xs text-emerald-200">No prior tech experience needed</span>
          </div>
          <div className="flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-emerald-800 pt-4 md:pt-0">
            <span className="text-amber-400 font-bold text-lg mb-1">Job Placement Support</span>
            <span className="text-xs text-emerald-200">Remote client & agency matching</span>
          </div>
          <div className="flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-emerald-800 pt-4 md:pt-0">
            <span className="text-amber-400 font-bold text-lg mb-1">Flexible Learning</span>
            <span className="text-xs text-emerald-200">Study at your own schedule</span>
          </div>
          <div className="flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-emerald-800 pt-4 md:pt-0">
            <span className="text-amber-400 font-bold text-lg mb-1">Recognized Certificate</span>
            <span className="text-xs text-emerald-200">Endorsed digital credential</span>
          </div>
        </div>
      </section>

      {/* Learning Outcomes & Career Split Section */}
      <section className="py-20 px-4 lg:px-12 bg-[#fbfbfa]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-900/10 text-emerald-900 px-3 py-1 rounded-full text-xs font-bold">
              What You Will Master
            </div>
            <h2 className="font-['Playfair_Display',serif] text-3xl font-bold text-emerald-950">
              Practical Skills Designed for Immediate Earnings
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {course.overview}
            </p>
            <div className="space-y-4 pt-2">
              {course.learningOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-[#fefce8]/60 p-4 rounded-2xl border border-amber-200/50">
                  <div className="w-6 h-6 rounded-full bg-emerald-900 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-slate-800 font-medium leading-relaxed">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-emerald-950 text-white p-8 rounded-3xl shadow-xl border border-emerald-900 space-y-6">
            <div className="flex items-center justify-between border-b border-emerald-900 pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block">Market Insights</span>
                <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-white">Salary Trend & Career Opportunities</h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-900 text-amber-400 flex items-center justify-center">
                <DollarSign className="w-6 h-6" />
              </div>
            </div>

            <p className="text-emerald-200 text-sm leading-relaxed">
              Graduates of this track are in massive demand by African startups, agencies, and global remote employers.
            </p>

            <div className="space-y-4">
              <div className="bg-emerald-900/70 p-4 rounded-2xl border border-emerald-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-emerald-300 block">Local Average Income</span>
                  <span className="font-bold text-lg text-white">{course.salaryData.localAvg}</span>
                </div>
                <Briefcase className="w-5 h-5 text-amber-400" />
              </div>

              <div className="bg-emerald-900/70 p-4 rounded-2xl border border-emerald-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-emerald-300 block">Global Remote Average</span>
                  <span className="font-bold text-lg text-white">{course.salaryData.globalRemoteAvg}</span>
                </div>
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-emerald-900/40 p-4 rounded-xl border border-emerald-800">
                  <span className="text-[11px] text-emerald-300 block">Entry Level Range</span>
                  <span className="font-semibold text-sm text-white">{course.salaryData.entryLevel}</span>
                </div>
                <div className="bg-emerald-900/40 p-4 rounded-xl border border-emerald-800">
                  <span className="text-[11px] text-emerald-300 block">Experienced Range</span>
                  <span className="font-semibold text-sm text-white">{course.salaryData.experienced}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => { setCurrentView('apply', course.id, 'scholarship'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              Claim Your Scholarship Slot <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Syllabus Accordion */}
      <section className="py-20 px-4 lg:px-12 bg-emerald-900/5">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-900/10 px-3 py-1 rounded-full">
              Structured Curriculum
            </span>
            <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold text-emerald-950">
              What You Will Learn (6-Week Track)
            </h2>
            <p className="text-slate-600 text-base">
              A carefully structured weekly breakdown taking you from absolute beginner to confident professional.
            </p>
          </div>

          <div className="space-y-4">
            {course.syllabus.map((item) => {
              const isOpen = openWeeks[item.week];
              return (
                <div
                  key={item.week}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleWeek(item.week)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-900 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
                        W{item.week}
                      </div>
                      <div>
                        <span className="text-xs text-emerald-800 font-semibold block">Week {item.week} Curriculum</span>
                        <h4 className="font-['Playfair_Display',serif] text-lg font-bold text-emerald-950">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                    <div className="text-slate-500">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-4">
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {item.summary}
                      </p>
                      <div className="space-y-2">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Key Topics Covered:</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {item.topics.map((topic, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/60">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                              <span>{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REVISED PRICING SECTION (3 CARDS SPECIFICATION) */}
      <section id="pricing-section" className="py-20 px-4 lg:px-12 bg-[#fbfbfa]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-900/10 px-3 py-1 rounded-full">
              Tuition & Investment
            </span>
            <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold text-emerald-950">
              Choose Your Admission Pathway
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto">
              Select between guaranteed direct entry (full or installment) or apply for our fully-funded scholarship cohort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Card 1: Direct Entry (Full Payment) */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500 block">Direct Pathway</span>
                <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-emerald-950">Direct Admission</h3>
                <div className="py-2">
                  <span className="text-4xl font-bold text-emerald-950">₦150,000</span>
                </div>
                <p className="text-xs font-semibold text-emerald-900 bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                  ₦140,000 Tuition + ₦10,000 Mandatory General Acceptance Fee
                </p>
                <ul className="space-y-2 text-xs text-slate-700 pt-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-700" /> Instant guaranteed admission</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-700" /> Priority mentor pairing</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-700" /> Immediate portal access</li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => { setCurrentView('apply', course.id, 'direct_full'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="w-full py-3.5 bg-emerald-900 hover:bg-emerald-800 text-white font-semibold rounded-xl text-xs transition-all shadow-sm"
                >
                  Enroll via Direct Entry
                </button>
              </div>
            </div>

            {/* Card 2: Direct Entry (Installment Plan) */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500 block">Flexible Direct Pathway</span>
                <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-emerald-950">Flexible Direct Entry</h3>
                <div className="py-2">
                  <span className="text-4xl font-bold text-emerald-950">₦75,000 × 2</span>
                </div>
                <p className="text-xs font-semibold text-emerald-900 bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                  ₦75,000 due today (includes ₦10k acceptance fee) + ₦75,000 balance due at Week 3
                </p>
                <ul className="space-y-2 text-xs text-slate-700 pt-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-700" /> Spread your tuition across two payments</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-700" /> Guaranteed instant placement</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-700" /> Full access to all 6 weeks</li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => { setCurrentView('apply', course.id, 'direct_installment'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="w-full py-3.5 bg-emerald-900 hover:bg-emerald-800 text-white font-semibold rounded-xl text-xs transition-all shadow-sm"
                >
                  Choose Installment Plan
                </button>
              </div>
            </div>

            {/* Card 3: Fully Funded Scholarship (Featured / Gold Accent / Most Popular) */}
            <div className="bg-emerald-950 text-white rounded-3xl p-8 border-2 border-amber-500 shadow-2xl flex flex-col justify-between relative transform lg:-translate-y-2">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-600 text-white font-bold text-xs px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                100% TUITION COVERED · Most Popular
              </div>
              <div className="space-y-4 pt-2">
                <span className="text-xs uppercase tracking-wider font-bold text-amber-400 block">Scholarship Pathway</span>
                <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-white">Scholarship Cohort</h3>
                <div className="py-2">
                  <span className="text-4xl sm:text-5xl font-bold text-amber-400">₦10,000</span>
                </div>
                <p className="text-xs text-emerald-200 bg-emerald-900/80 p-3 rounded-xl border border-emerald-800 leading-relaxed">
                  Covers the standard General Acceptance & Platform Fee. ₦140,000 tuition sponsored by ADSI partners.
                </p>
                <ul className="space-y-2 text-xs text-emerald-200 pt-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-amber-400" /> Competitive entry screening</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-amber-400" /> 6 weeks intensive training</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-amber-400" /> Community accountability & certificate</li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-emerald-900">
                <button
                  onClick={() => { setCurrentView('apply', course.id, 'scholarship'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Sparkles className="w-4 h-4 text-amber-200" /> Apply for Scholarship
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 lg:px-12 bg-emerald-900/5">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-900/10 px-3 py-1 rounded-full">
              Student Success Stories
            </span>
            <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold text-emerald-950">
              Hear From Our Graduates
            </h2>
            <p className="text-slate-600 text-base">
              Real stories from everyday Africans who transformed their careers through ADSI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {course.testimonials.map((test, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    "{test.quote}"
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-900 text-amber-400 font-bold flex items-center justify-center text-sm shadow-sm">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{test.name}</h4>
                    <p className="text-xs text-slate-500">{test.role} · {test.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-4 lg:px-12 bg-[#fbfbfa]">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-900/10 px-3 py-1 rounded-full">
              Got Questions?
            </span>
            <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold text-emerald-950">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base">
              Everything you need to know about joining the ADSI scholarship cohort or direct entry admission.
            </p>
          </div>

          <div className="space-y-4">
            {course.faqs.map((faq, idx) => {
              const isOpen = openFaqs[idx];
              return (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors focus:outline-none"
                  >
                    <span className="font-['Playfair_Display',serif] text-lg font-bold text-emerald-950">
                      {faq.question}
                    </span>
                    <div className="text-slate-500 shrink-0 ml-4">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-100 text-slate-700 text-sm leading-relaxed bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <button
                onClick={() => toggleFaq(99)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors focus:outline-none"
              >
                <span className="font-['Playfair_Display',serif] text-lg font-bold text-emerald-950">
                  I don't have a tech background. Can I still join?
                </span>
                <div className="text-slate-500 shrink-0 ml-4">
                  {openFaqs[99] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>
              {openFaqs[99] && (
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 text-slate-700 text-sm leading-relaxed bg-slate-50/50">
                  Absolutely! Over 80% of our students started with zero prior tech experience. We teach you everything from scratch with step-by-step guidance.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 lg:px-12 bg-emerald-950 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold bg-emerald-900 px-4 py-1.5 rounded-full border border-emerald-800">
            Cohort Enrollment Open
          </span>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold text-white">
            Secure Your Spot in {course.title}
          </h2>
          <p className="text-emerald-200 text-base max-w-xl mx-auto">
            Take the first step toward a rewarding digital career. Apply for our scholarship or choose direct admission.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => { setCurrentView('apply', course.id, 'scholarship'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-lg transition-all inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-amber-200" /> Apply For Scholarship (₦10,000)
            </button>
            <button
              onClick={() => { setCurrentView('apply', course.id, 'direct_full'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-8 py-4 bg-emerald-900 hover:bg-emerald-800 text-white font-semibold rounded-xl border border-emerald-800 transition-all"
            >
              Enroll via Direct Entry (₦150k)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
