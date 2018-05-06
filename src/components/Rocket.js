import React from 'react';
// import './Rocket.scss';

class Rocket extends React.Component {

  render() {
    return (<div>
      <h2>Rocket</h2>
      <div className='dataContainer'>
        <div className='data'>
          <span>Name:</span>{this.props.rocketName}</div>
        <div className='data'>
          <span>Company:</span>{this.props.rocketCompany}</div>
        <div className='data'>
          <span>Height:</span>{this.props.rocketHeightMeters}M / {this.props.rocketHeightFeet}FT</div>
        <div className='data'>
          <span>Diameter:</span>{this.props.rocketDiametersM}M / {this.props.rocketDiametersFT}FT</div>
        <div className='data'>
          <span>Mass:</span>{this.props.rocketMassKg}KG / {this.props.rocketMassLb}LB</div>
        <div className='data'>
          <span>First Flight:</span>{this.props.rocketFirstFlight}</div>
        <div className='data'>
          <span>Country:</span>{this.props.rocketCountry}</div>
        <div className='data'>
          <span>Success rate:</span>{this.props.rocketSuccessRate}%</div>
        <div className='data'>
          <span>Cost Per Launch:</span>${this.props.rocketCostPerLaunch}</div>
        <div className='data'>
          <span></span>
        </div>
      </div>
      <div>{this.props.rocketDescription}</div>
    </div>);
  }
}

export default Rocket;
