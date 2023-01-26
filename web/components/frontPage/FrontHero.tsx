import { FC } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import Image from '@common/SanityImage'
import { FrontHero as FrontHeroType } from 'lib/schema'

const Section = tw.section`w-full max-w-full h-screen text-white font-bold text-4xl flex flex-col relative items-center justify-center overflow-hidden text-center`
const Video = styled.video(({}) => [
  tw` blur-0 absolute top-0 left-0 object-cover w-full h-full duration-700 ease-in-out opacity-100 z-behind`,
])

interface FrontHeroProps extends FrontHeroType {
  video?: any
}

const FrontHero: FC<FrontHeroProps> = ({
  title,
  subtitle,
  background: image,
  backgroundType: type,
  video,
  ...rest
}) => {
  return (
    <Section {...rest}>
      {type === 'image' ? (
        <Image
          image={image}
          alt="hero image"
          tw="object-cover brightness-[40%] absolute h-full w-full z-behind"
        />
      ) : !!video ? (
        <Video
          autoPlay
          loop
          muted
          playsInline
          id="vid"
          width="100%"
          height="100%"
        >
          <source src={video.url} type={video.mimeType} />
        </Video>
      ) : (
        <></>
      )}
      <h1 tw="text-5xl sm:text-7xl">{title}</h1>
      <h3 tw="text-2xl sm:text-4xl text-primary mt-2">{subtitle}</h3>
    </Section>
  )
}

export default FrontHero
