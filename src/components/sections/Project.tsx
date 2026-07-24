import { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, X, Lightbulb, Target, Rocket as RocketIcon, Layers } from 'lucide-react';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import { PROJECTS_DATA } from '../../data/projects';

const Project = () => {
    const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
    const { containerRef, visibleItems } = useStaggerReveal<HTMLDivElement>(PROJECTS_DATA.length, { staggerDelay: 120 });
    const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS_DATA)[number] | null>(null);

    return (
        <section ref={sectionRef} id="projects" className="py-28 sm:py-36 relative overflow-hidden">
            <div className="section-spotlight w-[700px] h-[450px] top-20 left-1/2 -translate-x-1/2" />
            <div className="section-spotlight w-[500px] h-[400px] bottom-40 -right-20 opacity-50" />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
                <div className={`text-center mb-20 sm:mb-24 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="section-eyebrow mb-4">
                        <Layers className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Featured Showcase</span>
                    </div>
                    <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl mb-5">
                        <span className="block text-white">Powering Modern</span>
                        <span className="block gradient-text mt-1">Frameworks &amp; Apps</span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Explore full-featured projects built with React, TypeScript, state management, and modern API integrations.
                    </p>
                </div>

                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {PROJECTS_DATA.map((project, index) => (
                        <div
                            key={project.title}
                            className={`transition-all duration-700 ease-out ${visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="card-surface rounded-3xl overflow-hidden h-full flex flex-col justify-between hover-lift group">
                                <div>
                                    <div className="relative h-52 overflow-hidden border-b border-white/[0.08] bg-black">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[800ms] ease-out grayscale-[15%] group-hover:grayscale-0 brightness-95"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />

                                        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                                            <span className="px-2.5 py-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-lg code-mono text-[11px] text-gray-300 font-medium">
                                                {project.subtitle}
                                            </span>
                                            {project.status && (
                                                <span className="px-2.5 py-1 bg-emerald-500/15 border border-emerald-500/30 rounded-lg code-mono text-[10px] text-emerald-300 font-bold uppercase tracking-wider">
                                                    {project.status}
                                                </span>
                                            )}
                                        </div>

                                        <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-9 h-9 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            )}
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-9 h-9 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                                                >
                                                    <Github className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <div className="p-6 sm:p-7">
                                        <h3
                                            className="text-xl font-bold tracking-tight text-white mb-2.5 flex items-center gap-2 cursor-pointer group/title"
                                            onClick={() => setSelectedProject(project)}
                                        >
                                            <span className="group-hover/title:text-gray-200 transition-colors">{project.title}</span>
                                            <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover/title:text-white transition-colors shrink-0" />
                                        </h3>
                                        <p className="text-xs sm:text-[0.82rem] text-gray-500 leading-relaxed mb-6 line-clamp-3 min-h-[3.5em]">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5">
                                            {project.technologies.map((tech) => (
                                                <span key={tech} className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/[0.07] code-mono text-[10.5px] text-gray-400 font-medium">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5 sm:p-6 border-t border-white/[0.06] bg-white/[0.01]">
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="w-full py-2.5 px-4 rounded-xl bg-white/[0.03] border border-white/[0.08] code-mono text-xs text-gray-400 hover:text-white hover:bg-white/[0.07] hover:border-white/[0.16] transition-all flex items-center justify-center gap-2 group/btn"
                                    >
                                        <span>View Case Study</span>
                                        <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover/btn:text-white transition-colors" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`text-center transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <a
                        href="https://github.com/dini28"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="vite-btn-secondary group"
                    >
                        <Github className="w-4 h-4" />
                        <span>Explore All Repositories on GitHub</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                </div>
            </div>

            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-lg animate-in fade-in duration-300"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto card-surface rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300 text-gray-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative h-56 overflow-hidden shrink-0 border-b border-white/[0.08]">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 w-9 h-9 bg-black/70 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                            >
                                <X className="w-4 h-4" />
                            </button>
                            <div className="absolute bottom-5 left-6 sm:left-8">
                                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{selectedProject.title}</h3>
                                <p className="code-mono text-[11px] text-emerald-400 mt-1 uppercase tracking-wider">{selectedProject.subtitle}</p>
                            </div>
                        </div>

                        <div className="p-6 sm:p-8 space-y-6">
                            <div className="space-y-5">
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 bg-white/[0.03] rounded-xl border border-white/10 flex items-center justify-center text-emerald-400">
                                        <Target className="w-4.5 h-4.5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1.5">Problem Statement</h4>
                                        <p className="text-gray-500 text-xs sm:text-[0.82rem] leading-relaxed">{selectedProject.caseStudy.problem}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 bg-white/[0.03] rounded-xl border border-white/10 flex items-center justify-center text-emerald-400">
                                        <Lightbulb className="w-4.5 h-4.5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1.5">Technical Architecture</h4>
                                        <p className="text-gray-500 text-xs sm:text-[0.82rem] leading-relaxed">{selectedProject.caseStudy.solution}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 bg-white/[0.03] rounded-xl border border-white/10 flex items-center justify-center text-emerald-400">
                                        <RocketIcon className="w-4.5 h-4.5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1.5">Measurable Impact</h4>
                                        <p className="text-gray-500 text-xs sm:text-[0.82rem] leading-relaxed">{selectedProject.caseStudy.impact}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex flex-wrap gap-1.5">
                                    {selectedProject.technologies.map(tech => (
                                        <span key={tech} className="code-mono text-[10.5px] px-2.5 py-1 bg-white/[0.03] border border-white/[0.08] rounded-lg text-gray-500 font-medium">{tech}</span>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    {selectedProject.githubUrl && (
                                        <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.07] transition-colors">
                                            <Github className="w-4 h-4" />
                                        </a>
                                    )}
                                    {selectedProject.liveUrl && (
                                        <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.07] transition-colors">
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
