import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
