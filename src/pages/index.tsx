import React from "react";

import HomeContent from "../sections/home/HomeContent";
import { ThemeWrapper } from "../theme";

const Home = () => {
  return (
    <>
      <title>TSS and Gatsby</title>

      <ThemeWrapper>
        <HomeContent />
      </ThemeWrapper>
    </>
  );
};

export default Home;
