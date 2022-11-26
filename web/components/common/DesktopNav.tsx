import type { VFC } from 'react'
import tw from 'twin.macro'
import styled, { css } from 'styled-components'
import Link from 'next/link'

const Nav = tw.nav`relative flex flex-col items-center`
const Top = tw.ul`flex flex-row uppercase font-poppins text-lg`
const Children = styled.ul`
  ${tw`bg-grey absolute bottom-0 left-0 flex-col hidden min-w-full text-white translate-y-full before:([content:""] bg-primary w-full absolute top-0 left-0 -translate-y-full h-0.5)`}
  a {
    ${tw`w-full py-1 pl-1 pr-6`}
  }
`
const TopItem = styled.li(() => [
  tw`[& > a]:(px-3 py-1) flex leading-none relative after:([content:''] absolute bottom-0 mx-auto left-0 right-0 bg-primary h-0.5 w-0 duration-500 ease-in-out)`,
  tw`hover:(after:w-[calc(100% - 1.25rem)] [.children]:flex)`,
])
const ChildItem = styled.li`
  ${tw`hover:bg-secondary flex w-full text-base capitalize`}
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
    const Item = !!child ? ChildItem : TopItem
    const List = !!child ? Children : Top
    return (
      <List className={!!child ? 'children' : ''}>
        {nav.map(({ title, url, children }, i) => (
          <Item key={i}>
            <Link href={url}>{title}</Link>
            {!!children && children.length > 0 && listItems(children, true)}
          </Item>
        ))}
      </List>
    )
  }

  return <Nav {...rest}>{listItems(navItems)}</Nav>
}

export default DesktopNav
