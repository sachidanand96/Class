import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CourseExplorer } from './components/CourseExplorer';
import { SubjectMastery } from './components/SubjectMastery';
import { CAFoundationRoadmap } from './components/CAFoundationRoadmap';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FacultySpotlight } from './components/FacultySpotlight';
import { LearningEnvironment } from './components/LearningEnvironment';
import { AchievementsResults } from './components/AchievementsResults';
import { DirectoryTrust } from './components/DirectoryTrust';
import { AdmissionEnquiryForm } from './components/AdmissionEnquiryForm';
import { FAQSection } from './components/FAQSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { FloatingContactWidget } from './components/FloatingContactWidget';

export const App: React.FC = () => {
  const [selectedCourseForForm, setSelectedCourseForForm] = useState<string>('11th-commerce');

  const handleOpenEnquiry = (courseId?: string) => {
    if (courseId) {
      setSelectedCourseForForm(courseId);
    }
    const enquirySection = document.getElementById('enquiry');
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-ivory-50 text-slate-850 antialiased font-sans">
      
      {/* Navigation */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Content Sections */}
      <main className="flex-grow pb-12 sm:pb-0">
        {/* 1. Hero Section */}
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* 2. Course Discovery Section */}
        <CourseExplorer onSelectCourseForEnquiry={handleOpenEnquiry} />

        {/* 3. Subjects & Academic Pillars */}
        <SubjectMastery />

        {/* 4. CA Foundation Roadmap */}
        <CAFoundationRoadmap onSelectCourseForEnquiry={handleOpenEnquiry} />

        {/* 5. Why Choose This Institute */}
        <WhyChooseUs />

        {/* 6. Faculty Spotlight (Prof. Pradeep Bhandare Sir) */}
        <FacultySpotlight />

        {/* 7. Academic Standards & Examination Preparation */}
        <AchievementsResults />

        {/* 8. Learning Environment & Infrastructure */}
        <LearningEnvironment />

        {/* 9. Verified Directory Reputation & Reviews */}
        <DirectoryTrust />

        {/* 10. Admission Enquiry Form */}
        <AdmissionEnquiryForm initialCourseId={selectedCourseForForm} />

        {/* 11. Frequently Asked Questions */}
        <FAQSection />

        {/* 12. Location & Contact Section */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Bar */}
      <FloatingContactWidget onOpenEnquiry={() => handleOpenEnquiry()} />

    </div>
  );
};

export default App;
