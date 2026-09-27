/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import CourseDetailPage from './pages/CourseDetailPage';
import TracksPage from './pages/TracksPage';
import AboutPage from './pages/AboutPage';
import ApplyPage from './pages/ApplyPage';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [currentParam, setCurrentParam] = useState<string>('virtual-assistant');
  const [currentPathway, setCurrentPathway] = useState<'scholarship' | 'direct_full' | 'direct_installment'>('scholarship');

  const handleSetView = (view: string, param?: string, pathway?: 'scholarship' | 'direct_full' | 'direct_installment') => {
    setCurrentView(view);
    if (param) {
      setCurrentParam(param);
    }
    if (pathway) {
      setCurrentPathway(pathway);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbfa] text-slate-900 font-['Inter',sans-serif]">
      {/* Sticky Header */}
      <Header currentView={currentView} setCurrentView={handleSetView} />

      {/* Main View Router */}
      <main className="flex-grow">
        {currentView === 'home' && <LandingPage setCurrentView={handleSetView} />}
        {currentView === 'tracks' && <TracksPage setCurrentView={handleSetView} />}
        {currentView === 'about' && <AboutPage setCurrentView={handleSetView} />}
        {currentView === 'apply' && (
          <ApplyPage initialTrack={currentParam} initialPathway={currentPathway} setCurrentView={handleSetView} />
        )}
        {currentView === 'course-detail' && (
          <CourseDetailPage courseId={currentParam} setCurrentView={handleSetView} />
        )}
      </main>

      {/* Footer */}
      <Footer setCurrentView={handleSetView} />
    </div>
  );
}
