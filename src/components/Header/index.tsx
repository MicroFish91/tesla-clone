import { Menu } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Container>
      <LogoContainer>
        <img src="/images/logo.svg" alt="" />
      </LogoContainer>
      <ProductMenu>
        <a href="">Model S</a>
        <a href="">Model 3</a>
        <a href="">Model X</a>
        <a href="">Model Y</a>
        <a href="">Solar Roof</a>
        <a href="">Solar Panels</a>
      </ProductMenu>
      <RightMenu>
        <a href="">Shop</a>
        <a href="">Account</a>
        <a href="">Menu</a>
        <CustomIcon />
      </RightMenu>
    </Container>
  );
};

export default Header;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5em;
`;

export const ProductMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    margin: 0 1.5em;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    margin: 0 1.2em;
  }
`;

export const CustomIcon = styled(Menu)`
  margin: 0 0.7em;
  cursor: pointer;
`;
