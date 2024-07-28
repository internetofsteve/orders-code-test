import { useEffect } from "react";
import styled from "styled-components";
import { OrdersTable } from "../orders/orders-table";
import { NewOrderButton } from "./new-order-button";
import { useOrderProvider } from "./order-provider";
import { ClearOrdersButton } from "./clear-orders-button";

const StyledContainer = styled.div`
  min-width: 800px;
  margin-top: 24px;
`;

export const Orders = () => {
  const { orders, isLoading, isError, fetchOrders } = useOrderProvider();
  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return (
    <StyledContainer>
      <NewOrderButton />
      <ClearOrdersButton />
      <OrdersTable orders={orders} isLoading={isLoading} isError={isError} />
    </StyledContainer>
  );
};
