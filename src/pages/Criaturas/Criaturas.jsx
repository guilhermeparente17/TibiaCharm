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

const Criaturas = () => {
  const criaturasExpandidas = criaturasExpand;
  const [valueSearch, setValueSearch] = useState("");
  const charm = useSelector(TibiaSelectors.charm);

  const handleTeste = () => {};

  const filteredItems = criaturasExpandidas.filter(
    (item) =>
      item.name.toLowerCase().includes(valueSearch.toLowerCase()) &&
      item.bestiarylevel !== undefined
  );

  return (
    <CriatContainer>
      <CridHeader>
        <Title>Criaturas</Title>
        <Search
          value={valueSearch}
          onChange={setValueSearch}
          handleTeste={handleTeste}
        />
        <Span>Seu plano rúnico: {charm}</Span>
      </CridHeader>

      <CridCards>
        {filteredItems.map((item, idx) => (
          <Card key={idx} item={item} index={idx} />
        ))}
      </CridCards>
    </CriatContainer>
  );
};

export default Criaturas;