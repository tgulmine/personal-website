import * as React from 'react';
import './styles/main.scss';
import { Container } from './components/Container';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Terminal } from './components/Terminal';

const App: React.FC = () => {
  /* Container
    Navbar
    Hero 
    Terminal
      Terminal Header
      Terminal Window
    Projects 
    Contact 
    Footer */

  return (
    <Container>
      <Navbar />
      <Hero />
      <Terminal />
    </Container>
  );
};

export default App;
