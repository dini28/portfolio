'use client';

import { useState, useEffect } from "react";
import { NAV_LINKS, SOCIAL_LINKS } from '../../data/social';
import { User, Cpu, Terminal, Mail, ArrowUp } from 'lucide-react';

const NAV_ICONS: Record<string, typeof User> = {
    "#about": User,
    "#skills": Cpu,
    "#projects": Terminal,
    "#contact": Mail,
};

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -80% 0px",
            threshold: 0,
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);
        NAV_LINKS.forEach((link) => {
            const element = document.querySelector(link.href);
            if (element) observer.observe(element);
        });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault();
        setIsOpen(false);
        if (href === "#") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        const element = document.querySelector(href);
        if (element) {
            const isDesktop = window.innerWidth >= 1024;
            const headerOffset = isDesktop ? 20 : 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            {/* Desktop Left Floating Navigation Dock */}
            <aside
                className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 w-44 flex-col items-center gap-3 p-3 rounded-3xl bg-black/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            >
                {/* Logo Top Icon */}
                <a
                    href="#"
                    onClick={(e) => handleNavClick(e, "#")}
                    className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                    title="Dipesh Soni - Scroll to Top"
                >
                    <img
                        src="/logo_header.svg"
                        alt="Logo"
                        className="w-5 h-5 object-contain brightness-0 invert group-hover:rotate-[15deg] group-hover:scale-110 transition-all duration-500"
                    />
                </a>

                <div className="w-full h-px bg-white/10" />

                {/* Vertical Navigation Links */}
                <nav className="flex flex-col gap-1.5 w-full">
                    {NAV_LINKS.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        const IconComp = NAV_ICONS[link.href] || User;
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`group relative flex items-center justify-between w-full px-3.5 py-3 rounded-2xl transition-all duration-300 ${isActive
                                        ? "bg-white/10 text-white border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                        : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <IconComp className={`w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-emerald-400" : "text-gray-400 group-hover:text-white"
                                        }`} />
                                    <span className="text-xs font-semibold tracking-wide">
                                        {link.label}
                                    </span>
                                </div>
                                <span className={`w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"
                                    }`} />
                            </a>
                        );
                    })}
                </nav>

                <div className="w-full h-px bg-white/10" />

                {/* Scroll to Top Button */}
                <a
                    href="#"
                    onClick={(e) => handleNavClick(e, "#")}
                    className="w-full h-9 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    title="Back to Top"
                >
                    <ArrowUp className="w-4 h-4" />
                </a>
            </aside>

            {/* Mobile Top Header Bar */}
            <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 px-4 py-3 flex items-center justify-between">
                <a
                    href="#"
                    onClick={(e) => handleNavClick(e, "#")}
                    className="flex items-center gap-2.5 group"
                >
                    <img
                        src="/logo_header.svg"
                        alt="Logo"
                        className="w-7 h-7 object-contain brightness-0 invert"
                    />
                    <span
                        className="text-base font-bold tracking-tight text-white gradient-text-soft font-display"
                    >
                        Dipesh Soni
                    </span>
                </a>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-10 h-10 rounded-xl text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <div className="flex flex-col justify-between w-5 h-4 relative">
                        <span className={`w-full h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out transform ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                        <span className={`w-full h-[2px] bg-white rounded-full transition-all duration-200 ease-in-out ${isOpen ? "opacity-0 scale-x-0" : "opacity-100"}`} />
                        <span className={`w-full h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out transform ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                    </div>
                </button>
            </header>

            {/* Mobile Menu Backdrop */}
            <div
                className={`lg:hidden fixed inset-0 bg-black/80 backdrop-blur-md z-40 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Navigation Drawer */}
            <div
                className={`lg:hidden fixed inset-0 z-40 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-8 pointer-events-none"
                    }`}
            >
                <div className="bg-gradient-to-b from-black via-neutral-950 to-black h-full flex flex-col pt-24 pb-10 px-8">
                    <nav className="flex flex-col gap-1">
                        {NAV_LINKS.map((link, index) => {
                            const isActive = activeSection === link.href.substring(1);
                            const sectionNum = String(index + 1).padStart(2, '0');
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="group relative block py-5 transition-all duration-500"
                                    style={{
                                        transitionDelay: isOpen ? `${100 + index * 70}ms` : '0ms',
                                        opacity: isOpen ? 1 : 0,
                                        transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                                    }}
                                >
                                    <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-full transition-all duration-300 ${isActive
                                        ? "h-8 bg-white shadow-[0_0_12px_rgba(255,255,255,0.5)]"
                                        : "h-0 bg-white/40 group-hover:h-5"
                                        }`} />
                                    <div className="flex items-baseline gap-4 pl-5">
                                        <span className={`text-[11px] font-mono tracking-widest transition-colors duration-300 ${isActive ? "text-emerald-400" : "text-neutral-600 group-hover:text-neutral-400"}`}>
                                            {sectionNum}
                                        </span>
                                        <span
                                            className={`text-4xl font-bold tracking-tight transition-all duration-300 ${isActive
                                                ? "text-white"
                                                : "text-neutral-500 group-hover:text-white group-hover:translate-x-2"
                                                }`}
                                        >
                                            {link.label}
                                        </span>
                                    </div>
                                    <span className="absolute bottom-0 left-5 right-5 h-px bg-white/[0.06]" />
                                </a>
                            );
                        })}
                    </nav>

                    <div
                        className="mt-auto px-5 transition-all duration-500"
                        style={{
                            transitionDelay: isOpen ? `${200 + NAV_LINKS.length * 70}ms` : '0ms',
                            opacity: isOpen ? 1 : 0,
                        }}
                    >
                        <div className="flex items-center justify-center gap-4 mb-6">
                            {SOCIAL_LINKS.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                        <div className="flex items-center gap-3 text-neutral-600 text-[10px] tracking-[0.3em] uppercase font-mono">
                            <span className="h-px flex-1 bg-white/[0.06]" />
                            Portfolio &copy; {new Date().getFullYear()}
                            <span className="h-px flex-1 bg-white/[0.06]" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

