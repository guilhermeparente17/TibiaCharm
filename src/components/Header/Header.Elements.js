import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #232741;
  margin-bottom: 20px;
`;

export const HeaderTitle = styled.h1`
  color: #fff;
`;

export const HeaderSearch = styled.input`
  width: 300px;
  padding: 10px;
  border-radius: 26px;
  font-size: 18px;
  outline: none;
  font-weight: bold;
  color: #232741;

  @media screen and (max-width: 1440px) {
    display: none;
  }
`;

export const HeaderNav = styled.nav`
  @media screen and (max-width: 1440px) {
    display: none;
  }
`;

export const HeaderList = styled.ul`
  list-style: none;
  display: flex;
`;

export const HeaderItem = styled.li`
  margin-right: 80px;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderLink = styled.a`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
