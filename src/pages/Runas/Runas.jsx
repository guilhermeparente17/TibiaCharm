import React from "react";

import {
  RunasContainer,
  RunasHeader,
  RunaImg,
  RunasDescription,
  RunaMsg,
  RunasTitle,
  RunasList,
} from "./Runas.Elements";

import Runa from "../../assets/gifs/Wound_Icon.gif";
import Charms from "../../data/Charms";
import CardCharms from "../../components/CardCharms/CardCharms";

export const Runas = () => {
  return (
    <RunasContainer>
      <RunasHeader>
        <RunaImg src={Runa} />
        <RunasDescription>
          Os Encantos são bônus que podem ser adquiridos, com o uso de Charm
          Points, para te auxiliar durante o combate contra determinada
          criatura. Uma entrada do Bestiário só pode ter um encanto atribuído
          simultaneamente. Para separar um encanto de uma entrada, você terá que
          pagar uma taxa em gold. O preço da remoção é calculado multiplicando o
          nível do personagem por 100. Jogadores Free Account podem atribuir até
          2 encantos a diferentes entradas ao mesmo tempo, enquanto jogadores
          Premium podem atribuir 6 encantos. A possibilidade permanente de
          desbloquear todos os encantos ao mesmo tempo pode ser comprada na
          Store por 450 Tibia Coins. Esta aquisição também reduz a quantidade de
          golds necessários por cada remoção de encanto em 25%.
          <RunaMsg>
            Texto obtido no site do{" "}
            <a
              target="_blank"
              href="https://www.tibiawiki.com.br/wiki/Cyclopedia#Besti%C3%A1rio"
              rel="noreferrer">
              TibiaWiki
            </a>
          </RunaMsg>
        </RunasDescription>
      </RunasHeader>

      <RunasTitle>Runas</RunasTitle>

      <RunasList>
        {Charms.map((item) => (
          <CardCharms item={item} />
        ))}
      </RunasList>
    </RunasContainer>
  );
};
