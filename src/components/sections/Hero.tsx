'use client';

import { useEffect, useState, useRef, useMemo } from 'react';
import { Code2, ArrowRight } from 'lucide-react';
import heroImage from '../../assets/dipesh.webp';
import { useMagnetic } from '../../hooks/useMagnetic';

const Hero = () => {
    const [textState, setTextState] = useState({
        text: '',
        index: 0,
        charIndex: 0,
        isDeleting: false
    });
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef<HTMLElement>(null);
    const viewWorkRef = useMagnetic<HTMLButtonElement>(0.2);

    const roles = useMemo(() => [
        'UI/UX Designer @ Toba Tech',
        'Frontend Developer',
        'React & TypeScript Engineer',
        'Freelance Web Designer'
    ], []);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const { index, charIndex, isDeleting } = textState;
        const currentRole = roles[index];
        const typeSpeed = isDeleting ? 40 : 80;

        const nextStep = () => {
            if (!isDeleting && charIndex < currentRole.length) {
                setTextState(prev => ({
                    ...prev,
                    text: currentRole.substring(0, charIndex + 1),
                    charIndex: charIndex + 1
                }));
            } else if (isDeleting && charIndex > 0) {
                setTextState(prev => ({
                    ...prev,
                    text: currentRole.substring(0, charIndex - 1),
                    charIndex: charIndex - 1
                }));
            } else if (!isDeleting && charIndex === currentRole.length) {
                setTimeout(() => setTextState(prev => ({ ...prev, isDeleting: true })), 2200);
            } else if (isDeleting && charIndex === 0) {
                setTextState(prev => ({
                    ...prev,
                    isDeleting: false,
                    index: (index + 1) % roles.length
                }));
            }
        };

        const timer = setTimeout(nextStep, typeSpeed);
        return () => clearTimeout(timer);
    }, [textState, roles]);

    const scrollToSection = (id: string) => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const techStackStrip = [
        { name: 'UI/UX Design', label: 'Product & Design', status: 'Figma & Design Systems' },
        { name: 'React 19', label: 'UI Architecture', status: 'Primary Stack' },
        { name: 'TypeScript', label: 'Type Safety', status: 'Strict Mode' },
        { name: 'Tailwind CSS', label: 'Design System', status: 'Utility First' },
    ];

    return (
        <section
            ref={heroRef}
            id="hero"
            className="relative min-h-[100dvh] flex items-center overflow-hidden py-28 sm:py-36"
        >
            {/* Ambient Background Glows */}
            <div className="section-spotlight w-[900px] h-[520px] -top-10 left-1/2 -translate-x-1/2" />
            <div className="section-spotlight w-[550px] h-[550px] top-1/3 -left-32 opacity-50" />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
                <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center transition-all duration-[1000ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    {/* Left Column: Bio & Action */}
                    <div className="lg:col-span-7 space-y-7">

                        {/* Status Badges */}
                        <div className="flex flex-wrap items-center gap-2.5">
                            <div className="section-eyebrow">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-emerald-300 font-semibold">Available for Freelancing</span>
                            </div>

                            <div className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 flex items-center gap-1.5 code-mono text-xs text-gray-300">
                                <span>UI/UX Designer @ Toba Tech</span>
                            </div>
                        </div>

                        {/* Main Headline */}
                        <h1 className="display-heading text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] tracking-tight">
                            <span className="block text-white font-extrabold">Hello, I'm</span>
                            <span className="block mt-1 gradient-text font-black">Dipesh Soni</span>
                        </h1>

                        {/* Animated Role Cycler */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 shadow-inner">
                                <Code2 className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                                <span className="text-sm sm:text-base text-gray-200 font-semibold code-mono">{textState.text}</span>
                                <span className="w-1.5 h-4 bg-emerald-400 animate-pulse inline-block" />
                            </div>
                        </div>

                        {/* Value Prop Subtitle */}
                        <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
                            Currently working as a <strong className="text-white font-semibold">UI/UX Designer at Toba Tech</strong>. Combining user-centered interface design with high-precision React &amp; TypeScript frontend engineering.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <button
                                ref={viewWorkRef}
                                onClick={() => scrollToSection('#projects')}
                                className="vite-btn-primary"
                            >
                                <span>Explore My Work</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => scrollToSection('#contact')}
                                className="vite-btn-secondary"
                            >
                                <span>Hire for Freelance</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Studio Portrait Window */}
                    <div className="lg:col-span-5">
                        <div className="relative w-full max-w-md mx-auto">
                            <div className="absolute -inset-8 bg-gradient-to-tr from-emerald-500/10 via-transparent to-white/5 rounded-[2.5rem] blur-2xl opacity-60 pointer-events-none" />
                            <div className="relative card-surface rounded-3xl p-4 hover-lift border border-white/10 shadow-2xl bg-gradient-to-b from-[#0f1512] to-[#0a0a0a]">

                                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden relative bg-black border border-white/10 group">
                                    <img
                                        src={heroImage.src}
                                        alt="Dipesh Soni - UI/UX Designer & Developer"
                                        className="w-full h-full object-cover grayscale-[100%] transition-all duration-700 brightness-75"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                                    {/* Footer overlay */}
                                    <div className="absolute bottom-0 inset-x-0 p-5">
                                        <div className="code-mono text-[11px] text-emerald-400 mb-1.5 uppercase tracking-wider font-semibold">
                                            UI/UX Designer @ Toba Tech
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-xs text-gray-400 mt-0.5">Figma • React • TypeScript</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Tech Capability Strip */}
                <div
                    className={`mt-20 sm:mt-28 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <div className="text-center mb-5">
                        <span className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.24em]">
                            Core Capability &amp; Stack
                        </span>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                        {techStackStrip.map((item) => (
                            <div key={item.name} className="bg-[#0a0a0a] p-5 sm:p-6 text-center hover:bg-white/[0.03] transition-colors group">
                                <div className="code-mono text-[10px] text-gray-500 uppercase tracking-[0.18em] block mb-2">
                                    {item.label}
                                </div>
                                <div className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors tracking-tight">
                                    {item.name}
                                </div>
                                <div className="mt-1.5 text-xs text-gray-500">{item.status}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;


