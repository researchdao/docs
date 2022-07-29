module.exports = {
  title: 'Reseach DAO Docs',
  tagline: 'Research DAO Documentation',
  url: 'https://docs.researchdao.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'researchdao',
  projectName: 'docs',
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'content',
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
