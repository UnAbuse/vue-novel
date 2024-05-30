module.exports = {
  baseUrl: './',
  lintOnSave: false,
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8900',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/content': {
        target: 'http://localhost:8900',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/content': ''
        }
      }
    }
  }
}
