import { useState } from 'react';
import { Code2, Database, Wrench } from 'lucide-react';
import { Card, CardContent } from '../common/Card';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';

const SKILL_CATEGORIES = [
    {
        title: 'Development',
        icon: <Code2 className="w-8 h-8" />,
        skills: [
            { name: 'React.js', proficiency: 75 },
            { name: 'Next.js', proficiency: 60 },
            { name: 'TypeScript', proficiency: 50 },
            { name: 'Tailwind', proficiency: 80 },
            { name: 'JavaScript', proficiency: 85 },
            { name: 'HTML5 & CSS3', proficiency: 95 },
            { name: 'Express.js', proficiency: 55 },
            { name: 'Node.js', proficiency: 65 }
        ],
        gradient: 'from-slate-600 to-slate-800',
        shadow: 'shadow-slate-500/20'
    },
    {
        title: 'Database & Cloud',
        icon: <Database className="w-8 h-8" />,
        skills: [
            { name: 'MongoDB', proficiency: 75 },
            { name: 'Firebase', proficiency: 85 },
            { name: 'Netlify', proficiency: 80 },
            { name: 'Vercel', proficiency: 70 },
            { name: 'AWS', proficiency: 60 }
        ],
        gradient: 'from-slate-600 to-slate-900',
        shadow: 'shadow-slate-500/20'
    },
    {
        title: 'Tools & DevOps',
        icon: <Wrench className="w-8 h-8" />,
        skills: [
            { name: 'Git', proficiency: 75 },
            { name: 'Docker', proficiency: 65 },
            { name: 'RedHat Linux', proficiency: 65 },
            { name: 'Postman', proficiency: 75 },
            { name: 'VS Code', proficiency: 95 }
        ],
        gradient: 'from-slate-700 to-slate-950',
        shadow: 'shadow-slate-600/20'
    }
];

const Skills = () => {
    const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });
    const { containerRef, visibleItems } = useStaggerReveal(SKILL_CATEGORIES.length, { staggerDelay: 150 });
    const [flippedCards, setFlippedCards] = useState<number[]>([]);

    const toggleFlip = (index: number) => {
        setFlippedCards(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const getProficiencyColor = (proficiency: number) => {
        if (proficiency >= 85) return 'from-green-500 to-emerald-600';
        if (proficiency >= 70) return 'from-blue-500 to-cyan-600';
        return 'from-amber-500 to-orange-600';
    };

    const getProficiencyLabel = (proficiency: number) => {
        if (proficiency >= 85) return 'Advanced';
        if (proficiency >= 70) return 'Intermediate';
        return 'Learning';
    };

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="py-20 bg-background relative overflow-hidden"
            style={{ fontFamily: 'Sansation, sans-serif' }}
        >
            <div className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float -z-10"></div>
            <div className="absolute bottom-10 right-10 w-56 h-56 bg-accent/5 rounded-full blur-3xl animate-float -z-10" style={{ animationDelay: '3s' }}></div>

            <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
                {/* Section Header */}
                <div className={`text-center mb-12 sm:mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-base sm:text-lg text-slate-600 font-medium mb-3 sm:mb-4 uppercase tracking-wider">
                        My Expertise
                    </p>
                    <h2
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
                        style={{
                            background: 'linear-gradient(to right, #475569, #334155, #0f172a)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        Skills & Technologies
                    </h2>
                    <p className="text-sm text-slate-500 mt-2">Click on any card to see proficiency levels</p>
                </div>

                {/* Skills Grid */}
                <div ref={containerRef as React.RefObject<HTMLDivElement>} className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {SKILL_CATEGORIES.map((category, index) => (
                        <div
                            key={category.title}
                            className={`relative ${visibleItems[index] ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95'}`}
                            style={{
                                animationDelay: `${index * 150}ms`,
                                perspective: '1000px',
                                minHeight: '420px'
                            }}
                        >
                            <div
                                className={`relative w-full h-full transition-transform duration-700 cursor-pointer`}
                                style={{
                                    transformStyle: 'preserve-3d',
                                    transform: flippedCards.includes(index) ? 'rotateY(180deg)' : 'rotateY(0deg)'
                                }}
                                onClick={() => toggleFlip(index)}
                            >
                                {/* Front of Card */}
                                <Card
                                    className="absolute inset-0 border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group modern-card glass overflow-hidden"
                                    style={{ backfaceVisibility: 'hidden' }}
                                >
                                    <CardContent className="p-6 sm:p-8 flex flex-col items-center h-full">
                                        {/* Category Header */}
                                        <div className="text-center mb-6 sm:mb-8 w-full">
                                            <div className={`
                                                w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-r ${category.gradient} 
                                                rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 
                                                group-hover:scale-110 group-hover:rotate-6 transition-all duration-500
                                                shadow-lg ${category.shadow}
                                            `}>
                                                <div className="text-white drop-shadow-md">
                                                    {category.icon}
                                                </div>
                                            </div>

                                            <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-800 group-hover:text-slate-950 transition-colors">
                                                {category.title}
                                            </h3>

                                            {/* Decorative line under title */}
                                            <div className={`h-1 w-12 mx-auto rounded-full bg-linear-to-r ${category.gradient} opacity-50`}></div>
                                        </div>

                                        {/* Skills Tags */}
                                        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center content-start grow">
                                            {category.skills.map((skill, skillIndex) => (
                                                <div
                                                    key={`${category.title}-${skill.name}`}
                                                    className="relative group/tooltip"
                                                >
                                                    <span
                                                        className={`
                                                            px-3 sm:px-4 py-1.5 sm:py-2 bg-linear-to-r ${category.gradient} text-white 
                                                            rounded-full text-xs sm:text-sm font-medium tracking-wide
                                                            hover:scale-105 hover:shadow-md transition-all duration-300 
                                                            cursor-pointer opacity-90 hover:opacity-100 inline-block
                                                        `}
                                                        style={{
                                                            animationDelay: `${index * 200 + skillIndex * 50}ms`,
                                                        }}
                                                    >
                                                        {skill.name}
                                                    </span>

                                                    {/* Tooltip */}
                                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10 shadow-lg">
                                                        {skill.name}
                                                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-800"></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Back of Card - Proficiency Levels */}
                                <Card
                                    className="absolute inset-0 border-0 shadow-lg modern-card glass overflow-hidden"
                                    style={{
                                        backfaceVisibility: 'hidden',
                                        transform: 'rotateY(180deg)'
                                    }}
                                >
                                    <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                                        <div className="mb-6">
                                            <div className={`
                                                w-12 h-12 bg-linear-to-r ${category.gradient} 
                                                rounded-xl flex items-center justify-center mb-4 shadow-lg
                                            `}>
                                                <div className="text-white">
                                                    {category.icon}
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold text-slate-800 mb-2">
                                                {category.title}
                                            </h3>
                                            <p className="text-xs text-slate-500">Proficiency Breakdown</p>
                                        </div>

                                        {/* Proficiency List */}
                                        <div className="space-y-4 grow overflow-y-auto">
                                            {category.skills.map((skill, skillIndex) => (
                                                <div
                                                    key={`${category.title}-proficiency-${skill.name}`}
                                                    className="space-y-2"
                                                    style={{
                                                        animationDelay: `${skillIndex * 50}ms`,
                                                    }}
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-sm font-medium text-slate-700">
                                                            {skill.name}
                                                        </span>
                                                        <div className="flex items-center gap-2">
                                                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-linear-to-r ${getProficiencyColor(skill.proficiency)} text-white`}>
                                                                {getProficiencyLabel(skill.proficiency)}
                                                            </span>
                                                            <span className="text-sm font-bold text-slate-600">
                                                                {skill.proficiency}%
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {/* Progress Bar */}
                                                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                                                        <div
                                                            className={`h-full bg-linear-to-r ${getProficiencyColor(skill.proficiency)} rounded-full transition-all duration-1000 ease-out`}
                                                            style={{
                                                                width: flippedCards.includes(index) ? `${skill.proficiency}%` : '0%'
                                                            }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Click hint */}
                                        <div className="mt-6 pt-4 border-t border-slate-200">
                                            <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                                </svg>
                                                Click to flip back
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Skills Note */}
                <div className={`text-center mt-12 sm:mt-16 transition-all duration-800 delay-500 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-5'}`}>
                    <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed italic px-4">
                        "Always learning and exploring new technologies. The tech world moves fast,
                        and I enjoy keeping up with the latest trends and best practices."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Skills;