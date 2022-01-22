import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/Contact';

function App() {
const [categories] = useState([
  {
    name: 'portfolio',
    description: 'Full Stack application projects',
  },
  { name: 'resume', description: 'Technologies mastered' },
]);

const [currentCategory, setCurrentCategory] = useState(categories[0]);
const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
       <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
     <main>
        {!contactSelected ? (
          <>
            <Portfolio currentCategory={currentCategory}></Portfolio>
            <Resume></Resume>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
