import type { FC } from 'react'
import tw from 'twin.macro'
import Image from 'next/image'
import hero from '../../public/hero.jpg'

const Section = tw.section`w-full max-w-full h-screen text-white font-bold text-4xl [img]:(object-cover brightness-[25%] absolute z-behind) flex flex-col items-center justify-center overflow-hidden`

interface FrontHeroProps {
  title: 'string'
  subtitle: 'string'
}

const FrontHero: FC<FrontHeroProps> = ({ title, subtitle, ...rest }) => {
  return (
    <Section {...rest}>
      <Image src={hero} alt="hero image" fill />
      <h1 tw="text-7xl">{title}</h1>
      <h3 tw="text-4xl text-primary mt-2">{subtitle}</h3>
    </Section>
  )
}

export default FrontHero
