import { styled } from "@linaria/react";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { useThemeStatus } from "../hooks/useTheme";
import { maxMin, colors, fontSize, spacing, colorPallet, breakPoints } from "../styles/theme";
import Section from "./section";
import { CalendarIcon, PhoneIcon } from "./svg";

//#region styles
const div = {};
div.contact = styled.div`
  position: relative;
  max-width: ${maxMin.containerMaxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${spacing.s75ish} 0;
  @media ${breakPoints.lrg} {
    flex-direction: column;
  }
  @media ${breakPoints.md} {
    padding: ${spacing.s45ish} 0;
  }
  svg {
    filter: ${colors.iconFilter};
  }
  .contactInfo {
    background-color: ${colors.rainCloudBeigeTwo};
    padding: ${spacing.s75ish} ${spacing.s17ish};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 45%;
    text-align: center;
    color: ${colors.textBrown};
    @media ${breakPoints.lrg} {
      width: 100%;
    }
    @media ${breakPoints.md} {
      padding: ${spacing.s75ish} ${spacing.s17ish};
    }
    .contactTitle {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding-bottom: ${spacing.s17ish};
      svg {
        margin-right: ${spacing.s10ish};
      }
      h4 {
        font-family: "Noto Serif";
        font-weight: lighter;
        font-size: ${fontSize.med};
      }
    }
    .contactText {
      padding-bottom: ${spacing.s45ish};
      :last-child {
        padding-bottom: 0;
      }
    }
  }
`;

div.map = styled.div`
  width: 100%;
  height: auto;
  @media ${breakPoints.lrg} {
    height: 100vw;
    max-height: 600px;
  }
`;
//#endregion

const ContactAndMap = ({
  businessInfo: {
    contact: { email, phone, address },
    hours,
  },
}) => {
  const themeStatus = useThemeStatus();
  const googlemap = useRef(null);

  useEffect(() => {
    const mapId = themeStatus === "dark" ? process.env.NEXT_PUBLIC_MAPID_DARK : process.env.NEXT_PUBLIC_MAPID;
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLEMAPS,
      version: "weekly",
    });
    let map;
    loader.load().then(() => {
      if (googlemap.current !== null) {
        let myLatLng = { lat: 40.1128715, lng: -105.0804637 };
        map = new google.maps.Map(googlemap.current, {
          mapId: mapId,
          center: myLatLng,
          zoom: 10.5,
          disableDefaultUI: true,
        });
        const lineSymbol = {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 8,
          strokeColor: colorPallet.light.buttonBlue,
        };

        new google.maps.Marker({
          position: myLatLng,
          map,
          icon: lineSymbol,
          title: "Broken Heart Horse Farm",
        });
      }
    });
  }, [googlemap, themeStatus]);
  return (
    <Section>
      <div.contact>
        <div className="contactInfo">
          <div className="contactTitle">
            <PhoneIcon />
            <h4>Contact</h4>
          </div>
          <div className="contactText">
            <p>{phone ? phone : "No phone, please input a phone number in the global menu"}</p>
            <p>{address ? address : "No address, please input an address number in the global menu"}</p>
            <p>{email ? email : "No email, please input an email in the global menu"}</p>
          </div>
          <div className="contactTitle">
            <CalendarIcon />
            <h4>Hours</h4>
          </div>
          <div className="contactText">
            {hours ? (
              <>
                <p>Monday - {hours.monday ? hours.monday : "No Hours Listed."}</p>
                <p>Tuesday - {hours.tuesday ? hours.tuesday : "No Hours Listed."}</p>
                <p>Wednesday - {hours.wednesday ? hours.wednesday : "No Hours Listed."}</p>
                <p>Thursday - {hours.thursday ? hours.thursday : "No Hours Listed."}</p>
                <p>Friday - {hours.friday ? hours.friday : "No Hours Listed."}</p>
                <p>Saturday - {hours.saturday ? hours.saturday : "No Hours Listed."}</p>
                <p>Sunday - {hours.sunday ? hours.sunday : "No Hours Listed."}</p>
              </>
            ) : (
              <p>No Hours listed, please add hours in the global menu.</p>
            )}
          </div>
        </div>
        <div.map id="map" ref={googlemap} />
      </div.contact>
    </Section>
  );
};

export default ContactAndMap;
