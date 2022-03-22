import { styled } from "@linaria/react";
import { colors, fontSize, spacing } from "../styles/theme";
import Section from "./section";
import Button from "./standardButton";
import router, { useRouter } from "next/router";

//#region styles
const div = {};
div.page404 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 600px;
  h1 {
    font-size: ${fontSize.xlrg};
    color: ${colors.textBrown};
    padding-bottom: ${spacing.s17ish};
  }
  h2 {
    padding-bottom: ${spacing.s45ish};
    color: ${colors.textBrown};
  }
`;
//#endregion

const Page404 = () => {
  const router = useRouter();
  return (
    <Section>
      <div.page404>
        <h1>404 Not Found</h1>
        <h2>The page: "{router.pathname}" doesn't exist.</h2>
        <Button href="/">Return To Home Page</Button>
      </div.page404>
    </Section>
  );
};

export default Page404;
