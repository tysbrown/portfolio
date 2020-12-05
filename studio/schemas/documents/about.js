export default {
  name: 'about',
  type: 'document',
  title: 'About Page',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'header',
      type: 'text',
      title: 'Header',
      description: 'Type the header text that will go into the main H1 tag.'
    },
    {
      name: 'subheader',
      type: 'text',
      title: 'Sub-Header Text',
      description: 'Type the text that will go below the main header.'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    },
    {
      name: 'sidebar',
      type: 'bodyPortableText',
      title: 'Sidebar'
    }
  ]
}
