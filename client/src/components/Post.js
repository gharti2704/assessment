import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../redux/actions';
import PostList from './PostList';

const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsReducer.posts);
  const loading = useSelector((state) => state.postsReducer.loading);
  const error = useSelector((state) => state.postsReducer.error);
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {posts.length > 0 &&
        posts.map((post) => {
          return <PostList post={post} key={post.id} />;
        })}

      {posts.length === 0 && !loading && <p>There are no posts.</p>}

      {error && !loading && <p>{error}</p>}
    </div>
  );
};

export default Post;
