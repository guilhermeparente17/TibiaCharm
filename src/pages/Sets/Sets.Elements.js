import styled from "styled-components";

export const SetContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SetFilters = styled.div`
  width: 400px;
  height: 700px;
  margin-right: 20px;
`;

export const SetSearch = styled.input`
  width: 95%;
  height: 50px;
  background-color: #232741;
  color: white;
  margin-bottom: 20px;
  border-radius: 20px;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 25px;
  font-weight: 700;
`;

export const SetItems = styled.div`
  width: 400px;
  height: 100%;
  background-color: #232741;
  overflow-x: hidden;
  overflow-y: scroll;
  color: #fff;

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

export const SetConjunto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

export const SetHeader = styled.img`
  width: 150px;
  height: 150px;
  border: 1px solid #a60452;
  cursor: pointer;
  margin: 0px 20px;
`;

export const SetAmulet = styled.img`
  width: 150px;
  height: 150px;
  border: 1px solid #a60452;
  cursor: pointer;
`;

export const SetBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SetArm = styled.img`
  width: 150px;
  height: 200px;
  border: 1px solid #a60452;
  cursor: pointer;
`;

export const SetArmor = styled.img`
  width: 150px;
  height: 200px;
  border: 1px solid #a60452;
  cursor: pointer;
  margin: 10px 20px;
`;

export const SetDef = styled.img`
  width: 150px;
  height: 200px;
  border: 1px solid #a60452;
  cursor: pointer;
`;

export const SetLeg = styled.img`
  width: 150px;
  height: 200px;
  margin: 0px 20px 10px;

  border: 1px solid #a60452;
  cursor: pointer;
`;

export const SetRing = styled.img`
  width: 150px;
  height: 200px;
  margin-bottom: 10px;
  border: 1px solid #a60452;
  cursor: pointer;
`;

export const SetElement = styled.img`
  width: 150px;
  height: 200px;
  margin-bottom: 10px;
  border: 1px solid #a60452;
  cursor: pointer;
`;

export const SetShoes = styled.img`
  width: 150px;
  height: 150px;
  border: 1px solid #a60452;
  cursor: pointer;
`;

export const SetAtrib = styled.div`
  width: 400px;
  height: 700px;
  background-color: #232741;
  margin-top: 10px;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const Item = styled.div`
  width: 100%;
  height: 50px;
  background-color: #a60452;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
  cursor: pointer;
`;

export const SetSpan = styled.span`
  width: 100%;
  height: 50px;
  border: 1px solid black;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 30px;
  color: #fff;
  font-weight: bold;
`;

export const SetDivPadrao = styled.div`
  width: 150px;
  height: ${(props) => (props.height ? `${props.height}` : "200px")};
  border: 1px solid #a60452;
  cursor: pointer;
  margin: ${(props) => `${props.margin}`};
`;

export const SetWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
