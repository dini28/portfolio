import { useState, useEffect } from "react";
import CV from '../../assets/CV.pdf';
import logo_header from '../../assets/logo_header.svg';
import { NAV_LINKS } from '../../data/social';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = CV;
        link.download = 'Dipesh_Soni_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <header
                className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl transition-all duration-500 rounded-2xl border ${isScrolled
                    ? "bg-black/80 backdrop-blur-xl py-2 px-1 border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]"
                    : "bg-black/40 backdrop-blur-md py-2 px-1 border-white/[0.08]"
                    }`}
            >
                <nav className="mx-auto px-3 sm:px-5">
                    <div className="flex items-center justify-between h-14">
                        <a
                            href="#"
                            onClick={(e) => handleNavClick(e, "#")}
                            className="flex items-center gap-2.5 group"
                        >
                            <img
                                src={logo_header}
                                alt="Logo"
                                className="w-8 h-8 object-contain brightness-0 invert group-hover:rotate-[12deg] group-hover:scale-110 transition-all duration-500"
                            />
                            <span
                                className="text-lg font-bold tracking-tight transition-colors text-white"
                                style={{ fontFamily: "Offside" }}
                            >
                                <span className="hidden sm:inline gradient-text-soft">Dipesh Soni</span>
                                <span className="sm:hidden gradient-text-soft">DS</span>
                            </span>
                        </a>

                        <div className="hidden lg:flex items-center gap-4">
                            <div className="flex items-center p-1 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                                {NAV_LINKS.map((link, index) => {
                                    const isActive = activeSection === link.href.substring(1);
                                    return (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                            className={`relative px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300 ${isActive
                                                ? "text-white bg-white/[0.05]"
                                                : "text-gray-400 hover:text-white"
                                                } ${(hoveredIndex === index && !isActive) ? "bg-white/[0.03]" : ""}`}
                                        >
                                            {link.label}
                                        </a>
                                    );
                                })}
                            </div>

                            <button
                                onClick={handleDownloadCV}
                                className="relative overflow-hidden vite-btn-primary !py-2 !px-4 !text-[0.82rem] group"
                            >
                                <svg
                                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.2}
                                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                                <span>Download CV</span>
                            </button>
                        </div>

                        <div className="lg:hidden flex items-center gap-2">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="w-10 h-10 rounded-xl text-white hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 flex items-center justify-center"
                                aria-label="Toggle menu"
                                aria-expanded={isOpen}
                            >
                                <div className="flex flex-col justify-between w-5 h-4 relative">
                                    <span className={`w-full h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out transform ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                                    <span className={`w-full h-[2px] bg-white rounded-full transition-all duration-200 ease-in-out ${isOpen ? "opacity-0 scale-x-0" : "opacity-100"}`} />
                                    <span className={`w-full h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out transform ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                                </div>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            <div
                className={`lg:hidden fixed inset-0 bg-black/75 backdrop-blur-md z-40 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={() => setIsOpen(false)}
            />

            <div
                className={`lg:hidden fixed inset-0 z-40 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-8 pointer-events-none"
                    }`}
            >
                <div className="bg-gradient-to-b from-black via-neutral-950 to-black h-full flex flex-col pt-28 pb-10 px-8">
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
                                        <span className={`text-[11px] font-mono tracking-widest transition-colors duration-300 ${isActive ? "text-white" : "text-neutral-600 group-hover:text-neutral-400"}`}>
                                            {sectionNum}
                                        </span>
                                        <span
                                            className={`text-4xl font-bold tracking-tight transition-all duration-300 ${isActive
                                                ? "text-white"
                                                : "text-neutral-500 group-hover:text-white group-hover:translate-x-2"
                                                }`}
                                            style={{ fontFamily: 'Genos, sans-serif' }}
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
                        className="mt-10 px-2 transition-all duration-500"
                        style={{
                            transitionDelay: isOpen ? `${100 + NAV_LINKS.length * 70}ms` : '0ms',
                            opacity: isOpen ? 1 : 0,
                            transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                        }}
                    >
                        <button
                            onClick={() => { handleDownloadCV(); setIsOpen(false); }}
                            className="w-full vite-btn-primary !py-4 !text-sm justify-center group"
                        >
                            <svg
                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                            <span>Download CV</span>
                        </button>
                    </div>

                    <div
                        className="mt-auto px-5 transition-all duration-500"
                        style={{
                            transitionDelay: isOpen ? `${200 + NAV_LINKS.length * 70}ms` : '0ms',
                            opacity: isOpen ? 1 : 0,
                        }}
                    >
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
