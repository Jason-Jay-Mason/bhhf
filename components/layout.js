import NavBar from "./navBar";
import Footer from "./footer";

import PopupVideo from "./popupVideo";
import Seo from "./seo";

const Layout = (props) => {
  const header = props?.data?.getGlobalDocument?.data?.header || {};
  const businessInfo = props?.data?.getGlobalDocument?.data?.businessInfo || {};
  const services = props?.data?.getGlobalDocument?.data?.services || {};
  const mainPageList = props?.data?.getMainPageList?.edges?.map((edge) => edge?.node?.sys?.filename) || {};
  const mapEnabled = props?.data?.getMainPageDocument?.data?.mapEnabled;
  const legal = props?.data?.getLegalList?.edges.map((edge) => {
    return { fileName: edge.node.sys.filename, title: edge.node.data.legalPageTitle };
  });
  const seo = props?.data?.getMainPageDocument?.data?.seo;

  return (
    <>
      <Seo {...seo} />
      <PopupVideo />
      <NavBar businessInfo={businessInfo} header={header} />
      {props?.children}
      <Footer businessInfo={businessInfo} services={services} mainPageList={mainPageList} mapEnabled={mapEnabled} legal={legal} />
    </>
  );
};

export default Layout;
