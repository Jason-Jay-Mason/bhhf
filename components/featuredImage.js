import { styled } from "@linaria/react";
import { spacing, colors, maxMin, breakPoints } from "../styles/theme";
import Image from "./image";
import FeaturedImageBlocks from "./featuredImageBlocks";
import ImageDisplay from "./imageDisplay";

//#region styles
const div = {};
div.featuredImage = styled.div`
  background-color: ${colors.rainCloudBeige};
  max-width: ${maxMin.containerMaxWidth};
  margin: 0 auto;
  position: relative;
  display: flex;
  border-radius: 4px;
  @media ${breakPoints.lrg} {
    flex-direction: column;
  }
  .contentBlocks {
    width: 50%;
    @media ${breakPoints.lrg} {
      width: 100%;
    }
  }
  .contentBlocks {
    padding: ${spacing.s120ish} 0 ${spacing.s45ish} 0;
  }
`;

//#endregion

const FeaturedImage = ({ blocks, featuredImageRightActive, featuredImage }) => {
  return (
    <div.featuredImage featuredImageRightActive={featuredImageRightActive}>
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
