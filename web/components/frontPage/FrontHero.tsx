import type { VFC } from 'react'
import tw from 'twin.macro'
import Image from 'next/image'
import hero from '../../public/hero.jpg'

const Section = tw.section`w-full max-w-full h-screen [img]:(object-cover brightness-50) overflow-hidden`

interface FilterProps {}

const FrontHero: VFC<FilterProps> = ({ ...rest }) => {
  return (
    <Section {...rest}>
      <Image src={hero} alt="hero image" fill />
    </Section>
  )
}

export default FrontHero
