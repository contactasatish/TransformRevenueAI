import React from 'react';
import { CheckIcon, RetailIcon, HealthcareIcon, FintechIcon } from './Icons';

interface CaseStudy {
    title: string;
    challenge: string;
    solution: string[];
    results: { metric: string; label: string; }[];
    quote: string;
    icon: React.FC<{className?: string}>;
}

const caseStudiesData: CaseStudy[] = [
    {
      icon: RetailIcon,
      title: 'Fortune 500 Retailer – AI-Powered Inventory Optimization',
      challenge: 'Overstocking and stockouts cost $18M annually. Manual forecasting was slow and inaccurate.',
      solution: [
        'Built a custom AI agent trained on 5 years of sales, weather, and supply chain data.',
        'Integrated with ERP and POS systems.',
        'Deployed predictive forecasting engine with real-time adjustments.'
      ],
      results: [
        { metric: '37%', label: 'reduction in overstocking' },
        { metric: '29%', label: 'increase in in-stock availability' },
        { metric: '$4.1M', label: 'saved annually' },
        { metric: '89%', label: 'faster forecast generation' },
      ],
      quote: "We didn’t just automate reporting — we turned inventory into a profit center."
    },
    {
      icon: HealthcareIcon,
      title: 'Global Healthcare Provider – AI Clinical Assistant',
      challenge: 'Doctors spent 2.5 hours/day on administrative tasks. Patient wait times were rising.',
      solution: [
        'Launched a HIPAA-compliant GPT trained on medical guidelines and anonymized patient records.',
        'Integrated with EHR and scheduling systems.',
        'Enabled voice-to-structured note generation during patient visits.'
      ],
      results: [
        { metric: '2.1 hrs', label: 'saved per doctor per day' },
        { metric: '94%', label: 'accuracy in note completion' },
        { metric: '31%', label: 'increase in patient throughput' },
        { metric: 'Zero', label: 'data breaches in 18 months' },
      ],
      quote: "The AI didn’t replace doctors — it gave them back their time to care."
    },
    {
      icon: FintechIcon,
      title: 'Fintech Startup – Automated Loan Underwriting',
      challenge: 'Loan approval took 72 hours. High manual error rate. Customer drop-off at application stage.',
      solution: [
        'Built a custom GPT trained on 12,000 loan applications and risk models.',
        'Integrated with credit bureaus, bank statements, and KYC tools.',
        'Added real-time fraud detection and approval scoring.'
      ],
      results: [
        { metric: '< 12 min', label: 'loan decision time' },
        { metric: '92%', label: 'reduction in manual review' },
        { metric: '44%', label: 'increase in application completion' },
        { metric: '$6.8M', label: 'in new loans approved in Q1' },
      ],
      quote: "We turned a 3-day process into a 12-minute experience — without sacrificing risk control."
    },
];

const CaseStudies: React.FC = () => {
    return (
        <section id="real-impact" className="py-20 lg:py-28 bg-[#0A0F2C]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto scroll-reveal">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white font-['Satoshi']">Real Impact, Real Results</h2>
                    <p className="mt-4 text-lg text-gray-400">
                        We partner with industry leaders to deliver AI solutions that create tangible business value.
                    </p>
                </div>

                <div className="mt-16 max-w-4xl mx-auto space-y-16">
                    {caseStudiesData.map((study, index) => (
                        <div key={index} className="bg-gradient-to-br from-[#1a233a] to-[#0A0F2C] p-8 rounded-2xl border border-gray-700/50 shadow-lg shadow-[#00E5FF]/5 transition-all duration-300 hover:shadow-xl hover:shadow-[#00E5FF]/10 scroll-reveal">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
                                <div className="flex-shrink-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 w-16 h-16 rounded-xl flex items-center justify-center">
                                    <study.icon className="w-8 h-8 text-[#00E5FF]" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                            </div>
                            
                            <div className="space-y-6">
                              <div>
                                <h4 className="text-lg font-semibold text-[#00E5FF] mb-2">The Challenge</h4>
                                <p className="text-gray-300">{study.challenge}</p>
                              </div>
                              <div>
                                <h4 className="text-lg font-semibold text-[#00E5FF] mb-2">Our Solution</h4>
                                <ul className="space-y-3">
                                  {study.solution.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                      <CheckIcon className="w-5 h-5 text-[#00E5FF] mr-3 mt-1 flex-shrink-0" />
                                      <span className="text-gray-300">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="text-lg font-semibold text-[#00E5FF] mb-2">Impact & Results</h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                                  {study.results.map((result, i) => (
                                    <div key={i} className="bg-gray-800/50 p-4 rounded-lg text-center">
                                      <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] to-[#12A8CD]">
                                        {result.metric}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-400">{result.label}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              {study.quote && (
                                <blockquote className="mt-6 border-l-4 border-[#00E5FF] pl-4 italic text-gray-400">
                                  "{study.quote}"
                                </blockquote>
                              )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;