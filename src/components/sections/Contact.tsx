import { useState } from 'react';
import { Mail, Linkedin, Phone, MapPin, CheckCircle, AlertCircle, Copy, Check } from 'lucide-react';
import { Card, CardContent } from '../common/Card';
import { Button } from '../common/Button';

const Contact = () => {
    const [isVisible] = useState(true);
    const [formErrors, setFormErrors] = useState<{
        name?: string;
        email?: string;
        subject?: string;
        message?: string;
    }>({});
    const [copied, setCopied] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText('dipeshsonitech@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const validateForm = (formData: FormData) => {
        const errors: typeof formErrors = {};

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const subject = formData.get('subject') as string;
        const message = formData.get('message') as string;

        // Name validation
        if (!name || name.trim().length < 2) {
            errors.name = 'Please enter your full name (at least 2 characters)';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            errors.email = 'Please enter a valid email address (e.g., name@example.com)';
        }

        // Subject validation
        if (!subject || subject.trim().length < 3) {
            errors.subject = 'Please enter a subject (at least 3 characters)';
        }

        // Message validation
        if (!message || message.trim().length < 10) {
            errors.message = 'Please enter a message (at least 10 characters)';
        }

        return errors;
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);

        // Validate form
        const errors = validateForm(formData);

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setFormErrors({});
        setIsSubmitting(true);
        setSubmitSuccess(false);
        setSubmitError(false);

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData as any).toString(),
            });

            if (response.ok) {
                setSubmitSuccess(true);
                (e.target as HTMLFormElement).reset();
            } else {
                setSubmitError(true);
            }
        } catch (error) {
            setSubmitError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (field: keyof typeof formErrors) => {
        setFormErrors(prev => ({ ...prev, [field]: undefined }));
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

            <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
                {/* Section Header */}
                <div className={`text-center mb-12 sm:mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-base sm:text-lg text-slate-600 font-medium mb-3 sm:mb-4 uppercase tracking-wider">
                        Get in Touch
                    </p>
                    <h2
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
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

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div className={`lg:col-span-1 space-y-4 sm:space-y-6 transition-all duration-800 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <Card className="border border-slate-200 shadow-xl bg-white/80 backdrop-blur-sm">
                            <CardContent className="p-5 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold mb-4">Contact Information</h3>
                                <div className="space-y-4">
                                    {/* Email with Copy Button */}
                                    <div className="flex items-start justify-between gap-2">
                                        <div className="flex items-center flex-1 min-w-0">
                                            <Mail className="w-5 h-5 text-slate-900 mr-3 shrink-0" />
                                            <a
                                                href="mailto:dipeshsonitech@gmail.com"
                                                className="text-sm sm:text-base text-slate-600 hover:text-slate-900 transition-colors break-all"
                                            >
                                                dipeshsonitech@gmail.com
                                            </a>
                                        </div>
                                        <button
                                            onClick={copyEmail}
                                            className="shrink-0 pt-2 rounded-lg transition-colors group relative"
                                            aria-label="Copy email address"
                                        >
                                            {copied ? (
                                                <Check className="w-4 h-4 text-green-600" />
                                            ) : (
                                                <Copy className="w-4 h-4 text-slate-600 group-hover:text-slate-900" />
                                            )}
                                            {/* Tooltip */}
                                            <span className="absolute -top-6 -right-2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                                {copied ? 'Copied!' : 'Copy email'}
                                            </span>
                                        </button>
                                    </div>

                                    <div className="flex items-center">
                                        <Phone className="w-5 h-5 text-slate-900 mr-3 shrink-0" />
                                        <a href="tel:+916377796008" className="text-sm sm:text-base text-slate-600 hover:text-slate-900 transition-colors">
                                            +91 6377796008
                                        </a>
                                    </div>

                                    <div className="flex items-center">
                                        <MapPin className="w-5 h-5 text-slate-900 mr-3 shrink-0" />
                                        <span className="text-sm sm:text-base text-slate-600">Udaipur, India</span>
                                    </div>

                                    <div className="flex items-center">
                                        <Linkedin className="w-5 h-5 text-slate-900 mr-3 shrink-0" />
                                        <a
                                            href="https://linkedin.com/in/dipesh-soni"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm sm:text-base text-slate-600 hover:text-slate-900 transition-colors"
                                        >
                                            LinkedIn Profile
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border border-slate-200 shadow-xl bg-white/80 backdrop-blur-sm">
                            <CardContent className="p-5 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold mb-4">Response Time</h3>
                                <p className="text-sm sm:text-base text-slate-600">
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
                            <CardContent className="p-6 sm:p-8">
                                <form onSubmit={onSubmit} className="space-y-5 sm:space-y-6" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                                    {/* Hidden fields for Netlify */}
                                    <input type="hidden" name="form-name" value="contact" />
                                    {/* Honeypot field */}
                                    <p className="hidden">
                                        <label>
                                            Don't fill this out if you're human: <input name="bot-field" />
                                        </label>
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                                                Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className={`w-full px-4 py-3 rounded-lg border ${formErrors.name ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-white'
                                                    } focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all`}
                                                onChange={() => handleInputChange('name')}
                                                placeholder="John Doe"
                                            />
                                            {formErrors.name && (
                                                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                                                    <AlertCircle className="w-4 h-4" />
                                                    {formErrors.name}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className={`w-full px-4 py-3 rounded-lg border ${formErrors.email ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-white'
                                                    } focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all`}
                                                onChange={() => handleInputChange('email')}
                                                placeholder="john@example.com"
                                            />
                                            {formErrors.email && (
                                                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                                                    <AlertCircle className="w-4 h-4" />
                                                    {formErrors.email}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                                            Subject <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className={`w-full px-4 py-3 rounded-lg border ${formErrors.subject ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-white'
                                                } focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all`}
                                            onChange={() => handleInputChange('subject')}
                                            placeholder="Project Inquiry"
                                        />
                                        {formErrors.subject && (
                                            <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                {formErrors.subject}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                            Message <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            className={`w-full px-4 py-3 rounded-lg border ${formErrors.message ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-white'
                                                } focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all resize-none`}
                                            onChange={() => handleInputChange('message')}
                                            placeholder="Tell me about your project or idea..."
                                        ></textarea>
                                        {formErrors.message && (
                                            <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                {formErrors.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Form Status Messages */}
                                    {submitSuccess && (
                                        <div className="flex items-center p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
                                            <CheckCircle className="w-5 h-5 mr-2 shrink-0" />
                                            <span className="text-sm sm:text-base">Your message has been sent successfully! I'll get back to you soon.</span>
                                        </div>
                                    )}
                                    {submitError && (
                                        <div className="flex items-center p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
                                            <AlertCircle className="w-5 h-5 mr-2 shrink-0" />
                                            <span className="text-sm sm:text-base">There was an error submitting your form. Please try again.</span>
                                        </div>
                                    )}

                                    <div className="pt-4 flex justify-center items-center">
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="text-white shadow-lg px-6 sm:px-8 transition-all duration-300 group hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                                            style={{
                                                background: 'linear-gradient(to right, #475569, #334155, #0f172a)',
                                                boxShadow: !isSubmitting ? '0 0 40px rgba(71, 85, 105, 0.3)' : undefined
                                            }}
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
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
                <div className={`text-center mt-12 sm:mt-16 transition-all duration-800 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto border border-white/20 relative overflow-hidden">
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
                            className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4"
                            style={{
                                background: 'linear-gradient(to right, #475569, #334155, #0f172a)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            Let's Work Together
                        </h3>
                        <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
                            Whether you have a project in mind, want to collaborate, or just want to say hello,
                            I'd love to hear from you. Let's create something amazing together!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;