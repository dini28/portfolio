import { useEffect, useState, useRef, useMemo } from 'react';
import { Code2, ArrowRight, Copy, Check, Terminal } from 'lucide-react';
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
    const [copied, setCopied] = useState(false);
    const heroRef = useRef<HTMLElement>(null);
    const viewWorkRef = useMagnetic<HTMLButtonElement>(0.2);

    const roles = useMemo(() => ['Frontend Developer', 'React Architect', 'UI/UX Craftsperson', 'Web Engineer'], []);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const { index, charIndex, isDeleting } = textState;
        const currentRole = roles[index];
        const typeSpeed = isDeleting ? 50 : 100;

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
                setTimeout(() => setTextState(prev => ({ ...prev, isDeleting: true })), 2000);
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

    const copyTerminalCmd = () => {
        navigator.clipboard.writeText('npx dipesh-soni@latest');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const scrollToSection = (id: string) => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const techStackStrip = [
        { name: 'React 19', label: 'UI Architecture', status: 'Primary Stack' },
        { name: 'TypeScript', label: 'Type Safety', status: 'Strict Mode' },
        { name: 'Next.js 15', label: 'SSR & Fullstack', status: 'Production Ready' },
        { name: 'Tailwind CSS', label: 'Design System', status: 'Utility First' },
    ];

    return (
        <section
            ref={heroRef}
            id="hero"
            className="relative min-h-[100dvh] flex items-center overflow-hidden py-32"
        >
            <div className="section-spotlight w-[900px] h-[500px] -top-10 left-1/2 -translate-x-1/2" />
            <div className="section-spotlight w-[500px] h-[500px] top-1/3 -left-32 opacity-50" />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
                <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center transition-all duration-[1000ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <div className="lg:col-span-7 space-y-8">
                        <div className="section-eyebrow">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Available for work</span>
                        </div>

                        <h1 className="display-heading text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                            <span className="block text-white">Hello, I'm</span>
                            <span className="block mt-1 gradient-text">Dipesh Soni</span>
                        </h1>

                        <div className="flex items-center gap-3 py-1">
                            <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-white/[0.03] border border-white/10">
                                <Code2 className="w-4 h-4 text-emerald-400" />
                                <span className="text-sm text-gray-400 font-medium">{textState.text}</span>
                                <span className="w-1.5 h-4 bg-emerald-400 animate-pulse inline-block" />
                            </div>
                        </div>

                        <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
                            Crafting blazing fast, accessible, and high-performance web applications using React, TypeScript, and modern engineering standards.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
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
                                <span>Get in Touch</span>
                            </button>
                        </div>

                        <div className="pt-4">
                            <div
                                onClick={copyTerminalCmd}
                                className="group inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-black/60 border border-white/10 cursor-pointer hover:border-white/20 hover:bg-black/80 transition-all w-full sm:w-auto"
                            >
                                <Terminal className="w-4 h-4 text-gray-500" />
                                <code className="code-mono text-sm text-gray-300 flex-1">
                                    <span className="text-gray-600">$</span> npx dipesh-soni@latest
                                </code>
                                <button className="shrink-0 p-1.5 rounded-md border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all text-gray-400 hover:text-white">
                                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="relative w-full max-w-md mx-auto">
                            <div className="absolute -inset-8 bg-gradient-to-tr from-white/5 via-transparent to-white/5 rounded-[2.5rem] blur-2xl opacity-60 pointer-events-none" />
                            <div className="relative card-surface rounded-3xl p-4 hover-lift">
                                <div className="absolute top-3 left-4 flex gap-1.5 z-10">
                                    <span className="w-3 h-3 rounded-full bg-red-500/70" />
                                    <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                    <span className="w-3 h-3 rounded-full bg-green-500/70" />
                                </div>
                                <div className="absolute top-3 right-4 z-10 code-mono text-[10px] text-gray-500 uppercase tracking-widest">
                                    portfolio.tsx
                                </div>
                                <div className="w-full aspect-[4/5] mt-8 rounded-2xl overflow-hidden relative bg-black border border-white/5">
                                    <img
                                        src={heroImage}
                                        alt="Dipesh Soni"
                                        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 brightness-95"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                                    <div className="absolute bottom-0 inset-x-0 p-5">
                                        <div className="code-mono text-[11px] text-emerald-400 mb-2 uppercase tracking-wider">
                                            Frontend Developer · India
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-xl font-bold text-white">Dipesh Soni</div>
                                                <div className="text-xs text-gray-400 mt-0.5">React · TypeScript · Vite</div>
                                            </div>
                                            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center backdrop-blur-md">
                                                <ArrowRight className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`mt-24 sm:mt-32 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <div className="text-center mb-5">
                        <span className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.24em]">
                            Core Technology Stack
                        </span>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
                        {techStackStrip.map((item) => (
                            <div key={item.name} className="bg-[#0a0a0a] p-6 sm:p-7 text-center hover:bg-white/[0.03] transition-colors group">
                                <div className="code-mono text-[10px] text-gray-500 uppercase tracking-[0.18em] block mb-2">
                                    {item.label}
                                </div>
                                <div className="text-xl sm:text-2xl font-bold text-white group-hover:text-gray-200 transition-colors tracking-tight">
                                    {item.name}
                                </div>
                                <div className="mt-2 text-xs text-gray-500">{item.status}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
