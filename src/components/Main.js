import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import YoutubeApp from './youtube'

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/youtube' component={YoutubeApp}/>
      </Switch>
    </main>
  );
};

export default Main;
