import React from 'react';
import PhotoList from '../PhotoList';
//import { capitalizeFirstLetter } from '../../utils/helpers';


function Portfolio(props) {
  //  const { currentCategory } = props; Not needed due to category having the same name
    return (
      <section data-testid="portfolio">
        <h1 data-testid="h1tag">Full Stack Application Projects</h1>
        <PhotoList category="portfolio" />
      </section>
    );
}
export default Portfolio;