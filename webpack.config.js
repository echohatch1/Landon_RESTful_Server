const path = require('path');

module.exports = {
  mode: 'production', // Set mode to production for optimizations
  entry: './index.js', // Entry point of your application
  output: {
    filename: 'main.bundle.js', // Output filename for bundled code
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Target all JavaScript files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel loader for potential transpilation
          options: {
            // Add any necessary Babel presets or plugins based on your project requirements
          }
        }
      },
      {
        test: /body-parser\.js/, // Target body-parser specifically (if necessary)
        use: {
          loader: 'body-parser-webpack-loader'
        }
      }
    ]
  }
};