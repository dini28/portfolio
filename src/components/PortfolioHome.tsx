'use client';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Project from '@/components/sections/Project';
import Skills from '@/components/sections/Skills';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import About from '@/components/sections/About';
import { SmoothScroll } from '@/components/common/SmoothScroll';
import { ThreeDParticleCanvas } from '@/components/common/ThreeDParticleCanvas';

export default function PortfolioHome() {
  return (
    <SmoothScroll>
      <div className="fixed inset-0 bg-black z-0 pointer-events-none overflow-hidden">
        <ThreeDParticleCanvas />
      </div>

      <div className="relative z-10">
        <Header />
        <div className="lg:pl-28 xl:pl-32 transition-all duration-300">
          <main id="main-content">
            <Hero />
            <About />
            <Skills />
            <Project />
            <Contact />
          </main>
          <Footer />
        </div>

        <WhatsAppButton />
      </div>
    </SmoothScroll>
  );
}
