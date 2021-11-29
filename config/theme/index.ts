import { rem } from 'polished'
import { createThemeSystem, Theme } from 'theme-system'

export const theme: Theme = {
  breakpoints: {
    medium: '48em', // 768px
    large: '64em', // 1024px
    xlarge: '90em', // 1440px
  },
  fontFamilies: {},
  fontWeights: {},
  fontSizes: {},
  colors: {},
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
