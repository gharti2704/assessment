import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../redux/actions';
import PostList from './PostList';

const Post = ({ edit }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {posts.length > 0 &&
        posts.map((post) => {
          return <PostList post={post} key={post.id} edit={edit} />;
        })}

      {posts.length === 0 && !loading && <p>There are no posts.</p>}

      {error && !loading && <p>{error}</p>}
    </div>
  );
};

export default Post;
