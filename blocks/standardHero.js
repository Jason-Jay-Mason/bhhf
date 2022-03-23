import { styled } from "@linaria/react";
import { fontSize, spacing, breakPoints } from "../styles/theme";
import Image from "../components/image";
import Button from "../components/clearButton";
import { isDesktop } from "react-device-detect";
import Link from "next/link";

//#region styles
const section = {};
section.hero = styled.section`
  position: relative;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    min-height: 650px;
    padding: 160px ${spacing.s17ish};
    position: relative;
    z-index: 10;
    background-color: rgba(37, 19, 19, 0.56);
  }
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
  span {
    filter: saturate(80%) sepia(40%);
    z-index: -10;
  }
`;
//#endregion

const StandardHero = ({ ctaActive, ctaHref, ctaLabel, headline, hook, subHeadline, backgroundImage, backgroundImageAlt, backgroundImageMobile }) => {
  return (
    <section.hero>
      <div className="content">
        <h1>{subHeadline ? subHeadline : "No Headline"}</h1>
        <h2>{headline ? headline : "No Headline"}</h2>
        {hook && <h3>{hook}</h3>}
        {ctaActive && (
          <Link href={ctaHref ? ctaHref : "/"} passHref>
            <a>
              <Button>{ctaLabel}</Button>
            </a>
          </Link>
        )}
      </div>
      {isDesktop ? <Image priority={true} width={1900} layout="fill" objectPosition="top" objectFit="cover" quality={90} src={backgroundImage} alt={backgroundImageAlt} /> : <Image priority={true} greyScale={true} width={600} layout="fill" objectFit="cover" quality={80} src={backgroundImageMobile} alt={backgroundImageAlt} />}
    </section.hero>
  );
};

export default StandardHero;
