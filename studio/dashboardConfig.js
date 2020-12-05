export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              title: 'Netlify Builds',
              sites: [
                {
                  buildHookId: '5fb8403dc92ebe20e905fa1e',
                  title: 'Sanity Studio',
                  name: 'portfolio-studio-5tin5ois',
                  apiId: '6c59f7d4-0434-478c-8a37-df52557d6f89'
                },
                {
                  buildHookId: '5fb8403d4c0b4b26683ffbd7',
                  title: '11ty Front-End',
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
          {title: 'Frontend', value: 'https://www.tylerbrowndev.com', category: 'apps'}
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
