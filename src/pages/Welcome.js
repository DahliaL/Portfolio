import React from 'react';
import WelcomeSection from '../components/WelcomeSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactBanner';
import Footer from '../components/Footer';

export default function Welcome() {
  return (
    <div>
      <WelcomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer/>
    </div>
  );
}
