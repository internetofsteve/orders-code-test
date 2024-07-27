import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  margin-bottom: 24px;
  height: 32px;
  padding: 8px;
  cursor: pointer;
  background-color: #e4e4e4;
  border-radius: 3px;
`;

export const NewOrderButton = () => {
  return <StyledButton>New Order</StyledButton>;
};
