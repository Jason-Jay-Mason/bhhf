import { styled } from "@linaria/react";
import { colors } from "../styles/theme";
import Image from "./image";

//#region styles
const div = {};
div.brandedBackground = styled.div`
  position: relative;
  z-index: 0;
  .content {
    background-color: ${colors.beigeOverlay};
  }
  span {
    z-index: -1;
    filter: saturate(0%);
  }
`;
//#endregion

const BrandedBackgroundImg = ({ src, children }) => {
  return (
    <div.brandedBackground>
      <div className="content">{children}</div>
      <Image layout="fill" objectFit="cover" src={src} />
    </div.brandedBackground>
  );
};

export default BrandedBackgroundImg;
