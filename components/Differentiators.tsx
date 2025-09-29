import React from 'react';
import { SecurityIcon, OpenSourceIcon, ExpertIcon, RevenueIcon } from './Icons';
import AnimatedGridBackground from './AnimatedGridBackground';

const differentiators = [
  {
    icon: SecurityIcon,
    title: 'Enterprise-Grade Security',
    description: 'Zero data leakage, SOC 2 compliant. Your data is protected with industry-leading security protocols.'
  },
  {
    icon: OpenSourceIcon,
    title: 'No Vendor Lock-In',
    description: 'We use open frameworks and provide portable models, giving you full ownership and control of your AI assets.'
  },
  {
    icon: RevenueIcon,
    title: 'Revenue-First Approach',
    description: 'Every AI solution we build is directly tied to your key performance indicators and business objectives.'
  },
  {
    icon: ExpertIcon,
    title: 'Dedicated AI Architects',
    description: 'Our team consists of PhD-level experts in NLP, LLMs, and workflow design to solve your toughest challenges.'
  }
];

const Differentiators: React.FC = () => {
  return (
    <section id="differentiators" className="py-20 lg:py-28 bg-[#0A0F2C] relative overflow-hidden">
      <AnimatedGridBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto scroll-reveal">
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-['Satoshi']">The Transform Revenue AI Advantage</h2>
          <p className="mt-4 text-lg text-gray-400">
            We're more than just developers. We're your strategic partner in building a future-proof business.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {differentiators.map((item, index) => (
            <div key={index} className="flex items-start gap-6 p-6 bg-[#1a233a]/50 rounded-lg border border-transparent hover:border-gray-700/50 transition-colors scroll-reveal group">
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