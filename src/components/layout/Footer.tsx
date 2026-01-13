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
        <footer className="bg-black text-white py-12 sm:py-16 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 relative z-10">
                {/* Footer Top */}
                <div className="flex flex-col lg:flex-row justify-between items-center mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-white/10">
                    {/* Brand */}
                    <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 mb-6 sm:mb-8 lg:mb-0">
                        <div className="flex items-center space-x-3 sm:space-x-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center p-2">
                                <img src={logo} alt="Dipesh Soni Logo" className="w-full h-full brightness-0 invert" />
                            </div>
                            <div>
                                <h2 className="text-2xl sm:text-3xl text-white font-bold">
                                    Dipesh Soni
                                </h2>
                                <p className="text-sm sm:text-base text-gray-400">Frontend Developer</p>
                            </div>
                        </div>
                    </div>

                    {/* Thank You Message */}
                    <div className="text-center lg:text-right">
                        <p className="text-base sm:text-lg text-white font-medium">
                            Thank you for visiting my portfolio!
                        </p>
                        <p className="text-sm sm:text-base text-gray-400 mt-1">
                            Let's build something amazing together
                        </p>
                    </div>
                </div>

                {/* Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    {/* Navigation Links */}
                    <div>
                        <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Navigation</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.label}>
                                    {link.href.startsWith('#') ? (
                                        <button
                                            onClick={() => scrollToSection(link.href)}
                                            className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-400 hover:text-white transition-colors group cursor-pointer"
                                        >
                                            <span className="group-hover:scale-110 transition-transform">
                                                {link.icon}
                                            </span>
                                            {link.label}
                                        </button>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-400 hover:text-white transition-colors group"
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
                        <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Connect</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {socialLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-400 hover:text-white transition-colors group"
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
                        <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Philosophy</h4>
                        <blockquote className="text-sm sm:text-base text-gray-400 italic leading-relaxed border-l-4 border-white/30 pl-3 sm:pl-4">
                            "I believe learning doesn't end. There's always a better way to do things,
                            and I'm always curious enough to go find it."
                        </blockquote>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-6 sm:pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center text-center">
                        {/* Copyright */}
                        <p className="text-sm sm:text-base text-gray-500 flex flex-wrap items-center justify-center gap-2">
                            <span>© {currentYear}</span>
                            <span className="hidden sm:inline text-gray-600">|</span>
                            <span className="flex items-center gap-1.5">
                                Built by
                                <span className="text-white font-semibold">Dipesh Soni</span>
                            </span>
                        </p>

                        {/* Technologies */}
                        <p className="text-xs sm:text-sm text-gray-500 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                            <span className="px-2 py-1 bg-white/10 border border-white/20 rounded text-gray-400 font-medium ">React</span>
                            <span className="text-gray-600">+</span>
                            <span className="px-2 py-1 bg-white/10 border border-white/20 rounded text-gray-400 font-medium ">TypeScript</span>
                            <span className="text-gray-600">+</span>
                            <span className="px-2 py-1 bg-white/10 border border-white/20 rounded text-gray-400 font-medium ">Tailwind CSS</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;