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
  --link-grey: ${colorPallet.light.linkGrey};
  --headline-grey: ${colorPallet.light.headlineGrey};
  --background-white: white;
  --line-grey: ${colorPallet.light.lineGrey};
  --heart-beige: ${colorPallet.light.heartBeige};
  --arrow-button: ${colorPallet.light.lightSaddleBeige};
  --arrow-button-hover: ${colorPallet.light.saddleBeige};
  --beige-overlay: ${colorPallet.light.beigeOverlay};
  --rain-cloud-beige-overlay: ${colorPallet.light.rainCloudBeigeOverlay};
`;
export const dark = css`
  --saddle-beige: ${colorPallet.dark.saddleBeige};
  --cloud-beige: ${colorPallet.dark.coalDarkTwo};
  --skin-beige: ${colorPallet.dark.coalDarkOne};
  --rainCloud-beige: ${colorPallet.dark.coalTwo};
  --rainCloud-beige-two: ${colorPallet.dark.coalOne};
  --icon-beige: ${colorPallet.dark.white};
  --icon-blue: ${colorPallet.dark.white};
  --button-blue: ${colorPallet.dark.buttonBlue};
  --ribbon-blue: ${colorPallet.dark.buttonBlue};
  --horse-Brown: ${colorPallet.dark.white};
  --text-brown: ${colorPallet.dark.white};
  --logo-coal: ${colorPallet.light.white};
  --white: ${colorPallet.dark.coalTwo};
  --icon-filter: brightness(0) invert(1);
  --link-grey: ${colorPallet.dark.white};
  --headline-grey: ${colorPallet.dark.white};
  --background-white: ${colorPallet.dark.coalDarkTwo};
  --line-grey: ${colorPallet.dark.white};
  --heart-beige: ${colorPallet.dark.heartBeige};
  --arrow-button: ${colorPallet.dark.coalDarkTwo};
  --arrow-button-hover: ${colorPallet.dark.coalDarkOne};
  --beige-overlay: ${colorPallet.dark.greyOverlay};
  --rain-cloud-beige-overlay: ${colorPallet.dark.darkGreyOverlay};
`;
