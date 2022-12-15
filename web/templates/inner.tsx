import type { FC, ReactNode } from 'react'
import tw from 'twin.macro'

const Section = tw.section``

interface innerProps {
  children: ReactNode
}

const inner: FC<innerProps> = ({ children, ...rest }) => {
  return <Section {...rest}>{children}</Section>
}

export default inner
