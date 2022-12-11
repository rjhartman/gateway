import type { FC } from 'react'
import tw from 'twin.macro'

import Image from '@common/SanityImage'

interface LogoProps {
  logo?: any
  hcLogo?: any
}

const Logo: FC<LogoProps> = ({ logo, hcLogo, ...rest }) => {
  return <Image image={hcLogo} {...rest}></Image>
}

export default Logo
