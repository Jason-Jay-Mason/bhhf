import { gql } from "tinacms";

const getGlobalDocument = `
getGlobalDocument(relativePath: "global.json") {
  id
  data {
    header {
      links {
        title
        href
      }
    }
  }
}
`;

const getMainPageDocument = gql`
getMainPageDocument (relativePath: $relativePath) {
  id
  data{
    blocks{
      __typename
    }
  }
}
`;

const getMainPageBlah = `
...on MainPageBlocksLargeHero{
  headline
  hook
  popupVideoActive
  popupVideoButtonLabel
  popupVideoButtonSource
  serviceBarActive
  videoBackgroundActive
  backgroundVideoSource
  backgroundImageSourceDesktop
  backgroundImageAltDesktop
  backgroundImageSourceMobile
  backgroundImageAltMobile
}
...on MainPageBlocksHero{
            subHeadline
            headline
            hook
            ctaActive
  }
`;

const getMainPageList = `
getMainPageList {
  totalCount
  edges {
    cursor
    node{
      sys{
        filename
      }
    }
  }
}
`;
const Query = {
  getGlobalDocument,
  getMainPageDocument,
  getMainPageList,
};

export default Query;
