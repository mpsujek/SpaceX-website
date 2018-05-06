import React from 'react';

class LaunchPad extends React.Component {

  render() {
    return (<div className='LaunchPad'>
      <h2>
        Launch Pad
      </h2>
      <div className='dataContainer dataContainer--launchPad'>
        <div className='data'>{this.props.launchPadName}</div>
        <div className='data'>{this.props.launchPadLocationName}/{this.props.launchPadLocationRegion}</div>
      </div>
      <div>{this.props.launchPadDetails}</div>
    </div>);
  }
}

export default LaunchPad;
