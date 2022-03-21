import TitledIconBlurb from "../blocks/titledIconBlurb";
import CenteredIconBlurb from "../blocks/centeredIconBlurb";
import Button from "../blocks/button";

const FeaturedImageBlocks = ({ blocks }) => {
  return (
    <>
      {blocks?.map((block, i) => {
        switch (block.__typename) {
          case "MainPageBlocksLongFeaturedImageBlocksCenteredIconBlurb":
            return (
              <div key={i + block.__typename}>
                <CenteredIconBlurb {...block} />{" "}
              </div>
            );
          case "MainPageBlocksLongFeaturedImageBlocksIconListBlurb":
            return (
              <div key={i + block.__typename}>
                <CenteredIconBlurb list={true} {...block} />
              </div>
            );
          case "MainPageBlocksLongFeaturedImageBlocksButton":
            return (
              <div key={i + block.__typename}>
                <Button {...block} />
              </div>
            );
          case "MainPageBlocksLongFeaturedImageBlocksTitledIconBlurb":
            return (
              <div key={i + block.__typename}>
                <TitledIconBlurb {...block} />
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default FeaturedImageBlocks;
