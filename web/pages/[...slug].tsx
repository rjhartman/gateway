import type { GetStaticPaths, NextPage } from 'next'
import type { FC } from 'react'
import groq from 'groq'

import sanityClient, { defaultSanityClient } from 'lib/sanity-client'
import Contact from '@templates/Contact'
import Inner from '@templates/Inner'
import Sitemap from '@templates/Sitemap'
import { buildMenu } from '@functions'

const Page: NextPage<Props> = ({ logos, companyInfo, page, menu }) => {
  let Template: FC<PageTemplateProps> = Inner

  switch (page.layout) {
    case 'Inner':
      Template = Inner
      break
    case 'contact':
      Template = Contact
      break
    case 'sitemap':
      Template = Sitemap
      break
  }

  return (
    <Template logos={logos} companyInfo={companyInfo} page={page} menu={menu} />
  )
}

export default Page

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T
type Props = UnwrapPromise<ReturnType<typeof getStaticProps>>['props']

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await sanityClient.query(`*[_type == 'page'] {
    slug {
      current
    },
    layout,
    _id
  }
`)

  const paths = pages.map((page) => ({
    // change this to build with parent pages as well
    params: {
      slug: [page.slug.current],
    },
  }))
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export const getStaticProps = async ({ params }: { params: any }) => {
  const [logos] = await sanityClient.getAll('logos')
  const [companyInfo] = await sanityClient.getAll('companyInfo')
  const slug = params.slug[0]
  const page = await defaultSanityClient.fetch(
    `*[type == page && slug.current == "${slug}"][0]`
  )
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
      logos,
      companyInfo,
      page,
      menu: await buildMenu(mainMenu),
    },
  }
}
