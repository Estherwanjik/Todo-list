import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const entry = {
  index: './src/index.js',
};
export const plugins = [
  new HtmlWebpackPlugin({
    title: 'Production',
    template: './src/index.html',
  }),
];
export const output = {
  filename: '[name].bundle.js',
  path: resolve(__dirname, 'dist'),
  clean: true,
};
export const module = {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    },
  ],
};