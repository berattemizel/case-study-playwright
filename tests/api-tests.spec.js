// tests/api-tests.spec.js
import { test, expect } from '@playwright/test';
import { Api } from '../pages/api';
import testData from '../data/testData';

test.describe('JSONPlaceholder API Tests', () => {
  let apiClient;
  let createdPostId;
  let totalPostsBefore;

  test.beforeEach(async ({ request }) => {
    apiClient = new Api(request);
  });

  test('Read total number of posts and store in a variable', async () => {
    // Step 1: Retrieve and store the total number of posts
    const response = await apiClient.getMethods('GetPosts');
    expect(response.responseInfo.data).toBeDefined(); // Check if the total posts data is defined
    totalPostsBefore = response.responseInfo.data.length; // Store the total number of posts
  });

  test('Create a new post and store its ID', async () => {
    // Step 2: Create a new post and store its ID
    const createResponse = await apiClient.postMethods('CreatePost', testData.newPost);
    expect(createResponse.responseInfo.data.id).toBeDefined(); // Check if the new post ID is defined
    createdPostId = createResponse.responseInfo.data.id; // Store the new post ID
  });

  test('Get only the created post by ID', async () => {
    // Step 3: Retrieve the created post by its ID
    const getResponse = await apiClient.getMethods('GetPostById', createdPostId);
    expect(getResponse.responseInfo.data).toMatchObject(testData.newPost); // Verify the created post data matches the initial post data
  });

  test('Replace some field in the created post with PATCH', async () => {
    // Step 4: Update a field in the created post with PATCH
    const updateResponse = await apiClient.patchMethods('UpdatePost', testData.updatedPostData, createdPostId);
    expect(updateResponse.responseInfo.data.title).toBe(testData.updatedPostData.title); // Check if the post title was updated correctly
  });

  test('Delete the created post by ID', async () => {
    // Step 5: Delete the created post by its ID
    const deleteResponse = await apiClient.deleteMethods('DeletePost', createdPostId);
    expect(deleteResponse.responseInfo.status).toBe(200); // Check if the delete operation was successful

    // Verify the deletion by attempting to retrieve the post
    const getDeletedResponse = await apiClient.getMethods('GetPostById', createdPostId);
    expect(getDeletedResponse.responseInfo.status).toBe(404); // Check if the post no longer exists
  });

  test('Check the number of posts to ensure integrity', async () => {
    // Step 6: Verify the total number of posts to ensure data integrity
    const response = await apiClient.getMethods('GetPosts');
    const totalPostsAfter = response.responseInfo.data.length; // Retrieve the total number of posts after all operations
    expect(totalPostsAfter).toBe(totalPostsBefore); // Ensure the total number of posts is the same as before the operations
  });
});
