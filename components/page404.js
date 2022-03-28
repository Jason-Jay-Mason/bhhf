import { styled } from "@linaria/react";
import { colors, fontSize, spacing } from "../styles/theme";
import Section from "./section";
import Button from "./standardButton";

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
  return (
    <Section>
      <div.page404>
        <h1>404 Not Found</h1>
        <h2>Oops! This page doesn't exist.</h2>
        <Button href="/">Return To Home Page</Button>
      </div.page404>
    </Section>
  );
};

export default Page404;
