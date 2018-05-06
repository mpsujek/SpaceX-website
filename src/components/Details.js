import React from 'react';
// import PropTypes from 'prop-types';

import './Details.scss';

class Details extends React.Component {

  render() {
    return (
        <div>
            <h2>
                Details
            </h2>
            <p>
                {this.props.details}
            </p>
        </div>
    );
  }
}

export default Details;
