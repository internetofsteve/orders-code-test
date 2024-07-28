import { useCallback } from "react";
import styled from "styled-components";

import { useOrderProvider } from "../order-provider";

const StyledButton = styled.button`
  border: none;
  margin-bottom: 24px;
  margin-left: 6px;
  height: 32px;
  padding: 8px;
  cursor: pointer;
  background-color: #ffa0a0;
  border-radius: 3px;
  &:hover {
    background-color: #ff2727;
  }

  &:active {
    background-color: #ad0000;
  }
`;

export const ClearOrdersButton = () => {
  const { clearOrders } = useOrderProvider();
  const handleClick = useCallback(() => {
    clearOrders();
  }, [clearOrders]);

  return <StyledButton onClick={handleClick}>Clear Orders</StyledButton>;
};
