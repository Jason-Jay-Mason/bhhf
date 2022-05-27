import dynamic from 'next/dynamic'
import { TinaEditProvider } from 'tinacms/dist/edit-state'
const TinaCMS = dynamic(() => import('tinacms'), { ssr: false })
import Layout from '../components/layout'
import { PopupProvider } from '../hooks/usePopUpModal'
import { ThemeProvider } from '../hooks/useTheme'
import Script from 'next/script'
//#region Exporting global styles
import globalcss from '../styles/globals'
export const globalStyles = globalcss
//#endregion

const branch = 'main'
// When working locally, hit our local filesystem.
// On a Vercel deployment, hit the Tina Cloud API
const apiURL =
  process.env.NODE_ENV == 'development'
    ? 'http://localhost:4001/graphql'
    : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`

const App = ({ Component, pageProps }) => {
  //app
  const getLayout =
    Component.getLayout || ((page) => <Layout {...pageProps}>{page}</Layout>)
  return (
    <TinaEditProvider
      editMode={
        <TinaCMS
          mediaStore={async () => {
            // Load media store dynamically so it only loads in edit mode
            const pack = await import('next-tinacms-cloudinary')
            return pack.TinaCloudCloudinaryMediaStore
          }}
          documentCreatorCallback={{
            onNewDocument: ({ collection: { slug }, breadcrumbs }) => {
              if (slug === 'mainPage') {
                const relativeUrl = `/${breadcrumbs.join('/')}`
                return (window.location.href = relativeUrl)
              }
              const relativeUrl = `/${slug}/${breadcrumbs.join('/')}`
              return (window.location.href = relativeUrl)
            },
            //filter the collections that can be created
            filterCollections: (options) => {
              return options.filter((option) => option.label === 'Page')
            },
          }}
          cmsCallback={(cms) => {
            //this is the new tina admin section
            cms.flags.set('tina-admin', true)
            cms.flags.set('branch-switcher', true)

            //maps the link to the admin section collections
            import('tinacms').then(({ RouteMappingPlugin }) => {
              const RouteMapping = new RouteMappingPlugin(
                (collection, document) => {
                  if (['contact', 'global'].includes(collection.name)) {
                    return undefined
                  }
                  if (['mainPage'].includes(collection.name)) {
                    if (document.sys.filename === 'home') {
                      return `/`
                    } else {
                      return `/${document.sys.filename}`
                    }
                    return undefined
                  }
                  return `/${collection.name}/${document.sys.filename}`
                }
              )
              cms.plugins.add(RouteMapping)
            })

            //this is a custom field plugin for a labeled group list
            import('../.tina/plugins.tsx').then(({ labeledGroupList }) => {
              cms.fields.add(labeledGroupList)
            })

            return cms
          }}
          apiURL={apiURL}
          clientId={process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
          options={{
            clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
          }}
        >
          <PopupProvider>
            <ThemeProvider>
              {getLayout(<Component {...pageProps} />)}
            </ThemeProvider>
          </PopupProvider>
        </TinaCMS>
      }
    >
      <Script
        rel='preconnect'
        src='https://www.googletagmanager.com/gtag/js?id=G-QN8N9XDXLE'
        strategy='afterInteractive'
        async='true'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PC9G2RF');
        `}
      </Script>
      <PopupProvider>
        <ThemeProvider>
          <ThemeProvider>
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </ThemeProvider>
      </PopupProvider>
    </TinaEditProvider>
  )
}

export default App
