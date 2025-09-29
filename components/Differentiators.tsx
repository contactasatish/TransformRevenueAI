import React from 'react';
import { SecurityIcon, OpenSourceIcon, ExpertIcon, RevenueIcon } from './Icons';
import { useTranslations } from '../hooks/useTranslations';

const Differentiators: React.FC = () => {
  const t = useTranslations();

  const differentiators = [
    {
      icon: SecurityIcon,
      title: t.diff_1_title,
      description: t.diff_1_desc
    },
    {
      icon: OpenSourceIcon,
      title: t.diff_2_title,
      description: t.diff_2_desc
    },
    {
      icon: RevenueIcon,
      title: t.diff_3_title,
      description: t.diff_3_desc
    },
    {
      icon: ExpertIcon,
      title: t.diff_4_title,
      description: t.diff_4_desc
    }
  ];
  
  return (
    <section id="differentiators" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto animate-on-scroll">
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-['Satoshi']">{t.diff_title}</h2>
          <p className="mt-4 text-lg text-gray-400">
            {t.diff_subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {differentiators.map((item, index) => (
            <div key={index} className="flex items-start gap-6 p-6 bg-[#1a233a]/50 rounded-lg border border-transparent hover:border-gray-700/50 transition-colors animate-on-scroll group" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#00E5FF]/20">
                <item.icon className="w-6 h-6 text-[#00E5FF]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;