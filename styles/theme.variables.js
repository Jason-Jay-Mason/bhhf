import { css } from "linaria";
import { colorPallet } from "./theme";

export const light = css`
  --saddle-beige: ${colorPallet.light.saddleBeige};
  --cloud-beige: ${colorPallet.light.cloudBeige};
  --skin-beige: ${colorPallet.light.skinBeige};
  --rainCloud-beige: ${colorPallet.light.rainCloudBeige};
  --rainCloud-beige-two: ${colorPallet.light.rainCloudBeigeTwo};
  --icon-beige: ${colorPallet.light.iconBeige};
  --icon-blue: ${colorPallet.light.iconBlue};
  --button-blue: ${colorPallet.light.buttonBlue};
  --ribbon-blue: ${colorPallet.light.ribbonBlue};
  --horse-Brown: ${colorPallet.light.horseBrown};
  --text-brown: ${colorPallet.light.textBrown};
  --logo-coal: ${colorPallet.light.logoCoal};
  --white: white;
  --icon-filter: "none";
`;
export const dark = css`
  --saddle-beige: ${colorPallet.dark.saddleBeige};
  --cloud-beige: ${colorPallet.dark.coalDarkTwo};
  --skin-beige: ${colorPallet.dark.coalDarkOne};
  --rainCloud-beige: ${colorPallet.dark.coalTwo};
  --rainCloud-beige-two: ${colorPallet.dark.coalDarkOne};
  --icon-beige: ${colorPallet.dark.white};
  --icon-blue: ${colorPallet.dark.white};
  --button-blue: ${colorPallet.dark.buttonBlue};
  --ribbon-blue: ${colorPallet.dark.buttonBlue};
  --horse-Brown: ${colorPallet.dark.white};
  --text-brown: ${colorPallet.dark.white};
  --logo-coal: ${colorPallet.light.white};
  --white: ${colorPallet.dark.coalTwo};
  --icon-filter: brightness(0) invert(1);
`;
