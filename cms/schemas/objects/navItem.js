import { BsSignpost2 } from 'react-icons/bs'

export default {
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  icon: BsSignpost2,

  fields: [
    {
      name: 'navigationItemUrl',
      type: 'link',
      title: 'Navigation Item URL',
    },
    {
      name: 'children',
      title: 'Children',
      type: 'array',
      of: [
        {
          type: 'navigationItem',
        },
      ],
    },
  ],
}
