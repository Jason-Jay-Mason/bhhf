import dynamic from "next/dynamic";
import LongFeaturedImage from "../blocks/longFeaturedImage";
import CtaButtons from "../blocks/ctaButtons";

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
            return <CtaButtons {...block} />;
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
