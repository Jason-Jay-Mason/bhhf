import dynamic from "next/dynamic";
import TitledIconBlurb from "../blocks/titledIconBlurb";
import CenteredIconBlurb from "../blocks/centeredIconBlurb";
import Button from "../blocks/button";

const FeaturedImageBlocks = ({ blocks }) => {
  return (
    <>
      {blocks?.map((block, i) => {
        switch (block.__typename) {
          case "MainPageBlocksLongFeaturedImageBlocksCenteredIconBlurb":
            return <CenteredIconBlurb {...block} />;
          case "MainPageBlocksLongFeaturedImageBlocksIconListBlurb":
            return <CenteredIconBlurb list={true} {...block} />;
          case "MainPageBlocksLongFeaturedImageBlocksButton":
            return <Button {...block} />;
          case "MainPageBlocksLongFeaturedImageBlocksTitledIconBlurb":
            return <TitledIconBlurb {...block} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default FeaturedImageBlocks;
