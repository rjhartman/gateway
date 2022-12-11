import type { FC, ReactNode } from 'react'
import tw from 'twin.macro'

import Title from '@common/Title'

const Section = tw.section`flex flex-col items-center w-full relative py-20 border border-red-500 px-32 gap-12`

interface ServicesProps {
  title: string
}

const Services: FC<ServicesProps> = ({ title, ...rest }) => {
  const services = [{}, {}, {}, {}, {}, {}, {}, {}, {}]
  return (
    <Section {...rest}>
      <Title>{title}</Title>
      <div tw="grid grid-cols-3 gap-8 w-full">
        {services.map((service, index) => (
          <div key={index} tw="border border-red-500 h-[10rem]">
            <h1>Service {index + 1}</h1>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Services
