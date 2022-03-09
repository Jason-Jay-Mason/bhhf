import { styled } from "@linaria/react";
import { colors } from "../styles/theme";
import NavBar from "./navBar";

import ComponentFramer from "./componentFramer";

const ColorTest = styled.h1`
  color: ${colors.horseBrown};
`;

const Layout = ({ children }) => {
  return (
    <ComponentFramer>
      <NavBar />
    </ComponentFramer>
  );
};

export default Layout;
