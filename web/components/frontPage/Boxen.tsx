import type { FC } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import AnimateIn from '@common/AnimateIn'
import ImSanityImageage from '@common/SanityImage'

const Section = tw.section`flex relative flex-col md:flex-row w-full items-stretch justify-evenly py-20 gap-20 px-20`
const Box = styled(AnimateIn)`
  ${tw`flex-col z-10 text-center items-center duration-300 w-fit ease-in-out flex flex-col text-xl font-bold max-w-[25%] w-full justify-start`}
`
const Title = tw.h3`text-3xl font-bold after:([content:''] block w-2/3 mx-auto h-1 bg-primary mt-2) text-center`
const Description = tw.p`text-lg mt-2`
const Image = styled(ImSanityImageage)`${tw`max-w-full aspect-square`}`

interface Props {
  aops?: any
}

const boexen: FC<Props> = ({ aops, ...rest }) => {
  return (
    <Section {...rest}>
      {aops.map(({title, description, image}: {title: string, description:string, image:any}, i: number) => (
        <Box key={i} delay={(i + 1) * 300} duration={500} distance="50px">
          {!!image && <Image image={image} alt={title} />}
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Box>
      ))}
    </Section>
  )
}

export default boexen
