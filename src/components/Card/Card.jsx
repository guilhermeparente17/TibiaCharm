import React from "react";
import { useDispatch } from "react-redux";
import { TibiaActions } from "../../store/rootReducer";
import Button from "../Button/Button";

import {
  CardContainer,
  CardTitle,
  CardDetails,
  CardItem,
  CardImage,
} from "./Card.Elements";

const Card = ({
  item,
  height,
  withButton,
  handleCloseModal,
  handleOpenModal,
}) => {
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

  const handleCharm = (item, payload) => {
    dispatch(TibiaActions.add_Charm(payload));
    dispatch(TibiaActions.addCriatura(item));
  };

  return (
    <CardContainer height={height}>
      <CardImage src={item.image_url || item.url} />

      <CardTitle>{item.name}</CardTitle>

      {withButton && (
        <CardDetails>
          <CardItem>Hp: {item.hp}</CardItem>
          <CardItem>charm: {charms(item.bestiarylevel)}</CardItem>
          <CardItem>Xp 100%: {item.exp}</CardItem>
          <CardItem>Xp 150%: {parseInt(item.exp * 1.5)}</CardItem>
        </CardDetails>
      )}

      {withButton ? (
        <Button
          text="Adicionar ao plano rúnico"
          handleClick={() => handleCharm(item, charms(item.bestiarylevel))}
        />
      ) : (
        <Button handleClick={() => handleOpenModal()} text="Visualizar" />
      )}
    </CardContainer>
  );
};

export default Card;
