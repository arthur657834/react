var path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'app/app.js'),
  output: { path: path.resolve(__dirname, 'build'), filename: 'bundle.js',publicPath: '/build/' },
module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015','react']
      }
    },
 {
    test: /\.(png|jpg|gif)$/,
    loader: 'url-loader?limit=8192' // 这里的 limit=8192 表示用 base64 编码 <= ８K 的图像
  },
{
  test: /\.css$/,
  loader: 'style-loader!css-loader'
},
    ]
  },
    devServer: {
    host: '192.168.1.10',
compress: true,
    inline: true,
    hot: true,
    compress: true,
    port: 9000,
    historyApiFallback: true,
proxy: {
            '/omp/*': {
                target: 'http://10.1.11.88:7500',
                secure: false
            },
            '/realtime/*': {
                target: 'ws://10.1.11.88:7505',
                ws: true,
                changeOrigin: true,
            }
        },
  },
  devtool: 'source-map'
}
