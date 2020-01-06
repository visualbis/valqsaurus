module.exports = {
    title: 'ValQ',
    tagline: 'Modern Digital Planning',
    url: 'https://valq.com',
    baseUrl: '/valqsaurus/',
    favicon: 'img/cropped-valq-icon-1-192x192.png',
    organizationName: 'visualbis', // Usually your GitHub org/user name.
    projectName: 'valqsaurus', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'ValQ',
            logo: {
                alt: 'ValQ Logo',
                src: 'img/valq-icon.png',
            },
            links: [
                { to: 'docs/general/getting-started', label: 'Docs', position: 'right' }
            ],
        },
        footer: {
            style: 'light',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Style Guide',
                            to: 'docs/doc1',
                        },
                        {
                            label: 'Second Doc',
                            to: 'docs/doc2',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                    ],
                },
                {
                    title: 'Social',
                    items: [
                        {
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/facebook/docusaurus',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/docusaurus',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Visual BI`,
        },
        algolia: {
            apiKey: 'api-key',
            indexName: 'index-name',
            algoliaOptions: {}, // Optional, if provided by Algolia
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js')
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
