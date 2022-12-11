import { VscSettings } from 'react-icons/vsc'
import phoneNumber from '../fields/phoneNumber'

export default {
  name: 'companyInfo',
  title: 'Company Information',
  type: 'document',
  __experimental_actions: [/*"create"*/ 'update', /*'delete',*/ 'publish'],
  icon: VscSettings,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
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
}
