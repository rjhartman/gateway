import type { VFC, ReactNode } from 'react'
import tw from 'twin.macro'

import Header from '@common/Header'

interface LayoutProps {
  children: ReactNode
}

const Layout: VFC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
