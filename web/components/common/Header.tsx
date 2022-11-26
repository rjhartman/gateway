import type { VFC } from 'react'
import tw from 'twin.macro'

import DesktopNav from '@common/DesktopNav'

const Component = tw.header`w-full fixed top-0 left-0 border-b border-font flex flex-col items-center`

interface FilterProps {}

const Header: VFC<FilterProps> = ({ ...rest }) => {
  return (
    <Component {...rest}>
      <p>Logo Here</p>
      <DesktopNav />
    </Component>
  )
}

export default Header
