import { Close } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import {
  Container,
  CustomIcon,
  LogoContainer,
  ProductMenu,
  RightMenu,
} from "./styles";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [showBurger, setShowBurger] = useState(false);

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
        <CustomIcon onClick={() => setShowBurger(true)} />
      </RightMenu>
      <BurgerSidebar show={showBurger}>
        <CloseIconContainer>
          <CloseIcon onClick={() => setShowBurger(false)} />
        </CloseIconContainer>
        <li>
          <a href="#">Model S</a>
        </li>
        <li>
          <a href="#">Model 3</a>
        </li>
        <li>
          <a href="#">Model X</a>
        </li>
        <li>
          <a href="#">Model Y</a>
        </li>
        <li>
          <a href="#">Solar Roof</a>
        </li>
        <li>
          <a href="#">Solar Panels</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Account</a>
        </li>
        <li>
          <a href="#">More</a>
        </li>
      </BurgerSidebar>
    </Container>
  );
};

export default Header;

interface BurgerSidebarProps {
  show: boolean;
}

export const BurgerSidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 20em;
  padding-top: 1em;

  background-color: white;

  transform: ${(props: BurgerSidebarProps) =>
    props.show ? "translateX(0)" : "translateX(100%)"};

  transition: transform 0.2s;

  list-style: none;

  li {
    width: 15em;
    padding: 0.8em;
    border-radius: 2em;
  }

  li:hover {
    background-color: lightgrey;
  }

  li > a {
    text-decoration: none;
  }
`;

export const CloseIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 15em;
  padding: 0.2em;
`;

export const CloseIcon = styled(Close)`
  cursor: pointer;
`;
