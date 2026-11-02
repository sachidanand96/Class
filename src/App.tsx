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
import { AssetManifestModal } from './components/AssetManifestModal';
import { ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';

export const App: React.FC = () => {
  const [selectedCourseForForm, setSelectedCourseForForm] = useState<string>('11th-commerce');
  const [manifestModalOpen, setManifestModalOpen] = useState<boolean>(false);

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
      <Navbar 
        onOpenEnquiry={handleOpenEnquiry} 
        onOpenManifest={() => setManifestModalOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
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

        {/* 7. Learning Environment & Infrastructure */}
        <LearningEnvironment />

        {/* 8. Student Achievements & Board Results */}
        <AchievementsResults />

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
      <Footer onOpenManifest={() => setManifestModalOpen(true)} />

      {/* Floating Call & WhatsApp Bar */}
      <FloatingContactWidget onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Asset Manifest Modal */}
      <AssetManifestModal 
        isOpen={manifestModalOpen} 
        onClose={() => setManifestModalOpen(false)} 
      />

    </div>
  );
};

export default App;
