import React from "react";
import { socialImgs } from "../constants/Constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>

        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <img
                src={socialImg.imgPath}
                alt="social icon"
                onClick={() => {
                  if (socialImg.name === "insta") {
                    window.open(
                      "https://www.instagram.com/er_omii_1923?igsh=M3JudTQ5OTYzZTM5",
                      "_blank"
                    );
                  } else if (socialImg.name === "linkedin") {
                    window.open(
                      "https://www.linkedin.com/in/omkar-bodhe-aab633227",
                      "_blank"
                    );
                  }
                }}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Omkar Bodhe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
