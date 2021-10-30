import React, { useState } from 'react';
import Post from './Post';
import Footer from './Footer';
import Search from './Search';
import { Container } from 'react-bootstrap';
import EditFrom from './EditFrom';
import './App.css';

const App = () => {
  const [editPost, setEditPost] = useState('');
  const edit = (post) => {
    setEditPost(post);
  };
  return (
    <div className="App">
      <main className="py-3">
        <Container>
          {editPost ? (
            <EditFrom post={setEditPost} />
          ) : (
            <div>
              <Search />
              <Post edit={edit} />
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
