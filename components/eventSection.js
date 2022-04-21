import { styled } from "@linaria/react";
import { breakPoints, colors, fontSize, spacing } from "../styles/theme";
import EventCard from "./eventCard";
import { useState } from "react";
import Spinner from "./loadingSpinner";
import Link from "next/link";

//#region styles
const div = {};
div.eventSection = styled.div`
  background-color: ${colors.rainCloudBeige};
  width: 49%;
  padding: ${spacing.s75ish} 3.9%;
  display: flex;
  flex-direction: column;
  color: ${colors.textBrown};
  justify-content: space-between;
  @media ${breakPoints.lrg} {
    max-width: 800px;
    padding: ${spacing.s75ish} 0;
    margin: 0 auto ${spacing.s45ish} auto;
    width: 100%;
  }
  .globalLink {
    width: 100%;
    text-align: center;
    margin-top: -30px;
    padding-bottom: ${spacing.s17ish};
    a {
      color: ${colors.textBrown};
    }
    svg {
      position: relative;
      top: 2px;
      padding-top: 1px;
      margin: 5px 0 0 ${spacing.s10ish};
    }
  }
  .error {
    text-align: center;
  }
  .hidden {
    opacity: 0.3;
    filter: saturate(0.8);
  }
  .arrowButtons {
    margin-bottom: auto;
    padding: ${spacing.s17ish} 0;
    margin: 0 auto;
    width: fit-content !important;
    position: relative;
    bottom: 0;

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
    font-family: "Noto Serif", "Helvetica", "Arial", sans-serif;
    font-size: ${fontSize.med};
    font-weight: lighter;
    line-height: 135%;
    letter-spacing: 0.03em;
    text-align: center;
    padding-bottom: ${spacing.s45ish};
  }
`;
//#endregion

const EventSection = ({ events, title, error, pageLimit, ctaLeft, globalLink }) => {
  const [visibleEvents, setVisibleEvents] = useState(pageLimit - 1);
  const handleVisibleEvents = (direction) => {
    if (direction === "forward") {
      setVisibleEvents(visibleEvents + pageLimit);
    }
    if (direction === "back") {
      setVisibleEvents(visibleEvents - pageLimit);
    }
  };
  const todaysDate = new Date();
  const currentEvents = events?.filter((event) => {
    if (!event?.toggleDates) {
      return event;
    }
    if (event?.toggleEndDates) {
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

  if (error) {
    return (
      <div.eventSection>
        <div>
          <h4>{title}</h4>
          <p className="error"> Oops! It looks like there was an error loading {title}.</p>
        </div>
      </div.eventSection>
    );
  }

  if (!events) {
    return (
      <div.eventSection>
        <h4>{title}</h4>
        <Spinner />
      </div.eventSection>
    );
  }

  return (
    <div.eventSection>
      <div>
        <h4>{title}</h4>
        {globalLink && (
          <div className="globalLink">
            <Link href={globalLink ? globalLink : "/contact"} passHref>
              <a>
                View All {title}
                <svg className="arrow" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 7L8 7" stroke="#343232" strokeWidth="3" />
                  <path d="M12.8343 6.8512C12.9228 6.93067 12.9228 7.06933 12.8343 7.1488L6.58364 12.7625C6.45488 12.8782 6.25 12.7868 6.25 12.6137L6.25 1.38626C6.25 1.21321 6.45489 1.12183 6.58364 1.23746L12.8343 6.8512Z" fill="#343232" />
                </svg>
              </a>
            </Link>
          </div>
        )}
        {currentEvents ? (
          currentEvents.map((event, i) => {
            if (i <= visibleEvents && i >= visibleEvents - (pageLimit - 1)) return <EventCard key={event + i + "event"} event={event} index={i} ctaLeft={ctaLeft} />;
          })
        ) : (
          <p className="error">There are currently no events listed!</p>
        )}
      </div>

      <div className="arrowButtons">
        <button
          className={visibleEvents === pageLimit - 1 ? "back hidden" : "back"}
          onClick={() => {
            handleVisibleEvents("back");
          }}
          disabled={visibleEvents === pageLimit - 1}
        >
          <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.3455 15.8128C0.788889 15.4139 0.788888 14.5861 1.3455 14.1872L20.3789 0.545771C21.0406 0.0715207 21.9614 0.544467 21.9614 1.35857L21.9614 28.6414C21.9614 29.4555 21.0406 29.9285 20.3789 29.4542L1.3455 15.8128Z" fill="white" />
          </svg>
        </button>
        <button
          className={visibleEvents >= currentEvents?.length - 1 ? "forward hidden" : "forward"}
          onClick={() => {
            handleVisibleEvents("forward");
          }}
          disabled={visibleEvents >= currentEvents?.length - 1}
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
