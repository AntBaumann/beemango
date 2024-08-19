const path = require('path');

module.exports = {
  // Other configurations...
  resolve: {
    fallback: {
      "os": require.resolve("os-browserify/browser"),
      // Add other fallbacks if needed
    }
  }
};
