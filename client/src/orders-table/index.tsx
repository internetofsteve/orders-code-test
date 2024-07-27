import styled from "styled-components";
import { Table } from "../common/table";
import { NewOrderButton } from "../new-order-button";

const StyledTableContainer = styled.div`
  min-width: 800px;
  margin-top: 24px;
`;

export const OrdersTable = () => {
  const columns: string[] = ["Name", "ID"];
  const rows: string[][] = [["Beats Supreme", "69"]];

  return (
    <StyledTableContainer>
      <Table columns={columns} rows={rows} header={<NewOrderButton />} />
    </StyledTableContainer>
  );
};
