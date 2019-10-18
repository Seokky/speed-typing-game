module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/speed-typing-game/'
    : '',
  outputDir: 'docs',
  productionSourceMap: false,
};
