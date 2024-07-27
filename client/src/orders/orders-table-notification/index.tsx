import styled from "styled-components";

type Props = {
  isLoading: boolean;
  isError: boolean;
};

const StyledNotificationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const OrdersTableNotification = ({ isLoading, isError }: Props) => {
  return (
    <StyledNotificationContainer>
      {isLoading && <span>Loading Orders...</span>}
      {!isLoading && isError && <span>Error Loading Orders!...</span>}
    </StyledNotificationContainer>
  );
};
