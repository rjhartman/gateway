import type { FC } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'

const styles = ({ white, inView }: { white: boolean; inView: boolean }) => [
  tw`text-6xl sm:text-7xl font-allita relative flex flex-col items-center text-center pb-4 after:([content: ""] bg-primary h-1 absolute duration-700 ease-in-out bottom-0 )`,
  !!white ? tw`text-white` : tw`text-font`,
  !!inView ? tw`after:(w-3/4)` : tw`after:(w-0)`,
]

const H1 = styled.h1(() => [styles])
const H2 = styled.h2(() => [styles])

interface TitleProps {
  children: string
  level?: 'h1' | 'h2'
  white?: boolean
}

const Title: FC<TitleProps> = ({
  children,
  level = 'h2',
  white = false,
  ...rest
}) => {
  const Component = level === 'h1' ? H1 : H2
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  })
  return (
    <Component white={white} ref={ref} inView={inView} {...rest}>
      {children}
    </Component>
  )
}

export default Title
