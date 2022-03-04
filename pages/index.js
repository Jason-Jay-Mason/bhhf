import { staticRequest } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Layout } from "../components/Layout";
import { useTina } from "tinacms/dist/edit-state";
import Query from "../.tina/tools/queries/query";

//The query for tina cms
const query = `{
${Query.getPageDocument}
${Query.getGlobalDocument}
}
`;

export default function Home(props) {
  //the useTina Hook enables contextual editing on a page
  const { data } = useTina({
    query,
    variables: {},
    data: props.data,
  });

  //deconstruct data here for use in components
  const { body } = data?.getPageDocument?.data;
  const headline = data?.getGlobalDocument?.data.body;

  return (
    <div>
      <h1>{headline}</h1>
      <TinaMarkdown content={body} />
    </div>
  );
}

export const getStaticProps = async () => {
  const variables = {};
  //make sure data = null for production
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
    },
  };
};
