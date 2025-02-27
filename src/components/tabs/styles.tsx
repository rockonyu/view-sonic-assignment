import styled from "styled-components";

export const TabsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TabsListEllipsisButton = styled.button`
  background-color: transparent;

  justify-self: flex-end;
  border: none;

  cursor: pointer;
`;

export const TabTriggerButton = styled.button<{ $active?: boolean }>`
  margin-right: 4px;
  padding: 8px 16px;

  background-color: ${(props) => (props.$active ? "#fff" : "#d7d7d7")};
  color: ${(props) => (props.$active ? "#36a6f2" : "#333")};

  border: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  min-width: 96px;
  font-weight: 600;
  cursor: pointer;
`;

export const TabsContentContainer = styled.div``;
