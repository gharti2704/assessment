import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import PostList from './PostList';

const Search = () => {
  const posts = useSelector((state) => state.posts.posts);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <input
        value={searchTerm}
        type="text"
        placeholder="Search by title"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {posts
        .filter((post) => {
          if (!searchTerm) {
            return post;
          } else if (
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return post;
          }
        })
        .map((p) => {
          return <PostList post={p} key={p.id} />;
        })}
    </div>
  );
};

export default Search;
