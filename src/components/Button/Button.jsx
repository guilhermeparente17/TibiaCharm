import React from "react";

import { ButtonContainer } from "./Button.Elements";

const Button = ({ text, handleClick, status }) => {
  return (
    <ButtonContainer status={status} onClick={() => handleClick()}>
      {text}
    </ButtonContainer>
  );
};

export default Button;
