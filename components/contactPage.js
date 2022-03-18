import StandardHero from "../blocks/standardHero";
import Events from "../components/events";
import ContactAndMap from "./contactAndMap";

const ContactPage = ({ businessInfo, camps, events, headline, hook, subHeadline, backgroundImageAlt, backgroundImage, backgroundImageMobile }) => {
  return (
    <>
      <StandardHero headline={headline} subHeadline={subHeadline} hook={hook} ctaActive={false} backgroundImage={backgroundImage} backgroundImageMobile={backgroundImageMobile} backgroundImageAlt={backgroundImageAlt} />
      <ContactAndMap businessInfo={businessInfo} />
      <Events camps={camps} events={events} />
    </>
  );
};

export default ContactPage;
