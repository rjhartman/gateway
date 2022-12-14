export default {
  name: 'logos',
  title: 'Logos',
  type: 'document',
  __experimental_actions: [/*"create"*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      hidden: true,
      initialValue: 'Logos',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hcLogo',
      title: 'HC Logo',
      description: 'Used on light backgrounds.',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'logoIcon',
      title: 'Logo Icon',
      description: 'Used on small screens.',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'hcLogoIcon',
      title: 'HC Logo Icon',
      description: 'Used on small screens and light backgrounds.',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
