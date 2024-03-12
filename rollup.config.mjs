import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import ts from 'rollup-plugin-typescript2';

/** @type{import('rollup').RollupOptions[]} */
const options = [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        preserveModules: true,
      },
      {
        dir: 'esm',
        format: 'esm',
        preserveModules: true,
      },
    ],
    external: ['react', 'react-native'],
    plugins: [
      nodeResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
      commonjs(),
      peerDepsExternal(),
      ts({ tsconfig: './tsconfig.json' }),
      terser(),
    ],
  },
];
export default options;
