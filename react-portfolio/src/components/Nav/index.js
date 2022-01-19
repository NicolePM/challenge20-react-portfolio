import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
  const  categories = [
    { name: 'portfolio', description: 'Full Stack projects I completed.' },
     { name: 'resume', description: 'Technologies mastered' }
    // { name: 'photography', description: 'Photos Taken' }
  ];

  const handleClick = () => {
    console.log("click handled")
  }

  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
          Nicole M. React Portfolio
      </h2>
      <nav>
        <ul className="flex-row">
          <li>
            <a href="#about" onClick={() => handleClick()}>
              About me
            </a>
          </li>
          <li>
            <span onClick={() => handleClick()}>
              Contact
            </span>
          </li>
          {
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                <span onClick={() => { handleClick(); }}>
                 {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

export default Nav;