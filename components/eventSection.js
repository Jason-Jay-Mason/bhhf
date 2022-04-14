import { styled } from "@linaria/react";
import { breakPoints, colors, fontSize, spacing } from "../styles/theme";
import EventCard from "./eventCard";
import { useState } from "react";

//#region styles
const div = {};
div.eventSection = styled.div`
  background-color: ${colors.rainCloudBeige};
  width: 49%;
  padding: ${spacing.s75ish} 3.9%;
  display: flex;
  flex-direction: column;
  color: ${colors.textBrown};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${breakPoints.lrg} {
    max-width: 800px;
    padding: ${spacing.s75ish} 0;
    margin: 0 auto ${spacing.s45ish} auto;
    width: 100%;
  }
  .arrowButtons {
    margin-bottom: auto;
    padding: ${spacing.s17ish} 0;
    margin: 0 auto;
    width: fit-content;
    button {
      transition: all 0.2s ease;
      cursor: pointer;
      background-color: ${colors.arrowButtonBeige};
      width: 56px;
      height: 56px;
      position: relative;
      margin: 0;
      padding: 0;
      :disabled {
        :hover {
          background-color: ${colors.arrowButtonBeige};
          cursor: default;
        }
      }
      :hover {
        background-color: ${colors.arrowButtonHoverBeige};
      }
      svg {
        position: relative;
        top: 2px;
      }
    }
    .forward {
      margin-left: 17px;
      svg {
        transform: rotate(-180deg);
        left: 3px;
      }
    }
    .back {
      margin-right: 17px;
      svg {
        left: -3px;
      }
    }
  }
  h4 {
    font-family: "Noto Serif";
    font-size: ${fontSize.med};
    font-weight: lighter;
    line-height: 135%;
    letter-spacing: 0.03em;
    text-align: center;
    padding-bottom: ${spacing.s45ish};
  }
`;
//#endregion

const EventSection = ({ events, title }) => {
  const [visibleEvents, setVisibleEvents] = useState(1);
  const handleVisibleEvents = (direction) => {
    if (direction === "forward") {
      setVisibleEvents(visibleEvents + 2);
    }
    if (direction === "back") {
      setVisibleEvents(visibleEvents - 2);
    }
  };
  const todaysDate = new Date();
  const currentEvents = events.filter((event) => {
    if (!event.toggleDates) {
      return event;
    }
    if (event.toggleEndDates) {
      const eventEnd = new Date(event?.endDate);
      if (todaysDate < eventEnd) {
        return event;
      }
    }
    const eventStart = new Date(event?.date);
    if (todaysDate < eventStart) {
      return event;
    }
    return null;
  });
  return (
    <div.eventSection>
      <div>
        <h4>{title}</h4>
        {currentEvents ? (
          currentEvents.map((event, i) => {
            if (i === visibleEvents || i === visibleEvents - 1) return <EventCard key={event + i + "event"} event={event} index={i} />;
          })
        ) : (
          <p>There are currently no events listed!</p>
        )}
      </div>

      <div className="arrowButtons">
        <button
          className="back"
          onClick={() => {
            handleVisibleEvents("back");
          }}
          disabled={visibleEvents === 1}
        >
          <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.3455 15.8128C0.788889 15.4139 0.788888 14.5861 1.3455 14.1872L20.3789 0.545771C21.0406 0.0715207 21.9614 0.544467 21.9614 1.35857L21.9614 28.6414C21.9614 29.4555 21.0406 29.9285 20.3789 29.4542L1.3455 15.8128Z" fill="white" />
          </svg>
        </button>
        <button
          className="forward"
          onClick={() => {
            handleVisibleEvents("forward");
          }}
          disabled={visibleEvents >= events.length - 1}
        >
          <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.3455 15.8128C0.788889 15.4139 0.788888 14.5861 1.3455 14.1872L20.3789 0.545771C21.0406 0.0715207 21.9614 0.544467 21.9614 1.35857L21.9614 28.6414C21.9614 29.4555 21.0406 29.9285 20.3789 29.4542L1.3455 15.8128Z" fill="white" />
          </svg>
        </button>
      </div>
    </div.eventSection>
  );
};

export default EventSection;
