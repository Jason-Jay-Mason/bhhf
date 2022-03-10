import dynamic from "next/dynamic";
const TinaDynamicProvider = dynamic(() => import("../.tina/tinaProvider"), { ssr: false });
import Layout from "../components/layout";
import { ThemeProvider } from "../hooks/useTheme";
//#region Exporting global styles
import globalcss from "../styles/globals";
export const globalStyles = globalcss;
//#endregion

const App = ({ Component, pageProps }) => {
  return (
    <TinaDynamicProvider>
      <ThemeProvider>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </TinaDynamicProvider>
  );
};

export default App;
