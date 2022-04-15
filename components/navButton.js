import { styled } from "@linaria/react";
import Link from "next/link";
import { standardButtonCss } from "./standardButton";

//#region styles
const button = {};
button.navButton = styled.button`
  //padding: ${({ thresholdReached }) => (thresholdReached ? "12px 40px" : "19px 40px")};
  padding: 10px 40px;
  height: ${({ thresholdReached }) => (thresholdReached ? "48px" : "58px")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 100;
  font-size: 1rem;
  transition: all 0.2s ease;
  .smallSize {
    padding: 15px 40px;
    font-size: 0.8rem;
  }
`;

//#endregion

const NavCta = ({ children, href, thresholdReached }) => {
  return (
    <Link href={href || "/"} passHref>
      <a>
        <button.navButton thresholdReached={thresholdReached} className={standardButtonCss}>
          {children}
        </button.navButton>
      </a>
    </Link>
  );
};

export default NavCta;
