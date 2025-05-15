import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'
import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  ...tseslint.configs.recommended,
  ...compat.config({
    extends: ['next/core-web-vitals', 'eslint:recommended', 'prettier', 'next'],
    rules: {
      'no-console': 'warn',
      'react-hooks/exhaustive-deps': 'error',
      'react/no-array-index-key': 'warn',
    },
  }),
  {
    languageOptions: {
      globals: {
        React: 'readable',
      },
    },
  },
])
