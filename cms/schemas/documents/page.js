import image from '../fields/customImage'
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
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, ''),
      },
      validation: (Rule) => Rule.required(),
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
      ...image,
      name: 'featuredImage',
      title: 'Featured Image',
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
