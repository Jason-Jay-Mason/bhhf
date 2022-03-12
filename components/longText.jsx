import { styled } from "@linaria/react";
import { colors, spacing } from "../styles/theme";

//#region styles
const div = {};
div.longText = styled.div`
  column-count: 2;
  column-gap: ${spacing.s45ish};
  width: 1367px;
  margin: 0 auto;

  padding-bottom: ${spacing.s75ish};
  p {
    color: ${colors.textBrown};
  }
`;
//#endregion

const LongText = () => {
  return (
    <div.longText>
      <p>A sentece or two here that says what the business is, breifly agitates the problems of personas and describes what they get in a bit more detail than the headline. A sentece or two here that says what the business is, breifly agitates the problems of personas and describes what they get in a bit more detail than the headline. </p>
    </div.longText>
  );
};

export default LongText;
