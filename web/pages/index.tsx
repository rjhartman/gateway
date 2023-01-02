import { NextPage } from 'next'
import groq from 'groq'

import Layout from '@common/Layout'
import FrontHero from '@frontPage/FrontHero'
import CompanyHistory from '@frontPage/CompanyHistory'
import Services from '@frontPage/Services'
import sanityClient, { defaultSanityClient } from 'lib/sanity-client'
import { buildMenu } from '@functions'

const Home: NextPage<Props> = ({
  homePage,
  logos,
  companyInfo,
  services,
  menu,
  page,
}) => {
  const { hero, companyHistory } = homePage

  return (
    <Layout logos={logos} companyInfo={companyInfo} menu={menu}>
      {hero && <FrontHero {...hero} />}
      {services && <Services {...services} />}
      {companyHistory && <CompanyHistory {...companyHistory} />}
    </Layout>
  )
}

export default Home

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T
type Props = UnwrapPromise<ReturnType<typeof getStaticProps>>['props']

export const getStaticProps = async () => {
  let [homePage] = await sanityClient.getAll('homePage')
  const [logos] = await sanityClient.getAll('logos')
  const [companyInfo] = await sanityClient.getAll('companyInfo')
  const [page] = await defaultSanityClient.fetch(
    groq`*[type == page && layout == "home"]`
  )
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

  const mainMenu = await defaultSanityClient.fetch(groq`
    *[type == navigation && name == "Main Menu"][0] {
      items[] {
        children[],
        link {
          type,
          text,
          externalLink,
          internalLink
        }
      }
    }
  `)

  const menu = await buildMenu(mainMenu)
  console.log('== RESULT ==')
  console.log(menu)

  return {
    props: {
      page,
      homePage,
      logos,
      companyInfo,
      services,
      mainMenu,
      menu,
    },
  }
}
