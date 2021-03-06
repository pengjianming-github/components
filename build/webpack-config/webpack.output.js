const paths = require('../paths.config');

module.exports = (production = false) => {
  return {
    output: production
      ? {
          path: paths.distPath(),
          filename: 'static/[name]/index.[chunkhash].js',
          chunkFilename: 'static/[name].[id].[chunkhash].js',
          publicPath: `/`
        }
      : {
          path: paths.distPath(),
          filename: '[name].js',
          chunkFilename: '[name].js',
          publicPath: '/'
        }
  };
};
