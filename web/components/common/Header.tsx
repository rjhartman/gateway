import type { VFC } from 'react'
import { useEffect, useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import DesktopNav from '@common/DesktopNav'

const Component = styled.header(() => [
  tw`border-offBlack border-opacity-30 fixed top-0 left-0 flex flex-row items-center justify-between w-full gap-4 px-2 py-2 duration-300 ease-in-out border-b shadow-xl`,
])
const Number = tw.a`text-xl font-poppins hover:text-primary duration-500 ease-in-out`

interface FilterProps {}

const Header: VFC<FilterProps> = ({ ...rest }) => {
  return (
    <Component {...rest}>
      <div tw="h-16 w-40 bg-primary"></div>
      <DesktopNav />
      <Number href={`tel:5555555555`}>(555) 555-5555</Number>
    </Component>
  )
}

export default Header
