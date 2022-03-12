import { staticRequest } from "tinacms";
import { useTina } from "tinacms/dist/edit-state";
import Query from "../.tina/tools/queries/query";
import MainPageBlocks from "../components/mainPageBlocks";

import Section from "../components/section";
import MainHeadline from "../components/mainHeadline";
import LongText from "../components/longText";

//The query for tina cms
const query = `query getMainPage($relativePath: String!) {
    ${Query.getMainPageDocument}
    ${Query.getGlobalDocument}
    ${Query.getMainPageList}
  }
  `;
export default function MainPage(props) {
  //the useTina Hook enables contextual editing on a page
  const { data } = useTina({
    query,
    variables: props.variables,
    data: props.data,
  });
  //deconstruct data here for use in components
  const { blocks } = data.getMainPageDocument.data;

  return (
    <>
      <MainPageBlocks blocks={blocks} />
    </>
  );
}

export const getStaticPaths = async () => {
  let query = `{
        ${Query.getMainPageList}
    }`;
  let data = null;
  try {
    data = await staticRequest({
      query,
    });
  } catch (e) {
    console.warn(e);
  }
  let documents = data.getMainPageList.edges;
  return {
    paths: documents.map((doc) => {
      return { params: { mainPage: doc.node.sys.filename } };
    }),
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { mainPage } = context.params;
  //make sure data = null for production
  const variables = mainPage === "index" ? { relativePath: `home.mdx` } : { relativePath: `${mainPage}.mdx` };
  let data = null;
  try {
    data = await staticRequest({
      query,
      variables,
    });
  } catch (e) {
    console.warn(e);
  }

  return {
    props: {
      data,
      variables,
    },
  };
};
