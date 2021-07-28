const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = (env, argv) => {
  const entryFileName = path.basename(argv.entry[0]);
  const entryFileNameNoExt = entryFileName
    .split('.')
    .slice(0, -1)
    .join('');
  return {
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: `${entryFileName}`,
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: `${entryFileNameNoExt}.html`,
        reportTitle: `${entryFileNameNoExt} - REPORT`,
      })
    ]
  }
}
