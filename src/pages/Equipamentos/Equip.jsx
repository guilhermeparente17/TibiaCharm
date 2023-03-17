import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import Search from "../../components/Search/Search";
import Items from "../../data/Items";
import TibiaSelectors from "../../store/selectors";
import {
  EquipCards,
  EquipContainer,
  EquipDetailItem,
  EquipDetails,
  EquipDrops,
  EquipFooter,
  EquipHeader,
  EquipImage,
  EquipMoreItem,
  Span,
  EquipTitle,
  Title,
  EquipInfo,
  EquipName,
} from "./Equip.Elements";

export const Equip = () => {
  const charm = useSelector(TibiaSelectors.charm);
  const [valueSearch, setValueSearch] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectItem, setSelectItem] = useState({});

  const handleOpenModal = (item) => {
    setModalIsOpen(true);
    setSelectItem(item);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const filteredItems = Items.filter(
    (item) =>
      item.name.toLowerCase().includes(valueSearch.toLowerCase()) &&
      item.primarytype !== "Quest Items" &&
      item.primarytype !== "Healing Runes" &&
      item.primarytype !== "Dolls and Bears" &&
      item.primarytype !== "Tools" &&
      item.primarytype !== "Creature Products" &&
      item.primarytype !== "Liquids" &&
      item.primarytype !== "Metals" &&
      item.primarytype !== "Musical Instruments" &&
      item.primarytype !== "Valuables"
  );

  const limitedArray = filteredItems.slice(0, 54);

  return (
    <EquipContainer>
      <EquipHeader>
        <Title>Equipamentos</Title>

        <Search
          placeholder="Digite o nome de um item..."
          value={valueSearch}
          onChange={setValueSearch}
        />

        <Span>
          Seu plano rúnico: <span>{charm}</span>
        </Span>
      </EquipHeader>

      <EquipCards>
        {limitedArray.map((item, idx) => (
          <Card
            withButton={false}
            height={200}
            key={idx}
            item={item}
            index={idx}
            handleOpenModal={() => handleOpenModal(item)}
            handleCloseModal={handleCloseModal}
          />
        ))}
      </EquipCards>

      <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
        <EquipDetails>
          <EquipDetailItem>
            <EquipTitle>{selectItem.name}</EquipTitle>

            <EquipInfo>
              {selectItem.levelrequired && (
                <EquipName>
                  Level Requerido: {selectItem.levelrequired}
                </EquipName>
              )}
              {selectItem.imbueslots && (
                <EquipName>Slot de Imbui: {selectItem.imbueslots}</EquipName>
              )}
              {selectItem.resist && (
                <EquipName>Resistencia: {selectItem.resist}</EquipName>
              )}
              {(selectItem.attrib || selectItem.resist) && (
                <EquipName>
                  Atributos: {selectItem.attrib}{" "}
                  {selectItem.hpleech_am &&
                    `, quantidade de life leech: ${selectItem.hpleech_am},`}{" "}
                  {selectItem.hpleech_am &&
                    `chance de life leech: ${selectItem.hpleech_ch}.`}{" "}
                </EquipName>
              )}
              {selectItem.manacost && (
                <EquipName>Custo de mana: {selectItem.manacost}</EquipName>
              )}
              {selectItem.range && (
                <EquipName>Alcance: {selectItem.range}</EquipName>
              )}
              {selectItem.marketable && (
                <EquipName>
                  Comercializado no market:{" "}
                  {selectItem.marketable ? "Sim" : "Não"}
                </EquipName>
              )}
              {selectItem?.damagerange && (
                <EquipName>Dano Base: {selectItem.damagerange}</EquipName>
              )}
              {selectItem?.damagetype && (
                <EquipName>Tipo de Dano: {selectItem.damagetype}</EquipName>
              )}
              {selectItem.vocrequired && (
                <EquipName>Vocação: {selectItem.vocrequired}</EquipName>
              )}
              {selectItem.primarytype && (
                <EquipName>Tipo: {selectItem.primarytype}</EquipName>
              )}
            </EquipInfo>
          </EquipDetailItem>

          <EquipMoreItem>
            <EquipImage src={selectItem.image_url} />
            <EquipDrops>
              {selectItem.buyfrom && (
                <EquipName>Compra de: {selectItem.buyfrom}</EquipName>
              )}
              {selectItem.value && (
                <EquipName>Valor Aproximado: {selectItem.value}</EquipName>
              )}
              {selectItem.droppedby && (
                <EquipName>
                  Loot:{" "}
                  {selectItem.droppedby.map((item) => (
                    <EquipName>{item} - </EquipName>
                  ))}
                </EquipName>
              )}
            </EquipDrops>
          </EquipMoreItem>
        </EquipDetails>

        <EquipFooter>
          {" "}
          {selectItem.notes && <EquipName>Notas: {selectItem.notes}</EquipName>}
        </EquipFooter>
      </Modal>
    </EquipContainer>
  );
};
