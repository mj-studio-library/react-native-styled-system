import type { ThemedDict } from 'react-native-themed-styled-system';

const unit = 4;
const space = {
  0: 0 * unit, // 0px
  px: 1, // 1px
  0.5: 0.5 * unit, // 2px
  1: 1 * unit, // 4px
  2: 2 * unit, // 8px
  3: 3 * unit, // 12px
  4: 4 * unit, // 16px
  5: 5 * unit, // 20px
  6: 6 * unit, // 24px
  7: 7 * unit, // 28px
  8: 8 * unit, // 32px
  9: 9 * unit, // 36px
  10: 10 * unit, // 40px
  11: 11 * unit, // 44px
  12: 12 * unit, // 48px
  13: 13 * unit, // 52px
  14: 14 * unit, // 56px
  15: 15 * unit, // 60px
  16: 16 * unit, // 64px
  17: 17 * unit, // 68px
  18: 18 * unit, // 72px
  19: 19 * unit, // 76px
  20: 20 * unit, // 80px
  24: 24 * unit, // 96px
  28: 28 * unit, // 112px
  30: 30 * unit, // 120px
  32: 32 * unit, // 128px
  40: 40 * unit, // 160px
  48: 48 * unit, // 192px
};

const theme: Partial<ThemedDict> = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    red: '#ff0000',
    blue: '#0000ff',
    green: '#00ff00',
  },
  radii: {
    sm: 8,
    md: 16,
    lg: 24,
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: 'bold',
    },
    title: {
      fontSize: 20,
      fontWeight: '500',
    },
    body: {
      fontSize: 14,
    },
    small: {
      fontSize: 12,
    },
  },
  sizes: {
    ...space,
  },
  space: {
    ...space,
    sfTop: 0,
    sfRight: 0,
    sfBottom: 0,
    sfLeft: 0,
  },
};

export default theme;
