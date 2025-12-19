import { useState } from 'react';
import { Mail, Linkedin, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { Card, CardContent } from '../common/Card';
import { Button } from '../common/Button';

const ContactSection = () => {
    const [state, handleSubmit] = useForm("xojavpzd");
    const [isVisible] = useState(true);
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const email = formData.get('email');

        // Validate email before submitting
        if (!validateEmail(email as string)) {
            setEmailError('Please enter a valid email address');
            return;
        }

        setEmailError('');
        handleSubmit(e);
    };

    return (
        <section
            id="contact"
            className="py-20 relative overflow-hidden"
            style={{
                fontFamily: 'Sansation, sans-serif',
                background: 'linear-gradient(to bottom right, rgba(248, 250, 252, 0.3), rgba(219, 234, 254, 0.05))'
            }}
        >
            {/* Background Elements */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="container mx-auto px-4 lg:px-6">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-lg text-slate-600 font-medium mb-4 uppercase tracking-wider">
                        Get in Touch
                    </p>
                    <h2
                        className="text-4xl lg:text-5xl font-bold mb-6"
                        style={{
                            background: 'linear-gradient(to right, #475569, #334155, #0f172a)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        Contact Me
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div className={`lg:col-span-1 space-y-6 transition-all duration-800 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <Card className="border border-slate-200 shadow-xl bg-white/80 backdrop-blur-sm">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <Mail className="w-5 h-5 text-slate-900 mr-3" />
                                        <a href="mailto:dipeshsonitech@gmail.com" className="text-slate-600 hover:text-slate-900 transition-colors">
                                            dipeshsonitech@gmail.com
                                        </a>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone className="w-5 h-5 text-slate-900 mr-3" />
                                        <span className="text-slate-600">+91 6377796008</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="w-5 h-5 text-slate-900 mr-3" />
                                        <span className="text-slate-600">Udaipur, India</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Linkedin className="w-5 h-5 text-slate-900 mr-3" />
                                        <a href="https://linkedin.com/in/dipesh-soni" target="_blank" rel="noopener noreferrer"
                                            className="text-slate-600 hover:text-slate-900 transition-colors">
                                            LinkedIn Profile
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border border-slate-200 shadow-xl bg-white/80 backdrop-blur-sm">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-4">Response Time</h3>
                                <p className="text-slate-600">
                                    I typically respond to all inquiries within 24-48 hours. For urgent matters,
                                    please mark your email as "Urgent" in the subject line.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className={`lg:col-span-2 transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <Card className="border border-slate-200 shadow-xl bg-white/80 backdrop-blur-sm relative">
                            <div
                                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10"
                                style={{
                                    background: 'linear-gradient(to right, #475569, #334155, #0f172a)'
                                }}
                            ></div>
                            <div
                                className="absolute bottom-0 left-0 w-24 h-24 rounded-tr-full opacity-10"
                                style={{
                                    background: 'linear-gradient(to right, #475569, #334155, #0f172a)'
                                }}
                            ></div>
                            <CardContent className="p-8">
                                <form onSubmit={onSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-2">
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all"
                                                required
                                            />
                                            <ValidationError
                                                prefix="Name"
                                                field="name"
                                                errors={state.errors}
                                                className="text-red-600 text-sm mt-1"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all"
                                                required
                                                onChange={() => setEmailError('')}
                                            />
                                            {emailError && (
                                                <p className="text-red-600 text-sm mt-1">{emailError}</p>
                                            )}
                                            <ValidationError
                                                prefix="Email"
                                                field="email"
                                                errors={state.errors}
                                                className="text-red-600 text-sm mt-1"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-slate-600 mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all"
                                            required
                                        />
                                        <ValidationError
                                            prefix="Subject"
                                            field="subject"
                                            errors={state.errors}
                                            className="text-red-600 text-sm mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-600 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all resize-none"
                                            required
                                        ></textarea>
                                        <ValidationError
                                            prefix="Message"
                                            field="message"
                                            errors={state.errors}
                                            className="text-red-600 text-sm mt-1"
                                        />
                                    </div>

                                    {/* Form Status Messages */}
                                    {state.succeeded && (
                                        <div className="flex items-center p-4 bg-green-50 text-green-700 rounded-lg">
                                            <CheckCircle className="w-5 h-5 mr-2" />
                                            Your message has been sent successfully! I'll get back to you soon.
                                        </div>
                                    )}
                                    {state.errors && Array.isArray(state.errors) && state.errors.length > 0 && !state.succeeded && (
                                        <div className="flex items-center p-4 bg-red-50 text-red-700 rounded-lg">
                                            <AlertCircle className="w-5 h-5 mr-2" />
                                            There was an error submitting your form. Please try again.
                                        </div>
                                    )}

                                    <div className="pt-4 flex justify-center items-center">
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="text-white shadow-lg px-8 transition-all duration-300 group hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                            style={{
                                                background: 'linear-gradient(to right, #475569, #334155, #0f172a)',
                                                boxShadow: !state.submitting ? '0 0 40px rgba(20, 184, 166, 0.3)' : undefined
                                            }}
                                            disabled={state.submitting}
                                        >
                                            {state.submitting ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Mail className="w-5 h-5 mr-2 inline group-hover:rotate-12 transition-transform" />
                                                    Send Message
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Call to Action */}
                <div className={`text-center mt-16 transition-all duration-800 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto border border-white/20 relative overflow-hidden">
                        {/* Background decoration */}
                        <div
                            className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10"
                            style={{
                                background: 'linear-gradient(to right, #475569, #334155, #0f172a)'
                            }}
                        ></div>
                        <div
                            className="absolute bottom-0 left-0 w-24 h-24 rounded-tr-full opacity-10"
                            style={{
                                background: 'linear-gradient(to right, #475569, #334155, #0f172a)'
                            }}
                        ></div>
                        <h3
                            className="text-2xl lg:text-3xl font-bold mb-4"
                            style={{
                                background: 'linear-gradient(to right, #475569, #334155, #0f172a)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            Let's Work Together
                        </h3>
                        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                            Whether you have a project in mind, want to collaborate, or just want to say hello,
                            I'd love to hear from you. Let's create something amazing together!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;