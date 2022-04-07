import { styled } from "@linaria/react";
import { css } from "linaria";
import Link from "next/link";
import { colors, spacing, breakPoints } from "../styles/theme";

//#region styles
const button = {};
button.standardButton = styled.button`
  padding: ${spacing.s30ish} 55px;
  font-weight: 100;
  letter-spacing: 0.5px;
  font-size: 1.05rem;
  height: 100px;
  min-width: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${breakPoints.md} {
    min-height: 80px;
    min-width: 220px;
  }
`;
//#endregion

export const standardButtonCss = css`
  border-radius: 3px;
  color: white;
  background-color: ${colors.buttonBlue};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: -2px 2px 10px rgba(21, 66, 188, 0.4);
  :hover {
    background-color: #3e60bd;
    box-shadow: 0px 0px 15px rgba(21, 66, 188, 0.7);
  }
`;

const Button = ({ children, href }) => {
  return (
    <>
      {href ? (
        <Link href={href || "/"} passHref>
          <a>
            <button.standardButton className={standardButtonCss}>{children ? children : "No Label"}</button.standardButton>
          </a>
        </Link>
      ) : (
        <button.standardButton className={standardButtonCss}>{children ? children : "No Label"}</button.standardButton>
      )}
    </>
  );
};

export default Button;
