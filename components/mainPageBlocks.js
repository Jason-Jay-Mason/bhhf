import dynamic from "next/dynamic";
import LongFeaturedImage from "../blocks/longFeaturedImage";
import CtaButtons from "../blocks/ctaButtons";
import LargeHero from "../blocks/largeHero";
import PreFooterCta from "../blocks/preFooterCta";
import TestimonialSlider from "../blocks/testimonialSlider";
import StandardHero from "../blocks/standardHero";
import ShortIconGrid from "../blocks/shortIconGrid";
//import FeaturedIconGrid from "../blocks/featuredIconGrid";

const MainPageBlocks = ({ blocks, services, testimonials, pageName }) => {
  return (
    <>
      {blocks?.map((block, i) => {
        switch (block.__typename) {
          case "MainPageBlocksLargeHero":
            return (
              <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                <LargeHero {...block} services={services} data-tinafield="MainPageBlocksLargeHero" />
              </div>
            );
          case "MainPageBlocksHero":
            return (
              <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                <StandardHero {...block} />
              </div>
            );
          case "MainPageBlocksShortIconGrid":
            return (
              <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                <ShortIconGrid {...block} />
              </div>
            );
          case "MainPageBlocksLongFeaturedImage":
            return (
              <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                <LongFeaturedImage {...block} />
              </div>
            );
          case "MainPageBlocksCtaButtons":
            return (
              <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                <CtaButtons {...block} />
              </div>
            );
          case "MainPageBlocksTestimonialSlider":
            return (
              <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                <TestimonialSlider {...block} testimonials={testimonials} pageName={pageName} />
              </div>
            );
          case "MainPageBlocksPreFooterCta":
            return (
              <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                <PreFooterCta {...block} />
              </div>
            );
          case "MainPageBlocksPricingTable":
            const PricingTable = dynamic(() => import("../blocks/pricingTable"), { ssr: false });
            return (
              <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                <PricingTable {...block} />
              </div>
            );
          case "MainPageBlocksFeaturedIconGrid":
            const FeaturedIconGrid = dynamic(() => import("../blocks/featuredIconGrid"), { ssr: false });
            return (
              <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                <FeaturedIconGrid {...block} />
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default MainPageBlocks;
