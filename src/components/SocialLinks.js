import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin

} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.facebook.com/philip.bankier">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/philip-bankier">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/philipbankier">
        <FaInstagram />
      </a>
    </li>
    <li>
      <a href="https://github.com/pbindustries">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
