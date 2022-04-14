const seoFields = `
seo {
  title
  description
  image
  noFollow
  noIndex
}
`;

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
          priority
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
        toggleDates
        toggleEndDates
        endDate
        eventLogos{
          title
          logo
        }
        description
        ctaHref
        ctaLabel
      }
    }
    camps {
      campList {
        title
        date
        dateEnd
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
          bottomPaddingActive
          backgroundColor
            featuredImage {
              image
              title
              imagePosition
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
            ...on MainPageBlocksLongFeaturedImageBlocksCursiveHeadline {
              headline
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
  backgroundColor
}
`;
const LargeHero = `
...on MainPageBlocksLargeHero{
  headline
  richHook
popupVideoActive
popupVideoButtonLabel
popupVideoButtonSource
serviceBarActive
videoBackgroundActive
backgroundVideoSource
desktopBackgroundPosition
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
  desktopBackgroundPosition
  backgroundImageAlt
  backgroundImageMobile
}
`;
const pricingTable = `
...on MainPageBlocksPricingTable{
  standardHeadline
  standardSubHeadline
  tableSections{
    title
    tables{
      title
      price
      description
      attention
      ctaLabel
      ctaHref
      features{
        title
      }
    }
  }
}
`;
const shortIconGrid = `
...on MainPageBlocksShortIconGrid{
  headline
  featuredIconBlurb{
    title
    icon
    blurb
  }
}
`;
const featuredIconGrid = `
...on MainPageBlocksFeaturedIconGrid{
  standardSubHeadline
  standardHeadline
  backgroundImageSrc
  maxColumns
  iconSections{
    title
    icon
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
      ${shortIconGrid}
      ${pricingTable}
      ${featuredIconGrid}
      }
      mapEnabled
      ${seoFields}
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
//#endregion main page document blocks

const getContactPage = `
  getContactDocument(relativePath: "contact.mdx") {
    id
    data {
      subHeadline
      headline
      desktopBackgroundPosition
      hook
      backgroundImage
      backgroundImageMobile
      backgroundImageAlt
      ${seoFields}
    }
  }

`;

export const getLegalList = `
  getLegalList {
    totalCount
    edges {
      cursor
      node{
        sys{
          filename
        }
        data{
          legalPageTitle
        }
      }
    }
  }
`;

export const getLegalDynamicDocument = `
  getLegalDocument(relativePath: $relativePath) {
    data {
      legalPageTitle
      body
      ${seoFields}
    }
  }
`;

const getStandardLayout = `
${getGlobalDocument}
${getMainPageList}
${getLegalList}
`;
const Query = {
  getGlobalDocument,
  getMainPageDocument,
  getMainPageList,
  getContactPage,
  getLegalDynamicDocument,
  getLegalList,
  getStandardLayout,
};

export default Query;
