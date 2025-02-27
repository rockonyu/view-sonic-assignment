import styled from "styled-components";

import { DEVICE_WIDTH } from "@/constants";
import {
  DialogTitle as DialogTitleBase,
  DialogContent as DialogContentBase,
} from "@/components/dialog";
import { TabsContent as TabsContentBase } from "@/components/tabs";
import {
  PopoverContent as PopoverContentBase,
  PopoverContentAction as PopoverContentActionBase,
} from "@/components/popover";

export const SeatCardHeader = styled.div`
  background-color: var(--bg-color);
  color: #fff;
`;

export const SeatCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 4px;
  border-top: 1px solid var(--bg-color);
`;

export const SeatCardContent = styled.div`
  padding: 8px;

  height: 24px;
  line-height: 24px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ScoreButton = styled.button<{ $variant: "add" | "subtract" }>`
  background-color: var(--btn-color-${(props) => props.$variant});
  color: #fff;
  padding: 0 4px;

  border: none;
  border-radius: 2px;
  cursor: pointer;
`;

export const SeatCard = styled.div<{ $active?: boolean }>`
  --color: ${(props) => (props.$active ? "#000" : "#c3c7c8")};
  --bg-color: ${(props) => (props.$active ? "#0b8cf0" : "#c3c7c8")};
  --btn-color-add: ${(props) => (props.$active ? "#77cc3b" : "#c3c7c8")};
  --btn-color-subtract: ${(props) => (props.$active ? "#f1476a" : "#c3c7c8")};

  min-width: 0;
  width: 100%;

  text-align: center;
  border-radius: 4px;
  border: 1px solid var(--bg-color);
  color: var(--color);

  & ${ScoreButton} {
    pointer-events: ${(props) => (props.$active ? "auto" : "none")};
  }
`;

export const SeatListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (${DEVICE_WIDTH.SM}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const AttendCount = styled.span`
  font-size: 0.825rem;
`;

export const DialogTitle = styled(DialogTitleBase)`
  margin-top: 24px;
`;

export const DialogContent = styled(DialogContentBase)`
  background-color: #ebebeb;
  overflow: hidden;

  @media (${DEVICE_WIDTH.MD}) {
    min-width: 540px;
    height: 480px;
  }
`;

export const TabsContentContainer = styled.div`
  margin: 0 -24px -16px -24px;
  padding: 16px 0;

  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

export const TabsContent = styled(TabsContentBase)`
  padding: 0 24px;
  box-sizing: border-box;

  @media (${DEVICE_WIDTH.MD}) {
    height: 340px;
    overflow-y: scroll;
  }
`;

export const TabsListEllipsisButton = styled.button`
  justify-self: flex-end;

  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const GroupUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin: 0;
  padding: 0;

  list-style: none;
`;

export const GroupLi = styled.li``;

export const GroupCard = styled(SeatCard)`
  border: 1px solid #0b8cf0;
`;

export const GroupCardHeader = styled(SeatCardHeader)`
  padding: 0 16px;
  background-color: #0b8cf0;
  text-align: start;
`;

export const GroupCardContent = styled(SeatCardContent)`
  display: flex;
  gap: 16px;
  height: auto;
`;

export const GroupSeatCard = styled.div`
  width: 100%;
  color: #333;
  border: 1px solid #c3c7c8;
  border-radius: 4px;
  text-align: center;
`;

export const PopoverContent = styled(PopoverContentBase)`
  margin-top: 4px;

  border: 1px solid #ccc;
  border-radius: 4px;

  background-color: #f6f6f6;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const PopoverContentAction = styled(PopoverContentActionBase)`
  display: flex;
  justify-content: space-between;
  padding: 8px;

  border: none;
  background-color: transparent;
  color: #333;

  font-weight: 600;
  cursor: pointer;
`;
