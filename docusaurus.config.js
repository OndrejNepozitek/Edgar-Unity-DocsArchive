const versions = require('./versions.json');
const getBookmarks = require("./src/bookmarks")
const [latestVersion] = require('./versions.json');
const remarkBookmarks = require('remark-bookmarks')
const path = require('path');

module.exports = {
  title: "Edgar - Unity: Alpha docs archive",
  tagline:
    "Configurable 2D procedural level generator for Unity",
  url: "https://ondrejnepozitek.github.io",
  baseUrl: "/Edgar-Unity-DocsArchive/",
  favicon: "img/favicon.ico",
  organizationName: "OndrejNepozitek", // Usually your GitHub org/user name.
  projectName: "Edgar-Unity-DocsArchive", // Usually your repo name.
  onBrokenLinks: "ignore",
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-31904365-17',
    },
    announcementBar: {
      id: 'support_us',
      content:
        'Check out the PRO version of the generator at <a href="https://ondrejnepozitek.itch.io/edgar-pro" target="_blank">itch.io</a>!',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
    },
    sidebarCollapsible: false,
    navbar: {
      hideOnScroll: false,
      title: "Edgar - Unity: Alpha docs archive",
      items: [
        {
          label: `Link to live docs (this is only archive)`,
          to: 'https://ondrejnepozitek.github.io/Edgar-Unity/docs/introduction/',
          position: 'left',
        },
        {
          label: 'Archive docs',
          to: 'docs/introduction', // "fake" link
          position: 'right',
          activeBaseRegex: `docs/(?!next/(support|team|resources))`,
          items: [
            {
              label: `Archive: ${versions[0]}`,
              to: 'docs/introduction',
              activeBaseRegex: `docs/(?!${versions.join('|')}|next)`,
            },
            ...versions.slice(1, 3).map((version) => ({
              label: `Archive: ${version}`,
              to: `docs/${version}/introduction`,
            })),
          ],
        },
        {
          href: "https://github.com/OndrejNepozitek/Edgar-Unity/",
          label: "GitHub", 
          position: "right"
        }
      ]
    },
    prism: {
      defaultLanguage: "csharp",
      theme: require("./src/theme/prism-darcula")
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/introduction"
            },
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/OndrejNepozitek"
            },
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              href: "https://ondra.nepozitek.cz/blog/"
            },
            {
              label: "GitHub",
              href: "https://github.com/OndrejNepozitek/Edgar-Unity"
            },
          ]
        }
      ],
      copyright: "Copyright © " + new Date().getFullYear() + " Ondřej Nepožitek"
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus",
          remarkPlugins: [
            [
              remarkBookmarks, { 
                bookmarks: getBookmarks(),
              }
            ]
          ],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],
  plugins: [require.resolve("./src/customPLugin.js")],
};
