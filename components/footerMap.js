import { styled } from "@linaria/react";
import { useEffect, useRef, useState } from "react";
import { colorPallet, spacing } from "../styles/theme";
import { Loader } from "@googlemaps/js-api-loader";
import { useThemeStatus } from "../hooks/useTheme";
//#region styles
const div = {};
div.map = styled.div`
  width: 100%;
  height: calc(${spacing.s320ish} + ${spacing.s120ish});
`;
//#endregion

const FooterMap = () => {
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
  return <div.map id="map" ref={googlemap} />;
};

export default FooterMap;
