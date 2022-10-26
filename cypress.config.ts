import { defineConfig } from 'cypress'

export default defineConfig({
  fixturesFolder: false,
  videosFolder: 'cypress/results/videos',
  screenshotsFolder: '/cypress/results/screenshots',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    "baseUrl": "http://localhost:4200",
    "specPattern": "cypress/integration/",
    setupNodeEvents(on, config) {
    },
  },
})