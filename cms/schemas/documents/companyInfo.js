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
    {
      name: 'mapsEmbed',
      title: 'Maps Embed',
      type: 'text',
    },
    {
      name: 'employeePortal',
      title: 'Employee Portal',
      type: 'url',
    },
    {
      name: 'jobOpenings',
      title: 'Job Openings',
      type: 'url',
    },
  ],
}
