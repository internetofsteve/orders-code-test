import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;

  border-collapse: collapse;
`;

const StyledRow = styled.tr`
  height: 50px;

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
  min-width: 28px;
`;

export type Props = {
  columns: string[];
  rows: (string | null)[][];
};

export const Table = ({ columns, rows }: Props) => {
  return (
    <StyledTableWrapper>
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
