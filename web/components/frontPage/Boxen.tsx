import type { FC } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import NLink from 'next/link'

import AnimateIn from '@common/AnimateIn'

const Section = tw.section`flex relative flex-col md:flex-row w-full items-stretch lg:(-translate-y-full items-end absolute)`
const Box = styled(AnimateIn)`
  ${tw`hidden flex-col bg-gray-300 [:nth-child(even)]:(bg-offBlack text-white z-20) z-10 text-center items-center justify-center duration-300 ease-in-out shadow-xl md:flex w-1/4  text-xl font-bold`}
`
const Link = styled(NLink)`
  ${tw`w-full h-full px-6 py-4 duration-300 ease-in-out lg:(hover:h-16 h-12) items-center justify-center flex flex-col `}
`

interface Props {}

const boxen = [
  {
    title: 'Large & Clean Restrooms',
    description: 'Description',
    link: 'Link',
  },
  {
    title: '24/7 Service',
    description: 'Description',
    link: 'Link',
  },
  {
    title: 'TravelCenters of America',
    description: 'Description',
    link: 'Link',
  },
  {
    title: 'TA Road Squad',
    description: 'Description',
    link: 'Link',
  },
]

const boexen: FC<Props> = ({ ...rest }) => {
  return (
    <Section {...rest}>
      {boxen.map((box, i) => (
        <Box
          key={i}
          delay={(i + 1) * 300}
          duration={500}
          distance="100%"
          tw="w-full"
        >
          <Link href={box.link}>{box.title}</Link>
        </Box>
      ))}
    </Section>
  )
}

export default boexen
