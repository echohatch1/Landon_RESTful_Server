const path = require('path');

module.exports = {
  mode: 'production', // Maintain production mode for optimizations
  target: 'node', // Explicitly target Node.js environment
  entry: './index.js', // Keep the Node.js entry point
  output: {
    filename: 'main.bundle.js', // Consistent output filename
    path: path.resolve(__dirname, 'dist'), // Retain output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Target JavaScript files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Continue with Babel transpilation if needed
          options: {
            // Define necessary Babel presets or plugins (if any)
          }
        }
      },
    ]
  }
};
