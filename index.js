const functions = require('./functions'); // Import the exported app from functions.js

exports.handler = async (event, context) => {
  return functions.app(event, context);
};
