import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import MissionLinks from '../components/MissionLinks';
import Footer from '../components/Footer';
import format from 'date-fns/format';


class LaunchDetails extends React.Component {

  render() {
    return (
        <div>
      <Header message='Back' onBackClick={this.props.onBackClick}/>
      <Section
          date={format(this.props.launch.launch_date_local, 'DD MMMM YYYY')}
          title={this.props.launch.launch_site.site_name}
          missionPatch={this.props.launch.links.mission_patch}
          details={this.props.launch.details}
          rocketName={this.props.rocket.name}
          rocketCompany={this.props.rocket.company}
          rocketHeightMeters={this.props.rocket.height.meters}
          rocketHeightFeet={this.props.rocket.height.feet}
          rocketMassKg={this.props.rocket.mass.kg}
          rocketMassLb={this.props.rocket.mass.lb}
          rocketDiametersM={this.props.rocket.diameter.meters}
          rocketDiametersFT={this.props.rocket.diameter.feet}
          rocketFirstFlight={this.props.rocket.first_flight}
          rocketCountry={this.props.rocket.country}
          rocketSuccessRate={this.props.rocket.success_rate_pct}
          rocketCostPerLaunch={this.props.rocket.cost_per_launch}
          rocketDescription={this.props.rocket.description}
          launchPadName={this.props.launchSite.full_name}
          launchPadLocationName={this.props.launchSite.location.name}
          launchPadLocationRegion={this.props.launchSite.location.region}
          launchPadDetails={this.props.launchSite.details}
          />
      <MissionLinks title='mission links' link1={this.props.launch.links.reddit_campaign} link2={this.props.launch.links.presskit} link3={this.props.launch.links.video_link}/>
      <Footer/>
    </div>);
  }
}

export default LaunchDetails;
