import type { StyleProp } from 'react-native';
import { StyleSheet } from 'react-native';
import { is } from '@mj-studio/js-util';
import { renderHook } from '@testing-library/react-hooks';

import type { TextSxProps } from '../@types/SxProps';
import type { ThemedDict } from '../@types/ThemedDict';
import { emptyThemedDict } from '../@types/ThemedDict';
import type { ThemedStyleType } from '../util/propsToThemedStyle';

import type { StyleFallback, StyleTransform } from './useSx';
import { useSx } from './useSx';

function expectResult(
  theme: ThemedDict,
  props: { style?: StyleProp<any> } & TextSxProps & Record<string, any>,
  {
    expectation,
    filteredPropsExpectation,
    styleType,
    transform,
    fallback,
    cache,
  }: {
    expectation: object;
    filteredPropsExpectation?: object;
    styleType?: ThemedStyleType;
    transform?: StyleTransform;
    fallback?: StyleFallback;
    cache?: boolean;
  },
) {
  const {
    result: {
      current: { getStyle, filteredProps },
    },
  } = renderHook(() => useSx(props, { theme, styleType, transform, fallback, cache }));

  if (expectation) {
    expect(StyleSheet.flatten(getStyle())).toEqual(expectation);
  }

  if (filteredPropsExpectation) {
    expect(filteredProps).toEqual(filteredPropsExpectation);
  }

  return [getStyle(), filteredProps];
}

const emptyTheme = emptyThemedDict;

const baseTheme: ThemedDict = {
  colors: {
    red: 'red',
    blue: 'blue',
    green: 'green',
  },
  sizes: {
    1: 4,
    2: 8,
    pagePadding: 20,
    full: '100%',
  },
  space: { 1: 4, 2: 8, pagePadding: 20, full: '100%' },
  radii: {
    sm: 8,
    md: 12,
    lg: 20,
  },
  typography: {
    title: {
      fontFamily: 'Noto Sans',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '400',
    },
    body: {
      fontFamily: 'Noto Sans',
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: '400',
    },
  },
};

describe('simple usages', () => {
  it('handle empty', () => {
    expectResult(baseTheme, {}, { expectation: {} });
  });

  it('colors match', () => {
    expectResult(baseTheme, { bg: 'red' }, { expectation: { backgroundColor: 'red' } });
    expectResult(baseTheme, { bg: '#ffffff' }, { expectation: { backgroundColor: '#ffffff' } });
  });

  it('border widths should be match', () => {
    expectResult(
      emptyTheme,
      { borderTopWidth: 1, borderWidth: 1 },
      { expectation: { borderTopWidth: 1, borderWidth: 1 } },
    );

    expectResult(baseTheme, { borderLeftWidth: 1 }, { expectation: { borderLeftWidth: 1 } });
  });
});

describe('edge case', () => {
  it('invalid px suffix', () => {
    expectResult(baseTheme, { w: 'undefinedpx' as any }, { expectation: {} });
    expectResult(baseTheme, { w: 'nullpx' as any }, { expectation: {} });
    expectResult(baseTheme, { w: '-px' as any }, { expectation: {} });
    expectResult(baseTheme, { w: '-1px' as any }, { expectation: { width: -1 } });
  });

  it('if token is undefined, baseStyle is returned', () => {
    expectResult(undefined as any, {}, { expectation: {} });
    expectResult(undefined as any, { style: { width: 1 } }, { expectation: { width: 1 } });
  });

  it('if prop and getStyle sx parameter are nullish, return undefined', () => {
    const {
      result: {
        current: { getStyle },
      },
    } = renderHook(() => useSx(null, { theme: baseTheme }));

    return expect(getStyle()).toEqual(undefined);
  });

  it('if prop is nullish and fallback parameter is not nullish, return fallback style', () => {
    const {
      result: {
        current: { getStyle },
      },
    } = renderHook(() => useSx(null, { theme: baseTheme, fallback: { w: 1 } }));

    return expect(getStyle()).toEqual({ width: 4 });
  });

  it("gap doesn't accept not number value", () => {
    expectResult(baseTheme, { gap: 'full' as any }, { expectation: {} });
  });
});

describe('space parsing', () => {
  it('if number token not found, return itself', () => {
    expectResult(emptyTheme, { m: 1 }, { expectation: { margin: 1 } });
  });

  it('px suffix string, return parsed pixel number value', () => {
    expectResult(emptyTheme, { m: '15px' }, { expectation: { margin: 15 } });
    expectResult(emptyTheme, { m: '-1.5px' }, { expectation: { margin: -1.5 } });
    expectResult(emptyTheme, { m: '0px' }, { expectation: { margin: 0 } });
    expectResult(emptyTheme, { m: '-1px' }, { expectation: { margin: -1 } });
  });

  it('percentage', () => {
    expectResult(emptyTheme, { m: '100%' }, { expectation: { margin: '100%' } });
  });

  it('number, string parsing', () => {
    expectResult(baseTheme, { m: 1 }, { expectation: { margin: 4 } });
    expectResult(baseTheme, { m: '1' }, { expectation: { margin: 4 } });
  });

  it('negative works', () => {
    expectResult(baseTheme, { m: -1 }, { expectation: { margin: -4 } });
  });

  it('negative number as key', () => {
    expectResult(baseTheme, { m: -1 }, { expectation: { margin: -4 } });
  });

  it('minus prefixed string', () => {
    expectResult(baseTheme, { m: '-pagePadding' as any }, { expectation: { margin: -20 } });
  });

  it('gap accepts number value', () => {
    expectResult(baseTheme, { gap: 1 }, { expectation: { gap: 4 } });
  });
});

describe('sizes parsing', () => {
  it("negative doesn't work", () => {
    expectResult(baseTheme, { w: -1 }, { expectation: { width: -1 } });
  });
});

describe('shortcut priority', () => {
  it('backgroundColor', () => {
    expectResult(
      baseTheme,
      { bg: 'red', backgroundColor: 'blue' },
      { expectation: { backgroundColor: 'blue' } },
    );

    expectResult(
      baseTheme,
      { bg: 'red', backgroundColor: '#ffffff' },
      { expectation: { backgroundColor: '#ffffff' } },
    );
  });

  it('width', () => {
    expectResult(emptyTheme, { w: 1, width: 2 }, { expectation: { width: 2 } });
  });

  it('borderRadius', () => {
    expectResult(emptyTheme, { radius: 1, borderRadius: 2 }, { expectation: { borderRadius: 2 } });
  });

  it('align', () => {
    expectResult(
      emptyTheme,
      { textAlign: 'center', align: 'left' },
      { expectation: { textAlign: 'center' }, styleType: 'TextStyle' },
    );
  });
});

describe('style parse priority', () => {
  it('prop property > fallback property', () => {
    expectResult(
      emptyTheme,
      { w: 1 },
      {
        fallback: {
          w: 2,
        },
        expectation: { width: 1 },
      },
    );
  });

  it('sx prop property > prop property', () => {
    expectResult(emptyTheme, { w: 1, sx: { w: 2 } }, { expectation: { width: 2 } });
  });

  it('style prop property > sx prop property', () => {
    expectResult(emptyTheme, { style: { width: 1 }, sx: { w: 2 } }, { expectation: { width: 1 } });
  });

  it('sx > fallback', () => {
    expectResult(
      emptyTheme,
      { sx: { w: 2 }, mx: 4 },
      { fallback: { width: 1, marginX: 5 }, expectation: { width: 2, marginHorizontal: 4 } },
    );
  });

  it('sx typography > fallback', () => {
    expectResult(
      baseTheme,
      { t: 'title' },
      {
        fallback: { typography: 'body' },
        expectation: {
          fontFamily: 'Noto Sans',
          fontSize: 14,
          fontStyle: 'normal',
          fontWeight: '400',
        },
        styleType: 'TextStyle',
      },
    );
  });
});

describe('radii', () => {
  it('simple case check', () => {
    expectResult(baseTheme, { topLeftRadius: '1px' }, { expectation: { borderTopLeftRadius: 1 } });
    expectResult(baseTheme, { topLeftRadius: '1' }, { expectation: { borderTopLeftRadius: 1 } });
    expectResult(
      baseTheme,
      { topLeftRadius: 'sm' as any },
      { expectation: { borderTopLeftRadius: 8 } },
    );
  });
});

describe('filteredProps', () => {
  it("filteredProps shouldn't have not style props - ViewStyle", () => {
    expectResult(
      baseTheme,
      { shouldBePersist: true, backgroundColor: 'red' },
      {
        expectation: { backgroundColor: 'red' },
        filteredPropsExpectation: { shouldBePersist: true },
      },
    );
  });

  it("styleTheme includes only ViewStyle, then props in TextStyle shouldn't be filtered", () => {
    expectResult(
      baseTheme,
      { color: 'red' },
      {
        expectation: {},
        filteredPropsExpectation: { color: 'red' },
      },
    );
  });

  it("filteredProps shouldn't have not style props - TextStyle", () => {
    expectResult(
      baseTheme,
      { color: 'red' },
      {
        expectation: { color: 'red' },
        filteredPropsExpectation: {},
        styleType: 'TextStyle',
      },
    );
  });
});

describe('TextStyle', () => {
  it('TextStyle props are parsed', () => {
    expectResult(
      baseTheme,
      { textShadowColor: 'red' },
      {
        expectation: { textShadowColor: 'red' },
        styleType: 'TextStyle',
      },
    );
  });

  it('Typography', () => {
    expectResult(
      baseTheme,
      { t: 'title' },
      {
        expectation: {
          fontFamily: 'Noto Sans',
          fontSize: 14,
          fontStyle: 'normal',
          fontWeight: '400',
        },
        styleType: 'TextStyle',
      },
    );
  });

  it('Typography has lower priority than general props', () => {
    expectResult(
      baseTheme,
      { t: 'title', fontFamily: 'Test' },
      {
        expectation: {
          fontFamily: 'Test',
          fontSize: 14,
          fontStyle: 'normal',
          fontWeight: '400',
        },
        styleType: 'TextStyle',
      },
    );
  });
});

describe('transform', () => {
  it('property should be transform', () => {
    expectResult(
      baseTheme,
      { mt: 2, mb: 2 },
      {
        expectation: { marginTop: 8, marginBottom: 8, marginHorizontal: 16 },
        transform: ({ marginTop, marginBottom }) => ({
          mx: (is.number(marginTop) ? marginTop : 0) + (is.number(marginBottom) ? marginBottom : 0),
        }),
      },
    );
  });

  it('transform output should be honored even all props are null', () => {
    expectResult(baseTheme, undefined as any, {
      expectation: { marginHorizontal: 4 },
      transform: () => ({ mx: 1 }),
    });
  });
});

describe('cache', () => {
  it('same style result will be cached', () => {
    const [style1] = expectResult(
      emptyTheme,
      { bg: 'red', mt: 2 },
      {
        cache: true,
        expectation: { marginTop: 2, backgroundColor: 'red' },
      },
    );

    const [style2] = expectResult(
      emptyTheme,
      { mt: 2, sx: { bg: 'red' } },
      {
        cache: true,
        expectation: { marginTop: 2, backgroundColor: 'red' },
      },
    );

    expect(style1 === style2).toBe(true);
  });
});
