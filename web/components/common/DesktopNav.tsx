import { FC } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import Link from 'next/link'

const Nav = tw.nav`relative flex flex-col items-center lg:(absolute w-auto mx-auto left-[50%] -translate-x-[50%])`
const Top = tw.ul`flex flex-row uppercase font-poppins text-lg -mx-3`
const Children = styled.ul`
  ${tw`bg-grey absolute bottom-0 left-0 flex-col hidden min-w-full text-white translate-y-full before:([content:""] bg-primary w-full absolute top-0 left-0 -translate-y-full h-0.5)`}
  a, span {
    ${tw`w-full py-1 pl-1 pr-6`}
  }
`
const TopItem = styled.li(() => [
  tw`[& > a, & > span]:(px-3 py-1) flex leading-none relative after:([content:''] absolute bottom-0 mx-auto left-0 right-0 bg-primary h-0.5 w-0 duration-500 ease-in-out)`,
  tw`hover:(after:w-[calc(100% - 1.25rem)] [.children]:flex)`,
])
const ChildItem = styled.li`
  ${tw`hover:bg-secondary whitespace-nowrap flex w-full text-base capitalize`}
`

interface Props {
  menu: any[]
}

const DesktopNav: FC<Props> = ({ menu, ...rest }) => {
  const listItems = (nav: any, child = false) => {
    const Item = !!child ? ChildItem : TopItem
    const List = !!child ? Children : Top
    return (
      <List className={!!child ? 'children' : ''}>
        {nav.map(({ title, type, url, children }: any, i: number) => {
          return (
            <Item key={i}>
              {type === 'placeholder' ? (
                <span>{title}</span>
              ) : type === 'internal' ? (
                <Link href={url}>{title}</Link>
              ) : (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {title}
                </a>
              )}
              {!!children && children.length > 0 && listItems(children, true)}
            </Item>
          )
        })}
      </List>
    )
  }

  return <Nav {...rest}>{menu.length > 0 && listItems(menu)} </Nav>
}

export default DesktopNav
