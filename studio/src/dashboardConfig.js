export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '6006e8ebcbb5da0bd6303d50',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-orvcxqzg',
                  apiId: '4ea03527-21a2-4958-a9e2-f28f074a0f6c'
                },
                {
                  buildHookId: '6006e8eb5a1b3212d2c0b4e6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1cqn4chq',
                  apiId: 'e7502004-5ba9-4f5c-b48a-3818c5cf73d7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jkotal/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1cqn4chq.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
