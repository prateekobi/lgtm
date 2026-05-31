import { globalIgnores } from 'eslint/config';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import pluginOxlint from 'eslint-plugin-oxlint';
import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compat = new FlatCompat({ baseDirectory: __dirname });

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,ts,mts,tsx}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  // Airbnb rules first so Vue/TS parser configs can override afterwards
  ...compat.extends('airbnb-base'),

  // Vue + TypeScript parser and rules (must come after Airbnb to win parser priority)
  ...pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  // Project-wide overrides
  {
    settings: {
      'import/resolver': {
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'] },
      },
      'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      // Tell eslint-plugin-import to use vue-eslint-parser for .vue files
      'import/parsers': {
        'vue-eslint-parser': ['.vue'],
      },
    },
    rules: {
      // Vue script setup registers components via import — not "unused"
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      // Vue SFCs don't have default exports
      'import/prefer-default-export': 'off',
      // False positive: rule misfires via FlatCompat when key uses member expression (job.company)
      'vue/valid-v-for': 'off',
      // Allow missing extensions for TS modules (tsc resolves them)
      'import/extensions': ['error', 'ignorePackages', {
        js: 'never', jsx: 'never', ts: 'never', tsx: 'never',
      }],
      // Allow devDependencies in config and test files
      'import/no-extraneous-dependencies': ['error', {
        devDependencies: [
          '**/*.config.ts',
          '**/*.config.js',
          'src/**/*.spec.ts',
          'src/**/*.test.ts',
        ],
      }],
    },
  },

  // Relax import resolution in config/tool files that use bare package specifiers
  {
    files: ['eslint.config.ts', 'vite.config.ts'],
    rules: {
      'import/no-unresolved': 'off',
    },
  },

  // SVG icon components contain long inline path data — skip line-length there
  {
    files: ['src/components/icons/**/*.vue'],
    rules: {
      'max-len': 'off',
    },
  },

  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),
);
