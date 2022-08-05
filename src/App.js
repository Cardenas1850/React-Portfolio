
import './App.css';
import Footer from './componets/Footer';
import About from './componets/About'; 
import Projects from './componets/Projects';
import Contact from './componets/Contact';
import { useState } from 'react';
import Nav from './componets/Nav';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  function togglePage(page) {
    if (page === 'About') {
      return <About />
    }  if (page === 'Contact') {
      return <Contact />
    }  if (page === 'Projects') {
      return <Projects />
    }
  }

  const handlePage = (page) => setCurrentPage(page);

  return (
    <main className='App'>
      <Nav
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      handlePage={handlePage}></Nav>
      {togglePage(currentPage)}
      <Footer />
    </main>
  );
}

export default App;
