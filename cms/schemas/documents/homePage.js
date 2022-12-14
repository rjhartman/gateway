export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],
  groups: [
    {
      title: 'Hero',
      name: 'hero',
    },
    {
      title: 'Company History',
      name: 'companyHistory',
    },
    {
      title: 'Services',
      name: 'services',
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Home Page',
      hidden: true,
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'frontHero',
      group: 'hero',
    },
    {
      name: 'companyHistory',
      title: 'Company History',
      type: 'companyHistory',
      group: 'companyHistory',
    },
    {
      name: 'services',
      title: 'Services',
      type: 'services',
      group: 'services',
    },
  ],
}
