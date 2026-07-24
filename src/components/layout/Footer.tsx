import logo from '../../assets/logo.svg';
import { SOCIAL_LINKS, FOOTER_LINKS } from '../../data/social';
import { ArrowUp, Quote } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (href: string) => {
        if (href.startsWith('#')) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <footer className="relative overflow-hidden border-t border-white/[0.06] py-20 sm:py-28">
            <div className="section-spotlight w-[500px] h-[400px] -top-20 -left-20 opacity-60" />
            <div className="section-spotlight w-[500px] h-[400px] -bottom-20 -right-20 opacity-40" />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 sm:mb-20 pb-12 sm:pb-16 border-b border-white/[0.08]">
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <div className="space-y-6">
                            <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl">
                                <span className="block text-white">Let's build</span>
                                <span className="block gradient-text mt-1">something exceptional.</span>
                            </h2>
                            <p className="text-gray-500 text-base sm:text-lg max-w-md leading-relaxed">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8">
                        <div className="space-y-5">
                            <h4 className="code-mono text-[10.5px] uppercase tracking-[0.2em] font-bold text-gray-600">Navigation</h4>
                            <ul className="space-y-4">
                                {FOOTER_LINKS.map((link) => (
                                    <li key={link.label}>
                                        <button
                                            onClick={() => scrollToSection(link.href)}
                                            className="flex items-center gap-4 text-base font-semibold text-gray-500 hover:text-white transition-all group cursor-pointer hover:translate-x-1 duration-300"
                                        >
                                            <span className="text-gray-600 group-hover:text-white transition-colors duration-300">
                                                <link.icon className="w-5 h-5" />
                                            </span>
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-5">
                            <h4 className="code-mono text-[10.5px] uppercase tracking-[0.2em] font-bold text-gray-600">Connect</h4>
                            <ul className="space-y-4">
                                {SOCIAL_LINKS.map((link) => {
                                    let brandColor = "text-gray-600 group-hover:text-white";
                                    if (link.label.toLowerCase() === 'github') {
                                        brandColor = "text-gray-600 group-hover:text-white";
                                    } else if (link.label.toLowerCase() === 'linkedin') {
                                        brandColor = "text-gray-600 group-hover:text-[#6e9eff]";
                                    } else if (link.label.toLowerCase() === 'email') {
                                        brandColor = "text-gray-600 group-hover:text-[#ff8f7a]";
                                    }
                                    return (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-4 text-base font-semibold text-gray-500 hover:text-white transition-all group cursor-pointer hover:translate-x-1 duration-300"
                                            >
                                                <span className={`transition-colors duration-300 ${brandColor}`}>
                                                    <link.icon className="w-5 h-5" />
                                                </span>
                                                {link.label}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div className="space-y-5 sm:col-span-2 mt-2">
                            <h4 className="code-mono text-[10.5px] uppercase tracking-[0.2em] font-bold text-gray-600">Philosophy</h4>
                            <div className="relative p-6 sm:p-7 rounded-3xl card-surface group">
                                <Quote className="absolute -right-1 -bottom-1 w-24 h-24 text-white/[0.03] select-none pointer-events-none transform -rotate-12 transition-transform duration-500 group-hover:rotate-0" />
                                <blockquote className="text-sm sm:text-[0.95rem] text-gray-500 italic leading-relaxed relative z-10 border-l border-white/15 pl-4 max-w-2xl">
                                    "I believe learning doesn't end. There's always a better way to do things, and I'm always curious enough to go find it."
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center p-1.5">
                            <img src={logo} alt="Logo" className="w-full h-full brightness-0 invert" />
                        </div>
                        <p className="text-[12px] text-gray-600 tracking-wider">
                            © {currentYear} | Built by <span className="text-gray-400 font-semibold">Dipesh Soni</span>
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {['React 19', 'TypeScript', 'Tailwind CSS', 'Vite'].map((tech) => (
                            <span
                                key={tech}
                                className="px-2.5 py-1 code-mono text-[10px] uppercase tracking-[0.18em] bg-white/[0.02] border border-white/[0.07] rounded-lg text-gray-600 font-semibold"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex items-center gap-2.5 px-4 py-2.5 code-mono text-[11px] font-semibold rounded-xl border border-white/[0.08] bg-white/[0.02] text-gray-500 hover:bg-white hover:text-black hover:border-white transition-all duration-300 group cursor-pointer"
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
