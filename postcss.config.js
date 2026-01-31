/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "postcss-import": {},
    "postcss-nesting": {},
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};

module.exports = config;
