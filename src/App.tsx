import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CVPrintModal } from './components/CVPrintModal';

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const handleOpenContact = () => {
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050C1A] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navbar */}
      <Navbar
        onOpenCVModal={() => setIsCVModalOpen(true)}
        onOpenContactModal={handleOpenContact}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section inspired by Ocean Odyssey reference with Gabriela's Portrait */}
        <Hero
          onOpenCVModal={() => setIsCVModalOpen(true)}
          onOpenContactModal={handleOpenContact}
        />

        {/* Professional KPI Strip */}
        <StatsStrip />

        {/* Profile & Narrative */}
        <AboutSection
          onOpenCVModal={() => setIsCVModalOpen(true)}
          onOpenContactModal={handleOpenContact}
        />

        {/* Work Experience */}
        <ExperienceSection />

        {/* Skills & Tools */}
        <SkillsSection />

        {/* Fieldwork Case Studies & Visual Guide */}
        <ProjectsSection />

        {/* Education & UNMSM / ISO 45001 */}
        <EducationSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenCVModal={() => setIsCVModalOpen(true)}
      />

      {/* CV Printable / PDF Viewer Modal */}
      <CVPrintModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
}
