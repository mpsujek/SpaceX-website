import React from 'react';

import './Footer.scss';

class Footer extends React.Component {

  render() {
    return (<footer>
      <div className='links'>
        follow spacex
        <a target='_blank' href='https://twitter.com/spacex'>Twitter</a>
      <a target='_blank' href='https://www.youtube.com/channel/UCtI0Hodo5o5dUb67FeUjDeA'>Youtube</a>
    <a target='_blank' href='https://www.flickr.com/photos/spacex/'>flickr</a>
  <a target='_blank' href='https://www.instagram.com/spacex/?hl=pl'>Instagram</a>
      </div>
      <div className='space'></div>
      <div className='rights'>2018 space exploration technologies corp.</div>
    </footer>);
  }
}

export default Footer;
