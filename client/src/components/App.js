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
          <div>
            <Search />
            <Post />
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
