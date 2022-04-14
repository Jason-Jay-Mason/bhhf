import { styled } from "@linaria/react";
import { breakPoints, colors, spacing } from "../styles/theme";

//#region styles
const section = {};

section.default = styled.section`
  position: relative;
  background-color: ${colors.backgroundWhite};
  .mainSection {
    height: fit-content;
    background-color: ${colors.cloudBeige};
    margin: 0 ${spacing.s17ish};
    padding: 0.05px; //this is to prevent margin collapse when bottom margin is active
  }
  @media ${breakPoints.lrg} {
    .mainSection {
      margin: 0;
    }
  }
`;

//#endregion

const Section = ({ children }) => {
  return (
    <section.default>
      <div className="mainSection">{children}</div>
    </section.default>
  );
};

export default Section;
