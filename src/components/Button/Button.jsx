import React from "react";

import { ButtonContainer } from "./Button.Elements";

const Button = ({ text, handleTeste }) => {
  return (
    <ButtonContainer onClick={() => handleTeste()}>{text}</ButtonContainer>
  );
};

export default Button;
