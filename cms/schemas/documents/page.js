import { CgWebsite } from 'react-icons/cg'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: CgWebsite,
  groups: [
    {
      title: 'SEO',
      name: 'seo',
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input) =>
          input.toLowerCase() === 'home'
            ? '/'
            : '/' +
              input
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^\w-]+/g, '')
                .replace(/--+/g, '-')
                .replace(/^-+/, '')
                .replace(/-+$/, ''),
      },
      codegen: { required: true },
      validation: (Rule) => [
        Rule.required(),
        Rule.custom((slug) => {
          if (slug.current.startsWith('/')) {
            return true
          } else {
            return "Slug must start with '/'"
          }
        }),
      ],
    },
    {
      name: 'parent',
      title: 'Parent',
      type: 'reference',
      to: [{ type: 'page' }],
      validation: (Rule) => [
        Rule.custom((self, context) => {
          if (
            self &&
            (self?._ref === context?.document?._id ||
              self?._ref === `drafts.${context?.document?._id}` ||
              `drafts.${self?._ref}` === context?.document?._id)
          ) {
            return 'Parent cannot be the same as the page'
          }
          return true
        }),
      ],
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishStatus',
      title: 'Publish Status',
      type: 'string',
      initialValue: 'public',
      options: {
        layout: 'radio',
        list: [
          { title: '🧑‍🤝‍🧑 Public', value: 'public' },
          {
            title:
              "👻 Hidden (won't show up in google, but accessible through URL)",
            value: 'hidden',
          },
          {
            title: '🔒 Private',
            value: 'private',
          },
        ],
      },
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    },
  ],
}
