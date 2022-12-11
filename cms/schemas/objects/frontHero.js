export default {
  name: 'frontHero',
  title: 'Front Hero',
  type: 'object',
  __experimental_actions: [/*"create"*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'background',
      title: 'Background',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
