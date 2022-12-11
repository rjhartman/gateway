export default {
  name: 'companyHistory',
  title: 'Company History',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Company History',
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
    },
    {
      name: 'history',
      title: 'History',
      type: 'blockContent',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
