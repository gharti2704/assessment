import React from 'react';
import Post from './Post';
import Footer from './Footer';
import Search from './Search';
import { Container } from 'react-bootstrap';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <main className="py-3">
        <Container>
          <Search />
          <Post />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
