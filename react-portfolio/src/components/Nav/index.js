import React, { useEffect } from 'react';
//import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  //Nav tabs that I use in navigation
  const tabs = ['About', 'Contact', 'Porfolio', 'Resume'];


  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        Nicole M. React Portfolio
      </h2>
      <nav>
        <ul className="flex-row">
          {tabs.map(tab => (
            <li className="mx-2" key={tab}>
              <a
                href={'#' + tab.toLowerCase()}
                // Whenever a tab is clicked on,
                // the current page is set through the handlePageChange props.
                onClick={() => props.handlePageChange(tab)}
                className={
                  props.currentPage === tab ? 'navActive' : 'nav'
                }
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;