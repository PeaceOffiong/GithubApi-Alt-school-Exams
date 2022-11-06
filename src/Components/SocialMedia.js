import React from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="socials">
      <ul className="icons">
        <li>
          <a href="https://www.facebook.com">
            <FaFacebookSquare />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.behance.com">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
