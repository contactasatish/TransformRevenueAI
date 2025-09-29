import React from 'react';
import { TransformRevenueAILogo } from './Icons';

interface FooterProps {
    openModal: (title: string, content: React.ReactNode) => void;
}

const PrivacyPolicyContent = () => (
    <div>
      <h3 className="text-xl font-bold mb-2">1. Information We Collect</h3>
      <p>We collect information you provide directly to us when you fill out a contact form, request a consultation, or otherwise communicate with us. This may include your name, email address, phone number, and any other information you choose to provide.</p>
      <h3 className="text-xl font-bold mt-4 mb-2">2. How We Use Your Information</h3>
      <p>We use the information we collect to respond to your inquiries, provide you with information about our services, and improve our website and offerings. We will not share your personal information with third parties without your consent, except as required by law.</p>
    </div>
);
  
const TermsOfServiceContent = () => (
    <div>
        <h3 className="text-xl font-bold mb-2">1. Agreement to Terms</h3>
        <p>By using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use our services.</p>
        <h3 className="text-xl font-bold mt-4 mb-2">2. Intellectual Property</h3>
        <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Transform Revenue AI and its licensors. Our trademarks may not be used in connection with any product or service without the prior written consent of Transform Revenue AI.</p>
    </div>
);

const BlogContent = () => (
    <div>
        <h3 className="text-xl font-bold mb-2">Our Blog is Coming Soon!</h3>
        <p>Stay tuned for insights, case studies, and articles on the future of enterprise AI, brought to you by our team of experts.</p>
    </div>
);

const CareersContent = () => (
    <div>
        <h3 className="text-xl font-bold mb-2">Join Our Team</h3>
        <p>We're always looking for passionate, talented individuals to help us build the future of AI. While we don't have any open positions right now, we'd love to hear from you. Please send your resume to <a href="mailto:hi@transformrevenueai.com" className="text-cyan-400 hover:underline">hi@transformrevenueai.com</a>.</p>
    </div>
);

const ContactContent = () => (
    <div>
        <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
        <p>We'd love to hear from you. The best way to reach our team is by email. Please click the link below to send us a message, and we'll get back to you as soon as possible.</p>
        <div className="mt-4">
            <a 
                href="mailto:hi@transformrevenueai.com" 
                className="text-cyan-400 text-lg hover:underline font-bold"
            >
                hi@transformrevenueai.com
            </a>
        </div>
    </div>
);

const Footer: React.FC<FooterProps> = ({ openModal }) => {
  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#0A0F2C] border-t border-gray-800/50 text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center">
              <TransformRevenueAILogo className="h-8 w-8" />
              <span className="ml-3 text-xl font-bold text-white font-['Satoshi']">Transform Revenue AI</span>
            </div>
            <div className="flex space-x-6 mt-4 sm:mt-0">
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-white transition-colors">Services</a>
                <a href="#real-impact" onClick={(e) => handleNavClick(e, 'real-impact')} className="hover:text-white transition-colors">Case Studies</a>
                <button onClick={() => openModal('Blog', <BlogContent />)} className="hover:text-white transition-colors">Blog</button>
                <button onClick={() => openModal('Careers', <CareersContent />)} className="hover:text-white transition-colors">Careers</button>
            </div>
        </div>
        <div className="mt-8 border-t border-gray-800/50 pt-8 flex flex-col-reverse sm:flex-row justify-between items-center text-sm gap-4">
          <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Transform Revenue AI. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2">
            <button onClick={() => openModal('Privacy Policy', <PrivacyPolicyContent />)} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => openModal('Terms of Service', <TermsOfServiceContent />)} className="hover:text-white transition-colors">Terms of Service</button>
            <button onClick={() => openModal('Contact Us', <ContactContent />)} className="hover:text-white transition-colors">hi@transformrevenueai.com</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;