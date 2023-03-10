import styled from "styled-components";

export const CardContainer = styled.div`
  width: 250px;
  /* height: 300px; */
  height: ${(props) => (props.height ? props?.height : "300px")};
  background-color: #2c3153;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

export const CardTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-bottom: 15px;
`;

export const CardDetails = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 20px;
`;

export const CardItem = styled.span`
  color: #fff;
  font-weight: 700;
`;

export const CardImage = styled.img`
  width: 100px;
  background-position: center;
  background-size: cover;
  margin-bottom: 30px;
`;
