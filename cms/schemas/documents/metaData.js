export default {
  name: 'metaData',
  title: 'Meta Data',
  type: 'document',
  __experimental_actions: [/*"create"*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      desciption: 'The main site url.',
    },
    {
      name: 'frontPage',
      title: 'Front Page',
      type: 'reference',
      to: [{ type: 'page' }],
    },
  ],
}
