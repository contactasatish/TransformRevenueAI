import { useEffect } from 'react';

/**
 * A custom hook to manage scroll-reveal animations using Intersection Observer.
 * @param selector - The CSS selector for elements to be animated.
 * @param threshold - The percentage of the element that must be visible to trigger the animation.
 */
export const useScrollReveal = (selector: string, threshold: number = 0.1) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
      }
    );

    // Initial setup for elements to be observed
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      el.classList.add('scroll-reveal');
      observer.observe(el);
    });

    // Cleanup function to unobserve elements when the component unmounts
    return () => {
      elements.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, [selector, threshold]);
};