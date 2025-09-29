import React, { useState, useEffect } from 'react';

interface Testimonial {
  author: string;
  role: string;
  company: string;
  quote: string;
}

const testimonialsData: Testimonial[] = [
  {
    author: 'Sarah Johnson',
    role: 'CTO',
    company: 'Innovate Corp',
    quote: 'Transform Revenue AI delivered an AI agent that automated 80% of our manual data entry, saving us thousands of hours. Their team didn\'t just build a tool; they engineered a core part of our new operational backbone.',
  },
  {
    author: 'Michael Chen',
    role: 'VP of Operations',
    company: 'Quantum Logistics',
    quote: 'The custom GPT they built for us understands our industry-specific jargon perfectly. It has reduced our internal training time for new hires by 60% and acts as a 24/7 expert system for our team.',
  },
  {
    author: 'Emily Rodriguez',
    role: 'Head of Product',
    company: 'NextGen Fintech',
    quote: 'We were struggling with scaling our customer support. The smart workflow engine they designed handles 70% of inbound queries, allowing our human agents to focus on high-value, complex cases. A total game-changer for our CX.',
  },
  {
    author: 'David Lee',
    role: 'Chief Revenue Officer',
    company: 'Apex Retail Group',
    quote: 'The Revenue Intelligence Hub is phenomenal. It surfaced a multi-million dollar upsell opportunity in our existing customer base within the first month. We\'re now making proactive, data-driven decisions instead of reactive ones.',
  },
  {
    author: 'Dr. Aisha Khan',
    role: 'Chief Medical Information Officer',
    company: 'Unity Health Systems',
    quote: 'Their HIPAA-compliant AI solution for clinical documentation has been revolutionary. It reduced physician burnout and improved data accuracy, allowing us to focus more on patient outcomes. A true partner in healthcare innovation.',
  },
  {
    author: 'Ben Carter',
    role: 'Director of Financial Planning',
    company: 'Titan Financial',
    quote: 'We tasked them with automating our complex quarterly reporting process. The smart workflow engine they built is flawless, cutting down a week of manual work to just a few hours and eliminating human error.',
  },
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 5000); // Change testimonial every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]);


    const currentTestimonial = testimonialsData[currentIndex];

    return (
        <section id="testimonials" className="py-20 lg:py-28 bg-[#10183b]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto scroll-reveal">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white font-['Satoshi']">Trusted by Industry Leaders</h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Our clients are our best advocates. Here's what they have to say about our partnership.
                    </p>
                </div>

                <div className="mt-16 max-w-4xl mx-auto relative">
                    <div className="bg-gradient-to-br from-[#1a233a] to-[#0A0F2C] p-8 md:p-12 rounded-2xl border border-gray-700/50 shadow-lg shadow-[#00E5FF]/5 transition-all duration-300 scroll-reveal">
                        <div className="relative h-48 md:h-36 flex items-center justify-center">
                          {testimonialsData.map((testimonial, index) => (
                              <div
                                  key={index}
                                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                              >
                                  <blockquote className="text-center">
                                      <p className="text-xl md:text-2xl italic text-gray-200">
                                          "{testimonial.quote}"
                                      </p>
                                  </blockquote>
                              </div>
                          ))}
                        </div>

                        <div className="mt-8 text-center min-h-[56px]">
                            <p className="font-bold text-white text-lg">{currentTestimonial.author}</p>
                            <p className="text-gray-400">{currentTestimonial.role}, {currentTestimonial.company}</p>
                        </div>
                    </div>
                    
                    {/* Navigation Buttons */}
                    <button onClick={prevTestimonial} aria-label="Previous testimonial" className="absolute top-1/2 left-0 md:-left-10 transform -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button onClick={nextTestimonial} aria-label="Next testimonial" className="absolute top-1/2 right-0 md:-right-10 transform -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Navigation Dots */}
                    <div className="flex justify-center space-x-2 mt-6">
                        {testimonialsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to testimonial ${index + 1}`}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#00E5FF] w-6' : 'bg-gray-600 hover:bg-gray-400'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;