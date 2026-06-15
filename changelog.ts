export interface ChangelogEntry {
  version: string
  date: string
  changes: string[]
}

export const entries: ChangelogEntry[] = [
  {
    version: 'v2.1',
    date: '2026-05-19',
    changes: [
      'Added /changelog, /routes, and /playground custom pages',
      'Added Monaco editor JSX language configuration',
      'Enhanced HTML code runner with console output capture',
      'Fixed magic-link token priority for CSS/HTML inline links',
      'Added build chunking for Monaco and Babel (faster loads)',
      'Enabled dynamic grid-cols UnoCSS rule',
      'Improved btn shortcut with hover opacity transition',
    ],
  },
  {
    version: 'v2.0',
    date: '2026-01-01',
    changes: [
      'Added CSS Anchor Positioning section',
      'Added CSS Frameworks page (Tailwind, Bootstrap, etc.)',
      'Added WebSocket-based visitor counter in footer',
      'Open Graph meta tags added to index.html',
    ],
  },
  {
    version: 'v1.0',
    date: '2024-01-01',
    changes: [
      'Initial course release',
      'Covers Selectors, Box Model, Flexbox, Grid, Colors, Typography',
      'Added code runners for Vue SFC and JSX',
    ],
  },
]
