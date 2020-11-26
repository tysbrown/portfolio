export default {
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
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
      name: 'image',
      type: 'mainImage',
      title: 'Homepage Image'
    },
    {
      name: 'subheader',
      type: 'text',
      title: 'Sub-Header Text',
      description: 'Type the text that will go below the main header.'
    },
    {
      name: 'selectedWorks',
      type: 'array',
      title: 'Selected Works',
      of: [
        {
          type: 'reference',
          to: {
            type: 'portfolioProject'
          }
        }
      ]
    }
  ]
}
