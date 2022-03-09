import { styled } from "@linaria/react";
import { colors } from "../styles/theme";

//#region styles
const div = {};
div.subNav = styled.div``;
div.nav = styled.div`
  width: 100%;
  background-color: ${colors.white};
  height: 170px;
`;
//#endregion

const NavBar = () => {
  return <div.nav></div.nav>;
};

export default NavBar;
