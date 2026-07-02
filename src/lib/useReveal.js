import React from 'react';

// Adds `.is-visible` to any [data-animate] element as it scrolls into view.
// Re-runs on route change so freshly mounted pages animate too.
export function useReveal(dep) {
  React.useEffect(() => {
    const items = Array.from(document.querySelectorAll('[data-animate]:not(.is-visible)'));
    if (!items.length) return undefined;

    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.16 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [dep]);
}
