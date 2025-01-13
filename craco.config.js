const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          "stream": require.resolve("stream-browserify"),
          "path": require.resolve("path-browserify"),
          "crypto": require.resolve("crypto-browserify"),
          "buffer": require.resolve("buffer/"),
          "http": require.resolve("stream-http"),
          "https": require.resolve("https-browserify"),
          "os": require.resolve("os-browserify/browser"),
          "zlib": require.resolve("browserify-zlib"),
          "net": false,
          "tls": false,
          "fs": false,
          "util": require.resolve("util/"),
          "async_hooks": false,
          "dns": false
        }
      },
      plugins: [
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
          process: 'process/browser'
        })
      ]
    }
  }
}; 