import React from 'react';
import Post from './Post';
import Footer from './Footer';
import Header from './Header';
import { Container } from 'react-bootsrtap';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          <Post />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
