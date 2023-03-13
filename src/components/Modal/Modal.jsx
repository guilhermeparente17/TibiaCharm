import React from "react";
import { ModalButton, ModalContainer, ModalContent } from "./Modal.Elements";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer className="modal">
      <ModalContent className="modal-content">
        <ModalButton className="close-btn" onClick={onClose}>
          X
        </ModalButton>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
