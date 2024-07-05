// playwright.config.js
module.exports = {
    use: {
      browserName: 'chromium',
      headless: false, // Testleri tarayıcıda görüntülemek için false yapabilirsiniz
      baseURL: 'https://jsonplaceholder.typicode.com', // Uygulamanızın temel URL'si
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
      },
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
    },
    reporter: [
      ['list'],
      ['json', { outputFile: 'test-results.json' }],
      ['html', { outputFolder: 'playwright-report' }],
    ],
    projects: [
      {
        name: 'chromium',
        use: { browserName: 'chromium' },
      }
      // {
      //   name: 'firefox',
      //   use: { browserName: 'firefox' },
      // },
      // {
      //   name: 'webkit',
      //   use: { browserName: 'webkit' },
      // },
    ],
    timeout: 10000,
    reporter: 'list',
  };
  