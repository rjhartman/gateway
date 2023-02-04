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
      hidden: ({ parent }) => parent.backgroundType === 'video',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'backgroundVideo',
      title: 'Background Video',
      description: 'mp4 format',
      type: 'file',
      hidden: ({ parent }) => parent.backgroundType === 'image',

      options: {
        accept: 'video/mp4',
      },
    },
    {
      name: 'backgroundType',
      title: 'Background Type',
      type: 'string',
      initialValue: 'image',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{ type: 'link' }],
    },
  ],
}
