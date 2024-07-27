import type { PropsWithChildren } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
`;

export const Page = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};
