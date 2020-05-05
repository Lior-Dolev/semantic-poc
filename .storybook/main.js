const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  stories: ['../src/**/*.story.tsx'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [ { loader: require.resolve('awesome-typescript-loader') } ]
    }, {
      test: /\.js?$/,
      use: [ { loader: require.resolve('babel-loader') } ]
    },{
      test: /\.less$/,
      use: [ { loader: MiniCssExtractPlugin.loader }, 'css-loader', 'less-loader' ]
    },
    // this rule handles images
    {
      test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
      use: 'file-loader?name=[name].[ext]?[hash]'
    },

    // the following 3 rules handle font extraction
    {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    },
    
    {
      test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    },
    {
      test: /\.otf(\?.*)?$/,
      use: 'file-loader?name=/fonts/[name].  [ext]&mimetype=application/font-otf'
    });

    config.plugins.push(
      new MiniCssExtractPlugin()
    );

    config.resolve.extensions.push('.ts', '.tsx', '.js');
    config.resolve.alias['../../theme.config$'] = path.join(__dirname, '../cp-theme/theme.config');

    return config;
  }
}