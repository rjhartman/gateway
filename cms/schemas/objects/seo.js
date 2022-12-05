export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',

  fields: [
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'keyPhrase',
      title: 'Key Phrase',
      type: 'string',
    },
    {
      name: 'secondaryKeyPhrase',
      title: 'Secondary Key Phrase',
      type: 'string',
    },
  ],
}
