import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div class="container">
      <div class="row align-items-start">
    <div class="col">
    <a href={process.env.PUBLIC_URL+"/images/AnushaRavva_Resume.pdf"} download="Anusha_Resume" class="contact-card"><i class="fas fa-file-pdf"></i>  Resume</a>
    </div>
    <div class="col">
    <a href="https://github.com/anurav18/" target="_blank" class="contact-card"><i class="fab fa-github"></i>  gitHub </a>
    </div>
    <div class="col">
    <a href="https://www.linkedin.com/in/anusha-r-068011123/" target="_blank" class="contact-card"><i class="fab fa-linkedin-in"></i>  linkedIn </a>
    </div>
    <div class="col">
   <a href=""> <i class="fas fa-envelope-open-text"></i> anusharavva@gmail.com </a>
    </div>
  </div>

      </div>
    </footer>
  );
}

export default Footer;
