'use client';

import { SOCIAL_LINKS, FOOTER_LINKS } from '../../data/social';
import { ArrowUp, Quote } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (href: string) => {
        if (href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        if (href.startsWith('#')) {
            const element = document.querySelector(href);
            if (element) {
                const isDesktop = window.innerWidth >= 1024;
                const headerOffset = isDesktop ? 20 : 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }
        }
    };

    return (
        <footer className="relative overflow-hidden border-t border-white/10 py-16 sm:py-24 text-gray-200">
            {/* Ambient Spotlights */}
            <div className="section-spotlight w-[600px] h-[400px] -top-30 -left-20 opacity-50" />
            <div className="section-spotlight w-[600px] h-[400px] -bottom-30 -right-20 opacity-40" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

                {/* ── Main Asymmetrical Content Grid ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 pb-12 sm:pb-16 border-b border-white/10">

                    {/* Left 5 Columns: Headline & Bio Statement */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                        <div className="space-y-4">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                                Let's Build <br />
                                <span className="gradient-text">Something Exceptional.</span>
                            </h2>

                            <p className="text-gray-400 text-base sm:text-lg max-w-md leading-relaxed">
                                Passionate frontend developer crafting fast, accessible, and high-performance web applications using React, TypeScript, and modern web engineering tools.
                            </p>
                        </div>
                    </div>

                    {/* Right 7 Columns: Links & Philosophy Card */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10">

                        {/* Navigation Links */}
                        <div className="space-y-4">
                            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">
                                Navigation
                            </h4>
                            <ul className="space-y-3">
                                {FOOTER_LINKS.map((link) => (
                                    <li key={link.label}>
                                        <button
                                            onClick={() => scrollToSection(link.href)}
                                            className="flex items-center gap-3 text-sm font-semibold text-gray-400 hover:text-white transition-all group cursor-pointer hover:translate-x-1 duration-300"
                                        >
                                            <span className="text-gray-500 group-hover:text-emerald-400 transition-colors duration-300">
                                                <link.icon className="w-4 h-4" />
                                            </span>
                                            <span>{link.label}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Connect Links */}
                        <div className="space-y-4">
                            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">
                                Connect
                            </h4>
                            <ul className="space-y-3">
                                {SOCIAL_LINKS.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-sm font-semibold text-gray-400 hover:text-white transition-all group cursor-pointer hover:translate-x-1 duration-300"
                                        >
                                            <span className="text-gray-500 group-hover:text-emerald-400 transition-colors duration-300">
                                                <link.icon className="w-4 h-4" />
                                            </span>
                                            <span>{link.label}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Philosophy Card */}
                        <div className="space-y-3 sm:col-span-2 mt-2">
                            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">
                                Philosophy
                            </h4>
                            <div className="relative p-6 sm:p-7 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl group hover:border-white/20 transition-all overflow-hidden">
                                <Quote className="absolute -right-2 -bottom-2 w-24 h-24 text-white/[0.03] select-none pointer-events-none transform -rotate-12 transition-transform duration-500 group-hover:rotate-0" />
                                <blockquote className="text-sm sm:text-base text-gray-300 italic leading-relaxed relative z-10 border-l-2 border-emerald-400/80 pl-4 max-w-2xl">
                                    "I believe learning doesn't end. There's always a better way to do things, and I'm always curious enough to go find it."
                                </blockquote>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ── Footer Bottom Bar ── */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

                    {/* Brand Meta */}
                    <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center p-1.5">
                            <img src="/logo.svg" alt="Logo" className="w-full h-full brightness-0 invert" />
                        </div>
                        <p className="text-xs text-gray-400 tracking-wider">
                            &copy; {currentYear} | Built with care by <span className="text-white font-semibold">Dipesh Soni</span>
                        </p>
                    </div>

                    {/* Technology Stack Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {['React 19', 'TypeScript', 'Tailwind CSS', 'Vite'].map((tech) => (
                            <span
                                key={tech}
                                className="px-2.5 py-1 text-[11px] uppercase tracking-wider bg-white/5 border border-white/10 rounded-md text-gray-400 font-semibold"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Back to Top Button */}
                    <div>
                        <button
                            onClick={() => scrollToSection('#')}
                            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-white/10 bg-white/5 text-gray-300 hover:bg-white hover:text-black hover:border-white transition-all duration-300 group cursor-pointer"
                        >
                            <span>BACK TO TOP</span>
                            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;
