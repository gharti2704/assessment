const axios = require('axios');

describe('API', () => {
  test('Should respond with an array of objects', async () => {
    const posts = await axios.get('http://localhost:8000/api/posts');
    expect(Array.isArray(posts.data)).toBe(true);
    expect(posts.data.length > 0).toBe(true);
  });
});
