import type { FC, ReactNode } from 'react'
import tw from 'twin.macro'
import { Services as ServicesType } from 'lib/schema'

import Title from '@common/Title'
import Item from '@frontPage/ServiceItem'

const Section = tw.section`flex flex-col items-center w-full relative py-20 border border-red-500 px-32 gap-12`
const List = tw.ul`flex flex-col w-full gap-20 relative`

const Services: FC<ServicesType> = ({ title, services, ...rest }) => {
  return (
    <Section {...rest}>
      <Title>{title}</Title>
      <List>
        {services?.map((service, i) => (
          <li key={i}>
            <Item flip={!!(i % 2)} {...service} />
          </li>
        ))}
      </List>
    </Section>
  )
}

export default Services
