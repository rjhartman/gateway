import type { FC, ReactNode } from 'react'
import tw from 'twin.macro'

const Section = tw.section`pt-52 pb-20 mx-auto px-12 max-w-[80rem] flex flex-col items-center gap-8`

interface PageWrapperProps {
  children: ReactNode
}

const PageWrapper: FC<PageWrapperProps> = ({ children, ...rest }) => {
  return <Section {...rest}>{children}</Section>
}

export default PageWrapper
