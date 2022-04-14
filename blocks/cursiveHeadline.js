import { styled } from "@linaria/react";
import { colors, fontSize, spacing } from "../styles/theme";

//#region styles
const h3 = {};
h3.cursive = styled.h3`
  font-family: "Snell Roundhand";
  font-size: ${fontSize.lrg};
  color: ${colors.textBrown};
  text-align: center;
  padding: 0 ${spacing.s17ish} ${spacing.s30ish} ${spacing.s17ish};
`;
//#endregion

const CursiveHeadline = ({ headline }) => {
  return <h3.cursive>{headline}</h3.cursive>;
};

export default CursiveHeadline;
