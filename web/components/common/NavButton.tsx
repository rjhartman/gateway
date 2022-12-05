import type { FC, MouseEventHandler } from 'react'
import tw, { styled, css } from 'twin.macro'

interface NavButtonProps {
  onClick?: MouseEventHandler
  active?: boolean
}

const Button = styled.div<{ active: boolean }>(({ active }) => [
  tw`flex flex-col relative h-9 justify-center items-end hover:([& > div]:(bg-primary [&:nth-child(2)]:(w-full) [&:not(:nth-child(2))]:(w-3/4)) text-primary) transition-colors duration-300 ease-in-out w-9`,
  active &&
    css`
      ${tw`items-center`}
      & > div {
        ${tw`w-5/6!`}

        &:nth-child(1) {
          ${tw`-rotate-45 absolute`}
        }

        &:nth-child(2) {
          ${tw`opacity-0 -translate-x-full`}
        }

        &:nth-child(3) {
          ${tw`rotate-45 absolute`}
        }
      }
    `,
])

const Line = tw.div`h-1 bg-black w-full mb-1 rounded-3xl [&:nth-child(2)]:(w-3/4) transition-all duration-300 ease-in-out`

const NavButton: FC<NavButtonProps> = ({ onClick, active, ...rest }) => (
  <Button {...rest} onClick={onClick} role="button" active={!!active}>
    {Array(3)
      .fill(null)
      .map((_, i) => (
        <Line key={i} />
      ))}
  </Button>
)

export default NavButton
