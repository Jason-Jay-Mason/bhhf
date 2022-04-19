import { styled } from "@linaria/react";
import { css } from "linaria";
import { breakPoints, fontSize, spacing } from "../styles/theme";
import Image from "../components/image";
import ServiceBar from "../components/serviceBar";
import { useSetPopupSource, usePopupToggle } from "../hooks/usePopUpModal";
import { isDesktop } from "react-device-detect";
import { TinaMarkdown } from "tinacms/dist/rich-text";
//#region styles
const section = {};
section.largeHero = styled.section`
  position: relative;
  z-index: 1;
  .contentLargeHero {
    position: relative;
    margin: 0 auto;
    padding: 215px 0 300px 0;
    width: 100%;
    background-color: rgba(51, 49, 48, 0.6);
    @media ${breakPoints.xxlrg} {
      padding: 180px 0 220px 0;
    }
    @media ${breakPoints.xlrg} {
      padding: 135px 0 150px 0;
    }
    @media ${breakPoints.lrg} {
      min-height: 500px;
      padding: ${(props) => (props.popupVideoActive ? "170px 17px" : "170px 17px")};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    @media ${breakPoints.md} {
      min-height: 300px;
      padding: ${(props) => (props.popupVideoActive ? "100px 17px" : "100px 17px")};
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
    font-family: "Noto Serif", "Helvetica", "Arial", sans-serif;
    letter-spacing: -0.5%;
    font-size: ${fontSize.xlrg};
    max-width: 700px;
    margin: 0 auto;
    padding-bottom: ${spacing.s30ish};
    @media ${breakPoints.md} {
      font-size: ${fontSize.med};
    }
  }
  h2 {
    font-weight: 300;
    max-width: 700px;
    font-size: 20px;
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
      font-family: "Noto Serif", "Helvetica", "Arial", sans-serif;
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
  span {
    z-index: -1;
    filter: saturate(70%) brightness(110%);
  }
`;
const desktopImage = css``;
//#endregion

const LargeHero = ({ desktopBackgroundPosition, services, backgroundImageAltDesktop, backgroundImageAltMobile, backgroundImageSourceDesktop, backgroundImageSourceMobile, backgroundVideoSource, headline, richHook, popupVideoActive, popupVideoButtonLabel, popupVideoButtonSource, serviceBarActive, videoBackgroundActive }) => {
  const popupToggle = usePopupToggle();
  const setPopupSource = useSetPopupSource();

  return (
    <>
      <section.largeHero popupVideoActive={popupVideoActive}>
        <div className="contentLargeHero">
          <h1>{headline ? headline : "No Headline!"}</h1>
          <TinaMarkdown content={richHook} />
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
            <Image layout="fill" objectFit="cover" width={600} quality={90} objectPosition={desktopBackgroundPosition ? desktopBackgroundPosition : "center"} src={backgroundImageSourceMobile} alt={backgroundImageAltMobile} />
          )
        ) : isDesktop ? (
          <Image className="desktopImage" layout="fill" objectFit="cover" width={1600} quality={85} objectPosition={desktopBackgroundPosition ? desktopBackgroundPosition : "center"} src={backgroundImageSourceDesktop} alt={backgroundImageAltDesktop} />
        ) : (
          <Image layout="fill" objectFit="cover" width={600} quality={80} objectPosition={desktopBackgroundPosition ? desktopBackgroundPosition : "center"} src={backgroundImageSourceMobile} alt={backgroundImageAltMobile} />
        )}
      </section.largeHero>
      {serviceBarActive && services && <ServiceBar services={services} />}
    </>
  );
};

export default LargeHero;
