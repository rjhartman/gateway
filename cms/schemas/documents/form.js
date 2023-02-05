import { HiOutlineClipboardList } from 'react-icons/hi'

export default {
  name: 'form',
  title: 'Form',
  type: 'document',
  editModal: 'fullscreen',
  icon: HiOutlineClipboardList,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      descripotion: 'The name of the form (used for internal reference)',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      descripotion: 'The title of the form (displayed on the site)',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'formCarryID',
      title: 'FormCarry ID',
      type: 'string',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'fields',
      title: 'Fields',
      type: 'array',
      of: [{ type: 'formField' }],
    },
    {
      name: 'submitText',
      title: 'Submit Button Text',
      type: 'string',
      initialValue: 'Submit',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
  ],
}
