import React from 'react';
import AnimatedGridBackground from './AnimatedGridBackground';

const steps = [
  {
    step: '01',
    title: 'Discover & Audit',
    description: 'Deep-dive into your business goals, pain points, and data landscape. Deliver: AI Readiness Report with risk score, opportunity map, and roadmap.'
  },
  {
    step: '02',
    title: 'Design & Prototype',
    description: 'Co-create AI agent workflows and GPT personas. Build interactive prototypes in sandbox environments and validate with user testing.'
  },
  {
    step: '03',
    title: 'Build & Train',
    description: 'Develop custom models, fine-tune LLMs, and integrate with your stack. Implement security, access controls, and logging.'
  },
  {
    step: '04',
    title: 'Test & Validate',
    description: 'Rigorous testing for accuracy, bias, and performance under load. Compliance checks (GDPR, HIPAA, SOC 2) and iterative refinement.'
  },
  {
    step: '05',
    title: 'Deploy & Scale',
    description: 'Launch in phases with monitoring dashboards. Train your team and set up ongoing optimization with KPI tracking.'
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-[#10183b] relative overflow-hidden">
      <AnimatedGridBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto scroll-reveal">
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-['Satoshi']">From Vision to Value in 5 Steps</h2>
          <p className="mt-4 text-lg text-gray-400">
            Our enterprise-grade framework ensures we don’t just deploy AI — we deploy business transformation.
          </p>
        </div>

        <div className="mt-20 max-w-5xl mx-auto relative">
          {/* Vertical line for mobile */}
          <div className="absolute left-6 lg:left-1/2 top-0 h-full w-0.5 bg-gray-700/50 -translate-x-1/2 lg:block"></div>
          
          <div className="space-y-12">
            {steps.map((item, index) => (
              <div key={index} className="flex items-start lg:items-center gap-6 lg:gap-0 scroll-reveal">
                {/* Desktop layout */}
                <div className={`hidden lg:flex w-1/2 ${index % 2 === 0 ? 'justify-end pr-12' : 'order-last justify-start pl-12'}`}>
                  <div className="bg-gradient-to-br from-[#1a233a] to-[#0A0F2C] p-6 rounded-xl border border-gray-700/50 max-w-sm">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-gray-400">{item.description}</p>
                  </div>
                </div>

                {/* Shared Node */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#0A0F2C] border-2 border-[#00E5FF] rounded-full z-10 process-node scroll-reveal">
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