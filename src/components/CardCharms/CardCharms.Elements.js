import styled from "styled-components";

export const CCContainer = styled.div`
  width: 90%;
  height: 100px;
  background-color: #2c3153;
  border-radius: 20px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;

export const CCImg = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 20px;
`;

export const CCName = styled.span`
  font-size: 20px;
  color: #fff;
  font-weight: 700;
  margin-right: 20px;

  span {
    font-size: 23px;
    font-weight: bold;
    color: #eb097a;
    text-shadow: 1px 3px 2px black;
  }
`;
