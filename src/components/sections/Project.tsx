import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '../common/Card';
import { Button } from '../common/Button';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';

import digital_marketing from '../../assets/digital_marketing.png';
import quickquality from '../../assets/quickquality.png';
import ghummakkad from '../../assets/ghummakkad.png';

const PROJECTS_DATA = [
    {
        title: 'PixelWings - Servive Based',
        description: 'A full-stack React application with modern architecture, featuring state management, responsive design, and seamless user experience.',
        image: digital_marketing,
        technologies: ['React', 'TypeScript', 'Tailwind CSS'],
        liveUrl: 'http://pixelwings.vercel.app',
        githubUrl: '',
    },
    {
        title: 'Quick Quality - Product Based',
        description: 'A responsive landing page for the Milkoscan portable adulteration detection device. Highlights product features, team introductions, and includes an order modal system.',
        image: quickquality,
        technologies: ['HTML', 'CSS', 'JavaScript'],
        liveUrl: 'https://dini28.github.io/QuickQuality',
        githubUrl: 'https://github.com/dini28/QuickQuality',
    },
    {
        title: 'Ghummakkad - Hotel Booking',
        description: 'A full-featured hotel booking website with user authentication, room search and filtering, booking management, and payment integration using MongoDB database.',
        image: ghummakkad,
        technologies: ['HTML', 'CSS', 'JavaScript', 'MongoDB'],
        liveUrl: '',
        githubUrl: '',
    },
];

const Project = () => {
    const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
    const { containerRef, visibleItems } = useStaggerReveal(PROJECTS_DATA.length, { staggerDelay: 200 });

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="py-20 bg-white relative overflow-hidden"
            style={{ fontFamily: 'Sansation, sans-serif' }}
        >
            {/* Background Elements */}
            <div className="absolute top-16 left-16 w-48 h-48 bg-cyan-400/5 rounded-full blur-3xl animate-pulse -z-10"></div>
            <div className="absolute bottom-16 right-16 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl animate-pulse -z-10" style={{ animationDelay: '4s' }}></div>

            <div className="container mx-auto px-4 lg:px-6">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-lg text-slate-600 font-medium mb-4 uppercase tracking-wider">
                        Featured Work
                    </p>
                    <h2
                        className="text-4xl lg:text-5xl font-bold mb-6"
                        style={{
                            background: 'linear-gradient(to right, #475569, #334155, #0f172a)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        Projects
                    </h2>
                </div>

                {/* Projects Grid */}
                <div ref={containerRef as React.RefObject<HTMLDivElement>} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS_DATA.map((project, index) => (
                        <Card
                            key={project.title}
                            className={`
                group border-0 shadow-lg hover:shadow-2xl 
                transition-all duration-700 hover:-translate-y-4 overflow-hidden 
                bg-white backdrop-blur-md
                ${visibleItems[index] ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-3 scale-95'}
              `}
                            style={{
                                animationDelay: `${index * 150}ms`,
                                transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)'
                            }}
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.image}
                                    alt={`Screenshot of ${project.title} project`}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                                />

                                {/* Animated Overlay with linear gradient */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm"
                                    style={{
                                        background: 'linear-gradient(to bottom right, rgba(15, 118, 110, 0.9), rgba(30, 41, 59, 0.8), rgba(37, 99, 235, 0.8))'
                                    }}
                                >
                                    <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {/* Conditionally Render Live Link */}
                                        {project.liveUrl && (
                                            <Button
                                                size="sm"
                                                variant="secondary"
                                                className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white hover:text-teal-700 hover:scale-105 transition-all duration-300"
                                                asChild
                                            >
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`View live demo of ${project.title}`}
                                                >
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    Live Demo
                                                </a>
                                            </Button>
                                        )}

                                        {/* Conditionally Render Github Link */}
                                        {project.githubUrl && (
                                            <Button
                                                size="sm"
                                                variant="secondary"
                                                className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white hover:text-teal-700 hover:scale-105 transition-all duration-300"
                                                asChild
                                            >
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`View source code for ${project.title}`}
                                                >
                                                    <Github className="w-4 h-4 mr-2" />
                                                    Code
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <CardContent className="p-6 relative">
                                {/* Project Title */}
                                <h3 className="text-xl font-semibold mb-3 text-slate-800 group-hover:text-teal-700 transition-colors duration-300">
                                    {project.title}
                                </h3>

                                {/* Project Description */}
                                <p className="text-slate-600 text-sm mb-6 leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={`${project.title}-${tech}`}
                                            className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700 transition-colors duration-300 cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Decorative corner with linear gradient */}
                                <div
                                    className="absolute top-0 right-0 w-20 h-20 rounded-bl-full pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(to bottom right, rgba(20, 184, 166, 0.1), transparent)'
                                    }}
                                ></div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* View More Projects */}
                <div className={`text-center mt-16 transition-all duration-800 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-2 border-slate-600 text-slate-700 hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300 px-8 bg-white/10 backdrop-blur-md group"
                        asChild
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(to right, #475569, #334155, #0f172a)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        }}
                    >
                        <a href="https://github.com/dini28" target="_blank" rel="noopener noreferrer">
                            <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                            View All Projects on GitHub
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Project;