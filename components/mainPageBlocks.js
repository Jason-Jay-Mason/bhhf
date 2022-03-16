import dynamic from "next/dynamic";
import LongFeaturedImage from "../blocks/longFeaturedImage";
import CtaButtons from "../blocks/ctaButtons";
import LargeHero from "./largeHero";
import PreFooterCta from "./preFooterCta";

const MainPageBlocks = ({ blocks, services }) => {
  return (
    <>
      {blocks?.map((block, i) => {
        switch (block.__typename) {
          case "MainPageBlocksLargeHero":
            return <LargeHero {...block} services={services} />;
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
            return <PreFooterCta {...block} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default MainPageBlocks;
