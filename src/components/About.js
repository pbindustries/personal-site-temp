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
            Motivated Software Engineer with solid technical skills enabling me to contribute to your organization's projects by solving its challenges. By developing according to best practices I ensure maximum reliability, reusability and overall code integrity. Recently I've been specializing in Elastic Stack development and intend to be certified in Elasticsearch by November 2018.
            Checkout my Projects at:
            - https://github.com/pbindustries
            - https://github.com/philipbankier
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
              <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fresume.creddle.io%2Fresume%2F9i1hnd4rsyq&h=AT1JlLufAGO0VfG_IJSrlt0wsWuDVE2PiNjvcU1Iq7YxNndMQ1BmFiTE_4IFHawBqPUDtQacw3gODva2DeI6Yf_Fwusfhz1Lh9lUGex-a5Xx79x-e2MmK4Cl0fsPfmHLvLoXM8md" className="button">
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
