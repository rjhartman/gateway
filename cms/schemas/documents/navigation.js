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
