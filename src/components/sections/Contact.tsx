'use client';

import { useState, useRef } from 'react';
import { Mail, Linkedin, MapPin, CheckCircle, AlertCircle, Copy, Check, Send, Github, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { CONTACT_INFO } from '../../data/social';

const Contact = () => {
    const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
    const formRef = useRef<HTMLFormElement>(null);
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
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const copyEmail = () => {
        navigator.clipboard.writeText(CONTACT_INFO.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const validateForm = (formData: FormData) => {
        const errors: typeof formErrors = {};
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const subject = formData.get('subject') as string;
        const message = formData.get('message') as string;

        if (!name || name.trim().length < 2) errors.name = 'Please enter your full name (min 2 chars)';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) errors.email = 'Please enter a valid email address';
        if (!subject || subject.trim().length < 3) errors.subject = 'Please enter a subject (min 3 chars)';
        if (!message || message.trim().length < 10) errors.message = 'Please enter a message (min 10 chars)';

        return errors;
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
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
            const data = Object.fromEntries(formData.entries());
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const result = await response.json();

            if (response.ok && result.success) {
                setSubmitSuccess(true);
                (e.target as HTMLFormElement).reset();
            } else {
                setSubmitError(true);
            }
        } catch {
            setSubmitError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (field: keyof typeof formErrors) => {
        setFormErrors(prev => ({ ...prev, [field]: undefined }));
    };

    return (
        <section ref={sectionRef} id="contact" className="py-28 sm:py-36 relative overflow-hidden">
            <div className="section-spotlight w-[800px] h-[500px] top-0 left-1/2 -translate-x-1/2" />
            <div className="section-spotlight w-[500px] h-[400px] bottom-0 -left-10 opacity-50" />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 pb-16 border-b border-white/[0.08] transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="lg:col-span-7 space-y-6">
                        <div className="fc-section-tag">
                            <span className="fc-index">[ 05 / 05 ]</span>
                            <span>· GET IN TOUCH</span>
                        </div>
                        <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl">
                            <span className="block text-white">Let's Build Something</span>
                            <span className="block gradient-text mt-1">Exceptional</span>
                        </h2>
                        <p className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed">
                            Have a project in mind, want to discuss frontend architecture, or explore open opportunities? Feel free to send a message.
                        </p>
                    </div>

                    <div className="lg:col-span-5 grid grid-cols-2 gap-4 my-auto">
                        <div className="card-surface rounded-2xl p-5 sm:p-6 hover-lift">
                            <div className="flex items-center gap-2 code-mono text-[10.5px] text-gray-500 mb-2 uppercase tracking-[0.18em]">
                                Response Time
                            </div>
                            <div className="text-3xl font-bold tracking-tight text-white">&lt; 24h</div>
                            <p className="text-xs text-gray-500 mt-1">Prompt turnarounds</p>
                        </div>
                        <div className="card-surface rounded-2xl p-5 sm:p-6 hover-lift">
                            <div className="flex items-center gap-2 code-mono text-[10.5px] text-gray-500 mb-2 uppercase tracking-[0.18em]">
                                Location
                            </div>
                            <div className="text-xl font-bold tracking-tight text-white truncate">India (IST)</div>
                            <p className="text-xs text-gray-500 mt-1">Open to remote globally</p>
                        </div>
                    </div>
                </div>

                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 mb-16 transition-all duration-700 ease-out delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="bg-[#0a0a0a] p-6 sm:p-7 hover:bg-white/[0.03] transition-colors group">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                                <Mail className="w-4.5 h-4.5 text-white" />
                            </div>
                            <button
                                onClick={copyEmail}
                                className={`p-1.5 rounded-lg border text-[11px] flex items-center gap-1 transition-all code-mono ${copied ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300' : 'bg-white/[0.03] border-white/10 text-gray-500 hover:text-white hover:border-white/20'}`}
                            >
                                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                                <span>{copied ? 'Done' : 'Copy'}</span>
                            </button>
                        </div>
                        <span className="code-mono text-[10px] text-gray-500 uppercase tracking-[0.18em] block mb-1">Direct Email</span>
                        <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors truncate block">
                            {CONTACT_INFO.email}
                        </a>
                    </div>

                    <div className="bg-[#0a0a0a] p-6 sm:p-7 hover:bg-white/[0.03] transition-colors group">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                                <Github className="w-4.5 h-4.5 text-white" />
                            </div>
                            <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-gray-500 hover:text-white hover:border-white/20 transition-colors">
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                        </div>
                        <span className="code-mono text-[10px] text-gray-500 uppercase tracking-[0.18em] block mb-1">Code & Projects</span>
                        <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors block">
                            github.com/dini28
                        </a>
                    </div>

                    <div className="bg-[#0a0a0a] p-6 sm:p-7 hover:bg-white/[0.03] transition-colors group">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                                <Linkedin className="w-4.5 h-4.5 text-white" />
                            </div>
                            <a href={CONTACT_INFO.linkedIn} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-gray-500 hover:text-white hover:border-white/20 transition-colors">
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                        </div>
                        <span className="code-mono text-[10px] text-gray-500 uppercase tracking-[0.18em] block mb-1">Professional</span>
                        <a href={CONTACT_INFO.linkedIn} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors block">
                            linkedin.com/in/dipesh-soni
                        </a>
                    </div>

                    <div className="bg-[#0a0a0a] p-6 sm:p-7 hover:bg-white/[0.03] transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-4">
                            <MapPin className="w-4.5 h-4.5 text-white" />
                        </div>
                        <span className="code-mono text-[10px] text-gray-500 uppercase tracking-[0.18em] block mb-1">Current Base</span>
                        <p className="text-sm font-semibold text-white">{CONTACT_INFO.location}</p>
                    </div>
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-20 transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
                        <div className="card-surface rounded-3xl p-7 sm:p-8 relative overflow-hidden hover-lift">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.03] rounded-full blur-2xl pointer-events-none" />

                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold tracking-tight text-white">Open for Freelance &amp; Projects</h3>
                                    <p className="text-xs text-emerald-400 font-medium mt-0.5">UI/UX Designer @ Toba Tech</p>
                                </div>
                            </div>

                            <p className="text-sm sm:text-[0.95rem] text-gray-400 leading-relaxed mb-6">
                                Looking for a UI/UX Designer &amp; Frontend Engineer to design intuitive interfaces in Figma and build fast, responsive React applications? I'm available for freelance projects and technical collaborations.
                            </p>

                            <div className="flex flex-wrap gap-2 pt-5 border-t border-white/[0.08]">
                                {['UIUX', 'Figma', 'React', 'TypeScript', 'Nextjs', 'TailwindCSS'].map(tag => (
                                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] code-mono text-[11px] text-gray-400 font-medium">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="card-surface rounded-3xl p-6 sm:p-7 code-mono text-xs text-gray-400 relative hover-lift">
                            <div className="flex items-center justify-between mb-4 text-gray-500 pb-3 border-b border-white/[0.08]">
                                <span>contact-info.ts</span>
                                <span className="text-[10px] text-emerald-400 font-bold">● READY</span>
                            </div>
                            <div className="space-y-1.5">
                                <div><span className="text-purple-400">const</span> <span className="text-blue-400">designer</span> = &#123;</div>
                                <div className="pl-4"><span className="text-gray-500">name:</span> <span className="text-emerald-300">'Dipesh Soni'</span>,</div>
                                <div className="pl-4"><span className="text-gray-500">role:</span> <span className="text-emerald-300">'UI/UX Designer &amp; Developer'</span>,</div>
                                <div className="pl-4"><span className="text-gray-500">company:</span> <span className="text-emerald-300">'Toba Tech'</span>,</div>
                                <div className="pl-4"><span className="text-gray-500">freelance:</span> <span className="text-emerald-300">'Available'</span></div>
                                <div>&#125;;</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="card-surface rounded-3xl p-7 sm:p-8 lg:p-10 hover-lift">
                            <div className="mb-7">
                                <h3 className="text-2xl sm:text-[1.65rem] font-bold tracking-tight text-white">Send a Direct Message</h3>
                                <p className="text-xs sm:text-[0.82rem] text-gray-500 mt-1.5">Fill in details below. All fields marked with * are required.</p>
                            </div>

                            <form ref={formRef} onSubmit={onSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="contact-name" className="block code-mono text-[10.5px] text-gray-500 uppercase tracking-[0.18em] mb-2.5">
                                            Your Name <span className="text-emerald-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="contact-name"
                                            name="name"
                                            className={`w-full px-4 py-3.5 rounded-xl bg-black/50 text-white text-sm transition-all border ${formErrors.name
                                                ? 'border-red-500/40 focus:ring-1 focus:ring-red-500/50'
                                                : focusedField === 'name'
                                                    ? 'border-emerald-500/40 ring-1 ring-emerald-500/15'
                                                    : 'border-white/[0.08] hover:border-white/[0.18]'
                                                } focus:outline-none`}
                                            onChange={() => handleInputChange('name')}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            placeholder="John Doe"
                                        />
                                        {formErrors.name && (
                                            <p className="text-red-400 text-[11px] mt-1.5 flex items-center gap-1.5">
                                                <AlertCircle className="w-3.5 h-3.5" /> {formErrors.name}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="contact-email" className="block code-mono text-[10.5px] text-gray-500 uppercase tracking-[0.18em] mb-2.5">
                                            Email <span className="text-emerald-400">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="contact-email"
                                            name="email"
                                            className={`w-full px-4 py-3.5 rounded-xl bg-black/50 text-white text-sm transition-all border ${formErrors.email
                                                ? 'border-red-500/40 focus:ring-1 focus:ring-red-500/50'
                                                : focusedField === 'email'
                                                    ? 'border-emerald-500/40 ring-1 ring-emerald-500/15'
                                                    : 'border-white/[0.08] hover:border-white/[0.18]'
                                                } focus:outline-none`}
                                            onChange={() => handleInputChange('email')}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            placeholder="john@example.com"
                                        />
                                        {formErrors.email && (
                                            <p className="text-red-400 text-[11px] mt-1.5 flex items-center gap-1.5">
                                                <AlertCircle className="w-3.5 h-3.5" /> {formErrors.email}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="contact-subject" className="block code-mono text-[10.5px] text-gray-500 uppercase tracking-[0.18em] mb-2.5">
                                        Subject <span className="text-emerald-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="contact-subject"
                                        name="subject"
                                        className={`w-full px-4 py-3.5 rounded-xl bg-black/50 text-white text-sm transition-all border ${formErrors.subject
                                            ? 'border-red-500/40 focus:ring-1 focus:ring-red-500/50'
                                            : focusedField === 'subject'
                                                ? 'border-emerald-500/40 ring-1 ring-emerald-500/15'
                                                : 'border-white/[0.08] hover:border-white/[0.18]'
                                            } focus:outline-none`}
                                        onChange={() => handleInputChange('subject')}
                                        onFocus={() => setFocusedField('subject')}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="Project Inquiry / Opportunity"
                                    />
                                    {formErrors.subject && (
                                        <p className="text-red-400 text-[11px] mt-1.5 flex items-center gap-1.5">
                                            <AlertCircle className="w-3.5 h-3.5" /> {formErrors.subject}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="contact-message" className="block code-mono text-[10.5px] text-gray-500 uppercase tracking-[0.18em] mb-2.5">
                                        Message <span className="text-emerald-400">*</span>
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        rows={4}
                                        className={`w-full px-4 py-3.5 rounded-xl bg-black/50 text-white text-sm transition-all resize-none border ${formErrors.message
                                            ? 'border-red-500/40 focus:ring-1 focus:ring-red-500/50'
                                            : focusedField === 'message'
                                                ? 'border-emerald-500/40 ring-1 ring-emerald-500/15'
                                                : 'border-white/[0.08] hover:border-white/[0.18]'
                                            } focus:outline-none`}
                                        onChange={() => handleInputChange('message')}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="Briefly describe your project details or enquiry..."
                                    />
                                    {formErrors.message && (
                                        <p className="text-red-400 text-[11px] mt-1.5 flex items-center gap-1.5">
                                            <AlertCircle className="w-3.5 h-3.5" /> {formErrors.message}
                                        </p>
                                    )}
                                </div>

                                {submitSuccess && (
                                    <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-[12px]">
                                        <CheckCircle className="w-4 h-4 shrink-0" />
                                        <span>Message sent successfully! I'll respond to your email shortly.</span>
                                    </div>
                                )}

                                {submitError && (
                                    <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/25 text-red-300 text-[12px]">
                                        <AlertCircle className="w-4 h-4 shrink-0" />
                                        <span>Failed to send message. Please try again or copy email address above.</span>
                                    </div>
                                )}

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="vite-btn-primary disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className={`card-surface rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />
                    <div className="max-w-2xl mx-auto space-y-5 text-center relative z-10">
                        <h3 className="display-heading text-3xl sm:text-4xl lg:text-5xl">
                            <span className="block text-white">Start a Project</span>
                            <span className="block gradient-text mt-1">Together</span>
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                            Whether you need a sleek landing page, complex React architecture, or full-stack integrations — let's turn your vision into production code.
                        </p>
                        <div className="pt-2">
                            <a
                                href={`mailto:${CONTACT_INFO.email}`}
                                className="vite-btn-primary"
                            >
                                <Mail className="w-4 h-4" />
                                <span>Get in Touch via Email</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
