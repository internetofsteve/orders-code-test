import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  margin-bottom: 24px;
  height: 32px;
  padding: 8px;
  cursor: pointer;
  background-color: #f5f5f5;
  border-radius: 3px;
  &:hover {
    background-color: #dcdcdc;
  }

  &:active {
    background-color: #bdc0ff;
  }
`;

export const NewOrderButton = () => {
  return <StyledButton>New Order</StyledButton>;
};