import { staticRequest } from "tinacms";
import { useTina } from "tinacms/dist/edit-state";
import Query from "../.tina/tools/queries/query";
import ContactPage from "../components/contactPage";

//The query for tina cms
const query = `{
  ${Query.getContactPage}
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
  const contactHero = data?.getContactDocument?.data;
  const camps = data?.getGlobalDocument?.data?.camps;
  const events = data?.getGlobalDocument?.data?.events;
  const businessInfo = data?.getGlobalDocument?.data?.businessInfo;
  //deconstruct data here for use in components
  return <ContactPage contactHero={contactHero} camps={camps} events={events} businessInfo={businessInfo} />;
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
