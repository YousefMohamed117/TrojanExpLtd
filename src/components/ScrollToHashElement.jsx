import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    handleScroll();

    // Add a listener to handle hash changes from other triggers
    window.addEventListener("hashchange", handleScroll);

    return () => {
      window.removeEventListener("hashchange", handleScroll);
    };
  }, [hash]);
};

export default useScrollToHash;
