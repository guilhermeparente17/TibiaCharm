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
  max-height: 160px;
  height: 90px;
  background-color: #2c3153;
  border-radius: 20px;
  padding: 25px;
  margin: 20px 0;
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
`;

export const PRPontosContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const PRPontos = styled.span`
  color: #fff;
  border: 1px solid #a60452;
  padding: 10px 30px;
  border-radius: 20px;
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
  margin-top: 130px;
`;
