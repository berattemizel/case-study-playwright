import { test, expect } from '@playwright/test';
import { UiPage } from '../../pages/uiPage';
import testData from '../../data/testData';

const { username, password } = testData.loginData;

test.describe('UI Tests', () => {
  let uiPage;

  test.beforeEach(async ({ page }) => {
    uiPage = new UiPage(page);
    await uiPage.navigateTo(); // Navigate to the base URL before each test
  });

  test('should log in, verify items are sorted by name A->Z, change sorting to Z->A and verify', async () => {
    // Log in to the site
    await uiPage.login(username, password);
    
    // Verify items are sorted in ascending order
    await uiPage.verifyItemsSorted('asc'); 
    
    // Change sorting to name (Z to A)
    await uiPage.changeSorting('Name (Z to A)');

    // Verify items are sorted in descending order
    await uiPage.verifyItemsSorted('desc'); 
  });
});
