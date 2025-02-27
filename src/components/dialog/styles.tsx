import styled from "styled-components";

export const DialogCloseButton = styled.button`
  position: absolute;
  right: 8px;
  top: 8px;

  background-color: transparent;
  border: none;

  cursor: pointer;
`;

export const DialogTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 8px;

  margin: 0;
  margin-bottom: 16px;

  font-size: 1.15rem;
  font-weight: 600;
`;

export const DialogContent = styled.div`
  position: relative;
  box-sizing: border-box;

  margin: 8px;
  padding: 16px 24px;

  border-radius: 8px;
  background-color: #f6f6f6;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
`;
