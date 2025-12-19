import { Code2, Cloud, Terminal } from 'lucide-react';
import { Card, CardContent } from '../common/Card';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';

const SKILL_CATEGORIES = [
    {
        title: 'Frontend',
        icon: <Code2 className="w-8 h-8" />,
        skills: ['CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Next.js'],
        gradient: 'from-blue-500 to-purple-600',
        shadow: 'shadow-blue-500/20'
    },
    {
        title: 'Cloud & DevOps',
        icon: <Cloud className="w-8 h-8" />,
        skills: ['AWS', 'Firebase', 'Netlify', 'Git'],
        gradient: 'from-green-500 to-teal-600',
        shadow: 'shadow-green-500/20'
    },
    {
        title: 'Tools & Environment',
        icon: <Terminal className="w-8 h-8" />,
        skills: ['RedHat', 'Bash', 'Python', 'Docker'],
        gradient: 'from-orange-500 to-red-600',
        shadow: 'shadow-orange-500/20'
    }
];

const Skills = () => {
    const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });
    const { containerRef, visibleItems } = useStaggerReveal(SKILL_CATEGORIES.length, { staggerDelay: 150 });

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="py-20 bg-background relative overflow-hidden"
            style={{ fontFamily: 'Sansation, sans-serif' }}
        >
            <div className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float -z-10"></div>
            <div className="absolute bottom-10 right-10 w-56 h-56 bg-accent/5 rounded-full blur-3xl animate-float -z-10" style={{ animationDelay: '3s' }}></div>

            <div className="container mx-auto px-4 lg:px-6">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-lg text-slate-600 font-medium mb-4 uppercase tracking-wider">
                        My Expertise
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
                        Skills & Technologies
                    </h2>
                </div>

                {/* Skills Grid */}
                <div ref={containerRef as React.RefObject<HTMLDivElement>} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SKILL_CATEGORIES.map((category, index) => (
                        <Card
                            key={category.title}
                            className={`
                border-0 shadow-lg hover:shadow-xl transition-all duration-500 
                hover:-translate-y-2 group modern-card glass overflow-hidden
                ${visibleItems[index] ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95'}
            `}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <CardContent className="p-8 flex flex-col items-center h-full">

                                {/* Category Header */}
                                <div className="text-center mb-8 w-full">
                                    <div className={`
                        w-16 h-16 bg-linear-to-r ${category.gradient} 
                        rounded-2xl flex items-center justify-center mx-auto mb-6 
                        group-hover:scale-110 group-hover:rotate-6 transition-all duration-500
                        shadow-lg ${category.shadow}
                    `}>
                                        <div className="text-white drop-shadow-md">
                                            {category.icon}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {category.title}
                                    </h3>

                                    {/* Optional: Decorative line under title */}
                                    <div className={`h-1 w-12 mx-auto rounded-full bg-linear-to-r ${category.gradient} opacity-50`}></div>
                                </div>

                                {/* Skills Tags */}
                                <div className="flex flex-wrap gap-3 justify-center content-start">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span
                                            key={`${category.title}-${skill}`}
                                            className={`
                                px-4 py-2 bg-linear-to-r ${category.gradient} text-white 
                                rounded-full text-sm font-medium tracking-wide
                                hover:scale-105 hover:shadow-md transition-all duration-300 
                                cursor-default opacity-90 hover:opacity-100
                            `}
                                            style={{
                                                animationDelay: `${index * 200 + skillIndex * 50}ms`,
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Additional Skills Note */}
                <div className={`text-center mt-16 transition-all duration-800 delay-300 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-5'}`}>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed italic">
                        "Always learning and exploring new technologies. The tech world moves fast,
                        and I enjoy keeping up with the latest trends and best practices."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Skills;