import type { FC, ReactNode } from 'react'
import tw from 'twin.macro'

import Title from '@common/Title'
import SanityImage from '@common/SanityImage'
import Content from '@common/Content'
import AnimateIn from '@common/AnimateIn'

const Section = tw.section`flex flex-col items-center relative w-full py-20 gap-20`
const Bottom = tw.div`flex w-full px-12 gap-12 relative`
const Half = tw.div`flex flex-col justify-center w-1/2`

interface CompanyHistoryProps {
  history: any
  image: any
  title: string
}

const CompanyHistory: FC<CompanyHistoryProps> = ({
  history,
  image,
  title,
  ...rest
}) => {
  return (
    <Section {...rest}>
      <Title>{title}</Title>
      <Bottom>
        <Half>
          <AnimateIn direction="right" duration={1000} distance="100px">
            <SanityImage image={image} tw="shadow-2xl" />
          </AnimateIn>
        </Half>
        <Half>
          <Content content={history} />
        </Half>
      </Bottom>
    </Section>
  )
}

export default CompanyHistory
