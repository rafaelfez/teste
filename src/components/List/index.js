import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Shared.css';
import api from './../../services/api';

import Show from './../Car/show';

export default class List extends Component {
  state = {
      data: [],
      search: '',
  };

  componentDidMount() {
      this.loadCars();
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  loadCars = async () => {
      const response = await api.get(`/cars?search=`);

      this.setState({ data: response.data.cars });
  };

  renderList = () => {
    try {
      const cars = this.state.data;

      const filterCars = cars.filter((car) => {
        return car.title ? car.title.indexOf(this.state.search) !== -1: false;
      });

      const carsVetor = filterCars.map((car) => (
        <Show
          id={car.id}
          title={car.title}
          model={car.model}
          brand = {car.brand}
          km = {car.km}
          color = {car.color}
          price = {car.price}
          year = {car.year}
          key={car.id}
        />
      ));

      return (carsVetor);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
    <div>
      <div className="search">
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <Link to="/car"><button className="button">Cadastrar</button> </Link>
      </div>
        { this.renderList() }
    </div>
    );
  }
}
