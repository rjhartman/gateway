import type { FC } from 'react'
import tw from 'twin.macro'
import Image from '@common/SanityImage'

const Section = tw.section`w-full max-w-full h-screen text-white font-bold text-4xl flex flex-col items-center justify-center overflow-hidden`

interface FrontHeroProps {
  title: 'string'
  subtitle: 'string'
  background: any
}

const FrontHero: FC<FrontHeroProps> = ({
  title,
  subtitle,
  background,
  ...rest
}) => {
  return (
    <Section {...rest}>
      <Image
        image={background}
        alt="hero image"
        tw="object-cover brightness-[25%] absolute z-behind"
      />
      <h1 tw="text-7xl">{title}</h1>
      <h3 tw="text-4xl text-primary mt-2">{subtitle}</h3>
    </Section>
  )
}

export default FrontHero
