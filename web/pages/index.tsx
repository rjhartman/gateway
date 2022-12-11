import tw from 'twin.macro'
import groq from 'groq'

import { configuredSanityClient } from '@functions'
import Layout from '@common/Layout'
import FrontHero from '@frontPage/FrontHero'
import CompanyHistory from '@frontPage/CompanyHistory'
import sanityClient from 'lib/sanity-client'
import { GetStaticProps, NextPage } from 'next'

const Div = tw.div`h-[130vh] w-full bg-pink-300`

const Home: NextPage<Props> = ({ homePage, logos, form }) => {
  const { hero, companyHistory } = homePage
  return (
    <Layout logos={logos} form={form}>
      {hero && <FrontHero {...hero} />}
      {companyHistory && <CompanyHistory {...companyHistory} />}
    </Layout>
  )
}

export default Home

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T
type Props = UnwrapPromise<ReturnType<typeof getStaticProps>>['props']

export const getStaticProps = async function () {
  // Is there a better way to type `data` here?
  // We'd have to somehow eject the type defs from Sanity and
  // tell the client that's what we expect to be returned.
  // That's not real type safety, and defeats the purpose of using Typescript at all.
  // Made this a js file for now, to kick the can down the road and decide if it's worth it.

  const [homePage] = await sanityClient.getAll('homePage')
  const [logos] = await sanityClient.getAll('logos')
  const [form] = await sanityClient.getAll('form')

  return {
    props: {
      homePage,
      logos,
      form,
    },
  }
}
