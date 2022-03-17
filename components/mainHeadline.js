import { styled } from "@linaria/react";
import { breakPoints, colors, fontSize, spacing } from "../styles/theme";
import { HeadlineHeart } from "./svg";

//#region styles
const div = {};
div.mainHeadline = styled.div`
  text-align: center;
  width: fit-content;
  margin: 0 auto;
  padding-top: ${spacing.s195ish};
  padding: ${spacing.s195ish} ${spacing.s17ish} 0 ${spacing.s17ish};
  @media ${breakPoints.lrg} {
    padding-top: ${spacing.s120ish};
  }
  @media ${breakPoints.md} {
    padding-top: ${spacing.s120ish};
  }
  svg {
    margin-bottom: -12px;
    color: ${colors.heartBeige};
    @media ${breakPoints.lrg} {
      margin-bottom: -10px;
      height: 30px;
    }
    @media ${breakPoints.md} {
      margin-bottom: -7px;
      height: 24px;
    }
  }
  h3 {
    font-family: "Snell Roundhand";
    font-size: ${fontSize.lrg};
    font-weight: lighter;
    @media ${breakPoints.lrg} {
      font-size: ${fontSize.med};
    }
    @media ${breakPoints.md} {
      font-size: ${fontSize.sml};
    }

    padding-bottom: 4px;
    color: ${colors.saddleBeige};
  }
  h4 {
    font-family: "Noto Serif";
    font-size: ${fontSize.lrg};
    font-weight: lighter;
    letter-spacing: 3%;

    color: ${colors.textBrown};
    border-top: solid 2px #7c7c7c;
    padding-bottom: ${spacing.s75ish};

    @media ${breakPoints.lrg} {
      font-size: ${fontSize.med};
    }
    @media ${breakPoints.md} {
      width: fit-content;
      font-size: ${fontSize.sml};
      padding-bottom: ${spacing.s45ish};
    }
  }
`;
//#endregion

const MainHeadline = ({ headline, subHeadline, heart }) => {
  return (
    <div.mainHeadline>
      <HeadlineHeart />
      <h3>{subHeadline ? subHeadline : "No headline found"}</h3>
      <h4>{headline ? headline : "No headline found"}</h4>
    </div.mainHeadline>
  );
};

export default MainHeadline;
