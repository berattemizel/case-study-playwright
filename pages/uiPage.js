// pages/uiPage.js
import { expect, Page } from '@playwright/test';

export class UiPage {
  constructor(page) {
    this.page = page;
    // Define selectors for the UI elements
    this.inventoryItemName = '.inventory_item_name';  // Selector for inventory item names
    this.productSortContainer = '.product_sort_container';  // Selector for the product sort dropdown
  }

  async navigateTo(url) {
    // Navigate to the given URL
    await this.page.goto(url);
  }

  async login(username, password) {
    // Login using provided username and password
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }

  async verifyItemsSorted(order) {
    // Retrieve all product names from the page
    const items = await this.page.$$eval(this.inventoryItemName, elements => elements.map(el => el.textContent));
    
    // Copy the array to perform sorting operations
    let sortedItems = [...items];
    
    // Sort based on the order parameter
    if (order === 'asc') {
      // If order is 'asc', sort in ascending order
      sortedItems.sort();
    } else if (order === 'desc') {
      // If order is 'desc', sort in descending order
      sortedItems.sort().reverse();
    }

    // Verify that the original list of items matches the sorted list
    expect(items).toEqual(sortedItems);
  }

  async changeSorting(order) {
    // Change the sorting order of products using the product sort dropdown
    await this.page.selectOption(this.productSortContainer, { label: order });
  }
}
