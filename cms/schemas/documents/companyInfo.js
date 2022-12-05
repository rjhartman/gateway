import { VscSettings } from 'react-icons/vsc'
import image from '../fields/customImage'
import phoneNumber from '../fields/phoneNumber'

export default {
  name: 'companyInfo',
  title: 'Company Information',
  type: 'document',
  icon: VscSettings,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      desciption: 'The main site url.',
    },
    {
      ...phoneNumber,
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    },
    {
      name: 'hours',
      title: 'Hours',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {
          name: 'address',
          title: 'Address',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'mapsLink',
          title: 'Maps Link',
          type: 'url',
        },
      ],
    },
  ],
}
