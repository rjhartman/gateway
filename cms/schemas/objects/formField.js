import { AiOutlineForm, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { BsMenuAppFill } from 'react-icons/bs'

export default {
  name: 'formField',
  title: 'Field',
  type: 'object',
  preview: {
    select: {
      label: 'label',
      type: 'type',
      required: 'required',
    },
    prepare({ label, type, required }) {
      const getIcon = () => {
        switch (type) {
          case 'email':
            return AiOutlineMail
          case 'tel':
            return AiOutlinePhone
          case 'select':
            return BsMenuAppFill
          default:
            return AiOutlineForm
        }
      }
      return {
        title: label,
        subtitle: `${type}${required ? ' (required)' : ''}`,
        media: getIcon(),
      }
    },
  },
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      initialValue: 'text',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Text', value: 'text' },
          { title: 'Email', value: 'email' },
          { title: 'Phone', value: 'tel' },
          { title: 'Textarea', value: 'textarea' },
          { title: 'Select', value: 'select' },
          // { title: 'Checkbox', value: 'checkbox' },
          // { title: 'Radio', value: 'radio' },
        ],
      },
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
      directions: 'The label for the field',
    },
    {
      name: 'required',
      title: 'Required',
      type: 'boolean',
      initialValue: false,
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [{ type: 'string' }],
      hidden: ({ parent }) => parent.type !== 'select',
      codegen: { required: ({ parent }) => parent.type === 'select' },
      validation: (Rule) =>
        Rule.custom((options, context) => {
          if (context.parent.type === 'select' && !options.length) {
            return 'Select fields must have at least one option'
          }
          return true
        }),
    },
  ],
}
