import { translations } from './translations';

/**
 * =================================================================================
 * SITE CONFIGURATION
 * =================================================================================
 * This file contains the central configuration for the website.
 * Editing this file is the easiest way to update key information like
 * contact details, navigation links, and SEO settings.
 */

/**
 * The list of supported languages.
 * This is dynamically generated from the translations file.
 * To add a new language, you only need to add it to `translations.ts`.
 */
export const supportedLanguages = Object.keys(translations) as (keyof typeof translations)[];

/**
 * A mapping from language codes to their full names.
 * This is used for display purposes in the language selector.
 */
export const languageNames: { [key in typeof supportedLanguages[number]]: string } = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  pt: 'Português',
};


/**
 * Primary contact email for the business.
 * Used in the footer and for career inquiries.
 */
export const contactEmail = "hi@transformrevenueai.com";


/**
 * The endpoint for the contact form submissions.
 * Replace 'YOUR_FORM_ID' with the actual ID from your Formspree account.
 * This is used in the CTA component.
 */
export const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID";


/**
 * SEO (Search Engine Optimization) configuration.
 * These values are used to generate meta tags for the site, which are important
 * for how the site appears in search engine results and when shared on social media.
 */
export const seoConfig = {
    title: "Transform Revenue AI - Purpose-Built AI Agents for Business",
    description: "Transform your business with purpose-built AI agents and custom GPT solutions. We build intelligent systems that drive revenue, not just automation.",
    keywords: ["Generative AI", "AI Agents", "Custom GPT", "AI Solutions", "IT Consulting", "Revenue Growth", "Business Automation", "AI Strategy", "Enterprise AI"],
    url: "https://transformrevenueai.com/", // The canonical URL for the website.
};


/**
 * Navigation links that appear in the website's header.
 * - `href`: The ID of the section to scroll to (e.g., '#services').
 * - `key`: The translation key for the link's text (from `translations.ts`).
 * To add, remove, or reorder links, simply modify this array.
 */
export const headerNavLinks = [
    { href: "#services", key: "nav_services" },
    { href: "#real-impact", key: "nav_case_studies" },
    { href: "#process", key: "nav_process" },
    { href: "#differentiators", key: "nav_why_us" },
];


/**
 * Navigation links that appear in the website's footer.
 * - `type`: 'link' for internal page scroll, 'modal' to open a popup.
 * - `target`: The section ID for 'link', or a unique ID for 'modal'.
 * - `key`: The translation key for the link's text.
 * To add or remove footer links, modify this array.
 */
export const footerNavLinks = [
    { type: 'link', target: "#services", key: "nav_services" },
    { type: 'link', target: "#real-impact", key: "nav_case_studies" },
    { type: 'modal', target: "blog", key: "footer_nav_blog" },
    { type: 'modal', target: "careers", key: "footer_nav_careers" },
];

/**
 * Legal and contact links that appear at the bottom of the footer.
 * The structure is similar to `footerNavLinks`.
 */
export const footerBottomLinks = [
    { type: 'modal', target: "privacy", key: "footer_nav_privacy" },
    { type: 'modal', target: "terms", key: "footer_nav_terms" },
    { type: 'modal', target: "contact", key: "footer_contact_email" },
];