import React, { useEffect, useState } from "react";
import {
  Item,
  SetArm,
  SetArmor,
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
  SetArmorDiv,
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
  const [def, setDef] = useState({});
  const [defPhysical, setDefPhysical] = useState();

  const filteredItems = Items.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );

  const handleSelectItem = (item) => {
    const status = items.some((op) => op.primarytype === item.primarytype);
    console.log(status);

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

  const physical = items
    .filter((objeto) => objeto.resist?.includes("physical"))
    .map((objeto) => Number(objeto.resist?.match(/\d+/)[0]));

  const totalDefPhysical = physical.reduce((total, value) => total + value, 0);

  useEffect(() => {
    console.log(items);
    items.map((item) => item.primarytype === "Helmets" && setHelmet(item));
    items.map((item) => item.primarytype === "Armors" && setArmor(item));
    items.map((item) => item.primarytype === "Wands" && setArm(item));
    items.map((item) => item.primarytype === "Legs" && setLeg(item));
    items.map((item) => item.primarytype === "Boots" && setShoes(item));
    items.map(
      (item) =>
        (item.primarytype === "Spellbooks" || item.primarytype === "Shields") &&
        setDef(item)
    );
    console.log(totalDefPhysical);
    setMl(totalMagicLevel);
    setDefPhysical(totalDefPhysical);
  }, [items, totalMagicLevel, helmet, armor, totalDefPhysical]);

  const removeArm = (arm) => {
    console.log("remover items", arm);
    items.pop(arm);
    setArm({});
    console.log(items);
  };

  return (
    <SetContainer>
      <SetFilters>
        <SetSearch value={value} onChange={(e) => setValue(e.target.value)} />
        <SetItems>
          {filteredItems.map((item, idx) => (
            <Item key={idx} onClick={() => handleSelectItem(item)}>
              {item.name}
            </Item>
          ))}
        </SetItems>
      </SetFilters>

      <SetConjunto>
        <SetHeader src={helmet?.image_url} />
        <SetBody>
          <SetArm onClick={() => removeArm(arm)} src={arm.image_url} />
          {armor.length > 0 ? (
            <SetArmor src={armor.image_url} />
          ) : (
            <SetArmorDiv />
          )}
          <SetDef src={def.image_url} />
        </SetBody>
        <SetLeg src={leg.image_url} />
        <SetShoes src={shoes.image_url} />
      </SetConjunto>

      <SetAtrib>
        {ml > 0 && <SetSpan>Magic Level: {ml}</SetSpan>}
        {defPhysical > 0 && (
          <SetSpan>Resistencia Física: {defPhysical}%</SetSpan>
        )}
      </SetAtrib>
    </SetContainer>
  );
};

export default Sets;
