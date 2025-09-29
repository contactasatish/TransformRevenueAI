import React from 'react';
import { BrainIcon, ChipIcon, FlowchartIcon, AnalyticsIcon } from './Icons';
import AnimatedGridBackground from './AnimatedGridBackground';

interface ServicesProps {
    openModal: (title: string, content: React.ReactNode) => void;
}

const servicesData = [
  {
    icon: BrainIcon,
    title: 'AI Agent Factory',
    description: 'Create autonomous agents that act, reason, and adapt across your workflows.',
    details: (
      <>
        <h3 className="text-xl font-bold mb-2">Deploy Autonomous Intelligence That Works for You — 24/7, Without Oversight</h3>
        <p className="mb-4">We design and deploy <strong>purpose-built AI agents</strong> that act as intelligent extensions of your team. Unlike generic chatbots, our agents:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Understand context, execute multi-step tasks, and learn from feedback.</li>
            <li>Integrate with your CRM, ERP, email, and internal tools (Salesforce, Slack, SAP, etc.).</li>
            <li>Operate with guardrails: rules-based logic, approval workflows, and audit trails.</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">Use Cases:</h4>
        <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Customer onboarding agents that qualify leads & schedule demos.</li>
            <li>HR assistants that answer policy questions, process leave requests, and onboard new hires.</li>
            <li>Supply chain agents that monitor delays, trigger alerts, and suggest alternatives.</li>
        </ul>
        <blockquote className="border-l-4 border-[#00E5FF] pl-4 italic text-gray-400">
            "We built an AI agent for a logistics client that reduced shipment delays by 40% by predicting port congestion and rerouting in real time."
        </blockquote>
      </>
    )
  },
  {
    icon: ChipIcon,
    title: 'Custom GPT Studio',
    description: 'Fine-tune enterprise-grade AI models trained on your data, your rules, your brand.',
    details: (
      <>
        <h3 className="text-xl font-bold mb-2">Your Brand. Your Data. Your AI. No Generic Responses.</h3>
        <p className="mb-4">Transform your business knowledge into <strong>enterprise-grade GPTs</strong> trained on your proprietary data — not open-source models.</p>
        <h4 className="font-bold text-lg mb-2">Our process:</h4>
        <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Secure data ingestion (encrypted, on-prem or private cloud).</li>
            <li>Fine-tuning on domain-specific language, tone, and compliance requirements.</li>
            <li>Deployment with role-based access and real-time monitoring.</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">Industries We Serve:</h4>
        <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Finance:</strong> Loan assessment GPTs that analyze documents and flag risks.</li>
            <li><strong>Healthcare:</strong> Patient intake GPTs trained on medical guidelines and HIPAA-compliant.</li>
            <li><strong>Legal:</strong> Contract review agents that highlight clauses and suggest revisions.</li>
        </ul>
        <blockquote className="border-l-4 border-[#00E5FF] pl-4 italic text-gray-400">
            "A Fortune 500 bank reduced loan processing time from 72 hours to under 2 hours using a custom GPT trained on 10 years of loan data."
        </blockquote>
      </>
    )
  },
  {
    icon: FlowchartIcon,
    title: 'Smart Workflow Engine',
    description: 'Automate complex processes with AI orchestration that scales with your business.',
    details: (
      <>
        <h3 className="text-xl font-bold mb-2">Automate Complex, Repetitive Tasks — With AI That Thinks Like a Pro</h3>
        <p className="mb-4">We engineer <strong>AI-powered workflows</strong> that go beyond simple automation. Our systems:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Combine LLMs with tools, APIs, and databases to execute complex business logic.</li>
            <li>Adapt based on feedback and changing conditions.</li>
            <li>Are designed for scalability and auditability.</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">Example Workflows:</h4>
        <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Sales:</strong> Auto-generate personalized proposals based on client history + real-time market data.</li>
            <li><strong>Operations:</strong> Process invoices, validate POs, reconcile payments, and flag discrepancies.</li>
            <li><strong>Marketing:</strong> Create A/B test campaigns, analyze performance, and suggest optimizations.</li>
        </ul>
        <blockquote className="border-l-4 border-[#00E5FF] pl-4 italic text-gray-400">
            "Automated 90% of monthly reporting for a retail chain — saving 380 hours per month and uncovering $2.3M in cost savings."
        </blockquote>
      </>
    )
  },
  {
    icon: AnalyticsIcon,
    title: 'Revenue Intelligence Hub',
    description: 'Transform data into actionable revenue insights with AI-powered analytics that predict opportunities and optimize performance.',
    details: (
      <>
        <h3 className="text-xl font-bold mb-2">Unlock Predictive Insights, Drive Proactive Growth</h3>
        <p className="mb-4">Our Revenue Intelligence Hub connects to your disparate data sources (CRM, marketing automation, financial systems) to create a single source of truth. It then uses AI to uncover patterns and predict future outcomes, turning your data into your most valuable asset.</p>
        <h4 className="font-bold text-lg mb-2">Core Capabilities:</h4>
        <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Predictive Lead Scoring:</strong> Identify which leads are most likely to convert and why.</li>
            <li><strong>Customer Churn Prediction:</strong> Proactively flag at-risk accounts and receive recommendations to retain them.</li>
            <li><strong>Sales Performance Analytics:</strong> Analyze team performance, identify coaching opportunities, and forecast pipeline with greater accuracy.</li>
            <li><strong>Opportunity Sizing:</strong> Automatically analyze market trends and customer data to identify new revenue streams.</li>
        </ul>
        <blockquote className="border-l-4 border-[#00E5FF] pl-4 italic text-gray-400">
            "We connected our Salesforce and Marketo data. Within weeks, the AI hub identified a $5M upsell opportunity in our existing customer base that we had completely missed."
        </blockquote>
      </>
    )
  },
];

const Services: React.FC<ServicesProps> = ({ openModal }) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#10183b] relative overflow-hidden">
      <AnimatedGridBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto scroll-reveal">
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-['Satoshi']">Our Gen AI Solutions</h2>
          <p className="mt-4 text-lg text-gray-400">
            We build intelligent systems focused on driving efficiency, automation, and revenue growth.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, index) => (
            <div key={index} className="group bg-gradient-to-br from-[#1a233a] to-[#0A0F2C] p-8 rounded-2xl border border-gray-700/50 shadow-lg shadow-[#00E5FF]/5 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#00E5FF]/10 scroll-reveal">
              <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#00E5FF]/20">
                <service.icon className="w-8 h-8 text-[#00E5FF]" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-2 text-gray-400">{service.description}</p>
              <button
                onClick={() => openModal(service.title, service.details)}
                className="mt-6 text-[#00E5FF] font-semibold hover:text-white transition-colors"
              >
                Learn More &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;