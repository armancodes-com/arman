/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "postcss-import": {},
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};

module.exports = config;
