import React from 'react';

import './Filters.scss';

class Filters extends React.Component {

  render() {
    return (
      <div className='Filters'>
        <div className='Filters__buttons'>
          <a className='Filters__button Filters__button--active' href=''>
            All Rockets
          </a>
          <a className='Filters__button' href=''>
            Falcon9
          </a>
          <a className='Filters__button' href=''>
            FalconHeavy
          </a>
          <a className='Filters__button' href=''>
            Dragon
          </a>
        </div>
      </div>
      );
  }
}

export default Filters;
