import * as React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';

// //Color Theme
  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: '#001E3C'
  //     },
  //     secondary: {
  //       main: '#2F3A45'
  //     }
  //   }
  // })

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
