import type { FC } from 'react'
import tw from 'twin.macro'
import Image from '@common/SanityImage'
import { FrontHero as FrontHeroType } from 'lib/schema'

const Section = tw.section`w-full max-w-full h-screen text-white font-bold text-4xl flex flex-col relative items-center justify-center overflow-hidden text-center`

const FrontHero: FC<FrontHeroType> = ({
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
        tw="object-cover brightness-[40%] absolute h-full w-full z-behind"
      />
      <h1 tw="text-5xl sm:text-7xl">{title}</h1>
      <h3 tw="text-2xl sm:text-4xl text-primary mt-2">{subtitle}</h3>
    </Section>
  )
}

export default FrontHero
