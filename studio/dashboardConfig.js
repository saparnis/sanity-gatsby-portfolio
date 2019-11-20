export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5dd564bc717a084ee361cd1d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-pfamepn3',
                  apiId: '71c447af-4d3b-4dd1-9af4-d0305d8d0c4b'
                },
                {
                  buildHookId: '5dd564bc25694f0dd02de971',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-7bw7b8ha',
                  apiId: '770bfc42-0d3e-43e1-a03e-fb0481e18ee3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/saparnis/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-7bw7b8ha.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
