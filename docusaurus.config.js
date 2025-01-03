// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Sales & Dungeons",
  tagline: "Thermal Printer meets Tabletop RPG",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://sales-and-dungeons.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "BigJk", // Usually your GitHub org/user name.
  projectName: "snd-docs", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [require.resolve("docusaurus-lunr-search")],

  scripts: [
    {
      src: "https://cloud.umami.is/script.js",
      "data-website-id": "a137e588-c3ce-4b63-91d8-9b609fc284cf",
      async: false,
      defer: true,
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/BigJk/snd-docs/blob/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/BigJk/snd-docs/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Sales & Dungeons",
        logo: {
          alt: "Sales & Dungeons",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://github.com/BigJk/snd",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://ko-fi.com/bigjk",
            label: "Support the Project",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/docs/intro/",
              },
              {
                label: "Tested Printer",
                to: "/docs/printer/models/",
              },
              {
                label: "Buyers Guide",
                to: "/docs/printer/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/5MUZEjc",
              },
              {
                label: "Github Discussion",
                href: "https://github.com/BigJk/snd/discussions",
              },
            ],
          },
          {
            title: "Code",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/BigJk/snd",
              },
            ],
          },
          {
            title: "Other Stuff",
            items: [
              {
                label: "Support the Project",
                href: "https://ko-fi.com/bigjk",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sales & Dungeons, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
