export default defineConfig([
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      js,
      react: pluginReact,
    },
    settings: {
      react: {
        version: 'detect', // ✅ バージョン自動検出
      },
    },
    rules: {
      // ✅ ここが重要！
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'warn',
    },
  },

  // 外に書かない！（上書きされてしまうため）
  // tseslint.configs.recommended,
  // pluginReact.configs.flat.recommended,
])
