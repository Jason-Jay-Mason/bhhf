import { staticRequest } from "tinacms";
import { useTina } from "tinacms/dist/edit-state";
import Query from "../.tina/tools/queries/query";
import Page404 from "../components/Page404";

//The query for tina cms
const query = `{
  ${Query.getStandardLayout}
  }
  `;
export default function MainPage(props) {
  //the useTina Hook enables contextual editing on a page
  const { data } = useTina({
    query,
    variables: {},
    data: props.data,
  });

  return <Page404 />;
}

export const getStaticProps = async (context) => {
  //make sure data = null for production
  let data = null;
  try {
    data = await staticRequest({
      query,
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
