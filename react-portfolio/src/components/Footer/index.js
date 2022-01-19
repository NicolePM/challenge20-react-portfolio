import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Footer() {
//   const  categories = [
//     { name: 'Twitter', description: 'My Twitter' },
//     { name: 'GitHub', description: 'My GitHub' },
//     { name: 'Email', description: 'My Email' }
//   ];

//   const handleClick = () => {
//     console.log("click handled")
//   }

  return (
    <footer data-testid="footer" className="footer">
    <ul>
    <li><a href="https://twitter.com/">Twitter</a></li>
    <li><a href="mailto:nicolembell@gmail.com">Email</a></li>
    <li><a href="https://github.com/NicolePM">Github</a></li>
    <li>
      <p>👋</p>
    </li>
  </ul>
    </footer>
  );
}

export default Footer;