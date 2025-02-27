import styled from "styled-components";
import { DialogContent as DialogContentBase } from "@/components/dialog";
import { DEVICE_WIDTH } from "@/constants";

export const BackLink = styled.a`
  display: flex;
  align-items: center;

  margin: 0 0 8px -4px;

  color: #3d403f;
  font-size: 0.725rem;
  text-decoration: none;
  underline: none;
`;

export const VersionText = styled.p`
  margin: 16px 0 0 0;

  color: #3d403f;

  font-size: 0.625rem;
  text-align: center;
`;

export const ClassroomInfo = styled.p`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const DialogContent = styled(DialogContentBase)`
  @media (${DEVICE_WIDTH.MD}) {
    min-width: 360px;
    height: 480px;
  }
`;

export const IconButton = styled.button`
  padding: 2px 4px;

  background-color: #098df0;
  color: white;

  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const QrCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto 0;
  padding: 16px;

  background-color: #fff;
  height: 280px;
`;
