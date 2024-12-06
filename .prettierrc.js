module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  plugins: ['prettier-plugin-tailwindcss', '@trivago/prettier-plugin-sort-imports','prettier-plugin-svelte'],
  importOrder: [
    '^react',
    '^next',
    '^[a-zA-Z]',
    '^@?\\w',
    '^@/components/?\\w',
    '^@/?\\w',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
