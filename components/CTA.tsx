import React, { useState, useRef, useEffect } from 'react';

interface CTAProps {
    openModal: (title: string, content: React.ReactNode) => void;
}

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        
        try {
            // IMPORTANT: Replace this placeholder URL with your actual form submission endpoint.
            // You can get one from a service like Formspree.io, which can be configured to forward submissions to hi@transformrevenueai.com.
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                let errorMessage = 'An unexpected error occurred. Please try again.';
                if (response.status >= 500) {
                    errorMessage = 'There was a problem with our server. Please try again in a few moments.';
                } else if (response.status >= 400) {
                    errorMessage = 'There seems to be an issue with your submission. Please double-check your entries.';
                }
                
                try {
                    const data = await response.json();
                    if (data && data.errors) {
                        errorMessage = data.errors.map((error: { message: string }) => error.message).join(", ");
                    }
                } catch (jsonError) {
                    // The server returned a non-JSON error (e.g., HTML error page). Use the status-based message.
                    console.error("Could not parse error response as JSON.", jsonError);
                }
                setError(errorMessage);
            }
        } catch (err) {
            setError('Could not connect to the server. Please check your internet connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="text-center py-8">
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-gray-300">Your request for a strategy session has been received. Our team will be in touch shortly.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name *</label>
                        <input type="text" id="name" name="name" placeholder="John Doe" required className="mt-1 block w-full bg-gray-800/50 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Work Email *</label>
                        <input type="email" id="email" name="email" placeholder="john@company.com" required className="mt-1 block w-full bg-gray-800/50 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" />
                    </div>
                </div>
                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300">Company</label>
                    <input type="text" id="company" name="company" placeholder="e.g., TechNova Inc." className="mt-1 block w-full bg-gray-800/50 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" />
                </div>
                 <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-300">Job Role *</label>
                    <select id="role" name="role" required className="mt-1 block w-full bg-gray-800/50 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500">
                        <option value="">Select your role</option>
                        <option value="CTO">CTO / CIO</option>
                        <option value="VP-Engineering">VP of Engineering</option>
                        <option value="Product-Manager">Product Manager</option>
                        <option value="Operations-Lead">Operations Lead</option>
                        <option value="AI-Team-Head">AI/ML Team Head</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">What’s your biggest AI challenge?</label>
                    <textarea id="message" name="message" rows={4} placeholder="e.g., Automating customer onboarding, reducing report generation time..." className="mt-1 block w-full bg-gray-800/50 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"></textarea>
                </div>
                 <div className="flex items-start">
                    <input id="consent" name="consent" type="checkbox" required className="h-4 w-4 mt-1 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500" />
                    <div className="ml-3 text-sm">
                        <label htmlFor="consent" className="text-gray-400">I agree to receive AI strategy insights and case studies (you can unsubscribe anytime).</label>
                    </div>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#00E5FF] to-[#12A8CD] text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[#00E5FF]/30 transition-all text-lg disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Submitting...' : 'Schedule My Free Session'}
                </button>
                {error && <p className="text-red-400 text-sm mt-2 text-center">{error}</p>}
            </div>
        </form>
    );
};

const CTA: React.FC<CTAProps> = ({ openModal }) => {
  const ctaRef = useRef<HTMLElement>(null);
  const blurRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
        if (ctaRef.current && blurRef.current) {
            const rect = ctaRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            // Check if the element is in the viewport
            if (rect.top < windowHeight && rect.bottom > 0) {
                // Calculate the percentage of the element that is visible
                const scrollPercent = (windowHeight - rect.top) / (windowHeight + rect.height);
                // Apply a vertical offset based on the scroll percentage
                const offset = -100 + (scrollPercent * 200); // Moves from -100px to +100px
                blurRef.current.style.transform = `translate(-50%, -50%) translateY(${offset}px)`;
            }
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="cta" ref={ctaRef} className="py-20 lg:py-28 bg-[#10183b] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '2rem 2rem' }}></div>
        <div ref={blurRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full filter blur-[150px] transition-transform duration-300 ease-out"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 scroll-reveal">
        <h2 className="text-3xl lg:text-5xl font-bold text-white font-['Satoshi'] leading-tight">
          Ready to Future-Proof Your Business?
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-400">
          Let’s co-create an AI strategy that scales with your vision. Schedule a free 15-minute AI Strategy Session with a Transform Revenue AI Architect. No pitch. Just insights.
        </p>
        <div className="mt-10">
          <button
            onClick={() => openModal("Schedule Your AI Strategy Session (15 min)", <ContactForm />)}
            className="bg-gradient-to-r from-[#00E5FF] to-[#12A8CD] text-white font-bold py-4 px-10 rounded-full hover:shadow-lg hover:shadow-[#00E5FF]/30 transition-all text-xl"
          >
            Schedule Your AI Strategy Session
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;