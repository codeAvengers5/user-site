const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '275hzn',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
