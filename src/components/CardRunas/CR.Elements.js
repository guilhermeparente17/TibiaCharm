import styled from "styled-components";

export const CRContainer = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${(props) =>
    props.charmPoints >= props.valor ? "#2C3153" : "#111528"};
  margin-bottom: 30px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 16px;
  transition: 0.2s ease-in-out;

  cursor: pointer;

  &:hover {
    background-color: #111528;
    transition: 0.2s ease-in-out;
  }
`;

export const CRImage = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
`;

export const CRName = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-bottom: 0px;
`;

export const CRValue = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #a60452;
  text-align: center;
  padding: 0px 20px;
  border-radius: 20px;
  text-shadow: 1px 3px 2px black;
`;
