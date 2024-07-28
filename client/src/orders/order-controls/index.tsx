import styled from "styled-components";
import { Order } from "../../common/types";
import { useCallback } from "react";
import { useOrderProvider } from "../order-provider";

const StyledContainer = styled.div`
  display: flex;
`;

type Props = {
  order: Order;
};

export const OrderControls = ({ order }: Props) => {
  const { shipOrder, unshipOrder, deleteOrder, restoreOrder } =
    useOrderProvider();
  const { id, shipped_at, deleted_at } = order;

  const handleShipAction = useCallback(() => {
    shipOrder(id);
  }, [id, shipOrder]);

  const handleUnShipAction = useCallback(() => {
    unshipOrder(id);
  }, [id, unshipOrder]);

  const handleDeleteAction = useCallback(() => {
    deleteOrder(id);
  }, [deleteOrder, id]);

  const handleUnDeleteAction = useCallback(() => {
    restoreOrder(id);
  }, [id, restoreOrder]);

  return (
    <StyledContainer>
      {!shipped_at && <button onClick={handleShipAction}>Ship</button>}
      {shipped_at && <button onClick={handleUnShipAction}>Unship</button>}
      {!deleted_at && <button onClick={handleDeleteAction}>Delete</button>}
      {deleted_at && <button onClick={handleUnDeleteAction}>Un-Delete</button>}
    </StyledContainer>
  );
};
