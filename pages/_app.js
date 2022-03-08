import dynamic from "next/dynamic";
const TinaDynamicProvider = dynamic(() => import("../.tina/tinaProvider"), { ssr: false });

const App = ({ Component, pageProps }) => {
  return (
    <>
      <TinaDynamicProvider>
        <Component {...pageProps} />
      </TinaDynamicProvider>
    </>
  );
};

export default App;
