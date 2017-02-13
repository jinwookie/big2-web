import path from 'path';
import {
  ProvidePlugin,
  DefinePlugin,
  //HotModuleReplacementPlugin,
  optimize,
  NamedModulesPlugin
} from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import dotenv from 'dotenv';

dotenv.config({ silent: true });

const { UglifyJsPlugin } = optimize;

const ENV = process.env.ENV || 'development';
const NODE_ENV = process.env.NODE_ENV || 'development';
const isProd = NODE_ENV === 'production';

const config = `../src/client/config/${ENV}.json`;

export default [
  {
    name: 'client',
    devtool: isProd ? 'hidden-source-map' : 'inline-source-map',
    devServer: {
      //hot: true, // enable HMR on the server
      inline: true,
      contentBase: path.join(__dirname, '../public/js'), // match the output path
      publicPath: 'http://localhost:8080/public/js/' // match the output `publicPath`
    },
    /*entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/client/index.js'
    ],*/
    entry: {
      app: './src/client/index.js'
    },
    output: {
      path: path.join(__dirname, '../public/js'),
      publicPath: isProd ? '/public/js/' : 'http://localhost:8080/public/js/',
      //publicPath: '/public/js/',
      filename: '[name].js'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
      modules: [
        path.join(__dirname, '../src/client'),
        'node_modules'
      ],
      alias: {
        config: path.join(__dirname, config)
      }
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          enforce: 'pre',
          use: [
            {
              loader: 'eslint-loader',
              options: { rules: { semi: 0 }}
            }
          ]
        },
        {
          test: /\.jsx?$/,
          include: [
            path.join(__dirname, '../src')
          ],
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.json$/,
          loader: 'json-loader',
          include: [
            path.join(__dirname, '../src')
          ]
        },
        {
          test: /\.s?css$/,
          include: [
            path.join(__dirname, '../src/client'),
            path.join(__dirname, '../node_modules/font-awesome')
          ],
          use: isProd ? ExtractTextPlugin.extract(
            [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          ) :
          [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000',
        }
      ]
    },
    plugins: [
      new ProvidePlugin({
        'React': 'react',
        'Promise': 'bluebird'
      }),
      new DefinePlugin({
        'process.env.TOKEN': JSON.stringify(process.env.TOKEN),
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
      })
    ].concat(isProd ? [
      new UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new ExtractTextPlugin('styles.css')
    ] : [
      //new HotModuleReplacementPlugin(),
      new NamedModulesPlugin()
    ])
  }
];
