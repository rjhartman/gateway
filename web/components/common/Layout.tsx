import type { FC, ReactNode } from 'react'
import tw from 'twin.macro'

import Header from '@common/Header'
import Footer from '@common/Footer'
import { Form as FormType } from 'lib/schema'

interface LayoutProps {
  children: ReactNode
  logos: any
  form: FormType
}

const Layout: FC<LayoutProps> = ({ logos, children, form }) => {
  return (
    <>
      <Header logos={logos} />
      <main>{children}</main>
      <Footer form={form} />
    </>
  )
}

export default Layout
