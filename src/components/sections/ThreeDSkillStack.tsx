'use client';

import React, { useState, useRef, useCallback, useMemo } from 'react';
import {
    SiTypescript,
    SiJavascript,
    SiCss,
    SiReact,
    SiTailwindcss,
    SiNextdotjs,
    SiHtml5,
    SiNodedotjs,
    SiMongodb,
    SiGit,
    SiFirebase,
    SiDocker,
    SiPostman,
    SiVercel
} from '@icons-pack/react-simple-icons';
import { Layers, Cpu, Cloud, Wrench, CheckCircle2, RotateCcw, Award } from 'lucide-react';

export interface SkillItem {
    id: string;
    name: string;
    category: 'Development' | 'Database & Cloud' | 'Tools';
    proficiency: number;
    color: string;
    bgGlow: string;
    borderColor: string;
    icon: React.ComponentType<{ className?: string; color?: string; size?: number | string }>;
    description: string;
    projects: string[];
    pos: {
        rotateX: number;
        rotateY: number;
        rotateZ: number;
        x: number;
        y: number;
        z: number;
    };
}

export const SKILL_ITEMS: SkillItem[] = [
    {
        id: 'ts',
        name: 'TypeScript',
        category: 'Development',
        proficiency: 85,
        color: '#3178C6',
        bgGlow: 'rgba(49, 120, 198, 0.25)',
        borderColor: 'rgba(49, 120, 198, 0.4)',
        icon: SiTypescript,
        description: 'Strongly typed JavaScript for scalable, crash-resistant web architecture and type safety.',
        projects: ['Portfolio', 'Ghummakkad', 'UI System'],
        pos: { rotateX: 14, rotateY: -16, rotateZ: -4, x: 0, y: 10, z: 70 }
    },
    {
        id: 'react',
        name: 'React 19',
        category: 'Development',
        proficiency: 90,
        color: '#61DAFB',
        bgGlow: 'rgba(97, 218, 251, 0.25)',
        borderColor: 'rgba(97, 218, 251, 0.4)',
        icon: SiReact,
        description: 'Component-driven UI architecture, custom hooks, concurrent rendering, and reactive state management.',
        projects: ['Ghummakkad', 'Portfolio', 'Fiction Games'],
        pos: { rotateX: 10, rotateY: -10, rotateZ: 2, x: -150, y: 65, z: 20 }
    },
    {
        id: 'js',
        name: 'JavaScript',
        category: 'Development',
        proficiency: 88,
        color: '#F7DF1E',
        bgGlow: 'rgba(247, 223, 30, 0.25)',
        borderColor: 'rgba(247, 223, 30, 0.4)',
        icon: SiJavascript,
        description: 'Modern ES6+, async/await workflows, DOM APIs, closure optimization, and functional programming.',
        projects: ['All Web Apps', 'Interactive Canvas'],
        pos: { rotateX: 18, rotateY: -22, rotateZ: -12, x: -130, y: -65, z: -30 }
    },
    {
        id: 'css',
        name: 'CSS3 & Styling',
        category: 'Development',
        proficiency: 95,
        color: '#1572B6',
        bgGlow: 'rgba(21, 114, 182, 0.25)',
        borderColor: 'rgba(21, 114, 182, 0.4)',
        icon: SiCss,
        description: 'Fluid responsive layouts, 3D CSS transforms, keyframe animations, and custom design tokens.',
        projects: ['Design Foundations', 'Portfolio Themes'],
        pos: { rotateX: 16, rotateY: -12, rotateZ: 8, x: 140, y: -70, z: 10 }
    },
    {
        id: 'tailwind',
        name: 'Tailwind CSS v4',
        category: 'Development',
        proficiency: 92,
        color: '#06B6D4',
        bgGlow: 'rgba(6, 182, 212, 0.25)',
        borderColor: 'rgba(6, 182, 212, 0.4)',
        icon: SiTailwindcss,
        description: 'Utility-first styling, rapid prototyping, glassmorphism systems, and dark theme designs.',
        projects: ['All Modern Projects'],
        pos: { rotateX: 12, rotateY: -8, rotateZ: 10, x: 160, y: 55, z: -10 }
    },
    {
        id: 'next',
        name: 'Next.js 15',
        category: 'Development',
        proficiency: 78,
        color: '#FFFFFF',
        bgGlow: 'rgba(255, 255, 255, 0.2)',
        borderColor: 'rgba(255, 255, 255, 0.3)',
        icon: SiNextdotjs,
        description: 'App Router architecture, React Server Components, route handlers, and SEO optimization.',
        projects: ['Ghummakkad', 'Portfolio'],
        pos: { rotateX: 22, rotateY: -24, rotateZ: -8, x: -250, y: 0, z: -60 }
    },
    {
        id: 'html',
        name: 'HTML5',
        category: 'Development',
        proficiency: 95,
        color: '#E34F26',
        bgGlow: 'rgba(227, 79, 38, 0.25)',
        borderColor: 'rgba(227, 79, 38, 0.4)',
        icon: SiHtml5,
        description: 'Semantic document structure, web accessibility (ARIA / a11y), and web standards.',
        projects: ['Base Web Structure'],
        pos: { rotateX: 8, rotateY: -6, rotateZ: 12, x: 250, y: 10, z: -70 }
    },
    {
        id: 'node',
        name: 'Node.js',
        category: 'Development',
        proficiency: 75,
        color: '#5FA04E',
        bgGlow: 'rgba(95, 160, 78, 0.25)',
        borderColor: 'rgba(95, 160, 78, 0.4)',
        icon: SiNodedotjs,
        description: 'Asynchronous event-driven server runtime, REST APIs, and backend integrations.',
        projects: ['Server API Handlers'],
        pos: { rotateX: 15, rotateY: -15, rotateZ: 0, x: 0, y: -125, z: -20 }
    }
];

export const EXTRA_SKILLS: SkillItem[] = [
    {
        id: 'mongo',
        name: 'MongoDB',
        category: 'Database & Cloud',
        proficiency: 70,
        color: '#47A248',
        bgGlow: 'rgba(71, 162, 72, 0.25)',
        borderColor: 'rgba(71, 162, 72, 0.4)',
        icon: SiMongodb,
        description: 'NoSQL document databases, schema indexing, and aggregation pipelines.',
        projects: ['Ghummakkad'],
        pos: { rotateX: 0, rotateY: 0, rotateZ: 0, x: 0, y: 0, z: 0 }
    },
    {
        id: 'firebase',
        name: 'Firebase',
        category: 'Database & Cloud',
        proficiency: 72,
        color: '#FFCA28',
        bgGlow: 'rgba(255, 202, 40, 0.25)',
        borderColor: 'rgba(255, 202, 40, 0.4)',
        icon: SiFirebase,
        description: 'Realtime Database, Authentication services, and cloud hosting.',
        projects: ['Portfolio', 'Live Demos'],
        pos: { rotateX: 0, rotateY: 0, rotateZ: 0, x: 0, y: 0, z: 0 }
    },
    {
        id: 'git',
        name: 'Git & GitHub',
        category: 'Tools',
        proficiency: 85,
        color: '#F05032',
        bgGlow: 'rgba(240, 80, 50, 0.25)',
        borderColor: 'rgba(240, 80, 50, 0.4)',
        icon: SiGit,
        description: 'Version control, branch strategies, pull request workflows, and collaborative development.',
        projects: ['All Projects'],
        pos: { rotateX: 0, rotateY: 0, rotateZ: 0, x: 0, y: 0, z: 0 }
    },
    {
        id: 'vercel',
        name: 'Vercel',
        category: 'Database & Cloud',
        proficiency: 88,
        color: '#FFFFFF',
        bgGlow: 'rgba(255, 255, 255, 0.25)',
        borderColor: 'rgba(255, 255, 255, 0.4)',
        icon: SiVercel,
        description: 'Automated CI/CD deployments, edge network distribution, and web analytics.',
        projects: ['Fiction Games', 'Portfolio'],
        pos: { rotateX: 0, rotateY: 0, rotateZ: 0, x: 0, y: 0, z: 0 }
    },
    {
        id: 'docker',
        name: 'Docker',
        category: 'Tools',
        proficiency: 55,
        color: '#2496ED',
        bgGlow: 'rgba(36, 150, 237, 0.25)',
        borderColor: 'rgba(36, 150, 237, 0.4)',
        icon: SiDocker,
        description: 'Containerized application runtime environments and microservice setups.',
        projects: ['Dev Workflows'],
        pos: { rotateX: 0, rotateY: 0, rotateZ: 0, x: 0, y: 0, z: 0 }
    },
    {
        id: 'postman',
        name: 'Postman',
        category: 'Tools',
        proficiency: 80,
        color: '#FF6C37',
        bgGlow: 'rgba(255, 108, 55, 0.25)',
        borderColor: 'rgba(255, 108, 55, 0.4)',
        icon: SiPostman,
        description: 'API endpoint testing, request automated collections, and backend debugging.',
        projects: ['API Integration'],
        pos: { rotateX: 0, rotateY: 0, rotateZ: 0, x: 0, y: 0, z: 0 }
    }
];

// Optimized Memoized 3D Skill Card Component
interface SkillCardProps {
    skill: SkillItem;
    isHovered: boolean;
    isActive: boolean;
    isFilteredOut: boolean;
    onSelect: (skill: SkillItem) => void;
    onHover: (id: string) => void;
    onLeave: () => void;
}

const SkillCard = React.memo<SkillCardProps>(({
    skill,
    isHovered,
    isActive,
    isFilteredOut,
    onSelect,
    onHover,
    onLeave
}) => {
    const Icon = skill.icon;
    const currentRotateX = isHovered ? 0 : skill.pos.rotateX;
    const currentRotateY = isHovered ? 0 : skill.pos.rotateY;
    const currentRotateZ = isHovered ? 0 : skill.pos.rotateZ;
    const currentZ = isHovered ? 140 : (isActive ? skill.pos.z + 35 : skill.pos.z);
    const currentScale = isHovered ? 1.15 : (isActive ? 1.06 : (isFilteredOut ? 0.85 : 1));
    const opacity = isFilteredOut ? 0.35 : 1;
    const zIndex = isHovered ? 60 : (isActive ? 50 : Math.floor(skill.pos.z + 100));

    return (
        <div
            onClick={() => onSelect(skill)}
            onMouseEnter={() => onHover(skill.id)}
            onMouseLeave={onLeave}
            className="absolute cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{
                transformStyle: 'preserve-3d',
                transform: `translate3d(${skill.pos.x}px, ${skill.pos.y}px, ${currentZ}px) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg) rotateZ(${currentRotateZ}deg) scale(${currentScale})`,
                opacity,
                zIndex
            }}
        >
            <div
                className={`w-36 h-36 sm:w-44 sm:h-44 rounded-[2rem] p-5 flex flex-col justify-between backdrop-blur-2xl transition-all duration-300 relative group overflow-hidden ${
                    isHovered || isActive
                        ? 'bg-neutral-900/95 border-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]'
                        : 'bg-neutral-900/80 border border-white/10 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.7)] hover:border-white/20'
                }`}
                style={{
                    borderColor: (isHovered || isActive) ? skill.borderColor : 'rgba(255, 255, 255, 0.1)',
                    boxShadow: (isHovered || isActive)
                        ? `0 20px 45px -10px ${skill.bgGlow}, 0 0 25px -5px ${skill.bgGlow}`
                        : undefined
                }}
            >
                {/* Top Subtle Specular Light Highlight */}
                <div className="absolute -top-12 -left-12 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none group-hover:opacity-100 transition-opacity opacity-50" />

                <div className="flex items-center justify-between relative z-10">
                    <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md"
                        style={{ backgroundColor: skill.bgGlow }}
                    >
                        <Icon size={24} color={skill.color} />
                    </div>
                    <span
                        className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border shadow-inner"
                        style={{
                            color: skill.color,
                            borderColor: skill.borderColor,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)'
                        }}
                    >
                        {skill.proficiency}%
                    </span>
                </div>

                <div className="relative z-10">
                    <h4 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center justify-between">
                        <span>{skill.name}</span>
                        {isActive && <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />}
                    </h4>
                    <p className="text-[11px] font-mono text-gray-400 mt-0.5 truncate">
                        {skill.category}
                    </p>
                </div>
            </div>
        </div>
    );
});

SkillCard.displayName = 'SkillCard';

export const ThreeDSkillStack: React.FC = () => {
    const [activeSkill, setActiveSkill] = useState<SkillItem>(SKILL_ITEMS[0]);
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const containerRef = useRef<HTMLDivElement>(null);
    const stageRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);

    // Filter categories list
    const categories = useMemo(() => [
        { label: 'All Stack', value: 'All', icon: Layers },
        { label: 'Development', value: 'Development', icon: Cpu },
        { label: 'Cloud & Database', value: 'Database & Cloud', icon: Cloud },
        { label: 'Developer Tools', value: 'Tools', icon: Wrench },
    ], []);

    // 60fps Mouse parallax handling
    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);

        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = (e.clientX - centerX) / (rect.width / 2);
        const mouseY = (e.clientY - centerY) / (rect.height / 2);

        rafRef.current = requestAnimationFrame(() => {
            if (stageRef.current) {
                stageRef.current.style.transform = `rotateX(${12 - mouseY * 12}deg) rotateY(${-8 + mouseX * 12}deg)`;
            }
        });
    }, []);

    const resetStageRotation = useCallback(() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        if (stageRef.current) {
            stageRef.current.style.transform = 'rotateX(12deg) rotateY(-8deg)';
        }
        setHoveredId(null);
    }, []);

    const handleHover = useCallback((id: string) => {
        setHoveredId(id);
    }, []);

    const handleSelectSkill = useCallback((skill: SkillItem) => {
        setActiveSkill(skill);
    }, []);

    const activeColor = useMemo(() => {
        if (hoveredId) {
            const found = SKILL_ITEMS.find(s => s.id === hoveredId);
            if (found) return found.color;
        }
        return activeSkill.color;
    }, [hoveredId, activeSkill.color]);

    const allSkillsCombined = useMemo(() => [...SKILL_ITEMS, ...EXTRA_SKILLS], []);

    return (
        <div className="w-full space-y-10">
            
            {/* Top Interactive Category Filter Bar & Perspective Control */}
            <div className="flex flex-wrap items-center justify-between gap-4 max-w-4xl mx-auto px-2">
                <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        const isActive = selectedCategory === cat.value;
                        return (
                            <button
                                key={cat.value}
                                onClick={() => setSelectedCategory(cat.value)}
                                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                                    isActive
                                        ? 'bg-violet-500/20 text-violet-300 border border-violet-500/40 shadow-lg'
                                        : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
                                }`}
                            >
                                <Icon className="w-3.5 h-3.5" />
                                <span>{cat.label}</span>
                            </button>
                        );
                    })}
                </div>

                <button
                    onClick={resetStageRotation}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-gray-400 hover:text-white hover:bg-white/[0.08] transition-all"
                    title="Reset 3D Perspective View"
                >
                    <RotateCcw className="w-3.5 h-3.5 text-violet-400" />
                    <span>Reset View</span>
                </button>
            </div>

            {/* 3D Stack Stage Container */}
            <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={resetStageRotation}
                className="relative min-h-[420px] sm:min-h-[480px] w-full flex items-center justify-center overflow-visible py-8"
                style={{ perspective: '1200px' }}
            >
                {/* Background Dynamic Ambient Glow */}
                <div
                    className="absolute w-[380px] h-[380px] rounded-full blur-[110px] pointer-events-none transition-colors duration-700 opacity-35"
                    style={{ backgroundColor: activeColor }}
                />

                {/* 3D Floating Cards Stage */}
                <div
                    ref={stageRef}
                    className="relative w-full max-w-2xl h-[320px] sm:h-[380px] flex items-center justify-center transition-transform duration-300 ease-out"
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: 'rotateX(12deg) rotateY(-8deg)'
                    }}
                >
                    {SKILL_ITEMS.map((skill) => (
                        <SkillCard
                            key={skill.id}
                            skill={skill}
                            isHovered={hoveredId === skill.id}
                            isActive={activeSkill.id === skill.id}
                            isFilteredOut={selectedCategory !== 'All' && skill.category !== selectedCategory}
                            onSelect={handleSelectSkill}
                            onHover={handleHover}
                            onLeave={resetStageRotation}
                        />
                    ))}
                </div>
            </div>

            {/* Active Skill Detailed Showcase Card */}
            <div className="card-surface rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden transition-all duration-500">
                {/* Ambient Soft Glow Accent */}
                <div
                    className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-25 transition-all duration-700"
                    style={{ backgroundColor: activeSkill.color }}
                />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
                    
                    {/* Left: Icon & Name Header */}
                    <div className="md:col-span-4 flex items-center gap-4">
                        <div
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center shrink-0 border shadow-xl transition-transform duration-300 hover:scale-105"
                            style={{
                                backgroundColor: activeSkill.bgGlow,
                                borderColor: activeSkill.borderColor
                            }}
                        >
                            {React.createElement(activeSkill.icon, { size: 38, color: activeSkill.color })}
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h3 className="text-2xl font-bold text-white tracking-tight">{activeSkill.name}</h3>
                            </div>
                            <span className="code-mono text-xs text-violet-400/90 font-semibold block mt-1">
                                {activeSkill.category}
                            </span>
                        </div>
                    </div>

                    {/* Right: Description & Proficiency Bar */}
                    <div className="md:col-span-8 space-y-4">
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            {activeSkill.description}
                        </p>

                        {/* Animated Proficiency Bar */}
                        <div className="space-y-1.5">
                            <div className="flex items-center justify-between text-xs font-mono">
                                <span className="text-gray-400 flex items-center gap-1.5">
                                    <Award className="w-3.5 h-3.5 text-violet-400" />
                                    <span>Mastery &amp; Proficiency</span>
                                </span>
                                <span className="font-bold text-white">{activeSkill.proficiency}%</span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-white/[0.08] overflow-hidden p-0.5 border border-white/5">
                                <div
                                    className="h-full rounded-full transition-all duration-700 ease-out shadow-sm"
                                    style={{
                                        width: `${activeSkill.proficiency}%`,
                                        backgroundColor: activeSkill.color,
                                        boxShadow: `0 0 12px ${activeSkill.color}`
                                    }}
                                />
                            </div>
                        </div>

                        {/* Key Uses & Projects */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/10">
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-400 font-medium">Applied In Projects:</span>
                                <div className="flex flex-wrap items-center gap-1.5">
                                    {activeSkill.projects.map((proj) => (
                                        <span
                                            key={proj}
                                            className="text-[10px] font-mono text-gray-200 bg-white/[0.06] border border-white/10 px-2.5 py-0.5 rounded-lg"
                                        >
                                            {proj}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Comprehensive Stack Grid for All Skills & Tools */}
            <div className="pt-4 max-w-4xl mx-auto">
                <div className="text-center mb-5">
                    <span className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.24em]">
                        Full Technology Ecosystem
                    </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-2.5">
                    {allSkillsCombined.map((item) => {
                        const Icon = item.icon;
                        const isCurrentActive = activeSkill.id === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => handleSelectSkill(item)}
                                className={`group p-3 rounded-2xl flex items-center gap-2.5 border transition-all duration-300 text-left ${
                                    isCurrentActive
                                        ? 'bg-white/10 border-white/30 shadow-lg scale-105'
                                        : 'bg-black/40 border-white/[0.06] hover:border-white/20 hover:bg-black/60 hover:scale-[1.02]'
                                }`}
                            >
                                <div
                                    className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0 shadow-inner"
                                    style={{ backgroundColor: item.bgGlow }}
                                >
                                    <Icon size={16} color={item.color} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="text-xs font-semibold text-white truncate">{item.name}</div>
                                    <div className="text-[10px] font-mono text-gray-400">{item.proficiency}%</div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
