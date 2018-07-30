import React, { Component } from 'react';
import axios from 'axios';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default class Form extends Component {
  state = {
    title: '',
    model: '',
    year: '',
    brand: '',
    color: '',
    price: '',
    km: '',
    allBrands: []
  }

  componentDidMount() {
    this.loadBrands();
    this.loadCarInfo();
  }

  loadBrands = async () => {
    const response = await api.get('/brands');
    this.setState({ allBrands: response.data.brands });
  }

  loadCarInfo = async () => {
    const { id } = this.props.match.params;
    const response = await api.get(`/cars/${id}`);
    const { title, model, year, brand, color, price, km } = response.data;
    this.setState({ title, model, year, brand, color, price, km });
    console.log(response);
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  addCar = () => {
    const { title, model, year, brand, color, price, km } = this.state;

    axios
      .post(`http://tchml.tradersclub.com.br:12000/api/cars`, {
        title,
        model,
        year,
        brand,
        color,
        price,
        km
      })
      .then(res => {
        console.log(res)
        console.log(res.data)
      });

    this.props.history.push('/');
  };

  deleteCar = () => {
    const { id } = this.props.match.params

    axios
      .delete(`http://tchml.tradersclub.com.br:12000/api/cars/${id}`)
      .then(res => {
        console.log(res)
        console.log(res.data)
      });

    this.props.history.push('/');
  };

  render() {
    const { title, model, year, brand, color, price, km, allBrands } = this.state;
    return (
      <div className="form">
        <form>
          <input
            name="title"
            type="text"
            placeholder="Título"
            value={title}
            onChange={this.onChange}
          />
          <input
            name="model"
            type="text"
            placeholder="Modelo"
            value={model}
            onChange={this.onChange}
          />
          <input
            name="year"
            type="text"
            placeholder="Ano"
            value={year}
            onChange={this.onChange}
          />
          <select
            name="brand"
            onChange={this.onChange}
            value={brand}
            className="button"
          >
            <option value="">Selecione</option>
              {
                allBrands.map(option => (
                  <option value={option.name}>{option.name}</option>
                ))
              }
          </select>
          <input
            name="color"
            type="text"
            placeholder="Cor"
            value={color}
            onChange={this.onChange}
          />
          <input
            name="price"
            type="text"
            placeholder="Preço"
            value={price}
            onChange={this.onChange}
          />
          <input
            name="km"
            type="text"
            placeholder="Quilometragem"
            value={km}
            onChange={this.onChange}
          />
          <br />
          <Link to="/"><input type="submit" className="button" value="Cancelar" /></Link>
          <input type="submit" className="button" value="Remover" onClick={this.deleteCar} />
          <input type="submit" className="button" value="Salvar" onClick={this.addCar} />
        </form>
      </div>
    );
  }
}
