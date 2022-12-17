import type { FC } from 'react'

import Layout from '@common/Layout'

const Contact: FC<PageTemplateProps> = ({
  logos,
  companyInfo,
  page,
  ...rest
}) => {
  return (
    <Layout logos={logos} companyInfo={companyInfo} contact {...rest}></Layout>
  )
}

export default Contact
