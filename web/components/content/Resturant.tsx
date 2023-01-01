import type { FC, ReactNode } from 'react'
import tw from 'twin.macro'
import type { Resturant as ResturantType } from 'lib/schema'
import { FaUtensils, FaPhone, FaClock } from 'react-icons/fa'

import Image from 'components/common/SanityImage'
import { cleanPhoneNumber } from '@functions'

const Wrapper = tw.div`flex flex-row w-full items-start py-2 my-20`
const Left = tw.div`flex flex-col items-start max-w-[32rem] gap-2`
const Span = tw.span`flex flex-row gap-2 font-bold items-center leading-none ml-2`

const Resturant: FC<ResturantType> = ({
  name,
  logo,
  phoneNumber,
  hours,
  ...rest
}) => {
  return (
    <Wrapper {...rest}>
      <Left>
        {!!logo && (
          <Image image={logo} tw="mb-6 max-h-[12rem] object-contain w-auto" />
        )}
        <Span>
          <FaUtensils />
          {name}
        </Span>
        {!!phoneNumber && (
          <Span>
            <FaPhone />
            <a href={`tel:${cleanPhoneNumber(phoneNumber)}`}>{phoneNumber}</a>
          </Span>
        )}
        {!!hours && (
          <Span>
            <FaClock />
            {hours}
          </Span>
        )}
      </Left>
    </Wrapper>
  )
}

export default Resturant
