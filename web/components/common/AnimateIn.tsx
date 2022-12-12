import type { FC, ReactNode } from 'react'
import tw, { styled, css } from 'twin.macro'
import { useInView } from 'react-intersection-observer'

const Wrapper = styled.div(
  ({
    inView,
    direction,
    distance,
    fade,
    duration,
    delay,
    blur,
  }: {
    inView: boolean
    direction: string
    distance: string
    fade: boolean
    duration: number
    delay: number
    blur: boolean
  }) => [
    !!blur && tw`blur-sm`,
    !!fade && tw`opacity-0`,
    css`
      transition-duration: ${duration}ms;
      transition-delay: ${delay}ms;
      transition-timing-function: ease-in-out;
    `,

    (direction === 'left' || direction === 'right') &&
      css`
        transform: translateX(${distance});
      `,
    (direction === 'up' || direction === 'down') &&
      css`
        transform: translateY(${distance});
      `,

    inView && tw`blur-0 translate-x-0 translate-y-0 opacity-100`,
  ]
)

interface AnimateInProps {
  direction?: 'left' | 'right' | 'up' | 'down'
  blur?: boolean
  threshold?: number
  distance?: string
  fade?: boolean
  duration?: number
  delay?: number
  children: ReactNode
}

const AnimateIn: FC<AnimateInProps> = ({
  direction = 'up',
  blur = false,
  threshold = 0,
  distance = '25%',
  fade = true,
  duration = 700,
  delay = 0,
  children,
  ...rest
}) => {
  const [ref, inView] = useInView({
    threshold: threshold,
    triggerOnce: true,
  })

  // flip the distance based on the direction
  if (direction === 'right' || direction === 'down') distance = '-' + distance

  return (
    <Wrapper
      delay={delay}
      ref={ref}
      inView={inView}
      fade={fade}
      blur={blur}
      distance={distance}
      direction={direction}
      duration={duration}
      {...rest}
    >
      {children}
    </Wrapper>
  )
}

export default AnimateIn
