import React from 'react';
// import PropTypes from 'prop-types';

import './MissionLinks.scss';

class MissionLinks extends React.Component {

  render() {
    return (<div className='MissionLinks'>
      <div className='titleContainer'>
        <div className='Title'>{this.props.title}</div>
      </div>
      {/* <MissionButton  /> */}
      <div className='linksContainer'>
        <a target='_blank' className='links' href={this.props.link1}>Reddit Campaign</a>
        <a target='_blank' className='links' href={this.props.link2}>Presskit</a>
        <a target='_blank' className='links' href={this.props.link3}>Mission Video</a>
        {/* <div>{this.props.flight_number}</div> */}
      </div>
    </div>);
  }
}

export default MissionLinks;
