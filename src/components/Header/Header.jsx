import React from "react";

import {
  HeaderContainer,
  HeaderItem,
  HeaderList,
  HeaderNav,
  HeaderTitle,
  HeaderLink,
} from "./Header.Elements";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <HeaderLink href="/">TibiaCharm</HeaderLink>
      </HeaderTitle>

      <HeaderNav>
        <HeaderList>
          <HeaderItem>
            <HeaderLink href="/criaturas">Criaturas</HeaderLink>
          </HeaderItem>
          <HeaderItem>Runas</HeaderItem>
          <HeaderItem>Plano Rúnico</HeaderItem>
          <HeaderItem>Equipamentos</HeaderItem>
          <HeaderItem>Sets</HeaderItem>
        </HeaderList>
      </HeaderNav>
    </HeaderContainer>
  );
};
