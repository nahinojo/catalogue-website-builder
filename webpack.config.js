const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Generating for all demo entries.
const demoEntriesFiles = fs.readdirSync(path.resolve(__dirname, 'src/data/demos')).filter(file => file.endsWith('.json'));
const demoEntriesHtmlPlugins = demoEntriesFiles.map(file => {
  const data = require(`./src/data/demos/${file}`);
  return new HtmlWebpackPlugin({
    filename: `entries/${path.basename(file, '.json')}.html`,
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
    ...demoEntriesHtmlPlugins,
    ...topicHtmlPlugins
  ],
  mode: 'development'
};