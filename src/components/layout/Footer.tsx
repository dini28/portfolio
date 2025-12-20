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
        <footer
            className="text-white py-12 sm:py-16"
            style={{
                fontFamily: 'Sansation, sans-serif',
                background: 'linear-gradient(to right, #0f172a, #1e293b, #334155, #475569)'
            }}
        >
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">

                {/* Footer Top */}
                <div className="flex flex-col lg:flex-row justify-between items-center mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-white/20">

                    {/* Brand */}
                    <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 mb-6 sm:mb-8 lg:mb-0">
                        <div className="flex items-center space-x-3 sm:space-x-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center">
                                <img src={logo} alt="Dipesh Soni Logo" className="w-full h-full" />
                            </div>
                            <div>
                                <h2
                                    className="text-2xl sm:text-3xl text-white font-bold"
                                    style={{
                                        fontFamily: 'Genos, sans-serif',
                                    }}
                                >
                                    Dipesh Soni
                                </h2>
                                <p className="text-sm sm:text-base text-white/80">Full Stack Developer</p>
                            </div>
                        </div>
                    </div>

                    {/* Thank You Message */}
                    <div className="text-center lg:text-right">
                        <p className="text-base sm:text-lg text-white/90 font-medium">
                            Thank you for visiting my portfolio!
                        </p>
                        <p className="text-sm sm:text-base text-white/70 mt-1">
                            Let's build something amazing together
                        </p>
                    </div>
                </div>

                {/* Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">

                    {/* Navigation Links */}
                    <div>
                        <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white/90">Navigation</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.label}>
                                    {link.href.startsWith('#') ? (
                                        <button
                                            onClick={() => scrollToSection(link.href)}
                                            className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/70 hover:text-white transition-colors group cursor-pointer"
                                        >
                                            <span className="group-hover:scale-110 transition-transform">
                                                {link.icon}
                                            </span>
                                            {link.label}
                                        </button>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/70 hover:text-white transition-colors group"
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
                        <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white/90">Connect</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {socialLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/70 hover:text-white transition-colors group"
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
                        <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white/90">Philosophy</h4>
                        <blockquote className="text-sm sm:text-base text-white/70 italic leading-relaxed border-l-4 border-white/30 pl-3 sm:pl-4">
                            "I believe learning doesn't end. There's always a better way to do things,
                            and I'm always curious enough to go find it."
                        </blockquote>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-6 sm:pt-8 border-t border-white/20">
                    <div className="flex justify-around items-center text-center">

                        {/* Copyright and Built By - Combined */}
                        <p className="text-sm sm:text-base text-white/60 flex flex-wrap items-center justify-center gap-2">
                            <span>© {currentYear}</span>
                            <span className="hidden sm:inline text-white/40">|</span>
                            <span className="flex items-center gap-1.5">
                                Built with by
                                <span className="text-white/90 font-semibold">Dipesh Soni</span>
                            </span>
                        </p>

                        {/* Technologies */}
                        <p className="text-xs sm:text-sm text-white/50 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                            <span className="px-2 py-1 bg-white/10 rounded text-white/70 font-medium">React</span>
                            <span className="text-white/30">+</span>
                            <span className="px-2 py-1 bg-white/10 rounded text-white/70 font-medium">TypeScript</span>
                            <span className="text-white/30">+</span>
                            <span className="px-2 py-1 bg-white/10 rounded text-white/70 font-medium">Tailwind CSS</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;