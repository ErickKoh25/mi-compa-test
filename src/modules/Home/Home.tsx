import React, { useEffect } from "react";
import { SplitContainer } from "./containers/SplitContainer";
import { FirstContainer } from "./containers/FirstContainer";
import { SecondContainer } from "./containers/SecondContainer";
import { ThirdContainer } from "./containers/ThirdContainer";
import { FourthContainer } from "./containers/FourthContainer";
import { FifthContainer } from "./containers/FifthContainer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Home = () => {

  useEffect(() => {

    /// EFECTOS CON GSAP ///
    const timeline = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);

    // FirstContainer
    timeline.to(".img-user", { opacity: 1, x: 0, y: 0, duration: 1 },1);
    timeline.to(".img-platina", { opacity: 1, x: 0, y: 0, duration: 1},"<");
    timeline.to(".img-tsuru", { opacity: 1, x: 0, y: 0, duration: 1},"<");
    timeline.to(".hire-here", { opacity: 1, x: 0, y: 0, duration: 1},"<");

    // SecondContainer
    gsap.to(".cont-icon-1", {
      scrollTrigger: {
        trigger: ".cont-icon-1",
        toggleActions: "restart none reverse none"
      },
      opacity: 1,
      y: "0",
      duration: 1
    });
    gsap.to(".cont-icon-2", {
      scrollTrigger: {
        trigger: ".cont-icon-2",
        toggleActions: "restart none reverse none"
      },
      opacity: 1,
      y: "0",
      duration: 1
    });
    gsap.to(".cont-icon-3", {
      scrollTrigger: {
        trigger: ".cont-icon-3",
        toggleActions: "restart none reverse none"
      },
      opacity: 1,
      y: "0",
      duration: 1
    });

    /// Third Container ///
    gsap.to(".gsap-flag", {
      scrollTrigger: {
        trigger: ".gsap-flag",
        start: "top center",
        toggleActions: "restart none reverse none"
      },
      opacity: 1,
      x: "0%",
      duration: 1
    });
    gsap.to(".gsap-polizas", {
      scrollTrigger: {
        trigger: ".gsap-polizas",
        start: "top center",
        toggleActions: "restart none reverse none"
      },
      opacity: 1,
      x: "0%",
      duration: 1
    });

    // FourthContainer
    gsap.to(".cont-best-package", {
      scrollTrigger: {
        trigger: ".cont-best-package",
        toggleActions: "restart none reverse none"
      },
      opacity: 1,
      y: "0",
      duration: 1
    })
    gsap.to(".cont-img-news", {
      scrollTrigger: {
        trigger: ".cont-img-news",
        toggleActions: "restart none reverse none"
      },
      opacity: 1,
      y: "0",
      duration: 1
    })
  
  }, []);
  return (
    <div className="effects">
      <SplitContainer />
      <FirstContainer />
      <SecondContainer />
      <ThirdContainer />
      <FourthContainer />
      <FifthContainer />
    </div>
  );
};

export default Home;
