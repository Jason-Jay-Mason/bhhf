import { styled } from "@linaria/react";
import { fontSize, spacing, breakPoints } from "../styles/theme";
import Image from "../components/image";
import Button from "../components/clearButton";

//#region styles
const section = {};
section.hero = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(79, 56, 26, 0.66);
  color: white;
  text-align: center;
  min-height: 600px;
  padding: ${spacing.s120ish} ${spacing.s17ish};

  h1 {
    font-family: "Snell Roundhand";
    font-weight: lighter;
    line-height: 135%;
    font-size: ${fontSize.xlrg};
    padding-bottom: 5px;
    @media ${breakPoints.md} {
      font-size: ${fontSize.med};
    }
  }
  h2 {
    margin: 0 auto;
    width: fit-content;
    font-family: "Noto Serif";
    font-weight: lighter;
    line-height: 135%;
    letter-spacing: -0.005em;
    font-size: ${fontSize.xlrg};
    padding-bottom: ${spacing.s30ish};
    border-top: 1px white solid;
    @media ${breakPoints.md} {
      font-size: ${fontSize.med};
    }
  }
  h3 {
    margin: 0 auto;
    max-width: 642px;
    font-size: 17px;
    line-height: 223.69%;
    font-weight: 300;
    padding-bottom: 37px;
  }
  .desktopImage,
  .mobileImage {
    img {
      z-index: -1;
    }
  }
  .desktopImage {
    @media ${breakPoints.md} {
      display: none;
    }
  }
  .mobileImage {
    display: none;
    @media ${breakPoints.md} {
      display: block;
    }
  }
`;
//#endregion

const StandardHero = ({ ctaActive, ctaHref, ctaLabel, headline, hook, subHeadline, backgroundImage, backgroundImageAlt, backgroundImageMobile }) => {
  return (
    <section.hero>
      <h1>{subHeadline ? subHeadline : "No Headline"}</h1>
      <h2>{headline ? headline : "No Headline"}</h2>
      {hook && <h3>{hook}</h3>}
      {ctaActive && <Button>{ctaLabel}</Button>}
      <div className="desktopImage">
        <Image greyScale={true} width={1500} layout="fill" objectFit="cover" quality={90} src={backgroundImage} alt={backgroundImageAlt} />
      </div>
      <div className="mobileImage">
        <Image greyScale={true} width={600} layout="fill" objectFit="cover" quality={80} src={backgroundImageMobile} alt={backgroundImageAlt} />
      </div>
    </section.hero>
  );
};

export default StandardHero;
