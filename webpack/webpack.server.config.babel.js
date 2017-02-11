import path from 'path';
import { ProvidePlugin } from 'webpack';
import nodeExternals from 'webpack-node-externals';

const ENV = process.env.ENV || 'development';
const config = `../src/client/config/${ENV}.json`;

export default [
  {
    name: 'server',
    entry: './src/server/app.js',
    target: 'node',
    output: {
      path: path.join(__dirname, '../dist/server'),
      filename: 'app.js',
      libraryTarget: 'commonjs2'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      modules: [
        'node_modules',
        path.join(__dirname, '../src/client'),
      ],
      alias: {
        config: path.join(__dirname, config)
      }
    },
    externals: nodeExternals(),
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          include: path.join(__dirname, '../src'),
          exclude: /node_modules/
        },
        {
          test: /\.json$/,
          loader: 'json-loader',
          include: path.join(__dirname, '../src')
        },
      ]
    },
    plugins: [
      new ProvidePlugin({
        'React': 'react',
        'Promise': 'bluebird'
      })
    ],
    node: {
      __dirname: true
    }
  }
];
