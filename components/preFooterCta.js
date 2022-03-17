import { styled } from "@linaria/react";
import { colors, spacing, breakPoints, fontSize } from "../styles/theme";
import Section from "./section";
import Button from "./standardButton";
import { BackGroundHeart } from "./svg";

//#region styles
const div = {};
div.preFooterCta = styled.div`
  position: relative;
  text-align: center;
  width: fit-content;
  margin: 0 auto;
  padding: ${spacing.s320ish} ${spacing.s17ish};
  @media ${breakPoints.lrg} {
    padding: ${spacing.s320ish} ${spacing.s17ish};
  }
  @media ${breakPoints.md} {
    padding: ${spacing.s120ish} ${spacing.s17ish};
  }
  h3,
  h4,
  p,
  button {
    position: relative;
    z-index: 2;
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
    font-size: ${fontSize.xlrg};
    font-weight: 500;
    letter-spacing: 3%;
    width: fit-content;
    margin: 0 auto;
    color: ${colors.textBrown};
    border-top: solid 2px #7c7c7c;
    padding-bottom: ${spacing.s30ish};

    @media ${breakPoints.lrg} {
      font-size: ${fontSize.med};
    }
    @media ${breakPoints.md} {
      font-size: ${fontSize.sml};
      padding-bottom: ${spacing.s30ish};
    }
  }
  p {
    margin: 0 auto;
    max-width: 600px;
    padding-bottom: ${spacing.s45ish};
    color: ${colors.textBrown};
  }
  .backgroundHeartCta {
    height: 140%;
    top: -20%;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    z-index: 0;
    @media ${breakPoints.lrg} {
      top: -20%;
    }
    @media ${breakPoints.md} {
      top: -30%;
    }
    svg {
      color: ${colors.rainCloudBeige};
    }
  }
`;
//#endregion

const PreFooterCta = ({ mainCallToActionLabel, standardHeadline, standardSubHeadline, mainCallToActionHref, hook }) => {
  return (
    <Section>
      <div.preFooterCta>
        <div className="backgroundHeartCta">
          <BackGroundHeart />
        </div>
        <h3>{standardHeadline ? standardHeadline : "No headline!"}</h3>
        <h4>{standardSubHeadline ? standardSubHeadline : "No headline!"}</h4>
        <p>{hook ? hook : "No hook. Please write a hook!"}</p>
        <Button href={mainCallToActionHref}>{mainCallToActionLabel ? mainCallToActionLabel : "No Label"}</Button>
      </div.preFooterCta>
    </Section>
  );
};

export default PreFooterCta;
