'use client';

import { Cpu } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { ThreeDSkillStack } from './ThreeDSkillStack';

const Skills = () => {
    const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

    return (
        <section ref={sectionRef} id="skills" className="py-24 sm:py-32 relative overflow-hidden">
            <div className="section-spotlight w-[700px] h-[500px] top-40 -left-20 opacity-80" />
            <div className="section-spotlight w-[500px] h-[400px] bottom-20 right-0 opacity-50" />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
                <div className={`text-center mb-16 sm:mb-20 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="section-eyebrow mb-4">
                        <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Interactive 3D Tech Stack</span>
                    </div>
                    <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl mb-5">
                        <span className="block text-white">Redefining Developer</span>
                        <span className="block gradient-text mt-1">Experience</span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Explore my core technologies in a 3D perspective stack. Hover or tap cards to inspect details.
                    </p>
                </div>

                <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <ThreeDSkillStack />
                </div>

                <div className={`mt-20 card-surface rounded-3xl p-8 sm:p-10 max-w-4xl mx-auto text-center transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <blockquote className="text-base sm:text-lg text-gray-300 italic max-w-2xl mx-auto leading-[1.8]">
                        "Great software is built at the intersection of performance, clean architecture, and continuous learning."
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

export default Skills;

