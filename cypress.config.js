const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "gvyopp",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
