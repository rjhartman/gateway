import { NextPage } from 'next'

import Layout from '@common/Layout'
import FrontHero from '@frontPage/FrontHero'
import CompanyHistory from '@frontPage/CompanyHistory'
import Services from '@frontPage/Services'
import sanityClient from 'lib/sanity-client'

const Home: NextPage<Props> = ({ homePage, logos, companyInfo }) => {
  const { hero, companyHistory, services } = homePage

  return (
    <Layout logos={logos} companyInfo={companyInfo}>
      {hero && <FrontHero {...hero} />}
      {services && <Services {...services} />}
      {companyHistory && <CompanyHistory {...companyHistory} />}
    </Layout>
  )
}

export default Home

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T
type Props = UnwrapPromise<ReturnType<typeof getStaticProps>>['props']

export const getStaticProps = async function () {
  const [homePage] = await sanityClient.getAll('homePage')
  const [logos] = await sanityClient.getAll('logos')
  const [companyInfo] = await sanityClient.getAll('companyInfo')

  return {
    props: {
      homePage,
      logos,
      companyInfo,
    },
  }
}
