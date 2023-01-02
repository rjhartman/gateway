import type { FC, ReactNode } from 'react'
import tw from 'twin.macro'
import Img from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import { defaultSanityClient } from 'lib/sanity-client'
import { UseNextSanityImageProps } from 'next-sanity-image/dist/types'

interface SanityImageProps {
  image: any
  alt?: string
}

const SanityImage: FC<SanityImageProps> = ({
  image,
  alt = 'placeholder',
  ...rest
}) => {
  const imageProps = useNextSanityImage(
    defaultSanityClient,
    image
  ) as any as UseNextSanityImageProps

  return (
    <Img
      {...rest}
      {...imageProps}
      alt={alt}
      placeholder={!!image.asset?.metadata?.lqip ? 'blur' : 'empty'}
      blurDataURL={image.asset?.metadata?.lqip}
      tw="max-w-full"
    />
  )
}

export default SanityImage
