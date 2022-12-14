import type { FC } from 'react'
import tw from 'twin.macro'

import Title from '@common/Title'
import SanityImage from '@common/SanityImage'
import Content from '@common/Content'
import AnimateIn from '@common/AnimateIn'
import type { CompanyHistory as CompanyHistoryType } from 'lib/schema'

const Section = tw.section`flex bg-offWhite flex-col items-center relative w-full py-20 gap-20`
const Bottom = tw.div`flex flex-col lg:flex-row w-full px-4 md:px-12 gap-12 relative`
const Half = tw.div`flex flex-col justify-center w-full lg:w-1/2`

const CompanyHistory: FC<CompanyHistoryType> = ({
  history,
  image,
  title,
  ...rest
}) => {
  return (
    <Section {...rest}>
      <Title>{title ?? ''}</Title>
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
