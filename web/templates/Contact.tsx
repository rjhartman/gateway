import type { FC } from 'react'

import Layout from '@common/Layout'

const Contact: FC<PageTemplateProps> = ({ ...rest }) => {
  return <Layout contact {...rest}></Layout>
}

export default Contact
