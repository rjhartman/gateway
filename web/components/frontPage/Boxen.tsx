import type { FC } from 'react'
import tw from 'twin.macro'
import NLink from 'next/link'

const Section = tw.section`flex flex-row w-full relative `
const Box = tw.div`flex flex-col w-1/4 aspect-square bg-gray-300 [:nth-child(even)]:(bg-offBlack text-white z-20) z-10 p-6 shadow-xl justify-between`
const Wrapper = tw.div`flex-col w-full relative flex gap-4`
const Title = tw.h3`text-2xl font-bold`
const Link = tw(NLink)`text-blue-500 self-end`

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
      {boxen.map((box, index) => (
        <Box key={index}>
          <Wrapper>
            <Title>{box.title}</Title>
            <p>{box.description}</p>
          </Wrapper>
          <Link href={box.link}>Find out More</Link>
        </Box>
      ))}
    </Section>
  )
}

export default boexen
