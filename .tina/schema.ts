import { defineSchema } from "@tinacms/cli";
import type { TinaTemplate, TinaField } from "@tinacms/cli";

const businessName = "Broken Heart";
//#region reusable fields
const cta: TinaField[] = [
  {
    type: "string",
    name: "ctaLabel",
    label: "Call To Action Label",
  },
  {
    type: "string",
    name: "ctaHref",
    label: "Call To Action Href",
    description: "When somebody clicks the Call To Action, it will go to this location.",
  },
];
const standardHeadlineFields: TinaField[] = [
  {
    type: "string",
    name: "standardSubHeadline",
    label: "Sub Headline",
  },
  {
    type: "string",
    name: "standardHeadline",
    label: "Headline",
  },
];
const seo: TinaField = {
  type: "object",
  label: "SEO",
  name: "seo",
  ui: {
    component: "group",
  },
  fields: [
    {
      type: "string",
      label: "Title",
      description: "50-60 characters",
      name: "title",
    },
    {
      type: "string",
      label: "Description",
      description: "155-160 characters",
      name: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      label: "Image",
      name: "image",
    },
    {
      type: "boolean",
      label: "No Follow",
      name: "noFollow",
    },
    {
      type: "boolean",
      label: "No Index",
      name: "noIndex",
    },
  ],
};

//#endregion reusable fields

//#region Contact page fields
const contactFields: TinaField[] = [
  {
    type: "string",
    name: "subHeadline",
    label: "Sub Headline",
  },
  {
    type: "string",
    name: "headline",
    label: "Headline",
  },
  {
    type: "string",
    name: "hook",
    label: "Hook",
  },
  {
    type: "image",
    name: "backgroundImage",
    label: "Background image",
  },
  {
    type: "string",
    name: "backgroundImageAlt",
    label: "Background image description",
  },
  {
    type: "image",
    name: "backgroundImageMobile",
    label: "Background image mobile",
  },
];

//#endregion contact page fields

//#region Main Page blocks and fields

//#region pre footer cta

const preFooterCta: TinaTemplate = {
  name: "preFooterCta",
  label: "Pre Footer CTA",
  fields: [
    ...standardHeadlineFields,
    {
      type: "string",
      name: "hook",
      label: "Hook",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "mainCallToActionLabel",
      label: "Main call to action  Label",
    },
    {
      type: "string",
      name: "mainCallToActionHref",
      label: "Main call to action Href",
      description: "The location a user will be brought to when the CTA is clicked.",
    },
  ],
};

//#endregion pre footer cta

//#region testimonial slider
const testimonialSlider: TinaTemplate = {
  name: "testimonialSlider",
  label: "Testimonial Slider",
  fields: [...standardHeadlineFields],
};
//#endregion testimonal slider

//#region Short Icon Grid
const featuredIconBlurb: TinaField = {
  type: "object",
  name: "featuredIconBlurb",
  label: "Featured Icon Blurb",
  list: true,
  ui: {
    component: "labeled-group-list",
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "image",
      name: "icon",
      label: "Icon",
    },
    {
      type: "string",
      name: "blurb",
      label: "Short Blurb",
      ui: {
        component: "textarea",
      },
    },
  ],
};

const shortIconGridFields: TinaField[] = [
  {
    type: "string",
    name: "headline",
    label: "Headline",
    description: "Leave blank to deactivate headline",
  },
  featuredIconBlurb,
];

const shortIconGrid: TinaTemplate = {
  name: "shortIconGrid",
  label: "Short Icon Grid",
  fields: [...shortIconGridFields],
};
//#endregion short icon grid

//#region CTA button section block
const ctaButtons: TinaTemplate = {
  name: "ctaButtons",
  label: "CTA Button Section",
  fields: [
    {
      type: "string",
      name: "mainCallToActionLabel",
      label: "Main call to action  Label",
    },
    {
      type: "string",
      name: "mainCallToActionHref",
      label: "Main call to action Href",
      description: "The location a user will be brought to when the CTA is clicked.",
    },
    {
      type: "string",
      name: "secondaryCallToActionLabel",
      label: "Secondary call to action Label",
      description: "Leave blank to disable",
    },
    {
      type: "boolean",
      name: "secondaryCallToActionVideoActive",
      label: "Secondary call to action video popup",
      description: "When this is activated, a video pop will occur when the button is clicked.",
    },
    {
      type: "string",
      name: "secondaryCallToActionHrefOrSource",
      label: "Secondary call to action href or video source",
      description: "If video is activated, paste the video embedded source, if not, input the buttons link (location).",
    },
  ],
};
//#endregion CTA button section block

//#region long form featured image

const twoColumnText: TinaField = {
  type: "rich-text",
  name: "twoColumnText",
  label: "Two Column Body Text",
  description: "Leave blank to deactivate",
};
const centeredIconBlurb: TinaTemplate = {
  name: "centeredIconBlurb",
  label: "Centered Icon Blurb",
  fields: [
    {
      type: "image",
      name: "icon",
      label: "Icon (SVG file type only please!)",
    },
    {
      type: "string",
      name: "iconAlt",
      label: "Icon description (for SEO)",
    },
    {
      type: "rich-text",
      name: "text",
      label: "Text",
    },
  ],
};
const iconListBlurb: TinaTemplate = {
  name: "iconListBlurb",
  label: "Icon List Blurb",
  fields: [
    {
      type: "object",
      name: "iconList",
      label: "Icon List (SVG file type only please!)",
      list: true,
      ui: {
        component: "labeled-group-list",
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Icon Alt Text",
        },
        {
          type: "image",
          name: "icon",
          label: "Icon (SVG file type only please!)",
        },
      ],
    },
    {
      type: "rich-text",
      name: "text",
      label: "Text",
    },
  ],
};
const longFormFeaturedImageButton: TinaTemplate = {
  name: "button",
  label: "Button",
  fields: [
    {
      type: "string",
      name: "label",
      label: "Button Label",
    },
    {
      type: "string",
      name: "href",
      label: "Button Href",
      description: "When the button is clicked the user will go to this location.",
    },
  ],
};
const titledIconBlurb: TinaTemplate = {
  name: "titledIconBlurb",
  label: "Titled Icon Blurb",
  fields: [
    {
      type: "image",
      name: "icon",
      label: "Icon (SVG file type only please!)",
    },
    {
      type: "string",
      name: "iconAlt",
      label: "Icon description (for SEO)",
    },
    {
      type: "string",
      name: "Headline",
      label: "Headline",
    },
    {
      type: "string",
      name: "subHeadline",
      label: "Sub Headline",
    },
    {
      type: "rich-text",
      name: "blurb",
      label: "Blurb",
    },
  ],
};
const longFormFeaturedImageFields: TinaField[] = [
  ...standardHeadlineFields,
  twoColumnText,
  {
    type: "object",
    name: "featuredImage",
    label: "Featured Image(s)",
    list: true,
    description: "Adding more than one image will activate slider functionality",
    ui: {
      component: "labeled-group-list",
    },
    fields: [
      {
        type: "image",
        name: "image",
        label: "Image",
      },
      {
        type: "string",
        name: "title",
        label: "Featured Image Description (for SEO)",
      },
    ],
  },
  {
    type: "boolean",
    name: "featuredImageRightActive",
    label: "Featured image left vs right",
  },
  {
    type: "object",
    name: "blocks",
    label: "Featured Sections",
    list: true,
    templates: [centeredIconBlurb, iconListBlurb, longFormFeaturedImageButton, titledIconBlurb],
  },
  {
    type: "boolean",
    name: "bottomPaddingActive",
    label: "Activate bottom Padding",
  },
];
const longFeaturedImage: TinaTemplate = {
  name: "longFeaturedImage",
  label: "Long Form Featured Image",
  fields: [...longFormFeaturedImageFields],
};
//#endregion long form featured image

//#region Standard hero
const heroFields: TinaField[] = [
  {
    type: "string",
    name: "subHeadline",
    label: "Sub Headline",
  },
  {
    type: "string",
    name: "headline",
    label: "Headline",
  },
  {
    type: "string",
    name: "hook",
    label: "Hook",
    ui: {
      component: "textarea",
    },
  },
  {
    type: "image",
    name: "backgroundImage",
    label: "Background Image",
  },
  {
    type: "image",
    name: "backgroundImageMobile",
    label: "Background Image Mobile",
  },
  {
    type: "string",
    name: "backgroundImageAlt",
    label: "Background Image Description",
  },
  {
    type: "boolean",
    name: "ctaActive",
    label: "Activate Call To Action Button",
  },
  ...cta,
];
const hero: TinaTemplate = {
  name: "hero",
  label: "Hero",
  fields: [...heroFields],
};
//#endregion standard hero

//#region Large hero
const largeHeroFields: TinaField[] = [
  {
    type: "string",
    name: "headline",
    label: "Headline",
  },
  {
    type: "string",
    name: "hook",
    label: "Hook",
  },
  {
    type: "boolean",
    name: "popupVideoActive",
    label: "Active popup video button",
  },
  {
    type: "string",
    name: "popupVideoButtonLabel",
    label: "Popup video button label",
  },
  {
    type: "string",
    name: "popupVideoButtonSource",
    label: "Popup video button source",
    description: "Paste the iframe video link (not the entire iframe code) here.",
  },
  {
    type: "boolean",
    name: "serviceBarActive",
    label: "Activate Service Bar",
    description: "Services are edited in the Global Menu",
  },
  {
    type: "boolean",
    name: "videoBackgroundActive",
    label: "Activate background video functionality",
  },
  {
    type: "string",
    name: "backgroundVideoSource",
    label: "Background video source",
    description: "Paste the video source link here. Make sure background video functionality is set to true. note: vimeo download link is the recommended method tutorial here (https://vimeo.zendesk.com/hc/en-us/articles/224823567-Direct-links-to-video-files)",
  },
  {
    type: "image",
    name: "backgroundImageSourceDesktop",
    label: "Background image source (Desktop)",
    description: "(Optimal size: width = 1920px, height = 900px) The image that will be displayed if the background video is deactivated.",
  },
  {
    type: "string",
    name: "backgroundImageAltDesktop",
    label: "Background image Desktop description (for SEO)",
  },
  {
    type: "image",
    name: "backgroundImageSourceMobile",
    label: "Background image source (mobile)",
    description: "(Optimal size: width = 320px, height = 468px) The image that will be displayed on mobile.",
  },
  {
    type: "string",
    name: "backgroundImageAltMobile",
    label: "Background image mobile description (for SEO)",
  },
];
const largeHero: TinaTemplate = {
  name: "largeHero",
  label: "Large Hero",
  fields: [...largeHeroFields],
};
//#endregion large hero

const mapEnabled: TinaField = {
  type: "boolean",
  name: "mapEnabled",
  label: "Enable Footer Map",
  description: "The google map in the footer can be turned on and off. Note: using the map in the footer is a double edged sword, on one hand, google like when a map is in the footer with your location information. However, google maps can decrease page load speed.",
};

const mainPageFields: TinaField = {
  type: "object",
  name: "blocks",
  label: "Page Sections",
  list: true,
  templates: [largeHero, hero, longFeaturedImage, ctaButtons, shortIconGrid, testimonialSlider, preFooterCta],
};
//#endregion Main Page blocks and fields

//#region global fields
const campFields: TinaField = {
  type: "object",
  name: "campList",
  label: "Add Camps",
  list: true,
  ui: {
    component: "labeled-group-list",
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Camp Title",
    },
    {
      type: "string",
      name: "date",
      label: "Camp Date",
      ui: {
        component: "date",
      },
    },
    {
      type: "rich-text",
      name: "description",
      label: "Camp Description",
    },
    {
      type: "string",
      name: "ctaLabel",
      label: "CTA Label",
      description: "The button label. Leave blank to disable button.",
    },
    {
      type: "string",
      name: "ctaHref",
      label: "CTA href",
      description: "The button link",
    },
  ],
};

const camps: TinaField = {
  type: "object",
  name: "camps",
  label: "Camps",
  description: `Add ${businessName} camps globally`,
  fields: [campFields],
};

const eventFields: TinaField = {
  type: "object",
  name: "eventList",
  label: "Add Events",
  list: true,
  ui: {
    component: "labeled-group-list",
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Event Title",
    },
    {
      type: "string",
      name: "date",
      label: "Event Date",
      ui: {
        component: "date",
      },
    },
    {
      type: "rich-text",
      name: "description",
      label: "Event Description",
    },
    {
      type: "string",
      name: "ctaLabel",
      label: "CTA Label",
      description: "The button label. Leave blank to disable button.",
    },
    {
      type: "string",
      name: "ctaHref",
      label: "CTA href",
      description: "The button link",
    },
  ],
};
const events: TinaField = {
  type: "object",
  name: "events",
  label: "Events",
  description: `Add ${businessName} events globally`,
  fields: [eventFields],
};
const testimonialFields: TinaField = {
  type: "object",
  name: "testimonialsList",
  label: "Testimonials",
  description: "Create/delete testimonials and add/remove them by page",
  list: true,
  ui: {
    component: "labeled-group-list",
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Name",
    },
    {
      type: "string",
      name: "shortDescription",
      label: "Short Description",
      description: 'Example: "IEA Team Member"',
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "string",
      name: "imageAlt",
      label: "Image Description (for SEO)",
    },
    {
      type: "string",
      name: "testimonialBody",
      label: "Testimonial",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "activePages",
      label: "Active Pages",
      description: "Choose the pages you want this testimonial to be on",
      list: true,
      ui: {
        component: "labeled-group-list",
      },
      fields: [
        {
          type: "reference",
          name: "title",
          label: "Active Pages",
          description: "Choose the pages you want this testimonial to be on",
          collections: ["mainPage"],
        },
      ],
    },

    {
      type: "boolean",
      name: "videoActive",
      label: "Activate Video",
    },
    {
      type: "string",
      name: "videoSource",
      label: "Video Source",
      description: "Paste the src link from the vimeo embeded code here (ie in the embed code you will see src='{copy the link in here}'). Make sure video functionality is enabled. Video tutorial here: (https://vimeo.zendesk.com/hc/en-us/articles/224823567-Direct-links-to-video-files)",
    },
  ],
};
const testimonials: TinaField = {
  type: "object",
  name: "testimonials",
  label: "Testimonials",
  description: `Add ${businessName} testimonials by page`,
  fields: [testimonialFields],
};
const services: TinaField = {
  type: "object",
  name: "services",
  label: "Services",
  description: "This section will be removed from the Global Menu in a future update when service pages are introduced",
  list: true,
  ui: {
    component: "labeled-group-list",
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Service Label",
    },
    {
      type: "image",
      name: "serviceBarImage",
      label: "Service Bar Image",
      description: `(Optimal Size: width: 238px height: 337px) The image that will be display on the ${businessName} home page service bar on mouse hover.`,
    },
  ],
};
const contactInfo: TinaField = {
  type: "object",
  name: "contact",
  label: "Contact",
  description: "Your contact info that is propagated throughout the site automatically!",
  fields: [
    {
      type: "string",
      name: "phone",
      label: "Phone",
    },
    {
      type: "string",
      name: "address",
      label: "Address",
      description: "Your business address.",
    },
    {
      type: "string",
      name: "email",
      label: "Email",
    },
  ],
};
const createSocialLink = (socialPlatform: String) => {
  let lower = socialPlatform.slice(1);
  let capFirst = socialPlatform[0].toUpperCase();
  let cap = capFirst.concat(lower);
  let field: TinaField = {
    type: "string",
    name: `${socialPlatform}`,
    label: `${cap} Link`,
    description: `Enter the link to the ${businessName} ${cap} page. (Leave blank if there is none)`,
  };
  return field;
};
const socialLinks: TinaField = {
  type: "object",
  name: "socialLinks",
  label: "Social Links",
  description: `Input the ${businessName} social links.`,
  fields: [createSocialLink("facebook"), createSocialLink("instagram"), createSocialLink("youtube"), createSocialLink("maps"), createSocialLink("linkedin")],
};
const createHoursField = (dayOfWeek: String) => {
  let lower = dayOfWeek.slice(1);
  let capFirst = dayOfWeek[0].toUpperCase();
  let cap = capFirst.concat(lower);
  let field: TinaField = {
    type: "string",
    name: `${dayOfWeek}`,
    label: `${cap} Hours`,
    description: `Enter the hours for ${cap}. Format 00:00 - 00:00`,
  };
  return field;
};
const hours: TinaField = {
  type: "object",
  label: "Hours",
  name: "hours",
  description: "Enter your business hours by day.",
  fields: [createHoursField("monday"), createHoursField("tuesday"), createHoursField("wednesday"), createHoursField("thursday"), createHoursField("friday"), createHoursField("saturday"), createHoursField("sunday")],
};
const businessInfo: TinaField = {
  type: "object",
  name: "businessInfo",
  label: "Business Info",
  description: `The ${businessName} business info like hours, contact, social, etc.`,
  fields: [contactInfo, hours, socialLinks],
};
const links: TinaField = {
  type: "object",
  label: "Links",
  name: "links",
  list: true,
  ui: {
    component: "labeled-group-list",
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Link Label",
    },
    {
      type: "string",
      name: "href",
      label: "Link Href",
      description: "When somebody clicks the link, it will go to this location.",
    },
  ],
};
const preHeader: TinaField[] = [
  {
    type: "string",
    name: "preHeaderCtaLabel",
    label: "Pre Header Call To Action Label",
  },
  {
    type: "string",
    name: "preHeaderCtaHref",
    label: "Pre Header Call To Action Href",
    description: "When somebody clicks the label, it will go to this location.",
  },
];
const header: TinaField = {
  type: "object",
  name: "header",
  label: "Header",
  fields: [...preHeader, links, ...cta],
};
const globalFields: TinaField[] = [header, businessInfo, services, testimonials, events, camps];
//#endregion global fields

export default defineSchema({
  collections: [
    {
      label: "Main Pages",
      name: "mainPage",
      path: "content/page",
      format: "mdx",
      fields: [mainPageFields, seo, mapEnabled],
    },
    {
      label: "Contact",
      name: "contact",
      path: "content/contact",
      format: "mdx",
      fields: [...contactFields],
    },
    {
      label: "Global",
      name: "global",
      path: "content/global",
      format: "json",
      fields: [...globalFields],
    },
  ],
});
