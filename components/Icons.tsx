import React from 'react';

interface IconProps {
  className?: string;
}

export const TransformRevenueAILogo: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
        <defs>
            {/* Gradients to simulate 3D faceting with a light source from top-left */}
            <linearGradient id="logoGradientLeft" x1="0%" y1="0%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#A0FFFF" />
                <stop offset="100%" stopColor="var(--quantum-blue)" />
            </linearGradient>
            <linearGradient id="logoGradientRight" x1="100%" y1="0%" x2="0%" y2="50%">
                <stop offset="0%" stopColor="#12A8CD" />
                <stop offset="100%" stopColor="#0B5B6C" />
            </linearGradient>

            {/* The base 'A' shape, defined once for reuse. The inner triangle is a cutout. */}
            <path id="logoAShape" fillRule="evenodd" d="M50 10 L100 90 L0 90 Z M50 45 L25 70 L75 70 Z" />
            
            {/* Clipping paths to split the main shape into left and right facets */}
            <clipPath id="clipLeft">
                <rect x="0" y="0" width="50" height="100" />
            </clipPath>
            <clipPath id="clipRight">
                <rect x="50" y="0" width="50" height="100" />
            </clipPath>

            {/* A more sophisticated glow filter for a premium, futuristic look */}
            <filter id="logoGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
                <feFlood floodColor="var(--quantum-blue)" floodOpacity="0.8" result="color" />
                <feComposite in="color" in2="blur" operator="in" result="glow" />
                <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>

        <g filter="url(#logoGlow)">
            {/* A subtle, dark layer translated down to create a 3D depth effect */}
            <use href="#logoAShape" fill="#06091c" transform="translate(0, 2)" />

            {/* The main, visible shape, constructed from two clipped halves to create facets */}
            <g>
                {/* Right facet (darker, away from the light source) */}
                <g clipPath="url(#clipRight)">
                    <use href="#logoAShape" fill="url(#logoGradientRight)" />
                </g>
                {/* Left facet (lighter, facing the light source) */}
                <g clipPath="url(#clipLeft)">
                    <use href="#logoAShape" fill="url(#logoGradientLeft)" />
                </g>
            </g>
        </g>
    </svg>
);

export const GlobeIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <defs>
            <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--quantum-blue)" />
                <stop offset="100%" stopColor="#12A8CD" />
            </linearGradient>
        </defs>
        {/* The main ocean circle, filled with the site's signature gradient */}
        <circle cx="12" cy="12" r="10" fill="url(#oceanGradient)" />
        {/* Abstract, stylized landmasses, now in a vibrant green */}
        <path 
            fill="#4ade80"
            fillOpacity="0.8"
            d="M12.5,3.5 C15,4 16.5,6.5 16.5,8.5 C16.5,10 15,11 14,11.5 C13.5,13 14,15 15.5,16 C16.5,16.5 17,17.5 17,18.5 C16.5,20 14,21 12,20.5 C10,21 7.5,20 7,18.5 C6.5,17.5 7,16.5 8,16 C9.5,15 10.5,13 10,11.5 C9,11 7.5,10 7.5,8.5 C7.5,6.5 9,4 11.5,3.5 C11.8,3.4 12.2,3.4 12.5,3.5 Z M8.5,7 C8,7.3 7.8,8.1 8.1,8.6 C8.6,9.4 9.5,9.8 10.5,9.5 C10.9,9.4 11.2,8.9 11.1,8.5 C10.9,8 10.4,7.8 10,7.8 C9.5,7.9 9,7.6 8.5,7 Z M15.5,13 C15.1,13 14.8,13.4 14.9,13.8 C15.1,14.5 14.8,15.2 14.2,15.6 C13.8,15.9 13.9,16.5 14.3,16.8 C14.7,17.1 15.3,17 15.6,16.6 C16.6,15.8 17,14.5 16.5,13.5 C16.3,13.2 15.9,13 15.5,13 Z"
        />
    </svg>
);

export const BrainIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 4.75h.008v.008H12v-.008z" />
  </svg>
);

export const ChipIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3h6l-1 5H10L9 3zM5 8h14v10H5V8zm4 10v-2m6 2v-2M5 10h2m10 0h2" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
  </svg>
);

export const FlowchartIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

export const AnalyticsIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
    </svg>
);

export const SecurityIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.955a11.955 11.955 0 019-2.611m1.075-10.374c.27-.174.556-.326.85-.45A12.02 12.02 0 0121 12.044c0 4.03-1.49 7.68-4 10.374M12 21c-2.485 0-4.786-.88-6.618-2.386" />
  </svg>
);

export const OpenSourceIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const RevenueIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

export const ExpertIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

export const LinkedInIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
    </svg>
);

export const TwitterIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export const GithubIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
    </svg>
);

// For Retail: A box representing inventory/products
export const RetailIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4-8-4m16 0v10l-8 4-8-4V7" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22V11" />
  </svg>
);

// For Healthcare: A cross inside a heartbeat, representing clinical data
export const HealthcareIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v6m3-3h-6" />
  </svg>
);

// For Fintech: A shield representing security in finance
export const FintechIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.955a11.955 11.955 0 019-2.611m-1.426-4.962a3.5 3.5 0 114.95 0" />
  </svg>
);