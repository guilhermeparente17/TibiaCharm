import styled from "styled-components";

export const CriatContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CridHeader = styled.div`
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
`;

export const CridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;
