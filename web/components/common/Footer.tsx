import type { VFC } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import NLink from 'next/link'

import Form from '@common/Form'
import Title from '@common/Title'

const Section = tw.footer`w-full bg-font py-12 flex flex-col px-12`
const Top = tw.div`flex flex-row  mb-12`
const Half = tw.div`flex flex-col w-1/2 items-center justify-center text-white`
const Copyright = tw.small`text-sm text-white flex gap-1`
const Link = tw(NLink)`duration-500 ease-in-out hover:text-primary`
const FormTitle = tw.h3`text-7xl text-white font-allita relative flex flex-col items-center text-center pb-4 after:([content: ""] bg-primary h-1 w-3/4 absolute bottom-0 )`

const Address = tw.address`not-italic text-center text-2xl gap-1 flex flex-col`
const Map = styled.div`
  ${tw`border-2 w-full max-w-[30rem] aspect-[4/3] border-offBlack [iframe]:(w-full h-full)`}
`
// const Shadow = tw.div`absolute top-0 left-0 w-full h-full from-primary to-offBlack bg-gradient-to-br z-10 opacity-0 duration-500 ease-in-out`
interface Props {}

const Footer: VFC<Props> = ({ ...rest }) => {
  return (
    <Section {...rest}>
      <Top>
        <Half tw="gap-6">
          <Title white>Address</Title>
          <Address>
            <span>Gateway Travel Plaza</span>
            <span>11653 Lincoln Highway</span>
            <span>Breezewood, PA 15533</span>
          </Address>
          <Map>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.3675861545303!2d-78.23662282353231!3d40.00023608088264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ca34f0c91e2b1d%3A0xc6e6c40a8072f73d!2sGateway%20Travel%20Plaza!5e0!3m2!1sen!2sus!4v1670198522432!5m2!1sen!2sus"
              loading="lazy"
            ></iframe>
          </Map>
        </Half>
        <Half>
          <div tw="w-full flex flex-col items-center gap-12 max-w-[30rem]">
            <Title white>Contact Us</Title>
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
