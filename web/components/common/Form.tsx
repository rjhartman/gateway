import type { FC } from 'react'
import { useState, useRef } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import AnimateHeight from 'react-animate-height'

import Input from '@common/FormInput'
import type { Form as FormType } from 'lib/schema'

interface Props {
  form: FormType
}

const FormComponent = tw.form`flex flex-col w-full gap-6`
const Submit = tw.input`w-full p-2 bg-primary! text-white duration-500 ease-in-out text-lg cursor-pointer font-bold hover:bg-secondary! rounded-lg mt-4`
const Response = styled.div(() => [])

const Form: FC<Props> = ({ form, ...rest }) => {
  const [response, setResponse] = useState('')
  const { fields, submitText } = form
  const [statefulFields, setStatefullFields] = useState(
    fields?.map((field) => {
      return {
        ...field,
        label: `${field.label} ${field.required ? '*' : ''}`,
        name: field.label
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]+/g, '')
          .replace(/--+/g, '-')
          .replace(/^-+/, '')
          .replace(/-+$/, ''),
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
      input.value.length < 30 &&
      !(input.value.length === 0 && !field.required)
    ) {
      field.isValid = false
      field.errorMessage = 'Please enter tell us a little more'
    }

    return field.isValid
  }

  function validateFields() {
    let valid = true
    setStatefullFields(
      statefulFields?.map((field) => {
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
      const formData = statefulFields?.map((field) => ({
        name: field.name,
        value: field.ref.current?.value,
      }))
      console.log(formData)
    } else {
      console.log('invalid')
      console.log(statefulFields)
    }
  }

  return (
    <FormComponent {...rest} onSubmit={handleSubmit}>
      {statefulFields?.map(({ ref, ...rest }, i) => (
        <Input key={i} inputRef={ref} {...rest} />
      ))}
      <Submit type="submit" formNoValidate value={submitText} />
      <AnimateHeight height={!!response ? 'auto' : 0}>
        <Response>{response}</Response>
      </AnimateHeight>
    </FormComponent>
  )
}

export default Form
