import React from "react";
import { CRContainer, CRImage, CRName, CRValue } from "./CR.Elements";
import Wound from "../../assets/gifs/Wound_Icon.gif";
import Adrenaline from "../../assets/gifs/Adrenaline_Burst_Icon.gif";
import Bless from "../../assets/gifs/Bless_Icon.gif";
import Cleanse from "../../assets/gifs/Cleanse_Icon.gif";
import Cripple from "../../assets/gifs/Cripple_Icon.gif";
import Curse from "../../assets/gifs/Curse_Icon.gif";
import Divine_Wrath from "../../assets/gifs/Divine_Wrath_Icon.gif";
import Dodge from "../../assets/gifs/Dodge_Icon.gif";
import Enflame from "../../assets/gifs/Enflame_Icon.gif";
import Freeze from "../../assets/gifs/Freeze_Icon.gif";
import Gut from "../../assets/gifs/Gut_Icon.gif";
import Low_Blow from "../../assets/gifs/Low_Blow_Icon.gif";
import Numb from "../../assets/gifs/Numb_Icon.gif";
import Parry from "../../assets/gifs/Parry_Icon.gif";
import Poison from "../../assets/gifs/Poison_Icon.gif";
import Scavenge from "../../assets/gifs/Scavenge_Icon.gif";
import Vampiric_Embrace from "../../assets/gifs/Vampiric_Embrace_Icon.gif";
import Void from "../../assets/gifs/Void's_Call_Icon.gif";
import Zap from "../../assets/gifs/Zap_Icon.gif";
import { useSelector } from "react-redux";
import TibiaSelectors from "../../store/selectors";

const CR = ({ item, onClick, podeComprar, ...rest }) => {
  const handleRunasImg = () => {
    if (item.name === "Wound") {
      return Wound;
    } else if (item.name === "Adrenaline Burst") {
      return Adrenaline;
    } else if (item.name === "Bless") {
      return Bless;
    } else if (item.name === "Cleanse") {
      return Cleanse;
    } else if (item.name === "Cripple") {
      return Cripple;
    } else if (item.name === "Cripple") {
      return Cripple;
    } else if (item.name === "Curse") {
      return Curse;
    } else if (item.name === "Divine Wrath") {
      return Divine_Wrath;
    } else if (item.name === "Dodge") {
      return Dodge;
    } else if (item.name === "Enflame") {
      return Enflame;
    } else if (item.name === "Freeze") {
      return Freeze;
    } else if (item.name === "Gut") {
      return Gut;
    } else if (item.name === "Low Blow") {
      return Low_Blow;
    } else if (item.name === "Numb") {
      return Numb;
    } else if (item.name === "Parry") {
      return Parry;
    } else if (item.name === "Poison") {
      return Poison;
    } else if (item.name === "Scavenge") {
      return Scavenge;
    } else if (item.name === "Void's Call") {
      return Void;
    } else if (item.name === "Zap") {
      return Zap;
    } else if (item.name === "Vampiric Embrace") {
      return Vampiric_Embrace;
    }
  };

  const charm = useSelector(TibiaSelectors.charm);

  return (
    <CRContainer
      {...rest}
      onClick={() => podeComprar && onClick()}
      charmPoints={charm}
      valor={item.cost}
      podeComprar={podeComprar}>
      <CRImage src={handleRunasImg()} />
      <CRName>{item.name}</CRName>
      <CRValue>{item.cost}</CRValue>
    </CRContainer>
  );
};

export default CR;
