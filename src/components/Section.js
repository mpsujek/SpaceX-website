import React from 'react';

import './Section.scss';
import MainInfo from './MainInfo';
import Details from './Details';
import Rocket from './Rocket';
import LaunchPad from './LaunchPad';

class Section extends React.Component {

  render() {
    return (<div className='container'>
      <MainInfo date={this.props.date} title={this.props.title} missionPatch={this.props.missionPatch}/>
    <div className='details'>
        <Details details={this.props.details}/>
      <Rocket rocketName={this.props.rocketName} rocketCompany={this.props.rocketCompany} rocketHeightMeters={this.props.rocketHeightMeters} rocketHeightFeet={this.props.rocketHeightFeet} rocketDiametersM={this.props.rocketDiametersM} rocketDiametersFT={this.props.rocketDiametersM} rocketMassKg={this.props.rocketMassKg} rocketMassLb={this.props.rocketMassLb} rocketFirstFlight={this.props.rocketFirstFlight} rocketCountry={this.props.rocketCountry} rocketSuccessRate={this.props.rocketSuccessRate} rocketCostPerLaunch={this.props.rocketCostPerLaunch} rocketDescription={this.props.rocketDescription}/>
    <LaunchPad launchPadName={this.props.launchPadName} launchPadLocationName={this.props.launchPadLocationName} launchPadLocationRegion={this.props.launchPadLocationRegion} launchPadDetails={this.props.launchPadDetails}/>
      </div>
    </div>);
  }
}

export default Section;
