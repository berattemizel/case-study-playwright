# SymphonySolutions Project

## Instructions

### API Tests with JSONPlaceholder

Implement a series of actions using the JSONPlaceholder API (https://jsonplaceholder.typicode.com/) to read, create, update, and delete a post, while also verifying the integrity of the operations.

#### Steps:

1. **Read Total Number of Posts and Store in a Variable:**
   - Send a GET request to /posts.
   - Retrieve the total number of posts from the response body.
   - Store the total number of posts in a variable for future reference.

2. **Create a New Post and Store its ID:**
   - Send a POST request to /posts with a new post object containing relevant data.
   - Extract the ID of the newly created post from the response body.
   - Store the ID of the created post in a variable for future reference.

3. **Get Only the Created Post by ID:**
   - Send a GET request to /posts/{id} endpoint, replacing {id} with the ID of the created post.
   - Retrieve and validate the details of the created post from the response body.

4. **Replace Some Field in the Created Post with PATCH:**
   - Send a PATCH request to /posts/{id} with updated field(s) of the post, replacing {id} with the ID of the created post.
   - Confirm the successful update of the post by sending a GET request to /posts/{id} and verifying the changes.

5. **Delete the Created Post by ID:**
   - Send a DELETE request to /posts/{id} to delete the post, replacing {id} with the ID of the created post.
   - Verify that the post has been successfully deleted by attempting to retrieve it using a GET request to /posts/{id} and ensuring a 404 status code is returned.

6. **Check the Number of Posts to Ensure Integrity:**
   - Send a GET request to /posts.
   - Retrieve the current total number of posts from the response body.
   - Compare the current total number of posts with the initial total number obtained in step 1 to ensure integrity.

### UI Tests with Saucedemo

Create (design and implement) an automated UI test using any UI JS framework or library (Cypress with JavaScript; Playwright with TypeScript, WebdriverIO, etc.)

#### Steps:

1. Go to [Saucedemo](https://www.saucedemo.com/)
2. Log in to the site. Verify that the items are sorted by Name (A -> Z).
3. Change the sorting to Name (Z -> A).
4. Verify that the items are sorted correctly.

### Instructions:

1. Use appropriate test runner and test reporting tool.
2. Implement assertions to verify the expected behavior.
3. Use relevant build tool for the project.
4. Provide clear instructions in the README file on how to run the automated tests locally and on CI.

### Acceptance Criteria:

1. The automated tests should be well-organized, readable, and easy to maintain.
2. The test suite should be uploaded to your public repository (can be any: GitHub, GitLab, etc.).

### Bonus Points:

1. Create a GitLab public project.
2. Acquire a shared docker runner (i.e., use one of the default public runners GitLab allows).
3. Create a `.gitlab-ci.yml` file in the project.
4. Make sure the CI/CD pipeline works.
5. Show tests run in a pipeline in the CI/CD of the GitLab project.

## Running Tests Locally

To run the tests locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/berattemizel/case-study-playwright.git
   cd case-study-playwright

2. Install the dependencies:
   ```sh
   npm install
   npx playwright install
   
3. Run the tests:
   ```sh
   npm test

[CI/CD Pipeline Results with GITLAB](https://gitlab.com/case5553227/casestudy-playwright/-/pipelines/1362674484)

[Gitlab project](https://gitlab.com/case5553227/casestudy-playwright)

[Action Workflow Results with GITHUB](https://github.com/berattemizel/case-study-playwright/actions/runs/9816320430)



