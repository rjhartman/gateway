import type { VFC } from 'react'
import tw from 'twin.macro'
import NLink from 'next/link'

import Form from '@common/Form'

const Section = tw.footer`w-full bg-font py-12 flex flex-col px-12`
const Top = tw.div`flex flex-row  mb-12`
const Half = tw.div`flex flex-col w-1/2 items-center justify-center text-white`
const Copyright = tw.small`text-sm text-white flex gap-1`
const Link = tw(NLink)`duration-500 ease-in-out hover:text-primary`
const FormTitle = tw.h3`text-7xl text-white font-allita relative flex flex-col items-center text-center pb-4 after:([content: ""] bg-primary h-1 w-3/4 absolute bottom-0 )`

const Address = tw.address`not-italic text-center text-2xl mt-6 gap-1 flex flex-col`

interface Props {}

const Footer: VFC<Props> = ({ ...rest }) => {
  return (
    <Section {...rest}>
      <Top>
        <Half>
          <FormTitle>Address</FormTitle>
          <Address>
            <span>Gateway Travel Plaza</span>
            <span>11653 Lincoln Highway</span>
            <span>Breezewood, PA 15533</span>
          </Address>
        </Half>
        <Half>
          <div tw="w-full flex flex-col items-center gap-12 max-w-[30rem]">
            <FormTitle>Contact Us</FormTitle>
            <Form />
          </div>
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
