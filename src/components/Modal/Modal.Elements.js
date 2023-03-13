import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #2c3153;
  padding: 20px;
  width: 80%;
  height: 80%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const ModalButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background-color: #a60452;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
