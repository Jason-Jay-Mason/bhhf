import Section from "../components/section";
import MainHeadline from "../components/mainHeadline";
import LongText from "../components/longText";
import FeaturedImage from "../components/featuredImage";

const LongFeaturedImage = ({ blocks, bottomPaddingActive, featuredImage, featuredImageRightActive, standardHeadline, standardSubHeadline, twoColumnText, backgroundColor }) => {
  const hasText = twoColumnText?.children[0]?.children[0]?.text?.length > 0;
  const hasHeadline = standardHeadline?.length > 0 && standardSubHeadline?.length > 0;
  return (
    <Section>
      {hasHeadline && <MainHeadline headline={standardHeadline} subHeadline={standardSubHeadline} />}
      {hasText && <LongText text={twoColumnText} />}
      <FeaturedImage blocks={blocks} featuredImage={featuredImage} featuredImageRightActive={featuredImageRightActive} bottomPaddingActive={bottomPaddingActive} backgroundColor={backgroundColor} />
    </Section>
  );
};

export default LongFeaturedImage;
