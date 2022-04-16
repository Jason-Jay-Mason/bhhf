import { styled } from "@linaria/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { maxMin, colors, fontSize, spacing, breakPoints } from "../styles/theme";
import Section from "./section";

//#region styles
const section = {};

const div = {};
div.legal = styled.div`
  position: relative;
  margin: 0 auto;
  background-color: ${colors.rainCloudBeigeTwo};
  max-width: ${maxMin.containerMaxWidth};
  padding: ${spacing.s120ish} ${spacing.s17ish};
  color: ${colors.textBrown};
  article {
    margin: 0 auto;
    max-width: 1200px;
    h1 {
      font-family: "Noto Serif", "Helvetica", "Arial", sans-serif;
      font-size: ${fontSize.lrg};
      font-weight: lighter;
      padding: 0 0 ${spacing.s30ish} 0;
      @media ${breakPoints.md} {
        font-size: ${fontSize.med};
      }
    }
    h2 {
      padding: ${spacing.s75ish} 0 ${spacing.s17ish} 0;
    }
  }
`;

//#endregion

const LegalPage = ({ legalPage: { legalPageTitle, body } }) => {
  return (
    <Section>
      <div.legal>
        <article>
          <h1>{legalPageTitle ? legalPageTitle : "No headline..."}</h1>
          <TinaMarkdown content={body ? body : "There is nothing to display..."} />
        </article>
      </div.legal>
    </Section>
  );
};

export default LegalPage;
