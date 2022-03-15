import { useEffect, useState } from "react";
import Image from "next/image";

//#region styles
const div = {};
//#endregion

const MyImage = ({ src, height, width, objectFit, alt, layout, quality }) => {
  const hasValidSource = (source) => {
    if (source && source !== null && source !== "" && typeof source === "string") {
      return true;
    }
    return false;
  };

  const createWidthHeightParams = (w, h) => {
    if (w && h) {
      return `c_scale,h_${h},w_${w}`;
    }
    if (w) {
      return `c_scale,w_${w}`;
    }
    if (h) {
      return `c_scale,h_${h}`;
    }
    return "";
  };

  const createQualityParam = (q) => {
    if (q) {
      return `q_${q}`;
    }
    return "";
  };

  const getFileType = (s) => {
    if (s) {
      let split = s.split(".");
      let fileType = split[split.length - 1];
      return fileType;
    }
  };

  const buildSrcUrls = (w, h, q, src) => {
    let isValid = hasValidSource(src);
    if (isValid) {
      let fileType = getFileType(src);
      let placeholder;
      let primary;
      let insertionPoint = "/upload/";
      let buildPrimaryParams = [createWidthHeightParams(w, h), createQualityParam(q)]
        .filter((param, i) => {
          if (param == "" || param == null || typeof param == "undefined") {
            return;
          }
          return param;
        })
        .join(",");

      let primaryParams = `${insertionPoint}${buildPrimaryParams}/`;
      let placeholderParams = `${insertionPoint}c_scale,e_blur:100,w_10/`;

      primary = src.split(insertionPoint).join(primaryParams);
      placeholder = src.split(insertionPoint).join(placeholderParams);

      let webpPrimary = primary.split(fileType).join("webp");

      return [primary, placeholder, webpPrimary];
    }
    return ["/no-image.svg", "/no-image.svg", "/no-image.svg"];
  };

  const [primary, placeholder, webpPrimary] = buildSrcUrls(width, height, quality, src);

  const [imgSrc, setImgSrc] = useState(webpPrimary);
  useEffect(() => {
    setImgSrc(webpPrimary);
  }, [src]);
  console.log(imgSrc);

  return (
    <Image
      src={imgSrc}
      layout={layout}
      objectFit={objectFit}
      alt={alt}
      placeholder="blur"
      blurDataURL={placeholder}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          setImgSrc(primary);
        }
      }}
      onError={() => {
        setImgSrc(primary);
      }}
    />
  );
};

export default MyImage;
