import { styled } from "@linaria/react";
import { css } from "linaria";
import { spacing, breakPoints } from "../styles/theme";
//#region styles
const button = {};
button.clearButton = styled.button`
  padding: ${spacing.s30ish} ${spacing.s45ish};
  font-weight: 300;
  letter-spacing: 0.5px;
  font-size: 1.05rem;
  min-width: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  -webkit-box-orient: horizontal;
  @media ${breakPoints.md} {
    min-width: 220px;
  }
`;

export const clearButtonCss = css`
  border-radius: 3px;
  backdrop-filter: blur(3px);
  color: white;
  background-color: rgba(255, 255, 255, 0.08);
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid #ffffff;
  :hover {
    background-color: rgba(255, 255, 255, 0.1);
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
