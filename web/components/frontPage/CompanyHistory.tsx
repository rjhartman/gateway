import type { FC, ReactNode } from 'react'
import tw from 'twin.macro'
import Img from 'next/image'

import { client, imageProps } from '@functions'
import Title from '@common/Title'

const Section = tw.section`py-20 w-full flex flex-col items-center`
const Bottom = tw.div`w-full flex`
const Half = tw.div`w-1/2 flex flex-col items-center`

interface CompanyHistoryProps {
  title: string
  image: any
}

const CompanyHistory: FC<CompanyHistoryProps> = ({ title, image }) => {
  console.log(image)
  return (
    <Section>
      <Title>{title}</Title>
      <Bottom>
        <Half>{!!imageProps && <Img {...imageProps(image)} />}</Half>
        <Half></Half>
      </Bottom>
    </Section>
  )
}

export default CompanyHistory
