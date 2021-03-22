import React from 'react';
import Header from './components/header/header.component'
import './App.css';

import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/about/about.component';
import HomePage2 from './pages/homepage2/homepage2.component';
import Faq from './pages/faq/faq.component';
import ItemGallery from './pages/item-gallery/item-gallery.component';

class App extends React.Component {
  
  render () {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={ HomePage }/>
          <Route exact path='/homepage2' component={ HomePage2 } />
          <Route path='/items' component={ ItemGallery }/>
          <Route path='/about' component={ AboutPage}/>
          <Route path='/faq' component={ Faq}/>
        </Switch>
      </div>
    );
  }
}

export default App;
