import React from 'react';
// import PropTypes from 'prop-types';

import './Header.scss';

class Header extends React.Component {

  render() {
    return (<header>
      <div className='box'>
        <a className='link' href='#'>
          <img src={require('../assets/arrow_pointer.png')}></img>{`-- ${this.props.message}`}</a>
        <img className='spacex-logo' src={require('../assets/space_x_logo_bw_centered.png')}/>
      <div className='emptyelement'></div>
      </div>
    </header>);
  }
}

export default Header;
