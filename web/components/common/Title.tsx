import type { FC, ReactNode } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const styles = ({ h1, white }: { h1: boolean; white: boolean }) => [
  tw`text-7xl font-allita relative items-center text-center pb-4 after:([content: ""] bg-primary h-1 w-3/4 absolute bottom-0 left-0 right-0 mx-auto)`,
  !!h1 ? tw`` : tw``,
  !!white ? tw`text-white` : tw`text-font`,
]

const H1 = styled.h1(styles)
const H2 = styled.h2(styles)

interface TitleProps {
  children: ReactNode
  h1?: boolean
  white?: boolean
}

const Title: FC<TitleProps> = ({
  children,
  h1 = false,
  white = false,
  ...rest
}) => {
  const Component = !!h1 ? H1 : H2

  return (
    <Component h1={h1} white={white} {...rest}>
      {children}
    </Component>
  )
}

export default Title
