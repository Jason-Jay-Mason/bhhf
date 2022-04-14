import { styled } from "@linaria/react";
import { breakPoints, colors, fontSize, maxMin, spacing, theme } from "../styles/theme";
import Section from "../components/section";
import Svg from "../components/renderSvg";

//#region styles
const div = {};
div.container = styled.div`
  margin: 0 auto;
  padding: ${spacing.s195ish} ${spacing.s17ish} ${spacing.s45ish} ${spacing.s17ish};
  max-width: ${maxMin.contentMaxWidth};
  @media ${breakPoints.md} {
    padding: ${spacing.s120ish} ${spacing.s17ish} ${spacing.s30ish} ${spacing.s17ish};
  }
  .iconGrid {
    display: grid;
    justify-items: center;
    grid-template-columns: ${({ number }) => {
      let final = "";
      for (let i = 0; i < number; i++) {
        final = final + "1fr ";
      }
      return final;
    }};
    @media ${breakPoints.lrg} {
      grid-template-columns: 1fr 1fr;
    }
    @media ${breakPoints.md} {
      grid-template-columns: 1fr;
    }
  }
  .iconBlurb {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${spacing.s45ish};
    flex-direction: column;
    text-align: center;
    max-width: ${spacing.s320ish};
  }
  object {
    padding-bottom: ${spacing.s17ish};
    filter: ${colors.iconFilter};
  }
  h4 {
    text-align: center;
    font-family: "Noto Serif";
    font-weight: lighter;
    font-size: ${fontSize.med};
    padding-bottom: ${spacing.s45ish};
    color: ${colors.textBrown};
    @media ${breakPoints.md} {
      font-size: ${fontSize.sml};
    }
  }
  h5 {
    font-size: ${fontSize.base};
    line-height: 222%;
    font-weight: 300;
    color: ${colors.textBrown};
  }
`;
//#endregion

const ShortIconGrid = ({ featuredIconBlurb, headline }) => {
  let numberBlurbs = featuredIconBlurb ? featuredIconBlurb.length : 0;
  return (
    <Section>
      <div.container number={numberBlurbs}>
        <h4>{headline ? headline : "No Headline!"}</h4>
        <div className="iconGrid">
          {featuredIconBlurb ? (
            featuredIconBlurb.map((iconBlurb, i) => {
              return (
                <div key={iconBlurb + i + "iconBlurb"} className="iconBlurb">
                  <Svg alt={"Icon representing " + iconBlurb} src={iconBlurb.icon} />
                  <h5>{iconBlurb.blurb}</h5>
                </div>
              );
            })
          ) : (
            <p>No Icons Blurbs have been added...</p>
          )}
        </div>
      </div.container>
    </Section>
  );
};

export default ShortIconGrid;
