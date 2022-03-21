import { staticRequest } from "tinacms";
import { useTina } from "tinacms/dist/edit-state";
import Query from "../../.tina/tools/queries/query";
import dynamic from "next/dynamic";

import LegalPage from "../../components/legalPage";

const query = `query GetHomePageData($relativePath: String!) {
        ${Query.getLegalDynamicDocument}
        ${Query.getStandardLayout}
      }
`;

export default function _(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query,
    variables: props.variables,
    data: props.data,
  });
  const { header, footer, contactInfo, seo } = data?.getGlobalDocument?.data || {};
  const legalPage = data?.getLegalDocument?.data;

  return (
    <>
      <LegalPage legalPage={legalPage} />
    </>
  );
}

export const getStaticProps = async (context) => {
  const { legal } = context.params;
  const variables = { relativePath: `${legal}.md` };
  let data = null;
  try {
    data = await staticRequest({
      query,
      variables,
    });
  } catch {}

  return {
    props: {
      data,
      variables,
    },
  };
};

export async function getStaticPaths() {
  const query = `{
        ${Query.getLegalList}
      }
    `;
  let data = null;
  try {
    data = await staticRequest({
      query,
    });
  } catch (err) {
    console.log(err);
  }
  return {
    paths: data.getLegalList.edges.map((legal) => ({
      params: { legal: legal.node.sys.filename },
    })),
    fallback: "blocking",
  };
}
