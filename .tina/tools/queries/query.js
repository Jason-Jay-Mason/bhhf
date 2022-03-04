import { gql } from "tinacms";

const getGlobalDocument = `
  getGlobalDocument(relativePath: "index.json") {
    id
    data {
      body
    }
  }
`;

const getPageDocument = `
  getPageDocument(relativePath: "home.mdx") {
    id
    data {
      body
    }
  }
`;

const Query = {
  getGlobalDocument,
  getPageDocument,
};

export default Query;
