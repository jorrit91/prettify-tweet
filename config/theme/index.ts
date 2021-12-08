import { rem } from 'polished'
import { createThemeSystem, Theme } from 'theme-system'

export const theme: Theme = {
  breakpoints: {
    medium: '48em', // 768px
    large: '64em', // 1024px
    xlarge: '90em', // 1440px
  },
  fontFamilies: {
    heading: 'Noto Serif, serif',
    body: 'Brown, -apple-system, system-ui, BlinkMacSystemFont, Helvetica Neue, Helvetica, sans-serif',
  },
  fontWeights: {
    regular: 400,
    bold: 700,
  },
  fontSizes: {},
  colors: {
    brightBlue: '#3061F6',
    brightBlueHover: '#2d58d6',
    brightBlueDisabled: '#29428f',
    darkBlue: '#253566',
    success: '#0DA365',
    error: '#F24822',
    shade600: '#1B1D21',
    shade500: '#222429',
    shade400: '#333740',
    shade300: '#494D59',
    shade200: '#7D849A',
    shade100: '#FFFFFF',
  },
  space: {
    '0': '0',
    '8': rem(8),
    '12': rem(12),
    '16': rem(16),
    '20': rem(20),
    '24': rem(24),
    '32': rem(32),
    '40': rem(40),
    '48': rem(48),
    '56': rem(56),
    '64': rem(64),
    auto: 'auto',
  },
}

export type AppTheme = typeof theme

export const { parse, parseAll, utilities } = createThemeSystem<AppTheme>(theme)
