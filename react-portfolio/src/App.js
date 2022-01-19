import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
function App() {
//use state
const [categories] = useState([
  {
    name: 'portfolio',
    description: 'Full Stack application projects',
  },
  { name: 'resume', description: 'Technologies mastered' },
]);

const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
       <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
      <Portfolio currentCategory={currentCategory}></Portfolio>
      <Resume></Resume>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
