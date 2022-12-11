import type { FC, ReactNode } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import { Services as ServicesType } from 'lib/schema'
import Image from '@common/SanityImage'
import Content from '@common/Content'

const Item = styled.div(({ flip }: { flip: boolean }) => [
  tw`flex w-full border border-red-500`,
  flip ? tw`flex-row-reverse` : tw`flex-row`,
])
const ContentWrapper = tw.div`flex flex-col w-1/2 p-12 gap-4`

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
    <Item flip={flip} {...rest}>
      {/* {!!image && <Image {...image} />} */}
      <ContentWrapper>
        <h3>{title}</h3>
        <p>{link?.text}</p>
        <Content content={description} />
      </ContentWrapper>
    </Item>
  )
}

export default ServiceItem
