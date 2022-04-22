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

//A function to reorder camps by date before returned from the fetch function
const orderCamps = (camps) => {
  // Convert date string to an int for each camp
  const newArr = camps?.map((camp) => {
    let num = parseInt(camp?.date?.replaceAll("-", ""));
    return {
      ...camp,
      dateNum: num,
    };
  });
  //reorder the array by date
  let ordered = {};
  let final = [];
  for (let i = 0; i < newArr.length; i++) {
    if (ordered[newArr[i].dateNum]) {
      if (ordered[newArr[i].dateNum].length) {
        ordered[newArr[i].dateNum] = [...ordered[newArr[i].dateNum], newArr[i]];
      }
      ordered[newArr[i].dateNum] = [ordered[newArr[i].dateNum], newArr[i]];
    } else {
      ordered[newArr[i].dateNum] = newArr[i];
    }
  }
  let keys = Object.keys(ordered);
  for (let j = 0; j < keys.length; j++) {
    if (ordered[keys[j]].length) {
      ordered[keys[j]].forEach((element) => {
        final.push(element);
      });
    } else {
      final.push(ordered[keys[j]]);
    }
  }
  return final;
};

const fetchFunc = async (input, init) => {
  const data = await fetch(input, init);
  const dataJson = await data.json();
  const final = orderCamps(dataJson.camps);
  return final;
};

const Events = ({ events: { eventList } }) => {
  const { data, error } = useSWR("/api/camp-data", fetchFunc);
  const campData = data;
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
