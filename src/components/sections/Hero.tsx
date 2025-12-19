import { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, Download, Mail } from 'lucide-react';
import dipesh from '../../assets/dipesh.png';
import { Button } from '../common/Button';

const HeroSection = () => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isVisible] = useState(true);
    const heroRef = useRef(null);

    const texts = [
        'Frontend Developer',
        'React Enthusiast',
        'Backend Enthusiast',
        'Cloud Explorer',
        'Tech Learner'
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
            className="min-h-screen flex items-center justify-center pt-20 py-4 relative overflow-hidden"
            style={{ fontFamily: 'Sansation, sans-serif' }}
        >
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

            <div className="container mx-auto px-4 lg:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

                    <div className={`shrink-0 order-1 lg:order-2 ${getTransitionClass('delay-0')}`}>
                        <div className="relative group">
                            <div
                                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl p-2 hover:shadow-[0_0_40px_rgba(15,23,42,0.7)] transition-all duration-500"
                                style={{
                                    background: 'linear-gradient(to bottom right, #94a3b8, #64748b, #475569)'
                                }}
                            >
                                <div className="w-full h-full rounded-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2 overflow-hidden">
                                    <img src={dipesh} alt="Dipesh Soni" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 text-center lg:text-left order-2 lg:order-1 max-w-2xl">
                        <div className="space-y-4">
                            <div>
                                <p className={`text-lg text-slate-600 font-medium ${getTransitionClass('delay-100')}`}>
                                    Hello, I'm
                                </p>

                                <h1
                                    className={`text-6xl lg:text-7xl font-bold ${getTransitionClass('delay-200')}`}
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

                                <div className={`text-2xl lg:text-3xl text-slate-600 font-medium h-12 flex items-center justify-center lg:justify-start ${getTransitionClass('delay-300')}`}>
                                    <span className="mr-2">I'm a</span>
                                    <span className="text-slate-600 font-semibold">
                                        {currentText}
                                        <span className="animate-pulse text-slate-500">|</span>
                                    </span>
                                </div>
                            </div>

                            <p className={`text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 ${getTransitionClass('delay-500')}`}>
                                I don't claim to know everything - that's the whole point. I'm someone who enjoys figuring things out,
                                breaking stuff (on purpose), fixing it, and doing it better the next time.
                            </p>

                            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${getTransitionClass('delay-700')}`}>
                                <Button
                                    size="lg"
                                    className="text-white shadow-xl font-semibold transition-all duration-300 group hover:scale-105"
                                    style={{
                                        background: 'linear-gradient(to right, #475569, #334155, #0f172a)'
                                    }}
                                >
                                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                                    Download CV
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={scrollToContact}
                                    className="border-2 border-[#0f172a] text-teal-950 hover:scale-105 transition-all duration-300 group bg-white/10 backdrop-blur-md hover:text-white"
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'linear-gradient(to right, #475569, #334155, #0f172a)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                    }}
                                >
                                    <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                    Contact Info
                                </Button>
                            </div>

                            <div className={`flex gap-6 justify-center lg:justify-start pt-6 ${getTransitionClass('delay-1000')}`}>
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
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;