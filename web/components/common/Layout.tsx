import type { FC } from 'react'

import Header from '@common/Header'
import Footer from '@common/Footer'

const Layout: FC<LayoutProps> = ({
  logos,
  companyInfo,
  children,
  form,
  menu = [],
  contact = false,
  inner = false,
}) => {
  const { address, phoneNumber, mapsEmbed, mapsLink } = companyInfo
  return (
    <>
      <Header
        menu={menu}
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
        form={form}
      />
    </>
  )
}

export default Layout
