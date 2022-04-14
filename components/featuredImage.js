import { styled } from "@linaria/react";
import { spacing, colors, maxMin, breakPoints } from "../styles/theme";
import Image from "./image";
import FeaturedImageBlocks from "./featuredImageBlocks";
import ImageDisplay from "./imageDisplay";

//#region styles
const div = {};
div.featuredImage = styled.div`
  background-color: ${({ backgroundColor }) => {
    switch (backgroundColor) {
      case "Rain Cloud Beige":
        return colors.rainCloudBeige;
      case "Rain Cloud Beige 2":
        return colors.rainCloudBeigeTwo;
      default:
        return colors.rainCloudBeige;
    }
  }};
  max-width: ${maxMin.containerMaxWidth};
  margin: 0 auto;
  margin-bottom: ${(props) => (props.bottomPaddingActive ? spacing.s120ish : "0")};
  position: relative;
  display: flex;
  border-radius: 4px;
  @media ${breakPoints.lrg} {
    flex-direction: column;
  }
  .contentBlocks {
    padding: ${spacing.s120ish} 0 ${spacing.s45ish} 0;
    width: 50%;
    @media ${breakPoints.lrg} {
      width: 100%;
    }
  }
`;

//#endregion

const FeaturedImage = ({ blocks, featuredImageRightActive, featuredImage, bottomPaddingActive, backgroundColor }) => {
  return (
    <div.featuredImage featuredImageRightActive={featuredImageRightActive} bottomPaddingActive={bottomPaddingActive} backgroundColor={backgroundColor}>
      {featuredImageRightActive ? (
        <>
          <div className="contentBlocks">
            <FeaturedImageBlocks blocks={blocks} />
          </div>
          <ImageDisplay featuredImage={featuredImage} />
        </>
      ) : (
        <>
          <ImageDisplay featuredImage={featuredImage} />
          <div className="contentBlocks">
            <FeaturedImageBlocks blocks={blocks} />
          </div>
        </>
      )}
    </div.featuredImage>
  );
};

export default FeaturedImage;
