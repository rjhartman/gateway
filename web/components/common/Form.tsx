import type { FC } from 'react'
import { useState, useRef } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import AnimateHeight from 'react-animate-height'

import Input from '@common/FormInput'
import { Form as FormType } from 'lib/schema'
import { useForm } from '@formcarry/react'

const fields = [
  {
    label: 'Name',
    name: 'Name',
    type: 'text',
    required: true,
  },
  {
    label: 'Email',
    name: 'Email',
    type: 'email',
    required: true,
  },
  {
    label: 'Phone',
    name: 'Phone',
    type: 'tel',
    required: true,
  },
  {
    label: 'Message',
    name: 'Message',
    type: 'textarea',
    required: true,
  },
]

const FormComponent = tw.form`flex flex-col w-full gap-6`
const Submit = tw.input`w-full p-2 bg-primary! text-white duration-500 ease-in-out text-lg cursor-pointer font-bold hover:bg-secondary! rounded-lg mt-4`
const Response = styled.div(() => [])

const Form: FC<FormType> = ({ formCarryID, ...rest }) => {
  const { state, submit } = useForm({
    id: formCarryID,
    extraData: {
      location: 'Footer',
    },
  })

  console.log(formCarryID)

  const [statefulFields, setStatefullFields] = useState(
    fields.map((field) => {
      return {
        ...field,
        isValid: true,
        errorMessage: '',
        ref: useRef<HTMLInputElement | HTMLTextAreaElement>(null),
      }
    })
  )

  function validate(field: any) {
    const input = field.ref.current
    field.isValid = input.checkValidity()
    field.errorMessage = input.validationMessage

    if (
      !!field.isValid &&
      input.type === 'textarea' &&
      input.value.length < 30
    ) {
      field.isValid = false
      field.errorMessage = 'Please enter tell us a little more'
    }

    return field.isValid
  }

  function validateFields() {
    let valid = true
    setStatefullFields(
      statefulFields.map((field) => {
        if (field.ref.current) {
          valid = validate(field)
        }
        return field
      })
    )
    return valid
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (validateFields()) {
      submit(e)
    }
  }

  return (
    <FormComponent {...rest} onSubmit={handleSubmit}>
      {statefulFields.map(({ ref, ...rest }, i) => (
        <Input key={i} inputRef={ref} {...rest} />
      ))}
      <Submit type="submit" formNoValidate value="submit" />
      <AnimateHeight height={!!response ? 'auto' : 0}>
        <Response>{state.response.title}</Response>
      </AnimateHeight>
    </FormComponent>
  )
}

export default Form
