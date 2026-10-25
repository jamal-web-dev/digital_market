// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import { Header  } from './components/Header';
import { HeroSection  } from './components/HeroSection';
import { TrustedSection } from './components/TrustedSection';
import { ProductivitySection } from './components/Productivity';
import { GenerateSection } from './components/GenerateSection';
import { InnovateSection } from './components/InnovateSection';
import { WorkflowSection } from './components/WorkflowSection';
import { ExperienceSection } from './components/Experience';
import { PlanSection } from './components/PlanSection';
import { ReviewSection } from './components/ReviewSection';
import { Footer } from './components/Footer';

// import { Button, RenderPractice , ConditionalRendering, EffectPractice } from './Practice';

function App() {
  return(
    <>
      <Header />
      <HeroSection />
      <TrustedSection />
      <ProductivitySection />
      <GenerateSection />
      <InnovateSection />
      <WorkflowSection />
      <ExperienceSection />
      <PlanSection />
      <ReviewSection /> 
      <Footer />
      {/* <Button />
      <RenderPractice />
      <ConditionalRendering />
      <EffectPractice /> */}
    </>
  );
}

export default App
