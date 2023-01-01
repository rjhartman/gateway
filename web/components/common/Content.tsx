import { FC } from 'react'
import { PortableText } from '@portabletext/react'
import tw from 'twin.macro'
import styled, { css } from 'styled-components'

import type { Resturant as ResturantType } from 'lib/schema'
import Resturant from 'components/content/Resturant'

const styles = () => [
  tw`w-full`,

  css`
    p,
    ul,
    ol {
      ${tw`mb-4`}
    }

    h2 {
      ${tw`mb-4 text-3xl font-bold`}
    }

    ul,
    ol {
      ${tw`ml-10 list-outside`}
    }

    ul {
      ${tw`list-disc`}
    }

    ol {
      ${tw`list-decimal`}
    }

    li {
      ${tw`mb-2`}
    }

    a {
      ${tw`text-offBlack hover:text-primary font-bold duration-300 ease-in-out`}
    }
  `,
]

const Article = styled.article(() => [styles])
const Div = styled.div(() => [styles])

const components = {
  types: {
    resturant: ({ value }: { value: ResturantType }) => (
      <Resturant {...value} />
    ),
  },
  block: {},
}

interface ContentProps {
  content: any
  article?: boolean
}

const Content: FC<ContentProps> = ({ article = false, content }) => {
  const Wrapper = article ? Article : Div
  return (
    <Wrapper>
      <PortableText value={content} components={components} />
    </Wrapper>
  )
}

export default Content
