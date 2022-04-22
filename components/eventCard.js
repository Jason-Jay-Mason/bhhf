import { styled } from "@linaria/react";
import { colors, breakPoints, spacing } from "../styles/theme";
import { useEffect, useState } from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import useWindowSize from "../hooks/useWindowSize";
import moment from "moment";
import Link from "next/dist/client/link";
import Svg from "./renderSvg";

//#region styles
const div = {};
div.eventCard = styled.div`
  background-color: ${colors.rainCloudBeigeTwo};
  padding: ${spacing.s45ish} ${spacing.s45ish};
  margin-bottom: ${spacing.s30ish};
  animation: fadeIn 1s;
  @media ${breakPoints.xlrg} {
    padding: ${spacing.s45ish} ${spacing.s45ish};
  }
  @media ${breakPoints.lrg} {
    padding: ${spacing.s45ish} ${spacing.s45ish};
    max-width: 600px;
    margin: 0 auto ${spacing.s45ish} auto;
  }
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
  .wrapper {
    max-width: 530px;
    margin: 0 auto;
  }
  h6 {
    font-family: "Noto Serif", "Helvetica", "Arial", sans-serif;
    font-size: 20px;
    font-weight: bold;
    line-height: 135%;
    letter-spacing: 0.03em;
    padding-bottom: 7px;
  }
  span {
    font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
    font-weight: 100;
  }
  button {
    cursor: pointer;
    height: 60px;
    padding: 0 ${spacing.s45ish};
    background-color: ${colors.textBrown};
    border-radius: 3px;
    color: ${colors.white};
    opacity: 1;
    transition: opacity 0.2s ease;
    :hover {
      opacity: 0.9;
    }
  }
  .eventCardHeadline {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    @media ${breakPoints.xlrg} {
      flex-direction: column;
      width: 100%;
    }
    @media ${breakPoints.md} {
      text-align: center;
      justify-content: center;
    }
    .eventHeadlineText {
      text-align: left;
      width: 100%;
      @media ${breakPoints.xlrg} {
        width: 100%;
      }
      @media ${breakPoints.md} {
        text-align: center;
        justify-content: center;
      }
    }
    .ctaLeft {
      width: 50%;
      position: relative;
      justify-self: flex-end;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      @media ${breakPoints.xlrg} {
        justify-content: flex-start;
        width: 100%;
      }
      @media ${breakPoints.md} {
        text-align: center;
        justify-content: center;
      }

      button {
        margin: 0 0 0 10px;
        white-space: nowrap;
        @media ${breakPoints.xlrg} {
          margin: ${spacing.s17ish} 0 0 0;
        }
      }
    }
  }
  .logos {
    width: 60%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    @media ${breakPoints.xlrg} {
      justify-content: flex-start;
      padding: ${spacing.s17ish} ${spacing.s17ish} 0 0;
    }
    @media ${breakPoints.md} {
      justify-content: center;
      margin: 0 auto;
    }
    object {
      max-width: 65px;
      max-height: 65px;
      padding-left: ${spacing.s10ish};
      filter: ${colors.iconFilter};
    }
  }
  .eventDescription {
    padding-top: ${spacing.s30ish};
    max-height: ${({ expanded }) => (expanded ? "none" : "148px")};
    overflow: hidden;
  }
  .showMore {
    text-align: left;
    cursor: pointer;
    opacity: 1;
    height: 40px;
    transition: all 0.2s ease;
    @media ${breakPoints.md} {
      text-align: center;
    }
  }
  .hideShowMore {
    opacity: 0;
    visibility: collapse;
    height: 0;
    transition: all 0.2s ease;
  }

  .ctaBottom {
    button {
      margin-top: ${spacing.s17ish};
    }
  }
`;
//#endregion

const EventCard = ({ event, index, ctaLeft }) => {
  const [expanded, setExpanded] = useState(false);
  const [readMore, setReadMore] = useState();
  const [width, _] = useWindowSize();
  const date = moment(event?.date).format("LL");
  const endDate = moment(event?.endDate).format("LL");

  useEffect(() => {
    const handler = setTimeout(() => {
      let element = document.getElementById(`${index + event.title}-event-card`);
      if (element === null) {
        return;
      }
      if (element.scrollHeight > element.clientHeight + 1) {
        setReadMore(true);
      } else {
        setReadMore(false);
      }
    }, 100);
    return () => clearTimeout(handler);
  }, [width]);

  return (
    <div.eventCard expanded={expanded}>
      <div className="wrapper">
        <div className="eventCardHeadline">
          <div className="eventHeadlineText">
            <h6>{event?.title}</h6>
            {event?.toggleDates && (
              <span>
                {date} {event?.toggleEndDates && " - " + endDate}
              </span>
            )}
          </div>
          {event?.eventLogos && (
            <div className="logos">
              {event?.eventLogos.map((logo, i) => {
                return (
                  <div key={logo.title + i}>
                    <Svg src={logo.logo} />
                  </div>
                );
              })}
            </div>
          )}
          {ctaLeft && (
            <div className="ctaLeft">
              <Link href={event?.ctaHref ? event?.ctaHref : "/contact"} passHref>
                <a>
                  <button>{event?.ctaLabel}</button>
                </a>
              </Link>
            </div>
          )}
        </div>
        {event?.description && event?.description?.children?.length > 0 && (
          <div id={`${index + event.title}-event-card`} className="eventDescription">
            <TinaMarkdown content={event.description} />
          </div>
        )}
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
          <p
            className="hideShowMore"
            onClick={() => {
              setExpanded(!expanded);
            }}
          >
            {expanded ? "show less" : "...show more"}
          </p>
        )}
        {event?.ctaLabel && !ctaLeft && (
          <div className="ctaBottom">
            <Link href={event?.ctaHref ? event?.ctaHref : "/contact"} passHref>
              <a>
                <button>{event?.ctaLabel}</button>
              </a>
            </Link>
          </div>
        )}
      </div>
    </div.eventCard>
  );
};

export default EventCard;
