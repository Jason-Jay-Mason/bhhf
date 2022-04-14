import { styled } from "@linaria/react";
import { breakPoints } from "../styles/theme";
import PricingTable from "./pricingTable";

//#region styles
const div = {};
div.tableSection = styled.div`
  display: grid;
  max-width: 1500px;
  margin: 0 auto;
  justify-items: center;
  grid-template-columns: ${({ columns }) => {
    if (columns >= 4) {
      return "1fr 1fr 1fr 1fr";
    }
    let final = "";
    let index = 0;
    while (index < columns) {
      final = final + "1fr ";
      index++;
    }
    return final;
  }};
  @media ${breakPoints.lrg} {
    grid-template-columns: 1fr;
  }
`;
//#endregion

const TableSection = ({ tables }) => {
  if (tables) {
    return (
      <div.tableSection columns={tables?.tables?.length}>
        {tables.tables &&
          tables.tables.map((table, i) => {
            return <PricingTable key={"table" + i} table={table} />;
          })}
      </div.tableSection>
    );
  }
  return null;
};

export default TableSection;
