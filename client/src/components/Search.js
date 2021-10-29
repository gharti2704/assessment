import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchByTitle } from '../redux/actions';
import PostList from './PostList';

const Search = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  // const posts = useSelector((state) => state.posts.posts);
  // console.log(posts);
  // const loading = useSelector((state) => state.posts.loading);
  // const error = useSelector((state) => state.posts.error);

  const searchTitle = (e) => {
    e.preventDefault();
    dispatch(searchByTitle(title));
  };

  return (
    <div>
      <form onSubmit={searchTitle}>
        <label> Search by title </label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <button>search</button>
      </form>
    </div>
  );
};

export default Search;
