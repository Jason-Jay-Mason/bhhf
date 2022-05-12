import Page404 from '../components/page404'

export default function P404() {
  return <Page404></Page404>
}

P404.getLayout = function getLayout(page) {
  return <>{page}</>
}
