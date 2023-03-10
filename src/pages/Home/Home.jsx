import React from "react";

import { HomeContainer, HomeImage } from "./Home.Elements";
import Wallpaper from "../../assets/tibiaBack.jpg";

export const Home = () => {
  return (
    <HomeContainer>
      <HomeImage src={Wallpaper} />
    </HomeContainer>
  );
};
