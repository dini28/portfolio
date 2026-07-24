import { GraduationCap, Code2, Rocket, Award, Terminal } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import about from '../../assets/about.webp';

const About = () => {
    const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal({ threshold: 0.1 });
    const { ref: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
    const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

    return (
        <section
            ref={sectionRef}
            id="about"
            className="py-28 sm:py-36 relative overflow-hidden"
        >
            <div className="section-spotlight w-[600px] h-[400px] top-20 right-0" />
            <div className="section-spotlight w-[500px] h-[400px] bottom-0 left-10 opacity-40" />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
                <div className={`text-center mb-20 sm:mb-24 transition-all duration-700 ease-out ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="section-eyebrow mb-4">
                        <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Background &amp; Experience</span>
                    </div>
                    <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl mb-5">
                        <span className="block text-white">A Shared Foundation</span>
                        <span className="block gradient-text-soft mt-1">to Build Upon</span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Combining computer science principles with high-precision frontend architecture to build web apps that scale.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    <div
                        ref={imageRef}
                        className={`lg:col-span-5 space-y-6 transition-all duration-1000 ease-out ${imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                    >
                        <div className="relative">
                            <div className="absolute -inset-6 bg-gradient-to-br from-white/[0.05] via-transparent to-white/[0.03] rounded-[2.5rem] blur-2xl opacity-60 pointer-events-none" />
                            <div className="relative card-surface rounded-3xl p-4 hover-lift">
                                <div className="w-full rounded-2xl overflow-hidden relative bg-black border border-white/5">
                                    <img
                                        src={about}
                                        alt="Dipesh Soni - Frontend Developer"
                                        loading="lazy"
                                        className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 brightness-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-70" />
                                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl border border-white/10 bg-black/70 backdrop-blur-md flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Award className="w-3.5 h-3.5 text-emerald-400" />
                                            <span className="text-xs font-bold text-white">CODEFIESTA 3.0 Winner</span>
                                        </div>
                                        <span className="code-mono text-[10px] text-gray-400 uppercase tracking-wider">National</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
                            <div className="bg-[#0a0a0a] p-6 text-center">
                                <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mx-auto mb-3">
                                    <GraduationCap className="w-5 h-5 text-white" />
                                </div>
                                <span className="code-mono text-[10px] text-gray-500 uppercase tracking-[0.18em] block mb-1">Education</span>
                                <span className="text-base font-bold text-white block">B.Tech in CSE</span>
                            </div>
                            <div className="bg-[#0a0a0a] p-6 text-center">
                                <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mx-auto mb-3">
                                    <Award className="w-5 h-5 text-white" />
                                </div>
                                <span className="code-mono text-[10px] text-gray-500 uppercase tracking-[0.18em] block mb-1">Shipped</span>
                                <span className="text-base font-bold text-white block">5+ Live Apps</span>
                            </div>
                        </div>
                    </div>

                    <div
                        ref={contentRef}
                        className={`lg:col-span-7 space-y-6 transition-all duration-1000 ease-out ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                    >
                        <div className="card-surface rounded-3xl p-7 sm:p-8 hover-lift">
                            <h3 className="text-2xl font-bold tracking-tight text-white mb-5">
                                My Engineering Journey
                            </h3>
                            <div className="space-y-4 text-gray-300 text-sm sm:text-[0.95rem] leading-[1.8]">
                                <p>
                                    <strong className="text-white font-semibold">I'm a frontend developer passionate about crafting exceptional web experiences.</strong> What started with curiosity during my first semester has grown into a genuine commitment to building scalable software on the web.
                                </p>
                                <p>
                                    Over the past year, I've sharpened my skills by shipping real projects — from responsive landing pages to full-stack applications. Winning <strong className="text-white font-semibold">CODEFIESTA 3.0 National Hackathon</strong> taught me how to deliver under high pressure and collaborate effectively with multidisciplinary teams.
                                </p>
                                <p>
                                    I work confidently with React, TypeScript, and modern frontend tools, and I'm actively expanding into Next.js and full-stack system design.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="card-surface rounded-2xl p-6 hover-lift">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                                        <Code2 className="w-5 h-5 text-emerald-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold tracking-tight text-white text-sm">Primary Stack</h4>
                                        <span className="text-xs text-gray-500">Production ready</span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['React 19', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Tailwind CSS'].map(tech => (
                                        <span key={tech} className="px-2.5 py-1 rounded-lg bg-black/50 border border-white/10 code-mono text-[11px] text-gray-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="card-surface rounded-2xl p-6 hover-lift">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                                        <Rocket className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold tracking-tight text-white text-sm">Expanding Into</h4>
                                        <span className="text-xs text-gray-500">Active focus</span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['Next.js 15', 'TypeScript', 'Node.js', 'Vite Plugins'].map(tech => (
                                        <span key={tech} className="px-2.5 py-1 rounded-lg bg-black/50 border border-white/10 code-mono text-[11px] text-gray-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
