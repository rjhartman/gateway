export default {
  name: 'services',
  title: 'Services',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          name: 'service',
          title: 'Service',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'blockContent',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              option: {
                hotspot: true,
              },
            },
            {
              name: 'link',
              title: 'Link',
              type: 'link',
            },
          ],
        },
      ],
    },
  ],
}
