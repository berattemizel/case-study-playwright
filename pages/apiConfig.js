// pages/apiConfig.js
const config = {
  baseUrl: 'https://jsonplaceholder.typicode.com',
  endpoints: {
    posts: '/posts',
    postById: (id) => `/posts/${id}`,
  }
};

export default config;
