import NavBar from './navBar'
import dynamic from 'next/dynamic'
const PopupVideo = dynamic(() => import('./popupVideo'), { ssr: false })
const Footer = dynamic(() => import('./footer'), { ssr: false })
import Seo from './seo'
import { styled } from '@linaria/react'
const div = {}
div.layout = styled.div`
  overflow: hidden;
`

const Layout = (props) => {
  const header = props?.data?.getGlobalDocument?.data?.header || {}
  const businessInfo = props?.data?.getGlobalDocument?.data?.businessInfo || {}
  const services = props?.data?.getGlobalDocument?.data?.services || {}
  const mainPageList =
    props?.data?.getMainPageList?.edges?.map(
      (edge) => edge?.node?.sys?.filename
    ) || {}
  const mapEnabled = props?.data?.getMainPageDocument?.data?.mapEnabled
  const legal = props?.data?.getLegalList?.edges.map((edge) => {
    return {
      fileName: edge.node.sys.filename,
      title: edge.node.data.legalPageTitle,
    }
  })
  const seo = props?.data?.getMainPageDocument?.data?.seo

  console.log(props)
  return (
    <>
      <Seo {...seo} />
      <PopupVideo />
      <NavBar businessInfo={businessInfo} header={header} />
      <div.layout>{props?.children}</div.layout>
      <Footer
        businessInfo={businessInfo}
        services={services}
        mainPageList={mainPageList}
        mapEnabled={mapEnabled}
        legal={legal}
      />
    </>
  )
}

export default Layout
