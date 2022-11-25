import type { VFC, ReactNode } from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

const Section = tw.section``

interface LayoutProps {
  children: ReactNode
}

const Layout: VFC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
