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
        activePages{
          title{
            ...on MainPageDocument{
              sys{
                filename
              }
            }
          }
        }
      }
    }
    events {
      eventList {
        title
        date
        description
        ctaHref
        ctaLabel
      }
    }
    camps {
      campList {
        title
        date
        description
        ctaHref
        ctaLabel
      }
    }
  }
}
`;
//#region main page document blocks

const LongFeaturedImage = `
        ...on MainPageBlocksLongFeaturedImage{
          standardSubHeadline
          standardHeadline
          twoColumnText
            featuredImage {
              image
              title
            }
          featuredImageRightActive
          bottomPaddingActive
          blocks{
            __typename
            ...on MainPageBlocksLongFeaturedImageBlocksCenteredIconBlurb {
              icon
              text
              iconAlt
            }
            ...on MainPageBlocksLongFeaturedImageBlocksIconListBlurb {
              iconList {
                title
                icon
              }
            text
          }
            ...on MainPageBlocksLongFeaturedImageBlocksButton {
              label
              href
            }
            ...on MainPageBlocksLongFeaturedImageBlocksTitledIconBlurb {
              icon
              iconAlt
              Headline
              subHeadline
                blurb
              }
          }
        }
`;
const CtaButtons = `
...on MainPageBlocksCtaButtons{
  mainCallToActionLabel
  mainCallToActionHref
  secondaryCallToActionLabel
secondaryCallToActionVideoActive
  secondaryCallToActionHrefOrSource

}
`;
const LargeHero = `
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
`;
const preFooterCta = `
...on MainPageBlocksPreFooterCta{
  mainCallToActionHref
 mainCallToActionLabel
  hook
  standardHeadline
  standardSubHeadline
}
`;
const testimonialSlider = `
...on MainPageBlocksTestimonialSlider {
  standardSubHeadline
  standardHeadline
}
`;
const standardHero = `
...on MainPageBlocksHero{
  subHeadline
  headline
  hook
  ctaActive
  ctaLabel
  ctaHref
  backgroundImage
  backgroundImageAlt
  backgroundImageMobile
}
`;
const shorIconGrid = `
...on MainPageBlocksShortIconGrid{
  headline
  featuredIconBlurb{
    title
    icon
    blurb
  }
}
`;
const getMainPageDocument = `
getMainPageDocument (relativePath: $relativePath) {
  id
    sys {
      filename
    }
    data {
      blocks{
        __typename
      ${LongFeaturedImage}
      ${CtaButtons}
      ${LargeHero}
      ${preFooterCta}
      ${testimonialSlider}
      ${standardHero}
      ${shorIconGrid}
      }
      mapEnabled
    }
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

const getContactPage = `
  getContactDocument(relativePath: "contact.mdx") {
    id
    data {
      subHeadline
      headline
      hook
      backgroundImage
      backgroundImageMobile
      backgroundImageAlt
    }
  }

`;
const Query = {
  getGlobalDocument,
  getMainPageDocument,
  getMainPageList,
  getContactPage,
};

export default Query;
