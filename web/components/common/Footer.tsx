import type { VFC } from 'react'
import tw from 'twin.macro'
import NLink from 'next/link'

import Form from '@common/Form'

const Section = tw.footer`w-full bg-font py-12 flex flex-col px-12`
const Top = tw.div`flex flex-row justify-evenly mb-12`
const Half = tw.div`flex flex-col w-1/2 items-center text-white`
const Copyright = tw.small`text-sm text-white flex gap-1`
const Link = tw(NLink)`duration-500 ease-in-out hover:text-primary`

const Address = tw.address`not-italic text-center`

interface Props {}

const Footer: VFC<Props> = ({ ...rest }) => {
  return (
    <Section {...rest}>
      <Top>
        <Half>
          <Address>
            Gateway Travel Plaza
            <br />
            11653 Lincoln Highway
            <br />
            Breezewood, PA 15533
          </Address>
        </Half>
        <Half>
          <h3>Contact Us</h3>
          <Form />
        </Half>
      </Top>
      <Copyright>
        &copy; {new Date().getFullYear()} Gateway Travel Plaza - All Rights
        Reserved.
        {/* <Link href="/disclaimer/">Disclaimer</Link> */}
        <Link href="/sitemap/">Site Map</Link>
      </Copyright>
    </Section>
  )
}

export default Footer
