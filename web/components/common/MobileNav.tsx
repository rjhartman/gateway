import type { VFC } from 'react'
import tw from 'twin.macro'
import styled, { css } from 'styled-components'

const Section = styled.section<{ isOpen: boolean }>(({ isOpen }) => [
  tw`bg-offBlack z-excessive fixed top-0 left-0 w-full h-screen max-w-full overflow-hidden`,
  !!isOpen ? tw`flex` : tw`hidden`,
])
const CloseButton = tw.button`absolute top-0 right-0 h-16 w-16 flex items-center justify-center text-2xl text-white font-bold hover:(text-primary) duration-500 ease-in-out`

interface Props {
  navItems: any[]
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const MobileNav: VFC<Props> = ({ navItems, setIsOpen, isOpen, ...rest }) => {
  return (
    <Section isOpen={isOpen} {...rest}>
      <CloseButton onClick={() => setIsOpen(false)}>×</CloseButton>
    </Section>
  )
}

export default MobileNav
