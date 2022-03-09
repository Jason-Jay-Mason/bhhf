const goldenRatio = 1.61803398875;

export const colorPallet = {
  light: {
    saddleBeige: "#BC946C",
    cloudBeige: "#FAF8F5",
    skinBeige: "#EFE6DC",
    rainCloudBeige: "#F7F4F1",
    rainCloudBeigeTwo: "#F6F2EC",
    iconBeige: "#D2B99B",
    iconBlue: "#526FBC",
    buttonBlue: "#526FBC",
    ribbonBlue: "#1542BC",
    horseBrown: "#7F4721",
    textBrown: "#333130",
    logoCoal: "#343232",
    white: "#ffffff",
  },
  dark: {
    saddleBeige: "#BC946C",
    coalDarkTwo: "#232323",
    coalDarkOne: "#232323",
    coalTwo: "#3F3F3F",
    coalOne: "#4A4A4A",
    white: "#ffffff",
    buttonBlue: "#526FBC",
  },
};

export const colors = {
  saddleBeige: "var(--saddle-beige)",
  cloudBeige: "var(--cloud-beige)",
  skinBeige: "var(--skin-beige)",
  rainCloudBeige: "var(--rainCloud-beige)",
  rainCloudBeigeTwo: "var(--rainCloud-beige-two)",
  iconBeige: "var(--icon-beige)",
  iconBlue: "var(--icon-blue)",
  buttonBlue: "var(--button-blue)",
  ribbonBlue: "var(--ribbon-blue)",
  horseBrown: "var(--horse-Brown)",
  textBrown: "var(--text-brown)",
  white: "var(--white)",
};

export const breakPoints = {
  xsml: "(max-width:480px)",
  sm: "(max-width: 640px)",
  md: "(max-width: 768px)",
  lg: "(max-width:1024px)",
  xl: "(max-width:1280px)",
  xxl: "(max-width:1536px)",
};

export const spacing = {
  s10ish: "10.5px",
  s17ish: "17.8px",
  s30ish: "28.8px",
  s45ish: "46.5px",
  s75ish: "75.5px",
  s120ish: "122px",
  s195ish: "197.5px",
  s320ish: "320px",
  s515ish: "516.5px",
};

export const fontSize = {
  xxlrg: "5.938rem",
  xlrg: "3.69rem",
  lrg: "3rem",
  med: "2.125rem",
  sml: "1.5rem",
  xsml: "1.25rem",
  base: "17px",
  baseSml: "14.8px",
  baseXsml: "12px",
};

const typography = {};

const maxMin = {
  contentMaxWidth: "1536px",
  containerMaxWidth: "1688px",
};

const theme = {
  spacing,
  colors,
  breakPoints,
};
export { theme };
