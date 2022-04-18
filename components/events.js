import { styled } from "@linaria/react";
import { breakPoints, maxMin, spacing } from "../styles/theme";
import Section from "./section";
import EventSection from "./eventSection";
import useSWR from "swr";

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

const fetchFunc = (input, init) => {
  return fetch(input, init).then((res) => res.json());
};

const Events = ({ events: { eventList } }) => {
  const { data, error } = useSWR("/api/camp-data", fetchFunc);
  const campData = data?.camps;
  const campPage = "https://brokenhearthorsefarm.getomnify.com/#!/home";
  return (
    <Section>
      <div.events>
        <EventSection title={"Upcoming Events"} events={eventList} pageLimit={2} />
        <EventSection title={"Upcoming Camps"} events={campData} ctaButton={true} error={error} pageLimit={3} ctaLeft={true} globalLink={campPage} />
      </div.events>
    </Section>
  );
};

export default Events;
