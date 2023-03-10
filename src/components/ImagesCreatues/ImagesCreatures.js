import Amazon from "../../assets/gifs/Amazon.gif";
import Valkyrie from "../../assets/gifs/Valkyrie.gif";
import Rat from "../../assets/gifs/Rat.gif";
import Roast_Pork from "../../assets/gifs/Roast_Pork.gif";
import Dwarf_Guard from "../../assets/gifs/Dwarf_Guard.gif";

export const imagesCreatures = (name) => {
  if (name === "Amazon") {
    return Amazon;
  } else if (name === "Valkyrie") {
    return Valkyrie;
  } else if (name === "Rat") {
    return Rat;
  } else if (name === "Roast Pork") {
    return Roast_Pork;
  } else if (name === "Dwarf Guard") {
    return Dwarf_Guard;
  }
};

export default imagesCreatures;
