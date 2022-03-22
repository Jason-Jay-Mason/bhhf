import { styled } from "@linaria/react";
import { css } from "linaria";
import { breakPoints, fontSize, spacing } from "../styles/theme";
import Image from "../components/image";
import ServiceBar from "../components/serviceBar";
import { useSetPopupSource, usePopupToggle } from "../hooks/usePopUpModal";
import { isDesktop } from "react-device-detect";
//#region styles
const section = {};
section.largeHero = styled.section`
  position: relative;
  z-index: 1;
  .contentLargeHero {
    min-height: 750px;
    position: relative;
    margin: 0 auto;
    padding: ${(props) => (props.popupVideoActive ? "230px 0" : "260px 0 280px 0")};
    width: 100%;
    background-color: rgba(26, 26, 26, 0.3);
    @media ${breakPoints.lrg} {
      min-height: 650px;
      padding: ${(props) => (props.popupVideoActive ? "170px 17px" : "170px 17px")};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  h1,
  h2 {
    text-align: center;
    color: white;
  }
  h1 {
    font-family: "Noto Sertif";
    letter-spacing: -0.5%;
    font-size: ${fontSize.xlrg};

    padding-bottom: ${spacing.s30ish};
    @media ${breakPoints.md} {
      font-size: ${fontSize.med};
    }
  }
  h2 {
    font-weight: 400;
    max-width: 700px;
    font-size: ${fontSize.base};
    line-height: 200.7%;
    margin: 0 auto;
  }
  img,
  video {
    z-index: -1;
  }
  video {
    top: 0;
    left: 0;
    position: absolute;
    object-fit: cover;
    height: 100%;
    width: 100%;
    animation: fadeIn 2s;
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @media ${breakPoints.lrg} {
      display: none;
    }
  }
  .playButton {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    color: white;
    padding-top: ${spacing.s17ish};
    p {
      font-family: "Noto Serif";
      letter-spacing: 2px;
      font-size: ${fontSize.lrg};
      padding-left: ${spacing.s30ish};
      @media ${breakPoints.md} {
        font-size: ${fontSize.med};
        padding-left: ${spacing.s17ish};
      }
    }
    svg {
      @media ${breakPoints.md} {
        width: 40px;
      }
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
const desktopImage = css``;
//#endregion

const LargeHero = ({ services, backgroundImageAltDesktop, backgroundImageAltMobile, backgroundImageSourceDesktop, backgroundImageSourceMobile, backgroundVideoSource, headline, hook, popupVideoActive, popupVideoButtonLabel, popupVideoButtonSource, serviceBarActive, videoBackgroundActive }) => {
  const popupToggle = usePopupToggle();
  const setPopupSource = useSetPopupSource();
  return (
    <>
      <section.largeHero popupVideoActive={popupVideoActive}>
        <div className="contentLargeHero">
          <h1>{headline ? headline : "No Headline!"}</h1>
          <h2>{hook ? hook : "No hook!"}</h2>
          {popupVideoActive ? (
            <div
              className="playButton"
              onClick={() => {
                setPopupSource(popupVideoButtonSource);
                popupToggle(true);
              }}
            >
              <svg width="66" height="69" viewBox="0 0 66 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33 0C14.7979 0 0 15.4705 0 34.5C0 53.5295 14.7979 69 33 69C51.2021 69 66 53.5295 66 34.5C66 15.4705 51.2021 0 33 0ZM43.6295 36.2432L28.0674 47.065C26.7472 48.0094 24.9412 46.9926 24.9412 45.3217V23.6775C24.9412 22.0071 26.7474 20.9903 28.0674 21.9342L43.6295 32.7565C44.8105 33.5554 44.8105 35.4442 43.6295 36.2432Z" fill="white" />
              </svg>
              <p>{popupVideoButtonLabel ? popupVideoButtonLabel : "No Label!"}</p>
            </div>
          ) : null}
        </div>
        {videoBackgroundActive ? (
          isDesktop ? (
            <video src={backgroundVideoSource} autoPlay loop />
          ) : (
            <Image layout="fill" objectFit="cover" width={600} quality={80} src={backgroundImageSourceMobile} alt={backgroundImageAltMobile} />
          )
        ) : isDesktop ? (
          <Image className="desktopImage" layout="fill" objectFit="cover" width={1800} quality={80} src={backgroundImageSourceDesktop} alt={backgroundImageAltDesktop} />
        ) : (
          <Image layout="fill" objectFit="cover" width={600} quality={80} src={backgroundImageSourceMobile} alt={backgroundImageAltMobile} />
        )}
      </section.largeHero>
      {serviceBarActive ? <ServiceBar services={services} /> : null}
    </>
  );
};

export default LargeHero;
