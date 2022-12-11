import type { FC, ReactNode } from 'react'
import tw from 'twin.macro'
import groq from 'groq'

import { configuredSanityClient } from '@functions'
import Image from '@common/SanityImage'

const Section = tw.section``

interface LogoProps {
  logo?: any
  hcLogo?: any
}

const Logo: FC<LogoProps> = ({ logo, hcLogo, ...rest }) => {
  return <Image image={hcLogo} {...rest}></Image>
}

export default Logo
