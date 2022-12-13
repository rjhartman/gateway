import type { FC, ReactNode } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import sanityClient from 'lib/sanity-client'
import { Services as ServicesType } from 'lib/schema'

import Image from '@common/SanityImage'
import Content from '@common/Content'
import AnimateIn from '@common/AnimateIn'

const Item = styled.div(({ flip }: { flip: boolean }) => [
  tw`flex`,
  flip ? tw`flex-row-reverse` : tw`flex-row`,
])
const ContentWrapper = styled.div(({ flip }: { flip: boolean }) => [
  tw`flex flex-col w-full gap-4 px-12 py-6`,
  flip ? tw`items-end` : tw`items-start`,
])

const Title = tw.span`text-4xl font-poppins`

interface ServiceItemProps {
  flip: boolean
  title: string
  link?: any
  image?: any
  description?: any
}

const ServiceItem: FC<ServiceItemProps> = ({
  flip,
  title,
  link,
  image,
  description,
  ...rest
}) => {
  return (
    <AnimateIn
      direction={flip ? 'left' : 'right'}
      distance="50px"
      duration={1000}
    >
      <Item flip={flip} {...rest}>
        {/* {image?._type === 'image' && <Image {...image} />} */}
        {/* remove this when image works*/}
        <div tw="bg-primary max-w-[15rem] w-full"></div>
        <ContentWrapper flip={flip}>
          <Title>{title}</Title>
          <Content content={description} />
        </ContentWrapper>
      </Item>
    </AnimateIn>
  )
}

export default ServiceItem
