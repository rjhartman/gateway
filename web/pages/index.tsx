import { NextPage } from 'next'
import groq from 'groq'

import sanityClient, { defaultSanityClient } from 'lib/sanity-client'
import { buildMenu } from '@functions'
import Layout from '@common/Layout'
import FrontHero from '@frontPage/FrontHero'
import CompanyHistory from '@frontPage/CompanyHistory'
import Services from '@frontPage/Services'
import Boxen from '@frontPage/Boxen'

const Home: NextPage<Props> = ({
  homePage,
  logos,
  companyInfo,
  services,
  menu,
  form,
  heroVideo,
  page,
}) => {
  const { hero, companyHistory } = homePage

  return (
    <Layout logos={logos} companyInfo={companyInfo} menu={menu} form={form}>
      {hero && <FrontHero {...hero} video={heroVideo} />}
      <Boxen />
      {services && <Services {...services} />}
      {companyHistory && <CompanyHistory {...companyHistory} />}
    </Layout>
  )
}

export default Home

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T
type Props = UnwrapPromise<ReturnType<typeof getStaticProps>>['props']

export const getStaticProps = async () => {
  const [homePage] = await sanityClient.getAll('homePage')
  const heroVideo = !!homePage?.hero?.backgroundVideo?.asset
    ? await sanityClient.expand(homePage?.hero?.backgroundVideo?.asset)
    : null
  const [logos] = await sanityClient.getAll('logos')
  const [companyInfo] = await sanityClient.getAll('companyInfo')
  const [form] = await sanityClient.getAll('form', 'name == "Contact"')

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

  return {
    props: {
      page,
      homePage,
      logos,
      companyInfo,
      services,
      mainMenu,
      form,
      heroVideo,
      menu: await buildMenu(mainMenu),
    },
  }
}
