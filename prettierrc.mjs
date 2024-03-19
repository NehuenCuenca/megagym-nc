/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  "tabWidth":null,
  "useTabs":true,
  "semi":true,
  "arrowParens":"avoid"
};
