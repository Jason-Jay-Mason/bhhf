import { css } from "linaria";
//#region global styles
const globals = css`
  :global() {
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300&display=swap");
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: "Open Sans", sans-serif;
      overflow-x: hidden;
    }

    * {
      box-sizing: border-box;
    }
    button {
      border: none;
      z-index: 5;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    h6,
    a {
      font-size: 17px;
      z-index: 5;
      margin: 0;
      padding: 0;
    }
    a {
      color: inherit;
      text-decoration: none;
      cursor: pointer;
    }
  }
`;

export default globals;
