import styled from "styled-components";

export const RunasContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RunasHeader = styled.div`
  width: 90%;
  height: 180px;
  background-color: #2c3153;
  border-radius: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const RunaImg = styled.img`
  width: 90px;
  height: 90px;
  margin-right: 40px;
`;

export const RunasDescription = styled.span`
  font-weight: 700;
  color: #fff;
  line-height: 25px;
  font-size: 18px;
`;

export const RunaMsg = styled.p`
  text-align: center;

  a {
    color: #a8354b;
    cursor: pointer;
  }

  &:hover a {
    text-decoration: underline;
  }
`;

export const RunasTitle = styled.h1`
  color: #fff;
`;

export const RunasList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
