module.exports = {
  configureWebpack: (config) => {
    const svgRule = config.module.rules.find((rule) => {
      return rule.test.test('.svg')
    })

    const defaultLoader = svgRule.use
    svgRule.oneOf = [
      {
        resourceQuery: /vue/,
        use: [
          'vue-loader',
          'svg-to-vue-component/loader'
        ]
      },
      ...defaultLoader
    ]

    delete svgRule.use

    config.module.rules.unshift({
      test: /\.html$/,
      resourceQuery: /inline/,
      use: [
        {
          loader: 'html-loader'
        }
      ]
    })
  }
}
