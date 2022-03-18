import { styled } from "@linaria/react";
import { breakPoints, maxMin, spacing } from "../styles/theme";
import Section from "./section";
import EventSection from "./eventSection";

//#region styles
const div = {};
div.events = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  max-width: ${maxMin.containerMaxWidth};
  margin: 0 auto;
  padding-bottom: ${spacing.s195ish};
  @media ${breakPoints.lrg} {
    flex-direction: column;
  }
`;
//#endregion

const Events = ({ camps: { campList }, events: { eventList } }) => {
  return (
    <Section>
      <div.events>
        <EventSection title={"Upcoming Events"} events={eventList} />
        <EventSection title={"Upcoming Camps"} events={campList} ctaButton={true} />
      </div.events>
    </Section>
  );
};

export default Events;
