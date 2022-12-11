const customValidation = (field, context, value) => {
  console.log(context)
  return context.parent.itemType === value && field === undefined
}

export default {
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    {
      title: 'Internal Link',
      name: 'internalLink',
      description: 'Select pages for navigation',
      type: 'reference',
      to: [{ type: 'page' }],
      hidden: ({ parent }) => parent.itemType !== 'internal',
    },
    {
      name: 'externalUrl',
      title: 'External URL',
      description: 'Use fully qualified URLS for external link',
      type: 'url',
      hidden: ({ parent }) => parent?.itemType !== 'external',
    },
    {
      name: 'itemType',
      title: 'Item Type',
      type: 'string',
      options: {
        list: [
          { title: 'Internal Link', value: 'internal' },
          { title: 'External Link', value: 'external' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'internal',
    },
  ],
}
