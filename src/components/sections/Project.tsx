'use client';

import { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, X, Lightbulb, Target, Rocket as RocketIcon, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { PROJECTS_DATA } from '../../data/projects';

type TabType = 'overview' | 'architecture' | 'impact';

const Project = () => {
    const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [activeTab, setActiveTab] = useState<TabType>('overview');
    const [selectedModalProject, setSelectedModalProject] = useState<(typeof PROJECTS_DATA)[number] | null>(null);

    const activeProject = PROJECTS_DATA[activeIndex] || PROJECTS_DATA[0];

    return (
        <section ref={sectionRef} id="projects" className="py-24 sm:py-32 relative overflow-hidden">
            {/* Ambient Background Spotlights */}
            <div className="section-spotlight w-[750px] h-[480px] top-10 left-1/2 -translate-x-1/2" />
            <div className="section-spotlight w-[550px] h-[420px] bottom-20 -right-20 opacity-40" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                {/* Header */}
                <div className={`text-center mb-14 sm:mb-20 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="fc-section-tag mb-4">
                        <span className="fc-index">[ 02 / 05 ]</span>
                        <span>· FEATURED PROJECTS</span>
                    </div>

                    <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl mb-5">
                        <span className="block text-white">Powering Modern</span>
                        <span className="block gradient-text mt-1">Frameworks &amp; Applications</span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Select a featured build to inspect its architectural design, technical stack, and measurable impact.
                    </p>
                </div>

                {/* Main Split Showcase Deck */}
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 transition-all duration-700 ease-out delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                    {/* Left Column: Project Selector Deck (5 Cols) */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        <div className="flex items-center justify-between px-1 mb-1">
                            <span className="code-mono text-xs font-semibold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                Project Catalog ({PROJECTS_DATA.length})
                            </span>
                        </div>

                        <div className="space-y-3.5">
                            {PROJECTS_DATA.map((project, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <div
                                        key={project.title}
                                        onClick={() => {
                                            setActiveIndex(index);
                                            setActiveTab('overview');
                                        }}
                                        className={`group relative p-5 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 border fc-bento-card ${isActive
                                            ? 'bg-gradient-to-r from-emerald-950/40 via-white/[0.04] to-transparent border-emerald-500/40 shadow-lg shadow-emerald-950/30 ring-1 ring-emerald-500/20'
                                            : 'border-white/[0.08] hover:border-white/20'
                                            }`}
                                    >
                                        {/* Active Beam Indicator */}
                                        {isActive && (
                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-emerald-400 rounded-r-full shadow-lg shadow-emerald-400/50" />
                                        )}

                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex items-center gap-3.5">
                                                <span className={`code-mono text-sm font-bold px-2.5 py-1 rounded-lg border ${isActive
                                                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                                                    : 'bg-white/[0.04] text-gray-500 border-white/[0.08] group-hover:text-gray-300'
                                                    }`}>
                                                    0{index + 1}
                                                </span>
                                                <div>
                                                    <h3 className={`text-lg font-bold tracking-tight transition-colors ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                                                        }`}>
                                                        {project.title}
                                                    </h3>
                                                    <p className="code-mono text-xs text-gray-400 mt-0.5">{project.subtitle}</p>
                                                </div>
                                            </div>

                                            <ChevronRight className={`w-5 h-5 transition-transform duration-300 shrink-0 ${isActive ? 'text-emerald-400 translate-x-1' : 'text-gray-600 group-hover:text-gray-400'
                                                }`} />
                                        </div>

                                        {/* Tech Badges Row */}
                                        <div className="mt-4 flex flex-wrap gap-1.5">
                                            {project.technologies.slice(0, 4).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className={`code-mono text-[10.5px] px-2 py-0.5 rounded-md border ${isActive
                                                        ? 'bg-emerald-950/60 border-emerald-500/30 text-emerald-300 font-medium'
                                                        : 'bg-black/40 border-white/[0.06] text-gray-400'
                                                        }`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 4 && (
                                                <span className="code-mono text-[10px] px-1.5 py-0.5 text-gray-500">
                                                    +{project.technologies.length - 4}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Quick GitHub Navigation Card */}
                        <div className="mt-2 card-surface p-4 rounded-2xl border border-white/[0.08] flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Github className="w-4 h-4 text-emerald-400" />
                                <span className="text-xs text-gray-400 font-medium">Explore All Repositories on GitHub</span>
                            </div>
                            <a
                                href="https://github.com/dini28"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="code-mono text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold transition-colors"
                            >
                                <span>GitHub</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Dynamic Stage & Detail Canvas (7 Cols) */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                        <div className="card-surface rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col h-full bg-gradient-to-b from-[#0f1512] to-[#0a0a0a]">

                            {/* Browser Frame Top Bar */}
                            <div className="px-5 py-3.5 bg-black/60 border-b border-white/[0.08] flex items-center justify-between shrink-0">
                                <div className="flex items-center gap-2">
                                    <span className="ml-3 code-mono text-xs text-gray-400 flex items-center gap-1.5">
                                        {activeProject.title.toLowerCase()}.vercel.app
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {activeProject.status && (
                                        <span className="px-2.5 py-0.5 bg-emerald-500/15 border border-emerald-500/30 rounded-full code-mono text-[10px] text-emerald-300 font-bold uppercase tracking-wider">
                                            {activeProject.status}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Project Visual Stage */}
                            <div className="relative h-64 sm:h-80 overflow-hidden bg-black group shrink-0 border-b border-white/[0.08]">
                                <img
                                    key={activeProject.image.src}
                                    src={activeProject.image.src}
                                    alt={activeProject.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent" />

                                {/* Quick Action Floating Buttons */}
                                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                                    {activeProject.liveUrl && (
                                        <a
                                            href={activeProject.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-3.5 py-2 rounded-xl bg-emerald-500 text-black font-semibold text-xs flex items-center gap-1.5 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
                                        >
                                            <span>Live Demo</span>
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                    {activeProject.githubUrl && (
                                        <a
                                            href={activeProject.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-9 h-9 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                                            title="View Code Repository"
                                        >
                                            <Github className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>

                                <div className="absolute bottom-4 left-5">
                                    <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{activeProject.title}</h4>
                                    <p className="code-mono text-xs text-emerald-400 font-medium">{activeProject.subtitle}</p>
                                </div>
                            </div>

                            {/* Dynamic Interactive Detail Tabs */}
                            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                                <div>
                                    {/* Tab Switcher */}
                                    <div className="flex border-b border-white/[0.08] mb-5 gap-4">
                                        <button
                                            onClick={() => setActiveTab('overview')}
                                            className={`pb-3 text-xs sm:text-sm font-semibold transition-all relative ${activeTab === 'overview'
                                                ? 'text-emerald-400'
                                                : 'text-gray-400 hover:text-gray-200'
                                                }`}
                                        >
                                            Overview
                                            {activeTab === 'overview' && (
                                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 rounded-full" />
                                            )}
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('architecture')}
                                            className={`pb-3 text-xs sm:text-sm font-semibold transition-all relative ${activeTab === 'architecture'
                                                ? 'text-emerald-400'
                                                : 'text-gray-400 hover:text-gray-200'
                                                }`}
                                        >
                                            Architecture
                                            {activeTab === 'architecture' && (
                                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 rounded-full" />
                                            )}
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('impact')}
                                            className={`pb-3 text-xs sm:text-sm font-semibold transition-all relative ${activeTab === 'impact'
                                                ? 'text-emerald-400'
                                                : 'text-gray-400 hover:text-gray-200'
                                                }`}
                                        >
                                            Impact &amp; Results
                                            {activeTab === 'impact' && (
                                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 rounded-full" />
                                            )}
                                        </button>
                                    </div>

                                    {/* Tab Content Display */}
                                    {activeTab === 'overview' && (
                                        <div className="space-y-4 animate-in fade-in duration-300">
                                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                                {activeProject.description}
                                            </p>

                                            <div>
                                                <h5 className="code-mono text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5">
                                                    Technologies &amp; Libraries
                                                </h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {activeProject.technologies.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-3 py-1 rounded-xl bg-white/[0.04] border border-white/10 code-mono text-xs text-gray-300 font-medium"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'architecture' && (
                                        <div className="space-y-4 animate-in fade-in duration-300">
                                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex gap-3">
                                                <Target className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                                <div>
                                                    <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-1">Problem</h5>
                                                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{activeProject.caseStudy.problem}</p>
                                                </div>
                                            </div>

                                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex gap-3">
                                                <Lightbulb className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                                <div>
                                                    <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-1">Engineering Solution</h5>
                                                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{activeProject.caseStudy.solution}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'impact' && (
                                        <div className="space-y-4 animate-in fade-in duration-300">
                                            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 flex gap-3">
                                                <RocketIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                                <div>
                                                    <h5 className="text-emerald-300 font-bold text-xs uppercase tracking-wider mb-1">Key Results</h5>
                                                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{activeProject.caseStudy.impact}</p>
                                                </div>
                                            </div>

                                            <ul className="space-y-2">
                                                <li className="flex items-center gap-2 text-xs text-gray-400">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                                    <span>Optimized layout performance &amp; component architecture</span>
                                                </li>
                                                <li className="flex items-center gap-2 text-xs text-gray-400">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                                    <span>Production-ready deployment &amp; continuous integration</span>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* Deep Case Study Trigger Button */}
                                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                                    <button
                                        onClick={() => setSelectedModalProject(activeProject)}
                                        className="py-2.5 px-4 rounded-xl bg-white/[0.04] border border-white/10 code-mono text-xs text-gray-300 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2"
                                    >
                                        <span>Read Full Case Study</span>
                                        <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                                    </button>

                                    <div className="flex gap-2">
                                        {activeProject.githubUrl && (
                                            <a
                                                href={activeProject.githubUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.07] transition-colors"
                                            >
                                                <Github className="w-4 h-4" />
                                            </a>
                                        )}
                                        {activeProject.liveUrl && (
                                            <a
                                                href={activeProject.liveUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.07] transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Case Study Modal */}
            {selectedModalProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-lg animate-in fade-in duration-300"
                    onClick={() => setSelectedModalProject(null)}
                >
                    <div
                        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto card-surface rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300 text-gray-200 border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative h-60 overflow-hidden shrink-0 border-b border-white/[0.08]">
                            <img
                                src={selectedModalProject.image.src}
                                alt={selectedModalProject.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                            <button
                                onClick={() => setSelectedModalProject(null)}
                                className="absolute top-4 right-4 w-9 h-9 bg-black/70 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                            >
                                <X className="w-4 h-4" />
                            </button>
                            <div className="absolute bottom-5 left-6 sm:left-8">
                                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{selectedModalProject.title}</h3>
                                <p className="code-mono text-[11px] text-emerald-400 mt-1 uppercase tracking-wider">{selectedModalProject.subtitle}</p>
                            </div>
                        </div>

                        <div className="p-6 sm:p-8 space-y-6">
                            <div className="space-y-5">
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 bg-emerald-500/10 rounded-xl border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                        <Target className="w-4.5 h-4.5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1.5">Problem Statement</h4>
                                        <p className="text-gray-400 text-xs sm:text-[0.85rem] leading-relaxed">{selectedModalProject.caseStudy.problem}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 bg-emerald-500/10 rounded-xl border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                        <Lightbulb className="w-4.5 h-4.5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1.5">Technical Architecture</h4>
                                        <p className="text-gray-400 text-xs sm:text-[0.85rem] leading-relaxed">{selectedModalProject.caseStudy.solution}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 bg-emerald-500/10 rounded-xl border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                        <RocketIcon className="w-4.5 h-4.5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1.5">Measurable Impact</h4>
                                        <p className="text-gray-400 text-xs sm:text-[0.85rem] leading-relaxed">{selectedModalProject.caseStudy.impact}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex flex-wrap gap-1.5">
                                    {selectedModalProject.technologies.map(tech => (
                                        <span key={tech} className="code-mono text-[10.5px] px-2.5 py-1 bg-white/[0.03] border border-white/[0.08] rounded-lg text-gray-400 font-medium">{tech}</span>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    {selectedModalProject.githubUrl && (
                                        <a href={selectedModalProject.githubUrl} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.07] transition-colors">
                                            <Github className="w-4 h-4" />
                                        </a>
                                    )}
                                    {selectedModalProject.liveUrl && (
                                        <a href={selectedModalProject.liveUrl} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.07] transition-colors">
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Project;

