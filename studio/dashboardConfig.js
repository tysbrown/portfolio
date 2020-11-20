export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb8403dc92ebe20e905fa1e',
                  title: 'Sanity Studio',
                  name: 'portfolio-studio-5tin5ois',
                  apiId: '6c59f7d4-0434-478c-8a37-df52557d6f89'
                },
                {
                  buildHookId: '5fb8403d4c0b4b26683ffbd7',
                  title: 'Blog Website',
                  name: 'portfolio-web-yszgpswz',
                  apiId: '76df53ec-3619-46e6-b46e-9f5f5ffdf9f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tysbrown/portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://portfolio-web-yszgpswz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
