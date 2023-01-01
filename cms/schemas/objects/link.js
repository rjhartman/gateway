export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((field, { parent }) => {
          return !!parent &&
            parent?.type === 'placeholder' &&
            field === undefined
            ? 'This field must not be empty.'
            : true
        }),
    },
    {
      title: 'Internal Link',
      name: 'internalLink',
      description: 'Select pages for navigation',
      type: 'reference',
      to: [{ type: 'page' }],
      hidden: ({ parent }) => !!parent && parent?.type !== 'internal',
      validation: (Rule) =>
        Rule.custom((field, { parent }) => {
          return !!parent && parent?.type === 'internal' && field === undefined
            ? 'This field must not be empty.'
            : true
        }),
    },
    {
      name: 'externalUrl',
      title: 'External URL',
      description: 'Use fully qualified URLS for external link',
      type: 'url',
      hidden: ({ parent }) => !!parent && parent?.type !== 'external',
      validation: (Rule) =>
        Rule.custom((field, { parent }) => {
          return !!parent && parent?.type === 'external' && field === undefined
            ? 'This field must not be empty.'
            : true
        }),
    },
    {
      name: 'type',
      title: 'Item Type',
      type: 'string',
      options: {
        list: [
          { title: 'Internal Link', value: 'internal' },
          { title: 'External Link', value: 'external' },
          { title: 'Placeholder', value: 'placeholder' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'internal',
    },
  ],
}
