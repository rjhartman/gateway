import type { FC } from 'react'
import tw, { styled } from 'twin.macro'
import AnimateHeight from 'react-animate-height'

interface Props {
  type: string
  name: string
  label: string
  inputRef: any
  errorMessage: string
}

const Wrapper = tw.div`flex flex-col gap-2`

const inputStyles = ({ valid }: { valid: boolean }) => [
  tw`focus:(outline-none border-primary) duration-300 transition-colors ease-in-out flex items-start justify-start w-full p-1 text-lg border-b-2 bg-transparent`,
  valid === false && tw`border-red-500!`,
  valid === true && tw`border-grey`,
]
const TextInput = styled.input(() => [inputStyles])
const TextArea = styled.textarea(() => [inputStyles, tw`min-h-[8rem] border-2`])

const Error = tw.span`text-red-500`

const FormInput: FC<Props> = ({
  type,
  name,
  errorMessage,
  label,
  inputRef,
  ...rest
}) => {
  const Input = type === 'textarea' ? TextArea : TextInput
  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label>
      {/* @ts-ignore */}
      <Input ref={inputRef} type={type} valid={!errorMessage} {...rest} />
      <AnimateHeight height={!!errorMessage ? 'auto' : 0}>
        <Error>{errorMessage}</Error>
      </AnimateHeight>
    </Wrapper>
  )
}

export default FormInput
