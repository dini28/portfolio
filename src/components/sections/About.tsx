import { GraduationCap, Code2, Rocket } from 'lucide-react';
import { Card, CardContent } from '../common/Card';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import about from '../../assets/about.png';

const About = () => {
    const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
    const imageReveal = useScrollReveal({ threshold: 0.3 });
    const contentReveal = useScrollReveal({ threshold: 0.3 });

    return (
        <section
            ref={sectionRef}
            id="about"
            className="py-20 bg-white relative overflow-hidden"
            style={{ fontFamily: 'Sansation, sans-serif' }}
        >
            {/* Background Elements */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 left-20 w-48 h-48 bg-teal-500/5 rounded-full blur-2xl"></div>

            <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-lg text-slate-600 font-medium mb-4 uppercase tracking-wider">
                        Get To Know More
                    </p>
                    <h2
                        className="text-4xl lg:text-5xl font-bold mb-6"
                        style={{
                            background: 'linear-gradient(to right, #0f172a, #334155, #0f172a)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        About Me
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 sm:gap-10 lg:gap-12 xl:gap-16 max-w-7xl mx-auto">

                    {/* About Image */}
                    <div
                        ref={imageReveal.ref as React.RefObject<HTMLDivElement>}
                        className={`shrink-0 lg:w-1/2 transition-all duration-1000 ${imageReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                            }`}
                    >
                        <div className="relative group max-w-md mx-auto">
                            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2">
                                <img
                                    src={about}
                                    alt="Dipesh Soni"
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay with linear gradient */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: 'linear-gradient(to top, rgba(15, 23, 42, 0.3), transparent)'
                                    }}
                                ></div>
                            </div>
                            {/* Decorative elements with linear gradients */}
                            <div
                                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl opacity-80 -z-10"
                                style={{
                                    background: 'linear-gradient(to bottom right, #475569, #334155, #0f172a)'
                                }}
                            ></div>
                            <div
                                className="absolute -top-4 -left-4 w-16 h-16 rounded-full opacity-60 -z-10 animate-pulse"
                                style={{
                                    background: 'linear-gradient(to bottom right, #475569, #334155, #0f172a)'
                                }}
                            ></div>
                        </div>
                    </div>

                    {/* About Content */}
                    <div
                        ref={contentReveal.ref as React.RefObject<HTMLDivElement>}
                        className={`lg:w-1/2 space-y-6 sm:space-y-8 transition-all duration-1000 ${contentReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                            }`}
                    >

                        {/* Education Card */}
                        <Card className="border-0 shadow-lg hover:shadow-2xl bg-white/80 backdrop-blur-md hover:-translate-y-2 transition-all duration-700">
                            <CardContent className="p-6 sm:p-8 text-center">
                                <div
                                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg"
                                    style={{
                                        background: 'linear-gradient(to bottom right, #475569, #334155, #0f172a)'
                                    }}
                                >
                                    <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 sm:mb-3 text-slate-800">
                                    Education
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Bachelor of Technology<br />
                                    <span className="font-medium text-slate-700">Computer Science and Engineering</span>
                                </p>
                            </CardContent>
                        </Card>

                        {/* The Story */}
                        <div className="space-y-4 sm:space-y-6 px-2 sm:px-0">
                            <div className="prose prose-lg max-w-none">
                                <p className="text-base sm:text-lg leading-relaxed text-slate-700">
                                    <span className="font-semibold text-slate-800">My journey started with curiosity.</span> Toward the end of my first
                                    semester, I found myself drawn to learning beyond the classroom. I still remember building my very first website —
                                    it wasn’t perfect, a bit messy and barely functional — but seeing it live on the internet felt special. That moment
                                    made me realize how powerful learning and code could be when they come together to solve real problems for real people.
                                </p>


                                <p className="text-base sm:text-lg leading-relaxed text-slate-700">
                                    A defining moment in this journey was winning the <span className="font-semibold text-slate-800">CODEFIESTA 3.0 National Hackathon</span>.
                                    Working under tight deadlines with a diverse team pushed me beyond my comfort zone — from brainstorming ideas
                                    and rapid prototyping to debugging under pressure. The experience taught me how to collaborate effectively,
                                    think critically, and build solutions that actually matter. More than the win, it reinforced my belief that
                                    great products are born at the intersection of teamwork, persistence, and clear problem-solving.
                                </p>


                                <p className="text-base sm:text-lg leading-relaxed text-slate-700">
                                    Whether it's diving into a new framework, fixing a bug that kept me up all night,
                                    or building something just to see if I can - I'm here for it. I believe the best
                                    code comes from iteration, curiosity, and a willingness to break things and start over.
                                </p>
                            </div>
                        </div>

                        {/* Tech Now vs Learning Next */}
                        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 pt-4">
                            {/* Currently Working With */}
                            <Card className="border-2 border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-500 bg-white">
                                <div
                                    className="absolute bottom-0 left-0 w-32 h-32 opacity-10 z-0"
                                    style={{
                                        background: 'linear-gradient(to bottom right, #475569, #334155, #0f172a)',
                                        borderRadius: '0 100% 0 0'
                                    }}
                                ></div>
                                <CardContent className="p-5 sm:p-6">
                                    <div className="flex items-start gap-3 mb-3 sm:mb-4">
                                        <div
                                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center shrink-0"
                                            style={{
                                                background: 'linear-gradient(to bottom right, #475569, #334155, #0f172a)'
                                            }}
                                        >
                                            <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-1">Currently Working With</h4>
                                            <p className="text-xs sm:text-sm text-slate-500">Building with these daily</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs sm:text-sm font-medium">
                                            React
                                        </span>
                                        <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs sm:text-sm font-medium">
                                            Next.js
                                        </span>
                                        <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs sm:text-sm font-medium">
                                            TypeScript
                                        </span>
                                        <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs sm:text-sm font-medium">
                                            Node.js
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Learning Next */}
                            <Card className="border-2 border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-500 bg-white relative overflow-hidden">
                                <div
                                    className="absolute top-0 right-0 w-32 h-32 opacity-10"
                                    style={{
                                        background: 'linear-gradient(to bottom right, #475569, #334155, #0f172a)',
                                        borderRadius: '0 0 0 100%'
                                    }}
                                ></div>
                                <CardContent className="p-5 sm:p-6 relative z-10">
                                    <div className="flex items-start gap-3 mb-3 sm:mb-4">
                                        <div
                                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center shrink-0"
                                            style={{
                                                background: 'linear-gradient(to bottom right, #475569, #334155, #0f172a)'
                                            }}
                                        >
                                            <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-1">Learning Next</h4>
                                            <p className="text-xs sm:text-sm text-slate-500">Exploring & experimenting</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1.5 bg-linear-to-r from-slate-100 to-slate-50 text-slate-700 rounded-lg text-xs sm:text-sm font-medium border border-slate-200">
                                            Web3
                                        </span>
                                        <span className="px-3 py-1.5 bg-linear-to-r from-slate-100 to-slate-50 text-slate-700 rounded-lg text-xs sm:text-sm font-medium border border-slate-200">
                                            AI Integration
                                        </span>
                                        <span className="px-3 py-1.5 bg-linear-to-r from-slate-100 to-slate-50 text-slate-700 rounded-lg text-xs sm:text-sm font-medium border border-slate-200">
                                            DevOps
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;