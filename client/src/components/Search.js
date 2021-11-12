import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import PostList from './PostList';

const Search = () => {
  const posts = useSelector((state) => state.postsReducer.posts);
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
          const regex = new RegExp(`^${searchTerm}`, `gi`);

          return !searchTerm ? post : post.title.match(regex);
        })
        .map((p) => {
          return <PostList post={p} key={p.id} />;
        })}
    </div>
  );
};

export default Search;
