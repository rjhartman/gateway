import { NextPage } from 'next'
import groq from 'groq'

import Layout from '@common/Layout'
import FrontHero from '@frontPage/FrontHero'
import CompanyHistory from '@frontPage/CompanyHistory'
import Services from '@frontPage/Services'
import sanityClient, { defaultSanityClient } from 'lib/sanity-client'

const Home: NextPage<Props> = ({ homePage, logos, companyInfo, services }) => {
  const { hero, companyHistory } = homePage

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
  let [homePage] = await sanityClient.getAll('homePage')
  const [logos] = await sanityClient.getAll('logos')
  const [companyInfo] = await sanityClient.getAll('companyInfo')
  const x = await defaultSanityClient.fetch(groq`
    *[_type == "homePage"] {
      services {
        title,
        services[] {
          title,
          description,
          link,
          image {
            asset-> 
          }
        }    
      }
    }
  `)
  const services = x[0].services

  return {
    props: {
      homePage,
      logos,
      companyInfo,
      services,
    },
  }
}
