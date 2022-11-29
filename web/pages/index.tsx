import tw from 'twin.macro'
import Layout from '@common/Layout'
import FrontHero from 'components/frontPage/FrontHero'

const Div = tw.div`h-[130vh] w-full bg-pink-300`
export default function Home() {
  return (
    <Layout>
      <FrontHero />
      <Div></Div>
    </Layout>
  )
}
