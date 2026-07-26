import { useState } from 'react';
import { Code2, Rocket, Award, Terminal, CheckCircle2, BookOpen } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import about from '../../assets/about.webp';

type BioTabType = 'story' | 'expertise' | 'achievements';

const About = () => {
    const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal({ threshold: 0.1 });
    const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
    const [activeBioTab, setActiveBioTab] = useState<BioTabType>('story');

    return (
        <section
            ref={sectionRef}
            id="about"
            className="py-24 sm:py-32 relative overflow-hidden"
        >
            {/* Ambient Background Spotlights */}
            <div className="section-spotlight w-[650px] h-[450px] top-10 right-0" />
            <div className="section-spotlight w-[550px] h-[400px] bottom-0 left-10 opacity-40" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                {/* Header */}
                <div className={`text-center mb-16 sm:mb-20 transition-all duration-700 ease-out ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="section-eyebrow mb-4">
                        <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Developer Profile</span>
                    </div>
                    <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl mb-5">
                        <span className="block text-white">Engineering Experience &amp;</span>
                        <span className="block gradient-text-soft mt-1">Technical Foundation</span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Bridging computer science fundamentals with modern frontend architecture to build high-performance web applications.
                    </p>
                </div>

                {/* Main Dossier Grid */}
                <div
                    ref={contentRef}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start transition-all duration-1000 ease-out ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    {/* Left Column: Terminal & Profile Frame (5 Cols) */}
                    <div className="lg:col-span-5 space-y-5">
                        {/* IDE / Terminal Header Card */}
                        <div className="card-surface rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-b from-[#0f1512] to-[#0a0a0a]">

                            {/* Profile Image Stage */}
                            <div className="p-4 sm:p-5">
                                <div className="relative rounded-2xl overflow-hidden bg-black border border-white/10 group">
                                    <img
                                        src={about}
                                        alt="Dipesh Soni - Frontend Developer"
                                        loading="lazy"
                                        className="w-full h-auto object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 brightness-95 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                                    {/* Overlay Award Badge */}
                                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl border border-emerald-500/30 bg-black/80 backdrop-blur-md flex items-center justify-between shadow-xl">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                                                <Award className="w-4 h-4 text-emerald-400" />
                                            </div>
                                            <div>
                                                <span className="text-xs font-extrabold text-white block">CODEFIESTA 3.0</span>
                                                <span className="text-[10px] text-emerald-300 font-semibold uppercase tracking-wider block">1st Place • National Hackathon Winner</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive Bio Deck (7 Cols) */}
                    <div className="lg:col-span-7 flex flex-col justify-between h-full">
                        <div className="card-surface rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl bg-gradient-to-b from-[#0f1512] to-[#0a0a0a]">

                            {/* Bio Deck Navigation Tabs */}
                            <div className="flex border-b border-white/[0.08] mb-6 gap-2 sm:gap-4 overflow-x-auto pb-1">
                                <button
                                    onClick={() => setActiveBioTab('story')}
                                    className={`pb-3.5 px-1 text-xs sm:text-sm font-semibold transition-all relative flex items-center gap-2 whitespace-nowrap ${activeBioTab === 'story'
                                        ? 'text-emerald-400'
                                        : 'text-gray-400 hover:text-gray-200'
                                        }`}
                                >
                                    <span>Engineering Story</span>
                                    {activeBioTab === 'story' && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 rounded-full" />
                                    )}
                                </button>
                                <button
                                    onClick={() => setActiveBioTab('expertise')}
                                    className={`pb-3.5 px-1 text-xs sm:text-sm font-semibold transition-all relative flex items-center gap-2 whitespace-nowrap ${activeBioTab === 'expertise'
                                        ? 'text-emerald-400'
                                        : 'text-gray-400 hover:text-gray-200'
                                        }`}
                                >
                                    <span>Stack &amp; Horizon</span>
                                    {activeBioTab === 'expertise' && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 rounded-full" />
                                    )}
                                </button>
                                <button
                                    onClick={() => setActiveBioTab('achievements')}
                                    className={`pb-3.5 px-1 text-xs sm:text-sm font-semibold transition-all relative flex items-center gap-2 whitespace-nowrap ${activeBioTab === 'achievements'
                                        ? 'text-emerald-400'
                                        : 'text-gray-400 hover:text-gray-200'
                                        }`}
                                >
                                    <span>Key Milestones</span>
                                    {activeBioTab === 'achievements' && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 rounded-full" />
                                    )}
                                </button>
                            </div>

                            {/* Tab 1: Engineering Story */}
                            {activeBioTab === 'story' && (
                                <div className="space-y-5 animate-in fade-in duration-300">
                                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
                                        <span>Crafting High-Precision Web Interfaces</span>
                                    </h3>
                                    <div className="space-y-4 text-gray-300 text-sm sm:text-[0.93rem] leading-[1.8]">
                                        <p>
                                            <strong className="text-white font-semibold">
                                                I build modern web experiences by bridging design, frontend engineering, and full-stack development.
                                            </strong>
                                            My journey began with Figma, where I learned the fundamentals of user experience and interface design before turning those ideas into responsive, pixel-perfect applications using React, TypeScript, and modern web technologies.
                                        </p>

                                        <p>
                                            Winning <strong className="text-white font-semibold">1st Place at CODEFIESTA 3.0 National Hackathon</strong> pushed me beyond frontend development. Under intense pressure, I adapted to backend development, collaborated across the full stack, and delivered a complete working solution—an experience that reshaped my approach to software engineering.
                                        </p>

                                        <p>
                                            Today, I'm focused on becoming a full-stack developer by mastering backend architecture, APIs, databases, and scalable systems, with the goal of delivering complete web products from Figma designs to production deployment.
                                        </p>

                                    </div>

                                    {/* Principles Pills */}
                                    <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                            <span className="text-xs text-gray-300 font-semibold">60 FPS Fluidity</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                            <span className="text-xs text-gray-300 font-semibold">Strict Typing (TS)</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                            <span className="text-xs text-gray-300 font-semibold">Clean Architecture</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Tab 2: Stack & Horizon */}
                            {activeBioTab === 'expertise' && (
                                <div className="space-y-6 animate-in fade-in duration-300">
                                    {/* Primary Core */}
                                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                                <Code2 className="w-4.5 h-4.5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-sm">Primary Engineering Stack</h4>
                                                <span className="text-xs text-gray-400">Battle-tested in production</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {['React 19', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'Git / GitHub', 'State Management'].map((tech) => (
                                                <span key={tech} className="px-3 py-1.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 code-mono text-xs text-emerald-300 font-medium">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Next-Gen Horizon */}
                                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                                                <Rocket className="w-4.5 h-4.5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-sm">Active Focus &amp; Expansion</h4>
                                                <span className="text-xs text-gray-400">Next-gen frameworks &amp; tooling</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {['Next.js 15 (App Router)', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Vite & Build Tools', 'Lighthouse Optimization'].map((tech) => (
                                                <span key={tech} className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 code-mono text-xs text-gray-300 font-medium">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Tab 3: Key Milestones */}
                            {activeBioTab === 'achievements' && (
                                <div className="space-y-4 animate-in fade-in duration-300">
                                    {/* CODEFIESTA Card */}
                                    <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-white/[0.02] to-transparent border border-emerald-500/30 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                                            <Award className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                                                <h4 className="text-white font-bold text-base">CODEFIESTA 3.0 Hackathon Winner</h4>
                                                <span className="code-mono text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold uppercase">
                                                    1st Place National
                                                </span>
                                            </div>
                                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                                Secured 1st rank at the CODEFIESTA 3.0 National Hackathon out of dozens of participating developer teams by building and pitching an end-to-end full-stack solution under intense time limits.
                                            </p>
                                        </div>
                                    </div>

                                    {/* B.Tech CSE Degree Card */}
                                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-300 shrink-0 mt-0.5">
                                            <BookOpen className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                                                <h4 className="text-white font-bold text-base">Bachelor of Technology (B.Tech in CSE)</h4>
                                                <span className="code-mono text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] text-gray-400 border border-white/10 uppercase">
                                                    Computer Science
                                                </span>
                                            </div>
                                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                                Studying core computer science disciplines including Data Structures &amp; Algorithms, Object-Oriented Programming, Operating Systems, Computer Networks, and Database Systems.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

