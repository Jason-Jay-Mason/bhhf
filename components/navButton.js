import { styled } from "@linaria/react";
import { colors } from "../styles/theme";
import { css } from "linaria";
import Link from "next/link";

//#region styles
const button = {};
button.navButton = styled.button`
  padding: 19px 40px;
  font-weight: 100;
  font-size: 1rem;
`;
const standardButton = css`
  border-radius: 2px;
  color: white;
  background-color: ${colors.buttonBlue};
  cursor: pointer;
  transition: all 0.5s ease;
  box-shadow: -2px 2px 10px rgba(21, 66, 188, 0.2);
  :hover {
    background-color: #3e60bd;
    box-shadow: 0px 0px 15px rgba(21, 66, 188, 0.3);
  }
`;
//#endregion

const NavCta = ({ children, href }) => {
  return (
    <Link href={href || "/"} passHref>
      <a>
        <button.navButton className={standardButton}>{children}</button.navButton>
      </a>
    </Link>
  );
};

export default NavCta;
