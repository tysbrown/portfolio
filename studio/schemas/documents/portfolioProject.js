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
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'projectExcerpt',
      type: 'text',
      title: 'Excerpt'
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
