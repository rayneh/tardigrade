import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Tardigrade",
  description: "Dynamic cross chain NFT",
  themeConfig: {
    logo: '/taris-logo.png',
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
        text: 'Journey',
        items: [
          { text: 'Ai Summary', link: '/Journey/Ai-Summary' },
        ]
      },
      {
        text: 'Notes',
        items: [
          { text: 'Software Design 2', link: '/Notes/Software-Design-2' },
          { text: 'Software Design', link: '/Notes/Software-Design' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/rayneh/tardigrade' }
    ]
  }
})
