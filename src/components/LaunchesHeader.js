import React from 'react';

import './LaunchesHeader.scss';

class LaunchesHeader extends React.Component {

  render() {
    return (
      <div className='LaunchesHeader'>
        <div className='LaunchesHeader__container'>
          <div className='LaunchesHeader__logo'>
            <img src={require('../assets/space_x_logo_bw_centered.png')}></img>
            <div className='LaunchesHeader__title'>
              {this.props.title}
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default LaunchesHeader;
