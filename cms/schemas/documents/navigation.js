import { GrNavigate } from 'react-icons/gr'

export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: GrNavigate,
  options: {
    editModal: 'fullscreen',
  },
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Missing name'),
      codegen: { required: true },
    },
    {
      name: 'items',
      title: 'Navigation Items',
      type: 'array',
      of: [
        {
          type: 'navigationItem',
        },
      ],
    },
  ],
}
