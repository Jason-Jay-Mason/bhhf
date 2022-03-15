import dynamic from "next/dynamic";
import LongFeaturedImage from "../blocks/longFeaturedImage";

const MainPageBlocks = ({ blocks }) => {
  return (
    <>
      {blocks?.map((block, i) => {
        switch (block.__typename) {
          case "MainPageBlocksLargeHero":
            return;
          case "MainPageBlocksHero":
            return;
          case "MainPageBlocksShortIconGrid":
            return;
          case "MainPageBlocksLongFeaturedImage":
            return <LongFeaturedImage {...block} />;
          case "MainPageBlocksCtaButtons":
            return;
          case "MainPageBlocksTestimonialSlider":
            return;
          case "MainPageBlocksPreFooterCta":
            return;
          default:
            return null;
        }
      })}
    </>
  );
};

export default MainPageBlocks;
