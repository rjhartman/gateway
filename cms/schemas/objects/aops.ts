export default {
  name: 'aops',
  title: 'Aops',
  type: 'object',
  fields: [
    {
      name: 'aops',
      title: 'Aops',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
          ],
        },
      ],
    },
  ],
}
