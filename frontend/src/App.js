import React, { useState } from 'react';
import './App.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/600.css';
import '@fontsource/plus-jakarta-sans/700.css';

import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ComparisonSection } from './components/ComparisonSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ModulesSection } from './components/ModulesSection';
import { TeamSection } from './components/TeamSection';
import { WaitlistSection } from './components/WaitlistSection';
import { Footer } from './components/Footer';

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#020418]">
      <Header onWaitlistClick={openWaitlist} />
      
      <main>
        <HeroSection 
          onDemoClick={openWaitlist} 
          onLearnMoreClick={() => scrollToSection('how-it-works')} 
        />
        <ComparisonSection />
        <HowItWorksSection />
        <ModulesSection />
        <TeamSection />
        <Footer onWaitlistClick={openWaitlist} />
      </main>

      <WaitlistSection isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </div>
  );
}

export default App;
