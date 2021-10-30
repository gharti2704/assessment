const axios = require('axios');

describe('API', () => {
  test('should respond with an array of objects', async () => {
    const posts = await axios.get('http://localhost:8000/api/posts');
    expect(Array.isArray(posts.data)).toBe(true);
  });

  test('length of the posts array should be greater than 0', async () => {
    const posts = await axios.get('http://localhost:8000/api/posts');
    expect(posts.data.length > 0).toBe(true);
  });
});
