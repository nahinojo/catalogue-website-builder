const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Read all JSON files in the data directory
const dataFiles = fs.readdirSync(path.resolve(__dirname, 'src/data')).filter(file => file.endsWith('.json'));

// Create an HtmlWebpackPlugin instance for each JSON file
const demoEntriesHtmlPlugins = dataFiles.map(file => {
  const data = require(`./src/data/${file}`);
  return new HtmlWebpackPlugin({
    filename: `${path.basename(file, '.json')}.html`,
    template: 'src/demo_template.ejs',
    templateParameters: data,
    inject: false,
    minify: false,
  });
});

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'junk-ignore.js', // Ignorable output file
  },
  plugins: [
    ...demoEntriesHtmlPlugins
  ],
  mode: 'development'
};