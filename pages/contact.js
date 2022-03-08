import { staticRequest } from "tinacms";
import { useTina } from "tinacms/dist/edit-state";
import Query from "../.tina/tools/queries/query";

//The query for tina cms
const query = `{
    ${Query.getGlobalDocument}
  }
  `;
export default function MainPage(props) {
  //the useTina Hook enables contextual editing on a page
  const { data } = useTina({
    query,
    variables: {},
    data: props.data,
  });
  //deconstruct data here for use in components
  return (
    <div>
      <h1>Global:</h1>
      <p>{JSON.stringify(data?.getGlobalDocument?.data)}</p>
    </div>
  );
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
