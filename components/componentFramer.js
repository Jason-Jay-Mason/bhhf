import { styled } from "@linaria/react";

const div = {};
div.greyBar = styled.div`
  height: 100vh;
  width: 100%;
  background-color: grey;
`;

const ComponentFramer = ({ children }) => {
  return (
    <>
      <div.greyBar />
      {children}
      <div.greyBar />
    </>
  );
};

export default ComponentFramer;
