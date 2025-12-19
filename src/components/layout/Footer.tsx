import { Github, Linkedin, Mail, Code2, User, Terminal } from 'lucide-react';
import logo from '../../assets/logo.svg';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { icon: <User className="w-4 h-4" />, label: 'About', href: '#about' },
        { icon: <Code2 className="w-4 h-4" />, label: 'Skills', href: '#skills' },
        { icon: <Terminal className="w-4 h-4" />, label: 'Projects', href: '#projects' },
        { icon: <Mail className="w-4 h-4" />, label: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { icon: <Github className="w-5 h-5" />, label: 'GitHub', href: 'https://github.com/dini28' },
        { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/dipesh-soni/' },
        { icon: <Mail className="w-5 h-5" />, label: 'Email', href: 'mailto:dipeshsonitech@gmail.com' },
    ];

    const scrollToSection = (href: string) => {
        if (href.startsWith('#')) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <footer className=" text-white py-16"
            style={{
                fontFamily: 'Sansation, sans-serif',
                background: 'linear-gradient(to right, #475569, #334155, #0f172a)'
            }}>
            <div className="container mx-auto px-4 lg:px-6">

                {/* Footer Top */}
                <div className="flex flex-col lg:flex-row justify-between items-center mb-12 pb-8 border-b border-white/20">

                    {/* Brand */}
                    <div className="flex flex-col lg:flex-row items-center gap-6 mb-8 lg:mb-0">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                                <img src={logo} alt="logo" />
                            </div>
                            <div>
                                <h2 className="text-3xl text-white font-bold bg-clip-text"
                                    style={{
                                        fontFamily: 'Genos, sans-serif',
                                    }}>
                                    Dipesh Soni
                                </h2>
                                <p className="text-white/80">Frontend Developer</p>
                            </div>
                        </div>
                    </div>

                    {/* Thank You Message */}
                    <div className="text-center lg:text-right">
                        <p className="text-lg text-white/90 font-medium">
                            Thank you for visiting my portfolio!
                        </p>
                        <p className="text-white/70 mt-1">
                            Let's build something amazing together
                        </p>
                    </div>
                </div>

                {/* Footer Content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

                    {/* Navigation Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-teal-400">Navigation</h4>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.label}>
                                    {link.href.startsWith('#') ? (
                                        <button
                                            onClick={() => scrollToSection(link.href)}
                                            className="flex items-center gap-3 text-white/80 hover:text-teal-400 transition-colors group cursor-pointer"
                                        >
                                            <span className="group-hover:scale-110 transition-transform">
                                                {link.icon}
                                            </span>
                                            {link.label}
                                        </button>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className="flex items-center gap-3 text-white/80 hover:text-teal-400 transition-colors group"
                                        >
                                            <span className="group-hover:scale-110 transition-transform">
                                                {link.icon}
                                            </span>
                                            {link.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-blue-400">Connect</h4>
                        <ul className="space-y-3">
                            {socialLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        className="flex items-center gap-3 text-white/80 hover:text-blue-400 transition-colors group"
                                    >
                                        <span className="group-hover:scale-110 transition-transform">
                                            {link.icon}
                                        </span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quote */}
                    <div className="md:col-span-2 lg:col-span-1">
                        <h4 className="text-lg font-semibold mb-6 text-purple-400">Philosophy</h4>
                        <blockquote className="text-white/80 italic leading-relaxed border-l-4 border-purple-400/50 pl-4">
                            "I believe learning doesn't end. There's always a better way to do things,
                            and I'm always curious enough to go find it."
                        </blockquote>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-white/20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                        {/* Copyright */}
                        <p className="text-white/70 text-center md:text-left flex items-center gap-2">
                            Copyright © {currentYear} Dipesh Soni. All Rights Reserved.
                        </p>

                        {/* Built with */}
                        <p className="text-white/70 text-center md:text-right flex items-center gap-2">
                            Built with
                            <span className="text-teal-400 font-medium">React</span>
                            <span className="text-white/50">+</span>
                            <span className="text-blue-400 font-medium">TypeScript</span>
                            <span className="text-white/50">+</span>
                            <span className="text-purple-400 font-medium">Tailwind</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;