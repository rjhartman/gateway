import type { VFC } from 'react'
import tw from 'twin.macro'

import Input from '@common/FormInput'

const FormComponent = tw.form`flex flex-col`

const fields = [
  {
    label: 'Name',
    name: 'name',
    type: 'text',
    required: true,
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    required: true,
  },
  {
    label: 'Phone',
    name: 'phone',
    type: 'tel',
    required: true,
  },
  {
    label: 'Message',
    name: 'message',
    type: 'textarea',
    required: true,
  },
]

interface Props {}

const Form: VFC<Props> = ({ ...rest }) => {
  return (
    <FormComponent {...rest}>
      {fields.map((field, index) => (
        <Input key={index} {...field} />
      ))}
    </FormComponent>
  )
}

export default Form
