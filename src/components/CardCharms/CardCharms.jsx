import React from "react";

import { CCContainer, CCName, CCImg } from "./CardCharms.Elements";

const CardCharms = ({ item }) => {
  return (
    <CCContainer>
      <CCImg />
      <CCName>{item.name}</CCName>
      <CCName>{item.type}</CCName>
      <CCName>{item.effect}</CCName>
      <CCName>{item.cost}</CCName>
    </CCContainer>
  );
};

export default CardCharms;
