import styled from "styled-components";
import { Table } from "../../common/table";
import { Order } from "../../common/types";
import { OrdersTableNotification } from "../orders-table-notification";

const COLS = ["id", "name", "created_at", "shipped_at", "deleted_at"];

const StyledTableContainer = styled.div`
  min-width: 800px;
  margin-top: 24px;
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

    return [`${id}`, name, created_at, shipped_at, deleted_at];
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
