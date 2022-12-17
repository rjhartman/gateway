import type { FC } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import NLink from 'next/link'

import Form from '@common/Form'
import Title from '@common/Title'

const Section = styled.footer(({ contact }: { contact: boolean }) => [
  tw`bg-font md:px-12 flex flex-col w-full px-4 py-12`,
  contact && tw`pt-60`,
])
const Top = tw.div`flex flex-col lg:(flex-row  gap-12) gap-20 mb-12`
const Half = tw.div`flex flex-col w-full lg:w-1/2 items-center justify-between text-white`
const Copyright = tw.small`text-sm text-white flex gap-1`
const Link = tw(NLink)`duration-500 ease-in-out hover:text-primary`

const Address = tw.address`not-italic text-center text-2xl gap-1 flex flex-col`
const Map = styled.div`
  ${tw`border-2 w-full max-w-[30rem] aspect-[4/3] border-offBlack [iframe]:(w-full h-full)`}
`
const Directions = tw.a`text-2xl text-center duration-500 ease-in-out hover:text-primary`
interface Props {
  contact?: boolean
  address: string[] | undefined
  mapsLink: string | undefined
  mapsEmbed:
    | {
        _type: string
        code: string
        language: string
      }
    | undefined
}

const Footer: FC<Props> = ({
  address,
  mapsLink,
  mapsEmbed,
  contact = false,
  ...rest
}) => {
  return (
    <Section contact={contact} {...rest}>
      <Top>
        <Half tw="gap-12 lg:gap-6">
          <Title white>Address</Title>
          <Address>
            {address?.map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </Address>
          {!!mapsLink && !mapsEmbed && (
            <Directions href={mapsLink}>Map + Directions</Directions>
          )}
          {!!mapsEmbed && (
            <Map dangerouslySetInnerHTML={{ __html: mapsEmbed.code }} />
          )}
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
