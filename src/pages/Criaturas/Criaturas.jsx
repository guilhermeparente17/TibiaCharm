import React, { useState } from "react";

import {
  CriatContainer,
  CridHeader,
  Title,
  Span,
  CridCards,
} from "./Criaturas.Elements";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import criaturasExpand from "../../data/criaturasExpand";
import { useSelector } from "react-redux";
import TibiaSelectors from "../../store/selectors";
import ImagesCreatures from "../../data/ImagesCreatures";

const Criaturas = () => {
  const [valueSearch, setValueSearch] = useState("");
  const charm = useSelector(TibiaSelectors.charm);

  const criaturasComImagens = criaturasExpand.map((criatura) => {
    const url = ImagesCreatures.find(
      (url) => url?.name === criatura?.name
    )?.image_url;
    return { ...criatura, url };
  });

  const filteredItems = criaturasComImagens.filter(
    (item) =>
      item.name.toLowerCase().includes(valueSearch.toLowerCase()) &&
      item.bestiarylevel !== undefined
  );

  return (
    <CriatContainer>
      <CridHeader>
        <Title>Criaturas</Title>
        <Search value={valueSearch} onChange={setValueSearch} />
        <Span>
          Seu plano rúnico: <span>{charm}</span>
        </Span>
      </CridHeader>

      <CridCards>
        {filteredItems.map((item, idx) => (
          <Card withButton={true} key={idx} item={item} index={idx} />
        ))}
      </CridCards>
    </CriatContainer>
  );
};

export default Criaturas;
