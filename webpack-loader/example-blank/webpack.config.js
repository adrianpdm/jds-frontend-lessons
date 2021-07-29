module.exports = {
  module: {
    rules: [
      {
        test: /\.*$/,
        resourceQuery: /capitalize/,
        use: './perbesar.loader.js',
        enforce: 'pre'
      },
      {
        test: /\.adrianpdm$/,
        use: [
          {
            loader: './adrianpdm.loader.js',
          }
        ],
      }
    ]
  },
  entry: './main.js'
}
