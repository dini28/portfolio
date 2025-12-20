import { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import dipesh from '../../assets/dipesh.jpeg';
import { Button } from '../common/Button';

const Hero = () => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isVisible] = useState(true);
    const heroRef = useRef(null);

    const texts = [
        'Full Stack Developer',
        'Problem Solver',
        'System Designer',
        'Code Craftsman'
    ];

    useEffect(() => {
        const type = () => {
            const current = texts[currentIndex];

            if (!isDeleting && charIndex < current.length) {
                setCurrentText(current.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
            } else if (isDeleting && charIndex > 0) {
                setCurrentText(current.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
            } else if (!isDeleting && charIndex === current.length) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setCurrentIndex(prev => (prev + 1) % texts.length);
            }
        };

        const timer = setTimeout(type, isDeleting ? 50 : 100);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, currentIndex, texts]);

    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const getTransitionClass = (delayClass: string) => {
        return `transition-all duration-1000 ${delayClass} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;
    };

    return (
        <section
            ref={heroRef}
            id="hero"
            className="min-h-screen flex items-center justify-center pt-20 py-8 relative overflow-hidden"
            style={{ fontFamily: 'Sansation, sans-serif' }}
        >
            <style>
                {`
                    @keyframes gradient-shift {
                        0%, 100% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                    }
                `}
            </style>

            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(to bottom right, #eff6ff, #ffffff, #f0fdfa)'
                }}
            ></div>

            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-slate-500/15 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: '2s' }}
                ></div>
            </div>

            <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 sm:gap-10 lg:gap-12 xl:gap-16 max-w-7xl mx-auto">

                    <div className={`shrink-0 order-1 lg:order-2 ${getTransitionClass('delay-0')}`}>
                        <div className="relative group">
                            {/* Animated glow rings */}
                            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="absolute inset-0 rounded-full animate-ping" style={{
                                    background: 'linear-gradient(to bottom right, #475569, #334155)',
                                    animationDuration: '3s',
                                    opacity: 0.2
                                }}></div>
                            </div>

                            {/* Outer decorative ring */}
                            <div className="absolute -inset-4 rounded-full opacity-50 blur-xl group-hover:opacity-75 transition-all duration-500" style={{
                                background: 'linear-gradient(135deg, #475569, #334155, #0f172a, #334155, #475569)',
                                backgroundSize: '200% 200%',
                                animation: 'gradient-shift 8s ease infinite'
                            }}></div>

                            {/* Main image container */}
                            <div className="relative">
                                <div
                                    className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.5)] p-1.5 group-hover:shadow-[0_30px_80px_rgba(15,23,42,0.8)] transition-all duration-700 group-hover:scale-[1.02]"
                                    style={{
                                        background: 'linear-gradient(135deg, #94a3b8, #64748b, #475569, #334155, #0f172a)',
                                        backgroundSize: '200% 200%',
                                        animation: 'gradient-shift 6s ease infinite'
                                    }}
                                >
                                    {/* Inner white border */}
                                    <div className="w-full h-full rounded-full p-2 bg-white">
                                        <div className="w-full h-full rounded-full overflow-hidden relative">
                                            {/* Image with overlay effect */}
                                            <img
                                                src={dipesh}
                                                alt="Dipesh Soni - Full Stack Developer"
                                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                            />

                                            {/* Gradient overlay on hover */}
                                            <div className="absolute inset-0 bg-linear-to-t from-slate-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating badges */}
                                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-2xl p-3 transform group-hover:translate-y-1 transition-all duration-500 border-2 border-slate-200">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-bold text-slate-700">Available</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 text-center lg:text-left order-2 lg:order-1 max-w-2xl lg:max-w-xl xl:max-w-2xl px-4 sm:px-0">
                        <div className="space-y-3 sm:space-y-4">
                            <div>
                                <p className={`text-lg sm:text-xl lg:text-2xl text-slate-600 font-medium mb-1 sm:mb-2 ${getTransitionClass('delay-100')}`}>
                                    Hi, I'm
                                </p>

                                <h1
                                    className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2 sm:mb-4 ${getTransitionClass('delay-200')}`}
                                    style={{
                                        fontFamily: 'Genos, sans-serif',
                                        background: 'linear-gradient(to right, #94a3b8, #64748b, #475569)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    }}
                                >
                                    Dipesh Soni
                                </h1>

                                <div className={`text-2xl sm:text-3xl lg:text-4xl text-slate-700 font-semibold h-12 sm:h-14 lg:h-16 flex items-center justify-center lg:justify-start mb-4 sm:mb-6 ${getTransitionClass('delay-300')}`}>
                                    <span className="text-slate-800">
                                        {currentText}
                                        <span className="animate-pulse text-slate-500">|</span>
                                    </span>
                                </div>
                            </div>

                            <p className={`text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-600 leading-relaxed max-w-xl sm:max-w-2xl mx-auto lg:mx-0 font-medium px-2 sm:px-0 ${getTransitionClass('delay-500')}`}>
                                Building high-performance web applications with clean, scalable code and user-centric design.
                            </p>

                            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4 px-2 sm:px-0 ${getTransitionClass('delay-700')}`}>
                                <Button
                                    size="lg"
                                    onClick={() => {
                                        const element = document.querySelector('#projects');
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="text-white shadow-2xl font-bold text-base sm:text-lg transition-all duration-300 group hover:scale-105 hover:shadow-[0_0_50px_rgba(15,23,42,0.9)] w-full sm:w-auto"
                                    style={{
                                        background: 'linear-gradient(to right, #475569, #334155, #0f172a)',
                                        padding: '0.875rem 2rem'
                                    }}
                                >
                                    View My Work
                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={scrollToContact}
                                    className="border-2 border-slate-700 text-slate-700 hover:scale-105 transition-all duration-300 group bg-transparent hover:text-white text-base sm:text-lg font-semibold w-full sm:w-auto"
                                    style={{
                                        padding: '0.875rem 2rem'
                                    }}
                                    onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                                        e.currentTarget.style.background = 'linear-gradient(to right, #475569, #334155, #0f172a)';
                                    }}
                                    onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                                        e.currentTarget.style.background = 'transparent';
                                    }}
                                >
                                    <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                    Contact Me
                                </Button>
                            </div>

                            <div className={`flex gap-4 sm:gap-6 justify-center lg:justify-start pt-4 sm:pt-6 ${getTransitionClass('delay-1000')}`}>
                                <a
                                    href="https://github.com/dini28"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-[0_0_40px_rgba(15,23,42,0.7)] group"
                                    style={{
                                        background: 'linear-gradient(to right, #475569, #334155, #0f172a)'
                                    }}
                                    aria-label="Visit GitHub profile"
                                >
                                    <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />

                                    <span className="absolute top-full ml-2.5 mt-1.5 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                        GitHub
                                    </span>
                                </a>
                                <a
                                    href="https://linkedin.com/in/dipesh-soni"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-[0_0_40px_rgba(15,23,42,0.7)] group"
                                    style={{
                                        background: 'linear-gradient(to right, #475569, #334155, #0f172a)'
                                    }}
                                    aria-label="Visit LinkedIn profile"
                                >
                                    <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform" />

                                    <span className="absolute top-full ml-2.5 mt-1.5 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                        LinkedIn
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;