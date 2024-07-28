import styled from "styled-components";
import { Table } from "../../common/table";
import { Order } from "../../common/types";
import { OrdersTableNotification } from "../orders-table-notification";
import { OrderControls } from "../order-controls";
const CONTROLS_COL = "";
const COLS = ["ID", "Name", "Created At", "Shipped", "Deleted", CONTROLS_COL];

const StyledTableContainer = styled.div`
  min-width: 800px;
`;

type Props = {
  orders: Order[];
  isLoading: boolean;
  isError: boolean;
};

export const OrdersTable = ({ orders = [], isLoading, isError }: Props) => {
  const rows = orders.map((order) => {
    const {
      id,
      name,
      created_at,
      shipped_at = null,
      deleted_at = null,
    } = order;

    return [
      `${id}`,
      name,
      created_at,
      shipped_at ? "shipped" : "",
      deleted_at ? "deleted" : "",
      <OrderControls order={order} />,
    ];
  });

  const showTable = !isError && !isLoading;

  return (
    <StyledTableContainer>
      {showTable ? (
        <Table columns={COLS} rows={rows} />
      ) : (
        <OrdersTableNotification isLoading={isLoading} isError={isError} />
      )}
    </StyledTableContainer>
  );
};
