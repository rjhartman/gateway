import type { FC } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import Image from '@common/SanityImage'

const HeaderWrapper = tw.div`flex flex-row gap-4 relative h-full w-full`
const HeaderImage = styled(Image)(
  ({ hc = false, $usehc }: { hc?: boolean; $usehc: boolean }) => [
    tw`absolute object-contain h-full duration-300 ease-in-out`,
    hc ? tw`opacity-100` : tw`opacity-0`,
    $usehc && hc
      ? tw`lg:opacity-100`
      : !hc && !$usehc
      ? tw`lg:opacity-100`
      : tw`lg:opacity-0`,
  ]
)
interface LogoProps {
  logo?: any
  hcLogo?: any
  header?: boolean
  $usehc?: boolean
}

const Logo: FC<LogoProps> = ({
  logo,
  hcLogo,
  header = false,
  $usehc = false,
  ...rest
}) => {
  return header ? (
    <HeaderWrapper>
      <HeaderImage image={logo} $usehc={$usehc} {...rest}></HeaderImage>
      <HeaderImage image={hcLogo} hc $usehc={$usehc} {...rest}></HeaderImage>
    </HeaderWrapper>
  ) : (
    <Image image={$usehc ? hcLogo : logo} {...rest}></Image>
  )
}

export default Logo
