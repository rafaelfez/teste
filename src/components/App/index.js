import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import '../../assets/styles/Shared.css';

import List from './../List';
import Form from './../Car/form';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="menu">
            <Link to="/"> <h1></h1> </Link>
          </div>
          <div className="app">
            <div className="banner">
              Pesquisa de veículos do TradersClub
            </div>
            <Switch>
              <Route exact path="/" component={List} />
              <Route path="/car/:id" component={Form} />
              <Route path="/car" component={Form} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
