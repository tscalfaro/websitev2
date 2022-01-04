import React from "react";

export const About = () => {
  return (
    <div className="about-outter-div">
      <div className="about-left-div">
        <h2>Who am I? What's my story?</h2>

        <a href="#journey">
          <button className="resume-btn">My Journey ↷ </button>
        </a>
      </div>
      <div className="about-right-div">
        <h3>My name is Tony Scalfaro.</h3>
        <p>
          I am a recent graduate of FullStack Academy and a professional
          Software Engineer. After my military enlistment, I attended Temple
          University. Though my time there was put on pause to attend FullStack,
          I will be back to finish the remaining year part-time. This wild
          journey has given me so many different tools to lean on in a variety
          of situations. I have strong experience in javascript, react, and
          express. I also have experience in relational database management and
          creation using PostgresQL. I am looking for a work environment that
          keeps me interested in learning more every day, pushes the boundaries
          of my ability, and elevates me to new heights as much as I will help
          them achieve new heights.
        </p>
      </div>
    </div>
  );
};
export default About;
