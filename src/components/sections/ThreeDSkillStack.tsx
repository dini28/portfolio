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
        description: 'Strongly typed JavaScript for scalable, crash-resistant web architecture.',
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
        description: 'Component-driven UI architecture, custom hooks, and concurrent rendering.',
        projects: ['Ghummakkad', 'Portfolio', 'Fiction Games'],
        pos: { rotateX: 10, rotateY: -10, rotateZ: 2, x: -160, y: 70, z: 20 }
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
        description: 'Modern ES6+, async workflows, DOM APIs, and functional patterns.',
        projects: ['All Projects', 'Interactive Modules'],
        pos: { rotateX: 18, rotateY: -22, rotateZ: -12, x: -140, y: -70, z: -30 }
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
        description: 'Fluid animations, 3D CSS transforms, flex/grid responsive systems.',
        projects: ['Design Foundations', 'Portfolio Themes'],
        pos: { rotateX: 16, rotateY: -12, rotateZ: 8, x: 150, y: -80, z: 10 }
    },
    {
        id: 'tailwind',
        name: 'Tailwind CSS',
        category: 'Development',
        proficiency: 92,
        color: '#06B6D4',
        bgGlow: 'rgba(6, 182, 212, 0.25)',
        borderColor: 'rgba(6, 182, 212, 0.4)',
        icon: SiTailwindcss,
        description: 'Utility-first styling, responsive design systems, custom theme design.',
        projects: ['All Modern Apps'],
        pos: { rotateX: 12, rotateY: -8, rotateZ: 10, x: 170, y: 60, z: -10 }
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
        description: 'App router, SSR/SSG optimization, server actions, and SEO excellence.',
        projects: ['Ghummakkad', 'E-commerce App'],
        pos: { rotateX: 22, rotateY: -24, rotateZ: -8, x: -280, y: 0, z: -60 }
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
        description: 'Semantic markup, accessibility (a11y), and web performance standards.',
        projects: ['Base Foundations'],
        pos: { rotateX: 8, rotateY: -6, rotateZ: 12, x: 280, y: 10, z: -70 }
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
        description: 'Asynchronous event-driven server runtime and RESTful API endpoints.',
        projects: ['Server Backends', 'Express API'],
        pos: { rotateX: 15, rotateY: -15, rotateZ: 0, x: 0, y: -130, z: -20 }
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
        description: 'NoSQL document database, aggregation pipelines, and schema indexing.',
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
        description: 'Realtime database, authentication services, and serverless hosting.',
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
        description: 'Branch management, pull requests, version control, and team workflows.',
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
        description: 'Automated CI/CD deployments, edge functions, and global CDN hosting.',
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
        description: 'Containerized application environments and microservice setups.',
        projects: ['Dev Environments'],
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
        description: 'API endpoint testing, collection automation, and integration checks.',
        projects: ['API Testing'],
        pos: { rotateX: 0, rotateY: 0, rotateZ: 0, x: 0, y: 0, z: 0 }
    }
];

// Optimized Memoized 3D Card Sub-Component
interface SkillCardProps {
    skill: SkillItem;
    isHovered: boolean;
    isActive: boolean;
    onSelect: (skill: SkillItem) => void;
    onHover: (id: string) => void;
    onLeave: () => void;
}

const SkillCard = React.memo<SkillCardProps>(({
    skill,
    isHovered,
    isActive,
    onSelect,
    onHover,
    onLeave
}) => {
    const Icon = skill.icon;
    const currentRotateX = isHovered ? 0 : skill.pos.rotateX;
    const currentRotateY = isHovered ? 0 : skill.pos.rotateY;
    const currentRotateZ = isHovered ? 0 : skill.pos.rotateZ;
    const currentZ = isHovered ? 140 : (isActive ? skill.pos.z + 30 : skill.pos.z);
    const currentScale = isHovered ? 1.15 : (isActive ? 1.05 : 1);
    const zIndex = isHovered ? 50 : (isActive ? 40 : Math.floor(skill.pos.z + 100));

    return (
        <div
            onClick={() => onSelect(skill)}
            onMouseEnter={() => onHover(skill.id)}
            onMouseLeave={onLeave}
            className="absolute cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{
                transformStyle: 'preserve-3d',
                transform: `translate3d(${skill.pos.x}px, ${skill.pos.y}px, ${currentZ}px) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg) rotateZ(${currentRotateZ}deg) scale(${currentScale})`,
                zIndex
            }}
        >
            <div
                className={`w-36 h-36 sm:w-44 sm:h-44 rounded-[2rem] p-5 flex flex-col justify-between backdrop-blur-2xl transition-all duration-300 ${
                    isHovered || isActive
                        ? 'bg-neutral-900/95 border-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]'
                        : 'bg-neutral-900/80 border border-white/10 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.7)] hover:border-white/20'
                }`}
                style={{
                    borderColor: (isHovered || isActive) ? skill.borderColor : 'rgba(255, 255, 255, 0.1)',
                    boxShadow: (isHovered || isActive)
                        ? `0 20px 40px -10px ${skill.bgGlow}, 0 0 20px -5px ${skill.bgGlow}`
                        : undefined
                }}
            >
                <div className="flex items-center justify-between">
                    <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: skill.bgGlow }}
                    >
                        <Icon size={24} color={skill.color} />
                    </div>
                    <span
                        className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border"
                        style={{
                            color: skill.color,
                            borderColor: skill.borderColor,
                            backgroundColor: 'rgba(0, 0, 0, 0.4)'
                        }}
                    >
                        {skill.proficiency}%
                    </span>
                </div>

                <div>
                    <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {skill.name}
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
    const containerRef = useRef<HTMLDivElement>(null);
    const stageRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);

    // Hardware-accelerated 60fps CSS transform mouse parallax without React re-renders
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
                stageRef.current.style.transform = `rotateX(${12 - mouseY * 10}deg) rotateY(${-8 + mouseX * 10}deg)`;
            }
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
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
        <div className="w-full space-y-12">
            {/* 3D Stack Stage Container */}
            <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative min-h-[420px] sm:min-h-[480px] w-full flex items-center justify-center overflow-visible py-8"
                style={{ perspective: '1200px' }}
            >
                {/* Background Ambient Glow */}
                <div
                    className="absolute w-[350px] h-[350px] rounded-full blur-[100px] pointer-events-none transition-colors duration-700 opacity-40"
                    style={{ backgroundColor: activeColor }}
                />

                {/* 3D Floating Cards Container */}
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
                            onSelect={handleSelectSkill}
                            onHover={handleHover}
                            onLeave={handleMouseLeave}
                        />
                    ))}
                </div>
            </div>

            {/* Active Skill Detailed Showcase Panel */}
            <div className="card-surface rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden transition-all duration-500">
                <div
                    className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-20 transition-all duration-700"
                    style={{ backgroundColor: activeSkill.color }}
                />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
                    <div className="md:col-span-4 flex items-center gap-4">
                        <div
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center shrink-0 border shadow-lg"
                            style={{
                                backgroundColor: activeSkill.bgGlow,
                                borderColor: activeSkill.borderColor
                            }}
                        >
                            {React.createElement(activeSkill.icon, { size: 36, color: activeSkill.color })}
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h3 className="text-2xl font-bold text-white">{activeSkill.name}</h3>
                            </div>
                            <span className="code-mono text-xs text-gray-400 block mt-1">
                                {activeSkill.category}
                            </span>
                        </div>
                    </div>

                    <div className="md:col-span-8 space-y-4">
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            {activeSkill.description}
                        </p>

                        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/10">
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-400 font-medium">Proficiency Level:</span>
                                <span
                                    className="text-xs font-mono font-bold px-2 py-0.5 rounded-md"
                                    style={{ color: activeSkill.color, backgroundColor: activeSkill.bgGlow }}
                                >
                                    {activeSkill.proficiency}% Mastered
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-400 font-medium">Key Uses:</span>
                                <div className="flex items-center gap-1.5">
                                    {activeSkill.projects.map((proj) => (
                                        <span
                                            key={proj}
                                            className="text-[10px] font-mono text-gray-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md"
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

            {/* Comprehensive Stack Grid for Additional Skills & Tools */}
            <div className="pt-6">
                <div className="text-center mb-6">
                    <span className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.24em]">
                        All Languages, Libraries &amp; Developer Tools
                    </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                    {allSkillsCombined.map((item) => {
                        const Icon = item.icon;
                        const isCurrentActive = activeSkill.id === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => handleSelectSkill(item)}
                                className={`group p-3.5 rounded-2xl flex items-center gap-3 border transition-all duration-300 text-left ${
                                    isCurrentActive
                                        ? 'bg-white/10 border-white/30 shadow-lg'
                                        : 'bg-black/40 border-white/[0.06] hover:border-white/20 hover:bg-black/60'
                                }`}
                            >
                                <div
                                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                                    style={{ backgroundColor: item.bgGlow }}
                                >
                                    <Icon size={18} color={item.color} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="text-xs font-semibold text-white truncate">{item.name}</div>
                                    <div className="text-[10px] font-mono text-gray-500">{item.proficiency}%</div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
