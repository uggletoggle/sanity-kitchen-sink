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
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60378ccdfcb2de9db108c6a7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ouc2kbxo',
                  apiId: 'eda64e19-144a-458e-97c8-14f77e39a367'
                },
                {
                  buildHookId: '60378ccd92e47b855a96979a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-tdd9cor9',
                  apiId: '8a0ea196-bc15-49ef-9b52-c9584e6f248a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/uggletoggle/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-tdd9cor9.netlify.app', category: 'apps'}
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
