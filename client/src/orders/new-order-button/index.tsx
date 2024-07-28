import { useCallback } from "react";
import styled from "styled-components";

import { useOrderProvider } from "../order-provider";

const StyledButton = styled.button`
  border: none;
  margin-bottom: 24px;
  height: 32px;
  padding: 8px;
  cursor: pointer;
  background-color: #a9d0e3;
  border-radius: 3px;
  &:hover {
    background-color: #a1b8f8;
  }

  &:active {
    background-color: #bdc0ff;
  }
`;

export const NewOrderButton = () => {
  const { newOrder } = useOrderProvider();
  const handleNewOrderClick = useCallback(() => {
    newOrder();
  }, [newOrder]);

  return <StyledButton onClick={handleNewOrderClick}>New Order</StyledButton>;
};
