import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CustomNavbar from './component/CustomNavbar';
import Footer from './component/Footer';
import Home from './component/Home';
import Service from './component/Service';
import Project from './component/Project';
import Details from './component/Details';
import Contact from './component/Contact';
import Error from './component/Error';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <CustomNavbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/service" component={Service} />
            <Route path="/project" component={Project} />
            <Route path="/details" component={Details} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
