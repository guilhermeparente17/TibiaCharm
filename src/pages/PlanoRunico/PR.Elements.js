import styled from "styled-components";

export const PRContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PRHeader = styled.div`
  width: 90%;
  height: 90px;
  background-color: #2c3153;
  border-radius: 20px;
  padding: 25px;
  margin: 20px 0;

  @media screen and (max-width: 1630px) {
    height: 180;
  }

  @media screen and (max-width: 1170px) {
    height: 200px;
  }

  @media screen and (max-width: 700px) {
    height: 470px;
    width: 300px;
  }

  @media screen and (max-width: 480px) {
    height: 500px;
  }
`;

export const PRText = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  line-height: 30px;
`;

export const PROptions = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const PRPontosContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 700px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const PRPontos = styled.span`
  color: #fff;
  border: 1px solid #a60452;
  padding: 10px 30px;
  border-radius: 20px;

  span {
    font-size: 23px;
    font-weight: bold;
    color: #eb097a;
    text-shadow: 1px 3px 2px black;
  }

  @media screen and (max-width: 700px) {
    font-size: 18px;
    padding: 10px 25px;
  }
`;

export const PRButton = styled.button`
  width: 80px;
  font-size: 17px;
  font-weight: bold;
  height: 50px;
  background-color: #a60452;
  outline: none;
  color: #fff;
  border: none;
  margin-left: 20px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const PRButtonList = styled.button`
  width: 230px;
  height: 60px;
  border-radius: 20px;
  padding: 10px;
  font-size: 17px;
  font-weight: bold;
  background-color: #a60452;
  outline: none;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const ListRunas = styled.div`
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  @media screen and (max-width: 1630px) {
    grid-template-columns: repeat(5, 1fr);
    width: 80%;
  }

  @media screen and (max-width: 1170px) {
    grid-template-columns: repeat(3, 1fr);
    width: 70%;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    width: 50%;
  }
`;
