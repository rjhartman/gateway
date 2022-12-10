import sanityClient from '@sanity/client'
import tw from 'twin.macro'
import groq from 'groq'

import { configuredSanityClient } from '@functions'
import Layout from '@common/Layout'
import FrontHero from '@frontPage/FrontHero'
import CompanyHistory from '@frontPage/CompanyHistory'

const Div = tw.div`h-[130vh] w-full bg-pink-300`
export default function Home({ homePage, logos }) {
  console.log(logos)
  return (
    <Layout>
      <FrontHero {...homePage.hero} />
      <Div />
      <CompanyHistory {...homePage.companyHistory} />
    </Layout>
  )
}

export const getServerSideProps = async function () {
  // Is there a better way to type `data` here?
  // We'd have to somehow eject the type defs from Sanity and
  // tell the client that's what we expect to be returned.
  // That's not real type safety, and defeats the purpose of using Typescript at all.
  // Made this a js file for now, to kick the can down the road and decide if it's worth it.

  const [homePage] = await configuredSanityClient.fetch(groq`
  *[_type == 'homePage'] { hero, companyHistory }
  `)
  const [logos] = await configuredSanityClient.fetch(groq`
  *[_type == 'logos'] 
  `)
  return {
    props: {
      homePage,
      logos,
    },
  }
}