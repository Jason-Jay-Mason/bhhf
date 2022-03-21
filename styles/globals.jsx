import { css } from "linaria";
//#region global styles
const globals = css`
  :global() {
    @font-face {
      font-family: "Snell Roundhand";
      font-weight: 300;
      src: local(""), url("https://res.cloudinary.com/broken-heart-horse-farm/raw/upload/v1647059543/fonts/SnellBT-Regular_wr6e1x.woff2") format("woff2"), url("https://res.cloudinary.com/broken-heart-horse-farm/raw/upload/v1647059543/fonts/SnellBT-Regular_dwetaw.woff") format("woff");
    }
    /* open-sans-300 - latin */
    @font-face {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 300;
      src: local(""), url("https://res.cloudinary.com/broken-heart-horse-farm/raw/upload/v1646946675/fonts/open-sans-v28-latin-300_orwyqo.woff2") format("woff2"), /* Chrome 26+, Opera 23+, Firefox 39+ */ url("https://res.cloudinary.com/broken-heart-horse-farm/raw/upload/v1646946675/fonts/open-sans-v28-latin-300_qayux7.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* open-sans-regular - latin */
    @font-face {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 400;
      src: local(""), url("https://res.cloudinary.com/broken-heart-horse-farm/raw/upload/v1646946674/fonts/open-sans-v28-latin-regular_hvraw9.woff2") format("woff2"), /* Chrome 26+, Opera 23+, Firefox 39+ */ url("https://res.cloudinary.com/broken-heart-horse-farm/raw/upload/v1646946674/fonts/open-sans-v28-latin-regular_zkem7p.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* open-sans-500 - latin */
    @font-face {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 500;
      src: local(""), url("https://res.cloudinary.com/broken-heart-horse-farm/raw/upload/v1646946674/fonts/open-sans-v28-latin-500_y3sqf9.woff2") format("woff2"), /* Chrome 26+, Opera 23+, Firefox 39+ */ url("https://res.cloudinary.com/broken-heart-horse-farm/raw/upload/v1646946674/fonts/open-sans-v28-latin-500_o0qyq8.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* open-sans-700 - latin */
    @font-face {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 700;
      src: local(""), url("https://res.cloudinary.com/broken-heart-horse-farm/raw/upload/v1646946674/fonts/open-sans-v28-latin-700_jrhisp.woff2") format("woff2"), /* Chrome 26+, Opera 23+, Firefox 39+ */ url("https://res.cloudinary.com/broken-heart-horse-farm/raw/upload/v1646946674/fonts/open-sans-v28-latin-700_rst7wx.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* open-sans-800 - latin */
    @font-face {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 800;
      src: local(""), url("https://res.cloudinary.com/broken-heart-horse-farm/raw/upload/v1646946674/fonts/open-sans-v28-latin-800_eltpn4.woff2") format("woff2"), /* Chrome 26+, Opera 23+, Firefox 39+ */ url("https://res.cloudinary.com/broken-heart-horse-farm/raw/upload/v1646946674/fonts/open-sans-v28-latin-800_rlbr0b.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* open-sans-300italic - latin */
    @font-face {
      font-family: "Open Sans";
      font-style: italic;
      font-weight: 300;
      src: local(""), url("https://res.cloudinary.com/broken-heart-horse-farm/raw/upload/v1646946674/fonts/open-sans-v28-latin-300italic_pztcdx.woff2") format("woff2"), /* Chrome 26+, Opera 23+, Firefox 39+ */ url("https://res.cloudinary.com/broken-heart-horse-farm/raw/upload/v1646946674/fonts/open-sans-v28-latin-300italic_slz5fn.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* open-sans-italic - latin */
    @font-face {
      font-family: "Open Sans";
      font-style: italic;
      font-weight: 400;
      src: local(""), url("https://res.cloudinary.com/broken-heart-horse-farm/raw/upload/v1646946674/fonts/open-sans-v28-latin-italic_uuwcja.woff2") format("woff2"), /* Chrome 26+, Opera 23+, Firefox 39+ */ url("https://res.cloudinary.com/broken-heart-horse-farm/raw/upload/v1646946674/fonts/open-sans-v28-latin-italic_jtnacn.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* noto-serif-regular - latin */
    @font-face {
      font-family: "Noto Serif";
      font-style: normal;
      font-weight: 400;
      src: local(""), url("https://res.cloudinary.com/broken-heart-horse-farm/raw/upload/v1646947173/fonts/noto-serif-v20-latin-regular_luh7qq.woff2") format("woff2"), /* Chrome 26+, Opera 23+, Firefox 39+ */ url("https://res.cloudinary.com/broken-heart-horse-farm/raw/upload/v1646947174/fonts/noto-serif-v20-latin-regular_roqsqk.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* noto-serif-700 - latin */
    @font-face {
      font-family: "Noto Serif";
      font-style: normal;
      font-weight: 700;
      src: local(""), url("https://res.cloudinary.com/broken-heart-horse-farm/raw/upload/v1646947173/fonts/noto-serif-v20-latin-700_dw9xej.woff2") format("woff2"), /* Chrome 26+, Opera 23+, Firefox 39+ */ url("https://res.cloudinary.com/broken-heart-horse-farm/raw/upload/v1646947173/fonts/noto-serif-v20-latin-700_rbtezp.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

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
    p,
    ul,
    li {
      line-height: 223%;
      font-size: 17px;
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
    }
  }
`;

export default globals;
