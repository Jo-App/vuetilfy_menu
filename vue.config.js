module.exports = {
  runtimeCompiler: true,
  devServer: {
      port: 8080,
      historyApiFallback: true,
      noInfo: true,
      overlay: true,
  },
  transpileDependencies:['vuetify'],
  lintOnSave : false
}