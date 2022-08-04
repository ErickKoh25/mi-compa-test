import React from "react";
import { SplitContainer } from "./containers/SplitContainer";
import { FirstContainer } from "./containers/FirstContainer";
import { SecondContainer } from "./containers/SecondContainer";
import { ThirdContainer } from "./containers/ThirdContainer";
import { FourthContainer } from "./containers/FourthContainer";
import { FifthContainer } from "./containers/FifthContainer";

const Home = () => {
  return (
    <>
      <SplitContainer />
      <FirstContainer />
      <SecondContainer />
      <ThirdContainer />
      <FourthContainer />
      <FifthContainer />
    </>
  );
};

export default Home;
