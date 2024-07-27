import { useEffect, useState } from "react";
import styled from "styled-components";
import { OrdersTable } from "../orders/orders-table";
import { Order } from "../common/types";
import { NewOrderButton } from "./new-order-button";

const StyledContainer = styled.div`
  min-width: 800px;
  margin-top: 24px;
`;

export const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/orders")
      .then(async (res) => {
        if (!res.ok) {
          setFetchError(true);
        }
        const data = await res.json();
        setOrders(data as unknown as Order[]);
        setLoading(false);
      })
      .catch(() => {
        setFetchError(true);
      });
  }, []);

  return (
    <StyledContainer>
      <NewOrderButton />
      <OrdersTable orders={orders} isLoading={loading} isError={fetchError} />
    </StyledContainer>
  );
};
