import React, { useState } from 'react';

const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: 'Full Stack Applications',
      category: 'portfolio',
      x: "300",
      y: "200",
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Coding Quiz',
      category: 'portfolio',
      x: "330",
      y: "200",
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Password Generator',
      category: 'portfolio',
      x: "350",
      y: "200",
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Weather API Dashboard',
      category: 'portfolio',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Mobile Ready Applications',
      category: 'portfolio',
      x: "300",
      y: "200",
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    }
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            style={{width: `${image.x}px`, height: `${image.y}px`}}
            src={require(`../../assets/apps/${image.category}/${i}.PNG`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
