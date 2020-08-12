const path = require('path');
/*
compileJS = {
  entry: './src/index.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
*/

let compileTS = {
  // entry: './src/index.ts',

  entry: ['./src/index.ts'],
  module: {
    rules: [
      {
        test: /\.ts$/, 
        exclude: /node_modules/, 
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'typescript.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

module.exports = [compileTS];