import type { FC } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import NLink from 'next/link'

import AnimateIn from '@common/AnimateIn'

const Section = tw.section`flex relative flex-col md:flex-row w-full items-stretch justify-evenly py-20`
const Box = styled(AnimateIn)`
  ${tw`flex-col z-10 text-center items-center w-12 justify-center duration-300 w-fit ease-in-out flex text-xl font-bold`}
`
const Title = tw.h3`text-3xl font-bold after:([content:''] block w-2/3 mx-auto h-1 bg-primary mt-2)`
const Description = tw.p`text-lg mt-2`

interface Props {}

const boxen = [
  {
    title: 'Large & Clean Restrooms',
    description: 'Description goes here',
    link: 'Link',
  },
  {
    title: '24/7 Service',
    description: 'Description goes here',
    link: 'Link',
  },
  {
    title: 'TravelCenters of America',
    description: 'Description goes here',
    link: 'Link',
  },
  {
    title: 'TA Road Squad',
    description: 'Description goes here',
    link: 'Link',
  },
]

const boexen: FC<Props> = ({ ...rest }) => {
  return (
    <Section {...rest}>
      {boxen.map((box, i) => (
        <Box key={i} delay={(i + 1) * 300} duration={500} distance="100%">
          <Title>{box.title}</Title>
          <Description>{box.description}</Description>
        </Box>
      ))}
    </Section>
  )
}

export default boexen
