import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    //SWITCH STATEMENT TO RETURN DESIRED COMPONENT
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />
      case 'Contact':
        return <Contact />
      default:
        return <About />
    }
  }
  
  return (
    <div>
      <Nav> 
      currentPage = { currentPage }
      setCurrentPage = { setCurrentPage }
      </Nav>
      <main>
        { renderPage() }
      </main>
      <Footer />
    </div>
  );
}

export default App;
