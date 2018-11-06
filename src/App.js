import React, { Component } from 'react';
import './App.css';
import Cities from './Cities/Cities';

import axios from 'axios';

class App extends Component {
  state = {
    cities: [],
    inputValue: '',
  };

  delCity = (event) => {
    let del = event.target.id;
    console.log(del);
    this.setState (
        prev => ({
            cities: prev.cities.filter(el => el.id !== +del)
        })
    )
  };

  inputChange = (event) => {
    let inputCity = event.target.value;
    this.setState ({
        inputValue: inputCity
    })
  };

  addCity = (event) => {
    event.preventDefault();
    let newCity = {
      name: this.state.inputValue,
        id: Date.now(),
    };
    this.setState (
        prev => ({
            cities: [newCity,...prev.cities],
            inputValue: ''
        })
    )
  };

  componentDidMount() {
    let config = {
      method: 'get',
      headers: {
            'Authorization': 'Basic YXBwbGVtaW50OmFwcGxlbWludA==',
        },
    };
    axios.get("https://lenovo-shop.applemint.eu/api/cities", config)
        // .then(info => console.log(info))
        .then(info => {
          this.setState ({
              cities: info.data.data,
          })
        })
        .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.addCity}>
          <input type="text" onChange={this.inputChange} value={this.state.inputValue} className="text"/>
          <input type="submit" value="Submit" className="submit"/>
        </form>



        <Cities cityInfo={this.state.cities} delCity={this.delCity}/>
      </div>
    );
  }
}

export default App;
