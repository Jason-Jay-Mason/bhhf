import { styled } from "@linaria/react";
import { colors, breakPoints, spacing } from "../styles/theme";
import { useEffect, useState } from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import useWindowSize from "../hooks/useWindowSize";
import moment from "moment";
import Link from "next/dist/client/link";

//#region styles
const div = {};
div.eventCard = styled.div`
  background-color: ${colors.rainCloudBeigeTwo};
  padding: ${spacing.s45ish} ${spacing.s75ish};
  margin-bottom: ${spacing.s30ish};
  min-height: 440px;
  animation: fadeIn 1s;
  @media ${breakPoints.md} {
    padding: ${spacing.s45ish} ${spacing.s17ish};
    text-align: center;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  h6 {
    font-family: "Noto Serif";
    font-size: 20px;
    font-weight: bold;
    line-height: 135%;
    letter-spacing: 0.03em;
    padding-bottom: 7px;
  }
  span {
    font-family: "Open Sans";
    font-weight: 100;
  }
  .eventCardHeadline {
    display: flex;
    flex-direction: column;
    padding-bottom: ${spacing.s30ish};
  }
  .eventDescription {
    max-height: ${({ expanded }) => (expanded ? "none" : "149px")};
    overflow: hidden;
  }
  .showMore {
    text-align: left;
    cursor: pointer;
    @media ${breakPoints.md} {
      text-align: center;
    }
  }
  button {
    cursor: pointer;
    height: 60px;
    padding: 0 ${spacing.s45ish};
    margin-top: ${spacing.s17ish};
    background-color: ${colors.textBrown};
    border-radius: 3px;
    color: ${colors.white};
    opacity: 1;
    transition: opacity 0.2s ease;
    :hover {
      opacity: 0.9;
    }
  }
`;
//#endregion

const EventCard = ({ event, index }) => {
  const [expanded, setExpanded] = useState(false);
  const [readMore, setReadMore] = useState();
  const [width, _] = useWindowSize();
  const date = moment(event?.date).format("LL");
  const endDate = moment(event?.endDate).format("LL");
  useEffect(() => {
    const handler = setTimeout(() => {
      let element = document.getElementById(`${index + event.title}-event-card`);

      if (element.scrollHeight > element.clientHeight + 5) {
        setReadMore(true);
      } else {
        setReadMore(false);
      }
    }, 100);
    return () => clearTimeout(handler);
  }, [width]);
  return (
    <div.eventCard expanded={expanded}>
      <div className="eventCardHeadline">
        <div className="eventHeadlineText">
          <h6>{event?.title}</h6>

          {event?.toggleDates && (
            <span>
              {date} {event.toggleEndDates && " - " + endDate}
            </span>
          )}
        </div>
      </div>
      <div id={`${index + event.title}-event-card`} className="eventDescription">
        <TinaMarkdown content={event.description} />
      </div>
      {readMore ? (
        <p
          className="showMore"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {expanded ? "show less" : "...show more"}
        </p>
      ) : (
        <p> &nbsp; </p>
      )}
      {event?.ctaLabel && (
        <Link href={event.ctaHref ? event.ctaHref : "/contact"} passHref>
          <a>
            <button>{event?.ctaLabel}</button>
          </a>
        </Link>
      )}
    </div.eventCard>
  );
};

export default EventCard;
