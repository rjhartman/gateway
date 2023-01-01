import type { FC, ReactNode } from 'react'
import tw from 'twin.macro'

import type {
  CompanyInfo as CompanyInfoType,
  Logos as LogosType,
} from 'lib/schema'
import Header from '@common/Header'
import Footer from '@common/Footer'

const Layout: FC<LayoutProps> = ({
  logos,
  companyInfo,
  children,
  contact = false,
  inner = false,
}) => {
  const { address, email, phoneNumber, mapsEmbed, mapsLink } = companyInfo
  return (
    <>
      <Header
        logos={logos}
        phoneNumber={phoneNumber}
        inner={inner || contact}
      />
      <main>{children}</main>
      <Footer
        address={address}
        mapsLink={mapsLink}
        mapsEmbed={mapsEmbed}
        contact={contact}
      />
    </>
  )
}

export default Layout
