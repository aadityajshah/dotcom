import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faLinkedin, faTwitterSquare, faGitSquare, faInstagramSquare, faYelp } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'


//import { Test } from './Navigation.styles';

class Navigation extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

 

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="NavigationWrapper">
        <Link
          href="/AJShah-2021.pdf"
          alt="Resume"
          title="Resume"
          >
          <a><FontAwesomeIcon icon={faFile} height="16" className="fa_icon" /></a>
        </Link>
        <Link
          href="#"
          alt="blog coming soon"
          >
          <a><FontAwesomeIcon icon={faBookOpen} width="16" className="fa_icon" /></a>
        </Link>
        <Link 
            href="https://www.linkedin.com/in/aadityajshah"
            target="_blank"
            rel="noreferrer"
            >
             <a><FontAwesomeIcon icon={faLinkedin} width="16" className="fa_icon" /></a>
        </Link>
        <Link 
            href="https://www.facebook.com/nagarseth"
            target="_blank"
            rel="noreferrer"
            >
              <a><FontAwesomeIcon icon={faFacebookSquare} width="16" className="fa_icon" /></a>
        </Link>
        <Link
            href="https://www.twitter.com/nagerseth"
            target="_blank"
            rel="noreferrer"
            >
              <a><FontAwesomeIcon icon={faTwitterSquare} width="16" className="fa_icon" /></a>
        </Link>
        <Link
            href="https://www.github.com/aadityajshah"
            target="_blank"
            rel="noreferrer"
            >
              <a><FontAwesomeIcon icon={faGitSquare} width="16" className="fa_icon" /></a>
        </Link>
        <Link
            href="https://www.instagram.com/nagerseth"
            target="_blank"
            rel="noreferrer"
            >
            <a><FontAwesomeIcon icon={faInstagramSquare} width="16" className="fa_icon" /></a>
        </Link>
        <Link
            href="https://www.yelp.com/user_details?userid=LURpBEvYVQh-ZAfZmkxeCg"
            target="_blank"
            rel="noreferrer"
            >
            <a><FontAwesomeIcon icon={faYelp} height="16" className="fa_icon" /></a>
        </Link>
      </div>
    );
  }
}

Navigation.propTypes = {
  // bla: PropTypes.string,
};

Navigation.defaultProps = {
  // bla: 'test',
};

export default Navigation;
