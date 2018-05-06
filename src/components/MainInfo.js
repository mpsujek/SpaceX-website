import React from 'react';
// import PropTypes from 'prop-types';

import './MainInfo.scss';

class MainInfo extends React.Component {

  render() {
    return (
    <div className='maininfo'>
        <div className='date'>
            {this.props.date}
        </div>
        <div className='title'>
            {this.props.title}
        </div>
        <div className='counter'>

        </div>
        <img className='missionPatch' src={this.props.missionPatch}></img>
    </div>
    );
  }
}

export default MainInfo;
