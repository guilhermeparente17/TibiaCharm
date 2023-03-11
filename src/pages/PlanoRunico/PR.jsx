import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CR from "../../components/CardRunas/CR";
import Charms from "../../data/Charms";
import { TibiaActions } from "../../store/rootReducer";
import TibiaSelectors from "../../store/selectors";
import {
  ListRunas,
  PRButton,
  PRButtonList,
  PRContainer,
  PRHeader,
  PROptions,
  PRPontos,
  PRPontosContainer,
  PRText,
} from "./PR.Elements";

const PR = () => {
  const charm = useSelector(TibiaSelectors.charm);
  const dispatch = useDispatch();

  console.log(charm);

  const handleZerarCharm = () => {
    dispatch(TibiaActions.zerarCharm(0));
  };

  return (
    <PRContainer>
      <PRHeader>
        <PRText>
          O Plano Rúnico é um sistema para ajudar os tibianos a conquisar suas
          futuras runas. Ele consiste em você adicionar os monstros que você já
          caçou e ver quantos CharmpPoints você já adquiriu para obter suas
          runas. Logo abaixo você terá sua pontuação no Plano Rúnico, um botão
          para apagar seus pontos e recomeçar do 0, um botão para listar todas
          as crituras que estão no seu plano rúnico e as runas que poderão
          comprar com seus pontos rúnicos. Divirta-se.
        </PRText>
      </PRHeader>

      <PROptions>
        <PRPontosContainer>
          <PRPontos>Pontos Rúnicos: {charm}</PRPontos>
          <PRButton onClick={() => handleZerarCharm()}>Zerar</PRButton>
        </PRPontosContainer>

        <PRButtonList>Listar Plano Rúnico</PRButtonList>
      </PROptions>

      <ListRunas>
        {Charms.map((item) => (
          <CR item={item} />
        ))}
      </ListRunas>
    </PRContainer>
  );
};

export default PR;
