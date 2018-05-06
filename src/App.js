import { hot } from 'react-hot-loader';
import * as React from 'react';

import launch from './assets/launch.json';
import launchSite from './assets/launch_site.json';
import rocket from './assets/rocket.json';

import LaunchDetails from 'view/LaunchDetails';



import './styles/theme.scss';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <main>
        {/* <Header message="go back"/> */}
        {/* <Home username="DaftCoder" /> */}
        {/* <Counter from={4} to={1} onSuccess={() => alert("success!")}/> */}
        {/* <Hello message="my Friend"/> */}
        <LaunchDetails
              launch={launch}
              launchSite={launchSite}
              rocket={rocket}
            />
      </main>
    );
  }
}

export default hot(module)(App);
