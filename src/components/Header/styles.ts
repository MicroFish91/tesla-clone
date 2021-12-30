import { Menu } from "@mui/icons-material";
import styled from "styled-components";

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
