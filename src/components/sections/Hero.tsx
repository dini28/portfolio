'use client';

import { useEffect, useState, useRef, useMemo } from 'react';
import { Code2, ArrowRight, Copy, Check } from 'lucide-react';
import { useMagnetic } from '../../hooks/useMagnetic';

const Hero = () => {
    const [activeTerminalTab, setActiveTerminalTab] = useState<'developer' | 'response' | 'cli'>('developer');
    const [copied, setCopied] = useState(false);
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
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="text-emerald-300 font-semibold">{'// Available for Freelancing \\\\'}</span>
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

                    {/* Right Column: Firecrawl Interactive Terminal & Developer Showcase */}
                    <div className="lg:col-span-5">
                        <div className="relative w-full max-w-md mx-auto">
                            {/* Ambient Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-white/10 via-transparent to-white/5 rounded-3xl blur-2xl opacity-40 pointer-events-none" />

                            {/* Firecrawl Terminal Window */}
                            <div className="fc-terminal-window relative border border-white/15 bg-[#09090b]">
                                {/* Terminal Title Bar */}
                                <div className="flex items-center justify-between px-4 py-3 bg-[#121215] border-b border-white/10">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                        <span className="code-mono text-xs text-gray-400 ml-2">dipesh.dev --play</span>
                                    </div>

                                    <div className="flex items-center gap-1.5">
                                        <span className="px-2 py-0.5 rounded text-[10px] code-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                                            200 OK
                                        </span>
                                        <button
                                            onClick={() => {
                                                let code = '';
                                                if (activeTerminalTab === 'developer') {
                                                    code = `export const dipesh = {\n  role: "UI/UX Designer @ Toba Tech",\n  stack: ["React 19", "TypeScript", "Tailwind CSS", "Figma"],\n  status: "Available for Freelance"\n};`;
                                                } else if (activeTerminalTab === 'response') {
                                                    code = `{\n  "status": 200,\n  "responseTime": "14ms",\n  "uiExcellence": "100%",\n  "cleanArchitecture": true\n}`;
                                                } else {
                                                    code = `$ npx dipesh-soni --inspect\n✔ Loading UI/UX design tokens...\n✔ React 19 + TypeScript ready.`;
                                                }
                                                navigator.clipboard.writeText(code);
                                                setCopied(true);
                                                setTimeout(() => setCopied(false), 2000);
                                            }}
                                            className="p-1 rounded hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                            title="Copy Code"
                                        >
                                            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                                        </button>
                                    </div>
                                </div>

                                {/* Terminal Tabs (Firecrawl Playground Style) */}
                                <div className="flex items-center gap-1 p-2 bg-[#0d0d10] border-b border-white/5 overflow-x-auto">
                                    <button
                                        onClick={() => setActiveTerminalTab('developer')}
                                        className={`px-3 py-1.5 rounded-lg code-mono text-xs transition-all ${
                                            activeTerminalTab === 'developer'
                                                ? 'bg-white/10 text-white font-medium shadow-sm border border-white/10'
                                                : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.04]'
                                        }`}
                                    >
                                        Developer.ts
                                    </button>
                                    <button
                                        onClick={() => setActiveTerminalTab('response')}
                                        className={`px-3 py-1.5 rounded-lg code-mono text-xs transition-all ${
                                            activeTerminalTab === 'response'
                                                ? 'bg-white/10 text-white font-medium shadow-sm border border-white/10'
                                                : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.04]'
                                        }`}
                                    >
                                        Response.json
                                    </button>
                                    <button
                                        onClick={() => setActiveTerminalTab('cli')}
                                        className={`px-3 py-1.5 rounded-lg code-mono text-xs transition-all ${
                                            activeTerminalTab === 'cli'
                                                ? 'bg-white/10 text-white font-medium shadow-sm border border-white/10'
                                                : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.04]'
                                        }`}
                                    >
                                        CLI.sh
                                    </button>
                                </div>

                                {/* Code Editor Content Window */}
                                <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto min-h-[220px]">
                                    {activeTerminalTab === 'developer' && (
                                        <div className="space-y-1.5 text-gray-300">
                                            <div><span className="text-purple-400">export const</span> <span className="text-blue-400">developer</span> = &#123;</div>
                                            <div className="pl-4"><span className="text-gray-400">name:</span> <span className="text-emerald-300">"Dipesh Soni"</span>,</div>
                                            <div className="pl-4"><span className="text-gray-400">role:</span> <span className="text-emerald-300">"UI/UX Designer @ Toba Tech"</span>,</div>
                                            <div className="pl-4"><span className="text-gray-400">focus:</span> [<span className="text-emerald-300">"React 19"</span>, <span className="text-emerald-300">"TypeScript"</span>, <span className="text-emerald-300">"Design Systems"</span>],</div>
                                            <div className="pl-4"><span className="text-gray-400">status:</span> <span className="text-yellow-300">"Available for Freelance"</span></div>
                                            <div>&#125;;</div>
                                        </div>
                                    )}

                                    {activeTerminalTab === 'response' && (
                                        <div className="space-y-1.5 text-gray-300">
                                            <div>&#123;</div>
                                            <div className="pl-4"><span className="text-purple-400">"status"</span>: <span className="text-yellow-400">200</span>,</div>
                                            <div className="pl-4"><span className="text-purple-400">"responseTime"</span>: <span className="text-emerald-300">"14ms"</span>,</div>
                                            <div className="pl-4"><span className="text-purple-400">"uiExcellence"</span>: <span className="text-emerald-300">"100%"</span>,</div>
                                            <div className="pl-4"><span className="text-purple-400">"cleanArchitecture"</span>: <span className="text-blue-400">true</span></div>
                                            <div>&#125;</div>
                                        </div>
                                    )}

                                    {activeTerminalTab === 'cli' && (
                                        <div className="space-y-2 text-gray-300">
                                            <div className="text-gray-400"><span className="text-emerald-400">$</span> npx dipesh-soni --inspect</div>
                                            <div className="text-emerald-400">✔ Fetching profile &amp; experience... Done (14ms)</div>
                                            <div className="text-emerald-400">✔ UI/UX Design System: Figma + Tailwind v4</div>
                                            <div className="text-emerald-400">✔ Frontend Stack: React 19 + TypeScript</div>
                                            <div className="text-gray-400 pt-1">➜ Ready to build high-performance web apps!</div>
                                        </div>
                                    )}
                                </div>

                                {/* Terminal Footer Bar */}
                                <div className="px-4 py-2.5 bg-[#0b0b0e] border-t border-white/5 flex items-center justify-between text-[11px] code-mono text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        <span>SYSTEM ONLINE</span>
                                    </div>
                                    <span>[ .TSX ] [ .JSON ]</span>
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


