import { defineShikiSetup, ShikiSetupReturn } from '@slidev/types'

export default defineShikiSetup((): ShikiSetupReturn => {
  return {
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
    langs: ['tsx', 'jsx', 'ts', 'js', 'vue', 'html', 'css', 'shell', 'py', 'markdown'],
    transformers: [],
  }
})