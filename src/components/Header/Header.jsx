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
          <HeaderItem>
            <HeaderLink href="/runas">Runas</HeaderLink>
          </HeaderItem>
          <HeaderItem>
            <HeaderLink href="/plano_runico">Plano Rúnico</HeaderLink>
          </HeaderItem>
          <HeaderItem>Equipamentos</HeaderItem>
          <HeaderItem>Sets</HeaderItem>
        </HeaderList>
      </HeaderNav>
    </HeaderContainer>
  );
};
