import React from 'react';
import { useTranslations } from '../hooks/useTranslations';

const Process: React.FC = () => {
  const t = useTranslations();
  
  const steps = [
    {
      step: '01',
      title: t.process_step_1_title,
      description: t.process_step_1_desc
    },
    {
      step: '02',
      title: t.process_step_2_title,
      description: t.process_step_2_desc
    },
    {
      step: '03',
      title: t.process_step_3_title,
      description: t.process_step_3_desc
    },
    {
      step: '04',
      title: t.process_step_4_title,
      description: t.process_step_4_desc
    },
    {
      step: '05',
      title: t.process_step_5_title,
      description: t.process_step_5_desc
    }
  ];

  return (
    <section id="process" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto animate-on-scroll">
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-['Satoshi']">{t.process_title}</h2>
          <p className="mt-4 text-lg text-gray-400">
            {t.process_subtitle}
          </p>
        </div>

        <div className="mt-20 max-w-5xl mx-auto relative">
          {/* Vertical line for mobile */}
          <div className="absolute left-6 lg:left-1/2 top-0 h-full w-0.5 bg-gray-700/50 -translate-x-1/2 lg:block"></div>
          
          <div className="space-y-12">
            {steps.map((item, index) => (
              <div key={index} className="flex items-start lg:items-center gap-6 lg:gap-0 animate-on-scroll">
                {/* Desktop layout */}
                <div className={`hidden lg:flex w-1/2 ${index % 2 === 0 ? 'justify-end pr-12' : 'order-last justify-start pl-12'}`}>
                  <div className="bg-gradient-to-br from-[#1a233a] to-[#0A0F2C] p-6 rounded-xl border border-gray-700/50 max-w-sm">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-gray-400">{item.description}</p>
                  </div>
                </div>

                {/* Shared Node */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#0A0F2C] border-2 border-[#00E5FF] rounded-full z-10 process-node animate-on-scroll">
                  <span className="text-lg font-bold text-[#00E5FF]">{item.step}</span>
                </div>

                {/* Mobile/Tablet Layout */}
                 <div className="lg:hidden bg-gradient-to-br from-[#1a233a] to-[#0A0F2C] p-6 rounded-xl border border-gray-700/50 w-full">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;