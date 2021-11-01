import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  const [pages] = useState([
    { name: 'About', component: <About /> },
    { name: 'Projects', component: <Projects /> },
    { name: 'Contact', component: <Contact /> },
    { name: 'Resume', component: <Resume /> }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  
  return (
    <div>
      <Nav 
      pages = { pages }
      currentPage = { currentPage }
      setCurrentPage = { setCurrentPage }
      ></Nav>
      <main>
        { currentPage.component }
      </main>
      <Footer />
    </div>
  );
}

export default App;
