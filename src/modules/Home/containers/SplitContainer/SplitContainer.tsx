import React, { useEffect } from "react";
import gsap from "gsap";

const SplitContainer = () => {
  useEffect(() => {
    gsap.to(".first-split", { opacity: 1, x: 0, y: 0, duration: 1 });
    gsap.to(".second-split", { opacity: 1, x: 0, y: 0, duration: 1});
  }, []);

  return (
    <>
      <div className="split-container">
        <div className="first-split"></div>
        <div className="second-split"></div>
      </div>
    </>
  );
};

export default SplitContainer;
