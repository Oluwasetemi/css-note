import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  monaco.languages.register({ id: 'jsx' })
  monaco.languages.setLanguageConfiguration('jsx', {
    comments: {
      lineComment: '//',
      blockComment: ['/*', '*/'],
    },
    brackets: [
      ['{', '}'],
      ['[', ']'],
      ['(', ')'],
      ['<', '>'],
    ],
    autoClosingPairs: [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: '"', close: '"' },
      { open: "'", close: "'" },
      { open: '`', close: '`' },
      { open: '<', close: '>' },
    ],
    surroundingPairs: [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: '<', close: '>' },
      { open: '"', close: '"' },
      { open: "'", close: "'" },
      { open: '`', close: '`' },
    ],
  })

  monaco.languages.setMonarchTokensProvider('jsx', {
    tokenizer: {
      root: [
        [/<[a-zA-Z_$][\w\-$]*/, 'tag'],
        [/<\/[a-zA-Z_$][\w\-$]*>/, 'tag'],
        [/[a-zA-Z_$][\w\-$]*=/, 'attribute.name'],
        [/"[^"]*"/, 'attribute.value'],
        [/'[^']*'/, 'attribute.value'],
        [/\{/, 'delimiter.bracket', '@jsxExpression'],
        [/[{}]/, 'delimiter.bracket'],
      ],
      jsxExpression: [
        [/\}/, 'delimiter.bracket', '@pop'],
        [/[{}]/, 'delimiter.bracket'],
        [/[^}]+/, 'string'],
      ],
    },
  })
})
