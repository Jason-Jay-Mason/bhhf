import { styled } from "@linaria/react";
import { breakPoints, colors, spacing } from "../styles/theme";
import { TinaMarkdown } from "tinacms/dist/rich-text";

//#region styles
const div = {};
div.longText = styled.div`
  column-count: 2;
  column-gap: ${spacing.s45ish};
  max-width: 1367px;
  margin: 0 auto;
  padding: 0 ${spacing.s45ish} ${spacing.s75ish} ${spacing.s45ish};
  p {
    color: ${colors.textBrown};
    @media ${breakPoints.lrg} {
      text-align: center;
    }
  }
  @media ${breakPoints.lrg} {
    column-count: 1;
    padding: 0 ${spacing.s17ish} ${spacing.s45ish} ${spacing.s17ish};
  }
`;
//#endregion

const LongText = ({ text }) => {
  return (
    <div.longText>
      <TinaMarkdown content={text} />
    </div.longText>
  );
};

export default LongText;
