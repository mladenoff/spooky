import React from 'react';
import Mailto from 'react-mailto';

const FooterNav = () => (
  <nav>
    <div className="footer-text">
      Flashlight icon made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"target="_blank">CC 3.0 BY</a> | <a href="https://thenounproject.com/kozinn/collection/media-player/">Audio control icons</a> by <a href="https://thenounproject.com/kozinn">Nikita Kozin</a> from the <a href="https://thenounproject.com">Noun Project</a>
    </div>
    <span>
      <a href="http://github.com/mladenoff/spooky" target="_blank">
        <i className="fa fa-github footer-icon" aria-hidden="true"></i>
      </a>
      <a href="https://www.linkedin.com/in/isakmladenoff/" target="_blank">
        <i className="fa fa-linkedin footer-icon" aria-hidden="true"></i>
      </a>
      <Mailto email="isak@mladenoff.xyz" obfuscate={true}>
        <i className="fa fa-envelope footer-icon" aria-hidden="true"></i>
      </Mailto >
    </span>
  </nav>
);

export default FooterNav;
