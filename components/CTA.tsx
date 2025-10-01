import React, { useState, useRef, useEffect } from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { formspreeEndpoint } from '../site.config';

const ContactForm = () => {
    const t = useTranslations();
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        
        try {
            // Get the backend URL from the environment variable
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  // Use the apiUrl variable in the fetch call
  const response = await fetch(apiUrl, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                let errorMessage = t.form_error_unexpected;
                if (response.status >= 500) {
                    errorMessage = t.form_error_server;
                } else if (response.status >= 400) {
                    errorMessage = t.form_error_submission;
                }
                
                try {
                    const data = await response.json();
                    if (data && data.errors) {
                        errorMessage = data.errors.map((error: { message: string }) => error.message).join(", ");
                    }
                } catch (jsonError) {
                    console.error("Could not parse error response as JSON.", jsonError);
                }
                setError(errorMessage);
            }
        } catch (err) {
            setError(t.form_error_network);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="text-center py-8">
                <h3 className="text-2xl font-bold text-white mb-2">{t.form_submitted_title}</h3>
                <p className="text-gray-300">{t.form_submitted_desc}</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">{t.form_name_label}</label>
                        <input type="text" id="name" name="name" placeholder={t.form_name_placeholder} required className="mt-1 block w-full bg-gray-800/50 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">{t.form_email_label}</label>
                        <input type="email" id="email" name="email" placeholder={t.form_email_placeholder} required className="mt-1 block w-full bg-gray-800/50 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" />
                    </div>
                </div>
                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300">{t.form_company_label}</label>
                    <input type="text" id="company" name="company" placeholder={t.form_company_placeholder} className="mt-1 block w-full bg-gray-800/50 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" />
                </div>
                 <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-300">{t.form_role_label}</label>
                    <select id="role" name="role" required className="mt-1 block w-full bg-gray-800/50 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500">
                        <option value="">{t.form_role_select}</option>
                        <option value="CTO">{t.form_role_cto}</option>
                        <option value="VP-Engineering">{t.form_role_vp}</option>
                        <option value="Product-Manager">{t.form_role_pm}</option>
                        <option value="Operations-Lead">{t.form_role_ops}</option>
                        <option value="AI-Team-Head">{t.form_role_ai}</option>
                        <option value="Other">{t.form_role_other}</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">{t.form_challenge_label}</label>
                    <textarea id="message" name="message" rows={4} placeholder={t.form_challenge_placeholder} className="mt-1 block w-full bg-gray-800/50 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"></textarea>
                </div>
                 <div className="flex items-start">
                    <input id="consent" name="consent" type="checkbox" required className="h-4 w-4 mt-1 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500" />
                    <div className="ml-3 text-sm">
                        <label htmlFor="consent" className="text-gray-400">{t.form_consent_label}</label>
                    </div>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#00E5FF] to-[#12A8CD] text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[#00E5FF]/30 transition-all text-lg disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? t.form_submitting_button : t.form_submit_button}
                </button>
                {error && <p className="text-red-400 text-sm mt-2 text-center">{error}</p>}
            </div>
        </form>
    );
};

interface CTAProps {
    openModal: (title: string, content: React.ReactNode) => void;
}

const CTA: React.FC<CTAProps> = ({ openModal }) => {
  const t = useTranslations();
  const ctaRef = useRef<HTMLElement>(null);
  const blurRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
        if (ctaRef.current && blurRef.current) {
            const rect = ctaRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top < windowHeight && rect.bottom > 0) {
                const scrollPercent = (windowHeight - rect.top) / (windowHeight + rect.height);
                const offset = -100 + (scrollPercent * 200);
                blurRef.current.style.transform = `translate(-50%, -50%) translateY(${offset}px)`;
            }
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="cta" ref={ctaRef} className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '2rem 2rem' }}></div>
        <div ref={blurRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full filter blur-[150px] transition-transform duration-300 ease-out"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-on-scroll">
        <h2 className="text-3xl lg:text-5xl font-bold text-white font-['Satoshi'] leading-tight">
          {t.cta_title}
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-400">
          {t.cta_subtitle}
        </p>
        <div className="mt-10">
          <button
            onClick={() => openModal(t.cta_modal_title, <ContactForm />)}
            className="bg-gradient-to-r from-[#00E5FF] to-[#12A8CD] text-white font-bold py-4 px-10 rounded-full hover:shadow-lg hover:shadow-[#00E5FF]/30 transition-all text-xl"
          >
            {t.cta_button}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;