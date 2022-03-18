import dynamic from "next/dynamic";
import LongFeaturedImage from "../blocks/longFeaturedImage";
import CtaButtons from "../blocks/ctaButtons";
import LargeHero from "../blocks/largeHero";
import PreFooterCta from "../blocks/preFooterCta";
import TestimonialSlider from "../blocks/testimonialSlider";
import StandardHero from "../blocks/standardHero";
import ShortIconGrid from "../blocks/shortIconGrid";

const MainPageBlocks = ({ blocks, services, testimonials, pageName }) => {
  return (
    <>
      {blocks?.map((block, i) => {
        switch (block.__typename) {
          case "MainPageBlocksLargeHero":
            return <LargeHero {...block} services={services} />;
          case "MainPageBlocksHero":
            return <StandardHero {...block} />;
          case "MainPageBlocksShortIconGrid":
            return <ShortIconGrid {...block} />;
          case "MainPageBlocksLongFeaturedImage":
            return <LongFeaturedImage {...block} />;
          case "MainPageBlocksCtaButtons":
            return <CtaButtons {...block} />;
          case "MainPageBlocksTestimonialSlider":
            return <TestimonialSlider {...block} testimonials={testimonials} pageName={pageName} />;
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
