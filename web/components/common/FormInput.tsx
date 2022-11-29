import type { VFC } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const Section = tw.section``

interface Props {
  type: string
  name: string
  label: string
}

const styles = [tw``]

const TextInput = styled.input(() => [...styles])
const TextArea = styled.input(() => [...styles])

const FormInput: VFC<Props> = ({ type, name, label, ...rest }) => {
  let Input = TextInput
  switch (type) {
    case 'textarea':
      Input = TextArea
      break
  }
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Input {...rest}></Input>
    </>
  )
}

export default FormInput
