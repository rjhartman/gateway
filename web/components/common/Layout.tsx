import type { FC, ReactNode } from 'react'
import tw from 'twin.macro'

import Header from '@common/Header'
import Footer from '@common/Footer'

interface LayoutProps {
  children: ReactNode
  logos: any
}

const Layout: FC<LayoutProps> = ({ logos, children }) => {
  return (
    <>
      <Header logos={logos} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
