import { BsSignpost2 } from 'react-icons/bs'

export default {
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  icon: BsSignpost2,

  preview: {
    select: {
      link: 'link',
      children: 'children',
    },
    prepare({ link, children }) {
      const title = link?.text || 'Untitled'
      const subtitle = `Type: ${link?.type} - Children: ${
        children?.length || 0
      }`
      return {
        title: title,
        subtitle: subtitle,
        media: BsSignpost2,
      }
    },
  },

  fields: [
    {
      name: 'link',
      type: 'link',
      title: 'Navigation Item',
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
