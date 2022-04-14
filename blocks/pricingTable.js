import { styled } from "@linaria/react";
import { colors, fontSize, spacing, maxMin, breakPoints } from "../styles/theme";
import MainHeadline from "../components/mainHeadline";
import TableSection from "../components/tableSection";
import Section from "../components/section";
import { useState } from "react";

//#region styles
const div = {};
div.pricing = styled.div`
  background-color: ${colors.cloudBeige};
  max-width: ${maxMin.containerMaxWidth};
  margin: 0 auto;
  padding: 0 0 ${spacing.s120ish} 0;
  .tableSelect {
    padding: 0 ${spacing.s17ish};
    width: fit-content;
    margin: 0 auto;
    padding-bottom: ${spacing.s75ish};
    button {
      cursor: pointer;
      font-weight: 100;
      border: 1px ${colors.textBrown} solid;
      font-size: ${fontSize.base};
      padding: ${spacing.s17ish} ${spacing.s45ish};
      background-color: ${colors.beige};
      color: ${colors.textBrown};
      background-color: ${colors.white};
      @media ${breakPoints.lrg} {
        width: 100%;
        margin-bottom: ${spacing.s10ish};
      }
    }
    .active {
      background-color: ${colors.textBrown};
      color: ${colors.white};
    }
  }
`;
//#endregion

const PricingTable = ({ standardSubHeadline, standardHeadline, tableSections }) => {
  const [selected, setSelected] = useState(0);
  const handleTableSelection = (index) => {
    if (tableSections) {
      if (tableSections[index]) {
        return tableSections[index];
      }
      return tableSections[0];
    }
    return null;
  };
  return (
    <Section>
      <div.pricing>
        <MainHeadline headline={standardHeadline} subHeadline={standardSubHeadline} />
        {tableSections &&
          (tableSections.length > 1 ? (
            <div className="tableSelect">
              {tableSections &&
                tableSections.map((section, i) => {
                  return (
                    <button key={"tableButton" + i} className={section.title === tableSections[selected].title ? "active" : null} onClick={() => setSelected(i)}>
                      {section.title}
                    </button>
                  );
                })}
            </div>
          ) : null)}
        <TableSection tables={handleTableSelection(selected)} />
      </div.pricing>
    </Section>
  );
};

export default PricingTable;
