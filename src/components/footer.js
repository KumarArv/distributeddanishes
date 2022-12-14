import React from "react";
import './footer.css';

function Footer() {

  return (
    <footer class="page-footer grey darken-2" >
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <p class="white-text">All our ingredients are ethically sourced and prepared with the utmost care!</p>
            <p class="white-text">If you are not satisfied with your purchase, please contact us.</p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li><a class="white-text" href="/contact">Contact us</a></li>
              <li><a class="white-text" href="/about">About us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2022 Distributed Danishes LLC
        </div>
      </div>
    </footer>
  );

}

export default Footer;
