import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Layout from '@common/Layout'
import sanityClient from 'lib/sanity-client'

const Page: NextPage<Props> = ({ logos, companyInfo, page }) => {
  // console.log(page)
  return (
    <Layout logos={logos} companyInfo={companyInfo}>
      <p>Page</p>
    </Layout>
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
      path: page.slug.current,
      id: page._id,
      layout: page.layout,
      test: 'test',
    },
  }))
  return {
    paths,
    fallback: 'blocking', // can also be true or 'blocking'
  }
}

export const getStaticProps = async (context: any) => {
  const [logos] = await sanityClient.getAll('logos')
  const [companyInfo] = await sanityClient.getAll('companyInfo')
  const page = await sanityClient.query(
    `*[type == page && _id == "4d2e744a-d900-413b-9e6b-7a26c861a36a"]`
  )
  console.log(context)

  return {
    props: {
      logos,
      companyInfo,
      page,
    },
  }
}
