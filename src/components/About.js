import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          Motivated Software/DevOps Engineer with solid technical skills enabling me to contribute to your organization's projects by solving its challenges. By developing according to best practices I ensure maximum reliability, reusability and overall code integrity.
          <br/>
          Checkout my Projects at:
          <br/>
            - https://github.com/pbindustries
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Philip Bankier</span>
              <br />
              <span>
                Potomac, MD <br/>
                United States of America
              </span>
              <br />
              <span>pbindustriesapps@gmail.com</span>
              <br />
              <span>github.com/pbindustries</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="https://resume.creddle.io/resume/9i1hnd4rsyq" className="button">
                <FaCloudDownload /> My Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
