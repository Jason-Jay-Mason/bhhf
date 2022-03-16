import { styled } from "@linaria/react";
import { fontSize, maxMin, colors, breakPoints, spacing } from "../styles/theme";
import Section from "./section";
import Image from "./image";

//#region styles
const div = {};
div.serviceBar = styled.div`
  background-color: ${colors.white};
  max-width: ${maxMin.containerMaxWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Noto Serif";
  color: ${colors.linkGrey};
  font-size: 20px;
  text-transform: uppercase;
  margin-top: -60px;
  z-index: 5;
  position: relative;
  border-radius: 3px;
  @media ${breakPoints.xlrg} {
    display: none;
  }
  .service {
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
  return (
    <Section>
      <div.serviceBar>
        {services
          ? services.map((service) => {
              return (
                <>
                  <div className="service">
                    <div className="image">
                      <div className="imageContainer">
                        <Image layout="fill" objectFit="cover" src={service.serviceBarImage} height={400} quality={70} />
                      </div>
                    </div>
                    <h4>{service.title}</h4>
                  </div>
                </>
              );
            })
          : null}
      </div.serviceBar>
    </Section>
  );
};

export default ServiceBar;
