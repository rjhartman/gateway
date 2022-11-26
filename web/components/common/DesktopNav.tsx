import type { VFC } from 'react'
import tw from 'twin.macro'
import styled, { css } from 'styled-components'
import NextLink from 'next/link'

const Nav = tw.nav`relative flex flex-col items-center`
const Top = tw.ul`flex flex-row uppercase font-poppins text-lg`
const Children = tw.ul`absolute bg-grey text-white flex-col bottom-0 translate-y-full hidden`
const TopLink = styled(NextLink)(() => [
  tw`px-3 py-1 leading-none relative after:([content:''] absolute bottom-0 mx-auto left-0 right-0 bg-primary h-0.5 w-0 duration-500 ease-in-out)`,
  tw`hover:(after:w-full)`,
])
const ChildLink = styled(NextLink)`
  ${tw`hover:bg-secondary w-full py-1 pl-1 pr-4 text-base capitalize`}
`

interface FilterProps {}

const navItems = [
  {
    title: 'History',
    url: '#',
    children: [],
  },
  {
    title: 'Food & Fuel',
    url: '#',
    children: [
      { title: 'Fuel', url: '#', children: [] },
      { title: 'Resturants', url: '#', children: [] },
    ],
  },
  {
    title: 'Services',
    url: '#',
    children: [
      {
        title: 'Conferences',
        url: '#',
        children: [],
      },
      {
        title: 'Lodging',
        url: '#',
        children: [],
      },
      {
        title: 'Shopping',
        url: '#',
        children: [],
      },
      {
        title: 'Bus Services',
        url: '#',
        children: [],
      },
    ],
  },
  {
    title: 'Contact Us',
    url: '#',
    children: [],
  },
]

const DesktopNav: VFC<FilterProps> = ({ ...rest }) => {
  const listItems = (nav, child = false) => {
    const Link = !!child ? ChildLink : TopLink
    const List = !!child ? Children : Top
    return (
      <List className={!!child ? 'children' : ''}>
        {nav.map(({ title, url, children }, i) => (
          <li key={i} tw="relative flex hover:[.children]:flex">
            <Link href={url}>{title}</Link>
            {!!children && children.length > 0 && listItems(children, true)}
          </li>
        ))}
      </List>
    )
  }

  return <Nav {...rest}>{listItems(navItems)}</Nav>
}

export default DesktopNav
