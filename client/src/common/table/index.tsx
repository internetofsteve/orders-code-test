import { ReactNode } from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;

  border-collapse: collapse;
`;

const StyledRow = styled.tr`
  &:nth-child(even) {
    background-color: #f6f6f6;
  }

  &:nth-child(odd) {
    background-color: #ffffff;
  }

  &:hover {
    background-color: #efefef;
  }
`;

const StyledHeader = styled.div``;

const StyledTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledHeaderCell = styled.td`
  border-bottom: 4px solid #e4e4e4;
  text-align: left;
  font-weight: 600;
`;

const StyledCell = styled.td`
  text-align: left;
`;

export type Props = {
  columns: string[];
  rows: string[][];
  header: ReactNode;
};

export const Table = ({ columns, rows, header }: Props) => {
  return (
    <StyledTableWrapper>
      <StyledHeader>{header}</StyledHeader>
      <StyledTable>
        <tr>
          {columns.map((column) => (
            <StyledHeaderCell>{column}</StyledHeaderCell>
          ))}
        </tr>
        {rows.map((row) => (
          <StyledRow>
            {row.map((cell) => (
              <StyledCell>{cell}</StyledCell>
            ))}
          </StyledRow>
        ))}
      </StyledTable>
    </StyledTableWrapper>
  );
};
