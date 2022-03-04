const goldenRatio = 1.61803398875;

const colors = {};
const breakPoints = {
  xsml: "(max-width:480px)",
  sm: "(max-width: 640px)",
  md: "(max-width: 768px)",
  lg: "(max-width:1024px)",
  xl: "(max-width:1280px)",
  xxl: "(max-width:1536px)",
};
const maxMin = {
  contentMaxWidth: "1280px",
};
const spacing = {};
const fontSize = {
  xxsml: "0.75rem",
  xsml: "0.875rem",
  sml: "1.25rem",
  med: "1.125rem",
  medlrg: "1.5rem",
  lrg: "1.625rem",
  xlrg: "2.25rem",
  xxlrg: "2.875rem",
  xxxlrg: "3rem",
  huge: "4rem",
};
const typography = {};
const boxShadows = {};

const globalButton = `
`;

const globalSection = `
`;
const globalRow = `
`;
const elements = {};

const theme = {
  colors: { ...colors },
  breakPoints: { ...breakPoints },
  spacing: { ...spacing },
  fontSize: { ...fontSize },
  boxShadows: { ...boxShadows },
  typography: { ...typography },
  elements: { ...elements },
  maxMin: { ...maxMin },
};
export { theme };
