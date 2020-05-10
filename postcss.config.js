module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("@fullhuman/postcss-purgecss")({
      content: [
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
      ],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
    require("postcss-preset-env"),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
