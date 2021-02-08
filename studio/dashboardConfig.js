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
                  buildHookId: '602115323c2ab550e67e6b36',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ip1qicqq',
                  apiId: '5f20a7af-6942-4a31-ab0f-1d74989a6805'
                },
                {
                  buildHookId: '60211532016eb75e24012297',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-wapbam2v',
                  apiId: 'e49c5e9a-7aa3-4f1b-9ec9-f7c7ff549db4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/olgatim/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-wapbam2v.netlify.app',
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
