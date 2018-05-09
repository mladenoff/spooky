import React from 'react';
import Obfuscate from 'react-obfuscate';

const FooterNav = () => (
  <nav>
    <div className="footer-text">
      Flashlight icon made by
      <a href="http://www.freepik.com" title="Freepik">
        Freepik
      </a>
      from
      <a href="http://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      is licensed by
      <a
        href="http://creativecommons.org/licenses/by/3.0/"
        title="Creative Commons BY 3.0"
        target="_blank"
        rel="noopener noreferrer"
      >CC 3.0 BY</a>
     |
      <a href="https://thenounproject.com/kozinn/collection/media-player/">
        Audio control icons
      </a>
      by
      <a href="https://thenounproject.com/kozinn">Nikita Kozin</a>
      from the
      <a href="https://thenounproject.com">Noun Project</a>
    </div>
    <span>
      <a
        href="http://github.com/mladenoff/spooky"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-github footer-icon" aria-hidden="true" />
      </a>
      <a
        href="https://www.linkedin.com/in/isakmladenoff/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-linkedin footer-icon" aria-hidden="true" />
      </a>
      <Obfuscate email="isak@mladenoff.io">
        <i className="fa fa-envelope footer-icon" aria-hidden="true" />
      </Obfuscate >
    </span>
  </nav>
);

export default FooterNav;
