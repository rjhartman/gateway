import type { FC, ReactNode } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Services as ServicesType } from 'lib/schema'

import Title from '@common/Title'
import Item from '@frontPage/ServiceItem'

const Section = tw.section`flex flex-col items-center w-full bg-offWhite relative py-20 px-32 gap-12`
const List = tw.ul`flex flex-col items-center w-full gap-20 relative`
const ItemWrapper = styled.li(({ flip }: { flip: boolean }) => [
  tw`flex flex-col w-full max-w-[60rem]`,
  flip ? tw`self-end` : tw`self-start`,
])

const Services: FC<ServicesType> = ({ title, services, ...rest }) => {
  return (
    <Section {...rest}>
      <Title>{title}</Title>
      <List>
        {services?.map((service, i) => (
          <ItemWrapper key={i} flip={!!(i % 2)}>
            <Item flip={!!(i % 2)} {...service} />
          </ItemWrapper>
        ))}
      </List>
    </Section>
  )
}

export default Services
