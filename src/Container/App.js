import React, { Component } from "react";
import Main from "../Components/Main/Main";
import "./App.css";
import Header from "../Components/Header";

export default class App extends Component {
  state = {
    countries: [],
    totalNumber: 967884
  };

 
  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(data.Countries);
        console.log(data.Countries[3]);

        this.setState({
          countries: data.Countries,
          filteredResults: data.Countries
        });
      });
  }

  render() {
    return (
      <>
        <Header />
        <Main
          totalNumber={this.state.totalNumber}
          countries={this.state.countries}
        />
      </>
    );
  }
}
