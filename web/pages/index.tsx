import tw from 'twin.macro'
import { client } from '@functions'

import Layout from '@common/Layout'
import FrontHero from 'components/frontPage/FrontHero'
import CompanyHistory from 'components/frontPage/CompanyHistory'

const Div = tw.div`h-[130vh] w-full bg-pink-300`
export default function Home({ homePage }: { homePage: any }) {
  const { companyHistory } = homePage[0]
  return (
    <Layout>
      <FrontHero />
      <Div></Div>
      <CompanyHistory {...companyHistory} />
    </Layout>
  )
}

export async function getStaticProps() {
  const homePage = await client.fetch(`*[_type == "homePage"]`)

  return {
    props: { homePage },
  }
}
