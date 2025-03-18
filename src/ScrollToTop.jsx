import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ensure that the scroll position is reset to the top when navigating
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
