import { styled } from "@linaria/react";
import { colors } from "../styles/theme";
import NavBar from "./navBar";

import ComponentFramer from "./componentFramer";

const ColorTest = styled.h1`
  color: ${colors.horseBrown};
`;

const Layout = (props) => {
  const header = props?.data?.getGlobalDocument?.data?.header || {};
  const businessInfo = props?.data?.getGlobalDocument?.data?.businessInfo || {};
  return (
    <ComponentFramer>
      <NavBar businessInfo={businessInfo} header={header} />
      {props?.children}
    </ComponentFramer>
  );
};

export default Layout;
