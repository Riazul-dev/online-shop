import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {

    const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // window.scrollTo({ top: 0, behavior: "scroll" });
  }, [pathname]);

  return null
}

export default ScrollToTop