import { styled } from "@linaria/react";
import { css } from "linaria";
import Link from "next/link";
import { colors } from "../styles/theme";

//#region styles
const button = {};
button.standardButton = styled.button`
  padding: 38px 80px;
  font-weight: 100;
  font-size: 1rem;
`;
//#endregion

export const standardButtonCss = css`
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

const NavCta = ({ children, href }) => {
  return (
    <Link href={href || "/"} passHref>
      <a>
        <button.standardButton className={standardButtonCss}>{children ? children : "No Label"}</button.standardButton>
      </a>
    </Link>
  );
};

export default NavCta;
