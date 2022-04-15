import { css } from "linaria";
import { colors } from "./theme";
//#region global styles
const globals = css`
  :global() {
    @font-face {
      font-family: "Snell Roundhand";
      font-weight: 300;
      font-display: swap;
      src: local(""), url("https://res.cloudinary.com/broken-heart-horse-farm/raw/upload/v1647059543/fonts/SnellBT-Regular_wr6e1x.woff2") format("woff2"), url("https://res.cloudinary.com/broken-heart-horse-farm/raw/upload/v1647059543/fonts/SnellBT-Regular_dwetaw.woff") format("woff");
    }
    /* open-sans-300 - latin */

    /* noto-serif-regular - latin */

    html,
    body {
      padding: 0;
      margin: 0;
      font-family: "Open Sans", sans-serif;
      overflow-x: hidden;
    }
    body {
      overflow-x: hidden;
    }

    * {
      box-sizing: border-box;
    }
    button {
      border: none;
      z-index: 5;
    }
    p,
    ul,
    li {
      line-height: 223%;
      font-size: 16px;
      font-weight: 300;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    h6,
    a {
      z-index: 5;
      margin: 0;
      padding: 0;
    }
    a {
      color: inherit;
      text-decoration: none;
      cursor: pointer;
      color: ${colors.ribbonBlue};
    }
  }
`;

export default globals;
