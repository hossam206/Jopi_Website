import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";

const withLoader = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);
    // scroll to top
    const ScrollTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
        ScrollTop();
      }, 2000); // 2 seconds delay for demonstration

      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return <Loader />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoader;
