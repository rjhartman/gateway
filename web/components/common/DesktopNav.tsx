import type { VFC } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import NextLink from 'next/link'

const Nav = tw.nav`w-full relative flex flex-col items-center`
const Top = tw.ul`flex flex-row`
const TopLink = styled(NextLink)`
  ${tw`px-3`}
`

interface FilterProps {}

const navItems = [
  {
    title: 'test',
    url: '#',
    children: [],
  },
  {
    title: 'test',
    url: '#',
    children: [],
  },
  {
    title: 'test',
    url: '#',
    children: [],
  },
  {
    title: 'test',
    url: '#',
    children: [],
  },
]

const DesktopNav: VFC<FilterProps> = ({ ...rest }) => {
  return (
    <Nav {...rest}>
      <Top>
        {navItems.map(({ title, url }, i) => (
          <li key={i}>
            <TopLink href={url}>{title}</TopLink>
          </li>
        ))}
      </Top>
    </Nav>
  )
}

export default DesktopNav
