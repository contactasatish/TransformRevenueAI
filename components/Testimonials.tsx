import React, { useState, useEffect } from 'react';
import { useTranslations } from '../hooks/useTranslations';

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const t = useTranslations();

    const testimonialsData = [
        {
          author: t.testimonial_1_author,
          role: t.testimonial_1_role,
          company: t.testimonial_1_company,
          quote: t.testimonial_1_quote,
        },
        {
          author: t.testimonial_2_author,
          role: t.testimonial_2_role,
          company: t.testimonial_2_company,
          quote: t.testimonial_2_quote,
        },
        {
          author: t.testimonial_3_author,
          role: t.testimonial_3_role,
          company: t.testimonial_3_company,
          quote: t.testimonial_3_quote,
        },
        {
          author: t.testimonial_4_author,
          role: t.testimonial_4_role,
          company: t.testimonial_4_company,
          quote: t.testimonial_4_quote,
        },
        {
          author: t.testimonial_5_author,
          role: t.testimonial_5_role,
          company: t.testimonial_5_company,
          quote: t.testimonial_5_quote,
        },
        {
          author: t.testimonial_6_author,
          role: t.testimonial_6_role,
          company: t.testimonial_6_company,
          quote: t.testimonial_6_quote,
        },
      ];

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
    }, [currentIndex, t]); // Add t to dependency array to re-trigger on language change


    const currentTestimonial = testimonialsData[currentIndex];

    return (
        <section id="testimonials" className="py-20 lg:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto animate-on-scroll">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white font-['Satoshi']">{t.testimonials_title}</h2>
                    <p className="mt-4 text-lg text-gray-400">
                        {t.testimonials_subtitle}
                    </p>
                </div>

                <div className="mt-16 max-w-4xl mx-auto relative">
                    <div className="bg-gradient-to-br from-[#1a233a] to-[#0A0F2C] p-8 md:p-12 rounded-2xl border border-gray-700/50 shadow-lg shadow-[#00E5FF]/5 transition-all duration-300 animate-on-scroll">
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