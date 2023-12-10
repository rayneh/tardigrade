import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tardigrade",
  description: "Dynamic cross chain NFT",
  themeConfig: {
    logo: '/taris-logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Intro',
        items: [
          { text: 'Overview', link: '/Intro/Overview' },
        ]
      },
      {
        text: 'Notes',
        items: [
          { text: 'Software Design', link: '/Notes/Software-Design' },
          { text: 'Markdown Examples', link: '/Notes/markdown-examples' },
          { text: 'Runtime API Examples', link: '/Notes/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
