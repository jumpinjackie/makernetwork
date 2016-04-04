'use strict';

exports.tslint = {
  test: /\.tsx?$/,
  loader: 'tslint',
  exclude: /node_modules/
};

exports.tsx = {
  test: /\.tsx?$/,
  loader: 'ts',
  exclude: /(node_modules|test-utils|\.test\.ts$)/
};

exports.html = {
  test: /\.html$/,
  loader: 'raw',
  exclude: /node_modules/
};

exports.css = {
  test: /\.css$/,
  loader: 'style-loader!css-loader!postcss-loader'/*,
  exclude: /node_modules/ */
};

exports.less = {
  test: /\.less$/,
  loader: 'style-loader!css-loader!less-loader'
};

exports.image = {
  test: /\.(png|jpg)$/,
  loader: "file-loader"
};

exports.svg = makeUrlLoader(/\.svg(\?v=\d+\.\d+\.\d+)?$/);
exports.eot = makeUrlLoader(/\.eot(\?v=\d+\.\d+\.\d+)?$/);
exports.woff = makeUrlLoader(/\.woff(\?v=\d+\.\d+\.\d+)?$/);
exports.woff2 = makeUrlLoader(/\.woff2(\?v=\d+\.\d+\.\d+)?$/);
exports.ttf = makeUrlLoader(/\.ttf(\?v=\d+\.\d+\.\d+)?$/);

function makeUrlLoader(pattern) {
  return {
    test: pattern,
    loader: 'url'
  };
}
