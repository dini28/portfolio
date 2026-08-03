'use client';

import { useEffect, useState, useRef, useMemo } from 'react';
import { Code2, ArrowRight } from 'lucide-react';
import { useMagnetic } from '../../hooks/useMagnetic';
import dipeshImg from '../../assets/dipesh.webp';

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

                        {/* Firecrawl Style Section Tag & Badges */}
                        <div className="space-y-3">
                            <div className="fc-section-tag">
                                <span className="fc-index">[ 01 / 05 ]</span>
                                <span>· INTRODUCING DIPESH</span>
                            </div>

                            <div className="flex flex-wrap items-center gap-2.5 pt-1">
                                <div className="fc-pill-badge">
                                    <span className="w-2 h-2 rounded-xs bg-emerald-400 animate-pulse" />
                                    <span className="text-emerald-300 font-semibold">{'Available for Freelancing'}</span>
                                </div>

                                <div className="fc-pill-badge">
                                    <span>UI/UX Designer @ Toba Tech</span>
                                </div>
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
                                <span className="w-0.5 h-4 bg-emerald-400 inline-block" />
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

                    {/* Right Column: Terminal Showcase Image Layout */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative w-full max-w-md mx-auto group">
                            {/* Multi-layered Ambient Backlight Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/25 via-teal-500/15 to-cyan-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none" />
                            <div className="absolute -inset-1 bg-gradient-to-b from-emerald-400/30 via-white/10 to-transparent rounded-[2rem] blur-md opacity-40 group-hover:opacity-75 transition-all duration-500 pointer-events-none" />

                            {/* Main Card Container with Gradient Border */}
                            <div className="relative p-1 rounded-3xl bg-gradient-to-b from-white/20 via-white/10 to-emerald-500/30 shadow-2xl transition-transform duration-500">
                                <div className="relative rounded-[1.4rem] overflow-hidden bg-[#09090b] border border-white/10">

                                    {/* Hero Showcase Image */}
                                    <div className="relative overflow-hidden group/img">
                                        <img
                                            src={dipeshImg.src}
                                            alt="Dipesh Soni Developer Portfolio"
                                            className="w-full h-auto object-cover rounded-b-[1.3rem] transition-transform duration-700"
                                            loading="eager"
                                        />
                                        {/* Subtle Overlay Gradient for Depth */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
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


