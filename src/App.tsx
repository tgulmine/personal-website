import * as React from 'react';
import './styles/main.scss';
import { Container } from './components/Container';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Terminal } from './components/Terminal';
import { Project } from './components/Project';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Terminal />
      <Project />
      <Contact />
      <Footer />
    </Container>
  );
};

export default App;
