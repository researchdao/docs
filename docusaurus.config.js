module.exports = {
  title: 'Reseach DAO Docs',
  tagline: 'Research DOA Documentation',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: true,
      style: 'dark',
      title: 'Research DAO',
      logo: {
        alt: 'Research DAO Logo',
        src: 'img/logo.svg',
        href: 'https://researchdao.io'
      },
      items: [
        {
          href: 'https://github.com/researchdao/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Research DAO`,
    },
    announcementBar: {
      id: 'fc22',
      content: 'Now funding travel for students accepted to present at FC22. [<a rel="noopener noreferrer" href="/eligibility">Submit application</a>]',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/researchdao/docs/edit/main/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
