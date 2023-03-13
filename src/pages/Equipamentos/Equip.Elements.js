import styled from "styled-components";

export const EquipContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EquipHeader = styled.div`
  width: 90%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 25px;
  margin-bottom: 40px;
`;

export const Title = styled.h3`
  color: #fff;
  font-weight: 700;
`;

export const Span = styled.span`
  color: #fff;
  border: 1px solid #a60452;
  padding: 10px 30px;
  border-radius: 20px;
  font-weight: bold;

  span {
    font-size: 23px;
    font-weight: bold;
    color: #eb097a;
    text-shadow: 1px 3px 2px black;
  }
`;

export const EquipCards = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const EquipDetails = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EquipDetailItem = styled.div`
  width: 50%;
  height: 100%;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const EquipTitle = styled.h3`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  color: #fff;
  text-shadow: 1px 3px 2px black;
`;

export const EquipInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 20px;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const EquipName = styled.span`
  font-size: 25px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 3px 2px black;
`;

export const EquipMoreItem = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const EquipImage = styled.div`
  width: 250px;
  height: 250px;
  background-color: red;
`;

export const EquipDrops = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 80px;
`;

export const EquipFooter = styled.div`
  width: 100%;
  height: 30%;
  background-color: tomato;
  margin-top: 20px;
`;
