import React, { useEffect, useState } from "react";
import {
  Item,
  SetArm,
  SetArmor,
  SetDivPadrao,
  SetAtrib,
  SetBody,
  SetConjunto,
  SetContainer,
  SetDef,
  SetFilters,
  SetHeader,
  SetItems,
  SetLeg,
  SetSearch,
  SetShoes,
  SetSpan,
  SetWrap,
  SetAmulet,
  SetRing,
} from "./Sets.Elements";
import Items from "../../data/Items";

const Sets = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const [ml, setMl] = useState(0);
  const [helmet, setHelmet] = useState({});
  const [armor, setArmor] = useState({});
  const [arm, setArm] = useState({});
  const [leg, setLeg] = useState({});
  const [shoes, setShoes] = useState({});
  const [amulet, setAmulet] = useState({});
  const [def, setDef] = useState({});
  const [ring, setRing] = useState({});

  const filteredItems = Items.filter(
    (item) =>
      item.name.toLowerCase().includes(value.toLowerCase()) &&
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

  const handleSelectItem = (item) => {
    const status = items.some((op) => op.primarytype === item.primarytype);

    if (!status) {
      setItems([...items, item]);
    }
  };

  const magicLevels = items
    .filter((objeto) => objeto.attrib?.includes("magic level"))
    .map((objeto) => Number(objeto.attrib?.match(/\d+/)[0]));

  const totalMagicLevel = magicLevels.reduce(
    (total, value) => total + value,
    0
  );

  useEffect(() => {
    items.map((item) => item.primarytype === "Helmets" && setHelmet(item));
    items.map((item) => item.primarytype === "Armors" && setArmor(item));
    items.map((item) => item.primarytype === "Rings" && setRing(item));
    items.map((item) => item.primarytype === "Wands" && setArm(item));
    items.map((item) => item.primarytype === "Sword Weapons" && setArm(item));
    items.map((item) => item.primarytype === "Legs" && setLeg(item));
    items.map((item) => item.primarytype === "Boots" && setShoes(item));
    items.map(
      (item) => item.primarytype === "Amulets and Necklaces" && setAmulet(item)
    );
    items.map(
      (item) =>
        (item.primarytype === "Spellbooks" || item.primarytype === "Shields") &&
        setDef(item)
    );
    setMl(totalMagicLevel);
  }, [
    items,
    totalMagicLevel,
    helmet,
    armor,
    arm,
    def,
    leg,
    shoes,
    amulet,
    ring,
  ]);

  const removeArm = (selectItem) => {
    const novoArray = items.filter((item) => item.name !== selectItem.name);

    if (selectItem.primarytype !== arm.primaryType) {
      setArm({});
    }
    if (selectItem.primarytype !== armor.primaryType) {
      setArmor({});
    }
    if (selectItem.primarytype !== def.primaryType) {
      setDef({});
    }
    if (selectItem.primarytype !== helmet.primaryType) {
      setHelmet({});
    }
    if (selectItem.primarytype !== leg.primaryType) {
      setLeg({});
    }
    if (selectItem.primarytype !== shoes.primaryType) {
      setShoes({});
    }
    if (selectItem.primarytype !== amulet.primaryType) {
      setAmulet({});
    }
    if (selectItem.primarytype !== ring.primaryType) {
      setRing({});
    }
    setItems(novoArray);
  };

  const resistances = {
    energy: 0,
    physical: 0,
    ice: 0,
    death: 0,
    holy: 0,
    fire: 0,
    earth: 0,
    // adicione mais tipos de resistência, se necessário
  };

  items.forEach((item) => {
    item.resist?.split(",").forEach((resistance) => {
      const type = resistance.trim().split(" ")[0];
      const value = Number(resistance.trim().split(" ")[1].replace("%", ""));
      resistances[type] += value;
    });
  });

  // console.log(skills);

  // Agora você pode acessar o valor de cada tipo de resistência pelo seu nome de chave:
  const totalEnergy = resistances.energy;
  const totalFisico = resistances.physical;
  const totalIce = resistances.ice;
  const totalDeath = resistances.death;
  const totalHoly = resistances.holy;
  const totalFire = resistances.fire;
  const totalEarth = resistances.earth;

  return (
    <SetContainer>
      <SetFilters>
        <SetSearch
          placeholder="Digite um item"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <SetItems>
          {limitedArray.map((item, idx) => (
            <Item key={idx} onClick={() => handleSelectItem(item)}>
              {item.name}
            </Item>
          ))}
        </SetItems>
      </SetFilters>

      <SetConjunto>
        <SetWrap>
          {amulet.image_url ? (
            <SetAmulet
              onClick={() => removeArm(amulet)}
              src={amulet?.image_url}
            />
          ) : (
            <SetDivPadrao height="150px" />
          )}

          {helmet.image_url ? (
            <SetHeader
              onClick={() => removeArm(helmet)}
              src={helmet?.image_url}
            />
          ) : (
            <SetDivPadrao height="150px" margin="0 20px" />
          )}

          <SetDivPadrao height="150px" />
        </SetWrap>

        <SetBody>
          {arm.image_url ? (
            <SetArm onClick={() => removeArm(arm)} src={arm.image_url} />
          ) : (
            <SetDivPadrao />
          )}

          {armor.image_url ? (
            <SetArmor onClick={() => removeArm(armor)} src={armor.image_url} />
          ) : (
            <SetDivPadrao margin="10px 20px" />
          )}

          {def.image_url ? (
            <SetDef onClick={() => removeArm(def)} src={def.image_url} />
          ) : (
            <SetDivPadrao />
          )}
        </SetBody>
        <SetWrap>
          {ring.image_url ? (
            <SetRing onClick={() => removeArm(ring)} src={ring.image_url} />
          ) : (
            <SetDivPadrao margin="0px 0px 10px" />
          )}

          {leg.image_url ? (
            <SetLeg onClick={() => removeArm(leg)} src={leg.image_url} />
          ) : (
            <SetDivPadrao margin="0px 20px 10px" />
          )}

          <SetDivPadrao margin="0px 0px 10px" />
        </SetWrap>
        {shoes.image_url ? (
          <SetShoes onClick={() => removeArm(shoes)} src={shoes.image_url} />
        ) : (
          <SetDivPadrao height="150px" />
        )}
      </SetConjunto>

      <SetAtrib>
        {ml > 0 && <SetSpan>Magic Level: {ml}</SetSpan>}
        {(totalFisico > 0 || totalFisico < 0) && (
          <SetSpan>Resistencia Física: {totalFisico}%</SetSpan>
        )}
        {(totalDeath > 0 || totalDeath < 0) && (
          <SetSpan>Resistencia de Morte: {totalDeath}%</SetSpan>
        )}
        {(totalEarth > 0 || totalEarth < 0) && (
          <SetSpan>Resistencia de Terra: {totalEarth}%</SetSpan>
        )}
        {(totalFire > 0 || totalFire < 0) && (
          <SetSpan>Resistencia de Fogo: {totalFire}%</SetSpan>
        )}
        {(totalHoly > 0 || totalHoly < 0) && (
          <SetSpan>Resistencia de Sagrado: {totalHoly}%</SetSpan>
        )}
        {(totalIce > 0 || totalIce < 0) && (
          <SetSpan>Resistencia de Gelo: {totalIce}%</SetSpan>
        )}
        {(totalEnergy > 0 || totalEnergy < 0) && (
          <SetSpan>Resistencia de Energia: {totalEnergy}%</SetSpan>
        )}
      </SetAtrib>
    </SetContainer>
  );
};

export default Sets;
