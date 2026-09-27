/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { COURSES } from '../data/courses';
import { db, collection, addDoc, query, where, getDocs } from '../firebase';
import { Sparkles, CheckCircle, ShieldCheck, CreditCard, Award, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

interface ApplyPageProps {
  initialTrack?: string;
  initialPathway?: 'scholarship' | 'direct_full' | 'direct_installment';
  setCurrentView: (view: string, param?: string) => void;
}

export default function ApplyPage({ initialTrack, initialPathway, setCurrentView }: ApplyPageProps) {
  // Form states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [country, setCountry] = useState('Nigeria');
  const [stateProvince, setStateProvince] = useState('');
  const [educationLevel, setEducationLevel] = useState('University Graduate');
  const [employmentStatus, setEmploymentStatus] = useState('Employed seeking career switch');
  const [selectedTrack, setSelectedTrack] = useState(initialTrack || COURSES[0].id);
  const [experienceLevel, setExperienceLevel] = useState('Absolute Beginner (0 experience)');
  const [learningGoal, setLearningGoal] = useState('Secure a remote freelance role');
  const [timeCommitment, setTimeCommitment] = useState('10–20 hours/week');
  const [deviceAccess, setDeviceAccess] = useState('Laptop + Stable Internet');

  // Pathway selection: 'scholarship' or 'direct'
  const [admissionPathway, setAdmissionPathway] = useState<'scholarship' | 'direct'>(
    initialPathway === 'direct_full' || initialPathway === 'direct_installment' ? 'direct' : 'scholarship'
  );

  // Scholarship specific fields
  const [motivationText, setMotivationText] = useState('');
  const [assignmentPlanText, setAssignmentPlanText] = useState('');

  // Direct Entry specific fields
  const [learningSchedule, setLearningSchedule] = useState('Weekend Intensive');
  const [directPaymentOption, setDirectPaymentOption] = useState<'full' | 'installment'>(
    initialPathway === 'direct_installment' ? 'installment' : 'full'
  );

  // Loading, Success and Error state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successType, setSuccessType] = useState<'scholarship' | 'direct' | null>(null);
  const [duplicateError, setDuplicateError] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const generateAccessCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomStr = '';
    for (let i = 0; i < 6; i++) {
      randomStr += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `ADSI-${randomStr}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDuplicateError('');

    if (!fullName || !email || !whatsapp || !stateProvince) {
      alert('Please fill in all required general information fields.');
      return;
    }

    if (admissionPathway === 'scholarship') {
      if (!motivationText.trim() || !assignmentPlanText.trim()) {
        alert('Please complete the Scholarship Assessment & Screening questions.');
        return;
      }
    }

    setIsSubmitting(true);

    try {
      // Check for duplicate track application with same email
      const q = query(
        collection(db, 'students'),
        where('email', '==', email.trim().toLowerCase()),
        where('selectedTrack', '==', selectedTrack)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const errorMsg = 'You have already submitted an application for this specific track using this email. Please wait for our team to review it.';
        setDuplicateError(errorMsg);
        alert(errorMsg);
        setIsSubmitting(false);
        return;
      }

      const accessCode = generateAccessCode();

      const studentData = {
        fullName,
        email: email.trim().toLowerCase(),
        whatsapp,
        country,
        stateProvince,
        educationLevel,
        employmentStatus,
        selectedTrack,
        experienceLevel,
        learningGoal,
        timeCommitment,
        deviceAccess,
        admissionPathway,
        motivationText: admissionPathway === 'scholarship' ? motivationText : null,
        assignmentPlanText: admissionPathway === 'scholarship' ? assignmentPlanText : null,
        learningSchedule: admissionPathway === 'direct' ? learningSchedule : null,
        directPaymentOption: admissionPathway === 'direct' ? directPaymentOption : null,
        accessCode,
        paymentStatus: 'pending',
        createdAt: new Date().toISOString()
      };

      await addDoc(collection(db, 'students'), studentData);
      setSuccessType(admissionPathway === 'scholarship' ? 'scholarship' : 'direct');
    } catch (error) {
      console.error('Error saving application to Firestore:', error);
      alert('Failed to submit application: ' + (error instanceof Error ? error.message : String(error)));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfbfa] py-16 px-4 lg:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-900/10 px-4 py-1.5 rounded-full">
            ADSI Admission & Scholarship Portal
          </span>
          <h1 className="font-['Playfair_Display',serif] text-3xl sm:text-5xl font-bold text-emerald-950">
            Secure Your Cohort Placement
          </h1>
          <p className="text-slate-600 text-base max-w-xl mx-auto">
            Choose between our Fully-Funded Scholarship (Tuition Waived, ₦10,000 Acceptance Fee upon selection) or Guaranteed Direct Entry Admission.
          </p>
        </div>

        {/* Success State Display */}
        {successType && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-emerald-900 shadow-2xl text-center space-y-6 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-emerald-700" />
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-amber-600 font-bold bg-amber-50 px-3 py-1 rounded-full">
                {successType === 'scholarship' ? 'Application Received Successfully' : 'Payment & Enrollment Confirmed'}
              </span>
              <h2 className="font-['Playfair_Display',serif] text-3xl font-bold text-emerald-950">
                Congratulations, {fullName}!
              </h2>
              
              <div className="bg-[#fefce8] p-6 rounded-2xl border border-amber-200 text-left my-4">
                <p className="text-sm text-slate-800 font-medium leading-relaxed">
                  {successType === 'scholarship'
                    ? 'Application received! Our board will review your profile and get back to you. Due to the massive volume of applicants, please allow 2 to 7 days for a final decision via email.'
                    : 'Payment Received! You are officially part of the ADSI program. Due to the large volume of incoming students, you will receive a follow-up email with your unique LMS Access Code and login instructions within 2 to 3 days.'}
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => { setCurrentView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-8 py-4 bg-emerald-900 hover:bg-emerald-800 text-white font-semibold rounded-xl text-sm shadow-md transition-all flex items-center gap-2"
              >
                Back To Home <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
              <button
                onClick={() => { setSuccessType(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-6 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-sm transition-all"
              >
                Submit Another Application
              </button>
            </div>
          </div>
        )}

        {/* Form */}
        {!successType && (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-10">
            
            {/* Admission Pathway Selector */}
            <div className="space-y-4 bg-emerald-950 text-white p-6 sm:p-8 rounded-2xl">
              <label className="block text-xs uppercase tracking-wider text-amber-400 font-bold">
                Select Admission Pathway *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label
                  onClick={() => setAdmissionPathway('scholarship')}
                  className={`p-5 rounded-2xl border-2 cursor-pointer flex flex-col justify-between transition-all ${
                    admissionPathway === 'scholarship'
                      ? 'border-amber-500 bg-emerald-900 text-white shadow-md'
                      : 'border-emerald-800 bg-emerald-900/50 text-emerald-200 hover:bg-emerald-900'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-amber-400">Option 1: Fully-Funded Scholarship</span>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${admissionPathway === 'scholarship' ? 'border-amber-400 bg-amber-400 text-emerald-950 text-xs font-bold' : 'border-emerald-600'}`}>
                        {admissionPathway === 'scholarship' && '✓'}
                      </div>
                    </div>
                    <p className="text-xs text-emerald-100">
                      Tuition Waived, ₦10,000 Acceptance Fee upon selection. (Competitive entry)
                    </p>
                  </div>
                </label>

                <label
                  onClick={() => setAdmissionPathway('direct')}
                  className={`p-5 rounded-2xl border-2 cursor-pointer flex flex-col justify-between transition-all ${
                    admissionPathway === 'direct'
                      ? 'border-amber-500 bg-emerald-900 text-white shadow-md'
                      : 'border-emerald-800 bg-emerald-900/50 text-emerald-200 hover:bg-emerald-900'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-amber-400">Option 2: Direct Entry Admission</span>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${admissionPathway === 'direct' ? 'border-amber-400 bg-amber-400 text-emerald-950 text-xs font-bold' : 'border-emerald-600'}`}>
                        {admissionPathway === 'direct' && '✓'}
                      </div>
                    </div>
                    <p className="text-xs text-emerald-100">
                      Guaranteed placement, ₦150,000 full tuition or flexible installment.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* A. General Information (2-Column Grid) */}
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-emerald-950">
                  1. General Information
                </h3>
                <p className="text-xs text-slate-500">Please provide your accurate personal and background details.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Amina Bello"
                    value={fullName}
                    onChange={(e) => { setFullName(e.target.value); setDuplicateError(''); }}
                    style={{ borderRadius: '8px' }}
                    className="w-full px-4 py-3 bg-[#fbfbfa] border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-700">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. amina.bello@gmail.com"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setDuplicateError(''); }}
                    style={{ borderRadius: '8px' }}
                    className="w-full px-4 py-3 bg-[#fbfbfa] border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-700">WhatsApp Phone Number * (include country code)</label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 800 000 0000"
                    value={whatsapp}
                    onChange={(e) => { setWhatsapp(e.target.value); setDuplicateError(''); }}
                    style={{ borderRadius: '8px' }}
                    className="w-full px-4 py-3 bg-[#fbfbfa] border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-700">Country *</label>
                  <select
                    value={country}
                    onChange={(e) => { setCountry(e.target.value); setDuplicateError(''); }}
                    style={{ borderRadius: '8px' }}
                    className="w-full px-4 py-3 bg-[#fbfbfa] border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  >
                    <option value="Nigeria">Nigeria</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Kenya">Kenya</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Other">Other African Country</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-700">State / Province / City *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lagos, Abuja, Nairobi"
                    value={stateProvince}
                    onChange={(e) => { setStateProvince(e.target.value); setDuplicateError(''); }}
                    style={{ borderRadius: '8px' }}
                    className="w-full px-4 py-3 bg-[#fbfbfa] border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-700">Highest Level of Education *</label>
                  <select
                    value={educationLevel}
                    onChange={(e) => { setEducationLevel(e.target.value); setDuplicateError(''); }}
                    style={{ borderRadius: '8px' }}
                    className="w-full px-4 py-3 bg-[#fbfbfa] border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  >
                    <option value="High School / Secondary">High School / Secondary</option>
                    <option value="Undergraduate Student">Undergraduate Student</option>
                    <option value="University Graduate">University Graduate</option>
                    <option value="Post-Graduate">Post-Graduate</option>
                    <option value="Self-Taught">Self-Taught</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-700">Employment Status *</label>
                  <select
                    value={employmentStatus}
                    onChange={(e) => { setEmploymentStatus(e.target.value); setDuplicateError(''); }}
                    style={{ borderRadius: '8px' }}
                    className="w-full px-4 py-3 bg-[#fbfbfa] border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  >
                    <option value="Student">Student</option>
                    <option value="Unemployed looking for work">Unemployed looking for work</option>
                    <option value="Employed seeking career switch">Employed seeking career switch</option>
                    <option value="Freelancer / Self-Employed">Freelancer / Self-Employed</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-700">Selected Career Track *</label>
                  <select
                    value={selectedTrack}
                    onChange={(e) => { setSelectedTrack(e.target.value); setDuplicateError(''); }}
                    style={{ borderRadius: '8px' }}
                    className="w-full px-4 py-3 bg-[#fbfbfa] border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  >
                    {COURSES.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-700">Experience Level in Chosen Track *</label>
                  <select
                    value={experienceLevel}
                    onChange={(e) => { setExperienceLevel(e.target.value); setDuplicateError(''); }}
                    style={{ borderRadius: '8px' }}
                    className="w-full px-4 py-3 bg-[#fbfbfa] border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  >
                    <option value="Absolute Beginner (0 experience)">Absolute Beginner (0 experience)</option>
                    <option value="Beginner with basic knowledge">Beginner with basic knowledge</option>
                    <option value="Intermediate">Intermediate</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-700">Primary Learning Goal *</label>
                  <select
                    value={learningGoal}
                    onChange={(e) => { setLearningGoal(e.target.value); setDuplicateError(''); }}
                    style={{ borderRadius: '8px' }}
                    className="w-full px-4 py-3 bg-[#fbfbfa] border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  >
                    <option value="Secure a remote freelance role">Secure a remote freelance role</option>
                    <option value="Build an agency/business">Build an agency / business</option>
                    <option value="Land a full-time job">Land a full-time job</option>
                    <option value="Upskill for personal brand">Upskill for personal brand</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-700">Weekly Time Commitment *</label>
                  <select
                    value={timeCommitment}
                    onChange={(e) => { setTimeCommitment(e.target.value); setDuplicateError(''); }}
                    style={{ borderRadius: '8px' }}
                    className="w-full px-4 py-3 bg-[#fbfbfa] border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  >
                    <option value="5–10 hours/week">5–10 hours / week</option>
                    <option value="10–20 hours/week">10–20 hours / week</option>
                    <option value="20+ hours/week">20+ hours / week</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-700">Device & Internet Access *</label>
                  <select
                    value={deviceAccess}
                    onChange={(e) => { setDeviceAccess(e.target.value); setDuplicateError(''); }}
                    style={{ borderRadius: '8px' }}
                    className="w-full px-4 py-3 bg-[#fbfbfa] border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                  >
                    <option value="Laptop + Stable Internet">Laptop + Stable Internet</option>
                    <option value="Smartphone Only + Stable Internet">Smartphone Only + Stable Internet</option>
                    <option value="Shared PC / Cybercafé">Shared PC / Cybercafé</option>
                  </select>
                </div>
              </div>
            </div>

            {/* C. Dynamic Conditional Fields */}
            {admissionPathway === 'scholarship' ? (
              <div className="space-y-6 pt-6 border-t border-slate-200 animate-in fade-in duration-200">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-emerald-950">
                    2. Scholarship Assessment & Screening
                  </h3>
                  <p className="text-xs text-slate-500">Required for 100% tuition-covered scholarship consideration.</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-slate-700">
                      Why should the ADSI Scholarship Board select you for this cohort? *
                    </label>
                    <textarea
                      required
                      rows={3}
                      maxLength={500}
                      placeholder="Briefly describe your motivation, financial circumstance, and how this skill will impact your career."
                      value={motivationText}
                      onChange={(e) => { setMotivationText(e.target.value); setDuplicateError(''); }}
                      style={{ borderRadius: '8px' }}
                      className="w-full px-4 py-3 bg-[#fbfbfa] border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-900/20 resize-none"
                    />
                    <div className="text-[11px] text-slate-400 text-right">{motivationText.length}/500 characters</div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-slate-700">
                      How do you plan to handle the weekly assignments and Saturday project deadlines? *
                    </label>
                    <textarea
                      required
                      rows={3}
                      maxLength={300}
                      placeholder="Describe your weekly time management plan..."
                      value={assignmentPlanText}
                      onChange={(e) => { setAssignmentPlanText(e.target.value); setDuplicateError(''); }}
                      style={{ borderRadius: '8px' }}
                      className="w-full px-4 py-3 bg-[#fbfbfa] border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-900/20 resize-none"
                    />
                    <div className="text-[11px] text-slate-400 text-right">{assignmentPlanText.length}/300 characters</div>
                  </div>

                  <div className="bg-[#fefce8] p-4 rounded-xl border border-amber-200 flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
                    <span className="text-xs text-amber-900 font-medium">
                      <strong>Payment Mode Preview:</strong> Tuition: ₦140,000 (Waived) | General Acceptance Fee: ₦10,000 due upon admission.
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6 pt-6 border-t border-slate-200 animate-in fade-in duration-200">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-emerald-950">
                    2. Payment & Enrollment Options
                  </h3>
                  <p className="text-xs text-slate-500">Guaranteed direct admission selection.</p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-slate-700">Preferred Learning Schedule *</label>
                    <select
                      value={learningSchedule}
                      onChange={(e) => { setLearningSchedule(e.target.value); setDuplicateError(''); }}
                      style={{ borderRadius: '8px' }}
                      className="w-full px-4 py-3 bg-[#fbfbfa] border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
                    >
                      <option value="Weekend Intensive">Weekend Intensive (Saturdays & Sundays)</option>
                      <option value="Weekday Evening Self-Paced">Weekday Evening Self-Paced (Mon–Fri)</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-xs font-semibold text-slate-700">Payment Selection *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <label
                        onClick={() => { setDirectPaymentOption('full'); setDuplicateError(''); }}
                        style={{ borderRadius: '8px' }}
                        className={`p-4 border-2 cursor-pointer flex flex-col justify-between transition-all ${
                          directPaymentOption === 'full' ? 'border-emerald-900 bg-emerald-50/60' : 'border-slate-200 bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-xs text-emerald-950">Full Payment</span>
                          <span className="text-xs font-bold text-emerald-900">₦150,000</span>
                        </div>
                        <p className="text-[11px] text-slate-600">Tuition + Acceptance Fee included. Instant guaranteed admission.</p>
                      </label>

                      <label
                        onClick={() => { setDirectPaymentOption('installment'); setDuplicateError(''); }}
                        style={{ borderRadius: '8px' }}
                        className={`p-4 border-2 cursor-pointer flex flex-col justify-between transition-all ${
                          directPaymentOption === 'installment' ? 'border-emerald-900 bg-emerald-50/60' : 'border-slate-200 bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-xs text-emerald-950">Two-Part Installment</span>
                          <span className="text-xs font-bold text-emerald-900">₦75,000 × 2</span>
                        </div>
                        <p className="text-[11px] text-slate-600">₦75,000 initial payment today, ₦75,000 balance due at Week 3.</p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Duplicate Error Alert Banner */}
            {duplicateError && (
              <div className="bg-amber-50 border-2 border-amber-400 text-amber-900 p-4 rounded-2xl flex items-start gap-3 animate-in fade-in duration-200">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-xs uppercase tracking-wider block text-amber-800">Application Notice</span>
                  <p className="text-xs font-medium leading-relaxed">{duplicateError}</p>
                </div>
              </div>
            )}

            {/* Submit Section & Security Notice */}
            <div className="pt-6 border-t border-slate-100 space-y-4 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                style={{ borderRadius: '8px' }}
                className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-amber-200" />
                    <span>Checking Application Status...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-200" />
                    {admissionPathway === 'scholarship' ? 'Submit Application for Review' : 'Proceed to Secure Payment'}
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>🔒 256-bit SSL Encrypted & Verified ADSI Portal</span>
              </div>
            </div>

          </form>
        )}
      </div>
    </div>
  );
}
