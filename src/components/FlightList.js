import React from 'react';
import format from 'date-fns/format';

import './FlightList.scss';

class FlightList extends React.Component {

  render() {
    return (
      <div className='FlightList'>
        <div className='FlightList__dataContainer' onClick={this.props.onLaunchClick}>
          <div className='FlightList__date'>24 March 2006 </div>
        <div className='FlightList__data'>
          <div className='FlightList__rocket'>Rocket:<span>Falcon 1</span></div> |
          <div className='FlightList__launch-site'> Launch Site: KWAJALEIN ATOLL OMELEK ISLAND</div>
        <div></div>
        </div>

        </div>
      </div>
      );
  }
}

export default FlightList;
