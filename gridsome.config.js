// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, "./src/assets/sass/*.scss"), // Global SCSS files
      ],
    });
}

module.exports = {
  siteName: "Portfolio Blog",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "./blog/posts/*.md",
      },
    },
    {
      use: "@gridsome/transformer-remark",
    },
  ],
  build: {
    ssr: false,
  },
  templates: {
    Post: "/blog/:title",
  },
  chainWebpack(config) {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach((type) => {
      const scssRule = config.module.rule("scss").oneOf(type);
      addStyleResource(scssRule);
    });
  },
};
