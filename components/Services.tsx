import React from 'react';
import { BrainIcon, ChipIcon, FlowchartIcon, AnalyticsIcon } from './Icons';
import { useTranslations } from '../hooks/useTranslations';

interface ServicesProps {
    openModal: (title: string, content: React.ReactNode) => void;
}

const Services: React.FC<ServicesProps> = ({ openModal }) => {
  const t = useTranslations();
  
  const servicesData = [
    {
      icon: BrainIcon,
      title: t.service_1_title,
      description: t.service_1_desc,
      details: (
        <>
          <h3 className="text-xl font-bold mb-2">{t.service_1_modal_title}</h3>
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t.service_1_modal_p1 }} />
          <ul className="list-disc list-inside space-y-2 mb-4">
              <li>{t.service_1_modal_li1}</li>
              <li>{t.service_1_modal_li2}</li>
              <li>{t.service_1_modal_li3}</li>
          </ul>
          <h4 className="font-bold text-lg mb-2">{t.service_1_modal_use_cases}</h4>
          <ul className="list-disc list-inside space-y-2 mb-4">
              <li>{t.service_1_modal_uc1}</li>
              <li>{t.service_1_modal_uc2}</li>
              <li>{t.service_1_modal_uc3}</li>
          </ul>
          <blockquote className="border-l-4 border-[#00E5FF] pl-4 italic text-gray-400">
              {t.service_1_modal_quote}
          </blockquote>
        </>
      )
    },
    {
      icon: ChipIcon,
      title: t.service_2_title,
      description: t.service_2_desc,
      details: (
        <>
          <h3 className="text-xl font-bold mb-2">{t.service_2_modal_title}</h3>
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t.service_2_modal_p1 }} />
          <h4 className="font-bold text-lg mb-2">{t.service_2_modal_process}</h4>
          <ul className="list-disc list-inside space-y-2 mb-4">
              <li>{t.service_2_modal_li1}</li>
              <li>{t.service_2_modal_li2}</li>
              <li>{t.service_2_modal_li3}</li>
          </ul>
          <h4 className="font-bold text-lg mb-2">{t.service_2_modal_industries}</h4>
          <ul className="list-disc list-inside space-y-2 mb-4">
              <li dangerouslySetInnerHTML={{ __html: t.service_2_modal_i1 }} />
              <li dangerouslySetInnerHTML={{ __html: t.service_2_modal_i2 }} />
              <li dangerouslySetInnerHTML={{ __html: t.service_2_modal_i3 }} />
          </ul>
          <blockquote className="border-l-4 border-[#00E5FF] pl-4 italic text-gray-400">
              {t.service_2_modal_quote}
          </blockquote>
        </>
      )
    },
    {
      icon: FlowchartIcon,
      title: t.service_3_title,
      description: t.service_3_desc,
      details: (
        <>
          <h3 className="text-xl font-bold mb-2">{t.service_3_modal_title}</h3>
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t.service_3_modal_p1 }} />
          <ul className="list-disc list-inside space-y-2 mb-4">
              <li>{t.service_3_modal_li1}</li>
              <li>{t.service_3_modal_li2}</li>
              <li>{t.service_3_modal_li3}</li>
          </ul>
          <h4 className="font-bold text-lg mb-2">{t.service_3_modal_examples}</h4>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li dangerouslySetInnerHTML={{ __html: t.service_3_modal_ex1 }} />
            <li dangerouslySetInnerHTML={{ __html: t.service_3_modal_ex2 }} />
            <li dangerouslySetInnerHTML={{ __html: t.service_3_modal_ex3 }} />
          </ul>
          <blockquote className="border-l-4 border-[#00E5FF] pl-4 italic text-gray-400">
              {t.service_3_modal_quote}
          </blockquote>
        </>
      )
    },
    {
      icon: AnalyticsIcon,
      title: t.service_4_title,
      description: t.service_4_desc,
      details: (
        <>
          <h3 className="text-xl font-bold mb-2">{t.service_4_modal_title}</h3>
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t.service_4_modal_p1 }} />
          <h4 className="font-bold text-lg mb-2">{t.service_4_modal_capabilities}</h4>
          <ul className="list-disc list-inside space-y-2 mb-4">
              <li dangerouslySetInnerHTML={{ __html: t.service_4_modal_c1 }} />
              <li dangerouslySetInnerHTML={{ __html: t.service_4_modal_c2 }} />
              <li dangerouslySetInnerHTML={{ __html: t.service_4_modal_c3 }} />
              <li dangerouslySetInnerHTML={{ __html: t.service_4_modal_c4 }} />
          </ul>
          <blockquote className="border-l-4 border-[#00E5FF] pl-4 italic text-gray-400">
              {t.service_4_modal_quote}
          </blockquote>
        </>
      )
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto animate-on-scroll">
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-['Satoshi']">{t.services_title}</h2>
          <p className="mt-4 text-lg text-gray-400">
            {t.services_subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, index) => (
            <div key={index} className="group bg-gradient-to-br from-[#1a233a] to-[#0A0F2C] p-8 rounded-2xl border border-gray-700/50 shadow-lg shadow-[#00E5FF]/5 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#00E5FF]/10 animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#00E5FF]/20">
                <service.icon className="w-8 h-8 text-[#00E5FF]" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-2 text-gray-400">{service.description}</p>
              <button
                onClick={() => openModal(service.title, service.details)}
                className="mt-6 text-[#00E5FF] font-semibold hover:text-white transition-colors"
              >
                {t.services_learn_more} &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;