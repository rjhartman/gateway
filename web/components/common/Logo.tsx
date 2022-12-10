import type { FC, ReactNode } from 'react'
import tw from 'twin.macro'
import groq from 'groq'

import { configuredSanityClient } from '@functions'
import Image from '@common/SanityImage'

const Section = tw.section``

interface LogoProps {
  data?: any
}

const Logo: FC<LogoProps> = ({ data, ...rest }) => {
  return <Section {...rest}></Section>
}

export default Logo
