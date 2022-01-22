import React from 'react';
import PhotoList from '../PhotoList';
//import { capitalizeFirstLetter } from '../../utils/helpers';


function Portfolio(props) {
    const { currentCategory } = props;
    return (
      <section data-testid="portfolio">
        <h1 data-testid="h1tag">Full Stack Application Projects</h1>
        <p>{currentCategory.description}</p>
        <PhotoList category={currentCategory.name} />
      </section>
    );
}
export default Portfolio;