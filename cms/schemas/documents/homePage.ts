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
      title: 'Aops',
      name: 'aops',
    },
    {
      title: 'Services',
      name: 'services',
    },
    {
      title: 'Company History',
      name: 'companyHistory',
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
      name: 'aops',
      title: 'Aops',
      type: 'aops',
      group: 'aops',
    },
    {
      name: 'services',
      title: 'Services',
      type: 'services',
      group: 'services',
    },
    {
      name: 'companyHistory',
      title: 'Company History',
      type: 'companyHistory',
      group: 'companyHistory',
    },
  ],
}
