import React from "react";
import { useDispatch } from "react-redux";
import { TibiaActions } from "../../store/rootReducer";
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
  const dispatch = useDispatch();

  const charms = (dificuldade) => {
    if (dificuldade === "Harmless") {
      return 1;
    } else if (dificuldade === "Trivial") {
      return 5;
    } else if (dificuldade === "Easy") {
      return 15;
    } else if (dificuldade === "Medium") {
      return 25;
    } else if (dificuldade === "Hard") {
      return 50;
    } else {
      return 100;
    }
  };

  const handleCharm = (payload) => {
    dispatch(TibiaActions.setCharm(payload));
  };

  return (
    <CardContainer>
      {/* <CardImage src={item.name === "Amazon" && Amazon} /> */}
      <CardImage src={imagesCreatures(item.name)} />

      <CardTitle>{item.name}</CardTitle>

      <CardDetails>
        <CardItem>Hp: {item.hp}</CardItem>
        <CardItem>charm: {charms(item.bestiarylevel)}</CardItem>
        <CardItem>Xp 100%: {item.exp}</CardItem>
        <CardItem>Xp 150%: {parseInt(item.exp * 1.5)}</CardItem>
      </CardDetails>

      <Button
        text="Adicionar ao plano rúnico"
        handleClick={() => handleCharm(charms(item.bestiarylevel))}
      />
    </CardContainer>
  );
};

export default Card;
