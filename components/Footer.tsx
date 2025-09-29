import React from 'react';
import { TransformRevenueAILogo } from './Icons';
import { useTranslations } from '../hooks/useTranslations';
import { contactEmail, footerNavLinks, footerBottomLinks } from '../site.config';

interface FooterProps {
    openModal: (title: string, content: React.ReactNode) => void;
}

const Footer: React.FC<FooterProps> = ({ openModal }) => {
  const t = useTranslations();
  
  const modalContentMap: { [key: string]: React.FC } = {
      privacy: () => (
          <div>
            <h3 className="text-xl font-bold mb-2">{t.privacy_modal_h1}</h3>
            <p>{t.privacy_modal_p1}</p>
            <h3 className="text-xl font-bold mt-4 mb-2">{t.privacy_modal_h2}</h3>
            <p>{t.privacy_modal_p2}</p>
          </div>
      ),
      terms: () => (
          <div>
              <h3 className="text-xl font-bold mb-2">{t.terms_modal_h1}</h3>
              <p>{t.terms_modal_p1}</p>
              <h3 className="text-xl font-bold mt-4 mb-2">{t.terms_modal_h2}</h3>
              <p>{t.terms_modal_p2}</p>
          </div>
      ),
      blog: () => (
          <div>
              <h3 className="text-xl font-bold mb-2">{t.blog_modal_h1}</h3>
              <p>{t.blog_modal_p1}</p>
          </div>
      ),
      careers: () => (
          <div>
              <h3 className="text-xl font-bold mb-2">{t.careers_modal_h1}</h3>
              <p>{t.careers_modal_p1} <a href={`mailto:${contactEmail}`} className="text-cyan-400 hover:underline">{contactEmail}</a>.</p>
          </div>
      ),
      contact: () => (
          <div>
              <h3 className="text-xl font-bold mb-2">{t.contact_modal_h1}</h3>
              <p>{t.contact_modal_p1}</p>
              <div className="mt-4">
                  <a 
                      href={`mailto:${contactEmail}`} 
                      className="text-cyan-400 text-lg hover:underline font-bold"
                  >
                      {contactEmail}
                  </a>
              </div>
          </div>
      ),
  };

  const modalTitleMap: { [key: string]: keyof typeof t } = {
    privacy: "privacy_modal_title",
    terms: "terms_modal_title",
    blog: "blog_modal_title",
    careers: "careers_modal_title",
    contact: "contact_modal_title",
  }

  const handleNavClick = (event: React.MouseEvent, type: string, target: string) => {
    event.preventDefault();
    if (type === 'link') {
        const element = document.getElementById(target.substring(1)); // remove #
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    } else if (type === 'modal') {
        const ContentComponent = modalContentMap[target];
        const titleKey = modalTitleMap[target];
        if (ContentComponent && titleKey) {
            openModal(t[titleKey], <ContentComponent />);
        }
    }
  };

  const renderLink = (link: { type: string, target: string, key: string }) => {
      const text = t[link.key as keyof typeof t];
      if (link.type === 'link') {
        return <a href={link.target} onClick={(e) => handleNavClick(e, link.type, link.target)} className="hover:text-white transition-colors">{text}</a>
      }
      return <button onClick={(e) => handleNavClick(e, link.type, link.target)} className="hover:text-white transition-colors">{text}</button>
  }

  return (
    <footer className="border-t border-gray-800/50 text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center">
              <TransformRevenueAILogo className="h-8 w-8" />
              <span className="ml-3 text-xl font-bold text-white font-['Satoshi']">Transform Revenue AI</span>
            </div>
            <div className="flex space-x-6 mt-4 sm:mt-0">
                {footerNavLinks.map(link => (
                    <React.Fragment key={link.key}>
                        {renderLink(link)}
                    </React.Fragment>
                ))}
            </div>
        </div>
        <div className="mt-8 border-t border-gray-800/50 pt-8 flex flex-col-reverse sm:flex-row justify-between items-center text-sm gap-4">
          <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Transform Revenue AI. {t.footer_copyright}</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2">
            {footerBottomLinks.map(link => (
                <React.Fragment key={link.key}>
                    {renderLink(link)}
                </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;