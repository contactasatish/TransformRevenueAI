import React from 'react';
import { CheckIcon, RetailIcon, HealthcareIcon, FintechIcon } from './Icons';
import { useTranslations } from '../hooks/useTranslations';

const CaseStudies: React.FC = () => {
    const t = useTranslations();

    const caseStudiesData = [
        {
          icon: RetailIcon,
          title: t.cs_1_title,
          challenge: t.cs_1_challenge_text,
          solution: [
            t.cs_1_solution_1,
            t.cs_1_solution_2,
            t.cs_1_solution_3
          ],
          results: [
            { metric: t.cs_1_res_1_metric, label: t.cs_1_res_1_label },
            { metric: t.cs_1_res_2_metric, label: t.cs_1_res_2_label },
            { metric: t.cs_1_res_3_metric, label: t.cs_1_res_3_label },
            { metric: t.cs_1_res_4_metric, label: t.cs_1_res_4_label },
          ],
          quote: t.cs_1_quote
        },
        {
          icon: HealthcareIcon,
          title: t.cs_2_title,
          challenge: t.cs_2_challenge_text,
          solution: [
            t.cs_2_solution_1,
            t.cs_2_solution_2,
            t.cs_2_solution_3
          ],
          results: [
            { metric: t.cs_2_res_1_metric, label: t.cs_2_res_1_label },
            { metric: t.cs_2_res_2_metric, label: t.cs_2_res_2_label },
            { metric: t.cs_2_res_3_metric, label: t.cs_2_res_3_label },
            { metric: t.cs_2_res_4_metric, label: t.cs_2_res_4_label },
          ],
          quote: t.cs_2_quote
        },
        {
          icon: FintechIcon,
          title: t.cs_3_title,
          challenge: t.cs_3_challenge_text,
          solution: [
            t.cs_3_solution_1,
            t.cs_3_solution_2,
            t.cs_3_solution_3
          ],
          results: [
            { metric: t.cs_3_res_1_metric, label: t.cs_3_res_1_label },
            { metric: t.cs_3_res_2_metric, label: t.cs_3_res_2_label },
            { metric: t.cs_3_res_3_metric, label: t.cs_3_res_3_label },
            { metric: t.cs_3_res_4_metric, label: t.cs_3_res_4_label },
          ],
          quote: t.cs_3_quote
        },
    ];

    return (
        <section id="real-impact" className="py-20 lg:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto animate-on-scroll">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white font-['Satoshi']">{t.cs_title}</h2>
                    <p className="mt-4 text-lg text-gray-400">
                        {t.cs_subtitle}
                    </p>
                </div>

                <div className="mt-16 max-w-4xl mx-auto space-y-16">
                    {caseStudiesData.map((study, index) => (
                        <div key={index} className="bg-gradient-to-br from-[#1a233a] to-[#0A0F2C] p-8 rounded-2xl border border-gray-700/50 shadow-lg shadow-[#00E5FF]/5 transition-all duration-300 hover:shadow-xl hover:shadow-[#00E5FF]/10 animate-on-scroll">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
                                <div className="flex-shrink-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 w-16 h-16 rounded-xl flex items-center justify-center">
                                    <study.icon className="w-8 h-8 text-[#00E5FF]" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                            </div>
                            
                            <div className="space-y-6">
                              <div>
                                <h4 className="text-lg font-semibold text-[#00E5FF] mb-2">{t.cs_challenge_title}</h4>
                                <p className="text-gray-300">{study.challenge}</p>
                              </div>
                              <div>
                                <h4 className="text-lg font-semibold text-[#00E5FF] mb-2">{t.cs_solution_title}</h4>
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
                                <h4 className="text-lg font-semibold text-[#00E5FF] mb-2">{t.cs_impact_title}</h4>
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