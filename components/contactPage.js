import StandardHero from "../blocks/standardHero";
import Events from "../components/events";
import ContactAndMap from "./contactAndMap";

const ContactPage = ({ contactHero, camps, events, businessInfo }) => {
  return (
    <>
      <StandardHero {...contactHero} />
      <ContactAndMap businessInfo={businessInfo} />
      <Events camps={camps} events={events} />
    </>
  );
};

export default ContactPage;
