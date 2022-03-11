import { gql } from "tinacms";

const getGlobalDocument = `
getGlobalDocument(relativePath: "global.json") {
  id
  data {
    header {
      preHeaderCtaLabel
      preHeaderCtaHref
      links {
        title   
        href
      }
      ctaLabel
      ctaHref
    }
    businessInfo {
      contact {
        phone
        address
        email
      }
      hours {
        monday
        tuesday
        wednesday
        thursday
        friday
        saturday
        sunday
      }
      socialLinks {
        facebook
        instagram
        youtube
        maps
        linkedin
      }
    }
    services {
      title   
      serviceBarImage
    }
    testimonials {
      testimonialsList {
        title   
        shortDescription
        image
        imageAlt
        testimonialBody
        videoActive
        videoSource
      }
    }
    events {
      eventList {
        title
        date
        description
      }
    }
    camps {
      campList {
        title
        date
        description
        bookingHref
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
    mapEnabled
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
