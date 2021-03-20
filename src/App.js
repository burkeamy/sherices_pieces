import React from 'react';
import Header from './components/header/header.component'
import './App.css';

import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/about/about.component';

class App extends React.Component {
  
  render () {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={ HomePage }/>
          <Route path='/about' component={ AboutPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
