import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    const container = document.querySelector('.scrollbar-hide'); // target your scrollable container
    if (container) {
      container.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;