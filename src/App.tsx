import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingDisplay from './views/LandingDisplay/index';
import WeatherDashboard from './views/WeatherDashboard/index';
import { Location } from './views/LandingDisplay/index.interface';
import Header from './components/Header';
import './scss/style.scss';

const App = () => {
  const [userLocation, setUserLocation] = useState<Location>();
  return (
    <div className='main-container'>
      <Router>
        <Header setUserLocation={setUserLocation} />
        <Switch>
          <Route exact={true} path='/' component={() => <LandingDisplay userLocation={userLocation} />} />
          <Route exact={true} path='/dashboard' component={() => <WeatherDashboard/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default React.memo(App);
