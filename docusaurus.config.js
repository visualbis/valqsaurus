module.exports = {
    title: "ValQ",
    tagline: "Modern Digital Planning",
    url: "https://valq.com",
    baseUrl: "/",
    noIndex: true, // Defaults to `false`
    favicon: "img/cropped-valq-icon-1-192x192.png",
    organizationName: process.env.CIRCLE_PROJECT_USERNAME || "visualbis", // Usually your GitHub org/user name.
    projectName: "valqsaurus", // Usually your repo name.
    plugins: ['@docusaurus/plugin-google-analytics'],
    themeConfig: {
        googleAnalytics: {
            trackingID: 'UA-136298126-1',
            // Optional fields.
            anonymizeIP: true, // Should IPs be anonymized?
        },
        navbar: {
            hideOnScroll: true,
            title: "ValQ",
            logo: {
                alt: "ValQ Logo",
                src: "img/valq-icon.png",
                href: "https://valq.com",
            },
            items: [
                {
                    to: "/",
                    label: "Docs",
                    position: "left",
                    title: "Docs Home",
                },
            ],
        },
        footer: {
            style: "light",
            links: [{
                title: "Docs",
                items: [{
                    label: "Documentation",
                    to: "docs/intro/introduction",
                },
                {
                    label: "Functions",
                    to: "docs/references/formulas/if",
                },
                ],
            },
            {
                title: "More",
                items: [{
                    label: "ValQ Community",
                    href: "https://community.valq.com/",
                },
                {
                    label: "Status",
                    href: "http://status.valq.com/",
                },
                ],
            },
            {
                title: "Social",
                items: [{
                    label: "Blog",
                    href: "https://valq.com/blogs/",
                },],
            },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Visual BI`,
        },
        ogImage: "img/whats-new-in-valq.jpg",
        twitterImage: "img/whats-new-in-valq.jpg",
    },
    plugins: [require.resolve('docusaurus-lunr-search')],
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};
