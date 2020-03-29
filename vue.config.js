
module.exports = {
  lintOnSave: false,

  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
  pluginOptions: {
    svgLoader: {
      svgo: {
        plugins: []
      }
    }
  },
  pwa: {
    "name": "kamil-jurowicz.com",
    "short_name": "kamil-jurowicz",
    "display": "standalone",
    "background_color": "#000000",
    "theme_color": "#791d3b",
    assetsVersion: "1.0.1"
  }
};
