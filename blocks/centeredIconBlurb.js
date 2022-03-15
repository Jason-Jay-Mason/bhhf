import { styled } from "@linaria/react";
import { breakPoints, spacing, colors } from "../styles/theme";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Svg from "../components/renderSvg";

//#region styles
const div = {};
div.centeredIconBlurb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 ${spacing.s45ish} ${spacing.s75ish} ${spacing.s45ish};
  max-width: 650px;
  margin: 0 auto;
  text-align: center;
  p {
    color: ${colors.textBrown};
  }
  @media ${breakPoints.lrg} {
    padding: 0 ${spacing.s17ish} ${spacing.s75ish} ${spacing.s17ish};
  }
  object {
    height: 97px;
    padding-bottom: ${spacing.s30ish};
    filter: ${colors.iconFilter};
  }
  .iconList {
    object {
      height: ${spacing.s75ish};
      padding-right: ${spacing.s17ish};
      filter: ${colors.iconFilter};
    }
  }
`;
//#endregion

const CenteredIconBlurb = ({ text, icon, list, iconList }) => {
  return (
    <div.centeredIconBlurb>
      {iconList ? (
        <div className="iconList">
          {iconList.map((icon) => (
            <Svg src={icon.icon} />
          ))}
        </div>
      ) : (
        <Svg src={icon}></Svg>
      )}
      {text && <TinaMarkdown content={text} />}
    </div.centeredIconBlurb>
  );
};

export default CenteredIconBlurb;
