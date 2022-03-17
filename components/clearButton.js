import { styled } from "@linaria/react";
import { css } from "linaria";
import { colors, spacing, breakPoints } from "../styles/theme";
//#region styles
const button = {};
button.clearButton = styled.button`
  padding: ${spacing.s30ish} ${spacing.s45ish};
  font-weight: 100;
  letter-spacing: 0.5px;
  font-size: 1.05rem;
  height: 90px;
  min-width: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${breakPoints.md} {
    height: 80px;
    min-width: 220px;
  }
`;

export const clearButtonCss = css`
  border-radius: 3px;
  color: white;
  background-color: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(2px);
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid #ffffff;
  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
//#endregion

const Button = ({ children, href }) => {
  return (
    <>
      {href ? (
        <Link href={href || "/"} passHref>
          <a>
            <button.clearButton className={clearButtonCss}>{children ? children : "No Label"}</button.clearButton>
          </a>
        </Link>
      ) : (
        <button.clearButton className={clearButtonCss}>{children ? children : "No Label"}</button.clearButton>
      )}
    </>
  );
};

export default Button;
