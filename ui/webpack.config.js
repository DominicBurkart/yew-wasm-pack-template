const path = require('path');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {GenerateSW} = require('workbox-webpack-plugin');


const distPath = path.resolve(__dirname, "dist");
const assetPath = path.join(__dirname, "assets");
module.exports = (env, argv) => {
  return {
    devServer: {
      contentBase: [distPath, assetPath],
      compress: argv.mode === "production",
      port: 8000
    },
    entry: './bootstrap.js',
    output: {
      path: distPath,
      filename: "todomvc.js",
      webassemblyModuleFilename: "todomvc.wasm",
    },
    module: {
     rules: [
       {
        test: /\.(png|svg|jpg|gif)$/,
         use: ['file-loader']
       },
     ],
   },
    plugins: [
      new CopyWebpackPlugin([
        { from: './static', to: distPath }
      ]),
      new WasmPackPlugin({
        crateDirectory: ".",
        extraArgs: "--no-typescript",
      }),
      new GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
     }),
    ],
    watch: argv.mode !== 'production'
  };
};
