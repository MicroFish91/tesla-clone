import React from "react";
import styled from "styled-components";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
    </Container>
  );
};

export default Header;

export const Container = styled.div`
  text-align: center;
`;
