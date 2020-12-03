export default {
  name: 'portfolioProject',
  type: 'document',
  title: 'Portfolio Projects',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'siteLink',
      type: 'string',
      title: 'Site Link'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Slug must be set to display project in the Selected Works section of the homepage.',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule a post for publishing.'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'stack',
      type: 'string',
      title: 'Tech Stack Description'
    },
    {
      name: 'projectExcerpt',
      type: 'text',
      title: 'Excerpt',
      description: 'This text will be displayed in the Selected Works section of the homepage.'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
