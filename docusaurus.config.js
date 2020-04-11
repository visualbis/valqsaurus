module.exports = {
  title: "ValQ",
  tagline: "Modern Digital Planning",
  url: "https://valq.com",
  baseUrl: "/valqsaurus/",
  favicon: "img/cropped-valq-icon-1-192x192.png",
  organizationName: "visualbis", // Usually your GitHub org/user name.
  projectName: "valqsaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "ValQ",
      logo: {
        alt: "ValQ Logo",
        src: "img/valq-icon.png"
      },
      links: [
        { to: "docs/general/getting-started", label: "Docs", position: "right" }
      ]
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Documentation",
              to: "docs/general/getting-started"
            },
            {
              label: "Functions",
              to: "docs/references/formulas/if"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "ValQ Community",
              href: "https://community.valq.com/"
            },
            {
              label: "Status",
              href: "http://status.valq.com/"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              href: "https://valq.com/blogs/"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Visual BI`
    },
    algolia: {
      apiKey: "api-key",
      indexName: "index-name",
      algoliaOptions: {} // Optional, if provided by Algolia
    }
  },
   plugins: [
    'docusurus-lunr-search'
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js")
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
