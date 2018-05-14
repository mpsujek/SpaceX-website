import React from 'react';
import LaunchesHeader from '../components/LaunchesHeader';
import Filters from '../components/Filters';
import FlightList from '../components/FlightList';
import Footer from '../components/Footer';

class LaunchesList extends React.Component {


  render() {
    return (
        <div>
          <LaunchesHeader title='Launches 2018'/>
          <Filters/>
          <FlightList
            onLaunchClick = {this.props.onLaunchClick}
          />
          <Footer/>
        </div>);
  }
}

export default LaunchesList;
