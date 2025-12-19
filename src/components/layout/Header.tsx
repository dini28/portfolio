import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
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

        navLinks.forEach((link) => {
            const element = document.querySelector(link.href);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

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

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
                : "bg-transparent"
                }`}
            style={{ fontFamily: "Sansation, sans-serif" }}
        >
            <nav className="container mx-auto px-6 lg:px-10">
                <div className="flex items-center justify-between h-20">
                    <a
                        href="#"
                        onClick={(e) => handleNavClick(e, "#")}
                        className="flex items-center space-x-3 group"
                    >
                        <span
                            className="text-3xl font-semibold text-slate-800"
                            style={{ fontFamily: "Genos, sans-serif" }}
                        >
                            Dipesh Soni
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center space-x-8 gap-8">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    aria-current={
                                        activeSection === link.href.substring(1) ? "page" : undefined
                                    }
                                    className={`relative text-lg font-medium transition-colors duration-300 hover:text-slate-950 group ${activeSection === link.href.substring(1)
                                        ? "text-slate-950"
                                        : "text-slate-700"
                                        }`}
                                >
                                    {link.label}
                                    <span
                                        className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 bg-slate-950 transition-all duration-300 ${activeSection === link.href.substring(1)
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                            }`}
                                    ></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-slate-800 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-700"
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 transition-all duration-300 ease-in-out origin-top ${isOpen
                        ? "opacity-100 scale-y-100"
                        : "opacity-0 scale-y-0 pointer-events-none"
                        }`}
                >
                    <ul className="container mx-auto px-4 py-6 space-y-2">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`block px-4 py-3 rounded-lg transition-colors ${activeSection === link.href.substring(1)
                                        ? "bg-teal-50 text-teal-700"
                                        : "text-slate-800 hover:bg-gray-50"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}