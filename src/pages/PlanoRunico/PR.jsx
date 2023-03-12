import React, { useState } from "react";
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
  const [charms, setCharms] = useState(Charms);

  const handleZerarCharm = () => {
    dispatch(TibiaActions.zerarCharm(0));
  };

  const [myRunes, setMyRunes] = useState([]);

  const addRune = (rune) => {
    dispatch(TibiaActions.add_Charm(-rune.cost));
    const newArray = charms.filter((item) => item.name !== rune.name);
    setCharms(newArray);
    setMyRunes([...myRunes, rune]);
  };

  const removeRune = (rune) => {
    dispatch(TibiaActions.add_Charm(+rune.cost));
    setMyRunes(myRunes.filter((item) => item !== rune));
    setCharms([...charms, rune]);
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
          <PRPontos>
            Pontos Rúnicos: <span>{charm}</span>
          </PRPontos>
          <PRButton onClick={() => handleZerarCharm()}>Zerar</PRButton>
        </PRPontosContainer>

        <PRButtonList>Listar Plano Rúnico</PRButtonList>
      </PROptions>

      <ListRunas>
        {myRunes.map((item, idx) => (
          <CR
            key={idx}
            item={item}
            onClick={() => removeRune(item)}
            podeComprar={true}
          />
        ))}
      </ListRunas>

      <ListRunas>
        {charms.map((item, idx) => (
          <CR
            key={idx}
            item={item}
            onClick={() => addRune(item)}
            podeComprar={charm >= item.cost}
          />
        ))}
      </ListRunas>
    </PRContainer>
  );
};

export default PR;
