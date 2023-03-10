import React from "react";
import Button from "../Button/Button";
import imagesCreatures from "../ImagesCreatues/ImagesCreatures";

import {
  CardContainer,
  CardTitle,
  CardDetails,
  CardItem,
  CardImage,
} from "./Card.Elements";

const Card = ({ item }) => {
  return (
    <CardContainer>
      {/* <CardImage src={item.name === "Amazon" && Amazon} /> */}
      <CardImage src={imagesCreatures(item.name)} />

      <CardTitle>{item.name}</CardTitle>

      <CardDetails>
        <CardItem>Hp: {item.hp}</CardItem>
        <CardItem>
          charm: {item.bestiarylevel ? item.bestiarylevel : "???"}
        </CardItem>
        <CardItem>Xp 100%: {item.exp}</CardItem>
        <CardItem>Xp 150%: {item.exp * 0.15}</CardItem>
      </CardDetails>

      <Button text="Adicionar ao plano rúnico" />
    </CardContainer>
  );
};

export default Card;
