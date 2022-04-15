const Svg = ({ src, alt }) => {
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

  return <>{isSvg ? <object type="image/svg+xml" data={sanitizedSrc} aria-label={alt}></object> : "Not an SVG"}</>;
};

export default Svg;
