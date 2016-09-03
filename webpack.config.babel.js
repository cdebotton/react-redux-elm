import webpack from 'webpack';
import path from 'path';

export default env => {
  const __DEV__ = (env && env.development) || false;
  const config = {};

  const publicPath = '/dist/';

  if (__DEV__) {
    config.devtool = 'eval-source-map';
  }

  config.entry = {
    bundle: [
      path.join(__dirname, 'src', 'resources', 'index'),
    ],
  };

  if (__DEV__) {
    config.entry.bundle = [
      'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      ...config.entry.bundle,
    ];
  }

  config.output = {
    filename: '[name].js',
    path: path.join(__dirname, 'build', 'resources'),
    publicPath,
  };

  config.module = {};
  config.module.loaders = [];

  config.module.loaders.push({
    test: /\.js$/,
    include: path.join(__dirname, 'src', 'resources'),
    loaders: ['babel'],
  });

  if (__DEV__) {
    config.module.loaders.push({
      test: /\.css$/,
      loaders: ['style', 'css?modules', 'postcss?sourceMap=inline'],
    });
  }

  config.plugins = [];

  if (__DEV__) {
    config.plugins = [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      ...config.plugins,
    ];
  } else {
    config.plugins = [
      new webpack.optimize.DedupePlugin(),
      ...config.plugins,
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
    ];
  }

  config.postcss = () => [
    require('postcss-normalize'),
    require('postcss-cssnext'),
  ];

  return config;
};
