import type { FC, ReactNode } from 'react'
import tw from 'twin.macro'

import type {
  CompanyInfo as CompanyInfoType,
  Logos as LogosType,
} from 'lib/schema'
import Header from '@common/Header'
import Footer from '@common/Footer'

interface LayoutProps {
  children: ReactNode
  logos: LogosType
  companyInfo: CompanyInfoType
}

const Layout: FC<LayoutProps> = ({ logos, companyInfo, children }) => {
  const { address, email, phoneNumber, mapsEmbed, mapsLink } = companyInfo
  return (
    <>
      <Header logos={logos} phoneNumber={phoneNumber} />
      <main>{children}</main>
      <Footer address={address} mapsLink={mapsLink} mapsEmbed={mapsEmbed} />
    </>
  )
}

export default Layout
