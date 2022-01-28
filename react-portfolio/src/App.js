import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/Contact';

function App() {
   // Using useState, set the default value for currentPage to 'Home'
   const [cpage, handlePageChange] = useState('About');

   // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (cpage) {
      case 'Contact':
        return <ContactForm />;
      case 'Portfolio':
        return <Portfolio/>;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };
  console.log(cpage);
    return (
      <div>
           {/* Pass the state value and the setter as props to NavTabs */}
           <Nav cpage={cpage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
       <main>{renderPage(cpage)}</main>
        <Footer></Footer>
      </div>
    );
  }  
export default App;
