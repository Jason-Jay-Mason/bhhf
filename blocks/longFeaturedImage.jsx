import { styled } from "@linaria/react";
import { theme } from "../styles/theme";
import Section from "../components/section";
import MainHeadline from "../components/mainHeadline";
import LongText from "../components/longText";

//#region styles
const div = {};
//#endregion

const LongFeaturedImage = () => {
  return (
    <Section>
      <MainHeadline text={{ headline: "Hook Saying What They Get", subHeadline: "Meet Broken Heart" }} />
      <LongText />
    </Section>
  );
};

export default LongFeaturedImage;
