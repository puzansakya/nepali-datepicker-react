import path, { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import EsLint from 'vite-plugin-linter'
import tsConfigPaths from 'vite-tsconfig-paths'
const { EsLinter, linterPlugin } = EsLint
import * as packageJson from './package.json'
// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  resolve: {
    alias: [
      {
      find: /dayjs\/plugin\/isSameOrAfter/,
      replacement: path.resolve(__dirname, 'node_modules', 'dayjs', 'plugin', 'isSameOrAfter'),
    },
      {
      find: /dayjs\/plugin\/isSameOrBefore/,
      replacement: path.resolve(__dirname, 'node_modules', 'dayjs', 'plugin', 'isSameOrBefore'),
    },
      {
      find: /dayjs\/plugin\/isBetween/,
      replacement: path.resolve(__dirname, 'node_modules', 'dayjs', 'plugin', 'isBetween'),
    },
  ]
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ['src/'],
    }),
    react(),
    tsConfigPaths(),
    // linterPlugin({
    //   include: ['./src/**/*.{ts,tsx}'],
    //   linters: [new EsLinter({ configEnv })],
    // })
  ],
  build: {
    lib: {
      entry: path.join('src', 'index.tsx'),

      name: 'ReactViteLibrary',
      formats: ['es', 'umd'],
      fileName: (format) => `nepali-react-datepicker.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
}))
