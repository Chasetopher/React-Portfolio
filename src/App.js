import * as React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';

// material UI
import { createTheme, ThemeProvider } from '@mui/material/styles';

  const theme = createTheme({
    palette: {
      primary: {
        main: '#001E3C'
      },
      secondary: {
        main: '#2F3A45'
      }
    }
  })

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
