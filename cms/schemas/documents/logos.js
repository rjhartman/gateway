import image from '../fields/customImage'

export default {
  name: 'logos',
  title: 'Logos',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      hidden: true,
      initialValue: 'Logos',
    },
    {
      ...image,
      name: 'logo',
      title: 'Logo',
      validation: (Rule) => Rule.required(),
    },
    {
      ...image,
      name: 'hcLogo',
      title: 'HC Logo',
      description: 'Used on light backgrounds.',
    },
    {
      ...image,
      name: 'logoIcon',
      title: 'Logo Icon',
      description: 'Used on small screens.',
    },
    {
      ...image,
      name: 'hcLogoIcon',
      title: 'HC Logo Icon',
      description: 'Used on small screens and light backgrounds.',
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    },
  ],
}
