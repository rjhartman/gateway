import type { FC, ReactNode } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import Image from '@common/SanityImage'
import Content from '@common/Content'
import AnimateIn from '@common/AnimateIn'

const Item = styled.div(({ flip }: { flip: boolean }) => [
  tw`lg:items-stretch flex flex-col items-center`,
  flip ? tw`md:flex-row-reverse` : tw`md:flex-row`,
])
const ContentWrapper = styled.div(({ flip }: { flip: boolean }) => [
  tw`md:px-12 flex flex-col w-full gap-4 py-6 items-start`,
  flip ? tw`md:(items-end text-right)` : tw``,
])

const Title = tw.span`text-4xl font-poppins relative pb-2 after:([content: ''] bg-primary w-full h-1 bottom-0 left-0 absolute)`

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
  !!image && console.log(image)
  return (
    <AnimateIn
      direction={flip ? 'left' : 'right'}
      distance="50px"
      duration={1000}
    >
      <Item flip={flip} {...rest}>
        {!!image && (
          <Image
            image={image}
            tw="md:max-w-[15rem] lg:max-w-[20rem] object-cover shadow-xl"
          />
        )}
        {/* remove this when image works*/}
        {/* <div tw="bg-primary max-w-[15rem] w-full"></div> */}
        <ContentWrapper flip={flip}>
          <Title>{title}</Title>
          <Content content={description} />
        </ContentWrapper>
      </Item>
    </AnimateIn>
  )
}

export default ServiceItem
