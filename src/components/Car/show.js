import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Show extends Component {
  render() {
    return (
      <Link to={`/car/${this.props.id}`}>
      <div className="box">
        <div className="pri">
          <h2>{this.props.title}</h2>
          <div className="sub">
            <h3>{this.props.model}</h3>
            <h3>{this.props.brand}</h3>
            <h3>{this.props.km} KM</h3>
          </div>
        </div>
        <div className="sec">
          <h2>R${this.props.price}</h2>
          <div className="sub2">
            <h3>{this.props.year}</h3>
          </div>
        </div>
      </div>
      </Link>
    );
  }
}
