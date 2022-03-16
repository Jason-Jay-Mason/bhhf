import { styled } from "@linaria/react";
import { spacing, colors, maxMin, breakPoints } from "../styles/theme";
import Image from "./image";
import FeaturedImageBlocks from "./featuredImageBlocks";

//#region styles
const div = {};
div.featuredImage = styled.div`
  background-color: ${colors.rainCloudBeige};
  max-width: ${maxMin.containerMaxWidth};
  margin: 0 auto;
  position: relative;
  display: flex;
  border-radius: 4px;
  .image,
  .contentBlocks {
    width: 50%;
  }
  .image {
    position: relative;
    border-radius: 4px 0 0 4px;
    img {
      position: absolute;
      border-radius: 4px 0 0 4px;
    }
  }
  .contentBlocks {
    padding: ${spacing.s120ish} 0 ${spacing.s45ish} 0;
  }
  @media ${breakPoints.lrg} {
    flex-direction: column;
    .contentBlocks,
    .image {
      width: 100%;
    }
    .image {
      height: 100vw;
      min-height: 550px;
    }
  }
`;
//#endregion

const FeaturedImage = ({ blocks, featuredImageRightActive, featuredImage }) => {
  //const firstImage = typeof featuredImage == "object" ? featuredImage[0] : "/no-image.svg";
  const checkImage = (image) => {
    if (image) {
      if (image[0].image) {
        if (image[0].image.length) {
          return true;
        }
      }
    }
    return false;
  };
  const hasImage = checkImage(featuredImage);

  return (
    <div.featuredImage featuredImageRightActive={featuredImageRightActive}>
      {featuredImageRightActive ? (
        <>
          <div className="contentBlocks">
            <FeaturedImageBlocks blocks={blocks} />
          </div>
          <div className="image">
            <Image src={featuredImage ? featuredImage[0].image : null} layout="fill" objectFit="cover" quality={80} alt={featuredImage?.title} />
          </div>
        </>
      ) : (
        <>
          <div className="image">
            <Image src={featuredImage ? featuredImage[0].image : null} layout="fill" objectFit="cover" quality={80} alt={featuredImage?.title} />
          </div>
          <div className="contentBlocks">
            <FeaturedImageBlocks blocks={blocks} />
          </div>
        </>
      )}
    </div.featuredImage>
  );
};

export default FeaturedImage;
