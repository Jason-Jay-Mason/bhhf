import { styled } from "@linaria/react";
import Link from "next/link";
import { standardButtonCss } from "./standardButton";

//#region styles
const button = {};
button.navButton = styled.button`
  padding: 19px 40px;
  font-weight: 100;
  font-size: 1rem;
`;

//#endregion

const NavCta = ({ children, href }) => {
  return (
    <Link href={href || "/"} passHref>
      <a>
        <button.navButton className={standardButtonCss}>{children}</button.navButton>
      </a>
    </Link>
  );
};

export default NavCta;
