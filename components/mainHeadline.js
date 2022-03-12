import { styled } from "@linaria/react";
import { colors, fontSize, spacing } from "../styles/theme";
import { HeadlineHeart } from "./svg";

//#region styles
const div = {};
div.mainHeadline = styled.div`
  text-align: center;
  width: fit-content;
  margin: 0 auto;
  svg {
    margin-bottom: -15px;
  }
  h3 {
    font-family: "Snell Roundhand";
    font-size: ${fontSize.lrg};
    font-weight: lighter;

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
    padding-bottom: ${spacing.s45ish};
  }
`;
//#endregion

const MainHeadline = ({ text, heart }) => {
  const getSubHeadline = (text) => {
    if (text) {
      if (text.subHeadline) {
        return text.subHeadline;
      }
    }
    return "No headline found";
  };
  const getHeadline = (text) => {
    if (text) {
      if (text.headline) {
        return text.headline;
      }
    }
    return "No headline found";
  };
  const subHeadline = getSubHeadline(text);
  const headline = getHeadline(text);
  return (
    <div.mainHeadline>
      <HeadlineHeart color="#E6D9C9" />
      <h3>{subHeadline}</h3>
      <h4>{headline}</h4>
    </div.mainHeadline>
  );
};

export default MainHeadline;
