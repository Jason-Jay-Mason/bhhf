import { styled } from "@linaria/react";
import { theme } from "../styles/theme";

//#region styles
const div = {};
//#endregion

const dummy = `https://res.cloudinary.com/broken-heart-horse-farm/image/upload/v1647295678/demos/demoicon_csoc2i.svg`;
const Svg = ({ src }) => {
  const checkSvg = (url) => {
    if (url && url !== "" && typeof url == "string") {
      let found = url.search(".svg");
      if (found > -1) {
        return true;
      }
    }
    return false;
  };
  const isSvg = checkSvg(src);

  const getSanitizedSrc = (url) => {
    if (url && url !== "") {
      let param = "/upload/fl_sanitize/";
      let search = "/upload/";
      let divided = url.split(search);
      divided.join(param);
      return divided.join(param);
    }
    return "/no-image.svg";
  };

  const sanitizedSrc = getSanitizedSrc(src);

  return <>{isSvg ? <object type="image/svg+xml" data={sanitizedSrc}></object> : "Not an SVG"}</>;
};

export default Svg;
