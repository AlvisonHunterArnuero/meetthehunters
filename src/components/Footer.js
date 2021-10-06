import React from "react";
const Footer = () => {
  return (
      <footer class='footer bg-sucess'>
        <div class='d-flex justify-content-center text-warning'>
          <p>
            Copyright © {new Date().getFullYear()}, All Rights Reserved - Coded
            by Alvison Hunter using ReactJS.
          </p>
        </div>
      </footer>
  );
};

export default Footer;
