import { styled } from "@linaria/react";
import { fontSize, colors, spacing, breakPoints } from "../styles/theme";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Svg from "../components/renderSvg";

//#region styles
const div = {};
div.titledIconBlurb = styled.div`
  padding: 0 ${spacing.s45ish} ${spacing.s75ish} ${spacing.s45ish};
  max-width: 650px;
  margin: 0 auto;
  p,
  h5,
  h6 {
    color: ${colors.textBrown};
    @media ${breakPoints.md} {
      text-align: center;
    }
  }
  @media ${breakPoints.lrg} {
    padding: 0 ${spacing.s17ish} ${spacing.s75ish} ${spacing.s17ish};
  }
  .title {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding-bottom: ${spacing.s30ish};
    @media ${breakPoints.md} {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding-bottom: ${spacing.s17ish};
    }
    object {
      filter: ${colors.iconFilter};
      height: 65px;
      margin-right: ${spacing.s17ish};
      @media ${breakPoints.md} {
        height: 43px;
        margin-right: 0;
        margin-bottom: ${spacing.s10ish};
      }
    }
    h5 {
      font-family: "Noto Serif";
      font-size: ${fontSize.sml};
      font-weight: bold;
      letter-spacing: 3%;
      padding-bottom: 5px;
      @media ${breakPoints.md} {
        font-size: ${fontSize.base};
      }
    }
    h6 {
      font-family: "Open Sans";
      font-size: ${fontSize.base};
      font-weight: 300;
      letter-spacing: 3%;
      @media ${breakPoints.md} {
        font-size: ${fontSize.baseSml};
      }
    }
  }
`;
//#endregion

const TitledIconBlurb = ({ blurb, Headline, iconAlt, subHeadline, icon }) => {
  return (
    <div.titledIconBlurb>
      <div className="title">
        <Svg src={icon} alt={iconAlt} />
        <div>
          <h5>{Headline}</h5>
          <h6>{subHeadline}</h6>
        </div>
      </div>
      <TinaMarkdown content={blurb} />
    </div.titledIconBlurb>
  );
};

export default TitledIconBlurb;
