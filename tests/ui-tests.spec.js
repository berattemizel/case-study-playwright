// tests/ui-tests.spec.js
import { test, expect } from '@playwright/test';
import { UiPage } from '../pages/uiPage';
import testData from '../data/testData';

const { username, password } = testData.loginData;

test.describe('UI Tests', () => {
  let uiPage;

  test.beforeEach(async ({ page }) => {
    uiPage = new UiPage(page);
  });

  
  test('should log in and verify items are sorted by name A->Z', async () => {
    // Navigate to main page
    await uiPage.navigateTo();

    // Log in to the site
    await uiPage.login(username, password);
    
    // Verify items are sorted in ascending order
    await uiPage.verifyItemsSorted('asc'); 
  });


  test('should change sorting to name Z->A and verify', async () => {
    // Change sorting to name (Z->A)
    await uiPage.changeSorting('za');

    // Verify items are sorted in descending order
    await uiPage.verifyItemsSorted('desc'); 
  });
});
