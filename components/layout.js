import { styled } from "@linaria/react";
import { colors } from "../styles/theme";
import NavBar from "./navBar";
import Footer from "./footer";

import ComponentFramer from "./componentFramer";

const ColorTest = styled.h1`
  color: ${colors.horseBrown};
`;

const Layout = (props) => {
  const header = props?.data?.getGlobalDocument?.data?.header || {};
  const businessInfo = props?.data?.getGlobalDocument?.data?.businessInfo || {};
  const services = props?.data?.getGlobalDocument?.data?.services || {};
  const mainPageList = props?.data?.getMainPageList?.edges?.map((edge) => edge?.node?.sys?.filename) || {};
  const mapEnabled = props?.data?.getMainPageDocument?.data?.mapEnabled;

  return (
    <>
      <NavBar businessInfo={businessInfo} header={header} />
      <ComponentFramer>{props?.children}</ComponentFramer>
      <Footer businessInfo={businessInfo} services={services} mainPageList={mainPageList} mapEnabled={mapEnabled} />
    </>
  );
};

export default Layout;
