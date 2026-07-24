import { Code2, Database, Wrench, Cpu } from 'lucide-react';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import { SKILL_CATEGORIES } from '../../data/skills';

const SKILL_ICON_MAP = { Database, Code2, Wrench } as const;

const Skills = () => {
    const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
    const { containerRef, visibleItems } = useStaggerReveal<HTMLDivElement>(SKILL_CATEGORIES.length, { staggerDelay: 150 });

    const getIcon = (iconName: string) => {
        const IconComp = SKILL_ICON_MAP[iconName as keyof typeof SKILL_ICON_MAP];
        return IconComp ? <IconComp className="w-5 h-5 text-emerald-400" /> : <Cpu className="w-5 h-5 text-emerald-400" />;
    };

    return (
        <section ref={sectionRef} id="skills" className="py-28 sm:py-36 relative overflow-hidden">
            <div className="section-spotlight w-[700px] h-[500px] top-40 -left-20 opacity-80" />
            <div className="section-spotlight w-[500px] h-[400px] bottom-20 right-0 opacity-50" />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
                <div className={`text-center mb-20 sm:mb-24 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="section-eyebrow mb-4">
                        <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Tech Stack &amp; Capabilities</span>
                    </div>
                    <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl mb-5">
                        <span className="block text-white">Redefining Developer</span>
                        <span className="block gradient-text mt-1">Experience</span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        A structured breakdown of languages, frameworks, and engineering tools I leverage daily.
                    </p>
                </div>

                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {SKILL_CATEGORIES.map((category, index) => {
                        return (
                            <div
                                key={category.title}
                                className={`transition-all duration-700 ease-out ${visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: `${index * 120}ms` }}
                            >
                                <div className="card-surface rounded-3xl p-7 h-full flex flex-col justify-between hover-lift">
                                    <div>
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                                                {getIcon(category.iconName)}
                                            </div>
                                            <span className="code-mono text-[10px] text-gray-500 uppercase tracking-[0.2em]">
                                                0{index + 1} // Stack
                                            </span>
                                        </div>

                                        <h3 className="text-xl sm:text-[1.35rem] font-bold tracking-tight text-white mb-2">
                                            {category.title}
                                        </h3>
                                        <p className="text-xs sm:text-[0.8rem] text-gray-500 leading-relaxed mb-6">
                                            {category.skills.length} core technologies mastered for high-performance builds.
                                        </p>

                                        <div className="space-y-2">
                                            {category.skills.map((skill) => (
                                                <div key={skill.name} className="group flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/[0.06] hover:border-white/[0.14] hover:bg-black/60 transition-all">
                                                    <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                                                    <span className="code-mono text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                                                        {skill.proficiency}%
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between code-mono text-[11px] text-gray-500">
                                        <span>Status: Operational</span>
                                        <span className="text-emerald-400">● 100% Active</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className={`card-surface rounded-3xl p-8 sm:p-10 max-w-4xl mx-auto text-center transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <blockquote className="text-base sm:text-lg text-gray-300 italic max-w-2xl mx-auto leading-[1.8]">
                        "Great software is built at the intersection of performance, clean architecture, and continuous learning."
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

export default Skills;
