import { styled } from "@linaria/react";
import { fontSize, maxMin, colors, breakPoints, spacing } from "../styles/theme";
import Section from "./section";
import dynamic from "next/dynamic";
const Image = dynamic(() => import("./image"), { ssr: false });
import { useState } from "react";

//#region styles
const div = {};
div.serviceBar = styled.div`
  background-color: ${colors.white};
  max-width: ${maxMin.containerMaxWidth};
  margin: 0 auto;
  font-family: "Noto Serif", "Helvetica", "Arial", sans-serif;
  color: ${colors.linkGrey};
  font-size: 20px;
  text-transform: uppercase;
  margin-top: -60px;
  z-index: 4 !important;
  position: relative;
  border-radius: 3px;
  @media ${breakPoints.xlrg} {
    margin-top: 0;
  }
  @media ${breakPoints.md} {
    font-size: ${fontSize.base};
  }
  .servicesMobile {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media ${breakPoints.xlrg} {
      display: flex;
    }
    svg {
      stroke: ${colors.textBrown};
      fill: none;
      transition: all 0.2s ease;
      margin-top: 1px;
      transform: ${(props) => (props.isVisible ? "rotate(-180deg) translatex(0px) translatey(0)" : "none")};
    }
    h3 {
      display: none;
      padding: ${spacing.s30ish} 0;
      font-size: 20px;
      @media ${breakPoints.xlrg} {
        display: block;
      }
      @media ${breakPoints.md} {
        font-size: ${fontSize.base};
      }
    }
  }
  .services {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    @media ${breakPoints.xlrg} {
      position: relative;
      overflow: hidden;
      flex-direction: column;
      transition: all 0.2s ease;
      justify-content: flex-start;
      opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
      height: ${({ isVisible }) => (isVisible ? "430px" : "0px")};
    }
    @media ${breakPoints.md} {
      height: ${({ isVisible }) => (isVisible ? "400px" : "0px")};
    }
  }
  .service {
    z-index: 4 !important;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    height: 120px;
    transition: all 0.2s ease;
    :hover {
      cursor: default;
      background-color: ${colors.cloudBeige};
      .image {
        visibility: visible;
        opacity: 1;
      }
      h4 {
        border-bottom: solid 1px ${colors.textBrown};
      }
    }
    @media ${breakPoints.xlrg} {
      height: 80px;
    }
    @media ${breakPoints.md} {
      height: 70px;
    }

    @media ${breakPoints.xlrg} {
      :hover {
        background-color: transparent;
        .image {
          visibility: hidden;
        }
        h4 {
          border: none;
        }
      }
    }
  }
  .image {
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s ease;
    background-color: ${colors.backgroundWhite};
    height: 500px;
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 1;
    border: 2px solid black;
    @media ${breakPoints.xxlrg} {
      height: 400px;
    }
    .imageContainer {
      position: relative;
      height: calc(500px - 120px - 17px - 17px);
      margin: ${spacing.s17ish};
      @media ${breakPoints.xxlrg} {
        height: calc(400px - 120px - 10px - 10px);
        margin: ${spacing.s10ish};
      }
    }
  }
`;
//#endregion

const ServiceBar = ({ services }) => {
  const [isVisible, setVisible] = useState(false);
  return (
    <Section>
      <div.serviceBar isVisible={isVisible}>
        <div
          className="servicesMobile"
          onClick={() => {
            setVisible(!isVisible);
          }}
        >
          <h3>services</h3>
          <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </div>
        <div className="services">
          {services
            ? services.map((service, i) => {
                return (
                  <div className="service" key={service + i + "service"}>
                    <div className="image">
                      <div className="imageContainer">
                        <Image layout="fill" objectFit="cover" src={service.serviceBarImage} height={400} quality={70} alt={service.title} />
                      </div>
                    </div>
                    <h4>{service.title}</h4>
                  </div>
                );
              })
            : null}
        </div>
      </div.serviceBar>
    </Section>
  );
};

export default ServiceBar;
