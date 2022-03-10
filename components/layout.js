import { styled } from "@linaria/react";
import { colors } from "../styles/theme";
import NavBar from "./navBar";
import Head from "next/head";

import ComponentFramer from "./componentFramer";

const ColorTest = styled.h1`
  color: ${colors.horseBrown};
`;

const Layout = (props) => {
  const header = props?.data?.getGlobalDocument?.data?.header || {};
  const businessInfo = props?.data?.getGlobalDocument?.data?.businessInfo || {};
  return (
    <ComponentFramer>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>
      <NavBar businessInfo={businessInfo} header={header} />
      {props?.children}
    </ComponentFramer>
  );
};

export default Layout;
