module.exports = {
  // Global settings for all tests
  use: {
    headless: true, // Run tests in headless mode. Set to false to see the browser UI
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
    },
    screenshot: 'only-on-failure', // Take screenshots only on test failure
    video: 'retain-on-failure', // Retain video recording only on test failure
  },

  // Specify multiple reporters to use
  reporter: [
    ['list'], // Default console reporter
    ['json', { outputFile: 'test-results.json' }], // JSON reporter for CI integration
    ['html', { outputFolder: 'playwright-report' }], // HTML reporter for visual test reports
  ],

  // Define different projects for different test configurations
  projects: [
    {
      name: 'chromium-api',
      testDir: './tests/api', // Only run tests in the 'tests/api' directory
      use: {
        browserName: 'chromium',
        baseURL: 'https://jsonplaceholder.typicode.com', // Base URL for API tests
      },
    },
    {
      name: 'chromium-ui',
      testDir: './tests/ui', // Only run tests in the 'tests/ui' directory
      use: {
        browserName: 'chromium',
        baseURL: 'https://www.saucedemo.com', // Base URL for UI tests
      },
    },
    // Uncomment the following projects if you want to run tests on different browsers
    // {
    //   name: 'firefox',
    //   use: { browserName: 'firefox' },
    // },
    // {
    //   name: 'webkit',
    //   use: { browserName: 'webkit' },
    // },
  ],

  // Set a global timeout for all tests
  timeout: 10000,
};
