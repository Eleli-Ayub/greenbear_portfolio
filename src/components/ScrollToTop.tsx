import { useEffect } from "react";
import { useLocation } from "react-router";
import { Scroll_I } from "../Types/Global";

const ScrollToTop = (props: Scroll_I) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
