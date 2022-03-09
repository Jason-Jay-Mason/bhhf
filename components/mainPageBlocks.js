import dynamic from "next/dynamic";

const MainPageBlocks = ({ blocks }) => {
  return (
    <>
      {blocks?.map((block, i) => {
        switch (block.__typename) {
          case "MainPageBlocksLargeHero":
            return <p>{block.__typename}</p>;
          case "MainPageBlocksHero":
            return <p>{block.__typename}</p>;
          case "MainPageBlocksShortIconGrid":
            return <p>{block.__typename}</p>;
          case "MainPageBlocksLongFeaturedImage":
            return <p>{block.__typename}</p>;
          case "MainPageBlocksCtaButtons":
            return <p>{block.__typename}</p>;
          case "MainPageBlocksTestimonialSlider":
            return <p>{block.__typename}</p>;
          case "MainPageBlocksPreFooterCta":
            return <p>{block.__typename}</p>;
          default:
            return null;
        }
      })}
    </>
  );
};

export default MainPageBlocks;
