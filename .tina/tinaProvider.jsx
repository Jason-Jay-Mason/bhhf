import dynamic from "next/dynamic";
import { defineConfig } from "tinacms";
import { TinaEditProvider } from "tinacms/dist/edit-state";
const TinaCMS = dynamic(() => import("tinacms"), { ssr: false });

const branch = "main";
// When working locally, hit our local filesystem.
// On a Vercel deployment, hit the Tina Cloud API
const apiURL = process.env.NODE_ENV == "development" ? "http://localhost:4001/graphql" : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`;

const TinaConfig = defineConfig({
  //set up media store
  mediaStore: async () => {
    // Load media store dynamically so it only loads in edit mode
    const pack = await import("next-tinacms-cloudinary");
    return pack.TinaCloudCloudinaryMediaStore;
  },
  documentCreatorCallback: {
    //redirect after a new document is created
    onNewDocument: ({ collection: { slug }, breadcrumbs }) => {
      if (slug === "mainPage") {
        const relativeUrl = `/${breadcrumbs.join("/")}`;
        return (window.location.href = relativeUrl);
      }
      const relativeUrl = `/${slug}/${breadcrumbs.join("/")}`;
      return (window.location.href = relativeUrl);
    },

    //filter the collections that can be created
    filterCollections: (options) => {
      return options.filter((option) => option.label === "Page");
    },
  },
  cmsCallback: (cms) => {
    //this is the new tina admin section
    cms.flags.set("tina-admin", true);

    //maps the link to the admin section collections
    import("tinacms").then(({ RouteMappingPlugin }) => {
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        if (["testimonial", "global"].includes(collection.name)) {
          return undefined;
        }
        if (["mainPage"].includes(collection.name)) {
          if (document.sys.filename === "home") {
            return `/`;
          } else {
            return `/${document.sys.filename}`;
          }
          return undefined;
        }
        return `/${collection.name}/${document.sys.filename}`;
      });
      cms.plugins.add(RouteMapping);
    });

    //this is a custom field plugin for a labeled group list
    import("../.tina/plugins.tsx").then(({ labeledGroupList }) => {
      cms.fields.add(labeledGroupList);
    });

    return cms;
  },
  apiURL: apiURL,
});

const TinaDynamicProvider = ({ children }) => {
  return (
    <>
      <TinaEditProvider showEditButton={true} editMode={<TinaCMS {...TinaConfig}>{children}</TinaCMS>}>
        {children}
      </TinaEditProvider>
    </>
  );
};

export default TinaDynamicProvider;
