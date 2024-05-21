// src/components/AutoType.js
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './AutoType.css'; // Create a CSS file if you have specific styles

const AutoType = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Programmer", "Developer", "Machine Learner"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    };

    const typed = new Typed(typedElement.current, options);

    // Clean up on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="auto-type" ref={typedElement}></span>;
};

export default AutoType;
