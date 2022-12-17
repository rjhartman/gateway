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
    mobileDuration,
    mobileDistance,
    mobileDirection,
  }: {
    inView: boolean
    direction: string
    distance: string
    fade: boolean
    duration: number
    delay: number
    blur: boolean
    mobileDuration: number
    mobileDistance: string
    mobileDirection: string
  }) => [
    !!blur && tw`blur-sm`,
    !!fade && tw`opacity-0`,

    css`
      transition-duration: ${mobileDuration}ms;
      transition-delay: ${delay}ms;
      transition-timing-function: ease-in-out;

      @media (min-width: 640px) {
        transition-duration: ${duration}ms;
      }
      @media (max-width: 639px) {
        transform: translateX(0px) translateY(50px);
      }
    `,

    ['left', 'right'].includes(direction || mobileDirection) &&
      css`
        transform: translateX(${mobileDistance});
        @media (min-width: 640px) {
          transform: translateX(${distance});
        }
      `,
    ['up', 'down'].includes(direction || mobileDirection) &&
      css`
        transform: translateX(${mobileDistance});
        @media (min-width: 640px) {
          transform: translateY(${distance});
        }
      `,

    inView && tw`blur-0 translate-x-0! translate-y-0! opacity-100 `,
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
  mobileDuration?: number
  mobileDistance?: string
  mobileDirection?: string
}

const AnimateIn: FC<AnimateInProps> = ({
  direction = 'up',
  blur = false,
  threshold = 0,
  distance = '25%',
  fade = true,
  duration = 700,
  delay = 0,
  mobileDuration = 500,
  mobileDistance = '50px',
  mobileDirection = 'up',
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
      mobileDuration={mobileDuration}
      mobileDistance={mobileDistance}
      mobileDirection={mobileDirection}
      {...rest}
    >
      {children}
    </Wrapper>
  )
}

export default AnimateIn
