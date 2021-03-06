import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpeg";
import avatarImage from "../../assets/avatar/avatar.jpeg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={avatarImage} style={{ width: "25%", height: "25%" }} alt="avatar" />
      <div className="my-2" style={{ width: "100%" }}>
        <h3>Bio</h3>
        <div className='bio'></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </section>
  );
}

export default About;