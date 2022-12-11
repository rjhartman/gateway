import { GrNavigate } from 'react-icons/gr'

export default {
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  icon: GrNavigate,
  options: {
    editModal: 'fullscreen',
  },
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Navigation Text',
    },
    {
      name: 'navigationItemUrl',
      type: 'link',
      title: 'Navigation Item URL',
    },
    {
      name: 'children',
      title: 'Children',
      type: 'array',
      of: [{ type: 'navigationItem' }],
    },
  ],
}
